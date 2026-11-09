import { practiceStats } from "@/lib/catalog";

export function StatGrid() {
  const stats = practiceStats();

  return (
    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <li key={stat.label} className="rounded-md border border-line bg-paper-raised px-5 py-4">
          <p className="font-sans tracking-tight text-4xl text-ink">{stat.value}</p>
          <p className="mt-1 text-sm text-ink">{stat.label}</p>
          <p className="text-xs text-ink-soft">{stat.detail}</p>
        </li>
      ))}
    </ul>
  );
}
