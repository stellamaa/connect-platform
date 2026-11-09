import Link from "next/link";
import { brand } from "@/constants/brand";
import { routes } from "@/constants/routes";

const columns = [
  [
    { href: routes.home, label: "home" },
    { href: routes.about, label: "about this build" },
    { href: routes.signIn, label: "sign in" },
    { href: routes.signUp, label: "enter the practice" },
  ],
  [
    { href: routes.meditations, label: "meditations" },
    { href: routes.prompts, label: "prompts" },
    { href: routes.learn, label: "learning" },
    { href: routes.gallery, label: "images" },
    { href: routes.community, label: "circle" },
  ],
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-ink text-cream">
      <div className="grid gap-10 px-6 py-16 md:grid-cols-[1fr_1fr_1.2fr] md:px-10 lg:px-16">
        {columns.map((column) => (
          <ul key={column[0].href} className="space-y-2 text-sm lowercase">
            {column.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        ))}
        <div>
          <p className="italic-serif text-3xl leading-tight">
            Leave the room with something to return to.
          </p>
          <Link
            href={routes.signUp}
            className="mt-6 inline-flex rounded-full border border-cream/40 px-4 py-2 text-sm lowercase hover:border-cream"
          >
            enter the practice
          </Link>
        </div>
      </div>
      <p className="px-6 text-[clamp(4.5rem,18vw,11rem)] leading-none tracking-tight lowercase md:px-10 lg:px-16">
        {brand.name}
      </p>
      <p className="max-w-3xl px-6 pt-6 pb-10 text-xs leading-5 text-cream/60 md:px-10 lg:px-16">
        {brand.supportNote}
      </p>
    </footer>
  );
}
