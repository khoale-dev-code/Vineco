import { Link } from "react-router";

import { projectData } from "../../data/projectData";
import SiteIcon from "../ui/SiteIcon";

export default function FloatingContactDock() {
  return (
    <aside
      aria-label="Quick contact"
      className="fixed bottom-5 right-3 z-40 flex flex-col gap-2 sm:bottom-7 sm:right-6"
    >
      <a
        href={projectData.contact.zaloUrl}
        target="_blank"
        rel="noreferrer"
        title="Zalo"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500 bg-white text-sm font-extrabold text-ink shadow-[0_10px_25px_rgba(255,164,18,0.12)] transition hover:-translate-y-1 hover:bg-brand-50 sm:h-13 sm:w-13"
      >
        Z
      </a>

      {projectData.contact.messengerUrl ? (
        <a
          href={projectData.contact.messengerUrl}
          target="_blank"
          rel="noreferrer"
          title="Messenger"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500 bg-white text-sm font-extrabold text-ink shadow-lg transition hover:-translate-y-1 hover:bg-brand-50 sm:h-13 sm:w-13"
        >
          M
        </a>
      ) : (
        <Link
          to="/contact"
          title="Contact"
          className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500 bg-white text-sm font-extrabold text-ink shadow-lg transition hover:-translate-y-1 hover:bg-brand-50 sm:h-13 sm:w-13"
        >
          M
        </Link>
      )}

      <a
        href={`mailto:${projectData.contact.salesEmail}`}
        title="Email"
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-brand-500 bg-white text-ink shadow-[0_10px_25px_rgba(255,164,18,0.12)] transition hover:-translate-y-1 hover:bg-brand-50 sm:h-13 sm:w-13"
      >
        <SiteIcon name="mail" size={20} />
      </a>
    </aside>
  );
}