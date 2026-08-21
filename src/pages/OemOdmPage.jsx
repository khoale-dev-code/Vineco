import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import Reveal from "../components/ui/Reveal";
import SiteIcon from "../components/ui/SiteIcon";

import OemModels from "../components/oem/OemModels";
import OemProcess from "../components/oem/OemProcess";
import OemCapabilities from "../components/oem/OemCapabilities";

export default function OemOdmPage() {
  return (
    <>
      <Header />

      <main className="oem-v3">

        {/* ================================================
            HERO
        ================================================ */}

        <section className="oem-v3-hero">

          <div
            className="oem-v3-hero__orb oem-v3-hero__orb--one"
            aria-hidden="true"
          />

          <div
            className="oem-v3-hero__orb oem-v3-hero__orb--two"
            aria-hidden="true"
          />


          <div className="oem-v3-shell">

            <div className="oem-v3-hero__meta">

              <span>
                VINECO · OEM / ODM
              </span>

              <span>
                VIETNAM
              </span>

            </div>


            <div className="oem-v3-hero__rule" />


            <div className="oem-v3-hero__grid">

              <Reveal variant="left">

                <div className="oem-v3-hero__copy">

                  <div className="oem-v3-hero__badge">

                    <span />

                    OEM / ODM SERVICES

                  </div>


                  <h1>
                    Your idea.
                    <span>
                      Built your way.
                    </span>
                    Made by
                    <strong>
                      VinEco.
                    </strong>
                  </h1>


                  <p>
                    From private-label projects to
                    custom OEM and ODM development,
                    VinEco helps natural pet-product
                    brands move from idea to
                    production.
                  </p>


                  <div className="oem-v3-hero__actions">

                    <Link
                      to="/contact"
                      className="oem-v3-hero-button oem-v3-hero-button--navy"
                    >
                      Start your project

                      <SiteIcon
                        name="arrow"
                        size={15}
                      />
                    </Link>

                    <Link
                      to="/products"
                      className="oem-v3-hero-button oem-v3-hero-button--white"
                    >
                      View products
                    </Link>

                  </div>

                </div>

              </Reveal>


              <Reveal
                variant="right"
                delay={100}
              >

                <div className="oem-v3-hero__visual">

                  <div className="oem-v3-hero__visual-main">

                    <span>
                      01
                    </span>

                    <strong>
                      PRODUCT
                    </strong>

                    <p>
                      Natural-material
                      pet products
                    </p>

                  </div>


                  <div className="oem-v3-hero__visual-small oem-v3-hero__visual-small--one">

                    <span>
                      02
                    </span>

                    <strong>
                      BRAND
                    </strong>

                    <p>
                      Labels & packaging
                    </p>

                  </div>


                  <div className="oem-v3-hero__visual-small oem-v3-hero__visual-small--two">

                    <span>
                      03
                    </span>

                    <strong>
                      MARKET
                    </strong>

                    <p>
                      Export-ready support
                    </p>

                  </div>


                  <div className="oem-v3-hero__stamp">
                    CUSTOM
                    <br />
                    PROJECT
                  </div>

                </div>

              </Reveal>

            </div>

          </div>

        </section>


        {/* ================================================
            MOTION TICKER
        ================================================ */}

        <div className="oem-v3-ticker">

          <div className="oem-v3-ticker__track">

            <span>OEM</span>
            <i>✦</i>

            <span>ODM</span>
            <i>✦</i>

            <span>PRIVATE LABEL</span>
            <i>✦</i>

            <span>SAMPLING</span>
            <i>✦</i>

            <span>PACKAGING</span>
            <i>✦</i>

            <span>BRANDING</span>
            <i>✦</i>

            <span>OEM</span>
            <i>✦</i>

            <span>ODM</span>
            <i>✦</i>

            <span>PRIVATE LABEL</span>
            <i>✦</i>

            <span>SAMPLING</span>
            <i>✦</i>

            <span>PACKAGING</span>
            <i>✦</i>

            <span>BRANDING</span>
            <i>✦</i>

          </div>

        </div>


        <OemModels />


        {/* ================================================
            ORANGE STATEMENT
        ================================================ */}

        <section className="oem-v3-statement">

          <div className="oem-v3-shell">

            <Reveal variant="zoom">

              <div className="oem-v3-statement__inner">

                <p>
                  ONE MANUFACTURING PARTNER
                </p>

                <h2>
                  Product.
                  <span>
                    Packaging.
                  </span>
                  Branding.
                  <strong>
                    One clear process.
                  </strong>
                </h2>

              </div>

            </Reveal>

          </div>

        </section>


        <OemProcess />

        <OemCapabilities />


        {/* ================================================
            CTA
        ================================================ */}

        <section className="oem-v3-final">

          <div className="oem-v3-shell">

            <Reveal variant="zoom">

              <div className="oem-v3-final__inner">

                <p>
                  READY WHEN YOU ARE
                </p>

                <h2>
                  Bring us the idea.
                  <span>
                    We'll help shape
                    the next step.
                  </span>
                </h2>

                <div>

                  <Link
                    to="/contact"
                    className="oem-v3-hero-button oem-v3-hero-button--navy"
                  >
                    Start your project

                    <SiteIcon
                      name="arrow"
                      size={15}
                    />
                  </Link>

                  <Link
                    to="/service"
                    className="oem-v3-hero-button oem-v3-hero-button--white"
                  >
                    Explore services
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