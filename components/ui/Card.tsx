import { HTMLAttributes } from "react";

export function Card({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={`rounded bg-white border border-border shadow-sm ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
