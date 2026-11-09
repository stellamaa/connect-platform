import { MaterialTray } from "@/components/landing/material-tray";
import { Button } from "@/components/ui/button";
import { brand } from "@/constants/brand";
import { routes } from "@/constants/routes";
import { practitioner } from "@/constants/people";

export function Hero() {
  return (
    <section className="grid items-end gap-14 px-6 pt-6 pb-16 md:grid-cols-[1.15fr_0.85fr] md:px-10 md:pt-10 lg:px-16">
      <div>
        <p className="text-sm text-sage">
          {practitioner.practiceName} · {practitioner.city}
        </p>
        <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.02] tracking-tight text-balance text-ink md:text-7xl">
          The work continues between sessions.
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-ink-soft">
          {brand.description}
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href={routes.signUp}>Enter the sample practice</Button>
          <Button href={routes.about} variant="secondary">
            Read what this build includes
          </Button>
        </div>
      </div>
      <MaterialTray />
    </section>
  );
}
