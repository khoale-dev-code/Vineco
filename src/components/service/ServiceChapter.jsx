import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";


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
                <figure key={`${step.number}-${imageIndex}`}>
                  <SmartImage
                    src={src}
                    alt={`${step.title} ${imageIndex + 1}`}
                    className="h-full w-full object-contain object-center"
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

              <p>{service.body}</p>

              <ul>
                {service.steps.map((step) => (
                  <li key={step.number}>
                    <span aria-hidden="true">→</span>
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

              <p>{service.body}</p>

              <ul>
                {service.points?.map((point) => (
                  <li key={point}>
                    <span aria-hidden="true">→</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>


          <Reveal
            variant={reverse ? "left" : "right"}
            delay={100}
          >
            <div className="service-v2-collage">

              {service.images?.[0] && (
                <figure className="service-v2-collage__main">
                  <SmartImage
                    src={service.images[0]}
                    alt={service.title}
                    className="h-full w-full object-contain object-center"
                  />

                  <span>{service.eyebrow}</span>
                </figure>
              )}


              {service.images?.[1] && (
                <figure className="service-v2-collage__secondary">
                  <SmartImage
                    src={service.images[1]}
                    alt=""
                    className="h-full w-full object-contain object-center"
                  />
                </figure>
              )}


              {service.images?.[2] && (
                <figure className="service-v2-collage__third">
                  <SmartImage
                    src={service.images[2]}
                    alt=""
                    className="h-full w-full object-contain object-center"
                  />
                </figure>
              )}

            </div>
          </Reveal>

        </div>
      )}

    </section>
  );
}