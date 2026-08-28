import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import Reveal from "../components/ui/Reveal";
import SmartImage from "../components/ui/SmartImage";
import SiteIcon from "../components/ui/SiteIcon";
import EditorialHighlight from "../components/about/EditorialHighlight";


/* ==========================================================
   CONTENT
========================================================== */

const aboutContent = {
  hero: {
    issue: "ABOUT / OUR STORY",
    eyebrow: "Natural Coffee Wood · Vietnam",
    image: "/images/about/01-coffee-tree-source.jpg",
    description:
      "VinEco gives a second life to mature Robusta coffee trees from Vietnam’s Central Highlands, transforming an agricultural by-product into premium natural pet products.",
  },

  facts: [
    {
      value: "20–25",
      unit: "YEARS",
      label: "Mature Robusta coffee trees",
    },
    {
      value: "ROBUSTA",
      label: "Natural coffee wood source",
    },
    {
      value: "GIA LAI",
      unit: "& DAK LAK",
      label: "Vietnam’s Central Highlands",
    },
    {
      value: "SECOND",
      unit: "LIFE",
      label: "Upcycled agricultural material",
    },
  ],
};


const proofCards = [
  {
    id: "qc",
    eyebrow: "Quality Control",
    title: "Material inspection",
    image: "/images/about/03-finished-chews-qc.png",
    alt: "VinEco finished coffee wood products during quality inspection",
    mode: "cover",
  },
  {
    id: "packing",
    eyebrow: "Production",
    title: "Vacuum-packed products",
    image: "/images/about/06-vacuum-packaging.png",
    alt: "VinEco coffee wood products vacuum packed after production",
    mode: "cover",
  },
  {
    id: "retail",
    eyebrow: "Private Label",
    title: "Retail-ready packaging",
    image: "/images/about/09-retail-box.png",
    alt: "VinEco retail packaging for Coffee Wood Dog Chew",
    mode: "contain",
  },
  {
    id: "size",
    eyebrow: "Product Range",
    title: "Sizing for different dogs",
    image: "/images/about/11-size-guide.png",
    alt: "VinEco Coffee Wood Dog Chew size guide",
    mode: "contain",
  },
  {
    id: "test",
    eyebrow: "Documentation",
    title: "Independent test documentation",
    image: "/images/about/10-sgs-report.png",
    alt: "SGS test report supplied for VinEco Coffee Wood Dog Chew",
    mode: "contain",
  },
  {
    id: "shipment",
    eyebrow: "Order Preparation",
    title: "Packed for delivery",
    image: "/images/about/12-export-order.png",
    alt: "VinEco packaged Coffee Wood Dog Chews prepared for shipment",
    mode: "cover",
  },
];


/* ==========================================================
   REUSABLE UI
========================================================== */

function AboutActions({ centered = false }) {
  return (
    <div
      className={[
        "about-v4-actions",
        centered ? "about-v4-actions--center" : "",
      ].join(" ")}
    >
      <Link
        to="/oem-odm"
        className="about-v4-button about-v4-button--orange"
      >
        Explore OEM / ODM
        <SiteIcon name="arrow" size={16} />
      </Link>

      <Link
        to="/contact"
        className="about-v4-button about-v4-button--outline"
      >
        Contact VinEco
      </Link>
    </div>
  );
}


function ChapterHeader({ number, eyebrow, children }) {
  return (
    <header className="about-v4-chapter-header">
      <Reveal variant="left">
        <span className="about-v4-chapter-number">
          {number}
        </span>
      </Reveal>

      <Reveal variant="right" delay={80}>
        <div>
          <p className="about-v4-eyebrow">
            {eyebrow}
          </p>

          <h2>{children}</h2>
        </div>
      </Reveal>
    </header>
  );
}


/*
 * ResponsiveFigure:
 * - luôn ép ảnh về 4:3
 * - ảnh portrait không kéo section quá cao
 * - mobile ~250px cao thay vì 500–700px
 * - desktop vẫn đủ lớn để nhìn chi tiết
 */
