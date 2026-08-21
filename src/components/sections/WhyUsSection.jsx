import { siteContent } from '../../data/siteContent'
import { SectionHeading } from '../ui/SectionHeading'

export function WhyUsSection() {
  return (
    <section className="section-y bg-ink text-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why VinEco"
          title="Built for brands that need quality, flexibility and export support."
          description="The strongest B2B selling points stay visible without making the page feel like a dense corporate brochure."
          inverse
        />

        <div className="mt-10 grid gap-px overflow-hidden rounded-[2rem] bg-white/10 lg:grid-cols-3">
          {siteContent.whyUs.map((item) => (
            <article key={item.number} className="bg-ink p-6 sm:p-8 lg:min-h-72">
              <div className="text-sm font-bold text-brand-300">{item.number}</div>
              <h3 className="mt-12 text-2xl font-bold tracking-[-0.04em] lg:mt-16">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-white/60">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
