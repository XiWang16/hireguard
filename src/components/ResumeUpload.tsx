import { useRef, useState } from "react";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import type { Id } from "../../convex/_generated/dataModel";
import { Upload } from "lucide-react";
import clsx from "clsx";

interface UploadItem {
  file: File;
  status: "pending" | "uploading" | "processing" | "done" | "error";
  candidateId?: Id<"candidates">;
  error?: string;
}

interface Props {
  jobId: Id<"jobs">;
  onComplete?: () => void;
}

export function ResumeUpload({ jobId, onComplete }: Props) {
  const [items, setItems] = useState<UploadItem[]>([]);
  const [dragging, setDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const generateUploadUrl = useMutation(api.functions.pipeline.generateUploadUrl);
  const submitCandidate = useMutation(api.functions.pipeline.submitCandidate);

  const processFiles = async (files: File[]) => {
    const pdfFiles = files.filter((f) => f.type === "application/pdf");
    if (pdfFiles.length === 0) return;

    const newItems: UploadItem[] = pdfFiles.map((f) => ({ file: f, status: "pending" }));
    setItems((prev) => [...prev, ...newItems]);

    for (let i = 0; i < newItems.length; i++) {
      const item = newItems[i];
      const idx = items.length + i;

      setItems((prev) =>
        prev.map((it, j) => (j === idx ? { ...it, status: "uploading" } : it))
      );

      try {
        const uploadUrl = await generateUploadUrl();
        const uploadRes = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": "application/pdf" },
          body: item.file,
        });
        const { storageId } = (await uploadRes.json()) as { storageId: Id<"_storage"> };

        const name = item.file.name.replace(/\.pdf$/i, "").replace(/[-_]/g, " ");
        setItems((prev) =>
          prev.map((it, j) => (j === idx ? { ...it, status: "processing" } : it))
        );

        const candidateId = await submitCandidate({
          name,
          email: `${name.toLowerCase().replace(/ /g, ".")}@applicant.example`,
          jobId,
          resumeFileId: storageId,
        });

        setItems((prev) =>
          prev.map((it, j) =>
            j === idx ? { ...it, status: "done", candidateId } : it
          )
        );
      } catch (err) {
        setItems((prev) =>
          prev.map((it, j) =>
            j === idx
              ? { ...it, status: "error", error: (err as Error).message }
              : it
          )
        );
      }
    }

    onComplete?.();
  };

  return (
    <div className="space-y-4">
      <div
        className={clsx(
          "border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors",
          dragging ? "border-gray-400 bg-gray-50" : "border-gray-200 hover:border-gray-300"
        )}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          processFiles(Array.from(e.dataTransfer.files));
        }}
        onClick={() => inputRef.current?.click()}
      >
        <Upload className="mx-auto mb-2 text-gray-400" size={24} />
        <p className="text-sm text-gray-600">
          Drag & drop PDF resumes, or <span className="text-gray-800 font-medium">browse</span>
        </p>
        <p className="text-xs text-gray-400 mt-1">Supports batch upload</p>
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          multiple
          className="hidden"
          onChange={(e) => processFiles(Array.from(e.target.files ?? []))}
        />
      </div>

      {items.length > 0 && (
        <div className="space-y-1 max-h-48 overflow-y-auto">
          {items.map((item, i) => (
            <div key={i} className="flex items-center gap-3 py-1.5 px-3 rounded bg-gray-50 text-sm">
              <span className="flex-1 truncate text-gray-700">{item.file.name}</span>
              <span
                className={clsx("text-xs", {
                  "text-gray-400": item.status === "pending",
                  "text-blue-500": item.status === "uploading",
                  "text-yellow-600": item.status === "processing",
                  "text-green-600": item.status === "done",
                  "text-red-500": item.status === "error",
                })}
              >
                {item.status === "error" ? item.error : item.status}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
