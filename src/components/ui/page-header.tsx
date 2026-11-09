import type { ReactNode } from "react";
import { SectionLabel } from "@/components/ui/section-label";

export function PageHeader({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <header className="mb-8 flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        {eyebrow ? <SectionLabel>{eyebrow}</SectionLabel> : null}
        <h1 className="mt-2 font-serif text-4xl tracking-tight text-balance text-ink md:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-3 text-base leading-7 text-ink-soft">{description}</p>
        ) : null}
      </div>
      {action}
    </header>
  );
}
