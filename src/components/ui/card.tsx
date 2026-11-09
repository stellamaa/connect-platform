import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("rounded-md border border-line bg-paper-raised p-5", className)}>
      {children}
    </div>
  );
}
