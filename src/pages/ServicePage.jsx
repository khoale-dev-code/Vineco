import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import Reveal from "../components/ui/Reveal";
import SmartImage from "../components/ui/SmartImage";
import SiteIcon from "../components/ui/SiteIcon";

import ServiceIndex from "../components/service/ServiceIndex";
import ServiceChapter from "../components/service/ServiceChapter";

import ExportWorldMap from "../components/service/GlobalBusinessMap";

import { serviceContent } from "../data/serviceContent";
import { projectData } from "../data/projectData";


/* =========================================================
   GLOBAL BUSINESS VISUAL
   No external library required
========================================================= */

function GlobalBusinessVisual() {
  const exportFacts = [
    { label: "Origin", value: "Vietnam" },
    { label: "Market", value: "Global B2B" },
    { label: "Support", value: "OEM / ODM" },
  ];

  return (
    <div className="relative w-full overflow-hidden rounded-[22px] border border-[#1E2A24]/8 bg-[#FAF8F5] shadow-[0_24px_60px_rgba(30,42,36,0.08)] sm:rounded-[28px]">

      {/* TOP */}
      <div className="flex items-start justify-between gap-4 border-b border-[#1E2A24]/8 bg-white px-5 py-4 sm:px-6 sm:py-5">
        <div>
          <span className="block text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#D97706]">
            Export Network
          </span>

          <strong className="mt-1.5 block text-[14px] font-extrabold tracking-[-0.02em] text-[#0F2F24] sm:text-[16px]">
            From Vietnam to global markets.
          </strong>
        </div>

        <span className="shrink-0 rounded-full border border-[#F59E0B]/30 bg-[#F59E0B]/10 px-3 py-1.5 text-[8px] font-extrabold uppercase tracking-[0.12em] text-[#D97706] sm:text-[9px]">
          B2B Export
        </span>
      </div>


      {/* MAP */}
      <div className="relative flex min-h-[260px] items-center justify-center overflow-hidden sm:min-h-[340px] lg:min-h-[390px]">

        {/* SUBTLE GRID */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,42,36,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(30,42,36,.08) 1px, transparent 1px)",
            backgroundSize: "34px 34px",
          }}
        />

        {/* SOFT ORANGE GLOW */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[52%] top-[52%] h-36 w-36 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F59E0B]/10 blur-3xl sm:h-48 sm:w-48"
        />

        <ExportWorldMap />


        {/* VIETNAM BADGE */}
        <div className="absolute bottom-4 right-4 z-20 flex items-center gap-2 rounded-[14px] bg-[#0F2F24] px-3.5 py-2.5 shadow-[0_14px_32px_rgba(15,47,36,.22)] sm:bottom-5 sm:right-5 sm:px-4">
          <strong className="text-[20px] font-black leading-none text-[#F59E0B] sm:text-[23px]">
            VN
          </strong>

          <span className="text-[6.5px] font-extrabold uppercase leading-[1.25] tracking-[0.08em] text-white sm:text-[7.5px]">
            Global
            <br />
            Support
          </span>
        </div>

      </div>


      {/* FACTS */}
      <div className="grid grid-cols-1 border-t border-[#1E2A24]/8 bg-white sm:grid-cols-3">
        {exportFacts.map((item, index) => (
          <div
            key={item.label}
            className={[
              "flex items-center justify-between gap-4 px-5 py-3.5 transition-colors duration-200 hover:bg-[#FAF8F5] sm:block sm:px-6 sm:py-5",
              index ? "border-t border-[#1E2A24]/8 sm:border-l sm:border-t-0" : "",
            ].join(" ")}
          >
            <span className="text-[8px] font-extrabold uppercase tracking-[0.14em] text-[#D97706]">
              {item.label}
            </span>

            <strong className="text-[12px] font-extrabold text-[#0F2F24] sm:mt-1.5 sm:block sm:text-[13px]">
              {item.value}
            </strong>
          </div>
        ))}
      </div>

    </div>
  );
}


/* =========================================================
   SERVICE PAGE
========================================================= */

