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
        "rounded-md px-3 py-1.5 text-sm lowercase transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink",
        active ? "bg-ink text-cream" : "text-ink hover:bg-sage-soft",
      )}
    >
      {children}
    </button>
  );
}
