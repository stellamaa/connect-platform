import type { ReactNode } from "react";

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: ReactNode;
}) {
  return (
    <div className="border border-line bg-paper-raised px-6 py-12">
      <h2 className="font-sans text-2xl tracking-tight text-ink">{title}</h2>
      <p className="mt-3 max-w-md text-sm leading-6 text-ink-soft">{body}</p>
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}
