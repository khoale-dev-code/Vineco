import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import Reveal from "../components/ui/Reveal";
import SmartImage from "../components/ui/SmartImage";
import SiteIcon from "../components/ui/SiteIcon";

import EditorialHighlight from "../components/about/EditorialHighlight";

import { aboutV4 } from "../data/aboutV4";

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="about-v4">

        {/* ===================================================
            COVER
        =================================================== */}

        <section className="about-v4-cover">

          <div className="about-v4-shell">

            <div className="about-v4-meta">
              <span>
                {aboutV4.hero.issue}
              </span>

              <span>
                VIETNAM
              </span>
            </div>

            <div className="about-v4-line" />

            <div className="about-v4-cover-grid">

              <Reveal variant="left">

                <div className="about-v4-cover-copy">

                  <p className="about-v4-eyebrow">
                    {aboutV4.hero.eyebrow}
                  </p>

                  <h1>
                    Sustainably
                    <span>
                      reclaiming
                    </span>
                    Vietnam's
                    <span>
                      coffee wood.
                    </span>
                  </h1>

                  <p className="about-v4-dek">
                    {aboutV4.hero.description}
                  </p>

                  <div className="about-v4-actions">

                    <Link
                      to="/products"
                      className="about-v4-button about-v4-button--orange"
                    >
                      Explore products

                      <SiteIcon
                        name="arrow"
                        size={16}
                      />
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


              <Reveal
                variant="right"
                delay={100}
              >

                <figure className="about-v4-cover-media">

                  <div className="about-v4-cover-media-image">

                    <SmartImage
                      src={aboutV4.hero.image}
                      alt="Vietnam Central Highlands"
                      loading="eager"
                      className="h-full w-full object-cover"
                    />

                  </div>

                  <figcaption>
                    SAMPLE VISUAL · Replace with a real
                    photo of Gia Lai / Dak Lak when available.
                  </figcaption>

                </figure>

              </Reveal>

            </div>

          </div>

        </section>


        {/* ===================================================
            FACT STRIP
        =================================================== */}

        <section className="about-v4-facts">

          <div className="about-v4-shell">

            <div className="about-v4-facts-grid">

              {aboutV4.facts.map(
                (fact, index) => (

                  <Reveal
                    key={fact.label}
                    delay={index * 70}
                  >

                    <article className="about-v4-fact">

                      <strong>
                        {fact.value}
                      </strong>

                      {fact.unit && (
                        <span>
                          {fact.unit}
                        </span>
                      )}

                      <p>
                        {fact.label}
                      </p>

                    </article>

                  </Reveal>

                ),
              )}

            </div>

          </div>

        </section>


        {/* ===================================================
            OPENING / SOURCE TEXT
        =================================================== */}

        <section className="about-v4-opening">

          <div className="about-v4-article">

            <Reveal>

              <p className="about-v4-opening-letter">
                V
              </p>

            </Reveal>

            <Reveal delay={70}>

              <p className="about-v4-opening-lead">
                Vietnam is world-renowned for its
                coffee production.
              </p>

            </Reveal>

            <Reveal delay={130}>

              <div className="about-v4-body-copy">

                <p>
                  At VinEco, we give a
                  {" "}
                  <EditorialHighlight>
                    second life
                  </EditorialHighlight>
                  {" "}
                  to mature Robusta coffee trees
                  harvested after completing their
                  yield cycles.
                </p>

                <p>
                  These trees are typically
                  {" "}
                  <EditorialHighlight delay={100}>
                    20–25 years old
                  </EditorialHighlight>
                  {" "}
                  and come from the basalt soil of
                  {" "}
                  <EditorialHighlight delay={180}>
                    Gia Lai and Dak Lak provinces
                  </EditorialHighlight>
                  {" "}
                  in Vietnam's Central Highlands.
                </p>

              </div>

            </Reveal>

          </div>

        </section>


        {/* ===================================================
            CHAPTER 01
        =================================================== */}

        <section className="about-v4-chapter">

          <div className="about-v4-shell">

            <header className="about-v4-chapter-header">

              <Reveal variant="left">

                <span className="about-v4-chapter-number">
                  01
                </span>

              </Reveal>

              <Reveal
                variant="right"
                delay={80}
              >

                <div>

                  <p className="about-v4-eyebrow">
                    The Origin
                  </p>

                  <h2>
                    A second life begins
                    after the final coffee harvest.
                  </h2>

                </div>

              </Reveal>

            </header>


            <div className="about-v4-story-grid">

              <Reveal variant="left">

                <div className="about-v4-story-copy">

                  <p className="about-v4-story-lead">
                    The coffee tree's productive
                    cycle may end, but the wood still
                    has value.
                  </p>

                  <p>
                    VinEco works with mature
                    {" "}
                    <EditorialHighlight>
                      Robusta coffee trees
                    </EditorialHighlight>
                    {" "}
                    from Vietnam's Central Highlands.
                  </p>

                  <p>
                    The material comes from trees
                    grown in the
                    {" "}
                    <EditorialHighlight delay={120}>
                      basalt soil of Gia Lai
                      and Dak Lak
                    </EditorialHighlight>
                    .
                  </p>

                  <p>
                    Rather than treating this wood
                    as the end of an agricultural
                    cycle, VinEco treats it as the
                    beginning of a new product story.
                  </p>

                </div>

              </Reveal>


              <Reveal
                variant="right"
                delay={100}
              >

                <figure className="about-v4-photo">

                  <SmartImage
                    src={aboutV4.origin.image}
                    alt="Mature Robusta coffee trees"
                    className="h-full w-full object-cover"
                  />

                  <figcaption>
                    SAMPLE VISUAL · Mature Robusta ·
                    20–25 years.
                  </figcaption>

                </figure>

              </Reveal>

            </div>

          </div>

        </section>


        {/* ===================================================
            EDITORIAL BREAK
        =================================================== */}

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


        {/* ===================================================
            CHAPTER 02
        =================================================== */}

        <section className="about-v4-chapter about-v4-chapter--paper">

          <div className="about-v4-shell">

            <header className="about-v4-chapter-header">

              <Reveal variant="left">

                <span className="about-v4-chapter-number">
                  02
                </span>

              </Reveal>

              <Reveal
                variant="right"
                delay={80}
              >

                <div>

                  <p className="about-v4-eyebrow">
                    The Second Life
                  </p>

                  <h2>
                    From agricultural by-product
                    to premium pet product.
                  </h2>

                </div>

              </Reveal>

            </header>


            <div className="about-v4-feature-grid">

              <Reveal variant="left">

                <figure className="about-v4-photo about-v4-photo--offset">

                  <SmartImage
                    src={aboutV4.secondLife.image}
                    alt="Reclaimed coffee wood"
                    className="h-full w-full object-cover"
                  />

                  <figcaption>
                    SAMPLE VISUAL · Reclaimed
                    coffee wood material.
                  </figcaption>

                </figure>

              </Reveal>


              <Reveal
                variant="right"
                delay={100}
              >

                <div className="about-v4-story-copy">

                  <p className="about-v4-story-lead">
                    Instead of burning or discarding
                    these agricultural by-products,
                    VinEco gives them another purpose.
                  </p>

                  <p>
                    We
                    {" "}
                    <EditorialHighlight>
                      upcycle them
                    </EditorialHighlight>
                    {" "}
                    into premium
                    {" "}
                    <EditorialHighlight delay={120}>
                      Coffee Wood Dog Chews
                    </EditorialHighlight>
                    .
                  </p>

                  <p>
                    The goal is to create a natural,
                    satisfying chew product while
                    making better use of an existing
                    agricultural material.
                  </p>

                </div>

              </Reveal>

            </div>


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
                    created from reclaimed mature
                    Robusta coffee wood.
                  </p>

                </div>

                <div className="about-v4-product-feature-media">

                  <SmartImage
                    src={aboutV4.secondLife.productImage}
                    alt="Coffee Wood Dog Chew"
                    className="h-full w-full object-cover"
                  />

                </div>

              </div>

            </Reveal>

          </div>

        </section>


        {/* ===================================================
            PULL QUOTE
        =================================================== */}

        <section className="about-v4-quote">

          <div className="about-v4-shell">

            <Reveal variant="zoom">

              <blockquote>

                <span>
                  “
                </span>

                A second life for
                a natural material
                that still has
                <EditorialHighlight>
                  value.
                </EditorialHighlight>

              </blockquote>

            </Reveal>

          </div>

        </section>


        {/* ===================================================
            CHAPTER 03 - MISSION
        =================================================== */}

        <section className="about-v4-mission">

          <div className="about-v4-shell">

            <Reveal>

              <div className="about-v4-mission-heading">

                <p className="about-v4-eyebrow">
                  03 / The Mission
                </p>

                <h2>
                  Two goals.
                  One responsible approach.
                </h2>

              </div>

            </Reveal>


            <div className="about-v4-mission-grid">

              <Reveal
                variant="up"
                delay={0}
              >

                <article className="about-v4-mission-card about-v4-mission-card--orange">

                  <span>
                    01
                  </span>

                  <h3>
                    For pets worldwide.
                  </h3>

                  <p>
                    Provide pets with
                    {" "}
                    <EditorialHighlight>
                      safe, chemical-free
                    </EditorialHighlight>
                    {" "}
                    and satisfying chew toys.
                  </p>

                </article>

              </Reveal>


              <Reveal
                variant="up"
                delay={100}
              >

                <article className="about-v4-mission-card">

                  <span>
                    02
                  </span>

                  <h3>
                    For local communities.
                  </h3>

                  <p>
                    Support local agricultural
                    communities by creating new value
                    from mature coffee wood.
                  </p>

                </article>

              </Reveal>


              <Reveal
                variant="up"
                delay={200}
              >

                <article className="about-v4-mission-card about-v4-mission-card--navy">

                  <span>
                    03
                  </span>

                  <h3>
                    For less waste.
                  </h3>

                  <p>
                    Support
                    {" "}
                    <EditorialHighlight>
                      zero-waste sustainable
                      practices
                    </EditorialHighlight>
                    {" "}
                    by upcycling agricultural
                    by-products.
                  </p>

                </article>

              </Reveal>

            </div>

          </div>

        </section>


        {/* ===================================================
            CLOSING
        =================================================== */}

        <section className="about-v4-closing">

          <div className="about-v4-shell">

            <Reveal>

              <p className="about-v4-eyebrow">
                Continue the story
              </p>

              <h2>
                From Vietnam's
                coffee highlands
                to your next
                pet-product collection.
              </h2>

              <div className="about-v4-actions about-v4-actions--center">

                <Link
                  to="/oem-odm"
                  className="about-v4-button about-v4-button--orange"
                >
                  Explore OEM / ODM

                  <SiteIcon
                    name="arrow"
                    size={16}
                  />
                </Link>

                <Link
                  to="/contact"
                  className="about-v4-button about-v4-button--outline"
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