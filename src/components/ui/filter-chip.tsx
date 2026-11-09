import { cn } from "@/lib/cn";

export function FilterChip({
  children,
  active,
  onClick,
}: {
  children: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full px-3 py-1.5 text-sm capitalize transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clay",
        active ? "bg-moss text-paper" : "bg-sage-soft text-moss hover:bg-sage/20",
      )}
    >
      {children}
    </button>
  );
}
