"use client";

import Link from "next/link";
import { AssignmentNames } from "@/components/materials/assignment-names";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { routes } from "@/constants/routes";
import { useRole } from "@/hooks/use-role";
import type { WritingPrompt } from "@/types/platform";

export function PromptCard({ prompt }: { prompt: WritingPrompt }) {
  const { role } = useRole();

  return (
    <Link href={routes.prompt(prompt.slug)} className="block h-full">
      <Card className="flex h-full flex-col hover:border-sage">
        <Badge tone="clay">Write</Badge>
        <h2 className="mt-4 font-serif text-2xl text-ink">{prompt.title}</h2>
        <p className="mt-2 flex-1 text-sm leading-6 text-ink-soft">{prompt.summary}</p>
        <p className="mt-4 text-xs text-ink-soft">{prompt.updatedLabel}</p>
        {role === "practitioner" ? <AssignmentNames ids={prompt.assignedClientIds} /> : null}
      </Card>
    </Link>
  );
}
