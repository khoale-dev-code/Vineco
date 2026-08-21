import { aboutExperience } from "../../data/aboutExperience";

export default function StoryNav() {
  function scrollToChapter(id) {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
  }

  return (
    <aside className="story-nav">
      <p className="story-nav__title">
        STORY INDEX
      </p>

      <div className="story-nav__items">
        {aboutExperience.chapters.map(
          (chapter) => (
            <button
              key={chapter.id}
              type="button"
              onClick={() =>
                scrollToChapter(chapter.id)
              }
            >
              <span>
                {chapter.number}
              </span>

              {chapter.kicker}
            </button>
          ),
        )}
      </div>
    </aside>
  );
}