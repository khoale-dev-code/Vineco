
import { projectData } from "../../data/projectData";


function SocialIcon({ type }) {
  const common = {
    width: 23,
    height: 23,
    viewBox: "0 0 24 24",
    "aria-hidden": "true",
  };

  if (type === "whatsapp") {
    return (
      <svg {...common} fill="none">
        <circle cx="12" cy="12" r="10" fill="#25D366" />

        <path
          d="M8.1 7.7c.22-.48.45-.49.66-.5h.56c.18 0 .47.07.72.6l.86 2.08c.1.25.05.47-.08.67l-.42.55c-.15.19-.3.37-.13.66.17.3.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.36 1.45.3.15.48.13.66-.08l.88-1.03c.2-.23.4-.2.68-.1l2.16 1.02c.3.15.5.22.57.35.07.12.07.72-.17 1.4-.24.68-1.4 1.3-1.93 1.38-.5.1-1.15.14-1.86-.08-.43-.14-.98-.32-1.69-.63a10.8 10.8 0 0 1-4.44-3.93c-.75-1.02-1.58-2.28-1.58-3.66 0-1.38.73-2.06 1-2.34Z"
          fill="white"
        />
      </svg>
    );
  }


  if (type === "tiktok") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <path
          d="M14.4 3v10.05a4.35 4.35 0 1 1-3.7-4.3v2.45a1.95 1.95 0 1 0 1.3 1.85V3h2.4Z"
          fill="#111111"
        />

        <path
          d="M14.4 3c.45 2.15 1.72 3.48 3.85 4v2.5c-1.4-.18-2.65-.73-3.85-1.7V3Z"
          fill="#FE2C55"
        />

        <path
          d="M12 8.76v2.45c-.42-.12-.82-.13-1.3-.01V8.75c.45-.08.88-.08 1.3.01Z"
          fill="#25F4EE"
        />
      </svg>
    );
  }


  if (type === "youtube") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <rect
          x="2"
          y="5"
          width="20"
          height="14"
          rx="4.5"
          fill="#FF0000"
        />

        <path
          d="m10 9 6 3-6 3V9Z"
          fill="white"
        />
      </svg>
    );
  }


  if (type === "linkedin") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="3"
          fill="#0A66C2"
        />

        <circle
          cx="7.2"
          cy="8"
          r="1.45"
          fill="white"
        />

        <path
          d="M5.9 10.4h2.6V18H5.9v-7.6Zm4.2 0h2.5v1.03c.65-.82 1.55-1.3 2.8-1.3 2.34 0 3.1 1.5 3.1 3.72V18h-2.62v-3.68c0-1.05-.02-2.02-1.24-2.02-1.25 0-1.45.92-1.45 1.96V18H10.1v-7.6Z"
          fill="white"
        />
      </svg>
    );
  }


  if (type === "instagram") {
    return (
      <svg {...common} viewBox="0 0 24 24">
        <defs>
          <linearGradient
            id="vineco-instagram-gradient"
            x1="3"
            y1="21"
            x2="21"
            y2="3"
          >
            <stop offset="0" stopColor="#FEDA75" />
            <stop offset=".35" stopColor="#FA7E1E" />
            <stop offset=".62" stopColor="#D62976" />
            <stop offset="1" stopColor="#4F5BD5" />
          </linearGradient>
        </defs>

        <rect
          x="2"
          y="2"
          width="20"
          height="20"
          rx="6"
          fill="url(#vineco-instagram-gradient)"
        />

        <circle
          cx="12"
          cy="12"
          r="4.2"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />

        <circle
          cx="17.4"
          cy="6.8"
          r="1.15"
          fill="white"
        />
      </svg>
    );
  }



  if (type === "gmail") {
    return (
      <img
        src="/images/social/gmail.png"
        alt=""
        aria-hidden="true"
        draggable="false"
        className="
          block
          h-[25px]
          w-[25px]
          object-contain
          sm:h-[27px]
          sm:w-[27px]
        "
      />
    );
  }

  return (
    <svg {...common} viewBox="0 0 24 24">
      <rect
        x="2"
        y="5"
        width="20"
        height="14"
        rx="3"
        fill="white"
        stroke="#DADCE0"
      />

      <path
        d="M3.5 7 12 13.2 20.5 7"
        fill="none"
        stroke="#EA4335"
        strokeWidth="2.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M3.5 17V8.4L8.6 12"
        fill="none"
        stroke="#4285F4"
        strokeWidth="2"
      />

      <path
        d="M20.5 17V8.4L15.4 12"
        fill="none"
        stroke="#34A853"
        strokeWidth="2"
      />

      <path
        d="M3.5 17h17"
        stroke="#FBBC04"
        strokeWidth="1.4"
      />
    </svg>
  );
}


function SocialButton({
  type,
  label,
  href,
  external = true,
}) {
  const baseClass = [
    "group relative",
    "flex h-11 w-11 shrink-0 items-center justify-center",
    "rounded-full",
    "border border-[#F59E0B]/45",
    "bg-white",
    "shadow-[0_10px_30px_rgba(30,42,36,.14)]",
    "transition duration-200",
    "sm:h-12 sm:w-12",
  ].join(" ");

  const content = (
    <>
      <SocialIcon type={type} />

      <span
        className={[
          "pointer-events-none",
          "absolute right-[calc(100%+10px)] top-1/2",
          "-translate-y-1/2",
          "hidden whitespace-nowrap",
          "rounded-[9px]",
          "bg-[#0F2F24]",
          "px-3 py-2",
          "text-[11px] font-bold text-white",
          "opacity-0",
          "shadow-[0_8px_24px_rgba(15,47,36,.18)]",
          "transition-opacity duration-150",
          "group-hover:opacity-100",
          "lg:block",
        ].join(" ")}
      >
        {label}
      </span>
    </>
  );

  if (!href) {
    return (
      <span
        aria-label={label}
        title={label + " link is being updated"}
        aria-disabled="true"
        className={[
          baseClass,
          "cursor-default opacity-75",
        ].join(" ")}
      >
        {content}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
      className={[
        baseClass,
        "hover:-translate-y-0.5",
        "hover:border-[#F59E0B]",
        "hover:shadow-[0_14px_34px_rgba(30,42,36,.20)]",
      ].join(" ")}
    >
      {content}
    </a>
  );
}


export default function FloatingContactDock() {
  const contact = projectData.contact ?? {};
  const socials = projectData.socials ?? {};

  const items = [
    {
      type: "whatsapp",
      label: "WhatsApp",
      href: contact.whatsappUrl,
    },
    {
      type: "tiktok",
      label: "TikTok",
      href: socials.tiktok,
    },
    {
      type: "youtube",
      label: "YouTube",
      href: socials.youtube,
    },
    {
      type: "linkedin",
      label: "LinkedIn",
      href: socials.linkedin,
    },
    {
      type: "instagram",
      label: "Instagram",
      href: socials.instagram,
    },
    {
      type: "gmail",
      label: "Gmail",
      href: contact.salesEmail
        ? "mailto:" + contact.salesEmail
        : "",
      external: false,
    },
  ];

  return (
    <aside
      aria-label="VinEco social and contact links"
      className={[
        "fixed bottom-4 right-3 z-[70]",
        "flex flex-col gap-2",
        "sm:bottom-6 sm:right-5 sm:gap-2.5",
        "lg:bottom-7 lg:right-7",
      ].join(" ")}
    >
      {items.map((item) => (
        <SocialButton
          key={item.type}
          {...item}
        />
      ))}
    </aside>
  );
}
