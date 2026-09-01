import { useState } from "react";
import { Link } from "react-router";

import { projectData } from "../../data/projectData";
import SiteIcon from "../ui/SiteIcon";

export default function Footer() {
  const [logoFailed, setLogoFailed] = useState(false);

  const socials = [
    { label: "LinkedIn", href: projectData.socials.linkedin },
    { label: "YouTube", href: projectData.socials.youtube },
    { label: "TikTok", href: projectData.socials.tiktok },
    { label: "Zalo", href: projectData.contact.zaloUrl },
  ].filter((item) => item.href);

  return (
    <footer className="border-t border-[#1E2A24]/10 bg-[#FAF8F5] text-[#1E2A24]">

    
      {/* =====================================================
          MAIN FOOTER
      ===================================================== */}

      <div
        className={[
          "mx-auto grid max-w-[1240px]",
          "gap-10 px-4 py-12",
          "sm:px-6 sm:py-14",
          "md:grid-cols-2",
          "lg:grid-cols-[1.35fr_.72fr_.9fr_1.15fr]",
          "lg:gap-12 lg:px-8 lg:py-16",
        ].join(" ")}
      >

        {/* ===================================================
            BRAND
        =================================================== */}

        <div className="min-w-0">
          {!logoFailed ? (
            <Link
              to="/"
              aria-label="VinEco home"
              className="inline-flex"
            >
              <img
                src={projectData.brand.logo}
                alt="VinEco Pet Toys"
                loading="eager"
                decoding="async"
                onError={() => setLogoFailed(true)}
                className={[
                  "block h-auto object-contain object-left",
                  "w-[125px]",
                  "sm:w-[140px]",
                  "lg:w-[155px]",
                ].join(" ")}
              />
            </Link>
          ) : (
            <p className="text-[30px] font-extrabold tracking-[-0.04em] text-[#0F2F24]">
              VinEco
            </p>
          )}

          <p
            className={[
              "mt-6 max-w-[400px]",
              "text-[15px] font-medium",
              "leading-7",
              "text-[#3D5245]",
              "sm:text-[16px] sm:leading-8",
            ].join(" ")}
          >
            {projectData.brand.tagline}
          </p>

          <div
            className={[
              "mt-7 space-y-4",
              "text-[15px] font-semibold",
              "text-[#1E2A24]",
              "sm:text-[16px]",
            ].join(" ")}
          >
            <a
              href={`mailto:${projectData.contact.salesEmail}`}
              className="flex items-center gap-3 transition-colors hover:text-[#D97706]"
            >
              <span className="shrink-0 text-[#3D5245]">
                <SiteIcon
                  name="mail"
                  size={19}
                  strokeWidth={1.8}
                />
              </span>

              <span className="break-all">
                {projectData.contact.salesEmail}
              </span>
            </a>

            <a
              href={`tel:${projectData.contact.phoneRaw}`}
              className="flex items-center gap-3 transition-colors hover:text-[#D97706]"
            >
              <span className="shrink-0 text-[#3D5245]">
                <SiteIcon
                  name="phone"
                  size={19}
                  strokeWidth={1.8}
                />
              </span>

              <span>
                {projectData.contact.phone}
              </span>
            </a>
          </div>
        </div>

        {/* ===================================================
            COMPANY
        =================================================== */}

        <div>
          <FooterHeading>
            Company
          </FooterHeading>

          <nav
            aria-label="Footer company navigation"
            className="mt-6 flex flex-col gap-4 text-[15px] font-semibold text-[#3D5245] sm:text-[16px]"
          >
            <FooterLink to="/">
              Home
            </FooterLink>

            <FooterLink to="/about">
              About Us
            </FooterLink>

            <FooterLink to="/oem-odm">
              OEM / ODM
            </FooterLink>

            <FooterLink to="/contact">
              Contact
            </FooterLink>
          </nav>
        </div>

        {/* ===================================================
            PRODUCTS
        =================================================== */}

        <div>
          <FooterHeading>
            Products
          </FooterHeading>

          <div className="mt-6 flex flex-col gap-4 text-[15px] font-semibold leading-6 text-[#3D5245] sm:text-[16px]">
            {projectData.products.map((product) => (
              <span key={product.id}>
                {product.title}
              </span>
            ))}
          </div>
        </div>

        {/* ===================================================
            VIETNAM
        =================================================== */}

        <div>
          <FooterHeading>
            Vietnam
          </FooterHeading>

          <div className="mt-6 space-y-6 text-[15px] font-medium leading-7 text-[#3D5245] sm:text-[16px] sm:leading-8">
            <div>
              <p className="mb-1 font-extrabold text-[#0F2F24]">
                Office
              </p>

              <p>
                {projectData.contact.office}
              </p>
            </div>

            <div>
              <p className="mb-1 font-extrabold text-[#0F2F24]">
                Factory
              </p>

              <p>
                {projectData.contact.factory}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================
          COPYRIGHT
      ===================================================== */}

      <div
        className={[
          "mx-auto flex max-w-[1240px]",
          "flex-col gap-3",
          "border-t border-[#1E2A24]/10",
          "px-4 py-6",
          "text-[12px] font-medium",
          "leading-5 text-[#6A645D]",
          "sm:px-6 sm:text-[13px]",
          "md:flex-row md:items-center md:justify-between",
          "lg:px-8",
        ].join(" ")}
      >
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


/* ==========================================================
   SMALL COMPONENTS
========================================================== */

function FooterHeading({ children }) {
  return (
    <h3
      className={[
        "text-[12px] font-extrabold",
        "uppercase tracking-[0.16em]",
        "text-[#D97706]",
        "sm:text-[13px]",
      ].join(" ")}
    >
      {children}
    </h3>
  );
}


function FooterLink({ to, children }) {
  return (
    <Link
      to={to}
      className={[
        "w-fit",
        "transition-colors duration-200",
        "hover:text-[#D97706]",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}