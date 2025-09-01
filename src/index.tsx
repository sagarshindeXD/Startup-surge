import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./lib/theme";
import { MacbookPro } from "./screens/MacbookPro";
import { ServicesPage } from "./screens/ServicesPage";
import { AboutPage } from "./screens/AboutPage/AboutPage";
import { BlogsPage } from "./screens/BlogsPage";
import { AIPage } from "./screens/AIPage";
import { BlogDetailPage } from "./screens/BlogDetailPage";
import { ScrollToTop } from "./components/ScrollToTop";
import PageTransition from "./components/PageTransition";
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
import { PrivacyPolicyPage } from "./screens/PrivacyPolicyPage/PrivacyPolicyPage";

// AnimatedRoutes component to handle route transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Routes location={location}>
      <Route path="/" element={<PageTransition pathname={pathname}><MacbookPro /></PageTransition>} />
      <Route path="/about" element={<PageTransition pathname={pathname}><AboutPage /></PageTransition>} />
      <Route path="/blogs" element={<PageTransition pathname={pathname}><BlogsPage /></PageTransition>} />
      <Route path="/blogs/:slug" element={<PageTransition pathname={pathname}><BlogDetailPage /></PageTransition>} />
      <Route path="/ai" element={<PageTransition pathname={pathname}><AIPage /></PageTransition>} />
      <Route path="/services" element={<PageTransition pathname={pathname}><ServicesPage /></PageTransition>} />
      <Route path="/services/seo" element={<PageTransition pathname={pathname}><SEOPage /></PageTransition>} />
      <Route path="/services/social-media-marketing" element={<PageTransition pathname={pathname}><SocialMediaMarketingPage /></PageTransition>} />
      <Route path="/services/performance-marketing" element={<PageTransition pathname={pathname}><PerformanceMarketingPage /></PageTransition>} />
      <Route path="/services/ui-ux-designer" element={<PageTransition pathname={pathname}><UIUXDesignerPage /></PageTransition>} />
      <Route path="/services/graphic-designer" element={<PageTransition pathname={pathname}><GraphicDesignerPage /></PageTransition>} />
      <Route path="/services/ecommerce-marketing" element={<PageTransition pathname={pathname}><EcommerceMarketingPage /></PageTransition>} />
      <Route path="/services/whatsapp-marketing" element={<PageTransition pathname={pathname}><WhatsAppMarketingPage /></PageTransition>} />
      <Route path="/services/email-marketing" element={<PageTransition pathname={pathname}><EmailMarketingPage /></PageTransition>} />
      <Route path="/services/influencer-marketing" element={<PageTransition pathname={pathname}><InfluencerMarketingPage /></PageTransition>} />
      <Route path="/privacy-policy" element={<PageTransition pathname={pathname}><PrivacyPolicyPage /></PageTransition>} />
    </Routes>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <HelmetProvider>
      <ThemeProvider>
        <Router>
          <ScrollToTop />
          <AnimatedRoutes />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  </StrictMode>,
);
