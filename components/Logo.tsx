import Link from "next/link";

/**
 * Abstract mark: a shield silhouette with an embedded checkmark and a small
 * ascending bar-chart motif, standing in for "verified, data-backed assessment."
 */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Academify mark"
    >
      <path
        d="M20 2L34 7V18C34 27.4 28.2 34.6 20 38C11.8 34.6 6 27.4 6 18V7L20 2Z"
        fill="var(--c-primary)"
      />
      <path
        d="M20 2L34 7V18C34 27.4 28.2 34.6 20 38V2Z"
        fill="var(--c-primary-dark)"
        fillOpacity="0.35"
      />
      <rect x="13" y="21" width="3.2" height="7" rx="1" fill="var(--c-white)" opacity="0.85" />
      <rect x="18.4" y="17" width="3.2" height="11" rx="1" fill="var(--c-white)" opacity="0.9" />
      <path
        d="M13.5 15.5L17.5 19.5L26 10"
        stroke="var(--c-white)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`font-heading font-bold tracking-tight ${className ?? ""}`}>
      Academi<span className="text-primary">fy</span>
    </span>
  );
}

export function Logo({
  className,
  markClassName,
  wordmarkClassName,
}: {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 focus-ring rounded-xs ${className ?? ""}`}
      aria-label="Academify home"
    >
      <LogoMark className={markClassName ?? "h-8 w-8"} />
      <Wordmark className={wordmarkClassName ?? "text-xl text-ink"} />
    </Link>
  );
}
