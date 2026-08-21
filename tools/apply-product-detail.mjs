import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const SRC = path.join(ROOT, "src");

const exists = (p) => fs.existsSync(p);

function fail(message) {
  console.error("\n❌ " + message);
  process.exit(1);
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), {
    recursive: true,
  });

  fs.writeFileSync(
    file,
    content,
    "utf8",
  );
}

function walk(dir) {
  if (!exists(dir)) return [];

  const result = [];

  for (const entry of fs.readdirSync(
    dir,
    { withFileTypes: true },
  )) {
    if (
      entry.name === "node_modules" ||
      entry.name === "dist"
    ) {
      continue;
    }

    const full =
      path.join(dir, entry.name);

    if (entry.isDirectory()) {
      result.push(...walk(full));
    } else {
      result.push(full);
    }
  }

  return result;
}

console.log(`
==================================================
 VINECO PRODUCT DETAIL - NODE PATCHER V3
 No PowerShell patch / No download required
==================================================
`);

if (!exists(path.join(ROOT, "package.json"))) {
  fail(
    "Không tìm thấy package.json. Hãy chạy trong thư mục gốc project.",
  );
}

const pagePath =
  path.join(
    SRC,
    "pages",
    "ProductDetailPage.jsx",
  );

const cssPath =
  path.join(
    SRC,
    "styles",
    "globals.css",
  );

const catalogPath =
  path.join(
    SRC,
    "data",
    "productCatalog.js",
  );

if (!exists(cssPath)) {
  fail("Không tìm thấy src/styles/globals.css");
}

if (!exists(catalogPath)) {
  fail("Không tìm thấy src/data/productCatalog.js");
}

/* =========================================================
   BACKUP
========================================================= */

const stamp =
  new Date()
    .toISOString()
    .replace(/[:.]/g, "-");

const backupDir =
  path.join(
    ROOT,
    ".vineco-backups",
    "product-detail-node-v3-" + stamp,
  );

fs.mkdirSync(
  backupDir,
  { recursive: true },
);

for (const source of [
  pagePath,
  cssPath,
]) {
  if (exists(source)) {
    fs.copyFileSync(
      source,
      path.join(
        backupDir,
        path.basename(source),
      ),
    );
  }
}

console.log(
  "✅ Backup:",
  path.relative(ROOT, backupDir),
);

/* =========================================================
   PRODUCT DETAIL PAGE
========================================================= */

const pageSource = String.raw`
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
`;

write(
  pagePath,
  pageSource,
);

console.log(
  "✅ Created ProductDetailPage.jsx",
);


/* =========================================================
   FIND + PATCH ROUTER
========================================================= */

const sourceFiles =
  walk(SRC).filter(
    (file) =>
      /\.(jsx|js)$/.test(file),
  );

let routerFile = null;

for (const file of sourceFiles) {
  const source = read(file);

  if (
    source.includes("<Routes") &&
    source.includes("<Route")
  ) {
    routerFile = file;
    break;
  }
}

if (!routerFile) {
  fail(
    "Không tự tìm thấy file chứa <Routes>. Không sửa Router.",
  );
}

let router =
  read(routerFile);

fs.copyFileSync(
  routerFile,
  path.join(
    backupDir,
    "router-before" +
      path.extname(routerFile),
  ),
);

let relativeImport =
  path
    .relative(
      path.dirname(routerFile),
      pagePath,
    )
    .replace(/\\/g, "/")
    .replace(/\.jsx$/, "");

if (!relativeImport.startsWith(".")) {
  relativeImport =
    "./" + relativeImport;
}

const importLine =
  'import ProductDetailPage from "' +
  relativeImport +
  '";';

router =
  router.replace(
    /^import\s+ProductDetailPage\s+from\s+["'][^"']+["'];?\s*$/gm,
    "",
  );

router =
  importLine +
  "\n" +
  router;

