"use client";

import { meditations } from "@/constants/meditations";
import { useViewerItems } from "@/hooks/use-materials";

export function useMeditations() {
  return useViewerItems(meditations);
}
