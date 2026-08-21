import { siteContent } from '../../data/siteContent'
import { Icon } from '../ui/Icon'
import { MediaPlaceholder } from '../ui/MediaPlaceholder'
import { SectionHeading } from '../ui/SectionHeading'

export function ProductsSection() {
  return (
    <section id="products" className="section-y">
      <div className="section-shell">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Product Line"
            title="A product catalogue, not an online shop."
            description="The website explains VinEco’s core coffee wood chew range and moves qualified B2B buyers directly toward inquiry."
          />
          <a href="#contact" className="focus-ring inline-flex w-fit items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-bold text-ink transition hover:border-brand-300 hover:bg-brand-50">
            Ask for catalogue <Icon name="arrowUpRight" className="size-4" />
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {siteContent.products.map((product, index) => (
            <article key={product.name} className="group overflow-hidden rounded-[1.8rem] border border-ink/[0.07] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/[0.06]">
              <MediaPlaceholder src={product.image} alt={product.name} className="aspect-[4/3]" badge={`0${index + 1}`} />
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold tracking-[-0.03em] text-ink">{product.name}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/60">{product.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {product.meta.map((item) => (
                    <span key={item} className="rounded-full bg-brand-50 px-3 py-1.5 text-[11px] font-semibold text-brand-700">{item}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
