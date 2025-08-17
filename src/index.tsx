import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./lib/theme";
import PageTransition from "./components/PageTransition";
import { AnimatePresence } from "framer-motion";
import { MacbookPro } from "./screens/MacbookPro";
import { ServicesPage } from "./screens/ServicesPage";
import { AboutPage } from "./screens/AboutPage/AboutPage";
import { BlogsPage } from "./screens/BlogsPage";
import {
  SEOPage,
  SocialMediaMarketingPage,
  PerformanceMarketingPage,
  UIUXDesignerPage,
  GraphicDesignerPage,
  EcommerceMarketingPage,
  WhatsAppMarketingPage,
  EmailMarketingPage,
  InfluencerMarketingPage,
} from "./screens/ServicePages";

// AnimatedRoutes component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <PageTransition location={location.pathname} key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<MacbookPro />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/seo" element={<SEOPage />} />
          <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
          <Route path="/services/performance-marketing" element={<PerformanceMarketingPage />} />
          <Route path="/services/ui-ux-designer" element={<UIUXDesignerPage />} />
          <Route path="/services/ecommerce-marketing" element={<EcommerceMarketingPage />} />
          <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketingPage />} />
          <Route path="/services/email-marketing" element={<EmailMarketingPage />} />
          <Route path="/services/influencer-marketing" element={<InfluencerMarketingPage />} />
        </Routes>
      </PageTransition>
    </AnimatePresence>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <AnimatedRoutes />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
