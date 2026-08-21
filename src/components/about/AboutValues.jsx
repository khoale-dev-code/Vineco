import { aboutContent } from "../../data/aboutContent";
import Reveal from "../ui/Reveal";
import SiteIcon from "../ui/SiteIcon";

export default function AboutValues() {
  return (
    <section className="overflow-hidden bg-brand-500">
      <div className="mx-auto grid max-w-[1240px] lg:grid-cols-[.8fr_1.2fr]">
        <Reveal variant="left">
          <div className="flex h-full flex-col justify-center px-5 py-14 sm:px-8 lg:px-12 lg:py-20">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-ink/55">
              Why VinEco
            </p>

            <h2 className="mt-3 max-w-md text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] text-ink sm:text-4xl lg:text-5xl">
              More than a factory.
              <span className="block text-white">
                A manufacturing partner.
              </span>
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-ink/65">
              VinEco combines natural materials, flexible production and export support to help pet brands move from product idea to market.
            </p>
          </div>
        </Reveal>

        <div className="bg-white px-4 py-10 sm:px-8 lg:px-12 lg:py-16">
          <div className="space-y-3">
            {aboutContent.values.map(
              (item, index) => (
                <Reveal
                  key={item.number}
                  variant="right"
                  delay={index * 90}
                >
                  <article className="group flex gap-5 rounded-[22px] border border-brand-500/30 p-5 transition hover:border-brand-500 hover:bg-brand-50/45 sm:p-6">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-xs font-extrabold text-ink">
                      {item.number}
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-ink">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-ink/55">
                        {item.text}
                      </p>
                    </div>

                    <SiteIcon
                      name="arrow"
                      size={18}
                      className="ml-auto mt-2 shrink-0 text-brand-600 transition group-hover:translate-x-1"
                    />
                  </article>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </div>
    </section>
  );
}