import Reveal from "../ui/Reveal";
import SiteIcon from "../ui/SiteIcon";

import {
  oemOdmContent,
} from "../../data/oemOdmContent";

import {
  productCatalog,
} from "../../data/productCatalog";


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


export default function OemCapabilities() {
  return (
    <section
      id="oem-capabilities"
      className="bg-white py-20 sm:py-24 lg:py-28"
    >

      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">


        {/* HEADING */}

        <Reveal>

          <header className="mx-auto max-w-[860px] text-center">

            <SectionLabel>
              Customization & Capabilities
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
              What we work with
            </h2>


            <p className="mx-auto mt-5 max-w-[700px] text-pretty text-[15px] leading-7 text-[#1E2A24]/55 sm:text-[17px] sm:leading-8">
              Product development, packaging, branding and sampling support
              for flexible OEM, ODM and private-label projects.
            </p>

          </header>

        </Reveal>


        {/* CAPABILITY GRID */}

        <div className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {oemOdmContent.capabilities.map(
            (item, index) => (

              <Reveal
                key={item.number}
                delay={index * 55}
                className="h-full"
              >

                <article
                  className={[
                    "group",
                    "flex h-full min-h-[190px]",
                    "flex-col",
                    "rounded-[24px]",
                    "border border-[#F59E0B]/20",
                    "bg-[#FAF8F5]",
                    "px-6 py-6",
                    "transition duration-300",
                    "hover:-translate-y-1",
                    "hover:border-[#F59E0B]",
                    "hover:bg-white",
                    "hover:shadow-[0_18px_42px_rgba(245,158,11,0.11)]",
                  ].join(" ")}
                >

                  <div className="flex items-start justify-between gap-4">

                    <span
                      className={[
                        "flex h-12 w-12",
                        "items-center justify-center",
                        "rounded-full",
                        "bg-[#F59E0B]",
                        "text-[#1E2A24]",
                        "shadow-[0_10px_26px_rgba(245,158,11,0.22)]",
                        "transition-transform duration-300",
                        "group-hover:scale-105",
                      ].join(" ")}
                    >
                      <SiteIcon
                        name={item.icon}
                        size={20}
                        strokeWidth={2}
                      />
                    </span>


                    <span className="text-[10px] font-extrabold tracking-[0.14em] text-[#1E2A24]/28">
                      {item.number}
                    </span>

                  </div>


                  <div className="mt-auto pt-6">

                    <h3 className="text-[18px] font-extrabold leading-tight tracking-[-0.035em] text-[#1E2A24]">
                      {item.title}
                    </h3>


                    <p className="mt-2 text-[12px] leading-6 text-[#1E2A24]/55">
                      {item.text}
                    </p>

                  </div>

                </article>

              </Reveal>
            ),
          )}

        </div>


        {/* PRODUCT CATEGORIES */}

        <Reveal delay={140}>

          <div className="mt-11">

            <p className="text-center text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#1E2A24]/40">
              Product Categories
            </p>


            <div className="mt-5 flex flex-wrap justify-center gap-2.5">

              {productCatalog.map(
                (product) => (

                  <span
                    key={product.slug}
                    className={[
                      "rounded-full",
                      "border border-[#1E2A24]/10",
                      "bg-white",
                      "px-4 py-2.5",
                      "text-[11px]",
                      "font-bold",
                      "text-[#1E2A24]/70",
                      "shadow-[0_5px_18px_rgba(30,42,36,0.03)]",
                    ].join(" ")}
                  >
                    {product.name}
                  </span>

                ),
              )}

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}