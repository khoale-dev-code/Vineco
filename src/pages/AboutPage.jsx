import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import Reveal from "../components/ui/Reveal";
import SmartImage from "../components/ui/SmartImage";
import SiteIcon from "../components/ui/SiteIcon";


/* ==========================================================
   CONTENT
========================================================== */

const facts = [
  {
    value: "20–25",
    unit: "YEARS",
    label: "Mature Robusta coffee trees",
  },
  {
    value: "ROBUSTA",
    unit: "",
    label: "Natural coffee wood",
  },
  {
    value: "GIA LAI",
    unit: "& DAK LAK",
    label: "Vietnam Central Highlands",
  },
  {
    value: "SECOND",
    unit: "LIFE",
    label: "Upcycled natural material",
  },
];


const proofItems = [
  {
    id: "quality",
    eyebrow: "Quality Control",
    title: "Checked before packing.",
    description:
      "Finished coffee wood products are inspected before packing and order preparation.",
    image: "/images/about/03-finished-chews-qc.png",
    alt: "VinEco coffee wood products during quality inspection",
    contain: false,
  },

  {
    id: "packaging",
    eyebrow: "Private Label",
    title: "Retail-ready packaging.",
    description:
      "Flexible packaging and branding options help prepare products for different markets.",
    image: "/images/about/09-retail-box.png",
    alt: "VinEco retail packaging for Coffee Wood Dog Chew",
    contain: true,
  },

  {
    id: "documentation",
    eyebrow: "Documentation",
    title: "Export support.",
    description:
      "Product documentation can support international B2B and export preparation.",
    image: "/images/about/10-sgs-report.png",
    alt: "SGS test report supplied for VinEco Coffee Wood Dog Chew",
    contain: true,
  },
];


const missionItems = [
  {
    number: "01",
    title: "For pets.",
    description:
      "Create natural and satisfying coffee wood chew products for dogs worldwide.",
    featured: true,
  },

  {
    number: "02",
    title: "For local value.",
    description:
      "Give mature coffee wood another purpose after its agricultural yield cycle ends.",
  },

  {
    number: "03",
    title: "For less waste.",
    description:
      "Make better use of an existing agricultural by-product instead of discarding it.",
    dark: true,
  },
];


/* ==========================================================
   SMALL UI
========================================================== */

function SectionLabel({ children }) {
  return (
    <p className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#D97706] sm:text-[11px]">
      {children}
    </p>
  );
}


