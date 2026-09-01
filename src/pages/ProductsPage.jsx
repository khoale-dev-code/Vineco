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

function FeaturedProduct({
  product,
}) {
  return (
    <Reveal
      variant="left"
      className="h-full"
    >
      <Link
        to={`/products/${product.slug}`}
        className="
          group
          relative
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

          hover:border-[#F59E0B]/60
          hover:shadow-[0_22px_60px_rgba(30,42,36,0.09)]

          sm:rounded-[26px]
          lg:min-h-[650px]
        "
      >
        {/* NUMBER */}
        <span
          className="
            absolute
            left-4
            top-4
            z-20

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
          01
        </span>


        {/* IMAGE */}
        <div
          className="
            relative
            aspect-[4/3]
            overflow-hidden

            sm:aspect-[16/11]

            lg:aspect-auto
            lg:min-h-[390px]
            lg:flex-1
          "
        >
          <ProductVisual
            src={product.image}
            alt={product.name}
            contain={
              product.imageFit ===
              "contain"
            }
            eager
            className={
              product.imageFit ===
              "contain"
                ? "p-5 sm:p-7 lg:p-8"
                : ""
            }
          />

          <div
            aria-hidden="true"
            className="
              pointer-events-none
              absolute
              inset-x-0
              bottom-0
              h-24
              bg-gradient-to-t
              from-[#F4F1EA]
              to-transparent

              sm:h-32
            "
          />
        </div>


        {/* CONTENT */}
        <div
          className="
            relative
            z-10

            px-5
            pb-6

            sm:px-7
            sm:pb-8
          "
        >
          <Eyebrow>
            {product.eyebrow}
          </Eyebrow>


          <h2
            className="
              mt-2
              max-w-[620px]

              text-[27px]
              font-extrabold
              leading-[0.98]
              tracking-[-0.045em]

              text-[#0F2F24]

              sm:text-[34px]
              lg:text-[40px]
            "
          >
            {product.name}
          </h2>


          <p
            className="
              mt-4
              max-w-[620px]

              text-[15px]
              font-medium
              leading-7

              text-[#3D4A42]

              sm:text-[16px]
              sm:leading-8
            "
          >
            {product.description}
          </p>


          <div className="mt-5">
            <ArrowLink
              to={`/products/${product.slug}`}
            >
              Explore product
            </ArrowLink>
          </div>

        </div>
      </Link>
    </Reveal>
  );
}


/* ==========================================================
   SECONDARY PRODUCT
========================================================== */

function SecondaryProduct({
  product,
  number,
  delay,
}) {
  return (
    <Reveal
      variant="right"
      delay={delay}
      className="h-full"
    >
      <Link
        to={`/products/${product.slug}`}
        className="
          group
          grid
          h-full
          overflow-hidden

          rounded-[22px]

          border
          border-[#1E2A24]/10

          bg-white

          transition-all
          duration-300

          hover:border-[#F59E0B]/60
          hover:shadow-[0_18px_46px_rgba(30,42,36,0.08)]

          sm:grid-cols-[42%_1fr]

          lg:min-h-[315px]
        "
      >
        {/* IMAGE */}
        <div
          className="
            aspect-[16/10]
            overflow-hidden
            bg-[#F4F1EA]

            sm:aspect-auto
          "
        >
          <ProductVisual
            src={product.image}
            alt={product.name}
            contain
            className="p-4 sm:p-5"
          />
        </div>


        {/* COPY */}
        <div
          className="
            flex
            min-w-0
            flex-col

            p-5

            sm:p-6
          "
        >
          <div
            className="
              flex
              items-center
              justify-between
              gap-4
            "
          >
            <Eyebrow>
              {product.eyebrow}
            </Eyebrow>

            <span
              className="
                text-[11px]
                font-extrabold
                text-[#F59E0B]
              "
            >
              {number}
            </span>
          </div>


          <h2
            className="
              mt-3

              text-[21px]
              font-extrabold
              leading-[1.03]
              tracking-[-0.035em]

              text-[#0F2F24]

              lg:text-[24px]
            "
          >
            {product.name}
          </h2>


          <p
            className="
              mt-3

              text-[14px]
              font-medium
              leading-7

              text-[#3D4A42]

              sm:text-[15px]
            "
          >
            {product.description}
          </p>


          <div className="mt-auto pt-5">
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
  const featuredProduct =
    productCatalog[0];

  const secondaryProducts =
    productCatalog.slice(1, 3);

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

                lg:grid-cols-[1.08fr_.92fr]
                lg:gap-5
              "
            >

              {/* MAIN PRODUCT */}
              {featuredProduct && (
                <FeaturedProduct
                  product={featuredProduct}
                />
              )}


              {/* SECONDARY */}
              <div
                className="
                  grid
                  gap-4

                  md:grid-cols-2

                  lg:grid-cols-1
                  lg:grid-rows-2
                  lg:gap-5
                "
              >
                {secondaryProducts.map(
                  (product, index) => (
                    <SecondaryProduct
                      key={product.slug}
                      product={product}
                      number={`0${index + 2}`}
                      delay={
                        (index + 1) * 70
                      }
                    />
                  ),
                )}
              </div>

            </div>

          </div>
        </section>


        {/* ==================================================
            SIZE GUIDE
        ================================================== */}

        <section
          className="
            bg-[#0F2F24]

            py-12

            sm:py-16

            lg:py-20
          "
        >
          <div
            className="
              mx-auto
              grid
              max-w-[1180px]
              items-center
              gap-8

              px-4

              sm:px-6

              lg:grid-cols-[1.15fr_.85fr]
              lg:gap-14
              lg:px-8
            "
          >

            {/* IMAGE */}
            <Reveal variant="left">

              <div
                className="
                  overflow-hidden

                  rounded-[20px]

                  bg-white

                  p-2

                  sm:rounded-[26px]
                  sm:p-4
                "
              >
                <SmartImage
                  src="/images/products/02-size-guide.png"
                  alt="VinEco Coffee Wood Dog Chew size guide"
                  className="
                    block
                    h-auto
                    w-full
                    object-contain
                  "
                />
              </div>

            </Reveal>


            {/* COPY */}
            <Reveal
              variant="right"
              delay={80}
            >
              <div>

                <Eyebrow light>
                  Coffee Wood Size Guide
                </Eyebrow>


                <h2
                  className="
                    mt-3

                    text-[36px]
                    font-extrabold
                    leading-[0.96]
                    tracking-[-0.05em]

                    text-white

                    sm:text-[44px]

                    lg:text-[50px]
                  "
                >
                  One material.

                  <span
                    className="
                      block
                      text-[#F59E0B]
                    "
                  >
                    Multiple sizes.
                  </span>
                </h2>


                <p
                  className="
                    mt-5
                    max-w-[480px]

                    text-[15px]
                    font-medium
                    leading-7

                    text-white/80

                    sm:text-[16px]
                  "
                >
                  Choose coffee wood dimensions
                  according to dog size, body weight
                  and chewing preference—from XS
                  through larger formats.
                </p>


                <div className="mt-6">
                  <ArrowLink
                    to="/products/classic-natural-coffee-wood-chew"
                    light
                  >
                    View Classic Coffee Wood Chew
                  </ArrowLink>
                </div>

              </div>
            </Reveal>

          </div>
        </section>


        {/* ==================================================
            COFFEE WOOD + ROPE
        ================================================== */}

        {ropeProduct?.variants?.length > 0 && (
          <section
            className="
              bg-[#FAF8F5]

              py-14

              sm:py-16

              lg:py-24
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

              {/* ============================================
                  HEADING
              ============================================ */}

              <Reveal>

                <div
                  className="
                    grid
                    gap-6

                    border-b
                    border-[#1E2A24]/10

                    pb-8

                    lg:grid-cols-[1fr_.72fr]
                    lg:items-end
                    lg:gap-16
                    lg:pb-10
                  "
                >

                  <div>

                    <Eyebrow>
                      Coffee Wood + Rope
                    </Eyebrow>


                    <h2
                      className="
                        mt-3
                        max-w-[760px]

                        text-[38px]
                        font-extrabold
                        leading-[0.94]
                        tracking-[-0.055em]

                        text-[#0F2F24]

                        sm:text-[48px]

                        lg:text-[58px]

                        xl:text-[62px]
                      "
                    >
                      Five ways to

                      <span
                        className="
                          block
                          text-[#F59E0B]
                        "
                      >
                        tug, chew & play.
                      </span>
                    </h2>

                  </div>


                  <div className="lg:pb-1">

                    <p
                      className="
                        max-w-[500px]

                        text-[15px]
                        font-medium
                        leading-7

                        text-[#3D4A42]

                        sm:text-[16px]
                      "
                    >
                      Coffee wood blocks are combined
                      with natural Jute / Hemp rope
                      in multiple configurations for
                      interactive play, chewing and
                      tugging.
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
                        "Jute / Hemp Rope",
                        "5 Designs",
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
                            tracking-[0.09em]

                            text-[#1E2A24]

                            sm:text-[11px]
                          "
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                  </div>

                </div>

              </Reveal>


              {/* ============================================
                  ROPE PRODUCT COMPOSITION
              ============================================ */}

              <div
                className="
                  mt-8

                  grid
                  gap-4

                  lg:mt-10
                  lg:grid-cols-[1.03fr_.97fr]
                  lg:items-stretch
                  lg:gap-5
                "
              >

                {/* PRODUCT 01 FEATURED */}

                <RopeFeatureCard
                  variant={
                    ropeProduct.variants[0]
                  }
                  productSlug={
                    ropeProduct.slug
                  }
                />


                {/* PRODUCTS 02 → 05 */}

                <div
                  className="
                    grid
                    gap-4

                    sm:grid-cols-2

                    lg:grid-cols-2
                    lg:grid-rows-2
                    lg:gap-5
                  "
                >
                  {ropeProduct.variants
                    .slice(1)
                    .map(
                      (
                        variant,
                        index,
                      ) => (
                        <RopeSmallCard
                          key={
                            variant.id
                          }
                          variant={
                            variant
                          }
                          index={
                            index
                          }
                          productSlug={
                            ropeProduct.slug
                          }
                        />
                      ),
                    )}
                </div>

              </div>


              {/* ============================================
                  CUSTOM DEVELOPMENT
              ============================================ */}

              <Reveal
                variant="up"
                delay={160}
              >
                <div
                  className="
                    mt-5

                    flex
                    flex-col
                    gap-4

                    rounded-[20px]

                    border
                    border-[#1E2A24]/10

                    bg-[#F4F1EA]

                    px-5
                    py-5

                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:px-6
                  "
                >

                  <div>

                    <p
                      className="
                        text-[10px]
                        font-extrabold
                        uppercase
                        tracking-[0.16em]

                        text-[#D97706]

                        sm:text-[11px]
                      "
                    >
                      Custom Development
                    </p>


                    <p
                      className="
                        mt-1

                        max-w-[520px]

                        text-[14px]
                        font-bold
                        leading-6

                        text-[#0F2F24]

                        sm:text-[15px]
                      "
                    >
                      Need a custom rope
                      configuration for your brand?
                    </p>

                  </div>


                  <Link
                    to="/oem-odm"
                    className="
                      inline-flex
                      min-h-[44px]
                      shrink-0
                      items-center
                      justify-center
                      gap-2

                      rounded-[13px]

                      bg-[#0F2F24]

                      px-5

                      text-[13px]
                      font-extrabold

                      text-white

                      transition

                      hover:bg-[#2F4538]
                    "
                  >
                    Explore OEM / ODM

                    <SiteIcon
                      name="arrow"
                      size={14}
                    />
                  </Link>

                </div>
              </Reveal>

            </div>
          </section>
        )}


        {/* ==================================================
            FINAL CTA
        ================================================== */}

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