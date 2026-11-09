import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { images } from "@/constants/images";
import { meditations } from "@/constants/meditations";
import { prompts } from "@/constants/prompts";
import { routes } from "@/constants/routes";
import { formatMinutes } from "@/lib/format";

export function MaterialTray() {
  const meditation = meditations[0];
  const prompt = prompts[0];
  const image = images[0];

  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="absolute -top-6 right-4 h-40 w-40 rounded-[2rem]"
        style={{ background: image.field }}
        aria-hidden
      />
      <div className="relative space-y-3">
        <Link
          href={routes.meditation(meditation.slug)}
          className="block rounded-[1.6rem] border border-line bg-paper-raised p-5 shadow-sm"
        >
          <Badge>Listen</Badge>
          <p className="mt-4 font-serif text-2xl text-ink">{meditation.title}</p>
          <p className="mt-2 text-sm text-ink-soft">
            {formatMinutes(meditation.durationMinutes)} · {meditation.intention}
          </p>
        </Link>
        <Link
          href={routes.prompt(prompt.slug)}
          className="block translate-x-4 rounded-[1.6rem] border border-line bg-paper p-5"
        >
          <Badge tone="clay">Write</Badge>
          <p className="mt-4 font-serif text-2xl text-ink">{prompt.title}</p>
          <p className="mt-2 text-sm leading-6 text-ink-soft">{prompt.summary}</p>
        </Link>
        <Link
          href={routes.image(image.slug)}
          className="flex items-center gap-4 rounded-[1.6rem] border border-line bg-paper-raised p-4"
        >
          <span
            className="size-16 shrink-0 rounded-2xl"
            style={{ background: `linear-gradient(160deg, ${image.wash}, ${image.field})` }}
            aria-hidden
          />
          <span>
            <Badge tone="ink">See</Badge>
            <span className="mt-2 block font-serif text-xl text-ink">{image.title}</span>
          </span>
        </Link>
      </div>
    </div>
  );
}
