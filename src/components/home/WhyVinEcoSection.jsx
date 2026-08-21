import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";


const whyItems = [
  {
    key: "quality",
    title: "Quality You Can Feel.",
    description:
      "Trusted by Amazon, BestBuy, and international distributors for consistent quality and on-time delivery.",
    image:
      "https://w.ladicdn.com/s750x750/66a769a4327bf6001311a60a/coffee-chew-20251028134846-vzvbx.png",
  },
  {
    key: "oem",
    title: "OEM/ODM Made Simple.",
    description:
      "Customize your brand with low MOQ, fast sampling, and full packaging support — from logo to labeling.",
    image:
      "https://w.ladicdn.com/s750x750/66a769a4327bf6001311a60a/dog-20251029101156-pj6wp.png",
    featured: true,
  },
  {
    key: "natural",
    title: "Natural Quality.",
    description:
      "Made from 100% eco materials like coffee wood, loofah, and coco coir. Safe, durable, and export-ready.",
    image:
      "https://w.ladicdn.com/s650x650/66a769a4327bf6001311a60a/gog-2-20251029101643-n4zte.png",
  },
];


function WhyCard({
  item,
  index,
}) {
  return (
    <Reveal
      variant="up"
      delay={index * 90}
      className="h-full"
    >
      <article
        className={[
          "group relative mx-auto w-full",
          "pt-[105px]",
          "sm:pt-[120px]",
          "lg:pt-[105px]",
          item.featured
            ? "lg:-translate-y-[26px]"
            : "",
        ].join(" ")}
      >

        {/* PET / PRODUCT IMAGE */}
        <div
          className={[
            "pointer-events-none absolute",
            "left-1/2 top-0 z-20",
            "-translate-x-1/2",
            "flex items-end justify-center",
            "bg-transparent",
            "transition-transform duration-500 ease-out",
            "group-hover:-translate-x-1/2",
            "group-hover:-translate-y-2",

            item.key === "quality"
              ? "h-[265px] w-[108%] sm:h-[315px] lg:h-[335px] lg:w-[112%]"
              : "",

            item.key === "oem"
              ? "h-[275px] w-[108%] sm:h-[325px] lg:h-[350px] lg:w-[113%]"
              : "",

            item.key === "natural"
              ? "h-[265px] w-[105%] sm:h-[315px] lg:h-[340px] lg:w-[110%]"
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
              "group-hover:scale-[1.02]",
            ].join(" ")}
          />
        </div>


        {/* CARD */}
        <div
          className={[
            "relative flex flex-col",
            "min-h-[405px]",
            "overflow-hidden",
            "rounded-[24px]",
            "border-[2px]",
            "border-[#ff9800]",
            "bg-[#fbfbfd]",
            "px-[26px] pb-[27px]",
            "pt-[235px]",
            "sm:min-h-[440px]",
            "sm:px-[32px]",
            "sm:pb-[30px]",
            "sm:pt-[265px]",
            "lg:min-h-[435px]",
            "lg:px-[38px]",
            "lg:pb-[31px]",
            "lg:pt-[282px]",
          ].join(" ")}
        >

          <h3
            className={[
              "relative z-10",
              "m-0",
              "text-[25px]",
              "font-extrabold",
              "leading-[1.02]",
              "tracking-[-0.045em]",
              "text-[#ff9900]",
              "sm:text-[28px]",
              "lg:text-[31px]",
            ].join(" ")}
          >
            {item.title}
          </h3>


          <p
            className={[
              "relative z-10",
              "mt-[12px]",
              "m-0",
              "max-w-[430px]",
              "text-[16px]",
              "font-extrabold",
              "leading-[1.3]",
              "tracking-[-0.02em]",
              "text-[#03326b]",
              "sm:text-[17px]",
              "lg:text-[19px]",
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
      className={[
        "overflow-hidden",
        "bg-[#fff8ef]",
        "px-0",
        "py-16",
        "sm:py-20",
        "lg:pb-24",
        "lg:pt-32",
      ].join(" ")}
    >
      <div
        className={[
          "mx-auto",
          "w-full",
          "max-w-[1640px]",
          "px-4",
          "sm:px-6",
          "lg:px-8",
        ].join(" ")}
      >

        <div
          className={[
            "grid",
            "grid-cols-1",
            "gap-y-16",
            "sm:gap-y-20",
            "lg:grid-cols-3",
            "lg:items-stretch",
            "lg:gap-x-[30px]",
            "lg:gap-y-0",
          ].join(" ")}
        >
          {whyItems.map(
            (item, index) => (
              <WhyCard
                key={item.key}
                item={item}
                index={index}
              />
            ),
          )}
        </div>

      </div>
    </section>
  );
}
