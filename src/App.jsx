import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import CustomCursor from "./components/ui/CustomCursor";
import "./styles/globals.css";

// Lazy-loaded pages — each becomes its own chunk
const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const PortfolioPage = lazy(() => import("./pages/PortfolioPage"));
const BlogPage = lazy(() => import("./pages/BlogPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const FAQPage = lazy(() => import("./pages/FAQPage"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const CookiePolicy = lazy(() => import("./pages/CookiePolicy"));

// ScrollToTop component to reset scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <CustomCursor />
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/agricore" element={<HomePage />} />
            <Route path="/agricore/about" element={<AboutPage />} />
            <Route path="/agricore/services" element={<ServicesPage />} />
            <Route path="/agricore/portfolio" element={<PortfolioPage />} />
            <Route path="/agricore/blog" element={<BlogPage />} />
            <Route path="/agricore/contact" element={<ContactPage />} />
            <Route
              path="/agricore/testimonials"
              element={<TestimonialsPage />}
            />
            <Route path="/agricore/faq" element={<FAQPage />} />
            <Route
              path="/agricore/privacy-policy"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/agricore/terms-of-service"
              element={<TermsOfService />}
            />
            <Route path="/agricore/cookie-policy" element={<CookiePolicy />} />
          </Routes>
        </Layout>
      </Suspense>
    </>
  );
}
