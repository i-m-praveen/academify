import Image from "next/image";
import { ImageIcon } from "lucide-react";

export function PlaceholderVisual({
  label,
  src,
  className = "",
  aspect = "aspect-[16/10]",
}: {
  label: string;
  src?: string;
  className?: string;
  aspect?: string;
}) {
  if (src) {
    return (
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-lg border border-border shadow-sm ${className}`}
      >
        <Image
          src={src}
          alt={label}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
      </div>
    );
  }

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
