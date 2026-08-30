import {
  useMemo,
  useState,
} from "react";

import {
  Link,
  useParams,
} from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import Reveal from "../components/ui/Reveal";
import SiteIcon from "../components/ui/SiteIcon";

import { productCatalog } from "../data/productCatalog";


/* ==========================================================
   IMAGE
========================================================== */

function ProductImage({
  src,
  alt,
  contain = true,
  eager = false,
  className = "",
}) {
  const [failed, setFailed] =
    useState(false);

  if (!src || failed) {
    return (
      <div className="flex h-full w-full items-center justify-center bg-[#F4F1EA] p-8 text-center">

        <div>
          <strong className="block text-2xl font-extrabold text-[#0F2F24]">
            VinEco
          </strong>

          <span className="mt-1 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#D97706]">
            Product Visual
          </span>
        </div>

      </div>
    );
  }


  return (
    <img
      src={src}
      alt={alt || ""}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
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
   TYPOGRAPHY
========================================================== */

function Kicker({
  children,
  light = false,
}) {
  return (
    <p
      className={[
        "text-[10px] font-extrabold uppercase tracking-[0.2em]",
        light
          ? "text-[#F59E0B]"
          : "text-[#D97706]",
      ].join(" ")}
    >
      {children}
    </p>
  );
}


/* ==========================================================
   BENEFIT
========================================================== */

function BenefitCard({
  item,
  index,
}) {
  return (
    <Reveal
      variant="up"
      delay={index * 70}
      className="h-full"
    >
      <article
        className="
          flex
          h-full
          flex-col
          rounded-[22px]
          border
          border-[#1E2A24]/10
          bg-white
          p-5

          sm:p-6
        "
      >
        <span
          className="
            flex
            h-9
            w-9
            items-center
            justify-center
            rounded-full
            bg-[#FFF1D2]
            text-[10px]
            font-extrabold
            text-[#D97706]
          "
        >
          {String(index + 1).padStart(2, "0")}
        </span>


        <h3
          className="
            mt-7
            text-[21px]
            font-extrabold
            leading-[1.05]
            tracking-[-0.03em]
            text-[#0F2F24]
          "
        >
          {item.title}
        </h3>


        <p
          className="
            mt-3
            text-[14px]
            font-medium
            leading-7
            text-[#5F625E]
          "
        >
          {item.text}
        </p>

      </article>
    </Reveal>
  );
}


/* ==========================================================
   GALLERY
========================================================== */

function ProductGallery({
  images,
}) {
  if (!images?.length) {
    return null;
  }

  return (
    <div
      className={[
        "grid gap-4",
        images.length > 1
          ? "lg:grid-cols-[1.05fr_.95fr]"
          : "mx-auto max-w-[760px]",
      ].join(" ")}
    >
      {images.map(
        (image, index) => (
          <Reveal
            key={`${image.src}-${index}`}
            variant="up"
            delay={index * 70}
            className="h-full"
          >
            <figure
              className="
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[24px]
                border
                border-[#1E2A24]/10
                bg-white
              "
            >
              <div
                className="
                  flex
                  min-h-[280px]
                  flex-1
                  items-center
                  justify-center
                  overflow-hidden
                  bg-[#F4F1EA]
                  p-3

                  sm:min-h-[360px]
                  sm:p-5
                "
              >
                <ProductImage
                  src={image.src}
                  alt={image.alt}
                  contain={image.contain}
                />
              </div>


              {image.label && (
                <figcaption
                  className="
                    border-t
                    border-[#1E2A24]/10
                    px-5
                    py-4
                    text-[11px]
                    font-bold
                    text-[#5F625E]
                  "
                >
                  {image.label}
                </figcaption>
              )}

            </figure>
          </Reveal>
        ),
      )}
    </div>
  );
}


/* ==========================================================
   ROPE DESIGN
========================================================== */

function RopeDesignCard({
  item,
  index,
}) {
  const wide =
    index === 4;

  return (
    <Reveal
      variant="up"
      delay={index * 55}
      className={[
        "h-full",
        wide
          ? "lg:col-span-2"
          : "",
      ].join(" ")}
    >
      <article
        className={[
          "group grid h-full overflow-hidden",
          "rounded-[24px]",
          "border border-[#1E2A24]/10",
          "bg-white",

          "transition-all duration-300",
          "hover:border-[#F59E0B]/60",
          "hover:shadow-[0_18px_46px_rgba(30,42,36,0.08)]",

          wide
            ? "lg:grid-cols-[340px_1fr]"
            : "sm:grid-cols-[210px_1fr]",
        ].join(" ")}
      >
        {/* IMAGE */}
        <div
          className="
            aspect-[4/3]
            overflow-hidden
            bg-[#F4F1EA]

            sm:aspect-auto
            sm:min-h-[280px]
          "
        >
          <ProductImage
            src={item.image}
            alt={item.name}
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
            justify-center
            p-5

            sm:p-6
          "
        >

          <div className="flex items-center gap-3">

            <span
              className="
                flex
                h-9
                w-9
                shrink-0
                items-center
                justify-center
                rounded-full
                bg-[#F59E0B]
                text-[10px]
                font-extrabold
                text-[#0F2F24]
              "
            >
              {item.number}
            </span>

            <Kicker>
              Coffee Wood + Rope
            </Kicker>

          </div>


          <h3
            className="
              mt-4
              text-[22px]
              font-extrabold
              leading-[1.05]
              tracking-[-0.035em]
              text-[#0F2F24]

              sm:text-[24px]
            "
          >
            {item.name}
          </h3>


          <p
            className="
              mt-4
              text-[13px]
              font-medium
              leading-6
              text-[#5F625E]

              sm:text-[14px]
            "
          >
            <strong className="font-extrabold text-[#0F2F24]">
              Design:
            </strong>{" "}

            {item.design ||
              item.description}
          </p>

        </div>

      </article>
    </Reveal>
  );
}


/* ==========================================================
   RELATED PRODUCT
========================================================== */

function RelatedProduct({
  item,
  index,
}) {
  return (
    <Reveal
      variant="up"
      delay={index * 70}
      className="h-full"
    >
      <Link
        to={`/products/${item.slug}`}
        className="
          group
          grid
          h-full
          overflow-hidden
          rounded-[24px]
          border
          border-white/10
          bg-white/[0.06]

          transition
          duration-300

          hover:border-[#F59E0B]/50

          sm:grid-cols-[190px_1fr]
        "
      >
        <div
          className="
            aspect-[4/3]
            overflow-hidden
            bg-white

            sm:aspect-auto
          "
        >
          <ProductImage
            src={item.image}
            alt={item.name}
            contain
            className="p-4"
          />
        </div>


        <div
          className="
            flex
            flex-col
            justify-center
            p-5
          "
        >
          <Kicker light>
            {item.eyebrow}
          </Kicker>


          <h3
            className="
              mt-2
              text-[20px]
              font-extrabold
              leading-[1.06]
              tracking-[-0.03em]
              text-white
            "
          >
            {item.name}
          </h3>


          <span
            className="
              mt-5
              inline-flex
              items-center
              gap-2
              text-[12px]
              font-extrabold
              text-[#F59E0B]
            "
          >
            View product

            <SiteIcon
              name="arrow"
              size={14}
            />
          </span>

        </div>
      </Link>
    </Reveal>
  );
}


/* ==========================================================
   PAGE
========================================================== */

export default function ProductDetailPage() {
  const { slug } =
    useParams();


  const product =
    useMemo(
      () =>
        productCatalog.find(
          (item) =>
            item.slug === slug,
        ),
      [slug],
    );


  if (!product) {
    return (
      <>
        <Header />

        <main
          className="
            flex
            min-h-[65vh]
            items-center
            justify-center
            bg-[#FAF8F5]
            px-4
            text-center
          "
        >
          <div>

            <Kicker>
              VinEco Products
            </Kicker>

            <h1
              className="
                mt-3
                text-4xl
                font-extrabold
                tracking-[-0.04em]
                text-[#0F2F24]
              "
            >
              Product not found
            </h1>


            <Link
              to="/products"
              className="
                mt-6
                inline-flex
                min-h-[48px]
                items-center
                rounded-[14px]
                bg-[#F59E0B]
                px-6
                text-sm
                font-extrabold
                text-[#0F2F24]
              "
            >
              View products
            </Link>

          </div>
        </main>

        <Footer />
      </>
    );
  }


  const related =
    productCatalog
      .filter(
        (item) =>
          item.slug !==
          product.slug,
      )
      .slice(0, 2);


  const displayName =
    product.fullName ||
    product.name;


  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#FAF8F5]">

        {/* ==================================================
            HERO
        ================================================== */}

        <section className="py-7 sm:py-10 lg:py-14">
          <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">

            {/* META */}
            <div
              className="
                mb-7
                flex
                items-center
                justify-between
                border-b
                border-[#1E2A24]/10
                pb-3
              "
            >
              <Link
                to="/products"
                className="
                  text-[9px]
                  font-extrabold
                  uppercase
                  tracking-[0.18em]
                  text-[#D97706]
                "
              >
                ← Product Collection
              </Link>

              <span
                className="
                  text-[9px]
                  font-bold
                  uppercase
                  tracking-[0.18em]
                  text-[#6A645D]
                "
              >
                Made in Vietnam
              </span>
            </div>


            <div
              className="
                grid
                items-center
                gap-8

                lg:grid-cols-[.9fr_1.1fr]
                lg:gap-14
              "
            >

              {/* COPY */}
              <Reveal variant="left">

                <div>

                  <Kicker>
                    {product.eyebrow}
                  </Kicker>


                  <h1
                    className="
                      mt-3
                      max-w-[700px]
                      text-[clamp(2.7rem,5.5vw,5.8rem)]
                      font-extrabold
                      leading-[0.91]
                      tracking-[-0.06em]
                      text-[#0F2F24]
                    "
                  >
                    {displayName}
                  </h1>


                  <p
                    className="
                      mt-6
                      max-w-[610px]
                      text-[15px]
                      font-medium
                      leading-7
                      text-[#5F625E]

                      sm:text-[16px]
                    "
                  >
                    {product.description}
                  </p>


                  {/* QUICK INFO */}
                  <div
                    className="
                      mt-7
                      grid
                      grid-cols-2
                      gap-2
                    "
                  >
                    {product.specifications
                      ?.slice(0, 2)
                      .map((spec) => (
                        <div
                          key={spec.label}
                          className="
                            rounded-[16px]
                            border
                            border-[#1E2A24]/10
                            bg-white
                            p-4
                          "
                        >
                          <span
                            className="
                              text-[9px]
                              font-bold
                              uppercase
                              tracking-[0.14em]
                              text-[#D97706]
                            "
                          >
                            {spec.label}
                          </span>

                          <p
                            className="
                              mt-1.5
                              text-[11px]
                              font-semibold
                              leading-5
                              text-[#0F2F24]

                              sm:text-[12px]
                            "
                          >
                            {spec.value}
                          </p>
                        </div>
                      ))}
                  </div>


                  {/* ACTIONS */}
                  <div
                    className="
                      mt-7
                      flex
                      flex-col
                      gap-3

                      sm:flex-row
                    "
                  >
                    <Link
                      to="/contact"
                      className="
                        inline-flex
                        min-h-[50px]
                        items-center
                        justify-center
                        gap-2
                        rounded-[14px]
                        bg-[#F59E0B]
                        px-7
                        text-[14px]
                        font-extrabold
                        text-[#0F2F24]

                        transition
                        hover:bg-[#D97706]
                      "
                    >
                      Request Sample

                      <SiteIcon
                        name="arrow"
                        size={15}
                      />
                    </Link>


                    <Link
                      to="/oem-odm"
                      className="
                        inline-flex
                        min-h-[50px]
                        items-center
                        justify-center
                        rounded-[14px]
                        border
                        border-[#F59E0B]
                        bg-white
                        px-7
                        text-[14px]
                        font-bold
                        text-[#0F2F24]

                        transition
                        hover:bg-[#FFF4DA]
                      "
                    >
                      OEM / ODM
                    </Link>
                  </div>

                </div>
              </Reveal>


              {/* IMAGE */}
              <Reveal
                variant="right"
                delay={80}
              >
                <div
                  className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-[#1E2A24]/10
                    bg-[#F4F1EA]
                  "
                >
                  <div
                    className="
                      aspect-[4/3]
                      p-3

                      sm:p-5
                    "
                  >
                    <ProductImage
                      src={product.image}
                      alt={product.name}
                      contain
                      eager
                    />
                  </div>


                  <div
                    className="
                      absolute
                      bottom-4
                      left-4
                      rounded-full
                      bg-[#0F2F24]
                      px-3
                      py-2
                      text-[9px]
                      font-extrabold
                      uppercase
                      tracking-[0.14em]
                      text-white

                      sm:bottom-5
                      sm:left-5
                    "
                  >
                    VinEco Product
                  </div>

                </div>
              </Reveal>

            </div>

          </div>
        </section>


        {/* ==================================================
            PRODUCT ESSENTIALS
        ================================================== */}

        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

            <Reveal>

              <div
                className="
                  grid
                  gap-5
                  border-b
                  border-[#1E2A24]/10
                  pb-7

                  lg:grid-cols-[1fr_.75fr]
                  lg:items-end
                "
              >
                <div>
                  <Kicker>
                    Product Essentials
                  </Kicker>

                  <h2
                    className="
                      mt-3
                      text-[36px]
                      font-extrabold
                      leading-[0.98]
                      tracking-[-0.05em]
                      text-[#0F2F24]

                      sm:text-[46px]
                    "
                  >
                    Benefits & technical details.
                  </h2>
                </div>


                <p
                  className="
                    max-w-[460px]
                    text-[14px]
                    font-medium
                    leading-7
                    text-[#5F625E]

                    lg:justify-self-end
                  "
                >
                  The core characteristics buyers need
                  before moving into sampling, packaging
                  and private-label development.
                </p>

              </div>

            </Reveal>


            <div
              className="
                mt-8
                grid
                gap-4

                lg:grid-cols-[1.1fr_.9fr]
                lg:gap-5
              "
            >

              {/* BENEFITS */}
              <div
                className="
                  grid
                  gap-4

                  sm:grid-cols-2
                "
              >
                {product.highlights?.map(
                  (item, index) => (
                    <BenefitCard
                      key={item.title}
                      item={item}
                      index={index}
                    />
                  ),
                )}
              </div>


              {/* SPECS */}
              <Reveal
                variant="right"
                delay={80}
                className="h-full"
              >
                <div
                  className="
                    flex
                    h-full
                    flex-col
                    overflow-hidden
                    rounded-[22px]
                    bg-[#0F2F24]
                    p-5
                    text-white

                    sm:p-7
                  "
                >

                  <Kicker light>
                    Specifications
                  </Kicker>


                  <h3
                    className="
                      mt-3
                      text-[27px]
                      font-extrabold
                      tracking-[-0.04em]
                      text-white
                    "
                  >
                    Product details.
                  </h3>


                  <div className="mt-auto pt-8">

                    {product.specifications?.map(
                      (spec, index) => (
                        <div
                          key={spec.label}
                          className={[
                            "grid gap-2 py-4",

                            index
                              ? "border-t border-white/10"
                              : "",
                          ].join(" ")}
                        >
                          <span
                            className="
                              text-[10px]
                              font-bold
                              uppercase
                              tracking-[0.13em]
                              text-[#F59E0B]
                            "
                          >
                            {spec.label}
                          </span>

                          <p
                            className="
                              text-[14px]
                              font-medium
                              leading-6
                              text-white/75
                            "
                          >
                            {spec.value}
                          </p>
                        </div>
                      ),
                    )}

                  </div>
                </div>
              </Reveal>

            </div>

          </div>
        </section>


        {/* ==================================================
            PRODUCT REFERENCES
        ================================================== */}

        {product.productImages?.length > 0 && (
          <section className="bg-[#F4F1EA] py-12 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

              <Reveal>
                <div className="mb-8 max-w-[680px]">

                  <Kicker>
                    Product Reference
                  </Kicker>

                  <h2
                    className="
                      mt-3
                      text-[34px]
                      font-extrabold
                      leading-[1]
                      tracking-[-0.045em]
                      text-[#0F2F24]

                      sm:text-[42px]
                    "
                  >
                    Product, sizing & presentation.
                  </h2>

                </div>
              </Reveal>


              <ProductGallery
                images={product.productImages}
              />

            </div>
          </section>
        )}


        {/* ==================================================
            ROPE DESIGNS
        ================================================== */}

        {product.variants?.length > 0 && (
          <section className="py-14 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

              <Reveal>

                <div
                  className="
                    grid
                    gap-5
                    border-b
                    border-[#1E2A24]/10
                    pb-8

                    lg:grid-cols-[1fr_.75fr]
                    lg:items-end
                  "
                >

                  <div>
                    <Kicker>
                      Product Designs
                    </Kicker>

                    <h2
                      className="
                        mt-3
                        max-w-[700px]
                        text-[38px]
                        font-extrabold
                        leading-[0.96]
                        tracking-[-0.05em]
                        text-[#0F2F24]

                        sm:text-[48px]
                      "
                    >
                      Five rope configurations.
                    </h2>
                  </div>


                  <p
                    className="
                      max-w-[470px]
                      text-[14px]
                      font-medium
                      leading-7
                      text-[#5F625E]

                      lg:justify-self-end
                    "
                  >
                    Different wood-and-rope structures
                    give buyers multiple formats within
                    one cohesive product family.
                  </p>

                </div>

              </Reveal>


              <div
                className="
                  mt-8
                  grid
                  gap-4

                  lg:grid-cols-2
                  lg:gap-5
                "
              >
                {product.variants.map(
                  (item, index) => (
                    <RopeDesignCard
                      key={item.id}
                      item={item}
                      index={index}
                    />
                  ),
                )}
              </div>

            </div>
          </section>
        )}


        {/* ==================================================
            RELATED
        ================================================== */}

        <section className="bg-[#0F2F24] py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-[1120px] px-4 sm:px-6 lg:px-8">

            <Reveal>

              <Kicker light>
                Product Family
              </Kicker>

              <h2
                className="
                  mt-3
                  max-w-[620px]
                  text-[35px]
                  font-extrabold
                  leading-[0.98]
                  tracking-[-0.045em]
                  text-white

                  sm:text-[44px]
                "
              >
                Continue exploring VinEco.
              </h2>

            </Reveal>


            <div
              className="
                mt-8
                grid
                gap-4

                lg:grid-cols-2
              "
            >
              {related.map(
                (item, index) => (
                  <RelatedProduct
                    key={item.slug}
                    item={item}
                    index={index}
                  />
                ),
              )}
            </div>

          </div>
        </section>


        {/* ==================================================
            CTA
        ================================================== */}

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-[1040px] px-4 sm:px-6">

            <Reveal variant="zoom">

              <div
                className="
                  grid
                  gap-8
                  rounded-[28px]
                  bg-[#F59E0B]
                  px-6
                  py-10

                  sm:px-9
                  sm:py-12

                  lg:grid-cols-[1fr_auto]
                  lg:items-end
                  lg:px-12
                "
              >

                <div>

                  <p
                    className="
                      text-[10px]
                      font-extrabold
                      uppercase
                      tracking-[0.18em]
                      text-[#0F2F24]/60
                    "
                  >
                    OEM / ODM / Private Label
                  </p>


                  <h2
                    className="
                      mt-3
                      max-w-[690px]
                      text-[34px]
                      font-extrabold
                      leading-[0.98]
                      tracking-[-0.05em]
                      text-[#0F2F24]

                      sm:text-[44px]
                    "
                  >
                    Ready to develop this product
                    for your brand?
                  </h2>

                </div>


                <Link
                  to="/contact"
                  className="
                    inline-flex
                    min-h-[52px]
                    items-center
                    justify-center
                    gap-2
                    rounded-[14px]
                    bg-white
                    px-7
                    text-[14px]
                    font-extrabold
                    text-[#0F2F24]

                    transition
                    hover:-translate-y-0.5
                  "
                >
                  Contact VinEco

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