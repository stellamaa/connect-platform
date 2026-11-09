"use client";

import { useMemo, useState } from "react";
import { useRole } from "@/hooks/use-role";
import { filterForViewer } from "@/lib/catalog";
import type { Assignable } from "@/types/platform";

/** Shared tray filter. Specific library hooks call this. */
export function useViewerItems<T extends Assignable>(items: readonly T[]) {
  const { role, clientId } = useRole();
  return useMemo(
    () => filterForViewer(items, role, clientId),
    [items, role, clientId],
  );
}

export function useTextQuery() {
  const [query, setQuery] = useState("");
  return { query, setQuery };
}

export function useTagSelection() {
  const [tag, setTag] = useState("all");
  return { tag, setTag };
}

export function matchLibrary<T extends Assignable>(
  items: readonly T[],
  query: string,
  tag: string,
) {
  const needle = query.trim().toLowerCase();
  return items.filter((item) => {
    const matchesTag = tag === "all" || item.tags.includes(tag);
    if (!matchesTag) return false;
    if (!needle) return true;
    const haystack = `${item.title} ${item.summary} ${item.tags.join(" ")}`;
    return haystack.toLowerCase().includes(needle);
  });
}
