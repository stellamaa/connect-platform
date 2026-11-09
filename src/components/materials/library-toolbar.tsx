import { FilterChip } from "@/components/ui/filter-chip";
import { TextField } from "@/components/ui/text-field";

export function LibraryToolbar({
  query,
  onQuery,
  tag,
  onTag,
  tags,
}: {
  query: string;
  onQuery: (value: string) => void;
  tag: string;
  onTag: (value: string) => void;
  tags: readonly string[];
}) {
  return (
    <div className="mb-6 flex flex-col gap-4">
      <TextField
        label="Search the tray"
        type="search"
        value={query}
        onChange={onQuery}
        placeholder="Title, tag, or a few words"
      />
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter by tag">
        <FilterChip active={tag === "all"} onClick={() => onTag("all")}>
          All
        </FilterChip>
        {tags.map((item) => (
          <FilterChip
            key={item}
            active={tag === item}
            onClick={() => onTag(item)}
          >
            {item}
          </FilterChip>
        ))}
      </div>
    </div>
  );
}
