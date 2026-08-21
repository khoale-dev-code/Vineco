import { aboutContent } from "../../data/aboutContent";
import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";

function JourneyCard({
  item,
  index,
}) {
  const reversed = index % 2 === 1;

  return (
    <Reveal
      variant={reversed ? "right" : "left"}
      delay={80}
    >
      <article
        className={[
          "about-story-card",
          reversed
            ? "lg:grid-cols-[1fr_.82fr]"
            : "lg:grid-cols-[.82fr_1fr]",
        ].join(" ")}
      >
        <div
          className={[
            "relative min-h-[270px] overflow-hidden bg-brand-50 sm:min-h-[330px]",
            reversed
              ? "lg:order-2"
              : "",
          ].join(" ")}
        >
          <SmartImage
            src={item.image}
            alt={item.title}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 hover:scale-[1.03]"
          />

          <span className="absolute left-5 top-5 rounded-full bg-brand-500 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.15em] text-ink">
            Step {item.step}
          </span>
        </div>

        <div
          className={[
            "flex flex-col justify-center p-7 sm:p-9 lg:p-12",
            reversed
              ? "lg:order-1"
              : "",
          ].join(" ")}
        >
          <p className="text-[10px] font-extrabold uppercase tracking-[0.22em] text-brand-600">
            {item.eyebrow}
          </p>

          <h3 className="mt-3 text-2xl font-extrabold leading-tight tracking-[-0.035em] text-ink sm:text-3xl">
            {item.title}
          </h3>

          <p className="mt-5 text-sm leading-7 text-ink/60">
            {item.text}
          </p>

          <div className="mt-7 h-[3px] w-14 rounded-full bg-brand-500" />
        </div>
      </article>
    </Reveal>
  );
}

export default function AboutJourney() {
  const {
    intro,
    journey,
  } = aboutContent;

  return (
    <section className="bg-[#fff8ee] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-brand-600">
              {intro.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-extrabold leading-[1.05] tracking-[-0.045em] text-ink sm:text-4xl lg:text-5xl">
              {intro.title}
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ink/60 sm:text-base">
              {intro.text}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 space-y-6 sm:mt-14 sm:space-y-8">
          {journey.map(
            (item, index) => (
              <JourneyCard
                key={item.step}
                item={item}
                index={index}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}