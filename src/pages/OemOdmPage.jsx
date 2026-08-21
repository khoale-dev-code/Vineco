import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import Reveal from "../components/ui/Reveal";
import SiteIcon from "../components/ui/SiteIcon";

import OemModels from "../components/oem/OemModels";
import OemProcess from "../components/oem/OemProcess";
import OemCapabilities from "../components/oem/OemCapabilities";


export default function OemOdmPage() {
  return (
    <>

      <Header />


      <main className="overflow-hidden bg-white">


        {/* ==================================================
            HERO
        ================================================== */}

        <section
          className={[
            "relative overflow-hidden",
            "bg-[#ffa412]",
          ].join(" ")}
        >

          {/* DECORATIVE BACKGROUND */}

          <div
            aria-hidden="true"
            className={[
              "pointer-events-none",
              "absolute",
              "-left-24 -top-28",
              "h-[380px] w-[380px]",
              "rounded-full",
              "border-[75px]",
              "border-white/12",
            ].join(" ")}
          />


          <div
            aria-hidden="true"
            className={[
              "pointer-events-none",
              "absolute",
              "-bottom-44 -right-28",
              "h-[460px] w-[460px]",
              "rounded-full",
              "bg-white/10",
            ].join(" ")}
          />


          <div
            aria-hidden="true"
            className={[
              "pointer-events-none",
              "absolute left-1/2 top-0",
              "h-full w-px",
              "bg-white/10",
            ].join(" ")}
          />


          <div
            className={[
              "relative",
              "mx-auto max-w-[1180px]",
              "px-4",
              "py-20",
              "sm:px-6 sm:py-24",
              "lg:px-8 lg:py-28",
            ].join(" ")}
          >

            <Reveal>

              <div className="mx-auto max-w-[880px] text-center">


                {/* EYEBROW */}

                <div className="flex items-center justify-center gap-3">

                  <span className="h-px w-10 bg-[#03326b]/45" />

                  <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#03326b]/65 sm:text-[11px]">
                    OEM / ODM Services
                  </p>

                  <span className="h-px w-10 bg-[#03326b]/45" />

                </div>


                {/* TITLE */}

                <h1
                  className={[
                    "mt-5",
                    "text-balance",
                    "text-[clamp(3rem,7vw,5.8rem)]",
                    "font-extrabold",
                    "leading-[0.89]",
                    "tracking-[-0.07em]",
                    "text-[#03326b]",
                  ].join(" ")}
                >
                  Built your way,
                  <span className="block text-white">
                    made by VinEco.
                  </span>
                </h1>


                {/* DESCRIPTION */}

                <p
                  className={[
                    "mx-auto mt-6",
                    "max-w-[720px]",
                    "text-pretty",
                    "text-[15px]",
                    "font-medium",
                    "leading-7",
                    "text-[#03326b]/70",
                    "sm:text-[17px]",
                    "sm:leading-8",
                  ].join(" ")}
                >
                  From a first sketch, sample or product idea to
                  export-ready production, VinEco supports OEM,
                  ODM and private-label development for natural
                  pet-product brands.
                </p>


                {/* ACTIONS */}

                <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                  <Link
                    to="/contact"
                    className={[
                      "inline-flex min-h-14",
                      "items-center justify-center",
                      "gap-2",
                      "rounded-full",
                      "bg-[#03326b]",
                      "px-7 py-3.5",
                      "text-[13px]",
                      "font-extrabold",
                      "text-white",
                      "shadow-[0_16px_38px_rgba(3,50,107,0.22)]",
                      "transition duration-200",
                      "hover:-translate-y-1",
                      "hover:bg-[#022858]",
                    ].join(" ")}
                  >
                    Start your project

                    <SiteIcon
                      name="arrow"
                      size={15}
                      strokeWidth={2.2}
                    />
                  </Link>


                  <Link
                    to="/products"
                    className={[
                      "inline-flex min-h-14",
                      "items-center justify-center",
                      "rounded-full",
                      "border-2 border-[#03326b]/20",
                      "bg-white/18",
                      "px-7 py-3.5",
                      "text-[13px]",
                      "font-extrabold",
                      "text-[#03326b]",
                      "backdrop-blur-sm",
                      "transition duration-200",
                      "hover:-translate-y-1",
                      "hover:border-[#03326b]/45",
                      "hover:bg-white/30",
                    ].join(" ")}
                  >
                    View products
                  </Link>

                </div>


                {/* MINI META */}

                <div
                  className={[
                    "mx-auto mt-10",
                    "grid max-w-[680px]",
                    "grid-cols-3",
                    "overflow-hidden",
                    "rounded-[22px]",
                    "border border-[#03326b]/12",
                    "bg-white/12",
                    "backdrop-blur-sm",
                  ].join(" ")}
                >

                  <div className="px-3 py-4 sm:px-5">

                    <strong className="block text-[14px] font-extrabold text-[#03326b] sm:text-[16px]">
                      OEM
                    </strong>

                    <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.08em] text-[#03326b]/50">
                      Manufacturing
                    </span>

                  </div>


                  <div className="border-x border-[#03326b]/10 px-3 py-4 sm:px-5">

                    <strong className="block text-[14px] font-extrabold text-[#03326b] sm:text-[16px]">
                      ODM
                    </strong>

                    <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.08em] text-[#03326b]/50">
                      Development
                    </span>

                  </div>


                  <div className="px-3 py-4 sm:px-5">

                    <strong className="block text-[14px] font-extrabold text-[#03326b] sm:text-[16px]">
                      50 units
                    </strong>

                    <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.08em] text-[#03326b]/50">
                      Private Label
                    </span>

                  </div>

                </div>

              </div>

            </Reveal>

          </div>

        </section>


        {/* ==================================================
            THREE WAYS TO WORK
        ================================================== */}

        <OemModels />


        {/* ==================================================
            PROCESS
        ================================================== */}

        <OemProcess />


        {/* ==================================================
            CAPABILITIES
        ================================================== */}

        <OemCapabilities />


        {/* ==================================================
            FINAL CTA
        ================================================== */}

        <section className="bg-white pb-20 pt-2 sm:pb-24 lg:pb-28">

          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

            <Reveal variant="zoom">

              <div
                className={[
                  "relative overflow-hidden",
                  "rounded-[34px]",
                  "bg-[#ffa412]",
                  "px-6 py-11",
                  "text-center",
                  "shadow-[0_28px_70px_rgba(255,164,18,0.18)]",
                  "sm:px-10 sm:py-14",
                ].join(" ")}
              >

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[50px] border-white/12"
                />


                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/10"
                />


                <div className="relative">

                  <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#03326b]/55">
                    Start Your Project
                  </p>


                  <h2
                    className={[
                      "mx-auto mt-3",
                      "max-w-[760px]",
                      "text-balance",
                      "text-[clamp(2rem,5vw,3.4rem)]",
                      "font-extrabold",
                      "leading-[0.98]",
                      "tracking-[-0.055em]",
                      "text-[#03326b]",
                    ].join(" ")}
                  >
                    Ready to bring your design to life?
                  </h2>


                  <p className="mx-auto mt-5 max-w-[620px] text-[14px] font-medium leading-7 text-[#03326b]/65 sm:text-[15px]">
                    Send us your sketches, samples or product
                    specifications. Our team will help define the
                    right OEM, ODM or private-label path.
                  </p>


                  <Link
                    to="/contact"
                    className={[
                      "mt-7",
                      "inline-flex min-h-14",
                      "items-center justify-center",
                      "gap-2",
                      "rounded-full",
                      "bg-[#03326b]",
                      "px-7 py-3.5",
                      "text-[13px]",
                      "font-extrabold",
                      "text-white",
                      "shadow-[0_16px_38px_rgba(3,50,107,0.22)]",
                      "transition duration-200",
                      "hover:-translate-y-1",
                      "hover:bg-[#022858]",
                    ].join(" ")}
                  >
                    Start your project

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

      </main>


      <Footer />

      <FloatingContactDock />

    </>
  );
}