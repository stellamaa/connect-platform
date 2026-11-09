import { Badge } from "@/components/ui/badge";
import { namesFor } from "@/lib/catalog";

export function AssignmentNames({ ids }: { ids: readonly string[] }) {
  const names = namesFor(ids);
  if (names.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {names.map((name) => (
        <Badge key={name} tone="ink">
          {name}
        </Badge>
      ))}
    </div>
  );
}
