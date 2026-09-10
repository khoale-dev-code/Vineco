import { useEffect, useRef } from "react";
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
    image: "/images/home-stories/03-wood-processing.png",
    imagePosition: "object-[52%_50%]",
    eyebrow: "Production",
    title: "Coffee Wood Processing",
    text:
      "Raw coffee wood is selected and shaped into suitable dimensions before progressing through sanding, finishing and product-specific processing.",
    alt:
      "Coffee wood being cut and processed at the VinEco production facility",
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
    alt:
      "VinEco worker handling coffee wood products during the controlled drying process",
  },
  {
    id: 3,
    number: "03",
    image: "/images/home-stories/01-moisture-check.png",
    imagePosition: "object-[50%_54%]",
    eyebrow: "Quality Control",
    title: "Moisture Inspection",
    text:
      "Finished coffee wood products are checked for moisture before packing to support greater product stability during storage and international shipping.",
    alt:
      "VinEco quality team checking the moisture level of finished coffee wood pet products",
  },
  {
    id: 4,
    number: "04",
    image: "/images/home-stories/05-export-boxes.png",
    imagePosition: "object-[50%_52%]",
    eyebrow: "Shipment Ready",
    title: "Packed for Delivery",
    text:
      "Finished products are packed into clearly identified VinEco export cartons and prepared for their next destination.",
    alt:
      "VinEco export cartons prepared and stored for international shipment",
  },
  {
    id: 5,
    number: "05",
    image: "/images/home-stories/04-export-loading.png",
    imagePosition: "object-[50%_45%]",
    eyebrow: "Export",
    title: "Container Loading",
    text:
      "Completed orders are packed, organized and prepared for container loading as part of VinEco's international B2B fulfillment process.",
    alt:
      "VinEco export cartons loaded into a shipping container for international delivery",
  },
];


/* ==========================================================
   QUALITY STEPS
========================================================== */

const qualitySteps = [
  {
    number: "01",
    text: "Coffee wood selection and material preparation.",
  },
  {
    number: "02",
    text: "Controlled drying and moisture management.",
  },
  {
    number: "03",
    text: "Shaping, sanding, smoothing and finishing.",
  },
  {
    number: "04",
    text: "Final product check before packing and export preparation.",
  },
];


/* ==========================================================
   PROCESS STORIES
========================================================== */

