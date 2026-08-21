import InsideVinEcoExtras from "../components/home/InsideVinEcoExtras";
import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import Reveal from "../components/ui/Reveal";
import SmartImage from "../components/ui/SmartImage";
import SiteIcon from "../components/ui/SiteIcon";

import { projectData } from "../data/projectData";

import WhyVinEcoSection from "../components/home/WhyVinEcoSection";
function ProductCard({ product, index }) {
  return (
    <Reveal
      variant="up"
      delay={index * 100}
      className="h-full"
    >
      <article className="group flex h-full flex-col overflow-hidden rounded-[24px] border-2 border-brand-500/60 bg-white transition duration-300 hover:-translate-y-1 hover:border-brand-500 hover:shadow-[0_20px_52px_rgba(255,164,18,0.18)]">
        <div className="relative aspect-[4/3] overflow-hidden bg-brand-50">
          <SmartImage
            src={product.image}
            alt={product.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
          />

          <span className="absolute left-4 top-4 rounded-full bg-brand-500 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-ink">
            {product.badge}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-brand-600">
            {product.category}
          </p>

          <h3 className="mt-2 text-lg font-bold leading-tight text-ink">
            {product.title}
          </h3>

          <p className="mt-3 flex-1 text-sm leading-6 text-ink/55">
            {product.description}
          </p>

          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink transition hover:text-brand-600"
          >
            Request sample
            <SiteIcon name="arrow" size={16} />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* HERO */}
        <section
          id="home"
          className="scroll-mt-24 overflow-hidden bg-white"
        >
          <div className="mx-auto max-w-[1240px] px-4 pb-10 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-14">
            <div className="grid gap-4 lg:grid-cols-[1.55fr_.72fr]">
              <Reveal variant="left">
                <div className="relative min-h-[430px] overflow-hidden rounded-[30px] border-2 border-brand-500 bg-[linear-gradient(180deg,#fffaf3_0%,#fff_100%)] shadow-[0_18px_48px_rgba(255,164,18,0.14)] sm:min-h-[520px]">
                  <SmartImage
                    src="/images/hero-coffee-wood.webp"
                    alt="VinEco natural coffee wood pet products"
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover opacity-80"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-white/96 via-white/88 to-white/65" />

                  <div className="relative z-10 flex min-h-[430px] max-w-2xl flex-col justify-end p-7 sm:min-h-[520px] sm:p-10 lg:p-12">
                    <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-ink/60">
                      {projectData.hero.eyebrow}
                    </p>

                    <h1 className="max-w-xl text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-ink sm:text-5xl lg:text-6xl">
                      Crafted by nature,
                      <span className="block text-ink">
                        perfected by us.
                      </span>
                    </h1>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-ink/65 sm:text-base">
                      {projectData.hero.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        to="/contact"
                        className="inline-flex min-h-12 items-center justify-center rounded-full bg-brand-500 px-6 text-sm font-extrabold text-ink shadow-[0_12px_28px_rgba(255,164,18,0.20)] transition hover:-translate-y-0.5 hover:bg-brand-600"
                      >
                        Request B2B Quote
                      </Link>

                      <Link
                        to="/oem-odm"
                        className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-brand-500 bg-white px-6 text-sm font-bold text-ink backdrop-blur transition hover:bg-brand-50"
                      >
                        OEM / ODM
                      </Link>
                    </div>
                  </div>
                </div>
              </Reveal>

              <Reveal
                variant="right"
                delay={100}
              >
                <div className="flex h-full min-h-[360px] flex-col justify-between overflow-hidden rounded-[30px] border-2 border-brand-500 bg-[linear-gradient(180deg,#fff1d6_0%,#fff8ee_100%)] p-7 shadow-[0_20px_50px_rgba(255,164,18,0.16)] sm:p-8">
                  <div>
                    <span className="inline-flex rounded-full bg-brand-500 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-ink">
                      VinEco Product
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-ink">
                      Natural chew toys made for global pet brands.
                    </h2>

                    <p className="mt-4 text-sm leading-7 text-ink/60">
                      Safe natural materials, flexible private labeling and export-ready support.
                    </p>
                  </div>

                  <div className="mt-7 overflow-hidden rounded-[24px] bg-white">
                    <SmartImage
                      src="/images/product-classic.webp"
                      alt="Coffee wood dog chew"
                      className="aspect-[4/3] h-full w-full object-cover"
                    />
                  </div>
                </div>
              </Reveal>
            </div>

            <div
              id="products"
              className="scroll-mt-24 mt-4 grid gap-4 md:grid-cols-3"
            >
              {projectData.products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        {/* WHY */}
        
        <WhyVinEcoSection />


        {/* METRICS */}
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-3 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
            {projectData.metrics.map((metric, index) => (
              <Reveal
                key={metric.label}
                delay={index * 80}
              >
                <div className="rounded-[24px] border-2 border-brand-500 bg-brand-500 p-5 text-center shadow-[0_14px_30px_rgba(255,164,18,0.18)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(255,164,18,0.26)] sm:p-6">
                  <p className="text-2xl font-extrabold text-ink sm:text-3xl">
                    {metric.value}
                  </p>

                  <p className="mt-2 text-xs font-bold leading-5 text-ink/70">
                    {metric.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* VIDEO */}
        <section className="bg-[#f7f9fc] py-16 sm:py-20">
          <div className="mx-auto max-w-[1080px] px-4 sm:px-6">
            <Reveal>
              <div className="mb-8 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">
                  Inside VinEco
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl">
                  See how we work.
                </h2>
              </div>
            </Reveal>

            <Reveal variant="zoom">
              <div className="overflow-hidden rounded-[30px] border-[5px] border-brand-500 bg-white shadow-[0_24px_70px_rgba(255,164,18,0.16)]">
                <video
                  controls
                  preload="metadata"
                  poster="/images/video-poster.webp"
                  className="aspect-video w-full bg-black object-cover"
                >
                  <source
                    src="/video/vineco-brand.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </Reveal>
          </div>
        </section>
        <InsideVinEcoExtras />


        {/* OEM TEASER */}
        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="overflow-hidden rounded-[32px] border-2 border-brand-500 bg-[linear-gradient(135deg,#fff0cf_0%,#fffaf0_100%)] px-6 py-10 text-ink shadow-[0_22px_58px_rgba(255,164,18,0.16)] sm:px-10 lg:grid lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10 lg:px-14 lg:py-14">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-500">
                    OEM / ODM / Private Label
                  </p>

                  <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] sm:text-4xl">
                    Turn your product idea into an export-ready collection.
                  </h2>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-ink/65">
                    Sampling, manufacturing, inspection, branding and global shipping support in one clear process.
                  </p>
                </div>

                <Link
                  to="/oem-odm"
                  className="mt-7 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-brand-500 px-7 text-sm font-extrabold text-ink shadow-[0_12px_28px_rgba(255,164,18,0.20)] transition hover:bg-brand-600 lg:mt-0"
                >
                  Explore OEM / ODM
                  <SiteIcon name="arrow" size={17} />
                </Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          className="scroll-mt-24 bg-[#fff8ef] py-16 sm:py-20"
        >
          <div className="mx-auto max-w-[860px] px-4 sm:px-6">
            <Reveal>
              <div className="text-center">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">
                  FAQ
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl">
                  Frequently Asked Questions
                </h2>
              </div>
            </Reveal>

            <div className="mt-9 space-y-3">
              {projectData.faq.map((item, index) => (
                <Reveal
                  key={item.q}
                  delay={index * 60}
                >
                  <details className="group rounded-2xl border-2 border-brand-500/55 bg-white px-5 py-1 shadow-[0_6px_18px_rgba(255,164,18,0.05)]">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-bold text-ink">
                      {item.q}

                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-brand-500 text-lg font-medium text-ink transition group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="border-t border-ink/8 pb-5 pt-4 text-sm leading-7 text-ink/60">
                      {item.a}
                    </p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
            <Reveal variant="zoom">
              <div className="rounded-[32px] border-2 border-brand-500 bg-[linear-gradient(135deg,#ffa412_0%,#ffb530_100%)] px-6 py-12 text-center shadow-[0_24px_65px_rgba(255,164,18,0.22)] sm:px-10">
                <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-ink/70">
                  Start your brand journey
                </p>

                <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
                  Ready to test VinEco quality?
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-ink/65">
                  Request a sample, discuss your packaging or send us your OEM / ODM idea.
                </p>

                <Link
                  to="/contact"
                  className="mt-7 inline-flex h-12 items-center justify-center rounded-full bg-white px-7 text-sm font-extrabold text-ink shadow-[0_10px_24px_rgba(3,50,107,0.10)] transition hover:-translate-y-0.5 hover:bg-[#fff8ef]"
                >
                  Contact VinEco
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactDock />
    </>
  );
}