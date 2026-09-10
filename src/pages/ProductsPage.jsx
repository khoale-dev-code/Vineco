import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import Reveal from "../components/ui/Reveal";
import SmartImage from "../components/ui/SmartImage";
import SiteIcon from "../components/ui/SiteIcon";

import { productCatalog } from "../data/productCatalog";


/* ==========================================================
   SMALL UI
========================================================== */

function Eyebrow({
  children,
  light = false,
}) {
  return (
    <p
      className={[
        "text-[11px] font-black uppercase tracking-[0.16em]",
        "sm:text-[12px]",
        light
          ? "text-[#F59E0B]"
          : "text-[#D97706]",
      ].join(" ")}
    >
      {children}
    </p>
  );
}


function ArrowLink({
  to,
  children,
  light = false,
}) {
  return (
    <Link
      to={to}
      className={[
        "group inline-flex items-center gap-2",
        "text-[14px] font-extrabold",
        "transition-colors duration-200",
        "sm:text-[15px]",

        light
          ? "text-white hover:text-[#F59E0B]"
          : "text-[#0F2F24] hover:text-[#D97706]",
      ].join(" ")}
    >
      <span>{children}</span>

      <span
        className="
          transition-transform
          duration-200
          group-hover:translate-x-1
        "
      >
        <SiteIcon
          name="arrow"
          size={15}
        />
      </span>
    </Link>
  );
}


/* ==========================================================
   PRODUCT IMAGE
========================================================== */

function ProductVisual({
  src,
  alt,
  contain = true,
  eager = false,
  className = "",
}) {
  return (
    <SmartImage
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      className={[
        "block h-full w-full",

        contain
          ? "object-contain"
          : "object-cover object-center",

        className,
      ].join(" ")}
    />
  );
}


/* ==========================================================
   FEATURED PRODUCT
========================================================== */

function getCollectionCardImageConfig(
  product,
) {
  switch (product.slug) {
    case "coffee-wood-gorilla-chew":
      return {
        aspectClass:
          "aspect-[4/3]",
        contain: false,
        imageClass:
          "object-center",
      };

    case "natural-coffee-wood-chew-with-rope":
      return {
        aspectClass:
          "aspect-[4/3]",
        contain: false,
        imageClass:
          "object-center",
      };

    default:
      return {
        aspectClass:
          "aspect-[4/3]",
        contain: false,
        imageClass:
          "object-center",
      };
  }
}


/* ==========================================================
   PRODUCT COLLECTION CARD
========================================================== */