function ImageFrame({
  src,
  alt,
  contain = false,
  position = "object-center",
}) {
  return (
    <div
      className="
        aspect-[4/3]
        w-full
        overflow-hidden
        rounded-[22px]
        border
        border-[#1E2A24]/10
        bg-[#F4F1EA]
        shadow-[0_14px_36px_rgba(30,42,36,0.05)]
      "
    >
      <SmartImage
        src={src}
        alt={alt}
        loading="lazy"
        className={[
          "block h-full w-full",

          contain
            ? "object-contain p-4 sm:p-5"
            : `object-cover ${position}`,
        ].join(" ")}
      />
    </div>
  );
}


/* ==========================================================
   PROCESS FEATURE CARD
========================================================== */

function ProofFeatureCard({ item }) {
  return (
    <Reveal
      variant="up"
      className="h-full"
    >
      <article
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden
          rounded-[26px]
          border
          border-[#1E2A24]/10
          bg-white
          shadow-[0_18px_50px_rgba(30,42,36,0.06)]
          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#F59E0B]/50
          hover:shadow-[0_24px_60px_rgba(30,42,36,0.10)]
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden
            bg-[#F4F1EA]

            sm:aspect-[16/11]

            lg:aspect-auto
            lg:min-h-[390px]
          "
        >
          <SmartImage
            src={item.image}
            alt={item.alt}
            loading="lazy"
            className="
              block
              h-full
              w-full
              object-cover
              object-center
            "
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-0
              bg-gradient-to-t
              from-[#0F2F24]/30
              via-transparent
              to-transparent
            "
          />

          <span
            className="
              absolute
              left-4
              top-4
              rounded-full
              bg-white/95
              px-3
              py-1.5
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.16em]
              text-[#D97706]
              shadow-sm

              sm:left-5
              sm:top-5
            "
          >
            {item.eyebrow}
          </span>
        </div>


        {/* COPY */}
        <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-7">

          <div className="flex items-start justify-between gap-5">

            <h3
              className="
                max-w-[440px]
                text-[25px]
                font-extrabold
                leading-[1.02]
                tracking-[-0.04em]
                text-[#0F2F24]

                sm:text-[28px]
                lg:text-[31px]
              "
            >
              {item.title}
            </h3>


            <span
              aria-hidden="true"
              className="
                hidden
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-[#F59E0B]/35
                text-lg
                font-bold
                text-[#D97706]

                transition
                duration-300

                group-hover:bg-[#F59E0B]
                group-hover:text-[#0F2F24]

                sm:flex
              "
            >
              ↗
            </span>

          </div>


          <p
            className="
              mt-4
              max-w-[520px]
              text-[14px]
              font-medium
              leading-7
              text-[#5F625E]

              sm:text-[15px]
            "
          >
            {item.description}
          </p>

        </div>
      </article>
    </Reveal>
  );
}


/* ==========================================================
   PROCESS COMPACT CARD
========================================================== */

function ProofCompactCard({
  item,
  index,
}) {
  return (
    <Reveal
      variant="up"
      delay={(index + 1) * 70}
      className="h-full"
    >
      <article
        className="
          group
          grid
          h-full
          overflow-hidden
          rounded-[24px]
          border
          border-[#1E2A24]/10
          bg-white
          shadow-[0_12px_36px_rgba(30,42,36,0.05)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#F59E0B]/50
          hover:shadow-[0_20px_46px_rgba(30,42,36,0.09)]

          sm:grid-cols-[190px_1fr]
          lg:grid-cols-[200px_1fr]
        "
      >
        {/* IMAGE */}
        <div
          className="
            aspect-[16/10]
            overflow-hidden
            bg-[#F4F1EA]

            sm:aspect-auto
            sm:min-h-[220px]
          "
        >
          <SmartImage
            src={item.image}
            alt={item.alt}
            loading="lazy"
            className={[
              "block h-full w-full",

              item.contain
                ? "object-contain p-4 sm:p-5"
                : "object-cover object-center",
            ].join(" ")}
          />
        </div>


        {/* COPY */}
        <div
          className="
            flex
            min-w-0
            flex-col
            justify-center
            p-5

            sm:p-6
          "
        >
          <p
            className="
              text-[9px]
              font-extrabold
              uppercase
              tracking-[0.18em]
              text-[#D97706]
            "
          >
            {item.eyebrow}
          </p>


          <h3
            className="
              mt-2
              text-[21px]
              font-extrabold
              leading-[1.05]
              tracking-[-0.035em]
              text-[#0F2F24]

              sm:text-[23px]
            "
          >
            {item.title}
          </h3>


          <p
            className="
              mt-3
              text-[13px]
              font-medium
              leading-6
              text-[#5F625E]

              sm:text-[14px]
            "
          >
            {item.description}
          </p>

        </div>
      </article>
    </Reveal>
  );
}


/* ==========================================================
   PAGE
========================================================== */

export default function AboutPage() {
  return (
    <>
      <Header />

      <main
        className="
          overflow-hidden
          bg-[#FAF8F5]
          text-[#0F2F24]
        "
      >

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="py-8 sm:py-12 lg:py-16">
          <div
            className="
              mx-auto
              max-w-[1240px]
              px-4
              sm:px-6
              lg:px-8
            "
          >

            {/* META */}
            <div
              className="
                mb-5
                flex
                items-center
                justify-between
                border-b
                border-[#1E2A24]/10
                pb-3
              "
            >
              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#D97706]
                "
              >
                About / Our Story
              </span>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#6A645D]
                "
              >
                Vietnam
              </span>
            </div>


            <div
              className="
                grid
                items-center
                gap-8

                lg:grid-cols-[0.9fr_1.1fr]
                lg:gap-14
              "
            >

              {/* HERO COPY */}
              <Reveal variant="left">
                <div>

                  <SectionLabel>
                    Natural Coffee Wood · Vietnam
                  </SectionLabel>


                  <h1
                    className="
                      mt-4
                      max-w-[680px]
                      text-[clamp(2.7rem,5.7vw,5.4rem)]
                      font-extrabold
                      leading-[0.93]
                      tracking-[-0.055em]
                      text-[#0F2F24]
                    "
                  >
                    Sustainably

                    <span className="block text-[#F59E0B]">
                      Reclaiming
                    </span>

                    Vietnam&apos;s Central Highlands

                    <span className="block text-[#F59E0B]">
                      Coffee Wood.
                    </span>
                  </h1>


                  <p
                    className="
                      mt-6
                      max-w-[570px]
                      text-[15px]
                      font-medium
                      leading-7
                      text-[#5F625E]

                      sm:text-[16px]
                    "
                  >
                    VinEco gives a second life to mature
                    Robusta coffee trees from Vietnam&apos;s
                    Central Highlands, transforming an
                    agricultural by-product into premium
                    natural pet products.
                  </p>


                  <div
                    className="
                      mt-7
                      flex
                      flex-col
                      gap-3

                      sm:flex-row
                    "
                  >
                    <Link
                      to="/products"
                      className="
                        inline-flex
                        min-h-[48px]
                        items-center
                        justify-center
                        gap-2
                        rounded-[14px]
                        bg-[#F59E0B]
                        px-6
                        text-[14px]
                        font-extrabold
                        text-[#0F2F24]

                        transition

                        hover:-translate-y-0.5
                        hover:bg-[#D97706]
                      "
                    >
                      Explore products

                      <SiteIcon
                        name="arrow"
                        size={16}
                      />
                    </Link>


                    <Link
                      to="/contact"
                      className="
                        inline-flex
                        min-h-[48px]
                        items-center
                        justify-center
                        rounded-[14px]
                        border
                        border-[#F59E0B]
                        bg-white
                        px-6
                        text-[14px]
                        font-bold
                        text-[#0F2F24]

                        transition

                        hover:bg-[#FFF4DA]
                      "
                    >
                      Contact VinEco
                    </Link>
                  </div>

                </div>
              </Reveal>


              {/* HERO IMAGE */}
              <Reveal
                variant="right"
                delay={100}
              >
                <figure>

                  <div
                    className="
                      aspect-[4/3]
                      max-h-[520px]
                      overflow-hidden
                      rounded-[24px]
                      border
                      border-[#F59E0B]/35
                      bg-[#F4F1EA]
                    "
                  >
                    <SmartImage
                      src="/images/about/01-coffee-tree-source.jpg"
                      alt="VinEco natural coffee wood products from Vietnam"
                      loading="eager"
                      className="
                        block
                        h-full
                        w-full
                        object-cover
                        object-center
                      "
                    />
                  </div>


                  <figcaption
                    className="
                      mt-2
                      text-[9px]
                      font-semibold
                      tracking-[0.03em]
                      text-[#6A645D]
                    "
                  >
                    Mature Robusta coffee wood ·
                    Vietnam&apos;s Central Highlands
                  </figcaption>

                </figure>
              </Reveal>

            </div>
          </div>
        </section>


        {/* ==================================================
            FACTS
        ================================================== */}

        <section className="bg-[#0F2F24] py-6 sm:py-8">
          <div
            className="
              mx-auto
              max-w-[1240px]
              px-4
              sm:px-6
              lg:px-8
            "
          >
            <div
              className="
                grid
                grid-cols-2
                gap-x-4
                gap-y-7

                md:grid-cols-4
                md:gap-6
              "
            >
              {facts.map((fact, index) => (
                <Reveal
                  key={fact.label}
                  delay={index * 60}
                >
                  <div>

                    <div className="flex flex-wrap items-end gap-1.5">

                      <strong
                        className="
                          text-[23px]
                          font-extrabold
                          leading-none
                          tracking-[-0.04em]
                          text-[#F59E0B]

                          sm:text-[28px]
                        "
                      >
                        {fact.value}
                      </strong>


                      {fact.unit && (
                        <span
                          className="
                            text-[10px]
                            font-extrabold
                            uppercase
                            tracking-[0.08em]
                            text-[#F59E0B]
                          "
                        >
                          {fact.unit}
                        </span>
                      )}

                    </div>


                    <p
                      className="
                        mt-2
                        max-w-[180px]
                        text-[11px]
                        font-medium
                        leading-5
                        text-white/70
                      "
                    >
                      {fact.label}
                    </p>

                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>


        {/* ==================================================
            OUR STORY
        ================================================== */}

        <section className="py-14 sm:py-16 lg:py-20">
          <div
            className="
              mx-auto
              max-w-[1120px]
              px-4
              sm:px-6
            "
          >
            <div
              className="
                grid
                items-center
                gap-8

                lg:grid-cols-[0.9fr_1.1fr]
                lg:gap-14
              "
            >

              {/* STORY COPY */}
              <Reveal variant="left">
                <div>

                  <SectionLabel>
                    01 / Our Story
                  </SectionLabel>


                  <h2
                    className="
                      mt-3
                      text-[34px]
                      font-extrabold
                      leading-[1]
                      tracking-[-0.045em]
                      text-[#0F2F24]

                      sm:text-[42px]
                      lg:text-[48px]
                    "
                  >
                    A second life after the final
                    coffee harvest.
                  </h2>


                  <p
                    className="
                      mt-5
                      text-[16px]
                      font-bold
                      leading-7
                      text-[#0F2F24]
                    "
                  >
                    Vietnam is world-renowned for
                    its coffee production.
                  </p>


                  <div
                    className="
                      mt-4
                      space-y-4
                      text-[14px]
                      font-medium
                      leading-7
                      text-[#5F625E]

                      sm:text-[15px]
                    "
                  >
                    <p>
                      VinEco reclaims mature Robusta
                      coffee trees, typically around

                      <strong className="font-extrabold text-[#0F2F24]">
                        {" "}20–25 years old
                      </strong>

                      , after they complete their
                      productive yield cycle.
                    </p>


                    <p>
                      The material comes from

                      <strong className="font-extrabold text-[#0F2F24]">
                        {" "}Gia Lai and Dak Lak
                      </strong>

                      , in Vietnam&apos;s Central Highlands.
                    </p>
                  </div>

                </div>
              </Reveal>


              {/* STORY IMAGE */}
              <Reveal
                variant="right"
                delay={100}
              >
                <ImageFrame
                  src="/images/about/02-reclaimed-coffee-wood.jpg"
                  alt="Mature Robusta coffee tree in Vietnam"
                  position="object-[52%_42%]"
                />
              </Reveal>

            </div>
          </div>
        </section>


        {/* ==================================================
            SECOND LIFE
        ================================================== */}

        <section className="bg-[#F4F1EA] py-14 sm:py-16 lg:py-20">
          <div
            className="
              mx-auto
              max-w-[1120px]
              px-4
              sm:px-6
            "
          >
            <div
              className="
                grid
                items-center
                gap-8

                lg:grid-cols-2
                lg:gap-14
              "
            >

              {/* IMAGE */}
              <Reveal variant="left">
                <ImageFrame
                  src="/images/about/04-wood-processing.png"
                  alt="Coffee wood being processed at VinEco"
                  position="object-[50%_48%]"
                />
              </Reveal>


              {/* COPY */}
              <Reveal
                variant="right"
                delay={100}
              >
                <div>

                  <SectionLabel>
                    02 / The Second Life
                  </SectionLabel>


                  <h2
                    className="
                      mt-3
                      text-[34px]
                      font-extrabold
                      leading-[1]
                      tracking-[-0.045em]
                      text-[#0F2F24]

                      sm:text-[42px]
                      lg:text-[48px]
                    "
                  >
                    From agricultural by-product
                    to pet product.
                  </h2>


                  <p
                    className="
                      mt-5
                      text-[16px]
                      font-bold
                      leading-7
                      text-[#0F2F24]
                    "
                  >
                    Instead of burning or discarding
                    the wood, VinEco gives it another purpose.
                  </p>


                  <p
                    className="
                      mt-4
                      text-[14px]
                      font-medium
                      leading-7
                      text-[#5F625E]

                      sm:text-[15px]
                    "
                  >
                    Mature coffee wood is selected
                    and processed into natural Coffee
                    Wood Dog Chews, creating additional
                    value from an existing agricultural
                    material.
                  </p>


                  <Link
                    to="/products"
                    className="
                      mt-6
                      inline-flex
                      items-center
                      gap-2
                      text-[14px]
                      font-extrabold
                      text-[#D97706]

                      transition
                      hover:text-[#0F2F24]
                    "
                  >
                    Explore coffee wood products

                    <SiteIcon
                      name="arrow"
                      size={16}
                    />
                  </Link>

                </div>
              </Reveal>

            </div>
          </div>
        </section>


        {/* ==================================================
            PROCESS / PROOF
        ================================================== */}

        <section className="bg-[#FAF8F5] py-14 sm:py-16 lg:py-20">
          <div
            className="
              mx-auto
              max-w-[1180px]
              px-4
              sm:px-6
              lg:px-8
            "
          >

            {/* HEADING */}
            <Reveal>
              <div
                className="
                  grid
                  gap-5
                  border-b
                  border-[#1E2A24]/10
                  pb-7

                  lg:grid-cols-[1fr_0.75fr]
                  lg:items-end
                  lg:gap-12
                  lg:pb-9
                "
              >

                <div>
                  <SectionLabel>
                    Inside VinEco
                  </SectionLabel>


                  <h2
                    className="
                      mt-3
                      max-w-[700px]
                      text-[36px]
                      font-extrabold
                      leading-[0.98]
                      tracking-[-0.05em]
                      text-[#0F2F24]

                      sm:text-[46px]
                      lg:text-[58px]
                    "
                  >
                    From production

                    <span className="block">
                      to export-ready.
                    </span>
                  </h2>
                </div>


                <p
                  className="
                    max-w-[500px]
                    text-[14px]
                    font-medium
                    leading-7
                    text-[#5F625E]

                    sm:text-[15px]

                    lg:justify-self-end
                  "
                >
                  A focused process covering quality
                  checks, packaging and documentation
                  for international B2B orders.
                </p>

              </div>
            </Reveal>


            {/* PROCESS GRID */}
            <div
              className="
                mt-7
                grid
                gap-4

                lg:mt-9
                lg:grid-cols-[1.05fr_.95fr]
                lg:gap-5
              "
            >

              {/* MAIN CARD */}
              <ProofFeatureCard
                item={proofItems[0]}
              />


              {/* SIDE CARDS */}
              <div className="grid gap-4 lg:gap-5">

                <ProofCompactCard
                  item={proofItems[1]}
                  index={0}
                />

                <ProofCompactCard
                  item={proofItems[2]}
                  index={1}
                />

              </div>
            </div>

          </div>
        </section>


        {/* ==================================================
            MISSION
        ================================================== */}

        <section className="bg-[#F4F1EA] py-14 sm:py-16 lg:py-20">
          <div
            className="
              mx-auto
              max-w-[1120px]
              px-4
              sm:px-6
            "
          >

            <Reveal>
              <div className="max-w-[680px]">

                <SectionLabel>
                  03 / Our Mission
                </SectionLabel>


                <h2
                  className="
                    mt-3
                    text-[34px]
                    font-extrabold
                    leading-[1]
                    tracking-[-0.045em]
                    text-[#0F2F24]

                    sm:text-[42px]
                    lg:text-[48px]
                  "
                >
                  Better use of what
                  already exists.
                </h2>

              </div>
            </Reveal>


            <div
              className="
                mt-8
                grid
                gap-3

                md:grid-cols-3
              "
            >
              {missionItems.map(
                (item, index) => (
                  <Reveal
                    key={item.number}
                    variant="up"
                    delay={index * 80}
                    className="h-full"
                  >
                    <article
                      className={[
                        "flex h-full min-h-[230px] flex-col",
                        "rounded-[20px] border p-5 sm:p-6",

                        item.featured
                          ? "border-[#F59E0B] bg-[#F59E0B] text-[#0F2F24]"
                          : item.dark
                            ? "border-[#0F2F24] bg-[#0F2F24] text-white"
                            : "border-[#1E2A24]/10 bg-white text-[#0F2F24]",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "text-[11px] font-extrabold",

                          item.dark
                            ? "text-[#F59E0B]"
                            : "text-[#0F2F24]/60",
                        ].join(" ")}
                      >
                        {item.number}
                      </span>


                      <h3
                        className="
                          mt-auto
                          pt-10
                          text-[22px]
                          font-extrabold
                          leading-[1.05]
                          tracking-[-0.035em]
                        "
                      >
                        {item.title}
                      </h3>


                      <p
                        className={[
                          "mt-3 text-[13px] font-medium leading-6",

                          item.dark
                            ? "text-white/70"
                            : "text-[#4F5752]",
                        ].join(" ")}
                      >
                        {item.description}
                      </p>

                    </article>
                  </Reveal>
                ),
              )}
            </div>

          </div>
        </section>


        {/* ==================================================
            FINAL CTA
        ================================================== */}

        <section className="py-14 sm:py-16 lg:py-20">
          <div
            className="
              mx-auto
              max-w-[900px]
              px-4
              text-center

              sm:px-6
            "
          >

            <Reveal variant="zoom">

              <SectionLabel>
                Continue the story
              </SectionLabel>


              <h2
                className="
                  mx-auto
                  mt-3
                  max-w-[760px]
                  text-[36px]
                  font-extrabold
                  leading-[0.98]
                  tracking-[-0.05em]
                  text-[#0F2F24]

                  sm:text-[48px]
                  lg:text-[56px]
                "
              >
                From Vietnam&apos;s coffee highlands
                to your next pet-product collection.
              </h2>


              <div
                className="
                  mt-7
                  flex
                  flex-col
                  justify-center
                  gap-3

                  sm:flex-row
                "
              >
                <Link
                  to="/oem-odm"
                  className="
                    inline-flex
                    min-h-[48px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[14px]
                    bg-[#F59E0B]
                    px-7
                    text-[14px]
                    font-extrabold
                    text-[#0F2F24]

                    transition

                    hover:-translate-y-0.5
                    hover:bg-[#D97706]
                  "
                >
                  Explore OEM / ODM

                  <SiteIcon
                    name="arrow"
                    size={16}
                  />
                </Link>


                <Link
                  to="/contact"
                  className="
                    inline-flex
                    min-h-[48px]
                    items-center
                    justify-center
                    rounded-[14px]
                    border
                    border-[#F59E0B]
                    bg-white
                    px-7
                    text-[14px]
                    font-bold
                    text-[#0F2F24]

                    transition
                    hover:bg-[#FFF4DA]
                  "
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