"use client";

import { brand } from "@/constants/brand";
import { useRole } from "@/hooks/use-role";
import { formatMinutes } from "@/lib/format";
import type { Lesson } from "@/types/platform";

export function LessonReader({ lesson }: { lesson: Lesson }) {
  const { role, clientId } = useRole();
  const assigned = lesson.assignedClientIds.includes(clientId);

  if (role === "client" && !assigned) {
    return <p className="text-ink-soft">This note is not in your tray.</p>;
  }

  return (
    <article className="mx-auto max-w-2xl">
      <p className="text-xs tracking-[0.16em] text-sage uppercase">
        Read · {formatMinutes(lesson.readingMinutes)}
      </p>
      <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink md:text-5xl">
        {lesson.title}
      </h1>
      <p className="mt-4 text-lg leading-8 text-ink-soft">{lesson.summary}</p>
      <p className="mt-6 rounded-2xl bg-sage-soft px-4 py-3 text-sm leading-6 text-moss">
        {brand.supportNote}
      </p>
      <div className="mt-10 space-y-8">
        {lesson.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="font-serif text-2xl text-ink">{section.heading}</h2>
            <div className="mt-3 space-y-3">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph} className="leading-7 text-ink-soft">
                  {paragraph}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}
