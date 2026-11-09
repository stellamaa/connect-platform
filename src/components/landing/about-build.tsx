import { buildStatus } from "@/constants/build-status";
import { brand } from "@/constants/brand";

export function AboutBuild() {
  return (
    <main id="main" className="bg-paper px-6 py-16 md:px-10 lg:px-16">
      <p className="italic-serif text-2xl text-ink-soft">{brand.name}</p>
      <h1 className="mt-3 max-w-3xl font-sans text-5xl tracking-tight text-balance text-ink">
        A documented foundation, with a practice you can walk through.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-ink-soft">
        {brand.description} This running app uses Stillroom Practice as the sample
        studio. Fuller notes on structure, the content model, and what comes next
        live in the repository under <span className="text-ink">docs/</span>.
      </p>
      <div className="mt-12 grid gap-px bg-line md:grid-cols-2">
        <section className="bg-paper py-8 md:pr-10">
          <h2 className="font-sans text-2xl tracking-tight text-ink">You can use now</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-soft">
            {buildStatus.ready.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="bg-paper py-8 md:pl-10">
          <h2 className="font-sans text-2xl tracking-tight text-ink">Left for a later seam</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-soft">
            {buildStatus.later.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
      </div>
      <p className="mt-10 max-w-2xl text-sm leading-6 text-ink-soft">{brand.supportNote}</p>
    </main>
  );
}
