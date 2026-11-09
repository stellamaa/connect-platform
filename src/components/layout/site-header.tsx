import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";
import { routes } from "@/constants/routes";
import { cn } from "@/lib/cn";

export function SiteHeader({ tone = "ink" }: { tone?: "ink" | "cream" }) {
  const onStone = tone === "cream";

  return (
    <header className="flex items-center justify-between gap-4 px-6 py-5 md:px-10 lg:px-16">
      <Wordmark tone={onStone ? "paper" : "ink"} />
      <nav className="flex shrink-0 items-center gap-3 text-sm lowercase md:gap-6">
        <Link
          href={routes.about}
          className={cn(
            "hidden whitespace-nowrap sm:inline",
            onStone ? "text-cream/80 hover:text-cream" : "text-ink-soft hover:text-ink",
          )}
        >
          about
        </Link>
        <Link
          href={routes.signIn}
          className={cn(
            "whitespace-nowrap",
            onStone ? "text-cream/80 hover:text-cream" : "text-ink hover:text-ink-soft",
          )}
        >
          sign in
        </Link>
        <Link
          href={routes.signUp}
          className={cn(
            "whitespace-nowrap rounded-md px-3 py-2",
            onStone ? "bg-cream text-ink hover:bg-white" : "bg-ink text-cream hover:bg-black",
          )}
        >
          <span className="sm:hidden">enter</span>
          <span className="hidden sm:inline">enter the practice</span>
        </Link>
      </nav>
    </header>
  );
}
