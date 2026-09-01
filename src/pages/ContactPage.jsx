import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import GoogleMapEmbed from "../components/ui/GoogleMapEmbed";
import Reveal from "../components/ui/Reveal";
import SiteIcon from "../components/ui/SiteIcon";

import { projectData } from "../data/projectData";
import { mapEmbedHtml } from "../data/mapEmbed";


function ContactCard({ icon, eyebrow, title, children, dark = false }) {
  return (
    <article
      className={[
        "rounded-[22px] border p-5 transition duration-300 sm:p-6",
        "hover:-translate-y-1",
        dark
          ? "border-white/10 bg-[#0F2F24] text-white"
          : "border-[#1E2A24]/10 bg-white text-[#1E2A24] hover:border-[#F59E0B]/60",
      ].join(" ")}
    >
      <div className="flex items-start gap-4">
        <span
          className={[
            "flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px]",
            dark
              ? "bg-[#F59E0B] text-[#0F2F24]"
              : "bg-[#FFF3D6] text-[#D97706]",
          ].join(" ")}
        >
          <SiteIcon name={icon} size={18} strokeWidth={2} />
        </span>

        <div className="min-w-0">
          <p
            className={[
              "text-[10px] font-extrabold uppercase tracking-[0.18em]",
              dark ? "text-[#F59E0B]" : "text-[#D97706]",
            ].join(" ")}
          >
            {eyebrow}
          </p>

          <h3 className="mt-1.5 text-[21px] font-black leading-tight tracking-[-0.03em]">
            {title}
          </h3>

          <div
            className={[
              "mt-2 break-words text-[14px] font-medium leading-6 sm:text-[15px]",
              dark ? "text-white/65" : "text-[#5F625E]",
            ].join(" ")}
          >
            {children}
          </div>
        </div>
      </div>
    </article>
  );
}


