import Link from "next/link";
import { brand } from "@/constants/brand";
import { routes } from "@/constants/routes";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-line px-6 py-8 md:px-10 lg:px-16">
      <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-serif text-xl text-ink">{brand.name}</p>
          <p className="mt-1 text-sm text-ink-soft">{brand.tagline}</p>
        </div>
        <div className="flex gap-5 text-sm">
          <Link href={routes.about} className="text-ink-soft hover:text-ink">
            About this build
          </Link>
          <Link href={routes.signIn} className="text-ink-soft hover:text-ink">
            Sign in
          </Link>
        </div>
      </div>
      <p className="mt-6 max-w-3xl text-xs leading-5 text-ink-soft">{brand.supportNote}</p>
    </footer>
  );
}
