import {
  Link,
  Navigate,
  useParams,
} from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";
import Reveal from "../components/ui/Reveal";
import SmartImage from "../components/ui/SmartImage";
import SiteIcon from "../components/ui/SiteIcon";

import {
  findProductBySlug,
  productCatalog,
} from "../data/productCatalog";

export default function ProductDetailPage() {
  const { slug } = useParams();
  const product = findProductBySlug(slug);

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  const relatedProducts = productCatalog
    .filter((item) => item.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <Header />

      <main>
        <section className="bg-[#fffaf3] py-12 sm:py-16 lg:py-20">
          <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <Reveal variant="left">
              <div className="overflow-hidden rounded-[30px] border-2 border-brand-500 bg-white">
                <SmartImage
                  src={product.image}
                  alt={product.name}
                  loading="eager"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal variant="right">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">
                  {product.eyebrow}
                </p>

                <h1 className="mt-3 text-4xl font-extrabold tracking-[-0.045em] text-ink sm:text-5xl">
                  {product.name}
                </h1>

                <p className="mt-5 text-sm leading-8 text-ink/60 sm:text-base">
                  {product.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="inline-flex h-12 items-center gap-2 rounded-full border-2 border-brand-500 bg-white px-6 text-sm font-bold text-ink hover:bg-brand-50"
                  >
                    Request quotation
                    <SiteIcon
                      name="arrow"
                      size={16}
                    />
                  </Link>

                  <Link
                    to="/oem-odm"
                    className="inline-flex h-12 items-center rounded-full border border-ink/15 bg-white px-6 text-sm font-bold text-ink hover:border-brand-500"
                  >
                    OEM / ODM
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mb-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Explore more
                </p>

                <h2 className="mt-2 text-3xl font-extrabold text-ink">
                  Related products
                </h2>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-3">
              {relatedProducts.map(
                (related, index) => (
                  <Reveal
                    key={related.slug}
                    delay={index * 70}
                  >
                    <Link
                      to={`/products/${related.slug}`}
                      className="block rounded-[24px] border border-brand-500/50 bg-white p-5 transition hover:-translate-y-1 hover:border-brand-500"
                    >
                      <h3 className="font-extrabold text-ink">
                        {related.name}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-ink/55">
                        {related.description}
                      </p>
                    </Link>
                  </Reveal>
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