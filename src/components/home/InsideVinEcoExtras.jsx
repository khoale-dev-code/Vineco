import { useRef } from "react";
import { Link } from "react-router";

import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";
import SiteIcon from "../ui/SiteIcon";


/* ==========================================================
   REAL VINECO PROCESS DATA
========================================================== */

const processStories = [
  {
    id: 1,
    number: "01",
    image: "/images/home-stories/01-moisture-check.png",
    imagePosition: "object-[50%_54%]",
    eyebrow: "Quality Control",
    title: "Moisture Inspection",
    text:
      "Finished coffee wood products are checked for moisture before packing to support greater product stability during storage and international shipping.",
    meta: "QC · Finished Products",
    alt:
      "VinEco quality team checking the moisture level of finished coffee wood pet products",
  },
  {
    id: 2,
    number: "02",
    image: "/images/home-stories/02-heat-drying.png",
    imagePosition: "object-[50%_48%]",
    eyebrow: "Controlled Drying",
    title: "Heat Drying Process",
    text:
      "Prepared coffee wood is dried under controlled conditions as part of VinEco's production process before finishing and final inspection.",
    meta: "Production · Drying",
    alt:
      "VinEco worker handling coffee wood products during the controlled drying process",
  },
  {
    id: 3,
    number: "03",
    image: "/images/home-stories/03-wood-processing.png",
    imagePosition: "object-[52%_50%]",
    eyebrow: "Production",
    title: "Coffee Wood Processing",
    text:
      "Raw coffee wood is selected and shaped into suitable dimensions before progressing through sanding, finishing and product-specific processing.",
    meta: "Workshop · Processing",
    alt:
      "Coffee wood being cut and processed at the VinEco production facility",
  },
  {
    id: 4,
    number: "04",
    image: "/images/home-stories/04-export-loading.png",
    imagePosition: "object-[50%_45%]",
    eyebrow: "Export",
    title: "Container Loading",
    text:
      "Completed orders are packed, organized and prepared for container loading as part of VinEco's international B2B fulfillment process.",
    meta: "Logistics · Export",
    alt:
      "VinEco export cartons loaded into a shipping container for international delivery",
  },
  {
    id: 5,
    number: "05",
    image: "/images/home-stories/05-export-boxes.png",
    imagePosition: "object-[50%_52%]",
    eyebrow: "Shipment Ready",
    title: "Packed for Delivery",
    text:
      "Finished products are packed into clearly identified VinEco export cartons and prepared for their next destination.",
    meta: "Packing · Shipment",
    alt:
      "VinEco export cartons prepared and stored for international shipment",
  },
];


/* ==========================================================
   PROCESS STORIES
========================================================== */

function ProcessStoriesSection() {
  const trackRef = useRef(null);

  function scrollStories(direction) {
    const track = trackRef.current;

    if (!track) return;

    const firstCard =
      track.querySelector("[data-process-card]");

    const cardWidth =
      firstCard?.getBoundingClientRect().width ?? 300;

    track.scrollBy({
      left: direction * (cardWidth + 16),
      behavior: "smooth",
    });
  }

  return (
    <section className="inside-reviews">
      <div className="inside-extras-shell">

        <Reveal>
          <header className="inside-reviews__header">

            <div>
              <p className="inside-extras-eyebrow">
                Inside VinEco
              </p>

              <h2>
                From Production.
                <span>
                  To Global Delivery.
                </span>
              </h2>
            </div>

            <p className="inside-reviews__intro">
              A closer look at how VinEco processes,
              checks, packs and prepares coffee wood
              pet products for international B2B orders.
            </p>

          </header>
        </Reveal>


        <div className="inside-reviews__stage">

          <button
            type="button"
            onClick={() => scrollStories(-1)}
            className="inside-reviews__arrow inside-reviews__arrow--left"
            aria-label="Previous process"
          >
            ‹
          </button>


          <div
            ref={trackRef}
            className="inside-reviews__track"
          >
            {processStories.map(
              (story, index) => (
                <Reveal
                  key={story.id}
                  delay={index * 70}
                  className="inside-reviews__reveal"
                >
                  <article
                    data-process-card
                    className="inside-review-card"
                  >

                    <div className="inside-review-card__media">

                      <SmartImage
                        src={story.image}
                        alt={story.alt}
                        className={[
                          "h-full w-full object-cover",
                          story.imagePosition,
                        ].join(" ")}
                      />

                      <div className="inside-review-card__number">
                        {story.number}
                      </div>

                    </div>


                    <div className="inside-review-card__body">

                      <span
                        className="inside-review-card__quote"
                        aria-hidden="true"
                      >
                        +
                      </span>

                      <p
                        style={{
                          color: "#D97706",
                          fontSize: "10px",
                          fontWeight: 800,
                          letterSpacing: ".12em",
                          textTransform: "uppercase",
                          marginBottom: "8px",
                        }}
                      >
                        {story.eyebrow}
                      </p>


                      <h3
                        style={{
                          margin: 0,
                          color: "#1E2A24",
                          fontSize: "20px",
                          fontWeight: 800,
                          lineHeight: 1.12,
                          letterSpacing: "-.025em",
                        }}
                      >
                        {story.title}
                      </h3>


                      <p
                        style={{
                          marginTop: "12px",
                        }}
                      >
                        {story.text}
                      </p>


                      <footer>
                        <strong>
                          VinEco Int Co., Ltd.
                        </strong>

                        <span>
                          {story.meta}
                        </span>
                      </footer>

                    </div>

                  </article>
                </Reveal>
              ),
            )}
          </div>


          <button
            type="button"
            onClick={() => scrollStories(1)}
            className="inside-reviews__arrow inside-reviews__arrow--right"
            aria-label="Next process"
          >
            ›
          </button>

        </div>


        <div
          className="inside-reviews__dots"
          aria-hidden="true"
        >
          {processStories.map(
            (story, index) => (
              <span
                key={story.id}
                className={
                  index === 0
                    ? "is-active"
                    : ""
                }
              />
            ),
          )}
        </div>

      </div>
    </section>
  );
}


