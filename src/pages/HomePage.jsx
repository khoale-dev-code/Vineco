import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";
import InsideVinEcoExtras from "../components/home/InsideVinEcoExtras";
import WhyVinEcoSection from "../components/home/WhyVinEcoSection";

import Reveal from "../components/ui/Reveal";
import SmartImage from "../components/ui/SmartImage";
import SiteIcon from "../components/ui/SiteIcon";

import { projectData } from "../data/projectData";


/* ==========================================================
   HOME CONTENT
========================================================== */

const homeContent = {
  hero: {
    eyebrow: "Natural Pet Products · Made in Vietnam",
    titleLine1: "Crafted By Nature,",
    titleLine2: "Perfected By Us",
    description:
      "VinEco is a premier Vietnam-based manufacturer and global exporter of high-quality pet products made from natural materials, bringing safe, durable, and eco-friendly solutions to pets worldwide",
    subDescription:
      "Crafted from 100% natural, sustainable coffee wood from the Central Highlands. Safe, durable, and eco-friendly chew toys designed for global pet brands, start up, and Amazon FBA sellers.",
    image: "/images/home/home-hero-main.webp",
    primaryCta: "Request B2B Quote",
    secondaryCta: "OEM / ODM",
  },

  sideCard: {
    badge: "VinEco Product",
    title: "Eco-friendly Coffee Wood Chews",
    tagline: "Safe. Tough. Sustainable.",
    description:
      "Low-MOQ manufacturing (from 50 pcs) tailored for global pet supply distributors.",
    note:
      "Complimentary OEM samples ready in 7 days.",
    image:
      "/images/home/home-hero-side.webp",
  },

  products: [
    {
      id: "classic-chew",
      badge: "Best Seller",
      category: "Natural Dog Chew",
      title: "Classic Coffee Wood Chew",
      description:
        "Smooth, durable coffee wood chew made from mature branches. Ideal for everyday chewing and clean product presentation.",
      image:
        "/images/home/product-classic-chew.webp",
    },
    {
      id: "gorilla-chew",
      badge: "Heavy Chewer",
      category: "Strong Chewer",
      title: "Coffee Wood Gorilla Chew",
      description:
        "Dense and thicker-root coffee wood chew for bigger dogs and stronger chewers who need a tougher natural option.",
      image:
        "/images/home/product-gorilla-chew.webp",
    },
    {
      id: "rope-toy",
      badge: "Interactive Play",
      category: "Coffee Wood + Rope",
      title: "Coffee Wood + Natural Rope",
      description:
        "Natural coffee wood paired with rope for tugging, chewing and enrichment. A stronger-value format for premium pet lines.",
      image:
        "/images/home/product-rope-toy.webp",
    },
  ],
};


/* ==========================================================
   PRODUCT CARD
========================================================== */

