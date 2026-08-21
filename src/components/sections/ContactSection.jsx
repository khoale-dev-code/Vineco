import { useState } from 'react'
import { siteContent } from '../../data/siteContent'
import { Icon } from '../ui/Icon'
import { SocialMark } from '../ui/SocialMark'
import { SectionHeading } from '../ui/SectionHeading'

function ContactRow({ icon, children, href }) {
  const content = (
    <>
      <Icon name={icon} className="mt-0.5 size-4 shrink-0 text-brand-300" />
      <span>{children}</span>
    </>
  )

  return href ? (
    <a href={href} className="focus-ring flex items-start gap-3 rounded-lg text-white/70 transition hover:text-white">{content}</a>
  ) : (
    <div className="flex items-start gap-3 text-white/70">{content}</div>
  )
}

export function ContactSection() {
  const [status, setStatus] = useState('idle')
  const { contact, socials } = siteContent

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT?.trim()

    if (formData.get('company_website')) return

    if (endpoint) {
      try {
        setStatus('sending')
        const response = await fetch(endpoint, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        })
        if (!response.ok) throw new Error('Submit failed')
        form.reset()
        setStatus('success')
      } catch {
        setStatus('error')
      }
      return
    }

    const subject = `Website inquiry from ${formData.get('name') || 'a buyer'}`
    const body = [
      `Name: ${formData.get('name') || ''}`,
      `Company: ${formData.get('company') || ''}`,
      `Email: ${formData.get('email') || ''}`,
      `Phone: ${formData.get('phone') || ''}`,
      '',
      `${formData.get('message') || ''}`,
    ].join('\n')

    window.location.href = `mailto:${contact.emailPrimary}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
  }

  const directLinks = [
    ['zalo', 'Zalo', socials.zalo],
    ['messenger', 'Messenger', socials.messenger],
  ]

  return (
    <section id="contact" className="section-y bg-ink text-white">
      <div className="section-shell grid gap-8 lg:grid-cols-[.86fr_1.14fr] lg:gap-14">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start with one simple conversation."
            description="No shopping flow and no account. The website’s conversion goal is a qualified B2B inquiry."
            inverse
          />

          <div className="mt-8 space-y-4 text-sm">
            <ContactRow icon="mail" href={`mailto:${contact.emailPrimary}`}>
              {contact.emailPrimary}<br />{contact.emailSales}
            </ContactRow>
            <ContactRow icon="phone" href={`tel:${contact.phone}`}>{contact.phoneDisplay}</ContactRow>
            <ContactRow icon="mapPin">
              {contact.factory}<br /><span className="mt-1 block">{contact.office}</span>
            </ContactRow>
            <ContactRow icon="clock">{contact.hours}</ContactRow>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {directLinks.map(([network, label, href]) => {
              const disabled = href === '#'
              return (
                <a
                  key={network}
                  href={href}
                  target={disabled ? undefined : '_blank'}
                  rel={disabled ? undefined : 'noreferrer'}
                  onClick={disabled ? (event) => event.preventDefault() : undefined}
                  className={`focus-ring inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2.5 text-sm font-bold transition ${
                    disabled ? 'cursor-not-allowed text-white/35' : 'text-white hover:bg-white/10'
                  }`}
                >
                  <SocialMark network={network} className="text-white" /> {label}
                </a>
              )
            })}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="rounded-[2rem] bg-white p-5 text-ink shadow-2xl shadow-black/10 sm:p-7 lg:p-8">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">
              Name
              <input name="name" autoComplete="name" required className="form-field mt-2" placeholder="Your name" />
            </label>
            <label className="text-sm font-semibold">
              Company
              <input name="company" autoComplete="organization" className="form-field mt-2" placeholder="Company / Brand" />
            </label>
            <label className="text-sm font-semibold">
              Phone
              <input name="phone" autoComplete="tel" inputMode="tel" className="form-field mt-2" placeholder="Phone / WhatsApp / Zalo" />
            </label>
            <label className="text-sm font-semibold">
              Email
              <input name="email" autoComplete="email" type="email" required className="form-field mt-2" placeholder="you@company.com" />
            </label>
            <label className="text-sm font-semibold sm:col-span-2">
              Message
              <textarea name="message" rows="5" className="form-field mt-2 min-h-32 resize-y py-3" placeholder="Tell us what product or OEM/ODM service you are looking for..." />
            </label>
            <label className="hidden" aria-hidden="true">
              Website
              <input name="company_website" tabIndex="-1" autoComplete="off" />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === 'sending'}
            className="focus-ring mt-5 inline-flex min-h-13 w-full items-center justify-center gap-2 rounded-full bg-brand-500 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-brand-600 disabled:cursor-wait disabled:opacity-60"
          >
            {status === 'sending' ? 'Sending…' : 'Send inquiry'} <Icon name="arrowUpRight" className="size-4" />
          </button>

          <div className="mt-3 min-h-5 text-center text-xs leading-5 text-ink/45" role="status" aria-live="polite">
            {status === 'success' ? 'Thanks — your inquiry was sent.' : null}
            {status === 'error' ? 'Could not send. Please use email or Zalo instead.' : null}
            {status === 'idle' ? 'Without VITE_CONTACT_ENDPOINT, the form opens the visitor’s email app.' : null}
          </div>
        </form>
      </div>
    </section>
  )
}
