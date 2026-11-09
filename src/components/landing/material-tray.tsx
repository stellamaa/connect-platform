import Link from "next/link";
import { images } from "@/constants/images";
import { meditations } from "@/constants/meditations";
import { routes } from "@/constants/routes";
import { formatMinutes } from "@/lib/format";

export function MaterialTray() {
  const image = images[0];
  const meditation = meditations[0];

  return (
    <Link
      href={routes.meditation(meditation.slug)}
      className="relative block min-h-80 h-full overflow-hidden md:min-h-[32rem]"
    >
      <span
        className="absolute inset-0"
        style={{
          background: `linear-gradient(165deg, ${image.wash} 0%, ${image.field} 48%, #1a1816 100%)`,
        }}
        aria-hidden
      />
      <span className="absolute inset-x-6 bottom-6 max-w-xs text-cream">
        <span className="italic-serif block text-3xl leading-tight">
          How Stillroom left Jonah a Sunday practice
        </span>
        <span className="mt-3 block text-sm text-cream/80">
          {meditation.title} · {formatMinutes(meditation.durationMinutes)}
        </span>
      </span>
    </Link>
  );
}
