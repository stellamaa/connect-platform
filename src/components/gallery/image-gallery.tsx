"use client";

import { ImageCard } from "@/components/gallery/image-card";
import { LibraryToolbar } from "@/components/materials/library-toolbar";
import { EmptyState } from "@/components/ui/empty-state";
import { PageHeader } from "@/components/ui/page-header";
import { useGallery } from "@/hooks/use-gallery";
import {
  matchLibrary,
  useTagSelection,
  useTextQuery,
} from "@/hooks/use-materials";
import { useRole } from "@/hooks/use-role";
import { collectTags } from "@/lib/catalog";

export function ImageGallery() {
  const { role } = useRole();
  const items = useGallery();
  const { query, setQuery } = useTextQuery();
  const { tag, setTag } = useTagSelection();
  const visible = matchLibrary(items, query, tag);

  return (
    <>
      <PageHeader
        eyebrow="See"
        title="Images"
        description={
          role === "practitioner"
            ? "Visual anchors. Colour fields stand in until image files are uploaded."
            : "Stills Mara left as something to look at before or after a practice."
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
          title="No image matches"
          body="Clear the filter to see the stills in the tray."
        />
      ) : (
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((image) => (
            <li key={image.id}>
              <ImageCard image={image} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
