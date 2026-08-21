import { useState } from 'react'
import { siteContent } from '../../data/siteContent'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function FaqSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="faq" className="section-y bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-[.72fr_1.28fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            eyebrow="FAQ"
            title="Questions buyers usually ask before they contact you."
            description="Keep answers concise on the website; detailed commercial discussion can continue through Zalo, Messenger or email."
          />
        </div>

        <div className="space-y-3">
          {siteContent.faqs.map((item, index) => {
            const open = active === index
            const panelId = `faq-panel-${index}`

            return (
              <article key={item.q} className="overflow-hidden rounded-2xl border border-ink/[0.08] bg-cream">
                <button
                  type="button"
                  className="focus-ring flex w-full items-center justify-between gap-4 p-5 text-left sm:p-6"
                  onClick={() => setActive(open ? -1 : index)}
                  aria-expanded={open}
                  aria-controls={panelId}
                >
                  <span className="font-bold tracking-[-0.02em] text-ink">{item.q}</span>
                  <Icon name="chevronDown" className={`size-5 shrink-0 text-brand-600 transition ${open ? 'rotate-180' : ''}`} />
                </button>
                {open ? (
                  <div id={panelId} className="px-5 pb-5 text-sm leading-7 text-ink/60 sm:px-6 sm:pb-6">{item.a}</div>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
