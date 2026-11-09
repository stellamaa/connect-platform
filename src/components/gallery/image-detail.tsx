"use client";

import { useRole } from "@/hooks/use-role";
import type { GalleryImage } from "@/types/platform";

export function ImageDetail({ image }: { image: GalleryImage }) {
  const { role, clientId } = useRole();
  const assigned = image.assignedClientIds.includes(clientId);

  if (role === "client" && !assigned) {
    return <p className="text-ink-soft">This still is not in your tray.</p>;
  }

  return (
    <article className="grid items-start gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
      <div
        className="flex aspect-[4/5] items-end rounded-md p-6 sm:aspect-[5/4]"
        style={{ background: `linear-gradient(165deg, ${image.wash}, ${image.field})` }}
      >
        <p className="max-w-sm font-sans tracking-tight text-3xl text-paper">{image.title}</p>
      </div>
      <div>
        <p className="text-xs tracking-[0.16em] text-sage uppercase">See</p>
        <h1 className="mt-3 font-sans tracking-tight text-4xl tracking-tight text-ink">{image.title}</h1>
        <p className="mt-4 text-lg leading-8 text-ink-soft">{image.caption}</p>
        <p className="mt-6 text-sm leading-6 text-ink-soft">
          Colour fields stand in for uploaded images. The caption is the instruction
          that travels with the still.
        </p>
      </div>
    </article>
  );
}
