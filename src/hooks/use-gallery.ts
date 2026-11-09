"use client";

import { images } from "@/constants/images";
import { useViewerItems } from "@/hooks/use-materials";

export function useGallery() {
  return useViewerItems(images);
}
