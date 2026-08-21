import {
  useMemo,
  useState,
} from "react";

import { Link } from "react-router";

import Reveal from "../ui/Reveal";
import SiteIcon from "../ui/SiteIcon";

import {
  oemOdmContent,
} from "../../data/oemOdmContent";

export default function OemModels() {
  const [activeKey, setActiveKey] =
    useState("oem");

  const activeModel =
    useMemo(
      () =>
        oemOdmContent.models.find(
          (item) =>
            item.key === activeKey,
        ) ??
        oemOdmContent.models[0],
      [activeKey],
    );

  return (
    <section className="oem-v3-models">

      <div className="oem-v3-shell">

        <Reveal>
          <header className="oem-v3-section-heading">

            <div>
              <p className="oem-v3-eyebrow">
                Three Ways To Work
              </p>

              <h2>
                Choose the path
                <span>
                  that fits your brand.
                </span>
              </h2>
            </div>

            <p>
              Start with an existing
              specification, develop a new
              concept or build a private-label
              collection from suitable VinEco
              products.
            </p>

          </header>
        </Reveal>


        <div className="oem-v3-model-tabs">

          {oemOdmContent.models.map(
            (item, index) => {

              const active =
                item.key === activeKey;

              return (
                <Reveal
                  key={item.key}
                  delay={index * 80}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setActiveKey(item.key)
                    }
                    className={
                      active
                        ? "is-active"
                        : ""
                    }
                  >

                    <span className="oem-v3-model-tabs__number">
                      {item.number}
                    </span>

                    <p>
                      {item.eyebrow}
                    </p>

                    <strong>
                      {item.title}
                    </strong>

                    <small>
                      {item.subtitle}
                    </small>

                  </button>
                </Reveal>
              );
            },
          )}

        </div>


        <Reveal variant="zoom">

          <div
            key={activeModel.key}
            className="oem-v3-model-detail"
          >

            <div className="oem-v3-model-detail__copy">

              <div className="oem-v3-model-detail__index">
                {activeModel.number}
              </div>

              <p className="oem-v3-eyebrow">
                {activeModel.eyebrow}
              </p>

              <h3>
                {activeModel.title}
              </h3>

              <p className="oem-v3-model-detail__description">
                {activeModel.description}
              </p>


              <div className="oem-v3-model-detail__points">

                {activeModel.points.map(
                  (point) => (
                    <div key={point}>
                      <span>
                        ✓
                      </span>

                      {point}
                    </div>
                  ),
                )}

              </div>

            </div>


            <div className="oem-v3-model-detail__facts">

              <article>
                <span>
                  Minimum Order
                </span>

                <strong>
                  {
                    activeModel
                      .minimumOrder
                  }
                </strong>
              </article>


              <article>
                <span>
                  Lead Time
                </span>

                <strong>
                  {
                    activeModel
                      .leadTime
                  }
                </strong>
              </article>


              <article className="oem-v3-model-detail__best">

                <span>
                  Best For
                </span>

                <strong>
                  {activeModel.bestFor}
                </strong>

              </article>


              <Link
                to="/contact"
                className="oem-v3-action"
              >
                Discuss this model

                <SiteIcon
                  name="arrow"
                  size={15}
                />
              </Link>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}