export default function ServicePage() {
  const services = serviceContent.services ?? [];

  const heroImages =
    serviceContent.hero.images ?? [
      "/images/service-mobile/service-hero-main.png?v=5",
      "/images/service-mobile/service-hero-secondary.png?v=5",
    ];

  return (
    <>
      <Header />

      <main className="service-v2">

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="service-v2-hero">
          <div className="service-v2-shell">

            <div className="service-v2-rule" />


            <div className="service-v2-hero__grid">

              {/* COPY */}
              <Reveal variant="left">
                <div className="service-v2-hero__copy">

                  <p className="service-v2-eyebrow">
                    {serviceContent.hero.eyebrow}
                  </p>


                  <h1>
                    More than
                    <span>manufacturing.</span>

                    We help build
                    <span>the brand around it.</span>
                  </h1>


                  <p>
                    {serviceContent.hero.description}
                  </p>


                  <div className="service-v2-hero__actions">

                    <Link
                      to="/contact"
                      className="service-v2-button service-v2-button--orange"
                    >
                      Start your project

                      <SiteIcon
                        name="arrow"
                        size={15}
                      />
                    </Link>


                    <Link
                      to="/oem-odm"
                      className="service-v2-button service-v2-button--outline"
                    >
                      OEM / ODM
                    </Link>

                  </div>

                </div>
              </Reveal>


              {/* VISUAL */}
              <Reveal
                variant="right"
                delay={100}
              >
                <div className="service-v2-hero-collage">

                  <figure
                    className="service-v2-hero-collage__large"
                    style={{
                      border: "none",
                      background: "transparent",
                      padding: 0,
                      margin: 0,
                      boxShadow: "none",
                      outline: "none",
                      overflow: "hidden",
                    }}
                  >

                    <SmartImage
                      src={heroImages[0]}
                      alt="VinEco packaging and product support"
                      className="block h-full w-full object-contain"
                    />

                    <span>
                      PRODUCT SUPPORT
                    </span>

                  </figure>


                  {heroImages[1] && (
                    <figure
                      className="service-v2-hero-collage__small"
                      style={{
                        border: "none",
                        background: "transparent",
                        padding: 0,
                        margin: 0,
                        boxShadow: "none",
                      outline: "none",
                        overflow: "hidden",
                      }}
                    >

                      <SmartImage
                        src={heroImages[1]}
                        alt="VinEco branding and private-label support"
                        className="block h-full w-full object-contain"
                      />

                    </figure>
                  )}


                </div>
              </Reveal>

            </div>


          </div>
        </section>


        {/* ==================================================
            CONTENT
        ================================================== */}

        <section className="service-v2-body">
          <div className="service-v2-layout">

            <ServiceIndex
              services={services}
            />


            <div className="service-v2-content">

              <Reveal>
                <header className="service-v2-intro">

                  <p className="service-v2-eyebrow">
                    Full-Service Support
                  </p>


                  <h2>
                    From product idea
                    to market-ready presentation.
                  </h2>


                  <p>
                    VinEco services can be combined
                    according to the requirements of
                    each Private Label, OEM or ODM
                    project.
                  </p>

                </header>
              </Reveal>


              {services.map(
                (service, index) => (
                  <ServiceChapter
                    key={service.id}
                    service={service}
                    index={index}
                  />
                ),
              )}

            </div>

          </div>
        </section>


        {/* ==================================================
            OVERVIEW
        ================================================== */}

        <section className="service-v2-overview" style={{ backgroundColor: "#FCFAF7" }}>
          <div className="service-v2-shell">

            <Reveal>
              <header className="service-v2-overview__header">

                <p className="service-v2-eyebrow">
                  Service At A Glance
                </p>


                <h2>
                  One partner.
                  <span>
                    Multiple ways to build.
                  </span>
                </h2>

              </header>
            </Reveal>


            <Reveal delay={80}>
              <div className="service-v2-table">

                <div className="service-v2-table__head">
                  <span>SERVICE</span>
                  <span>STATUS</span>
                  <span>PROJECT TYPE</span>
                </div>


                {serviceContent.overview.map(
                  (row) => (
                    <div
                      key={row.service}
                      className="service-v2-table__row"
                    >
                      <strong>
                        {row.service}
                      </strong>

                      <span className="service-v2-status">
                        {row.availability}
                      </span>

                      <span>
                        {row.note}
                      </span>
                    </div>
                  ),
                )}

              </div>
            </Reveal>

          </div>
        </section>


        {/* ==================================================
            GLOBAL BUSINESS SUPPORT
        ================================================== */}

        <section className="service-v2-global">
          <div className="service-v2-shell">

            <Reveal>
              <div className="service-v2-global__grid">

                {/* COPY */}
                <div className="service-v2-global__copy">

                  <p className="service-v2-eyebrow">
                    Global Business Support
                  </p>


                  <h2>
                    Built in Vietnam.

                    <span>
                      Prepared for global brands.
                    </span>
                  </h2>


                  <p>
                    VinEco combines natural materials,
                    product development, packaging
                    discussion and export-oriented B2B
                    support in one manufacturing
                    relationship.
                  </p>


                  <Link
                    to="/contact"
                    className="service-v2-button service-v2-button--navy"
                  >
                    Discuss your project

                    <SiteIcon
                      name="arrow"
                      size={15}
                    />
                  </Link>

                </div>


                {/* MAP */}
                <div className="service-v2-global__visual">
                  <GlobalBusinessVisual />
                </div>

              </div>
            </Reveal>

          </div>
        </section>


        {/* ==================================================
            FAQ
        ================================================== */}

        <section className="service-v2-faq">
          <div className="service-v2-shell">

            <Reveal>
              <header className="service-v2-faq__header">

                <p className="service-v2-eyebrow">
                  FAQ
                </p>


                <h2>
                  Frequently Asked
                  Questions
                </h2>

              </header>
            </Reveal>


            <div className="service-v2-faq__list">

              {projectData.faq.map(
                (item, index) => (
                  <Reveal
                    key={item.q}
                    delay={index * 40}
                  >
                    <details className="service-v2-faq-item">

                      <summary>
                        <span>
                          {item.q}
                        </span>

                        <strong>
                          +
                        </strong>
                      </summary>


                      <p>
                        {item.a}
                      </p>

                    </details>
                  </Reveal>
                ),
              )}

            </div>

          </div>
        </section>


        {/* ==================================================
            CTA
        ================================================== */}

        <section className="service-v2-cta">
          <div className="service-v2-shell">

            <Reveal variant="zoom">
              <div className="service-v2-cta__inner">

                <p>
                  YOUR NEXT PRODUCT
                </p>


                <h2>
                  Need more than
                  just manufacturing?
                </h2>


                <span>
                  Tell us what you want to build.
                  We can discuss the product,
                  packaging, branding and next steps.
                </span>


                <div>

                  <Link
                    to="/contact"
                    className="service-v2-button service-v2-button--navy"
                  >
                    Contact VinEco
                  </Link>


                  <Link
                    to="/products"
                    className="service-v2-button service-v2-button--white"
                  >
                    View products
                  </Link>

                </div>

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