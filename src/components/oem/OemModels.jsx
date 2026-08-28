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


const modelIcons = {
  oem: "factory",
  odm: "box",
  private: "tag",
};


function SectionLabel({
  children,
}) {
  return (
    <div className="flex items-center justify-center gap-3">

      <span className="h-px w-9 bg-[#F59E0B]/70" />

      <p className="text-[10px] font-extrabold uppercase tracking-[0.28em] text-[#D97706] sm:text-[11px]">
        {children}
      </p>

      <span className="h-px w-9 bg-[#F59E0B]/70" />

    </div>
  );
}


function StatCard({
  label,
  value,
  highlighted = false,
}) {
  return (
    <article
      className={[
        "rounded-[22px]",
        "border",
        "px-5 py-5",
        "sm:px-6",
        highlighted
          ? "border-[#F59E0B]/55 bg-[#fff8ea]"
          : "border-[#1E2A24]/10 bg-white",
      ].join(" ")}
    >

      <span
        className={[
          "block",
          "text-[10px]",
          "font-extrabold",
          "uppercase",
          "tracking-[0.12em]",
          highlighted
            ? "text-[#D97706]"
            : "text-[#1E2A24]/45",
        ].join(" ")}
      >
        {label}
      </span>


      <strong className="mt-2 block text-[15px] font-extrabold leading-6 tracking-[-0.02em] text-[#1E2A24] sm:text-[16px]">
        {value}
      </strong>

    </article>
  );
}


