import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";


const sectionContent = {
  title: "WHY VINECO?",
  description:
    "VinEco isn’t just a factory — it’s your trusted partner for premium, natural coffee wood chews. We combine strict quality control, flexible manufacturing, and export-ready support to help global pet brands thrive.",
};


const whyItems = [
  {
    key: "quality",
    title: "Uncompromised Quality.",
    description:
      "Strictly sorted natural hardwood, finely sanded with zero sharp edges. Kiln-dried, non-toxic, and meets rigorous international safety standards.",
    image:
      "https://w.ladicdn.com/s750x750/66a769a4327bf6001311a60a/coffee-chew-20251028134846-vzvbx.png",
  },

  {
    key: "oem",
    title: "Flexible OEM/ODM Solutions.",
    description:
      "Custom laser logo engraving, eco-friendly Kraft packaging, fast 7-day sampling, and low MOQs starting at 50 units for seamless market testing.",
    image:
      "https://w.ladicdn.com/s750x750/66a769a4327bf6001311a60a/dog-20251029101156-pj6wp.png",
    featured: true,
  },

  {
    key: "export",
    title: "Export-Ready & Full Support.",
    description:
      "Complete compliance docs (Phytosanitary, C/O, Fumigation, tE), direct Amazon FBA shipping.",
    image:
      "https://w.ladicdn.com/s650x650/66a769a4327bf6001311a60a/gog-2-20251029101643-n4zte.png",
  },
];


function WhyCard({ item, index }) {
  return (
    <Reveal
      variant="up"
      delay={index * 90}
      className="h-full"
    >
      <article
        className={[
          "group relative mx-auto w-full",
          "pt-[72px]",
          "sm:pt-[86px]",
          "lg:pt-[94px]",
          item.featured
            ? "lg:-translate-y-3"
            : "",
        ].join(" ")}
      >
        {/* FLOATING IMAGE */}
        <div
          className={[
            "pointer-events-none absolute",
            "left-1/2 top-0 z-20",
            "-translate-x-1/2",
            "flex items-end justify-center",
            "transition-transform duration-500",
            "ease-[cubic-bezier(.16,1,.3,1)]",
            "group-hover:-translate-x-1/2",
            "group-hover:-translate-y-1.5",

            item.key === "quality"
              ? "h-[180px] w-[90%] sm:h-[210px] lg:h-[225px]"
              : "",

            item.key === "oem"
              ? "h-[190px] w-[94%] sm:h-[220px] lg:h-[240px]"
              : "",

            item.key === "export"
              ? "h-[185px] w-[90%] sm:h-[215px] lg:h-[230px]"
              : "",
          ].join(" ")}
        >
          <SmartImage
            src={item.image}
            alt={item.title}
            className={[
              "h-full w-full",
              "object-contain object-bottom",
              "transition-transform duration-700",
              "ease-[cubic-bezier(.16,1,.3,1)]",
              "group-hover:scale-[1.015]",
            ].join(" ")}
          />
        </div>


        {/* CARD BODY */}
        <div
          className={[
            "relative flex h-full flex-col",
            "min-h-[330px]",
            "overflow-hidden",
            "rounded-[22px]",
            "border-[1.5px]",
            "border-[#F59E0B]",
            "bg-white",
            "px-5 pb-6",
            "pt-[175px]",

            "sm:min-h-[355px]",
            "sm:px-6",
            "sm:pb-7",
            "sm:pt-[195px]",

            "lg:min-h-[370px]",
            "lg:px-7",
            "lg:pb-7",
            "lg:pt-[205px]",

            "transition-all duration-300",
            "hover:-translate-y-1",
            "hover:shadow-[0_18px_44px_rgba(245,158,11,0.10)]",
          ].join(" ")}
        >
          <h3
            className={[
              "relative z-10",
              "m-0",
              "text-[21px]",
              "font-extrabold",
              "leading-[1.06]",
              "tracking-[-0.035em]",
              "text-[#F59E0B]",
              "sm:text-[23px]",
              "lg:text-[24px]",
            ].join(" ")}
          >
            {item.title}
          </h3>

          <p
            className={[
              "relative z-10",
              "m-0 mt-3",
              "text-[13px]",
              "font-semibold",
              "leading-[1.55]",
              "tracking-[-0.01em]",
              "text-[#1E2A24]",
              "sm:text-[14px]",
              "lg:text-[14px]",
            ].join(" ")}
          >
            {item.description}
          </p>
        </div>
      </article>
    </Reveal>
  );
}


export default function WhyVinEcoSection() {
  return (
    <section
      id="why-vineco"
      className="overflow-hidden bg-[#FAF8F5] py-14 sm:py-18 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            SECTION HEADER
        ================================================== */}

        <Reveal>
          <header className="mx-auto max-w-[820px] text-center">

            <h2
              className={[
                "m-0",
                "text-[34px]",
                "font-extrabold",
                "leading-none",
                "tracking-[-0.045em]",
                "text-[#F59E0B]",
                "sm:text-[42px]",
                "lg:text-[48px]",
              ].join(" ")}
            >
              {sectionContent.title}
            </h2>

            <p
              className={[
                "mx-auto mt-4",
                "max-w-[760px]",
                "text-[14px]",
                "font-semibold",
                "leading-[1.65]",
                "text-[#1E2A24]",
                "sm:text-[15px]",
                "lg:text-[16px]",
              ].join(" ")}
            >
              {sectionContent.description}
            </p>

          </header>
        </Reveal>


        {/* ==================================================
            CARDS
        ================================================== */}

        <div
          className={[
            "mt-10",
            "grid",
            "grid-cols-1",
            "gap-x-5",
            "gap-y-9",

            "sm:mt-12",
            "sm:gap-y-12",

            "md:grid-cols-2",

            "lg:mt-14",
            "lg:grid-cols-3",
            "lg:items-stretch",
            "lg:gap-x-5",
            "lg:gap-y-0",
          ].join(" ")}
        >
          {whyItems.map((item, index) => (
            <WhyCard
              key={item.key}
              item={item}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  );
}