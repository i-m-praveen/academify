import { ImageIcon } from "lucide-react";

export function PlaceholderVisual({
  label,
  className = "",
  aspect = "aspect-[16/10]",
}: {
  label: string;
  className?: string;
  aspect?: string;
}) {
  return (
    <div
      className={`flex ${aspect} w-full flex-col items-center justify-center gap-3 rounded-lg border border-dashed border-primary/30 bg-primary-xlight px-6 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="h-8 w-8 text-primary/60" aria-hidden="true" />
      <p className="text-sm font-medium text-primary/70">{label}</p>
    </div>
  );
}