function ProductCard({ product, index }) {
  return (
    <Reveal
      variant="up"
      delay={index * 100}
      className="h-full"
    >
      <article
        className={[
          "group flex h-full flex-col overflow-hidden",
          "rounded-[24px]",
          "border border-[#F59E0B]/35",
          "bg-[#F4F1EA]",
          "transition duration-300",
          "hover:-translate-y-1",
          "hover:border-[#F59E0B]",
          "hover:shadow-[0_20px_52px_rgba(245,158,11,0.16)]",
        ].join(" ")}
      >
        <div className="relative aspect-square overflow-hidden bg-[#F4F1EA]">
          <img
            src={product.image}
            alt={product.title}
            loading="lazy"
            decoding="async"
            className="block h-full w-full object-cover object-center"
          />

          <span
            className={[
              "absolute left-4 top-4",
              "rounded-full",
              "bg-[#3D5245]",
              "px-3 py-1.5",
              "text-[11px] font-extrabold",
              "uppercase tracking-wide",
              "text-white",
            ].join(" ")}
          >
            {product.badge}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.15em] text-[#D97706]">
            {product.category}
          </p>

          <h3 className="mt-2 text-xl font-extrabold leading-tight text-[#1E2A24]">
            {product.title}
          </h3>

          <p className="mt-3 flex-1 text-[15px] leading-7 text-[#3D4A42]">
            {product.description}
          </p>

          <Link
            to="/contact"
            className="mt-5 inline-flex items-center gap-2 text-[15px] font-extrabold text-[#1E2A24] transition hover:text-[#F59E0B]"
          >
            Request sample

            <SiteIcon
              name="arrow"
              size={16}
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}


/* ==========================================================
   HOME PAGE
========================================================== */

export default function HomePage() {
  return (
    <>
      <Header />

      <main className="bg-[#FAF8F5] text-[#1E2A24]">

        {/* ==================================================
            HERO
        ================================================== */}

        <section
          id="home"
          className="scroll-mt-24 overflow-hidden bg-[#FAF8F5]"
        >
          <div className="mx-auto max-w-[1240px] px-4 pb-10 pt-6 sm:px-6 sm:pt-8 lg:px-8 lg:pb-14">

            <div
              className={[
                "grid items-stretch gap-4",
                "lg:grid-cols-[minmax(0,1.38fr)_minmax(360px,.82fr)]",
                "xl:grid-cols-[minmax(0,1.42fr)_minmax(390px,.78fr)]",
              ].join(" ")}
            >

              {/* HERO MAIN */}
              <Reveal
                variant="left"
                className="h-full"
              >
                <div
                  className={[
                    "relative min-h-[430px] overflow-hidden",
                    "rounded-[30px]",
                    "border border-[#F59E0B]/40",
                    "bg-white",
                    "shadow-[0_18px_48px_rgba(245,158,11,0.10)]",
                    "sm:min-h-[520px]",
                    "lg:h-full lg:min-h-full",
                  ].join(" ")}
                >
                  <SmartImage
                    src={homeContent.hero.image}
                    alt="VinEco natural pet products - Crafted By Nature, Perfected By Us"
                    loading="eager"
                    className="absolute inset-0 h-full w-full object-cover object-[68%_center] opacity-95"
                  />

                  <div className="absolute inset-0 bg-gradient-to-r from-[#FAF8F5]/98 via-[#FAF8F5]/78 to-transparent" />

                  <div className="relative z-10 flex min-h-[430px] max-w-2xl flex-col justify-end p-7 sm:min-h-[520px] sm:p-10 lg:p-12">

                    <p className="mb-4 text-sm font-extrabold uppercase tracking-[0.2em] text-[#2C3F35]">
                      {homeContent.hero.eyebrow}
                    </p>

                    <h1 className="max-w-xl text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-[#1E2A24] sm:text-5xl lg:text-6xl">
                      {homeContent.hero.titleLine1}

                      <span className="block">
                        {homeContent.hero.titleLine2}
                      </span>
                    </h1>

                    <div className="mt-5 max-w-xl space-y-3">
                      <p className="text-base font-semibold leading-8 text-[#1E2A24] sm:text-[17px]">
                        {homeContent.hero.description}
                      </p>

                      <p className="max-w-lg text-[15px] leading-7 text-[#3D4A42] sm:text-base">
                        {homeContent.hero.subDescription}
                      </p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                      <Link
                        to="/contact"
                        className={[
                          "inline-flex min-h-12 items-center justify-center",
                          "rounded-full",
                          "bg-[#F59E0B]",
                          "px-6",
                          "text-base font-extrabold",
                          "text-[#1E2A24]",
                          "shadow-[0_12px_28px_rgba(245,158,11,0.20)]",
                          "transition",
                          "hover:-translate-y-0.5",
                          "hover:bg-[#D97706]",
                        ].join(" ")}
                      >
                        {homeContent.hero.primaryCta}
                      </Link>

                      <Link
                        to="/oem-odm"
                        className={[
                          "inline-flex min-h-12 items-center justify-center",
                          "rounded-full",
                          "border border-[#F59E0B]",
                          "bg-white",
                          "px-6",
                          "text-base font-bold",
                          "text-[#1E2A24]",
                          "transition",
                          "hover:bg-[#F4F1EA]",
                        ].join(" ")}
                      >
                        {homeContent.hero.secondaryCta}
                      </Link>
                    </div>

                  </div>
                </div>
              </Reveal>


              {/* HERO SIDE CARD */}
              <Reveal
                variant="right"
                delay={100}
                className="h-full"
              >
                <div
                  className={[
                    "flex h-full min-h-[360px] flex-col overflow-hidden",
                    "rounded-[30px]",
                    "border border-[#F59E0B]/40",
                    "bg-gradient-to-b from-[#F4F1EA] to-[#FAF8F5]",
                    "shadow-[0_20px_50px_rgba(245,158,11,0.10)]",
                  ].join(" ")}
                >
                  <div className="p-7 pb-6 sm:p-8 sm:pb-7">
                    <span
                      className={[
                        "inline-flex rounded-full",
                        "bg-[#3D5245]",
                        "px-3 py-1.5",
                        "text-[11px] font-extrabold",
                        "uppercase tracking-wide",
                        "text-white",
                      ].join(" ")}
                    >
                      {homeContent.sideCard.badge}
                    </span>

                    <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.035em] text-[#1E2A24]">
                      {homeContent.sideCard.title}
                    </h2>

                    <p className="mt-4 text-base font-semibold leading-7 text-[#1E2A24]">
                      {homeContent.sideCard.tagline}
                    </p>

                    <p className="mt-3 text-[15px] leading-7 text-[#3D4A42]">
                      {homeContent.sideCard.description}
                    </p>

                    <p className="mt-3 text-[15px] leading-7 text-[#3D4A42]">
                      {homeContent.sideCard.note}
                    </p>
                  </div>

                  <div className="mt-auto w-full overflow-hidden border-t border-[#F59E0B]/20">
                    <img
                      src={homeContent.sideCard.image}
                      alt={homeContent.sideCard.title}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full"
                    />
                  </div>
                </div>
              </Reveal>

            </div>


            {/* ==================================================
                PRODUCTS
            ================================================== */}

            <div
              id="products"
              className="mt-4 grid scroll-mt-24 gap-4 md:grid-cols-3"
            >
              {homeContent.products.map((product, index) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  index={index}
                />
              ))}
            </div>

          </div>
        </section>


        {/* ==================================================
            WHY VINECO
        ================================================== */}

        <WhyVinEcoSection />


        {/* ==================================================
            METRICS
        ================================================== */}

        <section className="bg-[#FAF8F5] py-14 sm:py-16">
          <div className="mx-auto grid max-w-[1240px] grid-cols-2 gap-3 px-4 sm:px-6 md:grid-cols-4 lg:px-8">

            {projectData.metrics.map((metric, index) => (
              <Reveal
                key={metric.label}
                delay={index * 80}
              >
                <div
                  className={[
                    "rounded-[24px]",
                    "border border-[#F59E0B]/25",
                    "bg-[#0F2F24]",
                    "p-5 text-center",
                    "shadow-[0_14px_30px_rgba(15,47,36,0.08)]",
                    "transition",
                    "hover:-translate-y-1",
                    "sm:p-6",
                  ].join(" ")}
                >
                  <p className="text-2xl font-extrabold text-[#F59E0B] sm:text-3xl">
                    {metric.value}
                  </p>

                  <p className="mt-2 text-sm font-bold leading-5 text-white/85">
                    {metric.label}
                  </p>
                </div>
              </Reveal>
            ))}

          </div>
        </section>


        {/* ==================================================
            VIDEO
        ================================================== */}

        <section className="bg-[#FAF8F5] py-16 sm:py-20">
          <div className="mx-auto max-w-[1080px] px-4 sm:px-6">

            <Reveal>
              <div className="mb-8 text-center">
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#2C3F35]">
                  Inside VinEco
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-[#1E2A24] sm:text-4xl">
                  See how we work.
                </h2>
              </div>
            </Reveal>


            <Reveal variant="zoom">
              <div
                className={[
                  "aspect-video w-full overflow-hidden",
                  "rounded-[30px]",
                  "border-[3px] border-[#F59E0B]/35",
                  "bg-[#F4F1EA]",
                  "shadow-[0_24px_70px_rgba(245,158,11,0.10)]",
                ].join(" ")}
              >
                <div className="flex h-full w-full items-center justify-center">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="h-full w-auto max-w-full object-contain"
                  >
                    <source
                      src="/video/home.mp4"
                      type="video/mp4"
                    />

                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </Reveal>

          </div>
        </section>


        {/* ==================================================
            INSIDE VINECO EXTRAS
        ================================================== */}

        <InsideVinEcoExtras />


        {/* ==================================================
            FINAL CTA
        ================================================== */}

        <section className="bg-[#FAF8F5] py-16 sm:py-20">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

            <Reveal variant="zoom">
              <div
                className={[
                  "rounded-[32px]",
                  "border border-[#F59E0B]/30",
                  "bg-gradient-to-br from-[#F59E0B] to-[#FFB530]",
                  "px-6 py-12",
                  "text-center",
                  "shadow-[0_24px_65px_rgba(245,158,11,0.18)]",
                  "sm:px-10",
                ].join(" ")}
              >
                <p className="text-sm font-extrabold uppercase tracking-[0.2em] text-[#1E2A24]/75">
                  Start your brand journey
                </p>

                <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.04em] text-[#1E2A24] sm:text-4xl">
                  Ready to test VinEco quality?
                </h2>

                <p className="mx-auto mt-4 max-w-xl text-[15px] leading-7 text-[#1E2A24]/80">
                  Request a sample, discuss your packaging or send us your
                  OEM / ODM idea.
                </p>

                <Link
                  to="/contact"
                  className={[
                    "mt-7 inline-flex h-12",
                    "items-center justify-center",
                    "rounded-full",
                    "bg-white",
                    "px-7",
                    "text-base font-extrabold",
                    "text-[#1E2A24]",
                    "shadow-[0_10px_24px_rgba(30,42,36,0.08)]",
                    "transition",
                    "hover:-translate-y-0.5",
                    "hover:bg-[#FAF8F5]",
                  ].join(" ")}
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