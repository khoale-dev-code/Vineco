import { useState } from "react";
import { Link } from "react-router";

import { projectData } from "../../data/projectData";
import SiteIcon from "../ui/SiteIcon";

export default function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);

  const socials = [
    {
      label: "LinkedIn",
      href: projectData.socials.linkedin,
    },
    {
      label: "YouTube",
      href: projectData.socials.youtube,
    },
    {
      label: "TikTok",
      href: projectData.socials.tiktok,
    },
    {
      label: "Zalo",
      href: projectData.contact.zaloUrl,
    },
  ].filter((item) => item.href);

  return (
    <footer className="bg-ink text-white">
      {socials.length > 0 && (
        <div className="border-b border-white/10">
          <div className="mx-auto max-w-[1240px] px-4 py-6 sm:px-6 lg:px-8">
            <p className="mb-4 text-center text-[10px] font-bold uppercase tracking-[0.25em] text-brand-500">
              Connect with VinEco
            </p>

            <div className="flex flex-wrap justify-center gap-2">
              {socials.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold transition hover:border-brand-500 hover:bg-brand-500 hover:text-ink"
                >
                  {item.label} ↗
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      <div className="mx-auto grid max-w-[1240px] gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.35fr_.7fr_.7fr_1fr] lg:px-8 lg:py-16">
        <div>
          {!logoFailed ? (
            <img
              src={projectData.brand.logo}
              alt="VinEco"
              onError={() => setLogoFailed(true)}
              className="h-10 w-auto max-w-[190px] object-contain brightness-0 invert"
            />
          ) : (
            <p className="text-2xl font-extrabold">
              VinEco
            </p>
          )}

          <p className="mt-5 max-w-sm text-sm leading-7 text-white/65">
            {projectData.brand.tagline}
          </p>

          <div className="mt-6 space-y-3 text-sm text-white/70">
            <a
              href={`mailto:${projectData.contact.salesEmail}`}
              className="flex gap-3 hover:text-brand-500"
            >
              <SiteIcon name="mail" size={17} />
              {projectData.contact.salesEmail}
            </a>

            <a
              href={`tel:${projectData.contact.phoneRaw}`}
              className="flex gap-3 hover:text-brand-500"
            >
              <SiteIcon name="phone" size={17} />
              {projectData.contact.phone}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-500">
            Company
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
            <a href="/#/">
              Home
            </a>

            <a href="/#/?section=about">
              About
            </a>

            <Link to="/oem-odm">
              OEM / ODM
            </Link>

            <Link to="/contact">
              Contact
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-500">
            Products
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white/65">
            {projectData.products.map((product) => (
              <span key={product.id}>
                {product.title}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.14em] text-brand-500">
            Vietnam
          </h3>

          <div className="mt-5 space-y-4 text-sm leading-6 text-white/65">
            <p>
              <strong className="text-white">
                Office
              </strong>
              <br />
              {projectData.contact.office}
            </p>

            <p>
              <strong className="text-white">
                Factory
              </strong>
              <br />
              {projectData.contact.factory}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1240px] flex-col gap-3 border-t border-white/10 px-4 py-6 text-xs text-white/40 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>
          © 2026 {projectData.brand.company}. All rights reserved.
        </p>

        <p>
          Crafted in Vietnam · Exported worldwide
        </p>
      </div>
    </footer>
  );
}