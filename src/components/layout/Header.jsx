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
      className={`h-3.5 w-3.5 transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M5.5 7.5 10 12l4.5-4.5"
        stroke="currentColor"
        strokeWidth="1.5"
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
      className="h-5 w-5"
    >
      <path
        d="M4 7h16M4 12h16M4 17h16"
        stroke="currentColor"
        strokeWidth="1.7"
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
      className="h-5 w-5"
    >
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="1.7"
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
            ? "h-[66px] w-auto object-contain"
            : "h-[76px] w-auto object-contain lg:h-[84px]"
        }
      />
    </Link>
  );
}


/* ==========================================================
   SAMPLE CTA
========================================================== */

function SampleButton({ onClick, mobile = false }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative isolate overflow-hidden",
        "border border-[#F59E0B]",
        "bg-[#F59E0B]",
        "text-[#0F2F24]",

        "transition-all duration-300",
        "ease-[cubic-bezier(.22,1,.36,1)]",

        "hover:-translate-y-[1px]",
        "hover:bg-[#FFA914]",
        "hover:shadow-[0_10px_25px_rgba(245,158,11,0.25)]",

        "active:translate-y-0",
        "active:scale-[0.985]",

        "focus-visible:outline-none",
        "focus-visible:ring-4",
        "focus-visible:ring-[#F59E0B]/20",

        mobile
          ? [
              "flex h-[54px] w-full",
              "items-center justify-center",
              "rounded-[15px]",
              "px-6",
              "text-[16px]",
              "font-extrabold",
              "leading-none",
              "tracking-[-0.02em]",
            ].join(" ")
          : [
              "hidden h-[50px] shrink-0",
              "items-center justify-center",
              "rounded-[15px]",
              "px-7",
              "text-[16px]",
              "font-extrabold",
              "leading-none",
              "tracking-[-0.02em]",
              "min-[1180px]:inline-flex",
            ].join(" "),
      ].join(" ")}
    >
      {/* LIGHT FROM BOTTOM */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-x-[12%]
          -bottom-8
          h-12
          rounded-full
          bg-white/65
          opacity-0
          blur-xl
          transition-all
          duration-500
          ease-[cubic-bezier(.22,1,.36,1)]
          group-hover:-bottom-3
          group-hover:opacity-70
        "
      />

      {/* LIGHT SWEEP */}
      <span
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          -left-[55%]
          top-0
          h-full
          w-[35%]
          -skew-x-[20deg]
          bg-gradient-to-r
          from-transparent
          via-white/45
          to-transparent
          opacity-0
          transition-all
          duration-700
          group-hover:left-[125%]
          group-hover:opacity-100
        "
      />

      <span className="relative z-10 whitespace-nowrap">
        Get Free Sample
      </span>
    </button>
  );
}

/* ==========================================================
   DESKTOP NAV STYLE
========================================================== */

function desktopLinkClass({ isActive }) {
  return [
    "relative inline-flex h-[84px] items-center",

    "px-3",

    "text-[16px]",
    "font-bold",
    "leading-none",
    "tracking-[-0.015em]",

    "transition-colors duration-200",

    "after:absolute",
    "after:bottom-[18px]",
    "after:left-3",
    "after:right-3",
    "after:h-[2px]",
    "after:origin-center",
    "after:rounded-full",
    "after:bg-[#F59E0B]",
    "after:transition-transform",
    "after:duration-200",

    isActive
      ? [
          "text-[#0F2F24]",
          "after:scale-x-100",
        ].join(" ")
      : [
          "text-[#0F2F24]",
          "after:scale-x-0",
          "hover:text-[#D97706]",
          "hover:after:scale-x-100",
        ].join(" "),
  ].join(" ");
}


/* ==========================================================
   MOBILE NAV STYLE
========================================================== */

function mobileLinkClass({ isActive }) {
  return [
    "flex min-h-[52px] items-center",
    "rounded-xl px-3",

    "text-[17px]",
    "font-semibold",
    "tracking-[-0.01em]",

    "transition-colors duration-200",

    isActive
      ? "bg-[#FFF3D6] text-[#D97706]"
      : "text-[#1E2A24] hover:bg-[#F4F1EA] hover:text-[#1E2A24]",
  ].join(" ");
}


/* ==========================================================
   HEADER
========================================================== */

export default function Header() {
  const location = useLocation();
  const { openSampleModal } = useSampleModal();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [
    mobileProductsOpen,
    setMobileProductsOpen,
  ] = useState(false);

  const productsActive =
    location.pathname.startsWith("/products");


  /* ========================================================
     CLOSE MOBILE AFTER ROUTE CHANGE
  ======================================================== */

  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);


  /* ========================================================
     MOBILE SCROLL LOCK + ESC
  ======================================================== */

  useEffect(() => {
    if (!mobileOpen) return undefined;

    const html = document.documentElement;
    const body = document.body;

    const previousHtmlOverflow =
      html.style.overflow;

    const previousBodyOverflow =
      body.style.overflow;

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

      html.style.overflow =
        previousHtmlOverflow;

      body.style.overflow =
        previousBodyOverflow;
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
            className="
              fixed
              inset-0
              z-[100]
              bg-[#FAF8F5]
            "
          >
            <div className="flex h-full flex-col">

              {/* MOBILE TOP */}
              <div
                className="
                  flex
                  h-[80px]
                  shrink-0
                  items-center
                  justify-between
                  border-b
                  border-[#1E2A24]/10
                  px-4
                  sm:px-6
                "
              >
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
                    h-10
                    w-10
                    place-items-center
                    rounded-full
                    border
                    border-[#1E2A24]/10
                    bg-white
                    text-[#1E2A24]
                    transition
                    hover:border-[#F59E0B]
                    hover:text-[#D97706]
                    focus-visible:outline-none
                    focus-visible:ring-4
                    focus-visible:ring-[#F59E0B]/20
                  "
                >
                  <CloseIcon />
                </button>

              </div>


              {/* MOBILE SCROLL */}
              <div className="flex-1 overflow-y-auto overscroll-contain">

                <div
                  className="
                    mx-auto
                    flex
                    min-h-full
                    w-full
                    max-w-xl
                    flex-col
                    px-4
                    pb-8
                    pt-5
                    sm:px-6
                  "
                >
                  <nav
                    aria-label="Mobile navigation"
                    className="space-y-1"
                  >
                    {navigation.map((item) => {

                      /* PRODUCT MOBILE */
                      if (item.type === "products") {
                        return (
                          <div key={item.label}>

                            <button
                              type="button"
                              onClick={() =>
                                setMobileProductsOpen(
                                  (current) =>
                                    !current,
                                )
                              }
                              aria-expanded={
                                mobileProductsOpen
                              }
                              aria-controls="mobile-product-menu"
                              className={[
                                "flex min-h-[52px] w-full",
                                "items-center justify-between",
                                "rounded-xl px-3",
                                "text-left text-[17px]",
                                "font-semibold",
                                "tracking-[-0.01em]",
                                "transition-colors duration-200",

                                productsActive
                                  ? "bg-[#FFF3D6] text-[#D97706]"
                                  : "text-[#1E2A24] hover:bg-[#F4F1EA]",
                              ].join(" ")}
                            >
                              <span>Product</span>

                              <ChevronIcon
                                open={
                                  mobileProductsOpen
                                }
                              />
                            </button>


                            {/* MOBILE PRODUCT SUBMENU */}
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

                                <div
                                  className="
                                    ml-3
                                    mt-1
                                    space-y-1
                                    border-l
                                    border-[#F59E0B]/30
                                    pl-3
                                  "
                                >
                                  <Link
                                    to="/products"
                                    onClick={
                                      closeMobileMenu
                                    }
                                    className="
                                      block
                                      rounded-lg
                                      px-3
                                      py-2.5
                                      text-[15px]
                                      font-semibold
                                      text-[#D97706]
                                      transition
                                      hover:bg-[#FFF3D6]
                                    "
                                  >
                                    All Products
                                  </Link>


                                  {productCatalog.map(
                                    (product) => (
                                      <Link
                                        key={
                                          product.slug
                                        }
                                        to={`/products/${product.slug}`}
                                        onClick={
                                          closeMobileMenu
                                        }
                                        className="
                                          block
                                          rounded-lg
                                          px-3
                                          py-2.5
                                          text-[15px]
                                          font-medium
                                          text-[#3D4A42]
                                          transition
                                          hover:bg-[#F4F1EA]
                                          hover:text-[#1E2A24]
                                        "
                                      >
                                        {
                                          product.name
                                        }
                                      </Link>
                                    ),
                                  )}

                                </div>
                              </div>
                            </div>

                          </div>
                        );
                      }


                      /* NORMAL MOBILE LINK */
                      return (
                        <NavLink
                          key={item.label}
                          to={item.to}
                          end={item.end}
                          onClick={closeMobileMenu}
                          className={
                            mobileLinkClass
                          }
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
                      onClick={
                        handleMobileSample
                      }
                    />

                    <p
                      className="
                        mt-4
                        text-center
                        text-[12px]
                        font-medium
                        leading-5
                        text-[#3D4A42]
                      "
                    >
                      Natural pet products ·
                      OEM / ODM · Private Label ·
                      Vietnam
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
          border-[#1E2A24]/[0.08]
          bg-white
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[92px]
            w-full
            max-w-[1360px]
            items-center
            px-4

            sm:px-6

            lg:px-8

            min-[1180px]:grid
            min-[1180px]:grid-cols-[240px_minmax(0,1fr)_240px]
          "
        >

          {/* =================================================
              LEFT / LOGO
          ================================================= */}

          <div
            className="
              flex
              items-center
              justify-self-start
            "
          >
            <Logo />
          </div>


          {/* =================================================
              CENTER / DESKTOP NAV
          ================================================= */}

          <nav
            aria-label="Main navigation"
            className="
              hidden
              items-center
              justify-center
              gap-4
              min-[1180px]:flex
              xl:gap-6
            "
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
                      className={
                        desktopLinkClass
                      }
                    >
                      <span
                        className="
                          flex
                          items-center
                          gap-1
                        "
                      >
                        Product
                        <ChevronIcon />
                      </span>
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
                        translate-y-2
                        pt-2
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
                      <div
                        className="
                          rounded-[18px]
                          border
                          border-[#1E2A24]/10
                          bg-white
                          p-2.5
                          shadow-[0_18px_48px_rgba(30,42,36,0.12)]
                        "
                      >
                        <p
                          className="
                            px-3
                            pb-2
                            pt-1
                            text-[11px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                            text-[#D97706]
                          "
                        >
                          Products
                        </p>


                        <div className="space-y-0.5">

                          {productCatalog.map(
                            (product) => (
                              <Link
                                key={
                                  product.slug
                                }
                                to={`/products/${product.slug}`}
                                className="
                                  flex
                                  min-h-[42px]
                                  items-center
                                  justify-between
                                  gap-3
                                  rounded-lg
                                  px-3
                                  text-[14px]
                                  font-medium
                                  text-[#1E2A24]
                                  transition
                                  hover:bg-[#F4F1EA]
                                  hover:text-[#0F2F24]
                                "
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
                          className="
                            mt-2
                            flex
                            min-h-[42px]
                            items-center
                            justify-center
                            rounded-lg
                            bg-[#0F2F24]
                            px-4
                            text-[13px]
                            font-bold
                            text-white
                            transition
                            hover:bg-[#2F4538]
                          "
                        >
                          View all products
                        </Link>

                      </div>
                    </div>

                  </div>
                );
              }


              /* NORMAL DESKTOP LINK */
              return (
                <NavLink
                  key={item.label}
                  to={item.to}
                  end={item.end}
                  className={
                    desktopLinkClass
                  }
                >
                  {item.label}
                </NavLink>
              );
            })}
          </nav>


          {/* =================================================
              RIGHT / CTA
          ================================================= */}

          <div
            className="
              hidden
              justify-self-end
              min-[1180px]:block
            "
          >
            <SampleButton
              onClick={openSampleModal}
            />
          </div>


          {/* =================================================
              MOBILE / TABLET MENU BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={() =>
              setMobileOpen(true)
            }
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            aria-haspopup="dialog"
            className="
              ml-auto
              grid
              h-10
              w-10
              shrink-0
              place-items-center
              rounded-full
              border
              border-[#1E2A24]/10
              bg-white
              text-[#1E2A24]

              transition

              hover:border-[#F59E0B]
              hover:text-[#D97706]

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