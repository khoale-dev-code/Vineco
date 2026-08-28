import { Link } from "react-router";

import {
  projectData,
} from "../../data/projectData";


function ImageContactButton({
  href,
  image,
  label,
  external = true,
  email = false,
}) {
  return (
    <a
      href={href}
      target={
        external && !email
          ? "_blank"
          : undefined
      }
      rel={
        external && !email
          ? "noreferrer"
          : undefined
      }
      aria-label={label}
      title={label}
      className={[
        "group",
        "flex h-12 w-12",
        "items-center justify-center",
        "overflow-hidden",
        "rounded-full",
        "border-2 border-white",
        "bg-white",
        "shadow-[0_12px_32px_rgba(30,42,36,.18)]",
        "ring-1 ring-[#F59E0B]/55",
        "transition duration-300",
        "hover:-translate-y-1",
        "hover:scale-105",
        "hover:shadow-[0_18px_42px_rgba(245,158,11,.30)]",
        "sm:h-13 sm:w-13",
      ].join(" ")}
    >
      <img
        src={image}
        alt={label}
        className={[
          "h-[28px] w-[28px]",
          "object-contain",
          "transition-transform duration-300",
          "group-hover:scale-110",
          "sm:h-[30px] sm:w-[30px]",
        ].join(" ")}
      />
    </a>
  );
}


function InternalImageButton({
  to,
  image,
  label,
}) {
  return (
    <Link
      to={to}
      aria-label={label}
      title={label}
      className={[
        "group",
        "flex h-12 w-12",
        "items-center justify-center",
        "overflow-hidden",
        "rounded-full",
        "border-2 border-white",
        "bg-white",
        "shadow-[0_12px_32px_rgba(30,42,36,.18)]",
        "ring-1 ring-[#F59E0B]/55",
        "transition duration-300",
        "hover:-translate-y-1",
        "hover:scale-105",
        "hover:shadow-[0_18px_42px_rgba(245,158,11,.30)]",
        "sm:h-13 sm:w-13",
      ].join(" ")}
    >
      <img
        src={image}
        alt={label}
        className={[
          "h-[28px] w-[28px]",
          "object-contain",
          "transition-transform duration-300",
          "group-hover:scale-110",
          "sm:h-[30px] sm:w-[30px]",
        ].join(" ")}
      />
    </Link>
  );
}


export default function FloatingContactDock() {
  const facebookUrl =
    projectData.socials?.facebook || "";

  return (
    <aside
      aria-label="Quick contact"
      className={[
        "fixed",
        "bottom-5 right-3",
        "z-40",
        "flex flex-col gap-2.5",
        "sm:bottom-7 sm:right-6",
      ].join(" ")}
    >

      {/* ZALO */}

      <ImageContactButton
        href={projectData.contact.zaloUrl}
        image="/images/social/zalo.png"
        label="Zalo"
      />


      {/* FACEBOOK */}

      {facebookUrl ? (
        <ImageContactButton
          href={facebookUrl}
          image="/images/social/facebook.png"
          label="Facebook"
        />
      ) : (
        <InternalImageButton
          to="/contact"
          image="/images/social/facebook.png"
          label="Facebook contact"
        />
      )}


      {/* EMAIL / GMAIL */}

      <ImageContactButton
        href={`mailto:${projectData.contact.salesEmail}`}
        image="/images/social/gmail.png"
        label="Email VinEco"
        external={false}
        email
      />

    </aside>
  );
}