function ProcessStoriesSection() {
  const trackRef = useRef(null);

  /* VINECO PROCESS AUTO SCROLL START */

  useEffect(() => {
    const track = trackRef.current;

    if (
      !track ||
      typeof window === "undefined"
    ) {
      return undefined;
    }


    const prefersReducedMotion =
      window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    if (prefersReducedMotion) {
      return undefined;
    }


    const stage =
      track.closest(
        ".inside-reviews__stage"
      );


    let intervalId = null;
    let resumeTimeoutId = null;
    let isInView = false;


    /* -----------------------------------------------
       Stop timer
    ----------------------------------------------- */

    const stopAutoScroll = () => {
      if (intervalId !== null) {
        window.clearInterval(
          intervalId
        );

        intervalId = null;
      }
    };


    /* -----------------------------------------------
       Calculate one-card movement.

       Uses real CSS gap instead of hard-coded values,
       so it works on desktop / tablet / mobile.
    ----------------------------------------------- */

    const getScrollStep = () => {
      const firstCard =
        track.querySelector(
          "[data-process-card]"
        );


      if (!firstCard) {
        return 0;
      }


      const trackStyle =
        window.getComputedStyle(
          track
        );


      const gap =
        Number.parseFloat(
          trackStyle.columnGap ||
          trackStyle.gap
        ) || 16;


      const cardWidth =
        firstCard
          .getBoundingClientRect()
          .width;


      return cardWidth + gap;
    };


    /* -----------------------------------------------
       Advance one card.
       At the final position -> return to beginning.
    ----------------------------------------------- */

    const advanceStory = () => {
      if (
        document.hidden ||
        !isInView
      ) {
        return;
      }


      const step =
        getScrollStep();


      if (!step) {
        return;
      }


      const maxScrollLeft =
        Math.max(
          0,
          track.scrollWidth -
          track.clientWidth
        );


      /*
       * Nothing to scroll.
       */
      if (maxScrollLeft <= 6) {
        return;
      }


      const reachedEnd =
        track.scrollLeft >=
        maxScrollLeft - 6;


      track.scrollTo({
        left:
          reachedEnd
            ? 0
            : Math.min(
                track.scrollLeft +
                  step,
                maxScrollLeft
              ),

        behavior: "smooth",
      });
    };


    /* -----------------------------------------------
       Start 3-second autoplay
    ----------------------------------------------- */

    const startAutoScroll = () => {
      stopAutoScroll();


      if (
        !isInView ||
        document.hidden
      ) {
        return;
      }


      intervalId =
        window.setInterval(
          advanceStory,
          3000
        );
    };


    /* -----------------------------------------------
       Resume shortly after user interaction
    ----------------------------------------------- */

    const scheduleResume = () => {
      if (
        resumeTimeoutId !== null
      ) {
        window.clearTimeout(
          resumeTimeoutId
        );
      }


      resumeTimeoutId =
        window.setTimeout(
          () => {
            startAutoScroll();
          },
          1200
        );
    };


    /* -----------------------------------------------
       Only autoplay while carousel is visible.
       Avoid moving the slider while user is reading
       another section of the page.
    ----------------------------------------------- */

    let observer = null;


    if (
      "IntersectionObserver" in
      window
    ) {

      observer =
        new IntersectionObserver(
          ([entry]) => {

            isInView =
              Boolean(
                entry?.isIntersecting
              );


            if (isInView) {
              startAutoScroll();
            } else {
              stopAutoScroll();
            }

          },
          {
            threshold: 0.25,
          }
        );


      observer.observe(track);

    } else {

      isInView = true;

      startAutoScroll();
    }


    /* -----------------------------------------------
       Pause while customer interacts.

       Desktop:
       hover / focus pauses autoplay.

       Mobile:
       touching or swiping pauses autoplay,
       then it resumes automatically.
    ----------------------------------------------- */

    const interactionTarget =
      stage || track;


    interactionTarget.addEventListener(
      "mouseenter",
      stopAutoScroll
    );


    interactionTarget.addEventListener(
      "mouseleave",
      scheduleResume
    );


    interactionTarget.addEventListener(
      "focusin",
      stopAutoScroll
    );


    interactionTarget.addEventListener(
      "focusout",
      scheduleResume
    );


    interactionTarget.addEventListener(
      "touchstart",
      stopAutoScroll,
      {
        passive: true,
      }
    );


    interactionTarget.addEventListener(
      "touchend",
      scheduleResume,
      {
        passive: true,
      }
    );


    /* -----------------------------------------------
       Browser tab visibility
    ----------------------------------------------- */

    const handleVisibilityChange =
      () => {

        if (document.hidden) {
          stopAutoScroll();
        } else if (isInView) {
          startAutoScroll();
        }
      };


    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );


    /* -----------------------------------------------
       Cleanup
    ----------------------------------------------- */

    return () => {

      stopAutoScroll();


      if (
        resumeTimeoutId !== null
      ) {
        window.clearTimeout(
          resumeTimeoutId
        );
      }


      observer?.disconnect();


      interactionTarget.removeEventListener(
        "mouseenter",
        stopAutoScroll
      );


      interactionTarget.removeEventListener(
        "mouseleave",
        scheduleResume
      );


      interactionTarget.removeEventListener(
        "focusin",
        stopAutoScroll
      );


      interactionTarget.removeEventListener(
        "focusout",
        scheduleResume
      );


      interactionTarget.removeEventListener(
        "touchstart",
        stopAutoScroll
      );


      interactionTarget.removeEventListener(
        "touchend",
        scheduleResume
      );


      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };

  }, []);

  /* VINECO PROCESS AUTO SCROLL END */

  function scrollStories(direction) {
    const track = trackRef.current;
    if (!track) return;

    const firstCard = track.querySelector("[data-process-card]");
    const cardWidth = firstCard?.getBoundingClientRect().width ?? 300;

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
              A closer look at how VinEco processes, checks, packs and
              prepares coffee wood pet products for international B2B orders.
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
            {processStories.map((story, index) => (
              <Reveal
                key={story.id}
                delay={index * 70}
                className="inside-reviews__reveal"
              >
                <article
                  data-process-card
                  className="inside-review-card inside-process-card"
                >
                  <div className="inside-review-card__media">
                    <SmartImage
                      src={story.image}
                      alt={story.alt}
                      className={[
                        "inside-process-card__image h-full w-full object-cover",
                        story.imagePosition,
                      ].join(" ")}
                    />

                    <div className="inside-review-card__number">
                      {story.number}
                    </div>
                  </div>

                  <div className="inside-review-card__body">

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

                    <p style={{ marginTop: "12px" }}>
                      {story.text}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
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
          {processStories.map((story, index) => (
            <span
              key={story.id}
              className={index === 0 ? "is-active" : ""}
            />
          ))}
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
    <section className="overflow-hidden bg-[#FAF8F5] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[1480px] px-4 sm:px-6 lg:px-8">

        <Reveal>

          <div
            className={[
              "grid grid-cols-2 items-stretch gap-3",

              "lg:grid-cols-[.85fr_1.45fr_.9fr]",

              "xl:grid-cols-[minmax(280px,1fr)_minmax(500px,1.25fr)_minmax(300px,1fr)]",
            ].join(" ")}
          >

            {/* =================================================
                LEFT PET
            ================================================= */}

            <div
              className={[
                "order-2",
                "group relative",
                "min-h-[190px]",
                "overflow-hidden",
                "rounded-[24px]",
                "bg-[#FAF8F5]",

                "sm:min-h-[240px]",

                "lg:order-1",
                "lg:min-h-[440px]",
                "lg:rounded-[28px]",
              ].join(" ")}
            >

              <div
                aria-hidden="true"
                className={[
                  "absolute left-1/2 top-1/2",
                  "h-[220px] w-[220px]",
                  "-translate-x-1/2 -translate-y-1/2",
                  "rounded-full",
                  "bg-[#F59E0B]/[0.045]",
                  "blur-2xl",

                  "lg:h-[340px]",
                  "lg:w-[340px]",
                ].join(" ")}
              />


              <div
                className={[
                  "absolute inset-0",
                  "flex items-center justify-center",
                  "overflow-hidden",
                  "p-0",
                ].join(" ")}
              >
                <img
                  src="/images/home-stories/07-partner-dog.png?v=2"
                  alt="Dog playing with VinEco coffee wood and rope toy"
                  className={[
                    "relative z-10",
                    "block h-auto",
                    "w-[118%]",
                    "max-w-none",
                    "max-h-[185px]",
                    "object-contain object-center",

                    "sm:w-[110%]",
                    "sm:max-h-[230px]",

                    "lg:w-[122%]",
                    "lg:max-h-[410px]",

                    "xl:w-[128%]",
                    "xl:max-h-[425px]",
                  ].join(" ")}
                />
              </div>

            </div>


            {/* =================================================
                CENTER CONTENT
            ================================================= */}

            <div
              className={[
                "relative",
                "order-1 col-span-2",
                "overflow-hidden",

                "rounded-[24px]",
                "border border-[#F59E0B]/55",
                "bg-white",

                "px-5 py-8",

                "sm:px-8",
                "sm:py-9",

                "lg:order-2",
                "lg:col-span-1",
                "lg:flex",
                "lg:min-h-[440px]",
                "lg:flex-col",
                "lg:justify-center",
                "lg:rounded-[28px]",
                "lg:px-10",
                "lg:py-9",

                "xl:px-12",
              ].join(" ")}
            >

              <div
                aria-hidden="true"
                className="
                  absolute
                  -right-20
                  -top-20
                  h-60
                  w-60
                  rounded-full
                  bg-[#F59E0B]/[0.05]
                "
              />


              <div
                aria-hidden="true"
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[3px]
                  w-[42%]
                  bg-[#F59E0B]
                "
              />


              <div className="relative z-10 max-w-[620px]">

                <p
                  className="
                    text-[10px]
                    font-extrabold
                    uppercase
                    tracking-[0.24em]
                    text-[#D97706]

                    sm:text-[11px]
                  "
                >
                  Partner with VinEco
                </p>


                <h2
                  className={[
                    "mt-4",
                    "text-[clamp(2.35rem,3.65vw,3.9rem)]",
                    "font-extrabold",
                    "leading-[0.94]",
                    "tracking-[-0.055em]",
                    "text-[#1E2A24]",
                  ].join(" ")}
                >
                  From your idea,

                  <span className="block text-[#F59E0B]">
                    to global delivery.
                  </span>
                </h2>


                <p
                  className={[
                    "mt-5",
                    "max-w-[580px]",
                    "text-[15px]",
                    "font-medium",
                    "leading-7",
                    "text-[#3D5245]",

                    "sm:text-[16px]",
                    "sm:leading-8",
                  ].join(" ")}
                >
                  Work with VinEco on product development, sampling,
                  OEM / ODM manufacturing, private labeling, packaging
                  and international order fulfillment.
                </p>


                <div className="mt-6 flex flex-wrap gap-2">

                  {[
                    "Sampling",
                    "OEM / ODM",
                    "Private Label",
                    "Global Fulfillment",
                  ].map((item) => (

                    <span
                      key={item}
                      className={[
                        "rounded-full",
                        "border border-[#1E2A24]/10",
                        "bg-[#FAF8F5]",
                        "px-3.5 py-2",
                        "text-[10px]",
                        "font-bold",
                        "uppercase",
                        "tracking-[0.08em]",
                        "text-[#3D5245]",
                      ].join(" ")}
                    >
                      {item}
                    </span>

                  ))}

                </div>


                <div className="mt-7 flex flex-wrap items-center gap-4">

                  <Link
                    to="/contact"
                    className={[
                      "inline-flex min-h-[48px]",
                      "items-center justify-center",
                      "rounded-full",
                      "bg-[#F59E0B]",
                      "px-6",
                      "text-[14px]",
                      "font-extrabold",
                      "text-[#1E2A24]",
                      "shadow-[0_10px_24px_rgba(245,158,11,0.18)]",
                      "transition duration-200",
                      "hover:-translate-y-[1px]",
                      "hover:bg-[#D97706]",
                    ].join(" ")}
                  >
                    Start a conversation
                  </Link>


                  <Link
                    to="/oem-odm"
                    className={[
                      "inline-flex min-h-[48px]",
                      "items-center gap-2",
                      "text-[14px]",
                      "font-extrabold",
                      "text-[#1E2A24]",
                      "transition-colors",
                      "hover:text-[#D97706]",
                    ].join(" ")}
                  >
                    OEM / ODM Services

                    <SiteIcon
                      name="arrow"
                      size={16}
                    />
                  </Link>

                </div>

              </div>

            </div>


            {/* =================================================
                RIGHT PET
            ================================================= */}

            <div
              className={[
                "order-3",
                "group relative",
                "min-h-[190px]",
                "overflow-hidden",
                "rounded-[24px]",
                "bg-[#FAF8F5]",

                "sm:min-h-[240px]",

                "lg:min-h-[440px]",
                "lg:rounded-[28px]",
              ].join(" ")}
            >

              <div
                aria-hidden="true"
                className={[
                  "absolute left-1/2 top-1/2",
                  "h-[220px] w-[220px]",
                  "-translate-x-1/2 -translate-y-1/2",
                  "rounded-full",
                  "bg-[#F59E0B]/[0.045]",
                  "blur-2xl",

                  "lg:h-[340px]",
                  "lg:w-[340px]",
                ].join(" ")}
              />


              <div
                className="
                  absolute
                  inset-0
                  flex
                  items-center
                  justify-center
                  overflow-hidden
                  p-0
                "
              >
                <img
                  src="/images/home-stories/06-partner-cat.png?v=2"
                  alt="VinEco pet product lifestyle presentation"
                  className={[
                    "relative z-10",
                    "block h-auto",
                    "w-[145%]",
                    "max-w-none",
                    "max-h-[160px]",
                    "object-contain object-center",

                    "sm:w-[135%]",
                    "sm:max-h-[205px]",

                    "lg:w-[152%]",
                    "lg:max-h-[320px]",

                    "xl:w-[158%]",
                    "xl:max-h-[350px]",
                  ].join(" ")}
                />
              </div>

            </div>

          </div>

        </Reveal>

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

        {/* HEADING */}
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


        {/* =================================================
            QUALITY GRID
        ================================================= */}

        <div
          className={[
            "inside-quality__grid",
            "items-stretch",
          ].join(" ")}
        >

          {/* =================================================
              LEFT — SAME HEIGHT AS RIGHT
              IMAGE IS NOT CROPPED
          ================================================= */}

          <Reveal
            variant="left"
            className="h-full"
          >
            <div
              className={[
                "inside-quality__pet-card",
                "relative",
                "flex h-full min-h-[520px]",
                "flex-col overflow-hidden",
                "lg:min-h-[640px]",
              ].join(" ")}
            >
              <div
                className={[
                  "relative",
                  "flex h-full min-h-0 flex-1",
                  "items-center justify-center",
                  "overflow-hidden",
                  "bg-white",
                  "p-4 sm:p-5",
                ].join(" ")}
              >
                <SmartImage
                  src="/images/home-stories/01-moisture-check.png"
                  alt="VinEco moisture inspection for finished coffee wood pet products"
                  className="block max-h-full max-w-full object-contain object-center"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                    transform: "none",
                  }}
                />

                <span
                  className={[
                    "absolute bottom-4 left-4",
                    "rounded-full",
                    "bg-[#0F2F24]",
                    "px-3 py-2",
                    "text-[10px] font-extrabold",
                    "uppercase tracking-[0.1em]",
                    "text-white",
                  ].join(" ")}
                >
                  Quality Control
                </span>
              </div>
            </div>
          </Reveal>


          {/* =================================================
              CENTER
          ================================================= */}

          <Reveal
            variant="up"
            delay={80}
          >
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


          {/* =================================================
              RIGHT — SAME HEIGHT AS LEFT
          ================================================= */}

          <Reveal
            variant="right"
            delay={130}
            className="h-full"
          >
            <div
              className={[
                "inside-quality__detail",
                "flex h-full min-h-[520px] flex-col",
                "lg:min-h-[640px]",
              ].join(" ")}
            >

              {/* LEAD */}
              <p
                className={[
                  "inside-quality__lead",
                  "text-[22px]",
                  "font-extrabold",
                  "leading-[1.5]",
                  "tracking-[-0.02em]",
                  "text-[#1E2A24]",
                  "sm:text-[23px]",
                  "lg:text-[24px]",
                ].join(" ")}
              >
                VinEco treats quality as a sequence of production controls
                rather than relying only on a final inspection.
              </p>


              {/* STEPS */}
              <div className="inside-quality__checks">
                {qualitySteps.map((step) => (
                  <div key={step.number}>
                    <span>
                      {step.number}
                    </span>

                    <p>
                      {step.text}
                    </p>
                  </div>
                ))}
              </div>


              {/* BOTTOM */}
              <div className="inside-quality__bottom mt-auto">
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


                {/* MINI PHOTO — FULL IMAGE */}
                <div
                  className={[
                    "inside-quality__mini-pet",
                    "flex items-center justify-center",
                    "overflow-hidden",
                    "bg-white",
                  ].join(" ")}
                >
                  <SmartImage
                    src="/images/home-stories/02-heat-drying.png"
                    alt="VinEco controlled coffee wood drying process"
                    className="block max-h-full max-w-full object-contain object-center"
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                      transform: "none",
                    }}
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