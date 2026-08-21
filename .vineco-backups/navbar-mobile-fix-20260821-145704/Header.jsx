import {
  useEffect,
  useState,
} from "react";

import {
  Link,
  NavLink,
  useLocation,
} from "react-router";

import {
  productCatalog,
} from "../../data/productCatalog";

import {
  useSampleModal,
} from "../../features/sample/SampleModalContext";


function ChevronIcon({
  open = false,
}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className={[
        "vineco-chevron",
        open
          ? "is-open"
          : "",
      ].join(" ")}
    >
      <path
        d="M5 7.5L10 12.5L15 7.5"
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
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20M4 12H20M4 17H20"
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
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 6L18 18M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}


const mainNavigation = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About Us",
    to: "/about",
  },
  {
    label: "Service",
    to: "/service",
  },
  {
    label: "OEM / ODM",
    to: "/oem-odm",
  },
  {
    label: "FAQ",
    to: "/faq",
  },
  {
    label: "Contact",
    to: "/contact",
  },
];


export default function Header() {
  const location = useLocation();

  const {
    openSampleModal,
  } = useSampleModal();

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [mobileProductsOpen, setMobileProductsOpen] =
    useState(false);


  /*
   * Close menu whenever React Router
   * changes page.
   */
  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }, [location.pathname]);


  /*
   * Proper iOS / mobile body lock.
   *
   * This prevents:
   * - Footer scrolling behind menu
   * - Page jumping
   * - Rubber-band scrolling through overlay
   */
  useEffect(() => {
    if (!mobileOpen) {
      return undefined;
    }

    const body =
      document.body;

    const scrollY =
      window.scrollY;

    body.classList.add(
      "vineco-mobile-nav-open",
    );

    body.style.position =
      "fixed";

    body.style.top =
      `-${scrollY}px`;

    body.style.left =
      "0";

    body.style.right =
      "0";

    body.style.width =
      "100%";

    body.style.overflow =
      "hidden";


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

      body.classList.remove(
        "vineco-mobile-nav-open",
      );

      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";

      window.scrollTo(
        0,
        scrollY,
      );
    };
  }, [mobileOpen]);


  function closeMobileMenu() {
    setMobileOpen(false);
    setMobileProductsOpen(false);
  }


  function openSampleFromMobile() {
    closeMobileMenu();

    /*
     * Give the nav one frame to unmount first.
     * Prevents modal/menu stacking glitches.
     */
    window.setTimeout(
      () => {
        openSampleModal();
      },
      60,
    );
  }


  return (
    <header className="vineco-header">

      {/* ==================================================
          DESKTOP / MOBILE TOP BAR
      ================================================== */}

      <div className="vineco-header__inner">

        <Link
          to="/"
          className="vineco-logo"
          aria-label="VinEco Home"
        >
          VinEco
        </Link>


        {/* DESKTOP NAV */}
        <nav
          className="vineco-desktop-nav"
          aria-label="Main navigation"
        >

          <NavLink
            to="/"
            end
          >
            Home
          </NavLink>

          <NavLink to="/about">
            About Us
          </NavLink>


          {/* PRODUCT DROPDOWN */}

          <div className="vineco-desktop-product">

            <NavLink
              to="/products"
              className="vineco-desktop-product__trigger"
            >
              Product

              <ChevronIcon />
            </NavLink>


            <div className="vineco-product-dropdown">

              <div className="vineco-product-dropdown__inner">

                <p>
                  PRODUCTS
                </p>

                {productCatalog.map(
                  (product) => (
                    <Link
                      key={product.slug}
                      to={`/products/${product.slug}`}
                    >
                      <span>
                        {product.name}
                      </span>

                      <span aria-hidden="true">
                        →
                      </span>
                    </Link>
                  ),
                )}

                <Link
                  to="/products"
                  className="vineco-product-dropdown__all"
                >
                  View all products
                </Link>

              </div>

            </div>

          </div>


          <NavLink to="/service">
            Service
          </NavLink>

          <NavLink to="/oem-odm">
            OEM / ODM
          </NavLink>

          <NavLink to="/faq">
            FAQ
          </NavLink>

          <NavLink to="/contact">
            Contact
          </NavLink>

        </nav>


        {/* DESKTOP SAMPLE */}

        <button
          type="button"
          onClick={openSampleModal}
          className="vineco-header__sample vineco-header__sample--desktop"
        >
          Get Free Sample
        </button>


        {/* MOBILE MENU BUTTON */}

        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="vineco-mobile-menu-button"
          aria-label="Open navigation"
          aria-expanded={mobileOpen}
        >
          <MenuIcon />
        </button>

      </div>


      {/* ==================================================
          FULL SCREEN MOBILE NAV
      ================================================== */}

      {mobileOpen && (
        <div
          className="vineco-mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >

          {/* TOP */}

          <div className="vineco-mobile-menu__top">

            <Link
              to="/"
              onClick={closeMobileMenu}
              className="vineco-mobile-menu__logo"
            >
              VinEco
            </Link>


            <button
              type="button"
              onClick={closeMobileMenu}
              className="vineco-mobile-menu__close"
              aria-label="Close navigation"
            >
              <CloseIcon />
            </button>

          </div>


          {/* SCROLLABLE AREA */}

          <div className="vineco-mobile-menu__scroll">

            <nav
              className="vineco-mobile-nav"
              aria-label="Mobile navigation links"
            >

              <NavLink
                to="/"
                end
                onClick={closeMobileMenu}
              >
                Home
              </NavLink>


              <NavLink
                to="/about"
                onClick={closeMobileMenu}
              >
                About Us
              </NavLink>


              {/* PRODUCT ACCORDION */}

              <div className="vineco-mobile-product">

                <button
                  type="button"
                  onClick={() =>
                    setMobileProductsOpen(
                      (current) => !current,
                    )
                  }
                  aria-expanded={mobileProductsOpen}
                >

                  <span>
                    Product
                  </span>

                  <ChevronIcon
                    open={mobileProductsOpen}
                  />

                </button>


                <div
                  className={[
                    "vineco-mobile-product__panel",
                    mobileProductsOpen
                      ? "is-open"
                      : "",
                  ].join(" ")}
                >

                  <div className="vineco-mobile-product__links">

                    <Link
                      to="/products"
                      onClick={closeMobileMenu}
                      className="vineco-mobile-product__all"
                    >
                      All Products
                    </Link>


                    {productCatalog.map(
                      (product) => (
                        <Link
                          key={product.slug}
                          to={`/products/${product.slug}`}
                          onClick={closeMobileMenu}
                        >
                          {product.name}
                        </Link>
                      ),
                    )}

                  </div>

                </div>

              </div>


              {mainNavigation
                .filter(
                  (item) =>
                    ![
                      "/",
                      "/about",
                    ].includes(item.to),
                )
                .map(
                  (item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      onClick={closeMobileMenu}
                    >
                      {item.label}
                    </NavLink>
                  ),
                )}

            </nav>


            {/* CTA */}

            <div className="vineco-mobile-menu__cta">

              <button
                type="button"
                onClick={openSampleFromMobile}
              >
                Get Free Sample
              </button>

              <p>
                Natural pet products · OEM / ODM ·
                Private Label · Vietnam
              </p>

            </div>

          </div>

        </div>
      )}

    </header>
  );
}