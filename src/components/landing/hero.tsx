import Link from "next/link";
import { MaterialTray } from "@/components/landing/material-tray";
import { Button } from "@/components/ui/button";
import { brand } from "@/constants/brand";
import { contentTypes } from "@/constants/content-types";
import { images } from "@/constants/images";
import { routes } from "@/constants/routes";

const kindHrefs = {
  meditation: routes.meditations,
  prompt: routes.prompts,
  learning: routes.learn,
  image: routes.gallery,
  community: routes.community,
} as const;

export function Hero() {
  const linked = contentTypes.filter((type) => type.id !== "community");
  const circle = contentTypes.find((type) => type.id === "community");

  return (
    <section className="bg-stone text-cream">
      <div className="grid items-stretch md:grid-cols-2">
        <div className="flex flex-col justify-end px-6 py-12 md:px-10 md:py-16 lg:px-16 lg:py-20">
          <h1 className="max-w-xl font-sans text-5xl leading-[0.95] tracking-tight md:text-7xl">
            The work continues between sessions.
          </h1>
          <p className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-sm">
            {linked.map((type) => (
              <Link
                key={type.id}
                href={kindHrefs[type.id]}
                className="underline decoration-cream/50 underline-offset-4 hover:decoration-cream"
              >
                {type.eyebrow}
              </Link>
            ))}
            {circle ? (
              <Link href={kindHrefs.community} className="italic-serif text-xl">
                and the circle
              </Link>
            ) : null}
          </p>
          <p className="mt-6 max-w-md text-base leading-7 text-cream/85">
            {brand.description}
          </p>
          <div className="mt-8">
            <Button href={routes.signUp} variant="cream">
              Enter the sample practice
            </Button>
          </div>
        </div>
        <MaterialTray />
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-4">
        {images.map((image) => (
          <li key={image.id}>
            <Link
              href={routes.image(image.slug)}
              className="block h-24 md:h-36"
              style={{ background: image.field }}
              aria-label={image.title}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
