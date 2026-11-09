import Link from "next/link";
import { Mark } from "@/components/brand/mark";
import { brand } from "@/constants/brand";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/cn";

export function Wordmark({
  tone = "ink",
  href = routes.home,
}: {
  tone?: "ink" | "paper";
  href?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2.5 font-serif text-xl tracking-tight",
        tone === "ink" ? "text-ink" : "text-paper",
      )}
    >
      <Mark />
      <span>{brand.name}</span>
    </Link>
  );
}
