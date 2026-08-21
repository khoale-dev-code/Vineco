import {
  useEffect,
  useRef,
  useState,
} from "react";

export default function HighlightText({
  children,
  className = "",
  delay = 0,
}) {
  const elementRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;

    if (!element) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (reduceMotion.matches) {
      setVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.65,
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <span
      ref={elementRef}
      className={[
        "story-highlight",
        visible
          ? "story-highlight--visible"
          : "",
        className,
      ].join(" ")}
      style={{
        "--highlight-delay": `${delay}ms`,
      }}
    >
      <span className="story-highlight__marker" />
      <span className="story-highlight__text">
        {children}
      </span>
    </span>
  );
}