function ResponsiveFigure({
  src,
  alt,
  caption,
  position = "object-center",
  contain = false,
}) {
  return (
    <figure className="overflow-hidden rounded-[18px] border border-[#1E2A24]/10 bg-white shadow-[0_16px_40px_rgba(30,42,36,0.06)]">

      <div className="aspect-[4/3] w-full overflow-hidden bg-[#F4F1EA]">
        <SmartImage
          src={src}
          alt={alt}
          loading="lazy"
          className={[
            "block h-full w-full",
            contain
              ? "object-contain p-3 sm:p-4"
              : `object-cover ${position}`,
          ].join(" ")}
        />
      </div>

      {caption && (
        <figcaption className="px-3 pb-3 pt-2 text-[9px] font-semibold leading-4 tracking-[0.03em] text-[#6A645D]/75">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}


function ProofCard({ item, index }) {
  const imageClass =
    item.mode === "contain"
      ? "object-contain p-3 sm:p-4"
      : "object-cover object-center";

  return (
    <Reveal
      variant="up"
      delay={index * 60}
      className="h-full"
    >
      <article className="group flex h-full flex-col overflow-hidden rounded-[18px] border border-[#1E2A24]/10 bg-white shadow-[0_10px_28px_rgba(30,42,36,0.045)] transition duration-300 hover:-translate-y-1 hover:border-[#F59E0B]/55 hover:shadow-[0_18px_40px_rgba(30,42,36,0.08)]">

        {/* Mobile thấp hơn, desktop vừa phải */}
        <div className="aspect-[16/11] overflow-hidden bg-[#F4F1EA] sm:aspect-[4/3]">
          <SmartImage
            src={item.image}
            alt={item.alt}
            loading="lazy"
            className={`h-full w-full ${imageClass}`}
          />
        </div>

        <div className="p-4 sm:p-5">
          <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#D97706]">
            {item.eyebrow}
          </p>

          <h3 className="mt-2 text-base font-extrabold leading-tight tracking-[-0.025em] text-[#1E2A24] sm:text-lg">
            {item.title}
          </h3>
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

      <main className="about-v4">

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="about-v4-cover">
          <div className="about-v4-shell">

            <div className="about-v4-meta">
              <span>{aboutContent.hero.issue}</span>
              <span>VIETNAM</span>
            </div>

            <div className="about-v4-line" />


            <div className="about-v4-cover-grid">

              {/* HERO COPY */}
              <Reveal variant="left">
                <div className="about-v4-cover-copy">

                  <p className="about-v4-eyebrow">
                    {aboutContent.hero.eyebrow}
                  </p>

                  <h1>
                    Sustainably
                    <span>Reclaiming</span>
                    Vietnam&apos;s Central Highlands
                    <span>Coffee Wood.</span>
                  </h1>

                  <p className="about-v4-dek">
                    {aboutContent.hero.description}
                  </p>

                  <div className="about-v4-actions">
                    <Link
                      to="/products"
                      className="about-v4-button about-v4-button--orange"
                    >
                      Explore products
                      <SiteIcon name="arrow" size={16} />
                    </Link>

                    <Link
                      to="/contact"
                      className="about-v4-button about-v4-button--outline"
                    >
                      Contact VinEco
                    </Link>
                  </div>

                </div>
              </Reveal>


              {/* HERO IMAGE */}
              <Reveal variant="right" delay={100}>
                <figure className="about-v4-cover-media">

                  <div className="about-v4-cover-media-image aspect-[4/3] max-h-[520px]">
                    <SmartImage
                      src={aboutContent.hero.image}
                      alt="Mature Robusta coffee tree in Vietnam"
                      loading="eager"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <figcaption>
                    Mature Robusta coffee trees ·
                    Vietnam&apos;s Central Highlands.
                  </figcaption>

                </figure>
              </Reveal>

            </div>

          </div>
        </section>


        {/* ==================================================
            FACTS
        ================================================== */}

        <section className="about-v4-facts">
          <div className="about-v4-shell">

            <div className="about-v4-facts-grid">
              {aboutContent.facts.map((fact, index) => (
                <Reveal
                  key={fact.label}
                  delay={index * 70}
                >
                  <article className="about-v4-fact">
                    <strong>{fact.value}</strong>

                    {fact.unit && (
                      <span>{fact.unit}</span>
                    )}

                    <p>{fact.label}</p>
                  </article>
                </Reveal>
              ))}
            </div>

          </div>
        </section>


        {/* ==================================================
            EDITORIAL INTRO
        ================================================== */}

        <section className="about-v4-opening">
          <div className="about-v4-article">

            <Reveal>
              <p
                className="about-v4-opening-letter"
                aria-hidden="true"
              >
                V
              </p>
            </Reveal>

            <Reveal delay={70}>
              <p className="about-v4-opening-lead">
                ietnam is world-renowned for its
                coffee production.
              </p>
            </Reveal>

            <Reveal delay={130}>
              <div className="about-v4-body-copy">

                <p>
                  At VinEco, we give a{" "}
                  <EditorialHighlight>
                    second life
                  </EditorialHighlight>{" "}
                  to mature Robusta coffee trees
                  harvested after completing their
                  yield cycles.
                </p>

                <p>
                  These trees are typically{" "}
                  <EditorialHighlight delay={100}>
                    20–25 years old
                  </EditorialHighlight>{" "}
                  and come from the basalt soil of{" "}
                  <EditorialHighlight delay={180}>
                    Gia Lai and Dak Lak provinces
                  </EditorialHighlight>{" "}
                  in Vietnam&apos;s Central Highlands.
                </p>

              </div>
            </Reveal>

          </div>
        </section>


        {/* ==================================================
            01 — ORIGIN
        ================================================== */}

        <section className="about-v4-chapter">
          <div className="about-v4-shell">

            <ChapterHeader
              number="01"
              eyebrow="The Origin"
            >
              A second life begins after the final
              coffee harvest.
            </ChapterHeader>


            <div className="about-v4-story-grid">

              <Reveal variant="left">
                <div className="about-v4-story-copy">

                  <p className="about-v4-story-lead">
                    The productive cycle may end,
                    but the coffee wood still has value.
                  </p>

                  <p>
                    VinEco works with mature{" "}
                    <EditorialHighlight>
                      Robusta coffee trees
                    </EditorialHighlight>{" "}
                    grown in Vietnam&apos;s Central Highlands.
                  </p>

                  <p>
                    After approximately{" "}
                    <EditorialHighlight delay={100}>
                      20–25 years
                    </EditorialHighlight>
                    , these trees complete their
                    productive yield cycles.
                  </p>

                  <p>
                    Instead of viewing the wood as waste,
                    VinEco sees an existing natural material
                    ready for a responsible second life.
                  </p>

                </div>
              </Reveal>


              <Reveal variant="right" delay={100}>
                <ResponsiveFigure
                  src="/images/about/02-reclaimed-coffee-wood.jpg"
                  alt="Mature Robusta coffee tree in Vietnam"
                  position="object-[52%_42%]"
                  caption="Mature Robusta coffee trees · source material from Vietnam."
                />
              </Reveal>

            </div>

          </div>
        </section>


        {/* ==================================================
            BREAK
        ================================================== */}

        <section className="about-v4-break">
          <div className="about-v4-shell">

            <Reveal variant="up">
              <p>
                FROM AGRICULTURAL
                BY-PRODUCT
                <span>
                  TO SOMETHING
                  WORTH KEEPING.
                </span>
              </p>
            </Reveal>

          </div>
        </section>


        {/* ==================================================
            02 — SECOND LIFE
        ================================================== */}

        <section className="about-v4-chapter about-v4-chapter--paper">
          <div className="about-v4-shell">

            <ChapterHeader
              number="02"
              eyebrow="The Second Life"
            >
              From agricultural by-product
              to premium pet product.
            </ChapterHeader>


            <div className="about-v4-feature-grid">

              <Reveal variant="left">
                <ResponsiveFigure
                  src="/images/about/04-wood-processing.png"
                  alt="Coffee wood being processed at VinEco"
                  position="object-[50%_48%]"
                  caption="Coffee wood processing · preparing reclaimed material for its second life."
                />
              </Reveal>


              <Reveal variant="right" delay={100}>
                <div className="about-v4-story-copy">

                  <p className="about-v4-story-lead">
                    Instead of burning or discarding
                    these agricultural by-products,
                    VinEco gives them another purpose.
                  </p>

                  <p>
                    We{" "}
                    <EditorialHighlight>
                      upcycle them
                    </EditorialHighlight>{" "}
                    into premium{" "}
                    <EditorialHighlight delay={120}>
                      Coffee Wood Dog Chews
                    </EditorialHighlight>
                    .
                  </p>

                  <p>
                    Our aim is to make better use of
                    an existing agricultural material
                    while creating natural and satisfying
                    chew products for pets worldwide.
                  </p>

                </div>
              </Reveal>

            </div>


            {/* FINISHED PRODUCT */}
            <Reveal variant="zoom">
              <div className="about-v4-product-feature">

                <div>
                  <p className="about-v4-eyebrow">
                    VinEco Product
                  </p>

                  <h3>
                    Coffee wood,
                    reimagined for pets.
                  </h3>

                  <p>
                    Premium Coffee Wood Dog Chews
                    made from reclaimed mature
                    Robusta coffee wood.
                  </p>
                </div>


                {/* Không dùng class image legacy để tránh ảnh quá cao */}
                <div className="flex min-h-0 items-center justify-center bg-[#F4F1EA] p-3 sm:p-5">

                  <div className="aspect-[4/3] w-full max-w-[620px] overflow-hidden rounded-[14px] bg-white">
                    <SmartImage
                      src="/images/about/05-finished-product.png"
                      alt="VinEco Coffee Wood Dog Chew"
                      loading="lazy"
                      className="h-full w-full object-contain p-2 sm:p-4"
                    />
                  </div>

                </div>

              </div>
            </Reveal>

          </div>
        </section>


        {/* ==================================================
            PROCESS / PROOF
        ================================================== */}

        <section className="bg-[#FAF8F5] py-12 sm:py-16 lg:py-20">
          <div className="about-v4-shell">

            <Reveal>
              <div className="max-w-[760px]">

                <p className="about-v4-eyebrow">
                  Inside VinEco
                </p>

                <h2 className="mt-3 text-[clamp(2.15rem,4vw,4.2rem)] font-[850] leading-[0.98] tracking-[-0.05em] text-[#1E2A24]">
                  From reclaimed wood
                  to a finished product.
                </h2>

                <p className="mt-4 max-w-[640px] text-sm font-medium leading-7 text-[#6A645D]">
                  Processing, product preparation,
                  packaging and documentation form
                  part of the journey from raw coffee
                  wood to an export-ready pet product.
                </p>

              </div>
            </Reveal>


            <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4 xl:grid-cols-3">

              {proofCards.map((item, index) => (
                <ProofCard
                  key={item.id}
                  item={item}
                  index={index}
                />
              ))}

            </div>

          </div>
        </section>


        {/* ==================================================
            QUOTE
        ================================================== */}

        <section className="about-v4-quote">
          <div className="about-v4-shell">

            <Reveal variant="zoom">
              <blockquote>
                <span>“</span>

                A second life for
                a natural material
                that still has{" "}
                <EditorialHighlight>
                  value.
                </EditorialHighlight>
              </blockquote>
            </Reveal>

          </div>
        </section>


        {/* ==================================================
            03 — MISSION
        ================================================== */}

        <section className="about-v4-mission">
          <div className="about-v4-shell">

            <Reveal>
              <div className="about-v4-mission-heading">

                <p className="about-v4-eyebrow">
                  03 / The Mission
                </p>

                <h2>
                  Better for pets.
                  Better use of what already exists.
                </h2>

              </div>
            </Reveal>


            <div className="about-v4-mission-grid">

              <Reveal variant="up">
                <article className="about-v4-mission-card about-v4-mission-card--orange">
                  <span>01</span>

                  <h3>
                    For pets worldwide.
                  </h3>

                  <p>
                    Provide pets with{" "}
                    <EditorialHighlight>
                      safe, chemical-free
                    </EditorialHighlight>{" "}
                    and satisfying chew toys.
                  </p>
                </article>
              </Reveal>


              <Reveal variant="up" delay={100}>
                <article className="about-v4-mission-card">
                  <span>02</span>

                  <h3>
                    For local communities.
                  </h3>

                  <p>
                    Create new value from mature
                    coffee wood while supporting
                    agricultural communities connected
                    to the material&apos;s source.
                  </p>
                </article>
              </Reveal>


              <Reveal variant="up" delay={200}>
                <article className="about-v4-mission-card about-v4-mission-card--navy">
                  <span>03</span>

                  <h3>
                    For less waste.
                  </h3>

                  <p>
                    Support{" "}
                    <EditorialHighlight>
                      zero-waste sustainable practices
                    </EditorialHighlight>{" "}
                    by upcycling agricultural
                    by-products instead of discarding them.
                  </p>
                </article>
              </Reveal>

            </div>

          </div>
        </section>


        {/* ==================================================
            CLOSING
        ================================================== */}

        <section className="about-v4-closing">
          <div className="about-v4-shell">

            <Reveal>

              <p className="about-v4-eyebrow">
                Continue the story
              </p>

              <h2>
                From Vietnam&apos;s coffee highlands
                to your next pet-product collection.
              </h2>

              <AboutActions centered />

            </Reveal>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingContactDock />
    </>
  );
}