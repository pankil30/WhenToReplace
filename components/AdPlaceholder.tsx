"use client";

interface AdPlaceholderProps {
  size?: "leaderboard" | "large-rectangle" | "half-page" | "sidebar";
  label?: string;
}

export default function AdPlaceholder({
  size = "leaderboard",
  label,
}: AdPlaceholderProps) {
  const sizeClasses = {
    leaderboard: "h-[90px]",
    "large-rectangle": "h-[280px] max-w-[336px]",
    "half-page": "h-[600px] max-w-[300px]",
    sidebar: "h-[600px]",
  };

  const defaultLabels = {
    leaderboard: "ADSENSE DISPLAY AD — 728×90 LEADERBOARD",
    "large-rectangle": "ADSENSE — 336×280 LARGE RECTANGLE",
    "half-page": "ADSENSE — 300×600 HALF PAGE",
    sidebar: "ADSENSE SIDEBAR — 300×600 HALF PAGE",
  };

  return (
    <div className="w-full flex justify-center my-5">
      <div
        className={`${sizeClasses[size]} w-full bg-slate-100 border-2 border-dashed border-slate-300 rounded-lg flex items-center justify-center text-slate-400 text-xs font-semibold tracking-wide`}
      >
        {label || defaultLabels[size]}
      </div>
    </div>
  );
}
