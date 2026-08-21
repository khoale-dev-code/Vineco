const paths = {
  arrowRight: (
    <>
      <path d="M5 12h13" />
      <path d="m14 7 5 5-5 5" />
    </>
  ),
  arrowUpRight: (
    <>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  chevronDown: <path d="m6 9 6 6 6-6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l3 2" />
    </>
  ),
  image: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="3" />
      <circle cx="9" cy="10" r="1.5" />
      <path d="m5 18 5-5 3 3 2-2 4 4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  mapPin: (
    <>
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16" />
      <path d="M4 12h16" />
      <path d="M4 17h16" />
    </>
  ),
  message: (
    <>
      <path d="M4 5h16v11H9l-5 4V5Z" />
      <path d="M8 10h8" />
    </>
  ),
  phone: (
    <path d="M7.4 4.5 10 8l-2 2c1.2 2.5 3 4.3 5.5 5.5l2-2 3.5 2.6c.5.4.7 1 .5 1.6-.4 1.4-1.6 2.3-3.1 2.3C9.6 20 4 14.4 4 7.6 4 6.1 4.9 4.9 6.3 4.5c.4-.1.8-.1 1.1 0Z" />
  ),
  play: <path d="m9 7 8 5-8 5V7Z" />,
  shieldCheck: (
    <>
      <path d="M12 3 5 6v5c0 4.6 2.8 8 7 10 4.2-2 7-5.4 7-10V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  sparkle: (
    <>
      <path d="M12 3c.7 3 2 4.3 5 5-3 .7-4.3 2-5 5-.7-3-2-4.3-5-5 3-.7 4.3-2 5-5Z" />
      <path d="M18 14c.4 1.8 1.2 2.6 3 3-1.8.4-2.6 1.2-3 3-.4-1.8-1.2-2.6-3-3 1.8-.4 2.6-1.2 3-3Z" />
    </>
  ),
  x: (
    <>
      <path d="m6 6 12 12" />
      <path d="M18 6 6 18" />
    </>
  ),
}

export function Icon({ name, className = 'size-5', strokeWidth = 1.8, title }) {
  const content = paths[name]
  if (!content) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
    >
      {title ? <title>{title}</title> : null}
      {content}
    </svg>
  )
}
