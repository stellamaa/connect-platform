"use client";

import { Wordmark } from "@/components/brand/wordmark";
import { NavLinks } from "@/components/layout/nav-links";
import { practitioner } from "@/constants/people";

export function Sidebar() {
  return (
    <aside className="sticky top-0 hidden h-dvh flex-col overflow-y-auto bg-moss-deep px-4 py-5 text-paper md:flex">
      <div className="px-2">
        <Wordmark tone="paper" />
        <p className="mt-3 text-xs tracking-wide text-paper/60">
          {practitioner.practiceName}
        </p>
      </div>
      <div className="mt-8 min-h-0 flex-1">
        <NavLinks orientation="vertical" />
      </div>
    </aside>
  );
}
