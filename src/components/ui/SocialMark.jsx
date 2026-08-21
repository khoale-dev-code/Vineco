const marks = {
  linkedin: 'in',
  youtube: '▶',
  tiktok: '♪',
  messenger: 'M',
  zalo: 'Z',
}

export function SocialMark({ network, className = '' }) {
  return (
    <span
      aria-hidden="true"
      className={`grid size-5 place-items-center rounded-md bg-current text-[10px] font-black uppercase leading-none ${className}`}
    >
      <span className="text-white mix-blend-normal">{marks[network] || '•'}</span>
    </span>
  )
}