const productRouteRegex =
  /<Route\b(?=[^>]*path=["']\/?products\/:slug["'])[^>]*\/>/s;

const productRoute =
  '<Route path="/products/:slug" element={<ProductDetailPage />} />';

if (
  productRouteRegex.test(router)
) {
  router =
    router.replace(
      productRouteRegex,
      productRoute,
    );

  console.log(
    "✅ Updated existing /products/:slug route",
  );
} else {
  const index =
    router.lastIndexOf(
      "</Routes>",
    );

  if (index < 0) {
    fail(
      "Router có <Routes> nhưng không tìm thấy </Routes>.",
    );
  }

  router =
    router.slice(0, index) +
    "\n        " +
    productRoute +
    "\n      " +
    router.slice(index);

  console.log(
    "✅ Added /products/:slug route",
  );
}

write(
  routerFile,
  router,
);


/* =========================================================
   CSS
========================================================= */

let css =
  read(cssPath);

css =
  css.replace(
    /\/\*\s*VINECO PRODUCT DETAIL NODE V3 START\s*\*\/[\s\S]*?\/\*\s*VINECO PRODUCT DETAIL NODE V3 END\s*\*\//g,
    "",
  );

const cssPatch = String.raw`

/* ==========================================================
   VINECO PRODUCT DETAIL NODE V3 START
========================================================== */

.pd3 {
  --orange: #ffa412;
  --blue: #03326b;
  --cream: #fff6e6;

  overflow-x: clip;

  color: var(--blue);
  background: #fff;
}

.pd3 *,
.pd3 *::before,
.pd3 *::after {
  box-sizing: border-box;
}

.pd3-shell {
  width: min(calc(100% - 32px), 1220px);
  margin-inline: auto;
}

.pd3-kicker {
  margin: 0;

  color: #d98300;

  font-size: 9px;
  font-weight: 850;

  letter-spacing: .22em;

  text-transform: uppercase;
}


/* NAV PRODUCT DELAY */

@media (min-width: 900px) {

  .vineco-desktop-product {
    position: relative;
  }

  .vineco-desktop-product::after {
    content: "";

    position: absolute;

    top: 100%;
    left: 50%;

    width: 290px;
    height: 22px;

    transform: translateX(-50%);

    background: transparent;
  }

  .vineco-product-dropdown {
    opacity: 0;
    visibility: hidden;

    transform:
      translate3d(-50%,8px,0);

    /*
     * 1 second closing delay.
     */
    transition:
      opacity 150ms ease 1s,
      transform 150ms ease 1s,
      visibility 0s linear 1.15s;
  }

  .vineco-desktop-product:hover
  .vineco-product-dropdown,

  .vineco-desktop-product:focus-within
  .vineco-product-dropdown {
    opacity: 1 !important;

    visibility: visible !important;

    pointer-events: auto !important;

    transform:
      translate3d(-50%,0,0) !important;

    transition-delay:
      0s !important;
  }

}


/* BUTTON */

.pd3-btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  min-height: 46px;

  padding: 0 21px;

  border-radius: 999px;

  font-size: 11px;
  font-weight: 850;

  transition:
    transform 180ms ease;
}

.pd3-btn:hover {
  transform:
    translateY(-2px);
}

.pd3-btn-dark {
  background: var(--blue);
  color: #fff;
}

.pd3-btn-light {
  border: 2px solid var(--blue);

  background: #fff;
  color: var(--blue);
}


/* HERO */

.pd3-hero {
  padding: 20px 0 75px;

  background: var(--orange);
}

.pd3-hero-meta {
  display: flex;
  justify-content: space-between;

  gap: 15px;

  padding-bottom: 12px;

  border-bottom:
    1px solid
    rgba(3,50,107,.3);

  color:
    rgba(3,50,107,.5);

  font-size: 7px;
  font-weight: 850;

  letter-spacing: .15em;
}

.pd3-hero-grid {
  display: grid;

  gap: 40px;

  padding-top: 38px;
}

.pd3-hero-copy h1 {
  max-width: 720px;

  margin: 13px 0 0;

  color: var(--blue);

  font-size:
    clamp(3.3rem,7vw,7.2rem);

  font-weight: 850;

  line-height: .88;

  letter-spacing: -.068em;
}

.pd3-lead {
  max-width: 600px;

  margin-top: 22px;

  color:
    rgba(3,50,107,.69);

  font-size: 14px;

  line-height: 1.7;
}

.pd3-actions {
  display: flex;
  flex-wrap: wrap;

  gap: 8px;

  margin-top: 25px;
}

.pd3-tags {
  display: flex;
  flex-wrap: wrap;

  gap: 7px;

  margin-top: 27px;
}

.pd3-tags span {
  padding: 7px 10px;

  border:
    1px solid
    rgba(3,50,107,.35);

  border-radius: 999px;

  font-size: 7px;
  font-weight: 850;

  letter-spacing: .08em;
}


/* HERO IMAGE */

.pd3-hero-media {
  display: grid;

  grid-template-columns:
    minmax(0,1fr)
    125px;

  gap: 9px;
}

.pd3-main-image {
  grid-column: 1 / -1;

  position: relative;

  display: flex;

  align-items: center;
  justify-content: center;

  aspect-ratio: 4 / 3;

  overflow: hidden;

  border:
    2px solid
    var(--blue);

  border-radius: 26px;

  background: #fff;
}

.pd3-main-image img {
  width: 100%;
  height: 100%;

  padding: 14px;

  object-fit: contain;
}

.pd3-image-label {
  position: absolute;

  left: 12px;
  bottom: 12px;

  padding: 7px 11px;

  border-radius: 999px;

  background: var(--orange);

  font-size: 7px;
  font-weight: 850;
}

.pd3-mini-card {
  grid-column: 2;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  min-height: 130px;

  padding: 14px;

  border-radius: 19px;

  background: var(--blue);

  color: #fff;
}

.pd3-mini-card strong {
  color: var(--orange);

  font-size: 31px;

  line-height: 1;
}

.pd3-mini-card span {
  font-size: 7px;
  font-weight: 850;
}


/* IMAGE FALLBACK */

.pd3-image-fallback {
  display: flex;

  flex-direction: column;

  align-items: center;
  justify-content: center;

  width: 100%;
  height: 100%;

  min-height: 180px;

  padding: 20px;

  background:
    radial-gradient(
      circle at 75% 22%,
      rgba(255,164,18,.22),
      transparent 28%
    ),
    #fff7e9;

  color: var(--blue);

  text-align: center;
}

.pd3-image-fallback span {
  color: var(--orange);

  font-size: 9px;
  font-weight: 850;

  letter-spacing: .22em;
}

.pd3-image-fallback strong {
  max-width: 300px;

  margin-top: 8px;

  font-size: 20px;
  font-weight: 850;
}

.pd3-image-fallback small {
  margin-top: 7px;

  opacity: .45;
}


/* SECTION HEAD */

.pd3-section-head {
  max-width: 820px;
}

.pd3-section-head h2 {
  margin-top: 9px;

  color: var(--blue);

  font-size:
    clamp(2.6rem,5vw,5rem);

  font-weight: 850;

  line-height: .95;

  letter-spacing: -.055em;
}

.pd3-section-head h2 span {
  display: block;

  color: var(--orange);
}


/* PRODUCTS */

.pd3-products {
  padding: 75px 0;
}

.pd3-product-track {
  display: grid;

  grid-auto-flow: column;
  grid-auto-columns: 205px;

  gap: 10px;

  margin-top: 32px;

  overflow-x: auto;

  padding-bottom: 8px;

  scrollbar-width: none;

  scroll-snap-type:
    x proximity;
}

.pd3-product-track::-webkit-scrollbar {
  display: none;
}

.pd3-product-card {
  display: flex;
  flex-direction: column;

  min-height: 300px;

  overflow: hidden;

  border:
    1.5px solid
    var(--orange);

  border-radius: 20px;

  background: #fff;

  color: var(--blue);

  scroll-snap-align: start;
}

.pd3-product-card-image {
  height: 185px;

  background: var(--cream);
}

.pd3-product-card-image img {
  width: 100%;
  height: 100%;

  padding: 10px;

  object-fit: contain;
}

.pd3-product-card > strong {
  padding: 14px 14px 0;

  font-size: 12px;

  line-height: 1.4;
}

.pd3-product-card > small {
  margin-top: auto;

  padding: 11px 14px 15px;

  color: #d98300;

  font-weight: 800;
}


/* SCALE */

.pd3-scale {
  padding: 15px 0 75px;
}

.pd3-scale-box {
  display: grid;

  gap: 24px;

  padding: 38px;

  border-radius: 24px;

  background: var(--blue);

  color: #fff;
}

.pd3-scale .pd3-kicker {
  color: var(--orange);
}

.pd3-scale h2 {
  margin-top: 9px;

  color: #fff;

  font-size:
    clamp(2.4rem,4.5vw,4.4rem);

  font-weight: 850;

  line-height: .96;

  letter-spacing: -.05em;
}

.pd3-scale h2 span {
  display: block;

  color: var(--orange);
}

.pd3-scale-box p:last-child {
  max-width: 600px;

  margin-top: 13px;

  color:
    rgba(255,255,255,.64);

  font-size: 12px;

  line-height: 1.65;
}


/* WHY */

.pd3-why {
  padding: 85px 0;

  background: var(--cream);
}

.pd3-why-grid {
  display: grid;

  gap: 10px;

  margin-top: 32px;
}

.pd3-why-card {
  min-height: 240px;

  display: flex;
  flex-direction: column;

  padding: 22px;

  border:
    2px solid
    var(--orange);

  border-radius: 21px;

  background: #fff;
}

.pd3-why-card > span {
  color: var(--orange);

  font-weight: 850;
}

.pd3-why-card h3 {
  margin-top: auto;

  color: var(--blue);

  font-size: 21px;
  font-weight: 850;
}

.pd3-why-card p {
  margin-top: 10px;

  color:
    rgba(3,50,107,.6);

  font-size: 11px;

  line-height: 1.6;
}


/* STORY */

.pd3-story {
  padding: 85px 0;
}

.pd3-feature {
  display: grid;

  gap: 32px;

  align-items: center;

  margin-top: 65px;
}

.pd3-big-number {
  display: block;

  color: var(--orange);

  font-size:
    clamp(4.6rem,8vw,7.5rem);

  line-height: .73;

  letter-spacing: -.07em;
}

.pd3-feature h3 {
  max-width: 540px;

  margin-top: 13px;

  color: var(--blue);

  font-size:
    clamp(1.9rem,3.6vw,3.5rem);

  font-weight: 850;

  line-height: 1;

  letter-spacing: -.045em;
}

.pd3-feature-copy p {
  max-width: 560px;

  margin-top: 16px;

  color:
    rgba(3,50,107,.62);

  font-size: 13px;

  line-height: 1.72;
}

.pd3-text-link {
  display: inline-block;

  margin-top: 16px;

  padding-bottom: 3px;

  border-bottom:
    2px solid
    var(--orange);

  color: var(--blue);

  font-size: 10px;
  font-weight: 850;
}

.pd3-feature-visual {
  min-height: 400px;

  overflow: hidden;

  border:
    2px solid
    var(--orange);

  border-radius: 23px;
}

.pd3-feature-visual img {
  width: 100%;
  height: 100%;

  object-fit: contain;

  padding: 12px;
}

.pd3-feature-cream {
  background: var(--cream);
}

.pd3-feature-orange {
  background: var(--orange);
}

.pd3-feature-blue {
  background: var(--blue);
}

.pd3-poster {
  display: flex;

  flex-direction: column;

  justify-content: space-between;

  min-height: 400px;

  padding: 35px;

  color: var(--blue);
}

.pd3-poster > span {
  font-size: 10px;
  font-weight: 850;

  letter-spacing: .18em;
}

.pd3-poster > strong {
  font-size:
    clamp(2.6rem,5vw,5rem);

  line-height: .9;

  letter-spacing: -.055em;
}

.pd3-poster-light {
  color: #fff;
}

.pd3-poster-light > span {
  color: var(--orange);
}


/* QUALITY */

.pd3-quality {
  padding: 85px 0;

  background: #fff4e4;
}

.pd3-quality-grid {
  display: grid;

  gap: 35px;
}

.pd3-quality h2 {
  margin-top: 9px;

  color: var(--blue);

  font-size:
    clamp(2.6rem,5vw,4.8rem);

  font-weight: 850;

  line-height: .95;

  letter-spacing: -.055em;
}

.pd3-quality h2 span {
  display: block;

  color: var(--orange);
}

.pd3-quality-list > div {
  display: grid;

  grid-template-columns:
    42px minmax(0,1fr);

  gap: 10px;

  padding: 15px 0;

  border-top:
    1px solid
    rgba(3,50,107,.17);
}

.pd3-quality-list span {
  color: var(--orange);

  font-size: 9px;
  font-weight: 850;
}

.pd3-quality-list strong {
  font-size: 13px;
}


/* COLLECTION */

.pd3-collection {
  padding: 70px 0;
}

.pd3-collection-box {
  padding: 44px;

  border-radius: 25px;

  background: var(--orange);
}

.pd3-collection h2 {
  max-width: 790px;

  margin-top: 9px;

  color: var(--blue);

  font-size:
    clamp(2.8rem,5vw,5rem);

  font-weight: 850;

  line-height: .92;

  letter-spacing: -.06em;
}

.pd3-collection h2 span {
  color: #fff;
}


/* FAQ */

.pd3-faq {
  padding: 75px 0;

  background: var(--cream);
}

.pd3-faq-list {
  max-width: 820px;

  margin: 28px auto 0;
}

.pd3-faq-item {
  margin-bottom: 6px;

  overflow: hidden;

  border:
    1.5px solid
    rgba(255,164,18,.7);

  border-radius: 12px;

  background: #fff;
}

.pd3-faq-item summary {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 12px;

  min-height: 52px;

  padding: 11px 13px;

  cursor: pointer;

  list-style: none;

  font-size: 10px;
  font-weight: 800;
}

.pd3-faq-item summary::-webkit-details-marker {
  display: none;
}

.pd3-faq-item summary strong {
  display: flex;

  align-items: center;
  justify-content: center;

  width: 25px;
  height: 25px;

  flex: 0 0 25px;

  border-radius: 50%;

  background: var(--orange);
}

.pd3-faq-item[open]
summary strong {
  transform: rotate(45deg);
}

.pd3-faq-item > p {
  max-width: 650px;

  padding: 0 13px 14px;

  color:
    rgba(3,50,107,.6);

  font-size: 11px;

  line-height: 1.65;
}


/* DESKTOP */

@media (min-width: 760px) {

  .pd3-why-grid {
    grid-template-columns:
      repeat(3,1fr);
  }

  .pd3-scale-box {
    grid-template-columns:
      1fr auto;

    align-items: center;
  }

}


@media (min-width: 960px) {

  .pd3-hero-grid {
    grid-template-columns:
      .92fr 1.08fr;

    align-items: center;
  }

  .pd3-feature {
    grid-template-columns:
      .8fr 1.2fr;

    gap: 65px;
  }

  .pd3-feature-reverse {
    grid-template-columns:
      1.2fr .8fr;
  }

  .pd3-feature-reverse
  .pd3-feature-copy {
    order: 2;
  }

  .pd3-feature-reverse
  .pd3-feature-visual {
    order: 1;
  }

  .pd3-quality-grid {
    grid-template-columns:
      1fr 1fr;

    align-items: center;
  }

}


/* MOBILE */

@media (max-width: 899px) {

  .pd3-shell {
    width:
      calc(100% - 20px);

    max-width:
      calc(100% - 20px);
  }

  .pd3-hero {
    padding:
      13px 0 42px;
  }

  .pd3-hero-grid {
    grid-template-columns: 1fr;

    gap: 25px;

    padding-top: 25px;
  }

  .pd3-hero-copy h1 {
    font-size:
      clamp(2.9rem,13vw,4.2rem);

    line-height: .92;
  }

  .pd3-lead {
    margin-top: 16px;

    font-size: 13px;
  }

  .pd3-actions {
    display: grid;

    grid-template-columns:
      repeat(2,minmax(0,1fr));

    width: 100%;
  }

  .pd3-actions .pd3-btn {
    width: 100%;

    padding-inline: 7px;

    font-size: 9px;
  }

  .pd3-hero-media {
    grid-template-columns:
      minmax(0,1fr)
      82px;
  }

  .pd3-main-image {
    border-radius: 18px;
  }

  .pd3-mini-card {
    min-height: 110px;

    padding: 10px;

    border-radius: 15px;
  }

  .pd3-mini-card strong {
    font-size: 26px;
  }


  .pd3-section-head h2,
  .pd3-quality h2 {
    font-size:
      clamp(2.15rem,9.7vw,3.3rem);

    line-height: 1;
  }


  .pd3-products,
  .pd3-why,
  .pd3-story,
  .pd3-quality,
  .pd3-faq {
    padding:
      56px 0;
  }


  .pd3-product-track {
    grid-auto-columns:
      min(70vw,215px);

    margin-top: 25px;
  }


  .pd3-scale {
    padding:
      12px 0 52px;
  }

  .pd3-scale-box {
    padding: 25px 18px;

    border-radius: 18px;
  }

  .pd3-scale h2 {
    font-size:
      clamp(2.1rem,9.5vw,3rem);
  }


  .pd3-why-grid {
    grid-template-columns:
      1fr;

    margin-top: 25px;
  }

  .pd3-why-card {
    min-height: 200px;

    border-radius: 17px;
  }


  .pd3-feature,
  .pd3-feature-reverse {
    grid-template-columns: 1fr;

    gap: 22px;

    margin-top: 48px;
  }

  .pd3-feature-copy,
  .pd3-feature-reverse
  .pd3-feature-copy {
    order: 1;
  }

  .pd3-feature-visual,
  .pd3-feature-reverse
  .pd3-feature-visual {
    order: 2;
  }

  .pd3-big-number {
    font-size: 55px;
  }

  .pd3-feature h3 {
    font-size:
      clamp(1.75rem,7.7vw,2.5rem);
  }

  .pd3-feature-visual,
  .pd3-poster {
    min-height: 0;

    aspect-ratio: 16 / 10;

    border-radius: 18px;
  }

  .pd3-poster {
    padding: 22px;
  }


  .pd3-quality-grid {
    grid-template-columns: 1fr;

    gap: 25px;
  }


  .pd3-collection {
    padding: 50px 0;
  }

  .pd3-collection-box {
    padding: 29px 18px;

    border-radius: 18px;
  }

  .pd3-collection h2 {
    font-size:
      clamp(2.25rem,10vw,3.3rem);
  }

}


@media (max-width: 359px) {

  .pd3-shell {
    width:
      calc(100% - 16px);

    max-width:
      calc(100% - 16px);
  }

  .pd3-actions {
    grid-template-columns:
      1fr;
  }

  .pd3-hero-media {
    grid-template-columns:
      minmax(0,1fr)
      70px;
  }

}


/* PERFORMANCE */

.pd3-products,
.pd3-why,
.pd3-story,
.pd3-quality,
.pd3-faq {
  content-visibility: auto;

  contain-intrinsic-size:
    600px;
}


/* REDUCED MOTION */

@media (prefers-reduced-motion: reduce) {

  .pd3 *,
  .pd3 *::before,
  .pd3 *::after {
    transition: none !important;
    animation: none !important;
  }

}


/* ==========================================================
   VINECO PRODUCT DETAIL NODE V3 END
========================================================== */
`;

css =
  css.trimEnd() +
  "\n\n" +
  cssPatch +
  "\n";

write(
  cssPath,
  css,
);

console.log(
  "✅ Responsive Product Detail CSS installed",
);

console.log(
  "✅ Product navbar close delay = 1 second (CSS)",
);


/* =========================================================
   DONE
========================================================= */

console.log(`
==================================================
 ✅ PATCH COMPLETE
==================================================

Backup:
${path.relative(ROOT, backupDir)}

Next:
1. npm run build
2. npm run dev -- --host

Product route:
#/products/:slug

Example:
click Product -> choose a product
`);