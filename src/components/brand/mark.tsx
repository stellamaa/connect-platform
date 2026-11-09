import { cn } from "@/lib/cn";

export function Mark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-8 items-center justify-center rounded-full border border-current",
        className,
      )}
      aria-hidden
    >
      <span className="size-2 rounded-full bg-current" />
    </span>
  );
}
