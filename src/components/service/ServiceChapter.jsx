import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";


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
                    <SmartImage
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

  const useImageGrid =
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

            {useImageGrid ? (

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
                        <SmartImage
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
                    <SmartImage
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
                    <SmartImage
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
                    <SmartImage
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