import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import FloatingContactDock from "../components/layout/FloatingContactDock";
import PageHero from "../components/layout/PageHero";
import Reveal from "../components/ui/Reveal";

import { projectData } from "../data/projectData";

export default function FaqPage() {
  return (
    <>
      <Header />

      <main>
        <PageHero
          eyebrow="FAQ"
          title="Frequently Asked Questions"
          description="Quick answers about samples, MOQ, customization, materials, certification and lead times."
        />

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-[860px] space-y-3 px-4 sm:px-6">
            {projectData.faq.map((item, index) => (
              <Reveal
                key={item.q}
                delay={index * 60}
              >
                <details className="group rounded-2xl border-2 border-brand-500/50 bg-white px-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-5 text-sm font-bold text-ink">
                    {item.q}

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-brand-500 text-lg font-medium text-ink transition group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="border-t border-brand-500/20 pb-5 pt-4 text-sm leading-7 text-ink/60">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContactDock />
    </>
  );
}