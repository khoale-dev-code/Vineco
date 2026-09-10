import { useLocation } from "react-router";


const routeLabels = {
  "/": "Home",
  "/about": "Our Story",
  "/products": "Products",
  "/service": "Services",
  "/oem-odm": "OEM / ODM",
  "/faq": "FAQ",
  "/contact": "Contact",
};


function getRouteLabel(pathname) {
  if (pathname.startsWith("/products/")) {
    return "Product Detail";
  }

  return routeLabels[pathname] ?? "VinEco";
}


export default function PageLoader() {
  const { pathname } = useLocation();

  const routeLabel =
    getRouteLabel(pathname);


  return (
    <div
      className="page-loader"
      role="status"
      aria-live="polite"
      aria-label={`Loading ${routeLabel}`}
    >

      {/* BACKGROUND DECOR */}
      <div
        className="
          page-loader__ambient
          page-loader__ambient--one
        "
        aria-hidden="true"
      />

      <div
        className="
          page-loader__ambient
          page-loader__ambient--two
        "
        aria-hidden="true"
      />


      {/* CONTENT */}
      <div className="page-loader__content">

        {/* LOGO */}
        <div
          className="page-loader__logo-stage"
          aria-hidden="true"
        >

          <span
            className="
              page-loader__ring
              page-loader__ring--outer
            "
          />

          <span
            className="
              page-loader__ring
              page-loader__ring--inner
            "
          />


          <div className="page-loader__logo-shell">

            <img
              src="/images/social/favicon.png?v=4"
              alt=""
              draggable="false"
              className="page-loader__logo"
            />

          </div>


          <span className="page-loader__spark" />

        </div>


        {/* BRAND / ROUTE */}
        <div className="page-loader__copy">

          <strong className="page-loader__wordmark">
            VinEco
          </strong>


          <div className="page-loader__route">

            <span>
              Loading
            </span>

            <i aria-hidden="true" />

            <strong>
              {routeLabel}
            </strong>

          </div>

        </div>


        {/* PROGRESS */}
        <div
          className="page-loader__progress"
          aria-hidden="true"
        >
          <span />
        </div>


        {/* TAGLINE */}
        <p className="page-loader__tagline">

          <span>
            Natural Pet Products
          </span>

          <i aria-hidden="true" />

          <span>
            Made in Vietnam
          </span>

        </p>

      </div>

    </div>
  );
}