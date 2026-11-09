import { contentTypes } from "@/constants/content-types";

export function FeatureGrid() {
  return (
    <section className="bg-paper px-6 py-20 md:px-10 lg:px-16">
      <h2 className="max-w-3xl font-sans text-4xl tracking-tight text-ink md:text-6xl">
        Five kinds of material. <span className="italic-serif">One tray.</span>
      </h2>
      <ul className="mt-12 border-t border-line">
        {contentTypes.map((type) => (
          <li
            key={type.id}
            className="grid gap-2 border-b border-line py-6 md:grid-cols-[7rem_14rem_1fr] md:items-baseline md:gap-8"
          >
            <p className="text-sm underline decoration-ink/30 underline-offset-4">
              {type.eyebrow}
            </p>
            <h3 className="font-sans text-xl tracking-tight text-ink">{type.label}</h3>
            <p className="text-sm leading-6 text-ink-soft">{type.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
