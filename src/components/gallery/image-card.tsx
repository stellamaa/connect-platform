"use client";

import Link from "next/link";
import { AssignmentNames } from "@/components/materials/assignment-names";
import { routes } from "@/constants/routes";
import { useRole } from "@/hooks/use-role";
import type { GalleryImage } from "@/types/platform";

export function ImageCard({ image }: { image: GalleryImage }) {
  const { role } = useRole();

  return (
    <Link href={routes.image(image.slug)} className="group block">
      <div
        className="flex aspect-[4/5] flex-col justify-between rounded-[1.6rem] p-4"
        style={{ background: image.wash }}
      >
        <div
          className="min-h-0 flex-1 rounded-[1.2rem]"
          style={{
            background: `linear-gradient(165deg, ${image.wash}, ${image.field})`,
          }}
        />
        <div className="pt-4">
          <h2 className="font-serif text-2xl text-ink">{image.title}</h2>
          <p className="mt-1 text-sm text-ink/70">{image.summary}</p>
        </div>
      </div>
      {role === "practitioner" ? <AssignmentNames ids={image.assignedClientIds} /> : null}
    </Link>
  );
}
