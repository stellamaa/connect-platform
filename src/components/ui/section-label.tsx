import type { ReactNode } from "react";

export function SectionLabel({ children }: { children: ReactNode }) {
  return <p className="italic-serif text-lg text-ink-soft">{children}</p>;
}
