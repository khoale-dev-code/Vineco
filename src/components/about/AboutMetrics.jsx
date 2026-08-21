import { aboutContent } from "../../data/aboutContent";
import Reveal from "../ui/Reveal";

export default function AboutMetrics() {
  return (
    <section className="bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-[1140px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-brand-600">
              Outstanding Impression
            </p>

            <h2 className="mt-2 text-2xl font-extrabold tracking-[-0.035em] text-ink sm:text-3xl">
              Natural materials. Flexible manufacturing. Global ambition.
            </h2>
          </div>
        </Reveal>

        <div className="mt-8 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {aboutContent.metrics.map(
            (item, index) => (
              <Reveal
                key={item.label}
                delay={index * 80}
                className="h-full"
              >
                <article className="group h-full rounded-[22px] border-2 border-brand-500 bg-brand-500 p-5 text-center shadow-[0_12px_28px_rgba(255,164,18,.15)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(255,164,18,.24)] sm:p-6">
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
                      {item.value}
                    </span>

                    {item.suffix && (
                      <span className="mb-1 text-sm font-extrabold text-ink/70">
                        {item.suffix}
                      </span>
                    )}
                  </div>

                  <p className="mx-auto mt-3 max-w-[190px] text-xs font-bold leading-5 text-ink/65">
                    {item.label}
                  </p>
                </article>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}