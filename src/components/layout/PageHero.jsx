import Reveal from "../ui/Reveal";

export default function PageHero({
  eyebrow,
  title,
  description,
}) {
  return (
    <section className="border-b border-brand-500/25 bg-[#FAF8F5] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      <Reveal>
        <div className="mx-auto max-w-[900px] text-center">
          {eyebrow && (
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-brand-600">
              {eyebrow}
            </p>
          )}

          <h1 className="mt-4 text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
            {title}
          </h1>

          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink/60 sm:text-base">
              {description}
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}