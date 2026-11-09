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
        "inline-flex items-center text-xs lowercase underline decoration-1 underline-offset-4",
        tone === "sage" && "text-ink",
        tone === "clay" && "text-ink",
        tone === "ink" && "text-ink-soft",
      )}
    >
      {children}
    </span>
  );
}
