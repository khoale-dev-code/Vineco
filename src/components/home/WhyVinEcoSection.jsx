import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";

const whyItems = [
  {
    number: "01",
    label: "Quality Control",
    title: "Uncompromised Quality.",
    description:
      "Strictly sorted natural hardwood, finely sanded with zero sharp edges. Kiln-dried, non-toxic, and meets rigorous international safety standards.",
    image: "/images/home/why/01-uncompromised-quality.png",
  },
  {
    number: "02",
    label: "OEM / ODM",
    title: "Flexible OEM/ODM Solutions.",
    description:
      "Custom laser logo engraving, eco-friendly Kraft packaging, fast 7-day sampling, and low MOQs starting at 50 units for seamless market testing.",
    image: "/images/home/why/02-flexible-oem-odm.png",
  },
  {
    number: "03",
    label: "Global Export",
    title: "Export-Ready & Full Support.",
    description:
      "Complete compliance docs (Phytosanitary, C/O, Fumigation, tE), direct Amazon FBA shipping.",
    image: "/images/home/why/03-export-ready.png",
  },
];

function WhyCard({ item, index }) {
  return (
    <Reveal
      variant="up"
      delay={index * 70}
      className="h-full"
    >
      <article
        className={[
          "group flex h-full min-w-0 flex-col overflow-hidden",
          "rounded-[24px] border border-[#F59E0B]/45",
          "bg-white",
          "transition-[transform,border-color,box-shadow] duration-300",
          "hover:-translate-y-1",
          "hover:border-[#F59E0B]",
          "hover:shadow-[0_20px_48px_rgba(30,42,36,0.08)]",
        ].join(" ")}
      >
        {/* IMAGE */}
        <div
          className={[
            "relative flex w-full items-center justify-center",
            "aspect-square",
            "overflow-hidden",
            "bg-[#F4F1EA]",
          ].join(" ")}
        >
          <SmartImage
            src={item.image}
            alt={item.title}
            className="block h-full w-full object-cover object-center"
          />

          <span
            className={[
              "absolute left-3 top-3 z-10",
              "rounded-full bg-[#0F2F24]",
              "px-3 py-1.5",
              "text-[8px] font-extrabold",
              "uppercase tracking-[0.12em]",
              "text-white",
              "shadow-[0_6px_18px_rgba(15,47,36,0.16)]",
              "sm:left-4 sm:top-4",
            ].join(" ")}
          >
            {item.label}
          </span>
        </div>

        {/* CONTENT */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <span
            className={[
              "text-[9px] font-extrabold",
              "uppercase tracking-[0.18em]",
              "text-[#F59E0B]",
            ].join(" ")}
          >
            {item.number}
          </span>

          <h3
            className={[
              "mt-3",
              "text-[21px] font-extrabold",
              "leading-[1.08]",
              "tracking-[-0.04em]",
              "text-[#1E2A24]",
              "sm:text-[23px]",
              "lg:text-[24px]",
            ].join(" ")}
          >
            {item.title}
          </h3>

          <p
            className={[
              "mt-4",
              "text-[13px] font-medium",
              "leading-6 text-[#6A645D]",
              "sm:text-[14px] sm:leading-7",
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
      className="overflow-hidden bg-[#FAF8F5] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">

        {/* =================================================
            HEADING - THEO MẪU KHÁCH
        ================================================= */}

        <Reveal>
          <header className="mx-auto mb-8 max-w-[860px] text-center sm:mb-10">
            <h2
              className={[
                "m-0",
                "text-[36px] font-black",
                "leading-[0.95]",
                "tracking-[-0.045em]",
                "text-[#F59E0B]",
                "sm:text-[44px]",
                "lg:text-[52px]",
              ].join(" ")}
            >
              WHY VINECO?
            </h2>

            <p
              className={[
                "mx-auto mt-4 max-w-[780px]",
                "text-[13px] font-bold",
                "leading-[1.65]",
                "text-[#1E2A24]",
                "sm:text-[15px]",
                "lg:text-[16px]",
              ].join(" ")}
            >
              VinEco isn’t just a factory — it’s your trusted partner for
              premium, natural coffee wood chews. We combine strict quality
              control, flexible manufacturing, and export-ready support to help
              global pet brands thrive.
            </p>
          </header>
        </Reveal>

        {/* =================================================
            CARDS
        ================================================= */}

        <div
          className={[
            "grid grid-cols-1 gap-4",
            "md:grid-cols-2",
            "xl:grid-cols-3",
          ].join(" ")}
        >
          {whyItems.map((item, index) => (
            <WhyCard
              key={item.number}
              item={item}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}