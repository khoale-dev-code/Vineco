import { siteContent } from '../../data/siteContent'
import { Icon } from '../ui/Icon'
import { MediaPlaceholder } from '../ui/MediaPlaceholder'

export function HeroSection() {
  const { hero } = siteContent

  return (
    <section id="home" className="relative overflow-hidden pt-28 sm:pt-32 lg:pt-36">
      <div className="dot-grid absolute inset-0 -z-10 opacity-60" />
      <div className="absolute -right-32 top-20 -z-10 size-[420px] rounded-full bg-brand-200/45 blur-3xl" />
      <div className="absolute -left-24 bottom-0 -z-10 size-80 rounded-full bg-ink/5 blur-3xl" />

      <div className="section-shell grid items-center gap-10 pb-14 sm:pb-18 lg:grid-cols-[1.06fr_.94fr] lg:gap-14 lg:pb-20">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.12em] text-brand-700 shadow-sm">
            <Icon name="sparkle" className="size-4" /> {hero.eyebrow}
          </div>

          <h1 className="mt-6 max-w-4xl text-balance text-[clamp(2.8rem,7vw,6.4rem)] font-extrabold leading-[0.95] tracking-[-0.065em] text-ink">
            {hero.titleLead} <span className="text-brand-500">{hero.titleAccent}</span> {hero.titleTail}
          </h1>

          <p className="mt-6 max-w-2xl text-pretty text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
            {hero.description}
          </p>

          <div className="mt-7 grid gap-2.5 sm:grid-cols-2">
            {hero.values.map((value) => (
              <div key={value} className="flex items-start gap-2.5 text-sm leading-6 text-ink/70">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand-100 text-brand-700">
                  <Icon name="check" className="size-3" strokeWidth={2.6} />
                </span>
                <span>{value}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={hero.primaryCta.href}
              className="focus-ring inline-flex min-h-13 items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/20 transition hover:-translate-y-0.5 hover:bg-brand-600"
            >
              {hero.primaryCta.label} <Icon name="arrowRight" className="size-4" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="focus-ring inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-ink/10 bg-white/85 px-6 py-3.5 text-sm font-bold text-ink transition hover:bg-white"
            >
              {hero.secondaryCta.label}
            </a>
          </div>
        </div>

        <div className="relative">
          <MediaPlaceholder
            src={hero.image}
            alt="VinEco coffee wood dog chew"
            className="aspect-[4/5] rounded-[2rem] shadow-2xl shadow-ink/10 sm:rounded-[2.5rem]"
            badge="100% Natural"
            eager
          />
          <a
            href="#brand-video"
            className="focus-ring absolute bottom-5 left-5 right-5 flex items-center gap-3 rounded-2xl bg-white/92 p-3.5 shadow-xl backdrop-blur sm:bottom-6 sm:left-6 sm:right-auto sm:min-w-64"
          >
            <span className="grid size-11 place-items-center rounded-full bg-ink text-white">
              <Icon name="play" className="ml-0.5 size-4 fill-current" />
            </span>
            <span>
              <span className="block text-xs font-semibold text-ink/45">Watch brand story</span>
              <span className="mt-0.5 block text-sm font-bold">Inside VinEco</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}

