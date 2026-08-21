import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import Reveal from "../components/ui/Reveal";
import SmartImage from "../components/ui/SmartImage";
import SiteIcon from "../components/ui/SiteIcon";

import ServiceIndex from "../components/service/ServiceIndex";
import ServiceChapter from "../components/service/ServiceChapter";

import { serviceContent } from "../data/serviceContent";
import { projectData } from "../data/projectData";

export default function ServicePage() {
  return (
    <>
      <Header />

      <main className="service-v2">

        {/* ================================================
            HERO
        ================================================ */}

        <section className="service-v2-hero">

          <div className="service-v2-shell">

            <div className="service-v2-hero__meta">

              <span>
                VINECO SERVICES
              </span>

              <span>
                OEM / ODM · PRIVATE LABEL
              </span>

            </div>

            <div className="service-v2-rule" />


            <div className="service-v2-hero__grid">

              <Reveal variant="left">

                <div className="service-v2-hero__copy">

                  <p className="service-v2-eyebrow">
                    {serviceContent.hero.eyebrow}
                  </p>

                  <h1>
                    More than
                    <span>
                      manufacturing.
                    </span>

                    We help build
                    <span>
                      the brand around it.
                    </span>
                  </h1>

                  <p>
                    {
                      serviceContent.hero
                        .description
                    }
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


              <Reveal
                variant="right"
                delay={100}
              >

                <div className="service-v2-hero-collage">

                  <figure className="service-v2-hero-collage__large">

                    <SmartImage
                      src="/images/product-classic.webp"
                      alt="VinEco natural pet products"
                      className="h-full w-full object-contain p-6"
                    />

                    <span>
                      PRODUCT SUPPORT
                    </span>

                  </figure>


                  <figure className="service-v2-hero-collage__small">

                    <SmartImage
                      src="/images/product-loofah.webp"
                      alt=""
                      className="h-full w-full object-contain p-5"
                    />

                  </figure>


                  <div className="service-v2-hero-collage__orange">

                    <span>
                      08
                    </span>

                    <p>
                      SERVICE
                      <br />
                      AREAS
                    </p>

                  </div>

                </div>

              </Reveal>

            </div>


            <div className="service-v2-pills">

              {[
                "Product Media",
                "Packaging",
                "Labels",
                "Engraving",
                "Sampling",
                "OEM / ODM",
              ].map(
                (item) => (
                  <span key={item}>
                    {item}
                  </span>
                ),
              )}

            </div>

          </div>

        </section>


        {/* ================================================
            CONTENT
        ================================================ */}

        <section className="service-v2-body">

          <div className="service-v2-layout">

            <ServiceIndex
              services={
                serviceContent.services
              }
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
                    each private-label, OEM or ODM
                    project.
                  </p>

                </header>
              </Reveal>


              {serviceContent.services.map(
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


        {/* ================================================
            OVERVIEW TABLE
        ================================================ */}

        <section className="service-v2-overview">

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

                  <span>
                    SERVICE
                  </span>

                  <span>
                    STATUS
                  </span>

                  <span>
                    PROJECT TYPE
                  </span>

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


        {/* ================================================
            GLOBAL
        ================================================ */}

        <section className="service-v2-global">

          <div className="service-v2-shell">

            <Reveal>

              <div className="service-v2-global__grid">

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


                <div className="service-v2-global__visual">

                  <div className="service-v2-global__map">
                    <SmartImage
                      src="/images/service/service-world-map.svg"
                      alt="Global service support"
                      className="h-full w-full object-contain"
                    />
                  </div>


                  <div className="service-v2-global__stamp">

                    <strong>
                      VN
                    </strong>

                    <span>
                      GLOBAL
                      <br />
                      SUPPORT
                    </span>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </section>


        {/* ================================================
            FAQ
        ================================================ */}

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


        {/* ================================================
            CTA
        ================================================ */}

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