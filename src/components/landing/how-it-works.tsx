import { steps } from "@/constants/story";

export function HowItWorks() {
  return (
    <section className="bg-moss-deep px-6 py-16 text-paper md:px-10 lg:px-16">
      <h2 className="font-serif text-4xl tracking-tight">How a week with it goes</h2>
      <ol className="mt-10 grid gap-8 md:grid-cols-3">
        {steps.map((step) => (
          <li key={step.number}>
            <p className="font-serif text-3xl text-gold">{step.number}</p>
            <h3 className="mt-3 font-serif text-2xl">{step.title}</h3>
            <p className="mt-3 text-sm leading-6 text-paper/75">{step.body}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
