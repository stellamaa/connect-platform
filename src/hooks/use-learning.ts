"use client";

import { lessons } from "@/constants/lessons";
import { useViewerItems } from "@/hooks/use-materials";

export function useLessons() {
  return useViewerItems(lessons);
}
