import { siteContent } from '../../data/siteContent'
import { SectionHeading } from '../ui/SectionHeading'

export function WorkingModelsSection() {
  return (
    <section className="section-y bg-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Ways to Work"
          title="OEM, ODM or Private Label — choose the path that fits your brand."
          description="Three simple engagement models keep the buying journey easy to understand before a prospect contacts the team."
          align="center"
        />

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {siteContent.workingModels.map((item, index) => (
            <article key={item.title} className="rounded-[1.8rem] border border-ink/[0.07] bg-cream p-6 sm:p-7">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full bg-brand-100 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em] text-brand-700">{item.kicker}</span>
                <span className="text-xs font-extrabold text-ink/35">0{index + 1}</span>
              </div>
              <h3 className="mt-8 text-3xl font-extrabold tracking-[-0.05em] text-ink">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-ink/60">{item.description}</p>
              <p className="mt-8 border-t border-ink/[0.08] pt-4 text-xs font-bold uppercase tracking-[0.12em] text-brand-700">{item.meta}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
