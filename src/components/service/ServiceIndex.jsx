import {
  useEffect,
  useState,
} from "react";

export default function ServiceIndex({
  services,
}) {
  const [activeId, setActiveId] =
    useState(services[0]?.id ?? "");

  useEffect(() => {
    const sections =
      services
        .map((service) =>
          document.getElementById(service.id),
        )
        .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer =
      new IntersectionObserver(
        (entries) => {
          const visible =
            entries
              .filter(
                (entry) =>
                  entry.isIntersecting,
              )
              .sort(
                (a, b) =>
                  b.intersectionRatio -
                  a.intersectionRatio,
              );

          if (visible[0]?.target?.id) {
            setActiveId(
              visible[0].target.id,
            );
          }
        },
        {
          rootMargin:
            "-25% 0px -55% 0px",
          threshold: [
            0,
            0.15,
            0.3,
            0.5,
          ],
        },
      );

    sections.forEach(
      (section) =>
        observer.observe(section),
    );

    return () =>
      observer.disconnect();
  }, [services]);

  function jumpTo(id) {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <nav
      className="service-v2-index"
      aria-label="Service sections"
    >
      <p className="service-v2-index__title">
        SERVICE INDEX
      </p>

      <div className="service-v2-index__items">
        {services.map(
          (service) => (
            <button
              key={service.id}
              type="button"
              onClick={() =>
                jumpTo(service.id)
              }
              className={
                activeId === service.id
                  ? "is-active"
                  : ""
              }
            >
              <span>
                {service.number}
              </span>

              <strong>
                {service.eyebrow}
              </strong>
            </button>
          ),
        )}
      </div>
    </nav>
  );
}