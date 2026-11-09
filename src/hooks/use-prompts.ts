"use client";

import { prompts } from "@/constants/prompts";
import { useViewerItems } from "@/hooks/use-materials";

export function usePrompts() {
  return useViewerItems(prompts);
}
