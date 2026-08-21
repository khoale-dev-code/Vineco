import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";

export default function ServiceChapter({
  service,
  index,
}) {
  const reverse =
    index % 2 === 1;

  return (
    <section
      id={service.id}
      className="service-v2-chapter"
    >
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


      <div
        className={[
          "service-v2-feature",
          reverse
            ? "service-v2-feature--reverse"
            : "",
        ].join(" ")}
      >

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

            <p>
              {service.body}
            </p>

            <ul>
              {service.points.map(
                (point) => (
                  <li key={point}>
                    <span
                      aria-hidden="true"
                    >
                      →
                    </span>

                    {point}
                  </li>
                ),
              )}
            </ul>

          </div>
        </Reveal>


        <Reveal
          variant={
            reverse
              ? "left"
              : "right"
          }
          delay={100}
        >
          <div className="service-v2-collage">

            <figure className="service-v2-collage__main">
              <SmartImage
                src={service.images[0]}
                alt={service.title}
                className="h-full w-full object-cover"
              />

              <span>
                {service.eyebrow}
              </span>
            </figure>

            {service.images[1] && (
              <figure className="service-v2-collage__secondary">
                <SmartImage
                  src={service.images[1]}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
            )}

            {service.images[2] && (
              <figure className="service-v2-collage__third">
                <SmartImage
                  src={service.images[2]}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </figure>
            )}

          </div>
        </Reveal>

      </div>
    </section>
  );
}