export default function OemModels() {
  const [
    activeKey,
    setActiveKey,
  ] = useState("oem");


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
    <section
      id="oem-models"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >

      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">


        {/* HEADING */}

        <Reveal>

          <header className="mx-auto max-w-[900px] text-center">

            <SectionLabel>
              Three Ways To Work
            </SectionLabel>


            <h2
              className={[
                "mt-4",
                "text-balance",
                "text-[clamp(2.25rem,5vw,4rem)]",
                "font-extrabold",
                "leading-[0.98]",
                "tracking-[-0.055em]",
                "text-[#1E2A24]",
              ].join(" ")}
            >
              Choose your manufacturing path
            </h2>


            <p className="mx-auto mt-5 max-w-[720px] text-pretty text-[15px] leading-7 text-[#1E2A24]/55 sm:text-[17px] sm:leading-8">
              Every brand is different. Pick the model that fits your needs -
              from full custom production to quick private label.
            </p>

          </header>

        </Reveal>


        {/* MODEL TABS */}

        <div className="mt-11 grid gap-4 md:grid-cols-3">

          {oemOdmContent.models.map(
            (item, index) => {

              const active =
                item.key === activeKey;


              return (
                <Reveal
                  key={item.key}
                  delay={index * 70}
                  className="h-full"
                >

                  <button
                    type="button"
                    onClick={() =>
                      setActiveKey(item.key)
                    }
                    className={[
                      "group",
                      "relative",
                      "flex h-full min-h-[190px] w-full flex-col",
                      "rounded-[26px]",
                      "border",
                      "px-6 py-6",
                      "text-left",
                      "transition duration-300",
                      active
                        ? [
                            "border-2 border-[#F59E0B]",
                            "bg-[#FAF8F5]",
                            "shadow-[0_18px_44px_rgba(245,158,11,0.14)]",
                          ].join(" ")
                        : [
                            "border-[#1E2A24]/10",
                            "bg-white",
                            "hover:-translate-y-1",
                            "hover:border-[#F59E0B]/60",
                            "hover:shadow-[0_18px_40px_rgba(30,42,36,0.06)]",
                          ].join(" "),
                    ].join(" ")}
                  >

                    <span
                      className={[
                        "flex h-12 w-12",
                        "items-center justify-center",
                        "rounded-full",
                        "transition duration-300",
                        active
                          ? "bg-[#F59E0B] text-[#1E2A24]"
                          : "bg-[#F59E0B]/12 text-[#D97706]",
                      ].join(" ")}
                    >
                      <SiteIcon
                        name={modelIcons[item.key]}
                        size={21}
                        strokeWidth={2}
                      />
                    </span>


                    <div className="mt-auto pt-5">

                      <p className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#1E2A24]/45">
                        {item.eyebrow}
                      </p>


                      <strong className="mt-1.5 block text-[18px] font-extrabold leading-tight tracking-[-0.035em] text-[#1E2A24] sm:text-[20px]">
                        {item.title}
                      </strong>


                      <small className="mt-1.5 block text-[12px] font-medium leading-5 text-[#1E2A24]/55">
                        {item.subtitle}
                      </small>

                    </div>

                  </button>

                </Reveal>
              );
            },
          )}

        </div>


        {/* ACTIVE MODEL DETAIL */}

        <Reveal
          variant="zoom"
          delay={100}
        >

          <div
            key={activeModel.key}
            className={[
              "mt-7",
              "overflow-hidden",
              "rounded-[32px]",
              "border border-[#1E2A24]/10",
              "bg-[#fcfdfc]",
              "p-6",
              "shadow-[0_20px_55px_rgba(30,42,36,0.065)]",
              "sm:p-8",
              "lg:grid",
              "lg:grid-cols-[1.08fr_.92fr]",
              "lg:gap-10",
              "lg:p-9",
            ].join(" ")}
          >

            {/* DETAIL COPY */}

            <div>

              <span
                className={[
                  "flex h-14 w-14",
                  "items-center justify-center",
                  "rounded-full",
                  "bg-[#F59E0B]",
                  "text-[#1E2A24]",
                  "shadow-[0_13px_30px_rgba(245,158,11,0.26)]",
                ].join(" ")}
              >
                <SiteIcon
                  name={
                    modelIcons[
                      activeModel.key
                    ]
                  }
                  size={24}
                  strokeWidth={2}
                />
              </span>


              <p className="mt-6 text-[10px] font-extrabold uppercase tracking-[0.16em] text-[#D97706]">
                {activeModel.eyebrow}
              </p>


              <h3 className="mt-2 text-[clamp(2rem,4vw,3rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#1E2A24]">
                {activeModel.title}
              </h3>


              <p className="mt-5 max-w-[620px] text-[14px] leading-7 text-[#1E2A24]/60 sm:text-[15px]">
                {activeModel.description}
              </p>


              <div className="mt-7 grid gap-x-6 gap-y-3 sm:grid-cols-2">

                {activeModel.points.map(
                  (point) => (

                    <div
                      key={point}
                      className="flex items-start gap-3 text-[13px] font-semibold leading-6 text-[#1E2A24]/70"
                    >

                      <span className="mt-[2px] flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]/18 text-[#D97706]">
                        <SiteIcon
                          name="check"
                          size={12}
                          strokeWidth={2.8}
                        />
                      </span>

                      <span>
                        {point}
                      </span>

                    </div>

                  ),
                )}

              </div>

            </div>


            {/* FACTS */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:mt-0 lg:content-start">

              <StatCard
                label="Minimum Order"
                value={
                  activeModel.minimumOrder
                }
              />

              <StatCard
                label="Lead Time"
                value={
                  activeModel.leadTime
                }
              />

              <StatCard
                label="Indicative Pricing"
                value={
                  activeModel.pricing
                }
              />

              <StatCard
                label="Best For"
                value={
                  activeModel.bestFor
                }
                highlighted
              />


              <Link
                to="/contact"
                className={[
                  "inline-flex min-h-14",
                  "items-center justify-center",
                  "gap-2",
                  "rounded-full",
                  "bg-[#F59E0B]",
                  "px-6 py-3.5",
                  "text-[13px]",
                  "font-extrabold",
                  "text-[#1E2A24]",
                  "shadow-[0_14px_30px_rgba(245,158,11,0.22)]",
                  "transition duration-200",
                  "hover:-translate-y-0.5",
                  "hover:bg-[#D97706]",
                  "lg:col-span-2",
                ].join(" ")}
              >

                Request {activeModel.eyebrow} quote

                <SiteIcon
                  name="arrow"
                  size={15}
                  strokeWidth={2.2}
                />

              </Link>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}