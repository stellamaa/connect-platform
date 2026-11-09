import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

export function Badge({
  children,
  tone = "sage",
}: {
  children: ReactNode;
  tone?: "sage" | "clay" | "ink";
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs tracking-wide",
        tone === "sage" && "bg-sage-soft text-moss",
        tone === "clay" && "bg-clay-soft text-clay",
        tone === "ink" && "bg-ink/5 text-ink-soft",
      )}
    >
      {children}
    </span>
  );
}
