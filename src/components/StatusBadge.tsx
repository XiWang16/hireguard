import clsx from "clsx";

type Status = "received" | "parsing" | "evaluated" | "shortlisted" | "rejected" | "hired" | "open" | "closed" | "paused";

const statusStyles: Record<Status, string> = {
  received: "bg-gray-100 text-gray-600",
  parsing: "bg-blue-50 text-blue-600",
  evaluated: "bg-yellow-50 text-yellow-700",
  shortlisted: "bg-green-50 text-green-700",
  rejected: "bg-red-50 text-red-600",
  hired: "bg-emerald-50 text-emerald-700",
  open: "bg-green-50 text-green-700",
  closed: "bg-gray-100 text-gray-600",
  paused: "bg-yellow-50 text-yellow-700",
};

export function StatusBadge({ status }: { status: Status }) {
  return (
    <span
      className={clsx(
        "inline-flex items-center px-2 py-0.5 rounded text-xs font-medium capitalize",
        statusStyles[status] ?? "bg-gray-100 text-gray-600"
      )}
    >
      {status}
    </span>
  );
}
