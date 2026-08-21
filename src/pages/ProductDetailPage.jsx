
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

import {
  productCatalog,
} from "../data/productCatalog";


function resolveImage(product) {
  if (!product) return "";

  if (typeof product.image === "string") {
    return product.image;
  }

  if (typeof product.thumbnail === "string") {
    return product.thumbnail;
  }

  if (typeof product.cover === "string") {
    return product.cover;
  }

  if (
    Array.isArray(product.images) &&
    product.images.length
  ) {
    const first = product.images[0];

    if (typeof first === "string") {
      return first;
    }

    if (first && typeof first === "object") {
      return (
        first.src ||
        first.url ||
        first.image ||
        ""
      );
    }
  }

  return "";
}


function ProductVisual({
  src,
  alt,
  label,
}) {
  const [failed, setFailed] =
    useState(false);

  if (!src || failed) {
    return (
      <div className="pd3-image-fallback">

        <span>
          VINECO
        </span>

        <strong>
          {label || "NATURAL PET PRODUCT"}
        </strong>

        <small>
          Product visual
        </small>

      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt || ""}
      loading="lazy"
      decoding="async"
      onError={() =>
        setFailed(true)
      }
    />
  );
}


const whyItems = [
  {
    number: "01",
    title: "Natural Material Focus",
    text:
      "Built around natural-material product direction for modern pet brands.",
  },
  {
    number: "02",
    title: "OEM / ODM Flexibility",
    text:
      "Discuss sampling, customization, private labeling and packaging in one workflow.",
  },
  {
    number: "03",
    title: "Craft & Finishing",
    text:
      "Product preparation and finishing help create a stronger final presentation.",
  },
];


const faq = [
  {
    q: "Can I request a free sample?",
    a:
      "Sample requirements can be discussed directly with VinEco through the contact page.",
  },
  {
    q: "Can I customize this product?",
    a:
      "Customization depends on the selected product and project requirements. OEM, ODM and private-label options can be discussed.",
  },
  {
    q: "Can I use my own branding?",
    a:
      "Private-label, packaging, labels and suitable branding options can be discussed with VinEco.",
  },
  {
    q: "How do I start an OEM / ODM project?",
    a:
      "Send your product references, specifications, target market and packaging direction to VinEco.",
  },
];


