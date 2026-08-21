import { siteContent } from '../../data/siteContent'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

function ProcessList({ items }) {
  return (
    <div className="mt-8 space-y-3">
      {items.map(([number, title, description]) => (
        <article key={number} className="grid grid-cols-[46px_1fr] gap-4 rounded-2xl border border-ink/[0.07] bg-white p-4 sm:grid-cols-[54px_1fr] sm:p-5">
          <div className="grid size-11 place-items-center rounded-full bg-brand-100 text-xs font-extrabold text-brand-700 sm:size-12">{number}</div>
          <div>
            <h3 className="font-bold tracking-[-0.02em] text-ink">{title}</h3>
            <p className="mt-1.5 text-sm leading-6 text-ink/60">{description}</p>
          </div>
        </article>
      ))}
    </div>
  )
}

export function ProcessSection() {
  return (
    <section id="service" className="section-y">
      <div className="section-shell grid gap-8 lg:grid-cols-2 lg:gap-10">
        <div className="rounded-[2rem] bg-white p-5 shadow-sm sm:p-8">
          <div className="mb-5 grid size-12 place-items-center rounded-2xl bg-ink text-white">
            <Icon name="shieldCheck" className="size-5" />
          </div>
          <SectionHeading
            eyebrow="Quality Control"
            title="Four clear checkpoints before shipment."
            description="A simplified version of VinEco’s quality story that B2B buyers can scan quickly on any screen."
          />
          <ProcessList items={siteContent.qc} />
          <div className="mt-5 rounded-2xl bg-cream p-4 text-sm leading-6 text-ink/60">
            AQL-style inspection can include sample checks, measurements, defect reporting and photo documentation before shipment.
          </div>
        </div>

        <div className="rounded-[2rem] bg-brand-50 p-5 sm:p-8">
          <SectionHeading
            eyebrow="OEM / ODM Journey"
            title="From idea to delivery in five steps."
            description="A clear sequence makes the service understandable without turning the website into a complex customer portal."
          />
          <ProcessList items={siteContent.journey} />
        </div>
      </div>
    </section>
  )
}
