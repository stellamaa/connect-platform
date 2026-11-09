import { audiences } from "@/constants/story";

export function AudienceSplit() {
  return (
    <section className="grid bg-paper md:grid-cols-2">
      {audiences.map((audience) => (
        <article
          key={audience.title}
          className="border-t border-line px-6 py-16 md:px-10 lg:px-16"
        >
          <h2 className="font-sans text-3xl tracking-tight text-ink md:text-4xl">
            {audience.title}
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-ink-soft">{audience.body}</p>
        </article>
      ))}
    </section>
  );
}
