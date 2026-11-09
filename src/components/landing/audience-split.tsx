import { audiences } from "@/constants/story";

export function AudienceSplit() {
  return (
    <section className="grid gap-4 px-6 py-16 md:grid-cols-2 md:px-10 lg:px-16">
      {audiences.map((audience) => (
        <article
          key={audience.title}
          className="rounded-[1.8rem] border border-line bg-paper-raised p-8"
        >
          <h2 className="font-serif text-3xl text-ink">{audience.title}</h2>
          <p className="mt-4 max-w-md text-base leading-7 text-ink-soft">{audience.body}</p>
        </article>
      ))}
    </section>
  );
}
