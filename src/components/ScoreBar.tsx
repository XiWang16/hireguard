import clsx from "clsx";

interface ScoreBarProps {
  label: string;
  score: number;
  showLabel?: boolean;
}

export function ScoreBar({ label, score, showLabel = true }: ScoreBarProps) {
  const color =
    score >= 75 ? "bg-green-500" : score >= 50 ? "bg-yellow-500" : "bg-red-400";

  return (
    <div className="flex items-center gap-3">
      {showLabel && (
        <span className="text-xs text-gray-500 w-24 shrink-0">{label}</span>
      )}
      <div className="flex-1 bg-gray-100 rounded-full h-1.5">
        <div
          className={clsx("h-1.5 rounded-full transition-all", color)}
          style={{ width: `${Math.min(100, Math.max(0, score))}%` }}
        />
      </div>
      <span className="text-xs font-medium text-gray-700 w-8 text-right">{score}</span>
    </div>
  );
}
