import { useEffect, useId, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import { SUPPORTED_LANGUAGES } from "../../i18n";

const options = [
  { value: "en", short: "EN", label: "English" },
  { value: "ja", short: "JA", label: "日本語" },
  { value: "es", short: "ES", label: "Español" },
];

function Icon({ name, className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      {name === "globe" && (
        <>
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4" ry="9" />
          <path d="M3 12h18" />
        </>
      )}
      {name === "chevron" && <path d="m8 10 4 4 4-4" />}
      {name === "check" && <path d="m5 12 4 4L19 6" />}
    </svg>
  );
}

export default function LanguageSwitcher({ mobile = false }) {
  const { t, i18n } = useTranslation("common");
  const id = useId();
  const rootRef = useRef(null);
  const triggerRef = useRef(null);
  const itemRefs = useRef([]);
  const initialFocusRef = useRef(0);
  const [open, setOpen] = useState(false);

  const languages = options.filter((option) =>
    SUPPORTED_LANGUAGES.includes(option.value),
  );
  const current = String(i18n.resolvedLanguage || i18n.language || "en")
    .toLowerCase()
    .split(/[-_]/)[0];
  const selected =
    languages.find((option) => option.value === current) || languages[0];
  const languageLabel = t("Language", {
    defaultValue:
      { en: "Language", ja: "言語", es: "Idioma" }[current] || "Language",
  });

  useEffect(() => {
    if (!open) return undefined;

    itemRefs.current[initialFocusRef.current]?.focus({
      preventScroll: !mobile,
    });

    function handleOutside(event) {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    }

    document.addEventListener("pointerdown", handleOutside);
    document.addEventListener("focusin", handleOutside);

    return () => {
      document.removeEventListener("pointerdown", handleOutside);
      document.removeEventListener("focusin", handleOutside);
    };
  }, [open, mobile]);

  function openMenu(index) {
    initialFocusRef.current = index;
    setOpen(true);
  }

  function closeMenu() {
    setOpen(false);
    triggerRef.current?.focus({ preventScroll: true });
  }

  async function selectLanguage(value) {
    if (!SUPPORTED_LANGUAGES.includes(value)) return;

    const shouldChange =
      value !== current;

    // Close first so the language re-render cannot race with
    // an open popover/focus transition.
    setOpen(false);

    if (shouldChange) {
      try {
        await i18n.changeLanguage(value);
      } catch (error) {
        console.error(
          "[VinEco i18n] Failed to change language:",
          error,
        );
      }
    }

    window.requestAnimationFrame(() => {
      triggerRef.current?.focus({
        preventScroll: true,
      });
    });
  }

  function handleMenuKeyDown(event) {
    const index = itemRefs.current.indexOf(document.activeElement);
    const last = languages.length - 1;
    let next = null;

    if (event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowUp") next = index <= 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;

    if (event.key === "Tab") {
      // Return to the trigger, then let Tab move to the next/previous control.
      closeMenu();
      return;
    }

    if (
      event.key.length === 1 &&
      event.key !== " " &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      const key = event.key.toLowerCase();
      for (let step = 1; step <= languages.length; step += 1) {
        const candidate = (index + step) % languages.length;
        const option = languages[candidate];
        if ([option.short, option.label].some((text) => text.toLowerCase().startsWith(key))) {
          next = candidate;
          break;
        }
      }
    }

    if (next !== null) {
      event.preventDefault();
      event.stopPropagation();
      itemRefs.current[next]?.focus();
    }
  }

  if (!selected) return null;

  return (
    <div
      ref={rootRef}
      className={mobile ? "relative w-full" : "relative shrink-0"}
      onKeyDown={(event) => {
        if (open && event.key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
          closeMenu();
        }
      }}
    >
      <button
        ref={triggerRef}
        id={`${id}-trigger`}
        type="button"
        aria-label={`${languageLabel}: ${selected.label}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? `${id}-menu` : undefined}
        onClick={() => {
          if (open) closeMenu();
          else openMenu(languages.indexOf(selected));
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            event.stopPropagation();
            openMenu(event.key === "ArrowDown" ? 0 : languages.length - 1);
          }
        }}
        className={[
          "group inline-flex cursor-pointer items-center rounded-[15px] border",
          "text-[#0F2F24] transition-[background-color,border-color,box-shadow] duration-200",
          "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D97706]",
          "motion-reduce:transition-none",
          mobile ? "min-h-14 w-full gap-3 px-4 py-2.5" : "h-[46px] gap-2 px-3",
          open
            ? "border-[#F59E0B]/60 bg-[#FFF8EA] shadow-[0_0_0_3px_rgba(245,158,11,0.10)]"
            : "border-[#0F2F24]/12 bg-[#F7F9F5] hover:border-[#0F2F24]/25 hover:bg-[#EEF3E9]",
        ].join(" ")}
      >
        <Icon name="globe" className="size-[19px] shrink-0 text-[#52705B]" />

        {mobile ? (
          <span className="min-w-0 flex-1 text-left">
            <span className="block text-[11px] font-medium leading-4 text-[#687568]">
              {languageLabel}
            </span>
            <span lang={selected.value} translate="no" className="block text-[15px] font-semibold leading-5">
              {selected.label}
            </span>
          </span>
        ) : (
          <span translate="no" className="text-[13px] font-bold tracking-[0.04em]">
            {selected.short}
          </span>
        )}

        {mobile && (
          <span translate="no" aria-hidden="true" className="rounded-md bg-[#0F2F24]/5 px-2 py-1 text-[11px] font-bold tracking-wide">
            {selected.short}
          </span>
        )}

        <Icon
          name="chevron"
          className={`size-4 shrink-0 text-[#687568] transition-transform duration-200 motion-reduce:transition-none ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className={[
            "rounded-[18px] border border-[#0F2F24]/10 bg-white p-2",
            mobile
              ? "mt-2 w-full"
              : "absolute right-0 top-full z-50 mt-3 w-[224px] shadow-[0_14px_40px_-8px_rgba(15,47,36,0.20)]",
          ].join(" ")}
        >
          <p id={`${id}-label`} className="px-3 pb-2 pt-1.5 text-[11px] font-bold tracking-wide text-[#687568]">
            {languageLabel}
          </p>

          <div
            id={`${id}-menu`}
            role="menu"
            aria-labelledby={`${id}-label`}
            onKeyDown={handleMenuKeyDown}
            className="space-y-1"
          >
            {languages.map((option, index) => {
              const active = option.value === selected.value;

              return (
                <button
                  key={option.value}
                  ref={(element) => { itemRefs.current[index] = element; }}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  tabIndex={-1}
                  lang={option.value}
                  translate="no"
                  onClick={() => selectLanguage(option.value)}
                  className={[
                    "flex min-h-12 w-full cursor-pointer items-center gap-3 rounded-xl px-3 py-2 text-left",
                    "transition-colors duration-150 motion-reduce:transition-none",
                    "focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#D97706]",
                    active
                      ? "bg-[#EEF3E9] text-[#0F2F24]"
                      : "text-[#3D4A42] hover:bg-[#F5F7F2] focus-visible:bg-[#F5F7F2]",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "grid size-8 shrink-0 place-items-center rounded-lg text-[10px] font-bold tracking-wide",
                      active ? "bg-[#0F2F24] text-white" : "bg-[#F0F2ED] text-[#687568]",
                    ].join(" ")}
                  >
                    {option.short}
                  </span>
                  <span className="flex-1 text-[14px] font-semibold">{option.label}</span>
                  {active && <Icon name="check" className="size-4 shrink-0 text-[#0F2F24]" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
