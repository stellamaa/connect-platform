import { steps } from "@/constants/story";

export function HowItWorks() {
  return (
    <section className="bg-ink px-6 py-20 text-cream md:px-10 lg:px-16">
      <h2 className="max-w-2xl font-sans text-4xl tracking-tight md:text-6xl">
        How a week with it goes.
      </h2>
      <ol className="mt-14 grid gap-12 md:grid-cols-3">
        {steps.map((step) => (
          <li key={step.number}>
            <p className="font-sans text-5xl tracking-tight text-cream/40">{step.number}</p>
            <h3 className="mt-4 font-sans text-2xl tracking-tight">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-cream/70">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
