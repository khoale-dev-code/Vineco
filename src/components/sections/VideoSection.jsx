import { siteContent } from '../../data/siteContent'
import { SectionHeading } from '../ui/SectionHeading'

export function VideoSection() {
  const { video } = siteContent

  return (
    <section id="brand-video" className="section-y bg-white">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Brand Video"
          title="A single strong video can carry the brand story."
          description="Place the final MP4 in the public/video folder. The block stays responsive and works cleanly on mobile, tablet and desktop."
          align="center"
        />

        <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[2rem] bg-ink shadow-2xl shadow-ink/10">
          <video
            className="aspect-video w-full object-cover"
            controls
            playsInline
            preload="metadata"
            poster={video.poster}
            aria-label={video.title}
          >
            <source src={video.src} type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
      </div>
    </section>
  )
}
