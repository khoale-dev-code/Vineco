export function SectionHeading({ eyebrow, title, description, align = 'left', inverse = false }) {
  const centered = align === 'center'
  const titleColor = inverse ? 'text-white' : 'text-ink'
  const descriptionColor = inverse ? 'text-white/65' : 'text-ink/65'

  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow ? (
        <p className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] sm:text-sm ${inverse ? 'text-brand-300' : 'text-brand-600'}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-3xl font-bold tracking-[-0.045em] sm:text-4xl lg:text-5xl ${titleColor}`}>
        {title}
      </h2>
      {description ? (
        <p className={`mt-5 text-pretty text-base leading-7 sm:text-lg sm:leading-8 ${descriptionColor}`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
