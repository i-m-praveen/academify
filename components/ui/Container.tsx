import { HTMLAttributes } from "react";

export function Container({
  className = "",
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={`mx-auto w-full max-w-8xl px-6 sm:px-8 lg:px-12 ${className}`} {...props}>
      {children}
    </div>
  );
}
