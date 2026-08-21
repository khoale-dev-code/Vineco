import { siteContent } from '../../data/siteContent'

export function MetricsSection() {
  return (
    <section aria-label="Key business metrics" className="pb-8 sm:pb-10">
      <div className="section-shell">
        <div className="grid overflow-hidden rounded-[1.8rem] border border-ink/[0.07] bg-white shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          {siteContent.metrics.map((item, index) => (
            <div key={item.label} className={`p-5 sm:p-6 ${index ? 'border-t border-ink/[0.07] sm:border-l sm:border-t-0' : ''} ${index === 2 ? 'sm:border-l-0 lg:border-l' : ''}`}>
              <div className="text-2xl font-extrabold tracking-[-0.04em] text-ink sm:text-3xl">{item.value}</div>
              <div className="mt-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink/45">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
