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
    unit: "",
    label: "Vietnam Central Highlands",
  },
  {
    value: "SECOND",
    unit: "LIFE",
    label: "Upcycled natural material",
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
                      aspect-[4/5]
                      max-h-[600px]
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
                          text-[25px]
                          font-extrabold
                          leading-none
                          tracking-[-0.04em]
                          text-[#F59E0B]

                          sm:text-[30px]
                        "
                      >
                        {fact.value}
                      </strong>


                      {fact.unit && (
                        <span
                          className="
                            text-[25px]
                            font-extrabold
                            leading-none
                            tracking-[-0.04em]
                            text-[#F59E0B]

                            sm:text-[30px]
                          "
                        >
                          {fact.unit}
                        </span>
                      )}

                    </div>


                    <p
                      className="
                        mt-2
                        max-w-[190px]
                        text-[13px]
                        font-semibold
                        leading-6
                        text-white/80

                        sm:text-[14px]
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

                  <h2
                    className="
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
                        {" "}Gia Lai Province
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

                  <h2
                    className="
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

              <h2
                className="
                  mx-auto
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