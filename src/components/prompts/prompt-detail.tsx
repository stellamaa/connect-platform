"use client";

import { Button } from "@/components/ui/button";
import { usePromptDraft } from "@/hooks/use-prompt-draft";
import { useRole } from "@/hooks/use-role";
import type { WritingPrompt } from "@/types/platform";

export function PromptDetail({ prompt }: { prompt: WritingPrompt }) {
  const { role, clientId } = useRole();
  const { draft, update, clear } = usePromptDraft(prompt.id);
  const assigned = prompt.assignedClientIds.includes(clientId);

  if (role === "client" && !assigned) {
    return (
      <p className="text-ink-soft">This prompt is not in your tray.</p>
    );
  }

  return (
    <article className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
      <div>
        <p className="text-xs tracking-[0.16em] text-clay uppercase">Write</p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink md:text-5xl">
          {prompt.title}
        </h1>
        <p className="mt-4 text-lg leading-8 text-ink-soft">{prompt.invitation}</p>
        <ol className="mt-8 space-y-4">
          {prompt.questions.map((question, index) => (
            <li key={question} className="flex gap-4">
              <span className="font-serif text-2xl text-sage">0{index + 1}</span>
              <p className="pt-1 leading-7 text-ink">{question}</p>
            </li>
          ))}
        </ol>
      </div>
      <div>
        <label className="block text-sm text-ink-soft" htmlFor="draft">
          Your page
        </label>
        <textarea
          id="draft"
          value={draft}
          onChange={(event) => update(event.target.value)}
          rows={14}
          placeholder="Begin in the middle if you need to."
          className="mt-2 w-full rounded-[1.5rem] border border-line bg-paper-raised px-4 py-4 leading-7 text-ink outline-none focus:border-sage"
        />
        <div className="mt-3 flex items-center justify-between gap-3">
          <p className="text-xs text-ink-soft" role="status">
            {draft
              ? "Kept in this browser tab."
              : "Nothing written yet. It will stay on this device only."}
          </p>
          <Button variant="ghost" onClick={clear} disabled={draft.length === 0}>
            Clear
          </Button>
        </div>
      </div>
    </article>
  );
}
