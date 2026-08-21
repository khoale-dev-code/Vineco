import { useRef } from "react";
import { Link } from "react-router";

import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";
import SiteIcon from "../ui/SiteIcon";

/*
 * IMPORTANT
 * ----------
 * Replace these sample partner notes with
 * client-approved reviews before publishing.
 *
 * Do not add marketplace / certification claims
 * unless VinEco has confirmed them.
 */

const partnerReviews = [
  {
    id: 1,
    image: "/images/pinterest-preview/pin-01.jpg",
    quote:
      "Sample partner note — replace this text with a verified customer review about product quality, packing or delivery.",
    name: "Approved customer name",
    meta: "Importer · Market",
  },
  {
    id: 2,
    image: "/images/pinterest-preview/pin-02.jpg",
    quote:
      "Sample partner note — use an approved review describing the material quality, communication or sampling experience.",
    name: "Approved customer name",
    meta: "Private Label · Market",
  },
  {
    id: 3,
    image: "/images/pinterest-preview/pin-03.jpg",
    quote:
      "Sample partner note — replace with a real comment from a customer who has worked directly with VinEco.",
    name: "Approved customer name",
    meta: "Brand Partner · Market",
  },
  {
    id: 4,
    image: "/images/pinterest-preview/pin-04.jpg",
    quote:
      "Sample partner note — this card can feature feedback about shipping, packaging, product finishing or responsiveness.",
    name: "Approved customer name",
    meta: "Wholesale · Market",
  },
  {
    id: 5,
    image: "/images/pinterest-preview/pin-05.jpg",
    quote:
      "Sample partner note — replace with verified buyer feedback before the website is published.",
    name: "Approved customer name",
    meta: "Retail Partner · Market",
  },
];

function ReviewsSection() {
  const trackRef = useRef(null);

  function scrollReviews(direction) {
    const track = trackRef.current;

    if (!track) return;

    const firstCard =
      track.querySelector("[data-review-card]");

    const width =
      firstCard?.getBoundingClientRect().width ??
      300;

    track.scrollBy({
      left: direction * (width + 16),
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
                Customer Stories
              </p>

              <h2>
                Real Customers.
                <span>
                  Real Reviews.
                </span>
              </h2>
            </div>

            <p className="inside-reviews__intro">
              Feedback from importers, brands and
              business partners helps show how VinEco
              works beyond the product itself.
            </p>

          </header>
        </Reveal>


        <div className="inside-reviews__stage">

          <button
            type="button"
            onClick={() => scrollReviews(-1)}
            className="inside-reviews__arrow inside-reviews__arrow--left"
            aria-label="Previous reviews"
          >
            ‹
          </button>


          <div
            ref={trackRef}
            className="inside-reviews__track"
          >
            {partnerReviews.map(
              (review, index) => (
                <Reveal
                  key={review.id}
                  delay={index * 70}
                  className="inside-reviews__reveal"
                >
                  <article
                    data-review-card
                    className="inside-review-card"
                  >
                    <div className="inside-review-card__media">

                      <SmartImage
                        src={review.image}
                        alt=""
                        className="h-full w-full object-cover"
                      />

                      <div className="inside-review-card__number">
                        0{index + 1}
                      </div>

                    </div>

                    <div className="inside-review-card__body">

                      <span
                        className="inside-review-card__quote"
                        aria-hidden="true"
                      >
                        “
                      </span>

                      <p>
                        {review.quote}
                      </p>

                      <footer>
                        <strong>
                          {review.name}
                        </strong>

                        <span>
                          {review.meta}
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
            onClick={() => scrollReviews(1)}
            className="inside-reviews__arrow inside-reviews__arrow--right"
            aria-label="Next reviews"
          >
            ›
          </button>

        </div>


        <div
          className="inside-reviews__dots"
          aria-hidden="true"
        >
          {partnerReviews.map(
            (review, index) => (
              <span
                key={review.id}
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


function PartnerBanner() {
  return (
    <section className="inside-partner">
      <div className="inside-extras-shell">

        <Reveal variant="up">
          <div className="inside-partner__grid">

            <div className="inside-partner__pet">

              <SmartImage
                src="/images/pinterest-preview/pin-06.jpg"
                alt=""
                className="h-full w-full object-cover"
              />

            </div>


            <div className="inside-partner__copy">

              <p className="inside-extras-eyebrow">
                Partner With VinEco
              </p>

              <h2>
                Welcome,
                <span>
                  partner!
                </span>
              </h2>

              <p>
                Explore samples, product development,
                OEM / ODM support and natural-material
                collections created for international
                pet brands.
              </p>

              <div className="inside-partner__actions">

                <Link
                  to="/contact"
                  className="inside-primary-button"
                >
                  Start a conversation

                  <SiteIcon
                    name="arrow"
                    size={15}
                  />
                </Link>

                <Link
                  to="/oem-odm"
                  className="inside-text-link"
                >
                  OEM / ODM Services
                </Link>

              </div>

            </div>


            <div className="inside-partner__pet">

              <SmartImage
                src="/images/pinterest-preview/pin-07.jpg"
                alt=""
                className="h-full w-full object-cover"
              />

            </div>

          </div>
        </Reveal>

      </div>
    </section>
  );
}


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
              Where Every Product
              <span>
                Meets Global-Ready Standards.
              </span>
            </h2>

          </header>
        </Reveal>


        <div className="inside-quality__grid">

          <Reveal variant="left">

            <div className="inside-quality__pet-card">

              <SmartImage
                src="/images/pinterest-preview/pin-08.jpg"
                alt=""
                className="h-full w-full object-contain"
              />

              <span>
                NATURAL MATERIALS
              </span>

            </div>

          </Reveal>


          <Reveal
            variant="up"
            delay={80}
          >

            <div className="inside-quality__statement">

              <p>
                QUALITY
                <br />
                STARTS
                <br />
                BEFORE
                <br />
                THE FINAL
                <br />
                PRODUCT.
              </p>

            </div>

          </Reveal>


          <Reveal
            variant="right"
            delay={130}
          >

            <div className="inside-quality__detail">

              <p className="inside-quality__lead">
                VinEco approaches quality as a
                production process — not only as
                a final inspection step.
              </p>


              <div className="inside-quality__checks">

                <div>
                  <span>
                    01
                  </span>

                  <p>
                    Material selection and
                    preparation.
                  </p>
                </div>

                <div>
                  <span>
                    02
                  </span>

                  <p>
                    Moisture control and
                    responsible drying.
                  </p>
                </div>

                <div>
                  <span>
                    03
                  </span>

                  <p>
                    Surface finishing,
                    smoothing and edge checks.
                  </p>
                </div>

                <div>
                  <span>
                    04
                  </span>

                  <p>
                    Final inspection before
                    packing and shipment.
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


                <div className="inside-quality__mini-pet">

                  <SmartImage
                    src="/images/pinterest-preview/pin-09.jpg"
                    alt=""
                    className="h-full w-full object-contain"
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


export default function InsideVinEcoExtras() {
  return (
    <>
      <ReviewsSection />

      <PartnerBanner />

      <QualitySection />
    </>
  );
}