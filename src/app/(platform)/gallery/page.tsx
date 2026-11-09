import type { Metadata } from "next";
import { ImageGallery } from "@/components/gallery/image-gallery";

export const metadata: Metadata = {
  title: "Images",
};

export default function GalleryPage() {
  return <ImageGallery />;
}
