import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";


/* =========================================================
   Tách "Label — mô tả" hoặc "Label: mô tả" để bold phần label.
   Không match được thì trả về text thường, không đoán bừa.
========================================================= */

function splitLabel(text) {
  const dashIndex = text.indexOf(" — ");
  const colonIndex = text.indexOf(": ");

  if (dashIndex > -1 && (colonIndex === -1 || dashIndex < colonIndex)) {
    return {
      label: text.slice(0, dashIndex),
      separator: " — ",
      rest: text.slice(dashIndex + 3),
    };
  }

  if (colonIndex > -1 && colonIndex <= 40) {
    return {
      label: text.slice(0, colonIndex),
      separator: ": ",
      rest: text.slice(colonIndex + 2),
    };
  }

  return { label: null, separator: "", rest: text };
}

function RichPoint({ text }) {
  const { label, separator, rest } = splitLabel(text);

  if (!label) return <>{text}</>;

  return (
    <>
      <strong>{label}</strong>
      {separator}
      {rest}
    </>
  );
}


function ServiceGroups({ groups }) {
  return (
    <div className="service-v2-groups">
      {groups.map((group) => (
        <div key={group.heading} className="service-v2-group">
          <strong className="service-v2-group__heading">
            {group.heading}
          </strong>

                   <ul>
            {group.items.map((item) => (
              <li key={item}>
                <span className="service-v2-copy__bullet" aria-hidden="true">→</span>
                <span className="service-v2-copy__text"><RichPoint text={item} /></span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}


function QualityControlSteps({ steps = [] }) {
  return (
    <div className="qc-steps">
      {steps.map((step, index) => (
        <Reveal key={step.number} variant="up" delay={index * 60}>
          <article className="qc-step">

            <div className="qc-step__copy">
              <div className="qc-step__meta">
                <span>{step.number}</span>
                <small>{step.eyebrow}</small>
              </div>

              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>


            <div className="qc-step__images">
              {step.images?.map((src, imageIndex) => (
                <figure
                  key={`${step.number}-${imageIndex}`}
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
                    src={src}
                    alt={`${step.title} ${imageIndex + 1}`}
                    className="block h-full w-full object-contain object-center"
                  />
                </figure>
              ))}
            </div>

          </article>
        </Reveal>
      ))}
    </div>
  );
}


export default function ServiceChapter({ service, index }) {
  const reverse = index % 2 === 1;
  const hasQualitySteps =
    Array.isArray(service.steps) && service.steps.length > 0;

  const images = service.images ?? [];
  const useImageGrid = images.length >= 4;

  return (
    <section id={service.id} className="service-v2-chapter">

      <header className="service-v2-chapter__header">
        <Reveal variant="left">
          <span className="service-v2-chapter__number">
            {service.number}
          </span>
        </Reveal>

        <Reveal variant="right" delay={60}>
          <div>
            <p className="service-v2-eyebrow">
              {service.eyebrow}
            </p>

            <h2>{service.title}</h2>
          </div>
        </Reveal>
      </header>


      {hasQualitySteps ? (
        <div className="service-v2-quality-layout">

          <Reveal variant="left">
            <div className="service-v2-copy">
              <p className="service-v2-copy__lead">
                {service.intro}
              </p>

              {service.body && <p>{service.body}</p>}

              <ul>
               {service.steps.map((step) => (
                  <li key={step.number}>
                    <span className="service-v2-copy__bullet" aria-hidden="true">→</span>
                    <div>
                      <strong>
                        Step {Number(step.number)} · {step.title}
                      </strong>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <QualityControlSteps steps={service.steps} />

        </div>
      ) : (
        <div
          className={[
            "service-v2-feature",
            reverse ? "service-v2-feature--reverse" : "",
          ].join(" ")}
        >

          <Reveal variant={reverse ? "right" : "left"}>
            <div className="service-v2-copy">
              <p className="service-v2-copy__lead">
                {service.intro}
              </p>

              {service.body && <p>{service.body}</p>}

              {service.groups ? (
                <ServiceGroups groups={service.groups} />
              ) : (
                  service.points?.length > 0 && (
                  <ul>
                    {service.points.map((point) => (
                      <li key={point}>
                        <span className="service-v2-copy__bullet" aria-hidden="true">→</span>
                        <span className="service-v2-copy__text"><RichPoint text={point} /></span>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </div>
          </Reveal>


          <Reveal
            variant={reverse ? "left" : "right"}
            delay={100}
          >
                       {useImageGrid ? (
              <div className="service-v2-collage service-v2-collage--grid">
                {images.slice(0, 4).map((src, i) => (
                  <figure key={src} className="service-v2-collage__cell">
                    <SmartImage
                      src={src}
                      alt={i === 0 ? service.title : ""}
                      className="block h-full w-full object-cover object-center"
                    />
                  </figure>
                ))}
              </div>
            ) : (
              <div className="service-v2-collage">

                {images[0] && (
                  <figure
                    className="service-v2-collage__main"
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
                      src={images[0]}
                      alt={service.title}
                      className="block h-full w-full object-contain object-center"
                    />

                    <span>{service.eyebrow}</span>
                  </figure>
                )}


                {images[1] && (
                  <figure
                    className="service-v2-collage__secondary"
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
                      src={images[1]}
                      alt=""
                      className="block h-full w-full object-contain object-center"
                    />
                  </figure>
                )}


                {images[2] && (
                  <figure
                    className="service-v2-collage__third"
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
                      src={images[2]}
                      alt=""
                      className="block h-full w-full object-contain object-center"
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