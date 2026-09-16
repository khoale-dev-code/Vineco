import { useEffect, useState } from "react";

import Reveal from "../ui/Reveal";
import ServiceResponsiveImage from "./ServiceResponsiveImage";


/* =========================================================
   Tách "Label — mô tả" hoặc "Label: mô tả"
   để bold phần label.

   Không match được thì trả về text thường,
   không tự đoán nội dung.
========================================================= */

function splitLabel(text) {
  if (typeof text !== "string") {
    return {
      label: null,
      separator: "",
      rest: text ?? "",
    };
  }

  const dashIndex = text.indexOf(" — ");
  const colonIndex = text.indexOf(": ");

  if (
    dashIndex > -1 &&
    (colonIndex === -1 || dashIndex < colonIndex)
  ) {
    return {
      label: text.slice(0, dashIndex),
      separator: " — ",
      rest: text.slice(dashIndex + 3),
    };
  }

  if (
    colonIndex > -1 &&
    colonIndex <= 40
  ) {
    return {
      label: text.slice(0, colonIndex),
      separator: ": ",
      rest: text.slice(colonIndex + 2),
    };
  }

  return {
    label: null,
    separator: "",
    rest: text,
  };
}


/* =========================================================
   RICH POINT
========================================================= */

function RichPoint({ text }) {
  const {
    label,
    separator,
    rest,
  } = splitLabel(text);

  if (!label) {
    return <>{text}</>;
  }

  return (
    <>
      <strong>{label}</strong>
      {separator}
      {rest}
    </>
  );
}


/* =========================================================
   SERVICE GROUPS
========================================================= */

function ServiceGroups({ groups = [] }) {
  return (
    <div className="service-v2-groups">
      {groups.map((group, groupIndex) => (
        <div
          key={
            group.heading ||
            `service-group-${groupIndex}`
          }
          className="service-v2-group"
        >
          <strong className="service-v2-group__heading">
            {group.heading}
          </strong>

          <ul>
            {(group.items ?? []).map(
              (item, itemIndex) => (
                <li
                  key={`${groupIndex}-${itemIndex}-${item}`}
                >
                  <span
                    className="service-v2-copy__bullet"
                    aria-hidden="true"
                  >
                    →
                  </span>

                  <span className="service-v2-copy__text">
                    <RichPoint text={item} />
                  </span>
                </li>
              ),
            )}
          </ul>
        </div>
      ))}
    </div>
  );
}


/* =========================================================
   RESET STYLE CHO FIGURE ẢNH

   Giữ figure sạch:
   - không border
   - không padding
   - không background
   - không box-shadow

   CSS mobile sẽ kiểm soát kích thước.
========================================================= */

const cleanFigureStyle = {
  border: "none",
  background: "transparent",
  padding: 0,
  margin: 0,
  boxShadow: "none",
  outline: "none",
  overflow: "hidden",
};


/* =========================================================
   QUALITY CONTROL STEPS
========================================================= */

function QualityControlSteps({
  steps = [],
}) {
  return (
    <div className="qc-steps">
      {steps.map((step, index) => (
        <Reveal
          key={
            step.number ??
            `quality-step-${index}`
          }
          variant="up"
          delay={index * 60}
        >
          <article className="qc-step">

            {/* COPY */}

            <div className="qc-step__copy">
              <div className="qc-step__meta">
                <span>
                  {step.number}
                </span>

                <small>
                  {step.eyebrow}
                </small>
              </div>

              <h3>
                {step.title}
              </h3>

              <p>
                {step.text}
              </p>
            </div>


            {/* IMAGES */}

            <div className="qc-step__images">
              {(step.images ?? []).map(
                (src, imageIndex) => (
                  <figure
                    key={`${step.number}-${imageIndex}`}
                    style={cleanFigureStyle}
                  >
                    <ServiceResponsiveImage
                      src={src}
                      alt={
                        imageIndex === 0
                          ? step.title
                          : `${step.title} ${imageIndex + 1}`
                      }
                      className="
                        block
                        h-full
                        w-full
                        object-contain
                        object-center
                      "
                    />
                  </figure>
                ),
              )}
            </div>

          </article>
        </Reveal>
      ))}
    </div>
  );
}


/* =========================================================
   SERVICE CHAPTER
========================================================= */



