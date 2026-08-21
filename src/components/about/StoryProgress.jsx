import {
  useEffect,
  useRef,
} from "react";

export default function StoryProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    let ticking = false;

    function update() {
      const documentElement =
        document.documentElement;

      const scrollable =
        documentElement.scrollHeight -
        window.innerHeight;

      const progress =
        scrollable <= 0
          ? 0
          : Math.min(
              1,
              Math.max(
                0,
                window.scrollY / scrollable,
              ),
            );

      if (barRef.current) {
        barRef.current.style.transform =
          `scaleX(${progress})`;
      }

      ticking = false;
    }

    function handleScroll() {
      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(update);
    }

    update();

    window.addEventListener(
      "scroll",
      handleScroll,
      {
        passive: true,
      },
    );

    window.addEventListener(
      "resize",
      handleScroll,
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll,
      );

      window.removeEventListener(
        "resize",
        handleScroll,
      );
    };
  }, []);

  return (
    <div
      className="story-progress"
      aria-hidden="true"
    >
      <div
        ref={barRef}
        className="story-progress__bar"
      />
    </div>
  );
}