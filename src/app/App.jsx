import ProductDetailPage from "../pages/ProductDetailPage";
import { useEffect } from "react";

import {
  HashRouter,
  Route,
  Routes,
  useLocation,
} from "react-router";

import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ProductsPage from "../pages/ProductsPage";

import ServicePage from "../pages/ServicePage";
import OemOdmPage from "../pages/OemOdmPage";
import FaqPage from "../pages/FaqPage";
import ContactPage from "../pages/ContactPage";

import {
  SampleModalProvider,
} from "../features/sample/SampleModalContext";
import SampleModal from "../features/sample/SampleModal";

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

        <SampleModal />
      </SampleModalProvider>
    </HashRouter>
  );
}
