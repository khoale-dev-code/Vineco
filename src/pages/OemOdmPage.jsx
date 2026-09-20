import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Reveal from "../components/ui/Reveal";
import SiteIcon from "../components/ui/SiteIcon";

import OemModels from "../components/oem/OemModels";
import OemProcess from "../components/oem/OemProcess";
import OemCapabilities from "../components/oem/OemCapabilities";


import I18nScope from "../i18n/I18nScope";
export default function OemOdmPage() {
  return (
    <I18nScope namespaces={["oem","common","products"]}>
    <>

      <Header />


      {/* ==================================================
          SCOPED ANIMATION STYLES

          One orchestrated entrance for the hero (staggered,
          plays once on load) + a slow ambient drift on the
          decorative orbs. Hover states get a slightly longer,
          smoother easing curve instead of the default snap.
          Everything respects prefers-reduced-motion.
      ================================================== */}

      <style>{`
        @keyframes oemRise {
          from {
            opacity: 0;
            transform: translateY(16px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes oemDrift {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -14px, 0);
          }
        }

        @keyframes oemDriftSlow {
          0%, 100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, 12px, 0) scale(1.03);
          }
        }

        @keyframes oemSheen {
          from {
            transform: translateX(-120%) skewX(-12deg);
          }
          to {
            transform: translateX(220%) skewX(-12deg);
          }
        }

        .oem-hero-in {
          opacity: 0;
          animation: oemRise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .oem-hero-in--1 { animation-delay: 0.05s; }
        .oem-hero-in--2 { animation-delay: 0.15s; }
        .oem-hero-in--3 { animation-delay: 0.27s; }
        .oem-hero-in--4 { animation-delay: 0.39s; }
        .oem-hero-in--5 { animation-delay: 0.5s; }

        .oem-orb-a { animation: oemDrift 9s ease-in-out infinite; }
        .oem-orb-b { animation: oemDriftSlow 12s ease-in-out infinite; }

        .oem-cta-shine::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(
            100deg,
            transparent 0%,
            rgba(255, 255, 255, 0.35) 50%,
            transparent 100%
          );
          transform: translateX(-120%) skewX(-12deg);
          pointer-events: none;
        }

        .oem-cta-shine:hover::after {
          animation: oemSheen 0.9s ease forwards;
        }

        @media (prefers-reduced-motion: reduce) {
          .oem-hero-in,
          .oem-orb-a,
          .oem-orb-b {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .oem-cta-shine:hover::after {
            animation: none !important;
          }
        }
      `}</style>


      <main className="overflow-hidden bg-white">


        {/* ==================================================
            HERO
        ================================================== */}

        <section
          className={[
            "relative overflow-hidden",
            "bg-[#F59E0B]",
          ].join(" ")}
        >

          {/* AMBIENT LIGHT — replaces the old hairline divider,
              which was the source of the thin visible seam
              down the middle of the section */}

          <div
            aria-hidden="true"
            className={[
              "pointer-events-none",
              "absolute inset-0",
              "bg-[radial-gradient(circle_at_16%_12%,rgba(255,255,255,0.18),transparent_46%),radial-gradient(circle_at_86%_88%,rgba(255,255,255,0.14),transparent_52%)]",
            ].join(" ")}
          />


          {/* DECORATIVE ORBS — subtle continuous drift, disabled
              under prefers-reduced-motion */}

          <div
            aria-hidden="true"
            className={[
              "oem-orb-a",
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
              "oem-orb-b",
              "pointer-events-none",
              "absolute",
              "-bottom-44 -right-28",
              "h-[460px] w-[460px]",
              "rounded-full",
              "bg-white/10",
            ].join(" ")}
          />


          {/* soft fade into the section below, for a smoother
              handoff than a hard color cut */}

          <div
            aria-hidden="true"
            className={[
              "pointer-events-none",
              "absolute inset-x-0 bottom-0",
              "h-24",
              "bg-gradient-to-b from-transparent to-black/[0.05]",
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

            <div className="mx-auto max-w-[880px] text-center">


              {/* EYEBROW */}

              <div className="oem-hero-in oem-hero-in--1 flex items-center justify-center gap-3">

                <span className="h-px w-10 bg-[#1E2A24]/45" />

                <p className="text-[10px] font-extrabold uppercase tracking-[0.3em] text-[#1E2A24]/65 sm:text-[11px]">
                  OEM / ODM Services
                </p>

                <span className="h-px w-10 bg-[#1E2A24]/45" />

              </div>


              {/* TITLE */}

              <h1
                className={[
                  "oem-hero-in oem-hero-in--2",
                  "mt-5",
                  "text-balance",
                  "text-[clamp(3rem,7vw,5.8rem)]",
                  "font-extrabold",
                  "leading-[0.98]",
                  "tracking-[-0.07em]",
                  "text-[#1E2A24]",
                ].join(" ")}
              >
                Built your way,
                <span className="mt-2 block text-white">
                  made by VinEco.
                </span>
              </h1>


              {/* DESCRIPTION */}

              <p
                className={[
                  "oem-hero-in oem-hero-in--3",
                  "mx-auto mt-6",
                  "max-w-[720px]",
                  "text-pretty",
                  "text-[15px]",
                  "font-medium",
                  "leading-7",
                  "text-[#1E2A24]/70",
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

              <div className="oem-hero-in oem-hero-in--4 mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <Link
                  to="/contact"
                  className={[
                    "inline-flex min-h-14",
                    "items-center justify-center",
                    "gap-2",
                    "rounded-full",
                    "bg-[#0F2F24]",
                    "px-7 py-3.5",
                    "text-[13px]",
                    "font-extrabold",
                    "text-white",
                    "shadow-[0_16px_38px_rgba(30,42,36,0.22)]",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1 hover:scale-[1.02]",
                    "hover:bg-[#3D5245]",
                    "hover:shadow-[0_20px_44px_rgba(30,42,36,0.28)]",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-[#1E2A24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F59E0B]",
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
                    "border-2 border-[#1E2A24]/20",
                    "bg-white/18",
                    "px-7 py-3.5",
                    "text-[13px]",
                    "font-extrabold",
                    "text-[#1E2A24]",
                    "backdrop-blur-sm",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1 hover:scale-[1.02]",
                    "hover:border-[#1E2A24]/45",
                    "hover:bg-white/30",
                    "focus-visible:outline-none",
                    "focus-visible:ring-2 focus-visible:ring-[#1E2A24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F59E0B]",
                  ].join(" ")}
                >
                  View products
                </Link>

              </div>


              {/* MINI META */}

              <div
                className={[
                  "oem-hero-in oem-hero-in--5",
                  "mx-auto mt-10",
                  "grid max-w-[680px]",
                  "grid-cols-3",
                  "overflow-hidden",
                  "rounded-[22px]",
                  "border border-[#1E2A24]/12",
                  "bg-white/12",
                  "backdrop-blur-sm",
                ].join(" ")}
              >

                <div className="px-3 py-4 sm:px-5">

                  <strong className="block text-[14px] font-extrabold text-[#1E2A24] sm:text-[16px]">
                    OEM
                  </strong>

                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.08em] text-[#1E2A24]/50">
                    Manufacturing
                  </span>

                </div>


                <div className="border-x border-[#1E2A24]/10 px-3 py-4 sm:px-5">

                  <strong className="block text-[14px] font-extrabold text-[#1E2A24] sm:text-[16px]">
                    ODM
                  </strong>

                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.08em] text-[#1E2A24]/50">
                    Development
                  </span>

                </div>


                <div className="px-3 py-4 sm:px-5">

                  <strong className="block text-[14px] font-extrabold text-[#1E2A24] sm:text-[16px]">
                    50 units
                  </strong>

                  <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.08em] text-[#1E2A24]/50">
                    Private Label
                  </span>

                </div>

              </div>

            </div>

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
                  "oem-cta-shine",
                  "relative overflow-hidden",
                  "rounded-[34px]",
                  "bg-[#F59E0B]",
                  "px-6 py-11",
                  "text-center",
                  "shadow-[0_28px_70px_rgba(245,158,11,0.18)]",
                  "transition-shadow duration-500",
                  "hover:shadow-[0_32px_84px_rgba(245,158,11,0.26)]",
                  "sm:px-10 sm:py-14",
                ].join(" ")}
              >

                <div
                  aria-hidden="true"
                  className="oem-orb-a pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border-[50px] border-white/12"
                />


                <div
                  aria-hidden="true"
                  className="oem-orb-b pointer-events-none absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-white/10"
                />


                <div className="relative">

                  <p className="text-[9px] font-extrabold uppercase tracking-[0.25em] text-[#1E2A24]/55">
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
                      "text-[#1E2A24]",
                    ].join(" ")}
                  >
                    Ready to bring your design to life?
                  </h2>


                  <p className="mx-auto mt-5 max-w-[620px] text-[14px] font-medium leading-7 text-[#1E2A24]/65 sm:text-[15px]">
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
                      "bg-[#0F2F24]",
                      "px-7 py-3.5",
                      "text-[13px]",
                      "font-extrabold",
                      "text-white",
                      "shadow-[0_16px_38px_rgba(30,42,36,0.22)]",
                      "transition-all duration-300 ease-out",
                      "hover:-translate-y-1 hover:scale-[1.02]",
                      "hover:bg-[#3D5245]",
                      "hover:shadow-[0_20px_44px_rgba(30,42,36,0.28)]",
                      "focus-visible:outline-none",
                      "focus-visible:ring-2 focus-visible:ring-[#0F2F24] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F59E0B]",
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
    </>
    </I18nScope>
  );
}