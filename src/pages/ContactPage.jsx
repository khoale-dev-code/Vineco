import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";

import GoogleMapEmbed from "../components/ui/GoogleMapEmbed";
import Reveal from "../components/ui/Reveal";
import SiteIcon from "../components/ui/SiteIcon";

import {
  projectData,
} from "../data/projectData";

import {
  mapEmbedHtml,
} from "../data/mapEmbed";


function HeroChip({
  children,
}) {
  return (
    <span
      className={[
        "inline-flex items-center",
        "rounded-full",
        "border border-[#03326b]/12",
        "bg-white/24",
        "px-3.5 py-2",
        "text-[10px]",
        "font-extrabold uppercase",
        "tracking-[0.08em]",
        "text-[#03326b]/70",
        "backdrop-blur-sm",
      ].join(" ")}
    >
      {children}
    </span>
  );
}


function InfoCard({
  icon,
  label,
  title,
  children,
  href,
  external = false,
  featured = false,
}) {
  const content = href ? (
    <a
      href={href}
      target={
        external
          ? "_blank"
          : undefined
      }
      rel={
        external
          ? "noreferrer"
          : undefined
      }
      className="transition hover:text-[#e89400]"
    >
      {children}
    </a>
  ) : (
    children
  );


  return (
    <article
      className={[
        "group",
        "relative overflow-hidden",
        "rounded-[26px]",
        "border",
        "p-5",
        "transition duration-300",
        "hover:-translate-y-1",
        "sm:p-6",
        featured
          ? [
              "border-[#ffa412]",
              "bg-[#fff3d7]",
              "shadow-[0_18px_45px_rgba(255,164,18,.14)]",
            ].join(" ")
          : [
              "border-[#ffa412]/30",
              "bg-white",
              "shadow-[0_15px_38px_rgba(3,50,107,.045)]",
              "hover:border-[#ffa412]/70",
              "hover:shadow-[0_20px_46px_rgba(255,164,18,.10)]",
            ].join(" "),
      ].join(" ")}
    >

      <div
        aria-hidden="true"
        className={[
          "pointer-events-none",
          "absolute",
          "-right-10 -top-10",
          "h-28 w-28",
          "rounded-full",
          featured
            ? "bg-[#ffa412]/18"
            : "bg-[#ffa412]/8",
        ].join(" ")}
      />


      <div className="relative flex gap-4">

        <span
          className={[
            "flex h-12 w-12",
            "shrink-0",
            "items-center justify-center",
            "rounded-2xl",
            "bg-[#ffa412]",
            "text-[#03326b]",
            "shadow-[0_10px_24px_rgba(255,164,18,.22)]",
            "transition-transform duration-300",
            "group-hover:scale-105",
          ].join(" ")}
        >
          <SiteIcon
            name={icon}
            size={20}
            strokeWidth={2}
          />
        </span>


        <div className="min-w-0">

          <p
            className={[
              "text-[9px]",
              "font-extrabold uppercase",
              "tracking-[0.18em]",
              "text-[#e89400]",
            ].join(" ")}
          >
            {label}
          </p>


          <h3
            className={[
              "mt-1",
              "text-[17px]",
              "font-extrabold",
              "leading-tight",
              "tracking-[-0.03em]",
              "text-[#03326b]",
            ].join(" ")}
          >
            {title}
          </h3>


          <div className="mt-2 break-words text-[13px] font-medium leading-6 text-[#03326b]/65">
            {content}
          </div>

        </div>

      </div>

    </article>
  );
}