/* ==========================================================
   PARTNER BANNER
========================================================== */

function PartnerBanner() {
  return (
    <section className="inside-partner partner-showcase">
      <div className="inside-extras-shell">
        <div className="partner-showcase__grid">
          <div className="partner-showcase__visual">
            <img
              src="/images/home-stories/07-partner-dog.png?v=2"
              alt="Dog playing with VinEco coffee wood toy"
              className="partner-showcase__image partner-showcase__image--dog"
            />
          </div>

          <div className="partner-showcase__content">
            <p className="inside-extras-eyebrow">PARTNER WITH VINECO</p>

            <h2>
              From your idea,
              <span>to global delivery.</span>
            </h2>

            <p className="partner-showcase__description">
              Work with VinEco on product development, sampling, OEM / ODM
              manufacturing, private labeling, packaging and international
              order fulfillment.
            </p>

            <div className="partner-showcase__actions">
              <a href="/#/contact" className="inside-primary-button">
                Start a conversation
              </a>

              <a href="/#/oem-odm" className="inside-text-link">
                OEM / ODM Services
              </a>
            </div>
          </div>

          <div className="partner-showcase__visual">
            <img
              src="/images/home-stories/06-partner-cat.png?v=2"
              alt="Cat playing with toy"
              className="partner-showcase__image partner-showcase__image--cat"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


/* ==========================================================
   QUALITY
========================================================== */

function QualitySection() {
  return (
    <section className="inside-quality">
      <div className="inside-extras-shell">

        <Reveal>
          <header className="inside-quality__heading">
            <p className="inside-extras-eyebrow">
              Product Quality
            </p>

            <h2>
              Quality Starts
              <span>
                Before Final Inspection.
              </span>
            </h2>
          </header>
        </Reveal>


        <div className="inside-quality__grid">

          {/* LEFT — MOISTURE CONTROL */}
          <Reveal variant="left">
            <div className="inside-quality__pet-card quality-photo-card">
              <SmartImage
                src="/images/home-stories/01-moisture-check.png"
                alt="VinEco moisture inspection for finished coffee wood pet products"
                className="h-full w-full object-cover object-[50%_58%]"
              />

              <span>
                QUALITY CONTROL
              </span>
            </div>
          </Reveal>


          {/* CENTER */}
          <Reveal variant="up" delay={80}>
            <div className="inside-quality__statement">
              <p>
                CHECK.
                <br />
                DRY.
                <br />
                FINISH.
                <br />
                INSPECT.
                <br />
                PACK.
              </p>
            </div>
          </Reveal>


          {/* RIGHT */}
          <Reveal variant="right" delay={130}>
            <div className="inside-quality__detail">

              <p className="inside-quality__lead">
                VinEco treats quality as a sequence
                of production controls rather than
                relying only on a final inspection.
              </p>


              <div className="inside-quality__checks">

                <div>
                  <span>01</span>

                  <p>
                    Coffee wood selection and
                    material preparation.
                  </p>
                </div>


                <div>
                  <span>02</span>

                  <p>
                    Controlled drying and
                    moisture management.
                  </p>
                </div>


                <div>
                  <span>03</span>

                  <p>
                    Shaping, sanding,
                    smoothing and finishing.
                  </p>
                </div>


                <div>
                  <span>04</span>

                  <p>
                    Final product check before
                    packing and export preparation.
                  </p>
                </div>

              </div>


              <div className="inside-quality__bottom">

                <Link
                  to="/oem-odm"
                  className="inside-outline-button"
                >
                  View our process

                  <SiteIcon
                    name="arrow"
                    size={15}
                  />
                </Link>


                {/* MINI PHOTO — DRYING PROCESS */}
                <div className="inside-quality__mini-pet quality-mini-photo">
                  <SmartImage
                    src="/images/home-stories/02-heat-drying.png"
                    alt="VinEco controlled coffee wood drying process"
                    className="h-full w-full object-cover object-[50%_45%]"
                  />
                </div>

              </div>

            </div>
          </Reveal>

        </div>

      </div>
    </section>
  );
}


/* ==========================================================
   EXPORT
========================================================== */

export default function InsideVinEcoExtras() {
  return (
    <>
      <ProcessStoriesSection />
      <PartnerBanner />
      <QualitySection />
    </>
  );
}