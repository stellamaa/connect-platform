import { recentActivity } from "@/lib/catalog";

export function ActivityList() {
  const items = recentActivity();

  return (
    <ol className="mt-4 divide-y divide-line border-y border-line">
      {items.map((item) => (
        <li key={item.id} className="grid gap-1 py-4 md:grid-cols-[9rem_1fr]">
          <p className="text-sm text-ink-soft">{item.when}</p>
          <div>
            <p className="text-ink">{item.label}</p>
            <p className="text-sm text-ink-soft">{item.detail}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
