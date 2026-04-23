import { useState } from "react";

type FieldDef =
  | { type: "text" | "email"; label: string; value: string }
  | { type: "toggle"; label: string; value: boolean };

interface Section {
  section: string;
  fields: FieldDef[];
}

function ToggleSwitch({ on, onChange }: { on: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      onClick={() => onChange(!on)}
      className="shrink-0 transition-all"
      style={{
        width: "38px",
        height: "22px",
        borderRadius: "99px",
        background: on ? "var(--accent)" : "var(--bg-3)",
        padding: "2px",
        cursor: "pointer",
        border: "1px solid var(--border)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        className="w-[18px] h-[18px] rounded-full transition-all"
        style={{
          background: "#fff",
          marginLeft: on ? "16px" : "0",
          boxShadow: "var(--shadow-sm)",
        }}
      />
    </button>
  );
}

export default function SettingsPage() {
  const [sections, setSections] = useState<Section[]>([
    {
      section: "Profile",
      fields: [
        { type: "text",  label: "Full Name", value: "Xi Wang" },
        { type: "email", label: "Email",     value: "xw471@cam.ac.uk" },
        { type: "text",  label: "Role",      value: "HR Manager" },
      ],
    },
    {
      section: "Notifications",
      fields: [
        { type: "toggle", label: "Email alerts on risk flags",   value: true },
        { type: "toggle", label: "Weekly digest",                value: true },
        { type: "toggle", label: "Candidate status updates",     value: false },
      ],
    },
    {
      section: "Integrations",
      fields: [
        { type: "text", label: "ATS Connection",              value: "Greenhouse" },
        { type: "text", label: "Background Check Provider",   value: "Checkr" },
      ],
    },
  ]);

  function toggleField(sIdx: number, fIdx: number) {
    setSections((prev) =>
      prev.map((s, si) =>
        si !== sIdx
          ? s
          : {
              ...s,
              fields: s.fields.map((f, fi) =>
                fi !== fIdx || f.type !== "toggle" ? f : { ...f, value: !f.value }
              ),
            }
      )
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="p-5 max-w-[600px] flex flex-col gap-3.5">
        {sections.map((s, si) => (
          <div
            key={s.section}
            className="rounded-[12px] animate-fade-up"
            style={{
              background: "var(--bg-2)",
              border: "1px solid var(--border)",
              padding: "20px 22px",
              boxShadow: "var(--shadow-sm)",
              animationDelay: `${si * 60}ms`,
            }}
          >
            <div
              className="text-[13.5px] font-medium mb-3.5"
              style={{ color: "var(--fg)" }}
            >
              {s.section}
            </div>
            {s.fields.map((f, fi) => (
              <div
                key={f.label}
                className="flex items-center justify-between py-2.5"
                style={{
                  borderBottom:
                    fi < s.fields.length - 1 ? "1px solid var(--border-2)" : "none",
                }}
              >
                <span className="text-[13.5px]" style={{ color: "var(--fg-2)" }}>
                  {f.label}
                </span>
                {f.type === "toggle" ? (
                  <ToggleSwitch
                    on={f.value as boolean}
                    onChange={() => toggleField(si, fi)}
                  />
                ) : (
                  <span
                    className="text-[13.5px] font-medium"
                    style={{ color: "var(--fg)" }}
                  >
                    {f.value as string}
                  </span>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
