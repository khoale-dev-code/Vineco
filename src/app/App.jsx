import { lazy, Suspense, useEffect } from "react";

import {
  HashRouter,
  Route,
  Routes,
  useLocation,
} from "react-router";

import PageLoader from "../components/ui/PageLoader";

import {
  SampleModalProvider,
} from "../features/sample/SampleModalContext";
import SampleModal from "../features/sample/SampleModal";

/*
 * Route-level code splitting.
 *
 * Each page is downloaded only when needed.
 * PageLoader is displayed while its chunk is loading.
 */
const HomePage = lazy(
  () => import("../pages/HomePage"),
);

const AboutPage = lazy(
  () => import("../pages/AboutPage"),
);

const ProductsPage = lazy(
  () => import("../pages/ProductsPage"),
);

const ProductDetailPage = lazy(
  () => import("../pages/ProductDetailPage"),
);

const ServicePage = lazy(
  () => import("../pages/ServicePage"),
);

const OemOdmPage = lazy(
  () => import("../pages/OemOdmPage"),
);

const FaqPage = lazy(
  () => import("../pages/FaqPage"),
);

const ContactPage = lazy(
  () => import("../pages/ContactPage"),
);


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter>
      <SampleModalProvider>
        <ScrollToTop />

        <Suspense fallback={<PageLoader />}>
          <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/products"
            element={<ProductsPage />}
          />

          <Route path="/products/:slug" element={<ProductDetailPage />} />

          <Route
            path="/service"
            element={<ServicePage />}
          />

          <Route
            path="/oem-odm"
            element={<OemOdmPage />}
          />

          <Route
            path="/faq"
            element={<FaqPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="*"
            element={<HomePage />}
          />
          </Routes>
        </Suspense>

        <SampleModal />
      </SampleModalProvider>
    </HashRouter>
  );
}
