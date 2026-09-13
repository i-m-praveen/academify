import { ReactNode } from "react";

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-primary-xlight px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
      {children}
    </span>
  );
}
