import { contentTypes } from "@/constants/content-types";
import { SectionLabel } from "@/components/ui/section-label";

export function FeatureGrid() {
  return (
    <section className="px-6 py-16 md:px-10 lg:px-16">
      <SectionLabel>What a practice can leave</SectionLabel>
      <h2 className="mt-3 max-w-xl font-serif text-4xl tracking-tight text-ink">
        Five kinds of material. One tray.
      </h2>
      <ul className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {contentTypes.map((type) => (
          <li
            key={type.id}
            className="rounded-[1.6rem] border border-line bg-paper-raised p-6"
          >
            <p className="text-xs tracking-[0.16em] text-clay uppercase">{type.eyebrow}</p>
            <h3 className="mt-3 font-serif text-2xl text-ink">{type.label}</h3>
            <p className="mt-3 text-sm leading-6 text-ink-soft">{type.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
