import type { ReactNode } from "react";
import { Wordmark } from "@/components/brand/wordmark";
import { brand } from "@/constants/brand";

export function AuthPanel({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: ReactNode;
}) {
  return (
    <main id="main" className="grid min-h-dvh md:grid-cols-2">
      <section className="flex flex-col justify-between bg-moss-deep px-8 py-8 text-paper md:px-12">
        <Wordmark tone="paper" />
        <div className="py-16">
          <p className="text-sm text-gold">{brand.tagline}</p>
          <p className="mt-4 max-w-sm font-serif text-4xl leading-tight">
            Leave the room with something to return to.
          </p>
        </div>
        <p className="max-w-sm text-sm leading-6 text-paper/70">{brand.supportNote}</p>
      </section>
      <section className="flex items-center px-6 py-12 md:px-12">
        <div className="w-full max-w-md">
          <h1 className="font-serif text-4xl tracking-tight text-ink">{title}</h1>
          <p className="mt-3 text-sm leading-6 text-ink-soft">{lede}</p>
          <div className="mt-8">{children}</div>
        </div>
      </section>
    </main>
  );
}
