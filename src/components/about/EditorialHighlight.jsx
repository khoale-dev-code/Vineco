import {
  useEffect,
  useRef,
  useState,
} from "react";

export default function EditorialHighlight({
  children,
  delay = 0,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) return undefined;

    const reducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );

    if (reducedMotion.matches) {
      setVisible(true);
      return undefined;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(element);
          }
        },
        {
          threshold: 0.55,
          rootMargin: "0px 0px -6% 0px",
        },
      );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={ref}
      className={[
        "v4-highlight",
        visible
          ? "v4-highlight--visible"
          : "",
      ].join(" ")}
      style={{
        "--v4-highlight-delay":
          `${delay}ms`,
      }}
    >
      <span
        className="v4-highlight__marker"
        aria-hidden="true"
      />

      <span className="v4-highlight__text">
        {children}
      </span>
    </span>
  );
}