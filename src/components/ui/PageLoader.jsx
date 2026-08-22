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

  const routeLabel = getRouteLabel(pathname);

  return (
    <div
      className="page-loader"
      role="status"
      aria-live="polite"
      aria-label={`Loading ${routeLabel}`}
    >
      <div
        className="page-loader__ambient page-loader__ambient--one"
        aria-hidden="true"
      />

      <div
        className="page-loader__ambient page-loader__ambient--two"
        aria-hidden="true"
      />

      <div className="page-loader__content">

        <div
          className="page-loader__emblem"
          aria-hidden="true"
        >
          <span className="page-loader__orbit page-loader__orbit--outer" />

          <span className="page-loader__orbit page-loader__orbit--inner" />

          <span className="page-loader__orbit-dot" />

          <div className="page-loader__core">
            <span className="page-loader__letter">
              V
            </span>

            <span className="page-loader__leaf" />
          </div>
        </div>

        <div className="page-loader__copy">

          <strong className="page-loader__wordmark">
            VinEco
          </strong>

          <div className="page-loader__route">
            <span>
              Loading
            </span>

            <strong>
              {routeLabel}
            </strong>
          </div>

        </div>

        <div
          className="page-loader__progress"
          aria-hidden="true"
        >
          <span />
        </div>

        <p className="page-loader__tagline">
          Crafted by Nature
          <i />
          Perfected by Us
        </p>

      </div>
    </div>
  );
}