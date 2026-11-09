"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/ui/empty-state";
import { previewClient } from "@/constants/people";
import { routes } from "@/constants/routes";
import { useGallery } from "@/hooks/use-gallery";
import { useLessons } from "@/hooks/use-learning";
import { useMeditations } from "@/hooks/use-meditations";
import { usePrompts } from "@/hooks/use-prompts";
import { useRole } from "@/hooks/use-role";
import { formatMinutes } from "@/lib/format";

export function BetweenSessions() {
  const { role, name } = useRole();
  const meditations = useMeditations();
  const prompts = usePrompts();
  const lessons = useLessons();
  const gallery = useGallery();

  if (role === "practitioner") {
    return (
      <EmptyState
        title="Today is the client tray"
        body="This is what Jonah sees between sessions. Your overview is on Practice."
        action={<Button href={routes.dashboard}>Open the practice</Button>}
      />
    );
  }

  const next = meditations[0];

  return (
    <>
      <header className="mb-8 border-b border-line pb-6">
        <p className="text-xs tracking-[0.16em] text-sage uppercase">Between sessions</p>
        <h1 className="mt-2 font-sans tracking-tight text-4xl tracking-tight text-ink md:text-5xl">
          {name.split(" ")[0]}, the tray is here.
        </h1>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Next session {previewClient.nextSession}. {previewClient.focus}.
        </p>
      </header>
      {next ? (
        <Link
          href={routes.meditation(next.slug)}
          className="block rounded-md bg-moss-deep p-6 text-paper md:p-8"
        >
          <p className="text-sm text-gold">Start here</p>
          <p className="mt-3 font-sans tracking-tight text-3xl">{next.title}</p>
          <p className="mt-2 text-paper/75">
            {formatMinutes(next.durationMinutes)} · {next.intention}
          </p>
        </Link>
      ) : null}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <TrayColumn
          title="Write"
          items={prompts.map((item) => ({
            href: routes.prompt(item.slug),
            title: item.title,
          }))}
        />
        <TrayColumn
          title="Read"
          items={lessons.map((item) => ({
            href: routes.lesson(item.slug),
            title: item.title,
          }))}
        />
        <TrayColumn
          title="See"
          items={gallery.map((item) => ({
            href: routes.image(item.slug),
            title: item.title,
          }))}
        />
      </div>
    </>
  );
}

function TrayColumn({
  title,
  items,
}: {
  title: string;
  items: { href: string; title: string }[];
}) {
  return (
    <section>
      <h2 className="font-sans tracking-tight text-2xl text-ink">{title}</h2>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href} className="text-sm text-ink-soft hover:text-moss">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
