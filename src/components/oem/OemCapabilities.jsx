import { Link } from "react-router";

import Reveal from "../ui/Reveal";
import SiteIcon from "../ui/SiteIcon";

import {
  oemOdmContent,
} from "../../data/oemOdmContent";

export default function OemCapabilities() {
  return (
    <section className="oem-v3-capabilities">

      <div className="oem-v3-shell">

        <Reveal>
          <header className="oem-v3-section-heading">

            <div>
              <p className="oem-v3-eyebrow">
                Customization
              </p>

              <h2>
                What can
                <span>
                  we customize?
                </span>
              </h2>
            </div>

            <p>
              Build your project around the
              product, packaging and brand details
              that matter most.
            </p>

          </header>
        </Reveal>


        <div className="oem-v3-bento">

          {oemOdmContent.capabilities.map(
            (item, index) => (
              <Reveal
                key={item.number}
                variant="up"
                delay={index * 65}
                className={
                  index === 0 ||
                  index === 3
                    ? "oem-v3-bento__wide"
                    : ""
                }
              >

                <article
                  className={[
                    "oem-v3-capability",
                    index === 1 ||
                    index === 4
                      ? "oem-v3-capability--navy"
                      : "",
                    index === 0 ||
                    index === 3
                      ? "oem-v3-capability--orange"
                      : "",
                  ].join(" ")}
                >

                  <span>
                    {item.number}
                  </span>

                  <div>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </div>

                </article>

              </Reveal>
            ),
          )}

        </div>


        <Reveal delay={150}>

          <div className="oem-v3-capabilities__footer">

            <p>
              Have a product idea that does not fit
              neatly into one of these categories?
            </p>

            <Link
              to="/contact"
              className="oem-v3-text-link"
            >
              Tell us what you want to build

              <SiteIcon
                name="arrow"
                size={15}
              />
            </Link>

          </div>

        </Reveal>

      </div>

    </section>
  );
}