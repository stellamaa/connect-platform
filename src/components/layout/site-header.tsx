import Link from "next/link";
import { Wordmark } from "@/components/brand/wordmark";
import { routes } from "@/constants/routes";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between gap-4 px-6 py-5 md:px-10 lg:px-16">
      <Wordmark />
      <nav className="flex shrink-0 items-center gap-1.5 text-sm md:gap-5">
        <Link
          href={routes.about}
          className="hidden whitespace-nowrap text-ink-soft hover:text-ink sm:inline"
        >
          About this build
        </Link>
        <Link
          href={routes.signIn}
          className="whitespace-nowrap px-2 py-2 text-ink hover:text-moss md:px-3"
        >
          Sign in
        </Link>
        <Link
          href={routes.signUp}
          className="whitespace-nowrap rounded-full bg-moss px-3 py-2 text-paper hover:bg-moss-deep md:px-4"
        >
          <span className="sm:hidden">Enter</span>
          <span className="hidden sm:inline">Enter the practice</span>
        </Link>
      </nav>
    </header>
  );
}
