export default function SiteIcon({
  name,
  size = 20,
  strokeWidth = 1.8,
  className = "",
}) {
  const paths = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </>
    ),

    phone: (
      <path d="M7 3h3l1.4 4-2 1.5a15 15 0 0 0 6.1 6.1l1.5-2 4 1.4v3c0 2-1 3-3 3C10 20 4 14 4 6c0-2 1-3 3-3Z" />
    ),

    pin: (
      <>
        <path d="M12 22s7-6 7-13a7 7 0 1 0-14 0c0 7 7 13 7 13Z" />
        <circle cx="12" cy="9" r="2.2" />
      </>
    ),

    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),

    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,

    check: <path d="m5 12 4 4L19 6" />,

    send: (
      <>
        <path d="m22 2-7 20-4-9-9-4Z" />
        <path d="M22 2 11 13" />
      </>
    ),

    menu: (
      <>
        <path d="M4 7h16" />
        <path d="M4 12h16" />
        <path d="M4 17h16" />
      </>
    ),

    close: (
      <>
        <path d="m6 6 12 12" />
        <path d="m18 6-12 12" />
      </>
    ),

    box: (
      <>
        <path d="m12 3 8 4-8 4-8-4Z" />
        <path d="m4 7 8 4 8-4v10l-8 4-8-4Z" />
        <path d="M12 11v10" />
      </>
    ),

    factory: (
      <>
        <path d="M3 21V9l6 3V8l6 3V4h6v17Z" />
        <path d="M7 17h2m3 0h2m3 0h2" />
      </>
    ),

    tag: (
      <>
        <path d="M20 13 13 20 4 11V4h7Z" />
        <circle cx="8.5" cy="8.5" r="1" />
      </>
    ),

    globe: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3c3 3 4 6 4 9s-1 6-4 9" />
        <path d="M12 3c-3 3-4 6-4 9s1 6 4 9" />
      </>
    ),

    message: (
      <>
        <path d="M5 18 3 21v-6a8 8 0 1 1 3 4Z" />
      </>
    ),
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name] ?? paths.globe}
    </svg>
  );
}