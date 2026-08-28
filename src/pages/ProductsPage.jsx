import { Link } from "react-router";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";
import SmartImage from "../components/ui/SmartImage";
import SiteIcon from "../components/ui/SiteIcon";

import { productCatalog } from "../data/productCatalog";

export default function ProductsPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="VinEco Product"
          title="Natural pet product collections."
          description="Explore VinEco product categories for wholesale, OEM, ODM and private-label development."
        />

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto grid max-w-[1180px] gap-5 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3 lg:px-8">
            {productCatalog.map((product, index) => (
              <Reveal
                key={product.slug}
                delay={index * 70}
              >
                <Link
                  to={`/products/${product.slug}`}
                  className="group block h-full overflow-hidden rounded-[26px] border-2 border-brand-500/60 bg-white transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-[0_18px_50px_rgba(245,158,11,0.12)]"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-brand-50">
                    <SmartImage
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="p-6">
                    <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-600">
                      {product.eyebrow}
                    </p>

                    <h2 className="mt-2 text-xl font-extrabold text-ink">
                      {product.name}
                    </h2>

                    <p className="mt-3 text-sm leading-7 text-ink/55">
                      {product.description}
                    </p>

                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-ink">
                      View product
                      <SiteIcon
                        name="arrow"
                        size={16}
                      />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactDock />
    </>
  );
}