export default function ProductDetailPage() {
  const { slug } =
    useParams();

  const product =
    useMemo(
      () =>
        productCatalog.find(
          (item) =>
            item.slug === slug,
        ) ||
        productCatalog[0],
      [slug],
    );

  if (!product) {
    return (
      <>
        <Header />

        <main className="pd3-not-found">
          <h1>
            Product not found
          </h1>

          <Link to="/products">
            View products
          </Link>
        </main>

        <Footer />
      </>
    );
  }

  const mainImage =
    resolveImage(product);

  const related =
    productCatalog
      .filter(
        (item) =>
          item.slug !== product.slug,
      )
      .slice(0, 6);

  const description =
    product.description ||
    product.shortDescription ||
    "Natural pet product developed for distributors, pet brands and private-label partners.";

  return (
    <>
      <Header />

      <main className="pd3">

        {/* HERO */}

        <section className="pd3-hero">

          <div className="pd3-shell">

            <div className="pd3-hero-meta">

              <span>
                VINECO PRODUCT
              </span>

              <span>
                MADE IN VIETNAM
              </span>

            </div>


            <div className="pd3-hero-grid">

              <div className="pd3-hero-copy">

                <p className="pd3-kicker">
                  NATURAL PET PRODUCTS
                </p>

                <h1>
                  {product.name}
                </h1>

                <p className="pd3-lead">
                  {description}
                </p>


                <div className="pd3-actions">

                  <Link
                    to="/contact"
                    className="pd3-btn pd3-btn-dark"
                  >
                    Request Sample
                  </Link>

                  <Link
                    to="/oem-odm"
                    className="pd3-btn pd3-btn-light"
                  >
                    OEM / ODM
                  </Link>

                </div>


                <div className="pd3-tags">

                  <span>
                    NATURAL
                  </span>

                  <span>
                    PRIVATE LABEL
                  </span>

                  <span>
                    OEM / ODM
                  </span>

                </div>

              </div>


              <div className="pd3-hero-media">

                <div className="pd3-main-image">

                  <ProductVisual
                    src={mainImage}
                    alt={product.name}
                    label={product.name}
                  />

                  <span className="pd3-image-label">
                    PRODUCT
                  </span>

                </div>


                <div className="pd3-mini-card">

                  <strong>
                    100%
                  </strong>

                  <span>
                    NATURAL
                    <br />
                    PRODUCT
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* RELATED PRODUCTS */}

        <section className="pd3-products">

          <div className="pd3-shell">

            <p className="pd3-kicker">
              PRODUCT FAMILY
            </p>

            <div className="pd3-section-head">

              <h2>
                Explore more
                <span>
                  VinEco products.
                </span>
              </h2>

            </div>


            <div className="pd3-product-track">

              {related.map(
                (item) => (
                  <Link
                    key={item.slug}
                    to={
                      "/products/" +
                      item.slug
                    }
                    className="pd3-product-card"
                  >

                    <div className="pd3-product-card-image">

                      <ProductVisual
                        src={
                          resolveImage(
                            item,
                          )
                        }
                        alt={item.name}
                        label={item.name}
                      />

                    </div>

                    <strong>
                      {item.name}
                    </strong>

                    <small>
                      View product →
                    </small>

                  </Link>
                ),
              )}

            </div>

          </div>

        </section>


        {/* SCALE */}

        <section className="pd3-scale">

          <div className="pd3-shell">

            <div className="pd3-scale-box">

              <div>

                <p className="pd3-kicker">
                  B2B · OEM · ODM
                </p>

                <h2>
                  Ready to scale
                  <span>
                    your product line?
                  </span>
                </h2>

                <p>
                  Turn a VinEco product
                  into a branded collection
                  with product, packaging and
                  private-label support.
                </p>

              </div>


              <Link
                to="/contact"
                className="pd3-btn pd3-btn-light"
              >
                Start a project
              </Link>

            </div>

          </div>

        </section>


        {/* WHY */}

        <section className="pd3-why">

          <div className="pd3-shell">

            <div className="pd3-section-head">

              <p className="pd3-kicker">
                WHY VINECO?
              </p>

              <h2>
                Product support
                <span>
                  beyond manufacturing.
                </span>
              </h2>

            </div>


            <div className="pd3-why-grid">

              {whyItems.map(
                (item) => (
                  <article
                    key={item.number}
                    className="pd3-why-card"
                  >

                    <span>
                      {item.number}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </article>
                ),
              )}

            </div>

          </div>

        </section>


        {/* EDITORIAL FEATURES */}

        <section className="pd3-story">

          <div className="pd3-shell">

            <div className="pd3-section-head">

              <p className="pd3-kicker">
                PRODUCT STORY
              </p>

              <h2>
                What makes
                <span>
                  this product special?
                </span>
              </h2>

            </div>


            <article className="pd3-feature">

              <div className="pd3-feature-copy">

                <strong className="pd3-big-number">
                  01
                </strong>

                <h3>
                  Natural-material
                  product direction.
                </h3>

                <p>
                  Natural materials provide
                  a distinctive visual and
                  tactile identity for
                  modern pet products.
                </p>

              </div>

              <div className="pd3-feature-visual pd3-feature-cream">

                <ProductVisual
                  src={mainImage}
                  label={product.name}
                />

              </div>

            </article>


            <article className="pd3-feature pd3-feature-reverse">

              <div className="pd3-feature-copy">

                <strong className="pd3-big-number">
                  02
                </strong>

                <h3>
                  OEM & ODM
                  flexibility.
                </h3>

                <p>
                  Work with VinEco on
                  sampling, product format,
                  labels, packaging and
                  private-label presentation.
                </p>

                <Link
                  to="/oem-odm"
                  className="pd3-text-link"
                >
                  Explore OEM / ODM →
                </Link>

              </div>

              <div className="pd3-feature-visual pd3-feature-orange">

                <div className="pd3-poster">

                  <span>
                    YOUR BRAND.
                  </span>

                  <strong>
                    OUR
                    <br />
                    MANUFACTURING.
                  </strong>

                </div>

              </div>

            </article>


            <article className="pd3-feature">

              <div className="pd3-feature-copy">

                <strong className="pd3-big-number">
                  03
                </strong>

                <h3>
                  Consistent finishing
                  & presentation.
                </h3>

                <p>
                  Product quality is not only
                  about the raw material.
                  Finishing and presentation
                  shape the final customer
                  experience.
                </p>

              </div>

              <div className="pd3-feature-visual pd3-feature-blue">

                <div className="pd3-poster pd3-poster-light">

                  <span>
                    VINECO
                  </span>

                  <strong>
                    QUALITY
                    <br />
                    IN EVERY
                    <br />
                    DETAIL.
                  </strong>

                </div>

              </div>

            </article>

          </div>

        </section>


        {/* QUALITY */}

        <section className="pd3-quality">

          <div className="pd3-shell">

            <div className="pd3-quality-grid">

              <div>

                <p className="pd3-kicker">
                  QUALITY PROCESS
                </p>

                <h2>
                  From product
                  <span>
                    to shipment.
                  </span>
                </h2>

              </div>


              <div className="pd3-quality-list">

                {[
                  "Material preparation",
                  "Production follow-up",
                  "Finishing review",
                  "Packing preparation",
                ].map(
                  (text, index) => (
                    <div key={text}>

                      <span>
                        {
                          String(
                            index + 1,
                          ).padStart(
                            2,
                            "0",
                          )
                        }
                      </span>

                      <strong>
                        {text}
                      </strong>

                    </div>
                  ),
                )}

              </div>

            </div>

          </div>

        </section>


        {/* COLLECTION */}

        <section className="pd3-collection">

          <div className="pd3-shell">

            <div className="pd3-collection-box">

              <p className="pd3-kicker">
                BUILD YOUR COLLECTION
              </p>

              <h2>
                Your product.
                <span>
                  Your brand.
                </span>
                Our support.
              </h2>


              <div className="pd3-actions">

                <Link
                  to="/products"
                  className="pd3-btn pd3-btn-light"
                >
                  View Products
                </Link>

                <Link
                  to="/contact"
                  className="pd3-btn pd3-btn-dark"
                >
                  Contact VinEco
                </Link>

              </div>

            </div>

          </div>

        </section>


        {/* FAQ */}

        <section className="pd3-faq">

          <div className="pd3-shell">

            <div className="pd3-section-head">

              <p className="pd3-kicker">
                FAQ
              </p>

              <h2>
                Frequently Asked
                Questions
              </h2>

            </div>


            <div className="pd3-faq-list">

              {faq.map(
                (item) => (
                  <details
                    key={item.q}
                    className="pd3-faq-item"
                  >

                    <summary>

                      <span>
                        {item.q}
                      </span>

                      <strong>
                        +
                      </strong>

                    </summary>

                    <p>
                      {item.a}
                    </p>

                  </details>
                ),
              )}

            </div>

          </div>

        </section>

      </main>

      <Footer />
      <FloatingContactDock />
    </>
  );
}
