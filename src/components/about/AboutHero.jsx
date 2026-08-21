import { Link } from "react-router";

import { aboutContent } from "../../data/aboutContent";
import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";
import SiteIcon from "../ui/SiteIcon";

export default function AboutHero() {
  const { hero } = aboutContent;

  return (
    <section className="relative overflow-hidden bg-brand-500">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        aria-hidden="true"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full border-[45px] border-white/40" />
        <div className="absolute -bottom-40 right-[12%] h-80 w-80 rounded-full border-[55px] border-white/30" />
      </div>

      <div className="relative mx-auto grid max-w-[1240px] gap-10 px-4 py-14 sm:px-6 sm:py-18 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-16 lg:px-8 lg:py-20">
        <Reveal variant="left">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-[2px] w-9 bg-ink" />

              <p className="text-[11px] font-extrabold uppercase tracking-[0.3em] text-ink/70">
                {hero.eyebrow}
              </p>
            </div>

            <h1 className="max-w-xl text-4xl font-extrabold leading-[.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[64px]">
              From Vietnam's
              <span className="block text-ink">
                coffee farms
              </span>
              to global pet brands.
            </h1>

            <p className="mt-6 max-w-xl text-sm font-medium leading-7 text-ink/70 sm:text-base">
              {hero.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/products"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-sm font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-ink"
              >
                Explore products
                <SiteIcon
                  name="arrow"
                  size={16}
                />
              </Link>

              <Link
                to="/contact"
                className="inline-flex h-12 items-center rounded-full border-2 border-ink bg-transparent px-7 text-sm font-extrabold text-ink transition hover:bg-white"
              >
                Work with VinEco
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal
          variant="right"
          delay={120}
        >
          <div className="about-hero-media">
            <div className="about-hero-media__frame">
              <SmartImage
                src={hero.image}
                alt="VinEco natural pet product story"
                loading="eager"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/70 to-transparent p-6 pt-20">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-300">
                  VinEco · Vietnam
                </p>

                <p className="mt-1 text-sm font-semibold text-white">
                  Natural materials. Responsible manufacturing.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-5 py-4 shadow-[0_16px_45px_rgba(3,50,107,.18)] sm:-bottom-5 sm:-left-6">
              <p className="text-2xl font-extrabold text-ink">
                100%
              </p>

              <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-ink/45">
                Natural coffee wood
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}