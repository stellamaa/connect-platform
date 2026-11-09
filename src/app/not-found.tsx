import Link from "next/link";
import { routes } from "@/constants/routes";

export default function NotFound() {
  return (
    <main
      id="main"
      className="flex min-h-dvh flex-col justify-center px-6 py-24 md:px-16"
    >
      <p className="text-xs tracking-[0.16em] text-sage uppercase">Missing</p>
      <h1 className="mt-3 max-w-xl font-serif text-5xl tracking-tight text-ink">
        That page is not in the practice.
      </h1>
      <Link href={routes.home} className="mt-6 text-sm text-moss">
        Return home
      </Link>
    </main>
  );
}
