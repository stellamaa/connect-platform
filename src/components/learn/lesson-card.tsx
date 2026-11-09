"use client";

import Link from "next/link";
import { AssignmentNames } from "@/components/materials/assignment-names";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { routes } from "@/constants/routes";
import { useRole } from "@/hooks/use-role";
import { formatMinutes } from "@/lib/format";
import type { Lesson } from "@/types/platform";

export function LessonCard({ lesson }: { lesson: Lesson }) {
  const { role } = useRole();

  return (
    <Link href={routes.lesson(lesson.slug)} className="block h-full">
      <Card className="flex h-full flex-col hover:border-sage">
        <div className="flex items-center justify-between">
          <Badge>Read</Badge>
          <span className="text-sm text-ink-soft">{formatMinutes(lesson.readingMinutes)}</span>
        </div>
        <h2 className="mt-4 font-sans tracking-tight text-2xl text-ink">{lesson.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">{lesson.summary}</p>
        {role === "practitioner" ? <AssignmentNames ids={lesson.assignedClientIds} /> : null}
      </Card>
    </Link>
  );
}