/* =========================================================
   CUSTOM PACKAGING IMAGE SLIDER

   - One large visual
   - Auto changes every 3 seconds
   - Loops continuously
   - Pauses on hover / focus / touch
   - Reduced-motion safe
========================================================= */

function PackagingImageSlider({
  images = [],
  title = "Custom Packaging & Fulfillment",
  mode = "default",
}) {
  const safeImages =
    Array.isArray(images)
      ? images.filter(Boolean)
      : [];

  const imageKey =
    safeImages.join("|");

  const [activeIndex, setActiveIndex] =
    useState(0);

  const [paused, setPaused] =
    useState(false);


  /* VINECO PACKAGING DESIGN AUTOPLAY V2 START */

  /*
   * Product Packaging Design:
   * - autoplay exactly every 2 seconds
   * - hover / focus / touch do not pause it
   *
   * Custom Packaging:
   * - keep 3 second autoplay
   * - keep existing pause behavior
   */
  const isPackagingDesignSlider =
    mode === "portrait";

  const autoplayMs =
    isPackagingDesignSlider
      ? 2000
      : 3000;

  /* VINECO PACKAGING DESIGN AUTOPLAY V2 END */


  /*
   * Reset slider when image data changes.
   */
  useEffect(() => {
    setActiveIndex(0);
  }, [imageKey]);


  /*
   * Existing autoplay behavior.
   */
  useEffect(() => {
    if (
      safeImages.length <= 1
    ) {
      return undefined;
    }


    /*
     * For packaging-design we intentionally do not
     * pause autoplay when hovering/focusing/touching.
     *
     * Other packaging sliders keep their existing
     * interaction pause behavior.
     */
    if (
      !isPackagingDesignSlider &&
      paused
    ) {
      return undefined;
    }


    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    /*
     * Existing sliders still respect reduced motion.
     *
     * packaging-design performs an instant image swap
     * with no fade/transform animation, so it can keep
     * the requested 2-second automatic change.
     */
    if (
      prefersReducedMotion &&
      !isPackagingDesignSlider
    ) {
      return undefined;
    }


    const timer =
      window.setInterval(
        () => {
          setActiveIndex(
            (current) =>
              (
                current + 1
              ) % safeImages.length
          );
        },
        autoplayMs
      );


    return () => {
      window.clearInterval(timer);
    };
  }, [
    paused,
    safeImages.length,
    imageKey,
    isPackagingDesignSlider,
    autoplayMs,
  ]);




  /* VINECO SLIDER ARROW HANDLERS FIX START */

  const goPrevious = () => {
    if (safeImages.length <= 1) {
      return;
    }

    setActiveIndex(
      (current) =>
        (
          current - 1 +
          safeImages.length
        ) % safeImages.length
    );
  };


  const goNext = () => {
    if (safeImages.length <= 1) {
      return;
    }

    setActiveIndex(
      (current) =>
        (
          current + 1
        ) % safeImages.length
    );
  };


  /* VINECO SLIDER ARROW HANDLERS FIX END */

  if (safeImages.length === 0) {
    return null;
  }


  return (
    <div
      className={[
        "service-v2-packaging-slider",
        mode === "portrait"
          ? "service-v2-packaging-slider--portrait"
          : "",
      ]
        .filter(Boolean)
        .join(" ")}
      role="region"
      aria-roledescription="carousel"
      aria-label={title + " image gallery"}
      onMouseEnter={() =>
        setPaused(true)
      }
      onMouseLeave={() =>
        setPaused(false)
      }
      onFocusCapture={() =>
        setPaused(true)
      }
      onBlurCapture={() =>
        setPaused(false)
      }
      onTouchStart={() =>
        setPaused(true)
      }
      onTouchEnd={() =>
        setPaused(false)
      }
    >

      <div className="service-v2-packaging-slider__viewport">

        {safeImages.map(
          (src, imageIndex) => {

            const active =
              imageIndex ===
              activeIndex;


            return (
              <figure
                key={src + "-" + imageIndex}
                className={[
                  "service-v2-packaging-slider__slide",
                  active
                    ? "is-active"
                    : "",
                ]
                  .filter(Boolean)
                  .join(" ")}
                aria-hidden={
                  !active
                }
              >

                <ServiceResponsiveImage
                  src={src}
                  alt={
                    active
                      ? title + " " + (imageIndex + 1)
                      : ""
                  }
                  loading={
                    active
                      ? "eager"
                      : "lazy"
                  }
                  className="service-v2-packaging-slider__image block h-full w-full object-cover object-center"
                />

              </figure>
            );
          },
        )}


        {safeImages.length > 1 && (
          <>

            <button
              type="button"
              className="service-v2-packaging-slider__arrow service-v2-packaging-slider__arrow--prev"
              aria-label="Previous packaging image"
              onClick={goPrevious}
            >
              <span aria-hidden="true">
                {"<"}
              </span>
            </button>


            <button
              type="button"
              className="service-v2-packaging-slider__arrow service-v2-packaging-slider__arrow--next"
              aria-label="Next packaging image"
              onClick={goNext}
            >
              <span aria-hidden="true">
                {">"}
              </span>
            </button>

          </>
        )}


        <div
          className="service-v2-packaging-slider__counter"
          aria-hidden="true"
        >

          <strong>
            {String(
              activeIndex + 1
            ).padStart(
              2,
              "0"
            )}
          </strong>

          <span>
            /
            {" "}
            {String(
              safeImages.length
            ).padStart(
              2,
              "0"
            )}
          </span>

        </div>

      </div>


      {safeImages.length > 1 && (

        <div
          className="service-v2-packaging-slider__dots"
          aria-label="Packaging image selection"
        >

          {safeImages.map(
            (src, imageIndex) => {

              const active =
                imageIndex ===
                activeIndex;


              return (
                <button
                  key={src + "-dot-" + imageIndex}
                  type="button"
                  className={[
                    "service-v2-packaging-slider__dot",
                    active
                      ? "is-active"
                      : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                  aria-label={
                    "Show packaging image " +
                    (imageIndex + 1)
                  }
                  aria-current={
                    active
                      ? "true"
                      : undefined
                  }
                  onClick={() =>
                    setActiveIndex(
                      imageIndex
                    )
                  }
                >
                  <span aria-hidden="true" />
                </button>
              );
            },
          )}

        </div>
      )}

    </div>
  );
}


export default function ServiceChapter({
  service,
  index,
}) {
  const reverse =
    index % 2 === 1;

  const hasQualitySteps =
    Array.isArray(service.steps) &&
    service.steps.length > 0;

  const images =
    Array.isArray(service.images)
      ? service.images
      : [];

  const usePackagingSlider =
    (
      service.id === "custom-packaging" ||
      service.id === "packaging-design"
    ) &&
    images.length > 0;

  const packagingSliderMode =
    service.id === "packaging-design"
      ? "portrait"
      : "default";

  const useImageGrid =
    !usePackagingSlider &&
    images.length >= 4;


  return (
    <section
      id={service.id}
      className="service-v2-chapter"
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header className="service-v2-chapter__header">

        <Reveal variant="left">
          <span className="service-v2-chapter__number">
            {service.number}
          </span>
        </Reveal>


        <Reveal
          variant="right"
          delay={60}
        >
          <div>
            <p className="service-v2-eyebrow">
              {service.eyebrow}
            </p>

            <h2>
              {service.title}
            </h2>
          </div>
        </Reveal>

      </header>


      {/* =====================================================
          QUALITY CONTROL SERVICE
      ===================================================== */}

      {hasQualitySteps ? (

        <div className="service-v2-quality-layout">

          {/* LEFT COPY */}

          <Reveal variant="left">
            <div className="service-v2-copy">

              <p className="service-v2-copy__lead">
                {service.intro}
              </p>

              {service.body && (
                <p>
                  {service.body}
                </p>
              )}


              <ul>
                {service.steps.map(
                  (step, stepIndex) => (
                    <li
                      key={
                        step.number ??
                        `step-${stepIndex}`
                      }
                    >
                      <span
                        className="service-v2-copy__bullet"
                        aria-hidden="true"
                      >
                        →
                      </span>

                      <div>
                        <strong>
                          Step{" "}
                          {Number(
                            step.number,
                          )}{" "}
                          ·{" "}
                          {step.title}
                        </strong>
                      </div>
                    </li>
                  ),
                )}
              </ul>

            </div>
          </Reveal>


          {/* RIGHT / MOBILE BELOW */}

          <QualityControlSteps
            steps={service.steps}
          />

        </div>

      ) : (

        /* ===================================================
           NORMAL SERVICE
        =================================================== */

        <div
          className={[
            "service-v2-feature",
            reverse
              ? "service-v2-feature--reverse"
              : "",
          ]
            .filter(Boolean)
            .join(" ")}
        >

          {/* =================================================
              COPY
          ================================================= */}

          <Reveal
            variant={
              reverse
                ? "right"
                : "left"
            }
          >
            <div className="service-v2-copy">

              <p className="service-v2-copy__lead">
                {service.intro}
              </p>


              {service.body && (
                <p>
                  {service.body}
                </p>
              )}


              {Array.isArray(
                service.groups,
              ) &&
              service.groups.length >
                0 ? (

                <ServiceGroups
                  groups={
                    service.groups
                  }
                />

              ) : (

                Array.isArray(
                  service.points,
                ) &&
                service.points.length >
                  0 && (

                  <ul>
                    {service.points.map(
                      (
                        point,
                        pointIndex,
                      ) => (
                        <li
                          key={`${pointIndex}-${point}`}
                        >
                          <span
                            className="service-v2-copy__bullet"
                            aria-hidden="true"
                          >
                            →
                          </span>

                          <span className="service-v2-copy__text">
                            <RichPoint
                              text={
                                point
                              }
                            />
                          </span>
                        </li>
                      ),
                    )}
                  </ul>

                )
              )}

            </div>
          </Reveal>


          {/* =================================================
              VISUAL
          ================================================= */}

          <Reveal
            variant={
              reverse
                ? "left"
                : "right"
            }
            delay={100}
          >

            {/* ===============================================
                4 IMAGE GRID
            =============================================== */}

            {usePackagingSlider ? (

              <PackagingImageSlider
                images={images}
                title={service.title}
                mode={packagingSliderMode}
              />

            ) : useImageGrid ? (

              <div className="service-v2-collage service-v2-collage--grid">

                {images
                  .slice(0, 4)
                  .map(
                    (
                      src,
                      imageIndex,
                    ) => (
                      <figure
                        key={`${service.id}-grid-${imageIndex}`}
                        className="service-v2-collage__cell"
                        style={
                          cleanFigureStyle
                        }
                      >
                        <ServiceResponsiveImage
                          src={src}
                          alt={
                            imageIndex ===
                            0
                              ? service.title
                              : `${service.title} ${imageIndex + 1}`
                          }
                          className="
                            block
                            h-full
                            w-full
                            object-contain
                            object-center
                          "
                        />
                      </figure>
                    ),
                  )}

              </div>

            ) : (

              /* =============================================
                 NORMAL COLLAGE
              ============================================= */

              <div className="service-v2-collage">

                {/* MAIN IMAGE */}

                {images[0] && (
                  <figure
                    className="service-v2-collage__main"
                    style={
                      cleanFigureStyle
                    }
                  >
                    <ServiceResponsiveImage
                      src={
                        images[0]
                      }
                      alt={
                        service.title
                      }
                      className="
                        block
                        h-full
                        w-full
                        object-contain
                        object-center
                      "
                    />

                    <span>
                      {service.eyebrow}
                    </span>
                  </figure>
                )}


                {/* SECOND IMAGE */}

                {images[1] && (
                  <figure
                    className="service-v2-collage__secondary"
                    style={
                      cleanFigureStyle
                    }
                  >
                    <ServiceResponsiveImage
                      src={
                        images[1]
                      }
                      alt={`${service.title} detail 2`}
                      className="
                        block
                        h-full
                        w-full
                        object-contain
                        object-center
                      "
                    />
                  </figure>
                )}


                {/* THIRD IMAGE */}

                {images[2] && (
                  <figure
                    className="service-v2-collage__third"
                    style={
                      cleanFigureStyle
                    }
                  >
                    <ServiceResponsiveImage
                      src={
                        images[2]
                      }
                      alt={`${service.title} detail 3`}
                      className="
                        block
                        h-full
                        w-full
                        object-contain
                        object-center
                      "
                    />
                  </figure>
                )}

              </div>

            )}

          </Reveal>

        </div>

      )}

    </section>
  );
}