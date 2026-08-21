import { useState } from "react";

export default function SmartImage({
  src,
  alt,
  className = "",
  fallbackClassName = "",
  loading = "lazy",
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex h-full w-full items-center justify-center bg-brand-50 p-6 text-center ${fallbackClassName}`}
      >
        <div>
          <div className="mx-auto mb-3 h-10 w-10 rounded-full bg-brand-500/15" />
          <p className="text-xs font-semibold text-ink/50">
            Add image
          </p>
          <p className="mt-1 break-all text-[10px] text-ink/35">
            {src}
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onError={() => setFailed(true)}
      className={className}
    />
  );
}