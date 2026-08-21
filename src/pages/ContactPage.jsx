import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import GoogleMapEmbed from "../components/ui/GoogleMapEmbed";
import Reveal from "../components/ui/Reveal";
import SiteIcon from "../components/ui/SiteIcon";

import { projectData } from "../data/projectData";
import { mapEmbedHtml } from "../data/mapEmbed";

function InfoCard({
  icon,
  label,
  children,
}) {
  return (
    <div className="flex gap-4 rounded-[22px] border border-brand-500/45 bg-white p-5 sm:p-6">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-ink">
        <SiteIcon
          name={icon}
          size={19}
        />
      </div>

      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-ink/45">
          {label}
        </p>

        <div className="mt-1 text-sm font-semibold leading-6 text-ink">
          {children}
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const name = formData.get("name") || "";
    const company = formData.get("company") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "";
    const interest = formData.get("interest") || "";
    const message = formData.get("message") || "";

    const subject = encodeURIComponent(
      `[VinEco Website] ${interest} - ${name}`,
    );

    const body = encodeURIComponent(
      [
        `Full name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Interested in: ${interest}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    window.location.href =
      `mailto:${projectData.contact.salesEmail}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      <Header />

      <main>
        <section className="relative overflow-hidden border-b border-brand-500/30 bg-[#fffaf3] px-4 py-20 text-ink sm:px-6 sm:py-24 lg:py-28">
          <div className="absolute -left-20 top-10 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl" />
          <div className="absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-brand-500/10 blur-3xl" />

          <Reveal>
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="mx-auto mb-5 flex items-center justify-center gap-3">
                <span className="h-px w-10 bg-brand-500" />
                <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-brand-600">
                  Contact Us
                </p>
                <span className="h-px w-10 bg-brand-500" />
              </div>

              <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
                Let's build
                <span className="block">
                  something together.
                </span>
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-ink/65 sm:text-base">
                Whether you need samples, a quotation or an OEM / ODM partnership, our team is ready to help.
              </p>
            </div>
          </Reveal>
        </section>

        <section className="bg-[#f8fafc] py-14 sm:py-18 lg:py-20">
          <div className="mx-auto grid max-w-[1180px] items-start gap-8 px-4 sm:px-6 lg:grid-cols-[.9fr_1.1fr] lg:gap-10 lg:px-8">
            <Reveal variant="left">
              <form
                onSubmit={handleSubmit}
                className="rounded-[28px] border-2 border-brand-500 bg-white p-5 shadow-[0_18px_55px_rgba(255,164,18,0.10)] sm:p-7"
              >
                <h2 className="text-2xl font-extrabold tracking-[-0.03em] text-ink">
                  Send us a message
                </h2>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-ink/70">
                      Full name *
                    </span>

                    <input
                      required
                      name="name"
                      autoComplete="name"
                      placeholder="John Smith"
                      className="h-12 w-full rounded-xl border border-ink/12 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-ink/70">
                      Company
                    </span>

                    <input
                      name="company"
                      autoComplete="organization"
                      placeholder="Acme Inc."
                      className="h-12 w-full rounded-xl border border-ink/12 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-ink/70">
                      Email *
                    </span>

                    <input
                      required
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="john@acme.com"
                      className="h-12 w-full rounded-xl border border-ink/12 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-xs font-bold text-ink/70">
                      Phone / Zalo
                    </span>

                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      inputMode="tel"
                      placeholder="+84 ..."
                      className="h-12 w-full rounded-xl border border-ink/12 bg-white px-4 text-sm text-ink outline-none transition placeholder:text-ink/30 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                    />
                  </label>
                </div>

                <label className="mt-5 block">
                  <span className="mb-2 block text-xs font-bold text-ink/70">
                    I'm interested in
                  </span>

                  <select
                    name="interest"
                    className="h-12 w-full rounded-xl border border-ink/12 bg-white px-4 text-sm text-ink outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                  >
                    <option>
                      Product quotation
                    </option>
                    <option>
                      Free sample
                    </option>
                    <option>
                      OEM manufacturing
                    </option>
                    <option>
                      ODM development
                    </option>
                    <option>
                      Private label
                    </option>
                  </select>
                </label>

                <label className="mt-5 block">
                  <span className="mb-2 block text-xs font-bold text-ink/70">
                    Message *
                  </span>

                  <textarea
                    required
                    name="message"
                    rows="6"
                    placeholder="Tell us about your project, product specs, target quantity and timeline..."
                    className="w-full resize-y rounded-xl border border-ink/12 bg-white px-4 py-3 text-sm leading-6 text-ink outline-none transition placeholder:text-ink/30 focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10"
                  />
                </label>

                <button
                  type="submit"
                  className="mt-6 flex h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-brand-500 bg-white text-sm font-extrabold text-ink transition hover:-translate-y-0.5 hover:bg-brand-50"
                >
                  Send message
                  <SiteIcon
                    name="send"
                    size={16}
                  />
                </button>

                <p className="mt-4 text-center text-[11px] leading-5 text-ink/40">
                  Static website mode: submitting opens your email application with the enquiry pre-filled.
                </p>
              </form>
            </Reveal>

            <div className="space-y-3">
              <Reveal variant="right">
                <InfoCard
                  icon="mail"
                  label="Email"
                >
                  <a
                    href={`mailto:${projectData.contact.salesEmail}`}
                    className="hover:text-brand-600"
                  >
                    {projectData.contact.salesEmail}
                  </a>
                </InfoCard>
              </Reveal>

              <Reveal
                variant="right"
                delay={50}
              >
                <InfoCard
                  icon="phone"
                  label="Phone / Zalo"
                >
                  <a
                    href={projectData.contact.zaloUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-brand-600"
                  >
                    {projectData.contact.phone}
                  </a>
                </InfoCard>
              </Reveal>

              <Reveal
                variant="right"
                delay={100}
              >
                <InfoCard
                  icon="pin"
                  label="Office"
                >
                  {projectData.contact.office}
                </InfoCard>
              </Reveal>

              <Reveal
                variant="right"
                delay={150}
              >
                <InfoCard
                  icon="factory"
                  label="Factory"
                >
                  {projectData.contact.factory}
                </InfoCard>
              </Reveal>

              <Reveal
                variant="right"
                delay={200}
              >
                <InfoCard
                  icon="clock"
                  label="Business Hours"
                >
                  {projectData.contact.hours}
                </InfoCard>
              </Reveal>

              <Reveal
                variant="right"
                delay={250}
              >
                <div className="rounded-[22px] border-2 border-brand-500 bg-white p-6 text-ink">
                  <p className="text-lg font-extrabold">
                    Fast response for B2B enquiries
                  </p>

                  <p className="mt-2 text-sm leading-6 text-ink/65">
                    For urgent requests, contact VinEco directly through Zalo or email.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* GOOGLE MAP */}
        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="mb-8 max-w-2xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand-600">
                  Find VinEco
                </p>

                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-ink sm:text-4xl">
                  Visit our Vietnam office.
                </h2>

                <p className="mt-4 text-sm leading-7 text-ink/55">
                  {projectData.contact.office}
                </p>
              </div>
            </Reveal>

            <Reveal variant="zoom">
              <GoogleMapEmbed
                html={mapEmbedHtml}
                title="VinEco office Google Map"
                address={projectData.contact.office}
              />
            </Reveal>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactDock />
    </>
  );
}