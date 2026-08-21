function extractIframeSource(html) {
  if (!html) return "";

  const trimmed = html.trim();

  if (trimmed.startsWith("http")) {
    return trimmed;
  }

  const match = trimmed.match(
    /<iframe[^>]*\ssrc=["']([^"']+)["'][^>]*>/i,
  );

  return match?.[1] ?? "";
}

export default function GoogleMapEmbed({
  html,
  title = "VinEco location",
  address = "",
}) {
  const src = extractIframeSource(html);

  if (!src) {
    return (
      <div className="flex min-h-[320px] items-center justify-center rounded-[28px] border border-dashed border-ink/20 bg-white p-8 text-center sm:min-h-[380px]">
        <div className="max-w-md">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-2xl">
            📍
          </div>

          <h3 className="text-xl font-bold text-ink">
            Google Map embed is ready
          </h3>

          <p className="mt-3 text-sm leading-7 text-ink/60">
            Copy the iframe from Google Maps and paste it into
            src/data/mapEmbed.js.
          </p>

          {address && (
            <p className="mt-4 text-sm font-medium text-ink">
              {address}
            </p>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[28px] border border-ink/10 bg-white shadow-[0_20px_60px_rgba(3,50,107,0.10)]">
      <iframe
        src={src}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="h-[360px] w-full border-0 sm:h-[440px] lg:h-[500px]"
      />
    </div>
  );
}