function ProductCollectionCard({
  product,
  delay = 0,
}) {
  const imageConfig =
    getCollectionCardImageConfig(product);

  return (
    <Reveal
      variant="up"
      delay={delay}
      className="h-full"
    >
      <Link
        to={`/products/${product.slug}`}
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden

          rounded-[22px]
          border
          border-[#1E2A24]/10

          bg-[#F4F1EA]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#F59E0B]/60
          hover:shadow-[0_20px_52px_rgba(30,42,36,0.09)]

          sm:rounded-[26px]
          lg:min-h-[560px]
        "
      >
        {/* IMAGE */}
        <div
          className={[
            "relative overflow-hidden bg-[#F4F1EA]",
            imageConfig.aspectClass,
          ].join(" ")}
        >
          <ProductVisual
            src={product.image}
            alt={product.name}
            contain={imageConfig.contain}
            eager={delay === 0}
            className={imageConfig.imageClass}
          />
        </div>


        {/* CONTENT */}
        <div
          className="
            grid
            flex-1
            grid-rows-[auto_auto_1fr_auto]

            px-5
            pb-6
            pt-5

            sm:px-6
            sm:pb-7
            sm:pt-6
          "
        >
          <Eyebrow>
            {product.eyebrow}
          </Eyebrow>


          <h2
            className="
              mt-3

              text-[24px]
              font-extrabold
              leading-[0.98]
              tracking-[-0.04em]

              text-[#0F2F24]

              sm:text-[28px]
              lg:min-h-[62px]
              lg:text-[30px]
            "
          >
            {product.name}
          </h2>


          <p
            className="
              mt-4

              text-[15px]
              font-medium
              leading-7

              text-[#3D4A42]

              sm:text-[16px]
            "
          >
            {product.description}
          </p>


          <div className="pt-5">
            <ArrowLink
              to={`/products/${product.slug}`}
            >
              View product
            </ArrowLink>
          </div>

        </div>
      </Link>
    </Reveal>
  );
}


/* ==========================================================
   ROPE FEATURE CARD
========================================================== */

function RopeFeatureCard({
  variant,
  productSlug,
}) {
  return (
    <Reveal
      variant="up"
      className="h-full"
    >
      <Link
        to={`/products/${productSlug}`}
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden

          rounded-[24px]

          border
          border-[#1E2A24]/10

          bg-white

          shadow-[0_14px_40px_rgba(30,42,36,0.045)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#F59E0B]/60
          hover:shadow-[0_22px_54px_rgba(30,42,36,0.09)]

          sm:rounded-[28px]
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden

            bg-[#F4F1EA]

            sm:aspect-[16/11]

            lg:aspect-auto
            lg:min-h-[460px]
            lg:flex-1
          "
        >
          <ProductVisual
            src={variant.image}
            alt={variant.name}
            contain
            className="
              p-5
              sm:p-7
              lg:p-9
            "
          />


          <span
            className="
              absolute
              left-4
              top-4

              flex
              h-9
              w-9
              items-center
              justify-center

              rounded-full

              bg-[#0F2F24]

              text-[10px]
              font-extrabold
              text-white

              sm:left-5
              sm:top-5
              sm:h-10
              sm:w-10
            "
          >
            {variant.number}
          </span>
        </div>


        {/* COPY */}
        <div
          className="
            p-5

            sm:p-7
            lg:p-8
          "
        >
          <Eyebrow>
            Featured Rope Design
          </Eyebrow>


          <h3
            className="
              mt-3
              max-w-[560px]

              text-[25px]
              font-extrabold
              leading-[1]
              tracking-[-0.04em]

              text-[#0F2F24]

              sm:text-[30px]
              lg:text-[33px]
            "
          >
            {variant.name}
          </h3>


          <p
            className="
              mt-4
              max-w-[600px]

              text-[15px]
              font-medium
              leading-7

              text-[#3D4A42]

              sm:text-[16px]
            "
          >
            <strong
              className="
                font-extrabold
                text-[#0F2F24]
              "
            >
              Design:
            </strong>{" "}

            {variant.design ||
              variant.description}
          </p>


          <span
            className="
              mt-6
              inline-flex
              items-center
              gap-2

              text-[14px]
              font-extrabold

              text-[#D97706]

              sm:text-[15px]
            "
          >
            View product

            <SiteIcon
              name="arrow"
              size={15}
            />
          </span>
        </div>
      </Link>
    </Reveal>
  );
}


/* ==========================================================
   ROPE SMALL CARD
========================================================== */

function RopeSmallCard({
  variant,
  index,
  productSlug,
}) {
  return (
    <Reveal
      variant="up"
      delay={index * 60}
      className="h-full"
    >
      <Link
        to={`/products/${productSlug}`}
        className="
          group
          flex
          h-full
          flex-col
          overflow-hidden

          rounded-[20px]

          border
          border-[#1E2A24]/10

          bg-white

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-[#F59E0B]/60
          hover:shadow-[0_18px_42px_rgba(30,42,36,0.08)]

          sm:rounded-[22px]
        "
      >
        {/* IMAGE */}
        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden
            bg-[#F4F1EA]
          "
        >
          <ProductVisual
            src={variant.image}
            alt={variant.name}
            contain
            className="p-4 sm:p-5"
          />


          <span
            className="
              absolute
              right-3
              top-3

              flex
              h-8
              min-w-8
              items-center
              justify-center

              rounded-full

              bg-white

              px-2

              text-[10px]
              font-extrabold
              text-[#D97706]

              shadow-sm

              sm:right-4
              sm:top-4
            "
          >
            {variant.number}
          </span>
        </div>


        {/* CONTENT */}
        <div
          className="
            flex
            flex-1
            flex-col

            p-4

            sm:p-5
          "
        >
          <Eyebrow>
            Coffee Wood + Rope
          </Eyebrow>


          <h3
            className="
              mt-2

              text-[17px]
              font-extrabold
              leading-[1.07]
              tracking-[-0.03em]

              text-[#0F2F24]

              sm:text-[18px]
              xl:text-[19px]
            "
          >
            {variant.name}
          </h3>


          <p
            className="
              mt-3

              text-[13px]
              font-medium
              leading-[1.65]

              text-[#3D4A42]

              sm:text-[14px]
            "
          >
            {variant.design ||
              variant.description}
          </p>


          <span
            className="
              mt-auto
              pt-5

              text-[12px]
              font-extrabold

              text-[#D97706]
            "
          >
            Explore →
          </span>
        </div>
      </Link>
    </Reveal>
  );
}


/* ==========================================================
   PAGE
========================================================== */

export default function ProductsPage() {
  const collectionProducts =
    productCatalog.slice(0, 3);

  const ropeProduct =
    productCatalog.find(
      (product) =>
        product.slug ===
        "natural-coffee-wood-chew-with-rope",
    );


  return (
    <>
      <Header />

      <main
        className="
          overflow-hidden
          bg-[#FAF8F5]
        "
      >

        {/* ==================================================
            HERO
        ================================================== */}

        <section
          className="
            pt-7

            sm:pt-10

            lg:pt-14
          "
        >
          <div
            className="
              mx-auto
              max-w-[1280px]

              px-4

              sm:px-6

              lg:px-8
            "
          >
            <div
              className="
                grid
                gap-7

                border-b
                border-[#1E2A24]/10

                pb-9

                sm:gap-8
                sm:pb-11

                lg:grid-cols-[1.1fr_.9fr]
                lg:items-end
                lg:gap-14
                lg:pb-14
              "
            >

              {/* HERO TITLE */}
              <Reveal variant="left">
                <div>

                  <Eyebrow>
                    VinEco / Product Collection
                  </Eyebrow>


                  <h1
                    className="
                      mt-4
                      max-w-[820px]

                      text-[44px]
                      font-extrabold
                      leading-[0.9]
                      tracking-[-0.06em]

                      text-[#0F2F24]

                      sm:text-[64px]

                      lg:text-[78px]

                      xl:text-[88px]
                    "
                  >
                    Natural coffee wood

                    <span
                      className="
                        block
                        text-[#F59E0B]
                      "
                    >
                      made for pets.
                    </span>
                  </h1>

                </div>
              </Reveal>


              {/* HERO DESCRIPTION */}
              <Reveal
                variant="right"
                delay={80}
              >
                <div className="lg:pb-1">

                  <p
                    className="
                      max-w-[530px]

                      text-[16px]
                      font-medium
                      leading-8

                      text-[#3D4A42]

                      sm:text-[17px]
                    "
                  >
                    Coffee wood chews and natural
                    rope products developed for
                    distributors, global pet brands,
                    OEM / ODM and private-label
                    collections.
                  </p>


                  <div
                    className="
                      mt-5
                      flex
                      flex-wrap
                      gap-2
                    "
                  >
                    {[
                      "Natural Coffee Wood",
                      "OEM / ODM",
                      "Private Label",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                          rounded-full

                          border
                          border-[#1E2A24]/10

                          bg-white

                          px-3.5
                          py-2

                          text-[10px]
                          font-extrabold
                          uppercase
                          tracking-[0.08em]

                          text-[#1E2A24]

                          sm:text-[11px]
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>
              </Reveal>

            </div>
          </div>
        </section>


        {/* ==================================================
            CORE PRODUCTS
        ================================================== */}

        <section
          className="
            py-10

            sm:py-14

            lg:py-20
          "
        >
          <div
            className="
              mx-auto
              max-w-[1280px]

              px-4

              sm:px-6

              lg:px-8
            "
          >

            <Reveal>
              <div
                className="
                  mb-7

                  sm:mb-9
                "
              >
                <Eyebrow>
                  03 Core Product Families
                </Eyebrow>

                <h2
                  className="
                    mt-2

                    max-w-[720px]

                    text-[28px]
                    font-extrabold
                    leading-[1]
                    tracking-[-0.04em]

                    text-[#0F2F24]

                    sm:text-[34px]

                    lg:text-[38px]
                  "
                >
                  Choose the right product direction.
                </h2>
              </div>
            </Reveal>


            <div
              className="
                grid
                gap-4

                md:grid-cols-2

                lg:grid-cols-[repeat(3,minmax(0,1fr))]
                lg:gap-5
              "
            >
              {collectionProducts.map(
                (product, index) => (
                  <ProductCollectionCard
                    key={product.slug}
                    product={product}
                    delay={index * 70}
                  />
                ),
              )}
            </div>

          </div>
        </section>


        {/* VINECO PRODUCTS REMOVE LEGACY SECTIONS V1 */}

        <section
          className="
            pb-14

            sm:pb-20

            lg:pb-24
          "
        >
          <div
            className="
              mx-auto
              max-w-[1180px]

              px-4

              sm:px-6
            "
          >

            <Reveal variant="zoom">

              <div
                className="
                  grid
                  gap-7
                  overflow-hidden

                  rounded-[24px]

                  bg-[#F59E0B]

                  px-6
                  py-8

                  sm:rounded-[28px]
                  sm:px-9
                  sm:py-10

                  lg:grid-cols-[1fr_auto]
                  lg:items-end
                  lg:px-12
                  lg:py-12
                "
              >

                <div>

                  <p
                    className="
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.18em]

                      text-[#0F2F24]/70
                    "
                  >
                    OEM / ODM / Private Label
                  </p>


                  <h2
                    className="
                      mt-3
                      max-w-[720px]

                      text-[31px]
                      font-extrabold
                      leading-[0.98]
                      tracking-[-0.05em]

                      text-[#0F2F24]

                      sm:text-[40px]

                      lg:text-[44px]
                    "
                  >
                    Turn a VinEco product
                    into your own branded
                    collection.
                  </h2>

                </div>


                <Link
                  to="/contact"
                  className="
                    inline-flex
                    min-h-[50px]
                    items-center
                    justify-center
                    gap-2

                    rounded-[14px]

                    bg-white

                    px-6

                    text-[13px]
                    font-extrabold

                    text-[#0F2F24]

                    transition

                    hover:-translate-y-0.5

                    sm:px-7
                    sm:text-[14px]
                  "
                >
                  Start a project

                  <SiteIcon
                    name="arrow"
                    size={16}
                  />
                </Link>

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