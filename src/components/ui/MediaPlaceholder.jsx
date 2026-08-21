import { useState } from 'react'
import { Icon } from './Icon'

export function MediaPlaceholder({ src, alt, className = '', badge, eager = false }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-[#f1eadf] ${className}`}>
      {!failed ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover"
          loading={eager ? 'eager' : 'lazy'}
          fetchPriority={eager ? 'high' : 'auto'}
          decoding="async"
          onError={() => setFailed(true)}
        />
      ) : (
        <div className="absolute inset-0 grid place-items-center p-6 text-center">
          <div className="flex h-full w-full flex-col items-center justify-center rounded-[inherit] border border-dashed border-ink/15 bg-white/50">
            <Icon name="image" className="mb-3 size-7 text-brand-500" />
            <span className="max-w-xs text-xs font-semibold uppercase tracking-[0.12em] text-ink/45">
              Replace with client image
            </span>
          </div>
        </div>
      )}

      {badge ? (
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink shadow-sm backdrop-blur">
          {badge}
        </span>
      ) : null}
    </div>
  )
}
