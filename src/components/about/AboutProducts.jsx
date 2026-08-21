import { Link } from "react-router";

import { aboutContent } from "../../data/aboutContent";
import Reveal from "../ui/Reveal";
import SmartImage from "../ui/SmartImage";

export default function AboutProducts() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1240px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.26em] text-brand-600">
              Natural Product Family
            </p>

            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.04em] text-ink sm:text-4xl">
              Built from natural materials.
            </h2>

            <p className="mt-4 text-sm leading-7 text-ink/55">
              Explore VinEco product categories for wholesale, OEM, ODM and private-label projects.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
          {aboutContent.products.map(
            (product, index) => (
              <Reveal
                key={product.title}
                delay={index * 70}
                className="h-full"
              >
                <Link
                  to={product.href}
                  className="group block h-full overflow-hidden rounded-[22px] border border-brand-500/45 bg-white transition hover:-translate-y-1 hover:border-brand-500 hover:shadow-[0_16px_38px_rgba(255,164,18,.14)]"
                >
                  <div className="aspect-square overflow-hidden bg-[#fff4df]">
                    <SmartImage
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.05]"
                    />
                  </div>

                  <div className="p-4 text-center">
                    <h3 className="text-sm font-extrabold text-ink">
                      {product.title}
                    </h3>

                    <span className="mt-3 inline-flex rounded-full bg-brand-500 px-4 py-1.5 text-[10px] font-extrabold text-ink">
                      View product
                    </span>
                  </div>
                </Link>
              </Reveal>
            ),
          )}
        </div>
      </div>
    </section>
  );
}