export default function ContactPage() {
  const contact = projectData.contact;

  function handleSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const name = data.get("name") || "";
    const company = data.get("company") || "";
    const email = data.get("email") || "";
    const phone = data.get("phone") || "";
    const interest = data.get("interest") || "";
    const message = data.get("message") || "";

    const subject = encodeURIComponent(
      `[VinEco Website] ${interest} - ${name}`,
    );

    const body = encodeURIComponent(
      [
        `Full name: ${name}`,
        `Company: ${company}`,
        `Email: ${email}`,
        `Phone / WhatsApp: ${phone}`,
        `Interested in: ${interest}`,
        "",
        "Message:",
        message,
      ].join("\n"),
    );

    window.location.href =
      `mailto:${contact.salesEmail}?subject=${subject}&body=${body}`;
  }


  const inputClass = [
    "h-[50px] w-full rounded-[14px]",
    "border border-[#1E2A24]/12 bg-[#FAF8F5]",
    "px-4 text-[13px] font-medium text-[#1E2A24]",
    "outline-none transition duration-200",
    "placeholder:text-[#1E2A24]/30",
    "hover:border-[#F59E0B]/50",
    "focus:border-[#F59E0B] focus:bg-white",
    "focus:ring-4 focus:ring-[#F59E0B]/10",
  ].join(" ");


  return (
    <>
      <Header />

      <main className="overflow-hidden bg-[#FAF8F5]">

        {/* =================================================
            HERO
        ================================================= */}

        <section className="relative overflow-hidden bg-[#0F2F24] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div
            aria-hidden="true"
            className="absolute -left-32 -top-32 h-[360px] w-[360px] rounded-full border-[70px] border-white/[0.025]"
          />

          <div
            aria-hidden="true"
            className="absolute -bottom-40 right-[8%] h-[360px] w-[360px] rounded-full bg-[#F59E0B]/[0.04] blur-3xl"
          />

          <Reveal>
            <div className="relative mx-auto max-w-[900px] text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="h-px w-8 bg-[#F59E0B]" />
                <p className="text-[9px] font-extrabold uppercase tracking-[0.3em] text-[#F59E0B] sm:text-[10px]">
                  Contact Us
                </p>
                <span className="h-px w-8 bg-[#F59E0B]" />
              </div>

              <h1 className="mx-auto mt-5 max-w-[820px] text-[clamp(2.6rem,6vw,5rem)] font-extrabold leading-[0.95] tracking-[-0.06em] text-white">
                Let's build
                <span className="block">something together.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-[680px] text-[14px] font-medium leading-7 text-white/58 sm:text-[17px] sm:leading-8">
                Whether you need a quotation, samples, or a full OEM / ODM
                partnership — our team is ready to help.
              </p>

              <div className="mt-7 flex flex-wrap justify-center gap-2">
                {["OEM / ODM", "Private Label", "50 Units MOQ", "Vietnam"].map(
                  (item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-white/70"
                    >
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </Reveal>
        </section>


        {/* =================================================
            MAIN CONTACT
        ================================================= */}

        <section className="py-14 sm:py-18 lg:py-22">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

            <Reveal>
              <div className="mb-9 lg:mb-12">
                <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#D97706]">
                  Start A Conversation
                </p>

                <div className="mt-3 grid gap-4 lg:grid-cols-[1fr_.7fr] lg:items-end">
                  <h2 className="max-w-[680px] text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-[0.96] tracking-[-0.05em] text-[#1E2A24]">
                    Tell us about
                    <span className="text-[#F59E0B]"> your project.</span>
                  </h2>

                  <p className="max-w-[500px] text-[13px] font-medium leading-6 text-[#6A645D] lg:justify-self-end lg:text-right">
                    Send us your product requirements, target quantity,
                    packaging direction and expected timeline.
                  </p>
                </div>
              </div>
            </Reveal>


            <div className="grid gap-6 lg:grid-cols-[1.02fr_.98fr] lg:gap-8">

              {/* FORM */}
              <Reveal variant="left">
                <form
                  onSubmit={handleSubmit}
                  className="overflow-hidden rounded-[28px] border border-[#1E2A24]/10 bg-white shadow-[0_22px_60px_rgba(30,42,36,0.07)]"
                >
                  <div className="border-b border-[#1E2A24]/10 px-5 py-6 sm:px-7">
                    <p className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#D97706]">
                      Enquiry Form
                    </p>

                    <h3 className="mt-2 text-[27px] font-extrabold tracking-[-0.04em] text-[#1E2A24]">
                      Send us a message
                    </h3>

                    <p className="mt-2 max-w-[470px] text-[12px] font-medium leading-6 text-[#6A645D]">
                      Our sales team will review your enquiry and get back to you
                      as soon as possible.
                    </p>
                  </div>


                  <div className="p-5 sm:p-7">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label>
                        <span className="mb-2 block text-[11px] font-bold text-[#3D5245]">
                          Full name *
                        </span>
                        <input
                          required
                          name="name"
                          autoComplete="name"
                          placeholder="John Smith"
                          className={inputClass}
                        />
                      </label>

                      <label>
                        <span className="mb-2 block text-[11px] font-bold text-[#3D5245]">
                          Company
                        </span>
                        <input
                          name="company"
                          autoComplete="organization"
                          placeholder="Acme Inc."
                          className={inputClass}
                        />
                      </label>

                      <label>
                        <span className="mb-2 block text-[11px] font-bold text-[#3D5245]">
                          Email *
                        </span>
                        <input
                          required
                          type="email"
                          name="email"
                          autoComplete="email"
                          placeholder="john@acme.com"
                          className={inputClass}
                        />
                      </label>

                      <label>
                        <span className="mb-2 block text-[11px] font-bold text-[#3D5245]">
                          Phone / WhatsApp
                        </span>
                        <input
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          placeholder="+84 ..."
                          className={inputClass}
                        />
                      </label>
                    </div>


                    <label className="mt-4 block">
                      <span className="mb-2 block text-[11px] font-bold text-[#3D5245]">
                        I'm interested in
                      </span>

                      <select
                        name="interest"
                        defaultValue="Product quotation"
                        className={inputClass}
                      >
                        <option>Product quotation</option>
                        <option>Free sample</option>
                        <option>OEM manufacturing</option>
                        <option>ODM development</option>
                        <option>Private Label</option>
                        <option>Packaging & branding</option>
                      </select>
                    </label>


                    <label className="mt-4 block">
                      <span className="mb-2 block text-[11px] font-bold text-[#3D5245]">
                        Message *
                      </span>

                      <textarea
                        required
                        rows="6"
                        name="message"
                        placeholder="Tell us about your project, product specs, target quantity, packaging needs and timeline..."
                        className="min-h-[150px] w-full resize-y rounded-[14px] border border-[#1E2A24]/12 bg-[#FAF8F5] px-4 py-3 text-[13px] font-medium leading-6 text-[#1E2A24] outline-none transition placeholder:text-[#1E2A24]/30 hover:border-[#F59E0B]/50 focus:border-[#F59E0B] focus:bg-white focus:ring-4 focus:ring-[#F59E0B]/10"
                      />
                    </label>


                    <button
                      type="submit"
                      className="mt-5 flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full bg-[#0F2F24] px-6 text-[13px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#3D5245]"
                    >
                      Send message
                      <SiteIcon name="send" size={16} />
                    </button>

                    <p className="mt-4 text-center text-[10px] font-medium leading-5 text-[#6A645D]/70">
                      By submitting, you agree to our privacy policy. We never share your data.
                    </p>
                  </div>
                </form>
              </Reveal>


              {/* CONTACT INFORMATION */}
              <div className="space-y-4">
                <Reveal variant="right">
                  <div className="rounded-[24px] bg-[#0F2F24] p-5 text-white sm:p-6">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F59E0B]">
                      Direct Contact
                    </p>

                    <h3 className="mt-2 text-[29px] font-black tracking-[-0.04em]">
                      Talk directly with VinEco.
                    </h3>

                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      <a
                        href={`mailto:${contact.salesEmail}`}
                        className="rounded-[14px] border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:bg-white/[0.1]"
                      >
                        <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">
                          Sales
                        </span>
                        <strong className="mt-1 block text-[14px]">
                          {contact.salesEmail}
                        </strong>
                      </a>

                      <a
                        href={contact.whatsappUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-[14px] border border-white/10 bg-white/[0.06] px-4 py-3 transition hover:bg-white/[0.1]"
                      >
                        <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-white/40">
                          WhatsApp
                        </span>
                        <strong className="mt-1 block text-[14px]">
                          {contact.phone}
                        </strong>
                      </a>
                    </div>
                  </div>
                </Reveal>


                {/* WEBSITES */}
                <Reveal variant="right" delay={40}>
                  <article className="rounded-[22px] border border-[#1E2A24]/10 bg-white p-5 sm:p-6">
                    <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#D97706]">
                      Websites
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {contact.websites?.map((site) => (
                        <a
                          key={site.url}
                          href={site.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-[38px] items-center rounded-full border border-[#1E2A24]/10 bg-[#FAF8F5] px-4 text-[13px] font-bold text-[#0F2F24] transition hover:border-[#F59E0B] hover:text-[#D97706]"
                        >
                          {site.label}
                        </a>
                      ))}
                    </div>
                  </article>
                </Reveal>


                <div className="grid gap-4 sm:grid-cols-2">
                  <Reveal variant="right" delay={70}>
                    <ContactCard
                      icon="factory"
                      eyebrow="Factory"
                      title="Gia Lai"
                    >
                      {contact.factory}
                    </ContactCard>
                  </Reveal>

                  <Reveal variant="right" delay={100}>
                    <ContactCard
                      icon="pin"
                      eyebrow="Office"
                      title="Ho Chi Minh City"
                    >
                      {contact.office}
                    </ContactCard>
                  </Reveal>
                </div>


                <Reveal variant="right" delay={130}>
                  <ContactCard
                    icon="clock"
                    eyebrow="Business Hours"
                    title="Monday – Friday"
                  >
                    8:00 AM – 5:00 PM / GMT+7
                  </ContactCard>
                </Reveal>


                {/* RESPONSE */}
                <Reveal variant="right" delay={160}>
                  <article className="relative overflow-hidden rounded-[24px] bg-[#0F2F24] p-6 text-white">
                    <div
                      aria-hidden="true"
                      className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-white/[0.05]"
                    />

                    <div className="relative">
                      <p className="text-[10px] font-extrabold uppercase tracking-[0.18em] text-[#F59E0B]">
                        Fast Response
                      </p>

                      <h3 className="mt-2 text-[27px] font-black tracking-[-0.04em]">
                        Fast response guaranteed.
                      </h3>

                      <p className="mt-3 max-w-[560px] text-[15px] font-medium leading-6 text-white/70">
                        We respond to all inquiries within 24 hours during
                        business days. For urgent matters, use WhatsApp.
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        <a
                          href={contact.whatsappUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex min-h-[42px] items-center justify-center rounded-full bg-[#F59E0B] px-5 text-[11px] font-extrabold text-[#0F2F24] transition hover:-translate-y-0.5 hover:bg-[#D97706]"
                        >
                          WhatsApp
                        </a>
                      </div>
                    </div>
                  </article>
                </Reveal>
              </div>
            </div>
          </div>
        </section>


        {/* =================================================
            MAP
        ================================================= */}

        <section className="bg-white py-14 sm:py-18 lg:py-20">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

            <Reveal>
              <div className="mb-7 grid gap-4 lg:grid-cols-[1fr_.7fr] lg:items-end">
                <div>
                  <p className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-[#D97706]">
                    Find VinEco
                  </p>

                  <h2 className="mt-3 text-[clamp(2rem,4vw,3.2rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#1E2A24]">
                    Visit our
                    <span className="text-[#F59E0B]"> Vietnam office.</span>
                  </h2>
                </div>

                <p className="text-[12px] font-medium leading-6 text-[#6A645D] lg:text-right">
                  {contact.office}
                </p>
              </div>
            </Reveal>


            <Reveal variant="zoom">
              <div className="overflow-hidden rounded-[26px] border border-[#1E2A24]/10 bg-[#F4F1EA] p-2 shadow-[0_18px_48px_rgba(30,42,36,.06)]">
                <GoogleMapEmbed
                  html={mapEmbedHtml}
                  title="VinEco office Google Map"
                  address={contact.office}
                />
              </div>
            </Reveal>

          </div>
        </section>


        {/* =================================================
            FINAL CTA
        ================================================= */}

        <section className="bg-white pb-16 sm:pb-20 lg:pb-24">
          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

            <Reveal variant="zoom">
              <div className="relative overflow-hidden rounded-[28px] bg-[#F59E0B] px-6 py-10 text-center sm:px-10 sm:py-12">
                <div
                  aria-hidden="true"
                  className="absolute -right-20 -top-20 h-60 w-60 rounded-full border-[45px] border-white/[0.12]"
                />

                <div className="relative">
                  <p className="text-[8px] font-extrabold uppercase tracking-[0.2em] text-[#0F2F24]/55">
                    VinEco B2B
                  </p>

                  <h2 className="mx-auto mt-3 max-w-[720px] text-[clamp(2rem,4vw,3.3rem)] font-extrabold leading-[0.98] tracking-[-0.05em] text-[#0F2F24]">
                    Your next product starts with one conversation.
                  </h2>

                  <a
                    href={`mailto:${contact.salesEmail}`}
                    className="mt-7 inline-flex min-h-[50px] items-center justify-center gap-2 rounded-full bg-[#0F2F24] px-7 text-[12px] font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-[#3D5245]"
                  >
                    Start your enquiry
                    <SiteIcon name="arrow" size={15} />
                  </a>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

      </main>

      <Footer />
      <FloatingContactDock />
    </>
  );
}