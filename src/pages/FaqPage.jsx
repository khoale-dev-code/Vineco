import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";

import { projectData } from "../data/projectData";


export default function FaqPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers about samples, MOQ, OEM / ODM, customization, materials, certificates, production and delivery."
        />

        <section className="bg-[#FAF8F5] py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[900px] px-4 sm:px-6">

            <Reveal>
              <div className="mb-8 text-center sm:mb-10">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#D97706]">
                  Buyer Information
                </p>

                <h2 className="mt-3 text-[28px] font-extrabold leading-[1] tracking-[-0.04em] text-[#1E2A24] sm:text-[34px]">
                  Everything you need to know
                  <span className="text-[#F59E0B]"> before ordering.</span>
                </h2>
              </div>
            </Reveal>


            <div className="space-y-3">
              {projectData.faq.map((item, index) => (
                <Reveal
                  key={item.q}
                  delay={index * 45}
                >
                  <details
                    className={[
                      "group overflow-hidden rounded-[20px]",
                      "border border-[#1E2A24]/10",
                      "bg-white",
                      "transition-all duration-300",
                      "open:border-[#F59E0B]/60",
                      "open:shadow-[0_16px_40px_rgba(30,42,36,0.06)]",
                    ].join(" ")}
                  >
                    <summary
                      className={[
                        "flex min-h-[68px] cursor-pointer",
                        "list-none items-center justify-between gap-5",
                        "px-5 py-4",
                        "text-[14px] font-extrabold",
                        "leading-6 text-[#1E2A24]",
                        "sm:min-h-[74px] sm:px-6 sm:text-[15px]",
                        "[&::-webkit-details-marker]:hidden",
                      ].join(" ")}
                    >
                      <span className="flex items-start gap-3">
                        <span className="mt-[2px] text-[9px] font-extrabold text-[#F59E0B]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span>
                          {item.q}
                        </span>
                      </span>

                      <span
                        className={[
                          "flex h-9 w-9 shrink-0 items-center justify-center",
                          "rounded-full border border-[#F59E0B]/70",
                          "bg-[#FFF7E7]",
                          "text-[20px] font-medium leading-none",
                          "text-[#0F2F24]",
                          "transition-transform duration-300",
                          "group-open:rotate-45",
                        ].join(" ")}
                      >
                        +
                      </span>
                    </summary>


                    <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                      <div className="border-t border-[#1E2A24]/10 pt-4">
                        <p
                          className={[
                            "whitespace-pre-line",
                            "text-[13px] font-medium",
                            "leading-7 text-[#5F625E]",
                            "sm:text-[14px] sm:leading-7",
                          ].join(" ")}
                        >
                          {item.a}
                        </p>
                      </div>
                    </div>
                  </details>
                </Reveal>
              ))}
            </div>


            <Reveal delay={180}>
              <div
                className={[
                  "mt-8 flex flex-col gap-4 rounded-[22px]",
                  "border border-[#F59E0B]/25",
                  "bg-[#F4F1EA]",
                  "px-5 py-5",
                  "sm:flex-row sm:items-center sm:justify-between",
                  "sm:px-6",
                ].join(" ")}
              >
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#D97706]">
                    Still have a question?
                  </p>

                  <p className="mt-1 text-[14px] font-bold text-[#1E2A24]">
                    Contact VinEco for product, sample or OEM / ODM support.
                  </p>
                </div>

                <a
                  href={`mailto:${projectData.contact.salesEmail}`}
                  className={[
                    "inline-flex min-h-[44px] shrink-0",
                    "items-center justify-center",
                    "rounded-full bg-[#0F2F24]",
                    "px-5",
                    "text-[12px] font-extrabold text-white",
                    "transition duration-200",
                    "hover:-translate-y-0.5",
                    "hover:bg-[#3D5245]",
                  ].join(" ")}
                >
                  Contact sales
                </a>
              </div>
            </Reveal>

          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactDock />
    </>
  );
}