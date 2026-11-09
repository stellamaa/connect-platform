"use client";

import { LessonCard } from "@/components/learn/lesson-card";
import { LibraryToolbar } from "@/components/materials/library-toolbar";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { useLessons } from "@/hooks/use-learning";
import {
  matchLibrary,
  useTagSelection,
  useTextQuery,
} from "@/hooks/use-materials";
import { useRole } from "@/hooks/use-role";
import { collectTags } from "@/lib/catalog";

export function LessonLibrary() {
  const { role } = useRole();
  const items = useLessons();
  const { query, setQuery } = useTextQuery();
  const { tag, setTag } = useTagSelection();
  const visible = matchLibrary(items, query, tag);

  return (
    <>
      <PageHeader
        eyebrow="Read"
        title="Learning materials"
        description={
          role === "practitioner"
            ? "Notes in the language you already use in the room, short enough to reread."
            : "Notes from Mara. They support the work between sessions. They are not a diagnosis or a plan."
        }
      />
      <LibraryToolbar
        query={query}
        onQuery={setQuery}
        tag={tag}
        onTag={setTag}
        tags={collectTags(items)}
      />
      {visible.length === 0 ? (
        <EmptyState
          title="No note matches"
          body="Try a different word, or show every tag."
        />
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {visible.map((lesson) => (
            <li key={lesson.id}>
              <LessonCard lesson={lesson} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
