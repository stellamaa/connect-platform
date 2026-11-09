"use client";

import { LibraryToolbar } from "@/components/materials/library-toolbar";
import { PromptCard } from "@/components/prompts/prompt-card";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import {
  matchLibrary,
  useTagSelection,
  useTextQuery,
} from "@/hooks/use-materials";
import { usePrompts } from "@/hooks/use-prompts";
import { useRole } from "@/hooks/use-role";
import { collectTags } from "@/lib/catalog";

export function PromptLibrary() {
  const { role } = useRole();
  const items = usePrompts();
  const { query, setQuery } = useTextQuery();
  const { tag, setTag } = useTagSelection();
  const visible = matchLibrary(items, query, tag);

  return (
    <>
      <PageHeader
        eyebrow="Write"
        title="Writing prompts"
        description={
          role === "practitioner"
            ? "Questions sized for the days between sessions. Drafts stay in the browser tab."
            : "Write into the prompt. What you type stays in this browser tab until you close it."
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
          title="No prompt matches"
          body="Clear the search or the tag to see what is in the tray."
        />
      ) : (
        <ul className="grid gap-4 md:grid-cols-2">
          {visible.map((prompt) => (
            <li key={prompt.id}>
              <PromptCard prompt={prompt} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
