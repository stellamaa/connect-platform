"use client";

import { LibraryToolbar } from "@/components/materials/library-toolbar";
import { MeditationCard } from "@/components/meditations/meditation-card";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import {
  matchLibrary,
  useTagSelection,
  useTextQuery,
} from "@/hooks/use-materials";
import { useMeditations } from "@/hooks/use-meditations";
import { useRole } from "@/hooks/use-role";
import { collectTags } from "@/lib/catalog";

export function MeditationLibrary() {
  const { role } = useRole();
  const items = useMeditations();
  const { query, setQuery } = useTextQuery();
  const { tag, setTag } = useTagSelection();
  const visible = matchLibrary(items, query, tag);

  return (
    <>
      <PageHeader
        eyebrow="Listen"
        title="Guided meditations"
        description={
          role === "practitioner"
            ? "Practices you can leave in a client’s tray. The timer stands in for audio."
            : "Practices Mara left for you. Sit with the timer; the recording will attach here later."
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
          title="Nothing matches"
          body="Try another word, or clear the tag. The tray itself has not changed."
        />
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {visible.map((meditation) => (
            <li key={meditation.id}>
              <MeditationCard meditation={meditation} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
