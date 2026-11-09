"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { routes } from "@/constants/routes";
import { useClientRecord } from "@/hooks/use-clients";

const groups = [
  {
    key: "meditations" as const,
    label: "Meditations",
    href: (slug: string) => routes.meditation(slug),
  },
  {
    key: "prompts" as const,
    label: "Prompts",
    href: (slug: string) => routes.prompt(slug),
  },
  {
    key: "lessons" as const,
    label: "Learning",
    href: (slug: string) => routes.lesson(slug),
  },
  {
    key: "images" as const,
    label: "Images",
    href: (slug: string) => routes.image(slug),
  },
];

export function ClientRecord({ clientId }: { clientId: string }) {
  const { client, materials, allowed } = useClientRecord(clientId);

  if (!client) {
    return (
      <EmptyState
        title="No client with that record"
        body="The roster only includes the sample people in Stillroom."
        action={
          <Button href={routes.clients} variant="secondary">
            Back to clients
          </Button>
        }
      />
    );
  }

  if (!allowed) {
    return (
      <EmptyState
        title="Records stay in the practice view"
        body="A client sees their own tray from Today, not another person’s record."
        action={
          <Button href={routes.today} variant="secondary">
            Open today
          </Button>
        }
      />
    );
  }

  return (
    <article>
      <p className="text-xs tracking-[0.16em] text-sage uppercase">Client</p>
      <h1 className="mt-3 font-sans tracking-tight text-4xl tracking-tight text-ink md:text-5xl">
        {client.name}
      </h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-ink-soft">{client.focus}</p>
      <dl className="mt-6 grid gap-4 sm:grid-cols-3">
        <div>
          <dt className="text-xs tracking-wide text-ink-soft uppercase">Next session</dt>
          <dd className="mt-1 text-ink">{client.nextSession}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-ink-soft uppercase">With the practice since</dt>
          <dd className="mt-1 text-ink">{client.since}</dd>
        </div>
        <div>
          <dt className="text-xs tracking-wide text-ink-soft uppercase">Note</dt>
          <dd className="mt-1 text-ink">{client.note}</dd>
        </div>
      </dl>
      <div className="mt-10 space-y-8">
        {groups.map((group) => {
          const items = materials[group.key];
          return (
            <section key={group.key}>
              <h2 className="font-sans tracking-tight text-2xl text-ink">{group.label}</h2>
              {items.length === 0 ? (
                <p className="mt-2 text-sm text-ink-soft">Nothing assigned here yet.</p>
              ) : (
                <ul className="mt-3 divide-y divide-line border-y border-line">
                  {items.map((item) => (
                    <li key={item.id}>
                      <Link
                        href={group.href(item.slug)}
                        className="flex items-center justify-between gap-4 py-3 hover:text-moss"
                      >
                        <span>{item.title}</span>
                        <span className="text-sm text-ink-soft">{item.updatedLabel}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          );
        })}
      </div>
    </article>
  );
}
