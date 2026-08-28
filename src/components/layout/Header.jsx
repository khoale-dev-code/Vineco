import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, NavLink, useLocation } from "react-router";

import { productCatalog } from "../../data/productCatalog";
import { useSampleModal } from "../../features/sample/SampleModalContext";

const LOGO = "/images/social/vineco-logo.png";

const navigation = [
  { label: "Home", to: "/", end: true },
  { label: "About Us", to: "/about" },
  { label: "Product", to: "/products", type: "products" },
  { label: "Service", to: "/service" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact Us", to: "/contact" },
];


/* ==========================================================
   ICONS
========================================================== */

function ChevronIcon({ open = false }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={`h-4 w-4 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5 7.5 10 12.5 15 7.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}


function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


/* ==========================================================
   LOGO
========================================================== */

function Logo({ mobile = false, onClick }) {
  return (
    <Link
      to="/"
      onClick={onClick}
      aria-label="VinEco Home"
      className="flex shrink-0 items-center"
    >
      <img
        src={LOGO}
        alt="VinEco Pet Toys"
        loading="eager"
        decoding="async"
        className={
          mobile
            ? "h-[62px] w-auto object-contain"
            : "h-[66px] w-auto object-contain sm:h-[72px]"
        }
      />
    </Link>
  );
}


/* ==========================================================
   SAMPLE CTA
========================================================== */

function SampleButton({
  onClick,
  mobile = false,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative isolate overflow-hidden rounded-full",
        "border border-[#F59E0B] bg-[#F59E0B]",
        "font-extrabold text-[#1E2A24]",
        "shadow-[0_12px_30px_rgba(245,158,11,0.20)]",
        "transition-all duration-500",
        "ease-[cubic-bezier(0.22,1,0.36,1)]",
        "hover:-translate-y-[2px]",
        "hover:border-[#FFB62E]",
        "hover:shadow-[0_18px_42px_rgba(245,158,11,0.34)]",
        "active:translate-y-0 active:scale-[0.98]",
        "focus-visible:outline-none",
        "focus-visible:ring-4 focus-visible:ring-[#F59E0B]/25",
        mobile
          ? "flex min-h-[52px] w-full items-center justify-center px-6 text-[14px]"
          : "hidden min-h-[52px] shrink-0 items-center justify-center px-7 text-[13px] min-[1180px]:inline-flex",
      ].join(" ")}
    >
      {/* ánh sáng từ dưới đi lên */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[8%]
          -bottom-10
          h-16
          rounded-full
          bg-white/90
          opacity-0
          blur-2xl
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:-bottom-2
          group-hover:opacity-80
        "
      />

      {/* lớp sáng vàng nâng lên trong button */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-0
          -bottom-full
          h-full
          bg-gradient-to-t
          from-[#FFE49B]/90
          via-[#FFD36B]/45
          to-transparent
          opacity-0
          transition-all
          duration-500
          ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:bottom-0
          group-hover:opacity-100
        "
      />

      {/* tia highlight quét ngang */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[55%]
          top-0
          h-full
          w-[38%]
          -skew-x-[22deg]
          bg-gradient-to-r
          from-transparent
          via-white/55
          to-transparent
          opacity-0
          transition-all
          duration-700
          group-hover:left-[125%]
          group-hover:opacity-100
        "
      />

      <span className="relative z-10">
        Get Free Sample
      </span>
    </button>
  );
}


/* ==========================================================
   NAV LINK STYLES
========================================================== */

function desktopLinkClass({ isActive }) {
  return [
    "relative inline-flex min-h-[44px] items-center rounded-full px-4",
    "text-[13px] font-bold transition-colors duration-200",
    "after:absolute after:bottom-[7px] after:left-4 after:right-4",
    "after:h-[2px] after:origin-center after:rounded-full",
    "after:bg-[#F59E0B]",
    "after:transition-transform after:duration-200",
    isActive
      ? "bg-[#FFF4DA] text-[#1E2A24] after:scale-x-100"
      : "text-[#3D5245] after:scale-x-0 hover:bg-[#F4F1EA] hover:text-[#1E2A24]",
  ].join(" ");
}


function mobileLinkClass({ isActive }) {
  return [
    "flex min-h-[54px] items-center rounded-2xl px-4",
    "text-[17px] font-bold transition-colors duration-200",
    isActive
      ? "bg-[#FFF4DA] text-[#1E2A24]"
      : "text-[#3D5245] hover:bg-[#F4F1EA] hover:text-[#1E2A24]",
  ].join(" ");
}


/* ==========================================================
   HEADER
========================================================== */

export default function Header() {
  const location = useLocation();
  const { openSampleModal } = useSampleModal();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] =
    useState(false);

  const productsActive =
    location.pathname.startsWith("/products");


  /* ========================================================
     CLOSE MOBILE MENU AFTER ROUTE CHANGE
  ======================================================== */

  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);


  /* ========================================================
     MOBILE SCROLL LOCK + ESCAPE
  ======================================================== */

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const html = document.documentElement;
    const body = document.body;

    const oldHtmlOverflow = html.style.overflow;
    const oldBodyOverflow = body.style.overflow;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";

    function handleEscape(event) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    document.addEventListener(
      "keydown",
      handleEscape,
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleEscape,
      );

      html.style.overflow = oldHtmlOverflow;
      body.style.overflow = oldBodyOverflow;
    };
  }, [mobileOpen]);


  /* ========================================================
     ACTIONS
  ======================================================== */

  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }


  function handleMobileSample() {
    closeMobileMenu();

    window.setTimeout(() => {
      openSampleModal();
    }, 80);
  }


  /* ========================================================
     MOBILE MENU
  ======================================================== */

  const mobileMenu =
    mobileOpen &&
    typeof document !== "undefined"
      ? createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
            className="fixed inset-0 z-[100] bg-[#FAF8F5]"
          >
            <div className="flex h-full flex-col">

              {/* MOBILE TOP */}
              <div className="flex min-h-[86px] items-center justify-between border-b border-[#1E2A24]/10 px-4 sm:px-6">
                <Logo
                  mobile
                  onClick={closeMobileMenu}
                />

                <button
                  type="button"
                  onClick={closeMobileMenu}
                  aria-label="Close navigation"
                  className="
                    grid
                    h-11
                    w-11
                    place-items-center
                    rounded-full
                    border
                    border-[#1E2A24]/10
                    bg-white
                    text-[#1E2A24]
                    transition
                    hover:border-[#F59E0B]
                    hover:bg-[#FFF4DA]
                    focus-visible:outline-none
                    focus-visible:ring-4
                    focus-visible:ring-[#F59E0B]/20
                  "
                >
                  <CloseIcon />
                </button>
              </div>


              {/* MOBILE SCROLL AREA */}
              <div className="flex-1 overflow-y-auto overscroll-contain">
                <div className="mx-auto flex min-h-full w-full max-w-xl flex-col px-4 pb-8 pt-5 sm:px-6">

                  <nav
                    aria-label="Mobile navigation"
                    className="space-y-1"
                  >
                    {navigation.map((item) => {
                      if (item.type === "products") {
                        return (
                          <div key={item.label}>

                            {/* PRODUCT BUTTON */}
                            <button
                              type="button"
                              onClick={() =>
                                setMobileProductsOpen(
                                  (current) => !current,
                                )
                              }
                              aria-expanded={
                                mobileProductsOpen
                              }
                              aria-controls="mobile-product-menu"
                              className={[
                                "flex min-h-[54px] w-full items-center justify-between",
                                "rounded-2xl px-4 text-left text-[17px] font-bold",
                                "transition-colors duration-200",
                                productsActive
                                  ? "bg-[#FFF4DA] text-[#1E2A24]"
                                  : "text-[#3D5245] hover:bg-[#F4F1EA] hover:text-[#1E2A24]",
                              ].join(" ")}
                            >
                              <span>Product</span>

                              <ChevronIcon
                                open={mobileProductsOpen}
                              />
                            </button>


                            {/* PRODUCT SUBMENU */}
                            <div
                              id="mobile-product-menu"
                              className={[
                                "grid overflow-hidden",
                                "transition-[grid-template-rows,opacity]",
                                "duration-300",
                                mobileProductsOpen
                                  ? "grid-rows-[1fr] opacity-100"
                                  : "grid-rows-[0fr] opacity-0",
                              ].join(" ")}
                            >
                              <div className="min-h-0">
                                <div className="ml-4 mt-1 space-y-1 border-l border-[#F59E0B]/35 pl-4">

                                  <Link
                                    to="/products"
                                    onClick={closeMobileMenu}
                                    className="block rounded-xl px-3 py-3 text-sm font-extrabold text-[#F59E0B] transition hover:bg-[#FFF4DA]"
                                  >
                                    All Products
                                  </Link>


                                  {productCatalog.map(
                                    (product) => (
                                      <Link
                                        key={product.slug}
                                        to={`/products/${product.slug}`}
                                        onClick={
                                          closeMobileMenu
                                        }
                                        className="block rounded-xl px-3 py-3 text-sm font-semibold text-[#6A645D] transition hover:bg-[#F4F1EA] hover:text-[#1E2A24]"
                                      >
                                        {product.name}
                                      </Link>
                                    ),
                                  )}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }


                      return (
                        <NavLink
                          key={item.label}
                          to={item.to}
                          end={item.end}
                          onClick={closeMobileMenu}
                          className={mobileLinkClass}
                        >
                          {item.label}
                        </NavLink>
                      );
                    })}
                  </nav>


                  {/* MOBILE CTA */}
                  <div className="mt-auto pt-8">
                    <SampleButton
                      mobile
                      onClick={handleMobileSample}
                    />

                    <p className="mt-4 text-center text-[11px] font-medium leading-5 text-[#6A645D]">
                      Natural pet products · OEM / ODM ·
                      Private Label · Vietnam
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>,
          document.body,
        )
      : null;


  /* ========================================================
     DESKTOP HEADER
  ======================================================== */

  return (
    <>
      <header
        className="
          sticky
          top-0
          z-50
          border-b
          border-[#1E2A24]/10
          bg-[#FAF8F5]/95
          backdrop-blur-xl
        "
      >
        <div
          className="
            mx-auto
            flex
            min-h-[88px]
            w-full
            max-w-[1240px]
            items-center
            gap-3
            px-4
            sm:px-6
            lg:px-8
          "
        >

          {/* LOGO */}
          <Logo />


          {/* DESKTOP NAVIGATION */}
          <nav
            aria-label="Main navigation"
            className="ml-auto hidden items-center gap-1 min-[1180px]:flex"
          >
            {navigation.map((item) => {

              /* PRODUCT */
              if (item.type === "products") {
                return (
                  <div
                    key={item.label}
                    className="group relative"
                  >
                    <NavLink
                      to="/products"
                      className={desktopLinkClass}
                    >
                      <span>Product</span>
                      <ChevronIcon />
                    </NavLink>


                    {/* PRODUCT DROPDOWN */}
                    <div
                      className="
                        invisible
                        absolute
                        left-1/2
                        top-full
                        z-50
                        w-[340px]
                        -translate-x-1/2
                        translate-y-1
                        pt-3
                        opacity-0
                        transition-all
                        duration-200

                        group-hover:visible
                        group-hover:translate-y-0
                        group-hover:opacity-100

                        group-focus-within:visible
                        group-focus-within:translate-y-0
                        group-focus-within:opacity-100
                      "
                    >
                      <div className="overflow-hidden rounded-[22px] border border-[#1E2A24]/10 bg-white p-3 shadow-[0_24px_60px_rgba(30,42,36,0.14)]">

                        <p className="px-3 pb-2 pt-1 text-[9px] font-extrabold uppercase tracking-[0.18em] text-[#F59E0B]">
                          Products
                        </p>


                        <div className="space-y-1">
                          {productCatalog.map(
                            (product) => (
                              <Link
                                key={product.slug}
                                to={`/products/${product.slug}`}
                                className="flex min-h-[44px] items-center justify-between gap-4 rounded-xl px-3 text-[12px] font-semibold text-[#3D5245] transition hover:bg-[#F4F1EA] hover:text-[#1E2A24]"
                              >
                                <span>
                                  {product.name}
                                </span>

                                <span
                                  aria-hidden="true"
                                  className="text-[#F59E0B]"
                                >
                                  →
                                </span>
                              </Link>
                            ),
                          )}
                        </div>


                        <Link
                          to="/products"
                          className="mt-2 flex min-h-[44px] items-center justify-center rounded-xl bg-[#0F2F24] px-4 text-[11px] font-extrabold text-white transition hover:bg-[#3D5245]"
                        >
                          View all products
                        </Link>

                      </div>
                    </div>
                  </div>
                );
              }


              /* NORMAL NAV LINK */
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  className={desktopLinkClass}
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>


          {/* DESKTOP CTA */}
          <div className="ml-3 hidden min-[1180px]:block">
            <SampleButton
              onClick={openSampleModal}
            />
          </div>


          {/* MOBILE / TABLET BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            aria-haspopup="dialog"
            className="
              ml-auto
              grid
              h-11
              w-11
              shrink-0
              place-items-center
              rounded-full
              border
              border-[#1E2A24]/10
              bg-white
              text-[#1E2A24]
              transition
              hover:border-[#F59E0B]
              hover:bg-[#FFF4DA]
              focus-visible:outline-none
              focus-visible:ring-4
              focus-visible:ring-[#F59E0B]/20
              min-[1180px]:hidden
            "
          >
            <MenuIcon />
          </button>

        </div>
      </header>


      {mobileMenu}
    </>
  );
}