import { siteContent } from '../../data/siteContent'
import { MediaPlaceholder } from '../ui/MediaPlaceholder'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  const { about } = siteContent

  return (
    <section id="about" className="section-y bg-white">
      <div className="section-shell grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <MediaPlaceholder
          src={about.image}
          alt="VinEco sustainable coffee wood sourcing"
          className="aspect-[5/4] rounded-[2rem]"
          badge="Central Highlands · Vietnam"
        />

        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} />
          <div className="mt-6 space-y-4 text-base leading-7 text-ink/65">
            {about.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </div>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {about.highlights.map((label, index) => (
              <div key={label} className="rounded-2xl border border-ink/[0.07] bg-cream p-4">
                <div className="text-xs font-extrabold text-brand-600">0{index + 1}</div>
                <div className="mt-2 text-sm font-bold leading-5 text-ink">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
