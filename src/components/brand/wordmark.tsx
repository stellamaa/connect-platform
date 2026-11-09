import Link from "next/link";
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
        "font-sans text-lg tracking-tight lowercase",
        tone === "ink" ? "text-ink" : "text-cream",
      )}
    >
      {brand.name}
    </Link>
  );
}
