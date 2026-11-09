"use client";

import Link from "next/link";
import { AssignmentNames } from "@/components/materials/assignment-names";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { routes } from "@/constants/routes";
import { useRole } from "@/hooks/use-role";
import { formatMinutes } from "@/lib/format";
import type { Meditation } from "@/types/platform";

export function MeditationCard({ meditation }: { meditation: Meditation }) {
  const { role } = useRole();

  return (
    <Link href={routes.meditation(meditation.slug)} className="block h-full">
      <Card className="flex h-full flex-col transition-colors hover:border-sage">
        <div className="flex items-center justify-between gap-3">
          <Badge>Listen</Badge>
          <span className="text-sm text-ink-soft">
            {formatMinutes(meditation.durationMinutes)}
          </span>
        </div>
        <h2 className="mt-4 font-sans tracking-tight text-2xl text-ink">{meditation.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">{meditation.summary}</p>
        <p className="mt-4 text-sm text-moss">{meditation.intention}</p>
        {role === "practitioner" ? (
          <AssignmentNames ids={meditation.assignedClientIds} />
        ) : null}
      </Card>
    </Link>
  );
}