export default function ContactPage() {

  function handleSubmit(event) {
    event.preventDefault();

    const formData =
      new FormData(
        event.currentTarget,
      );

    const name =
      formData.get("name") || "";

    const company =
      formData.get("company") || "";

    const email =
      formData.get("email") || "";

    const phone =
      formData.get("phone") || "";

    const interest =
      formData.get("interest") || "";

    const message =
      formData.get("message") || "";


    const subject =
      encodeURIComponent(
        `[VinEco Website] ${interest} - ${name}`,
      );


    const body =
      encodeURIComponent(
        [
          `Full name: ${name}`,
          `Company: ${company}`,
          `Email: ${email}`,
          `Phone / Zalo: ${phone}`,
          `Interested in: ${interest}`,
          "",
          "Message:",
          message,
        ].join("\n"),
      );


    window.location.href =
      `mailto:${projectData.contact.salesEmail}?subject=${subject}&body=${body}`;
  }


  const fieldClass = [
    "h-12 w-full",
    "rounded-2xl",
    "border border-[#ffa412]/25",
    "bg-[#fffdf8]",
    "px-4",
    "text-sm",
    "text-[#03326b]",
    "outline-none",
    "transition duration-200",
    "placeholder:text-[#03326b]/27",
    "hover:border-[#ffa412]/50",
    "focus:border-[#ffa412]",
    "focus:bg-white",
    "focus:ring-4",
    "focus:ring-[#ffa412]/12",
  ].join(" ");


  return (
    <>

      <Header />


      <main className="overflow-hidden bg-[#fffaf3]">


        {/* ==================================================
            HERO - ORANGE FIRST
        ================================================== */}

        <section
          className={[
            "relative overflow-hidden",
            "bg-[#ffa412]",
            "px-4",
            "py-20",
            "sm:px-6 sm:py-24",
            "lg:px-8 lg:py-28",
          ].join(" ")}
        >

          {/* DECOR */}

          <div
            aria-hidden="true"
            className={[
              "pointer-events-none",
              "absolute",
              "-left-24 -top-24",
              "h-[360px] w-[360px]",
              "rounded-full",
              "border-[70px]",
              "border-white/14",
            ].join(" ")}
          />


          <div
            aria-hidden="true"
            className={[
              "pointer-events-none",
              "absolute",
              "-bottom-36 right-[5%]",
              "h-[420px] w-[420px]",
              "rounded-full",
              "bg-white/11",
            ].join(" ")}
          />


          <div
            aria-hidden="true"
            className={[
              "pointer-events-none",
              "absolute",
              "right-[18%] top-[20%]",
              "h-48 w-48",
              "rounded-full",
              "bg-[#03326b]/8",
              "blur-3xl",
            ].join(" ")}
          />


          <Reveal>

            <div
              className={[
                "relative",
                "mx-auto",
                "max-w-[880px]",
                "text-center",
              ].join(" ")}
            >


              {/* EYEBROW */}

              <div className="flex items-center justify-center gap-3">

                <span className="h-px w-10 bg-[#03326b]/35" />

                <p
                  className={[
                    "text-[10px]",
                    "font-extrabold uppercase",
                    "tracking-[0.3em]",
                    "text-[#03326b]/65",
                  ].join(" ")}
                >
                  Contact Us
                </p>

                <span className="h-px w-10 bg-[#03326b]/35" />

              </div>


              {/* TITLE */}

              <h1
                className={[
                  "mt-5",
                  "text-balance",
                  "text-[clamp(3rem,7vw,5.6rem)]",
                  "font-extrabold",
                  "leading-[0.9]",
                  "tracking-[-0.07em]",
                  "text-[#03326b]",
                ].join(" ")}
              >
                Let's build
                <span className="block text-white">
                  something together.
                </span>
              </h1>


              {/* DESCRIPTION */}

              <p
                className={[
                  "mx-auto mt-6",
                  "max-w-[700px]",
                  "text-pretty",
                  "text-[15px]",
                  "font-medium",
                  "leading-7",
                  "text-[#03326b]/70",
                  "sm:text-[17px]",
                  "sm:leading-8",
                ].join(" ")}
              >
                Whether you need samples, a quotation,
                private label, or a full OEM / ODM partnership,
                our team is ready to help.
              </p>


              {/* CHIPS */}

              <div className="mt-7 flex flex-wrap justify-center gap-2.5">

                <HeroChip>
                  OEM / ODM
                </HeroChip>

                <HeroChip>
                  Private Label
                </HeroChip>

                <HeroChip>
                  50 Units MOQ
                </HeroChip>

                <HeroChip>
                  Vietnam
                </HeroChip>

              </div>


              {/* HERO ACTIONS */}

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

                <a
                  href={`mailto:${projectData.contact.salesEmail}`}
                  className={[
                    "inline-flex min-h-14",
                    "items-center justify-center",
                    "gap-2",
                    "rounded-full",
                    "bg-[#03326b]",
                    "px-7 py-3.5",
                    "text-[13px]",
                    "font-extrabold",
                    "text-white",
                    "shadow-[0_16px_36px_rgba(3,50,107,.22)]",
                    "transition duration-200",
                    "hover:-translate-y-1",
                    "hover:bg-[#022858]",
                  ].join(" ")}
                >
                  Email Sales Team

                  <SiteIcon
                    name="mail"
                    size={16}
                  />

                </a>


                <a
                  href={projectData.contact.zaloUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={[
                    "inline-flex min-h-14",
                    "items-center justify-center",
                    "rounded-full",
                    "border-2 border-[#03326b]/18",
                    "bg-white/22",
                    "px-7 py-3.5",
                    "text-[13px]",
                    "font-extrabold",
                    "text-[#03326b]",
                    "transition duration-200",
                    "hover:-translate-y-1",
                    "hover:bg-white/35",
                  ].join(" ")}
                >
                  Chat on Zalo
                </a>

              </div>

            </div>

          </Reveal>

        </section>


        {/* ==================================================
            CONTACT MAIN AREA
        ================================================== */}

        <section
          className={[
            "relative",
            "bg-[#fffaf3]",
            "py-16",
            "sm:py-20",
            "lg:py-24",
          ].join(" ")}
        >

          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">


            {/* SMALL INTRO */}

            <Reveal>

              <div className="mx-auto mb-10 max-w-[720px] text-center">

                <p
                  className={[
                    "text-[10px]",
                    "font-extrabold uppercase",
                    "tracking-[0.24em]",
                    "text-[#e89400]",
                  ].join(" ")}
                >
                  Start A Conversation
                </p>


                <h2
                  className={[
                    "mt-3",
                    "text-[clamp(2rem,4vw,3.25rem)]",
                    "font-extrabold",
                    "leading-[1]",
                    "tracking-[-0.05em]",
                    "text-[#03326b]",
                  ].join(" ")}
                >
                  Tell us what you want to build.
                </h2>

              </div>

            </Reveal>


            <div
              className={[
                "grid",
                "items-start",
                "gap-8",
                "lg:grid-cols-[.9fr_1.1fr]",
                "lg:gap-10",
              ].join(" ")}
            >


              {/* ==================================================
                  LEFT - FORM
              ================================================== */}

              <Reveal variant="left">

                <div className="lg:sticky lg:top-28">

                  <form
                    onSubmit={handleSubmit}
                    className={[
                      "overflow-hidden",
                      "rounded-[30px]",
                      "border-2 border-[#ffa412]",
                      "bg-white",
                      "shadow-[0_25px_65px_rgba(255,164,18,.13)]",
                    ].join(" ")}
                  >


                    {/* FORM HEADER */}

                    <div
                      className={[
                        "relative overflow-hidden",
                        "bg-[#fff2d5]",
                        "px-5 py-6",
                        "sm:px-7",
                      ].join(" ")}
                    >

                      <div
                        aria-hidden="true"
                        className={[
                          "pointer-events-none",
                          "absolute",
                          "-right-10 -top-12",
                          "h-36 w-36",
                          "rounded-full",
                          "bg-[#ffa412]/24",
                        ].join(" ")}
                      />


                      <span
                        className={[
                          "relative",
                          "inline-flex",
                          "rounded-full",
                          "bg-[#ffa412]",
                          "px-3 py-1.5",
                          "text-[9px]",
                          "font-extrabold uppercase",
                          "tracking-[0.14em]",
                          "text-[#03326b]",
                        ].join(" ")}
                      >
                        Contact VinEco
                      </span>


                      <h3
                        className={[
                          "relative",
                          "mt-4",
                          "text-[28px]",
                          "font-extrabold",
                          "leading-[1]",
                          "tracking-[-0.045em]",
                          "text-[#03326b]",
                        ].join(" ")}
                      >
                        Send us a message
                      </h3>


                      <p
                        className={[
                          "relative",
                          "mt-3",
                          "max-w-[430px]",
                          "text-[13px]",
                          "leading-6",
                          "text-[#03326b]/60",
                        ].join(" ")}
                      >
                        Share your product idea, target quantity,
                        packaging requirements and expected timeline.
                      </p>

                    </div>


                    {/* FIELDS */}

                    <div className="p-5 sm:p-7">

                      <div className="grid gap-5 sm:grid-cols-2">


                        <label>

                          <span className="mb-2 block text-[11px] font-bold text-[#03326b]/70">
                            Full name *
                          </span>

                          <input
                            required
                            name="name"
                            autoComplete="name"
                            placeholder="John Smith"
                            className={fieldClass}
                          />

                        </label>


                        <label>

                          <span className="mb-2 block text-[11px] font-bold text-[#03326b]/70">
                            Company
                          </span>

                          <input
                            name="company"
                            autoComplete="organization"
                            placeholder="Acme Inc."
                            className={fieldClass}
                          />

                        </label>


                        <label>

                          <span className="mb-2 block text-[11px] font-bold text-[#03326b]/70">
                            Email *
                          </span>

                          <input
                            required
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="john@acme.com"
                            className={fieldClass}
                          />

                        </label>


                        <label>

                          <span className="mb-2 block text-[11px] font-bold text-[#03326b]/70">
                            Phone / Zalo
                          </span>

                          <input
                            type="tel"
                            name="phone"
                            autoComplete="tel"
                            inputMode="tel"
                            placeholder="+84 ..."
                            className={fieldClass}
                          />

                        </label>

                      </div>


                      {/* INTEREST */}

                      <label className="mt-5 block">

                        <span className="mb-2 block text-[11px] font-bold text-[#03326b]/70">
                          I'm interested in
                        </span>

                        <select
                          name="interest"
                          defaultValue="Product quotation"
                          className={fieldClass}
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


                      {/* MESSAGE */}

                      <label className="mt-5 block">

                        <span className="mb-2 block text-[11px] font-bold text-[#03326b]/70">
                          Message *
                        </span>

                        <textarea
                          required
                          name="message"
                          rows="6"
                          placeholder="Tell us about your project, product specs, target quantity, packaging needs and timeline..."
                          className={[
                            "w-full",
                            "resize-y",
                            "rounded-2xl",
                            "border border-[#ffa412]/25",
                            "bg-[#fffdf8]",
                            "px-4 py-3",
                            "text-sm",
                            "leading-6",
                            "text-[#03326b]",
                            "outline-none",
                            "transition",
                            "placeholder:text-[#03326b]/27",
                            "hover:border-[#ffa412]/50",
                            "focus:border-[#ffa412]",
                            "focus:bg-white",
                            "focus:ring-4",
                            "focus:ring-[#ffa412]/12",
                          ].join(" ")}
                        />

                      </label>


                      {/* CTA */}

                      <button
                        type="submit"
                        className={[
                          "mt-6",
                          "flex h-13 w-full",
                          "items-center justify-center",
                          "gap-2",
                          "rounded-full",
                          "bg-[#ffa412]",
                          "text-[13px]",
                          "font-extrabold",
                          "text-[#03326b]",
                          "shadow-[0_14px_32px_rgba(255,164,18,.26)]",
                          "transition duration-200",
                          "hover:-translate-y-1",
                          "hover:bg-[#e89400]",
                        ].join(" ")}
                      >
                        Send message

                        <SiteIcon
                          name="send"
                          size={16}
                          strokeWidth={2.2}
                        />

                      </button>


                      <p className="mt-4 text-center text-[10px] leading-5 text-[#03326b]/40">
                        Submitting opens your email application with
                        the enquiry pre-filled.
                      </p>

                    </div>

                  </form>

                </div>

              </Reveal>


              {/* ==================================================
                  RIGHT INFORMATION
              ================================================== */}

              <div className="space-y-4">


                {/* EMAIL + PHONE */}

                <Reveal variant="right">

                  <div className="grid gap-4 sm:grid-cols-2">

                    <InfoCard
                      icon="mail"
                      label="Email"
                      title="Sales Team"
                      href={`mailto:${projectData.contact.salesEmail}`}
                      featured
                    >
                      {projectData.contact.salesEmail}
                    </InfoCard>


                    <InfoCard
                      icon="phone"
                      label="Phone / Zalo"
                      title="Talk to VinEco"
                      href={projectData.contact.zaloUrl}
                      external
                    >
                      {projectData.contact.phone}
                    </InfoCard>

                  </div>

                </Reveal>


                {/* OFFICE */}

                <Reveal
                  variant="right"
                  delay={50}
                >

                  <InfoCard
                    icon="pin"
                    label="Office"
                    title="Ho Chi Minh City"
                  >
                    {projectData.contact.office}
                  </InfoCard>

                </Reveal>


                {/* FACTORY */}

                <Reveal
                  variant="right"
                  delay={100}
                >

                  <InfoCard
                    icon="factory"
                    label="Factory"
                    title="VinEco Production"
                  >
                    {projectData.contact.factory}
                  </InfoCard>

                </Reveal>


                {/* BUSINESS HOURS */}

                <Reveal
                  variant="right"
                  delay={150}
                >

                  <InfoCard
                    icon="clock"
                    label="Business Hours"
                    title="Monday - Friday"
                    featured
                  >
                    {projectData.contact.hours}
                  </InfoCard>

                </Reveal>


                {/* FAST RESPONSE */}

                <Reveal
                  variant="right"
                  delay={200}
                >

                  <div
                    className={[
                      "relative overflow-hidden",
                      "rounded-[26px]",
                      "bg-[#ffa412]",
                      "p-6",
                      "shadow-[0_20px_48px_rgba(255,164,18,.18)]",
                    ].join(" ")}
                  >

                    <div
                      aria-hidden="true"
                      className={[
                        "absolute",
                        "-right-12 -top-12",
                        "h-40 w-40",
                        "rounded-full",
                        "bg-white/16",
                      ].join(" ")}
                    />


                    <div className="relative">

                      <span
                        className={[
                          "flex h-11 w-11",
                          "items-center justify-center",
                          "rounded-2xl",
                          "bg-[#03326b]",
                          "text-white",
                        ].join(" ")}
                      >
                        <SiteIcon
                          name="message"
                          size={19}
                        />
                      </span>


                      <p
                        className={[
                          "mt-5",
                          "text-[9px]",
                          "font-extrabold uppercase",
                          "tracking-[0.18em]",
                          "text-[#03326b]/55",
                        ].join(" ")}
                      >
                        Fast Response
                      </p>


                      <h3
                        className={[
                          "mt-1",
                          "text-[24px]",
                          "font-extrabold",
                          "leading-tight",
                          "tracking-[-0.04em]",
                          "text-[#03326b]",
                        ].join(" ")}
                      >
                        Ready when your project is.
                      </h3>


                      <p className="mt-3 max-w-[520px] text-[13px] font-medium leading-6 text-[#03326b]/65">
                        We usually respond within 24 business hours.
                        For urgent requests, reach us directly by
                        Zalo or email.
                      </p>


                      <div className="mt-5 flex flex-wrap gap-2.5">

                        <a
                          href={projectData.contact.zaloUrl}
                          target="_blank"
                          rel="noreferrer"
                          className={[
                            "inline-flex h-11",
                            "items-center justify-center",
                            "rounded-full",
                            "bg-[#03326b]",
                            "px-5",
                            "text-xs",
                            "font-extrabold",
                            "text-white",
                            "transition",
                            "hover:-translate-y-0.5",
                          ].join(" ")}
                        >
                          Open Zalo
                        </a>


                        <a
                          href={`mailto:${projectData.contact.salesEmail}`}
                          className={[
                            "inline-flex h-11",
                            "items-center justify-center",
                            "rounded-full",
                            "border border-[#03326b]/14",
                            "bg-white/25",
                            "px-5",
                            "text-xs",
                            "font-extrabold",
                            "text-[#03326b]",
                            "transition",
                            "hover:-translate-y-0.5",
                            "hover:bg-white/40",
                          ].join(" ")}
                        >
                          Send Email
                        </a>

                      </div>

                    </div>

                  </div>

                </Reveal>

              </div>

            </div>

          </div>

        </section>


        {/* ==================================================
            MAP
        ================================================== */}

        <section className="bg-white py-16 sm:py-20">

          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

            <Reveal>

              <div
                className={[
                  "mb-8",
                  "grid gap-5",
                  "lg:grid-cols-[1fr_.7fr]",
                  "lg:items-end",
                ].join(" ")}
              >

                <div>

                  <p
                    className={[
                      "text-[10px]",
                      "font-extrabold uppercase",
                      "tracking-[0.22em]",
                      "text-[#e89400]",
                    ].join(" ")}
                  >
                    Find VinEco
                  </p>


                  <h2
                    className={[
                      "mt-3",
                      "text-[clamp(2rem,4vw,3.4rem)]",
                      "font-extrabold",
                      "leading-[1]",
                      "tracking-[-0.05em]",
                      "text-[#03326b]",
                    ].join(" ")}
                  >
                    Visit our Vietnam office.
                  </h2>

                </div>


                <p className="text-[13px] leading-6 text-[#03326b]/55 lg:text-right">
                  {projectData.contact.office}
                </p>

              </div>

            </Reveal>


            <Reveal variant="zoom">

              <div
                className={[
                  "overflow-hidden",
                  "rounded-[30px]",
                  "border-2 border-[#ffa412]",
                  "bg-[#fffaf3]",
                  "p-2",
                  "shadow-[0_20px_55px_rgba(255,164,18,.11)]",
                ].join(" ")}
              >

                <GoogleMapEmbed
                  html={mapEmbedHtml}
                  title="VinEco office Google Map"
                  address={projectData.contact.office}
                />

              </div>

            </Reveal>

          </div>

        </section>


        {/* ==================================================
            FINAL ORANGE CTA
        ================================================== */}

        <section className="bg-white pb-20 sm:pb-24">

          <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">

            <Reveal variant="zoom">

              <div
                className={[
                  "relative overflow-hidden",
                  "rounded-[32px]",
                  "bg-[#ffa412]",
                  "px-6 py-11",
                  "text-center",
                  "shadow-[0_26px_65px_rgba(255,164,18,.19)]",
                  "sm:px-10",
                  "sm:py-13",
                ].join(" ")}
              >

                <div
                  aria-hidden="true"
                  className={[
                    "absolute",
                    "-right-16 -top-16",
                    "h-56 w-56",
                    "rounded-full",
                    "border-[45px]",
                    "border-white/13",
                  ].join(" ")}
                />


                <div className="relative">

                  <p className="text-[9px] font-extrabold uppercase tracking-[0.22em] text-[#03326b]/52">
                    VinEco B2B
                  </p>


                  <h2
                    className={[
                      "mx-auto mt-3",
                      "max-w-[700px]",
                      "text-[clamp(2rem,5vw,3.3rem)]",
                      "font-extrabold",
                      "leading-[0.98]",
                      "tracking-[-0.055em]",
                      "text-[#03326b]",
                    ].join(" ")}
                  >
                    Your next product starts with one conversation.
                  </h2>


                  <a
                    href={`mailto:${projectData.contact.salesEmail}`}
                    className={[
                      "mt-7",
                      "inline-flex min-h-14",
                      "items-center justify-center",
                      "gap-2",
                      "rounded-full",
                      "bg-[#03326b]",
                      "px-7 py-3.5",
                      "text-[13px]",
                      "font-extrabold",
                      "text-white",
                      "shadow-[0_15px_35px_rgba(3,50,107,.22)]",
                      "transition",
                      "hover:-translate-y-1",
                    ].join(" ")}
                  >
                    Start your enquiry

                    <SiteIcon
                      name="arrow"
                      size={15}
                    />

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