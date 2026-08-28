import {
  useEffect,
  useRef,
  useState,
} from "react";

import Reveal from "../ui/Reveal";
import SiteIcon from "../ui/SiteIcon";

import {
  oemOdmContent,
} from "../../data/oemOdmContent";


function clamp(
  value,
  min = 0,
  max = 1,
) {
  return Math.min(
    Math.max(value, min),
    max,
  );
}


function SectionLabel({
  children,
}) {
  return (
    <div className="flex items-center justify-center gap-3">

      <span className="h-px w-9 bg-[#F59E0B]/70" />

      <p
        className={[
          "text-[10px]",
          "font-extrabold uppercase",
          "tracking-[0.28em]",
          "text-[#D97706]",
          "sm:text-[11px]",
        ].join(" ")}
      >
        {children}
      </p>

      <span className="h-px w-9 bg-[#F59E0B]/70" />

    </div>
  );
}


export default function OemProcess() {
  const sectionRef =
    useRef(null);

  const frameRef =
    useRef(null);

  const [
    scrollProgress,
    setScrollProgress,
  ] = useState(0);


  /*
   * Scroll-driven animation.
   *
   * Progress begins when the section enters
   * roughly 74% of the viewport.
   *
   * Progress completes when the timeline
   * travels through the visible viewport.
   */
  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return undefined;
    }


    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );


    if (reducedMotion.matches) {
      setScrollProgress(1);
      return undefined;
    }


    const updateProgress = () => {
      frameRef.current = null;

      const rect =
        section.getBoundingClientRect();

      const viewportHeight =
        window.innerHeight ||
        document.documentElement.clientHeight;


      /*
       * Animation starts before the section reaches
       * the middle of the screen.
       */
      const startPoint =
        viewportHeight * 0.74;


      /*
       * Available distance for the progress animation.
       */
      const animationDistance =
        Math.max(
          rect.height -
            viewportHeight * 0.22,
          viewportHeight * 0.85,
        );


      const rawProgress =
        (
          startPoint -
          rect.top
        ) /
        animationDistance;


      setScrollProgress(
        clamp(rawProgress),
      );
    };


    const requestUpdate = () => {
      if (frameRef.current) {
        return;
      }

      frameRef.current =
        window.requestAnimationFrame(
          updateProgress,
        );
    };


    updateProgress();


    window.addEventListener(
      "scroll",
      requestUpdate,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      requestUpdate,
    );


    return () => {
      window.removeEventListener(
        "scroll",
        requestUpdate,
      );

      window.removeEventListener(
        "resize",
        requestUpdate,
      );

      if (frameRef.current) {
        window.cancelAnimationFrame(
          frameRef.current,
        );
      }
    };
  }, []);


  return (
    <section
      ref={sectionRef}
      id="oem-process"
      className={[
        "relative overflow-hidden",
        "bg-[#FAF8F5]",
        "py-20",
        "sm:py-24",
        "lg:py-28",
      ].join(" ")}
    >

      {/* ==================================================
          BACKGROUND DECOR
      ================================================== */}

      <div
        aria-hidden="true"
        className={[
          "pointer-events-none",
          "absolute",
          "-left-32 top-[22%]",
          "h-[420px] w-[420px]",
          "rounded-full",
          "bg-[#F59E0B]/8",
          "blur-[90px]",
        ].join(" ")}
      />


      <div
        aria-hidden="true"
        className={[
          "pointer-events-none",
          "absolute",
          "-right-36 bottom-[12%]",
          "h-[460px] w-[460px]",
          "rounded-full",
          "bg-[#1E2A24]/5",
          "blur-[100px]",
        ].join(" ")}
      />


      <div
        className={[
          "relative",
          "mx-auto",
          "max-w-[1080px]",
          "px-4",
          "sm:px-6",
          "lg:px-8",
        ].join(" ")}
      >


        {/* ==================================================
            HEADING
        ================================================== */}

        <Reveal>

          <header
            className={[
              "mx-auto",
              "max-w-[820px]",
              "text-center",
            ].join(" ")}
          >

            <SectionLabel>
              How It Works
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
              From idea to delivery
              <span className="text-[#F59E0B]">
                {" "}in 5 steps
              </span>
            </h2>


            <p
              className={[
                "mx-auto mt-5",
                "max-w-[690px]",
                "text-pretty",
                "text-[15px]",
                "leading-7",
                "text-[#1E2A24]/55",
                "sm:text-[17px]",
                "sm:leading-8",
              ].join(" ")}
            >
              A clear, streamlined process.
              You always know what happens next.
            </p>


            {/* SCROLL INDICATOR */}

            <div
              className={[
                "mx-auto mt-7",
                "flex w-max",
                "items-center gap-2",
                "rounded-full",
                "border border-[#F59E0B]/20",
                "bg-white/70",
                "px-3 py-2",
                "text-[9px]",
                "font-extrabold uppercase",
                "tracking-[0.16em]",
                "text-[#1E2A24]/40",
                "shadow-[0_8px_25px_rgba(30,42,36,.035)]",
              ].join(" ")}
            >
              <span
                className={[
                  "relative",
                  "h-4 w-[9px]",
                  "rounded-full",
                  "border border-[#F59E0B]",
                ].join(" ")}
              >
                <span
                  className={[
                    "absolute",
                    "left-1/2 top-[3px]",
                    "h-[3px] w-[3px]",
                    "-translate-x-1/2",
                    "rounded-full",
                    "bg-[#F59E0B]",
                    "animate-bounce",
                  ].join(" ")}
                />
              </span>

              Scroll to explore

            </div>

          </header>

        </Reveal>


        {/* ==================================================
            TIMELINE
        ================================================== */}

        <div
          className={[
            "relative",
            "mt-14",
            "sm:mt-16",
            "lg:mt-20",
          ].join(" ")}
        >


          {/* -----------------------------------------------
              STATIC BACKGROUND LINE
          ------------------------------------------------ */}

          <div
            aria-hidden="true"
            className={[
              "absolute",
              "bottom-7",
              "left-[27px]",
              "top-7",
              "w-[2px]",
              "overflow-hidden",
              "rounded-full",
              "bg-[#F59E0B]/15",
              "lg:left-1/2",
              "lg:-translate-x-1/2",
            ].join(" ")}
          >


            {/* ACTIVE PROGRESS LINE */}

            <div
              className={[
                "absolute inset-x-0 top-0",
                "h-full",
                "origin-top",
                "rounded-full",
                "bg-gradient-to-b",
                "from-[#ffc35c]",
                "via-[#F59E0B]",
                "to-[#D97706]",
                "shadow-[0_0_15px_rgba(245,158,11,.35)]",
              ].join(" ")}
              style={{
                transform:
                  `scaleY(${scrollProgress})`,
              }}
            />

          </div>


          {/* -----------------------------------------------
              TIMELINE ITEMS
          ------------------------------------------------ */}

          <div className="space-y-8 lg:space-y-12">

            {oemOdmContent.process.map(
              (
                item,
                index,
              ) => {

                const isRight =
                  index % 2 === 1;


                /*
                 * Each step receives its own local
                 * progress between 0 and 1.
                 *
                 * This creates the sequential effect:
                 * 01 -> 02 -> 03 -> 04 -> 05.
                 */
                const totalSteps =
                  oemOdmContent.process.length;


                const stepWindow =
                  1 / totalSteps;


                const stepStart =
                  index * stepWindow;


                const stepProgress =
                  clamp(
                    (
                      scrollProgress -
                      stepStart
                    ) /
                    (
                      stepWindow *
                      0.72
                    ),
                  );


                /*
                 * Node activates slightly earlier
                 * than the card completes.
                 */
                const nodeProgress =
                  clamp(
                    stepProgress * 1.35,
                  );


                /*
                 * Small movement range.
                 */
                const horizontalOffset =
                  (1 - stepProgress) *
                  42;


                const verticalOffset =
                  (1 - stepProgress) *
                  18;


                return (
                  <div
                    key={item.number}
                    className={[
                      "relative",
                      "grid",
                      "grid-cols-[56px_minmax(0,1fr)]",
                      "items-center",
                      "gap-3",
                      "lg:grid-cols-[minmax(0,1fr)_88px_minmax(0,1fr)]",
                      "lg:gap-5",
                    ].join(" ")}
                  >


                    {/* =======================================
                        CARD
                    ======================================== */}

                    <article
                      className={[
                        "col-start-2",
                        "row-start-1",
                        "rounded-[24px]",
                        "border",
                        "bg-white",
                        "px-5 py-5",
                        "will-change-transform",
                        "sm:px-6",
                        "sm:py-6",
                        isRight
                          ? "lg:col-start-3"
                          : "lg:col-start-1",
                      ].join(" ")}
                      style={{
                        opacity:
                          0.18 +
                          stepProgress * 0.82,

                        transform: `
                          translate3d(
                            ${
                              isRight
                                ? horizontalOffset
                                : -horizontalOffset
                            }px,
                            ${verticalOffset}px,
                            0
                          )
                          scale(${
                            0.965 +
                            stepProgress *
                              0.035
                          })
                        `,

                        borderColor:
                          stepProgress > 0.75
                            ? "rgba(245,158,11,.48)"
                            : "rgba(30,42,36,.09)",

                        boxShadow:
                          stepProgress > 0.7
                            ? "0 20px 48px rgba(245,158,11,.10)"
                            : "0 12px 32px rgba(30,42,36,.04)",
                      }}
                    >


                      {/* STEP */}

                      <div className="flex items-center justify-between gap-4">

                        <p
                          className={[
                            "text-[10px]",
                            "font-extrabold uppercase",
                            "tracking-[0.13em]",
                            "text-[#D97706]",
                          ].join(" ")}
                        >
                          {item.eyebrow}
                        </p>


                        <span
                          className={[
                            "text-[10px]",
                            "font-extrabold",
                            "tracking-[0.12em]",
                            "text-[#1E2A24]/18",
                          ].join(" ")}
                        >
                          {item.number}
                        </span>

                      </div>


                      {/* TITLE */}

                      <h3
                        className={[
                          "mt-1.5",
                          "text-[18px]",
                          "font-extrabold",
                          "leading-tight",
                          "tracking-[-0.035em]",
                          "text-[#1E2A24]",
                          "sm:text-[20px]",
                        ].join(" ")}
                      >
                        {item.title}
                      </h3>


                      {/* DESCRIPTION */}

                      <p
                        className={[
                          "mt-2",
                          "max-w-[430px]",
                          "text-[12px]",
                          "leading-6",
                          "text-[#1E2A24]/55",
                          "sm:text-[13px]",
                        ].join(" ")}
                      >
                        {item.text}
                      </p>


                      {/* ACTIVE BOTTOM LINE */}

                      <div
                        aria-hidden="true"
                        className={[
                          "mt-5",
                          "h-[2px]",
                          "overflow-hidden",
                          "rounded-full",
                          "bg-[#F59E0B]/10",
                        ].join(" ")}
                      >

                        <div
                          className={[
                            "h-full",
                            "origin-left",
                            "rounded-full",
                            "bg-[#F59E0B]",
                          ].join(" ")}
                          style={{
                            transform:
                              `scaleX(${stepProgress})`,
                          }}
                        />

                      </div>

                    </article>


                    {/* =======================================
                        TIMELINE NODE
                    ======================================== */}

                    <div
                      className={[
                        "relative z-10",
                        "col-start-1",
                        "row-start-1",
                        "mx-auto",
                        "flex h-14 w-14",
                        "items-center justify-center",
                        "rounded-full",
                        "border-[5px]",
                        "border-[#FAF8F5]",
                        "will-change-transform",
                        "lg:col-start-2",
                        "lg:h-16 lg:w-16",
                      ].join(" ")}
                      style={{
                        opacity:
                          0.35 +
                          nodeProgress *
                            0.65,

                        transform:
                          `scale(${
                            0.72 +
                            nodeProgress *
                              0.28
                          })`,

                        backgroundColor:
                          nodeProgress > 0.2
                            ? "#F59E0B"
                            : "#ffffff",

                        color:
                          nodeProgress > 0.2
                            ? "#1E2A24"
                            : "rgba(30,42,36,.28)",

                        boxShadow:
                          nodeProgress > 0.7
                            ? "0 12px 32px rgba(245,158,11,.30)"
                            : "0 8px 22px rgba(30,42,36,.06)",
                      }}
                    >


                      {/* NODE RING */}

                      <span
                        aria-hidden="true"
                        className={[
                          "absolute inset-0",
                          "rounded-full",
                          "border border-[#F59E0B]",
                        ].join(" ")}
                        style={{
                          opacity:
                            nodeProgress *
                            0.48,

                          transform:
                            `scale(${
                              1 +
                              nodeProgress *
                                0.28
                            })`,
                        }}
                      />


                      <SiteIcon
                        name={item.icon}
                        size={22}
                        strokeWidth={2.15}
                      />

                    </div>

                  </div>
                );
              },
            )}

          </div>


          {/* =================================================
              END NODE
          ================================================== */}

          <div
            className={[
              "relative z-10",
              "mx-auto mt-10",
              "flex w-max",
              "items-center gap-3",
              "rounded-full",
              "border border-[#F59E0B]/20",
              "bg-white",
              "px-4 py-2.5",
              "shadow-[0_10px_28px_rgba(30,42,36,.05)]",
            ].join(" ")}
            style={{
              opacity:
                clamp(
                  (
                    scrollProgress -
                    0.88
                  ) /
                  0.12,
                ),

              transform:
                `translateY(${
                  (
                    1 -
                    clamp(
                      (
                        scrollProgress -
                        0.88
                      ) /
                      0.12,
                    )
                  ) *
                  15
                }px)`,
            }}
          >

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#F59E0B] text-[#1E2A24]">
              <SiteIcon
                name="check"
                size={14}
                strokeWidth={2.7}
              />
            </span>


            <span className="text-[10px] font-extrabold uppercase tracking-[0.13em] text-[#1E2A24]/60">
              Ready for your project
            </span>

          </div>

        </div>


        {/* ==================================================
            PROGRESS COUNTER
        ================================================== */}

        <div
          className={[
            "mx-auto mt-10",
            "max-w-[500px]",
          ].join(" ")}
        >

          <div className="flex items-center justify-between text-[9px] font-extrabold uppercase tracking-[0.13em] text-[#1E2A24]/35">

            <span>
              Process progress
            </span>

            <span>
              {
                Math.round(
                  scrollProgress *
                  100,
                )
              }%
            </span>

          </div>


          <div
            className={[
              "mt-2",
              "h-[4px]",
              "overflow-hidden",
              "rounded-full",
              "bg-[#F59E0B]/12",
            ].join(" ")}
          >

            <div
              className={[
                "h-full",
                "origin-left",
                "rounded-full",
                "bg-[#F59E0B]",
                "shadow-[0_0_12px_rgba(245,158,11,.35)]",
              ].join(" ")}
              style={{
                transform:
                  `scaleX(${scrollProgress})`,
              }}
            />

          </div>

        </div>

      </div>

    </section>
  );
}