import Reveal from "../ui/Reveal";

import {
  oemOdmContent,
} from "../../data/oemOdmContent";

export default function OemProcess() {
  return (
    <section className="oem-v3-process">

      <div className="oem-v3-shell">

        <Reveal>
          <header className="oem-v3-process__heading">

            <p className="oem-v3-eyebrow">
              How It Works
            </p>

            <h2>
              From first brief
              <span>
                to final shipment.
              </span>
            </h2>

          </header>
        </Reveal>


        <div className="oem-v3-process__timeline">

          {oemOdmContent.process.map(
            (item, index) => (
              <Reveal
                key={item.number}
                variant={
                  index % 2 === 0
                    ? "left"
                    : "right"
                }
                delay={index * 75}
              >

                <article
                  className={[
                    "oem-v3-process-card",
                    index % 2 === 1
                      ? "oem-v3-process-card--right"
                      : "",
                  ].join(" ")}
                >

                  <div className="oem-v3-process-card__number">
                    {item.number}
                  </div>

                  <div>

                    <p>
                      {item.eyebrow}
                    </p>

                    <h3>
                      {item.title}
                    </h3>

                    <span>
                      {item.text}
                    </span>

                  </div>

                </article>

              </Reveal>
            ),
          )}

        </div>

      </div>

    </section>
  );
}