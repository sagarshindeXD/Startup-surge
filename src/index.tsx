import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./lib/theme";
import { ScrollToTopWrapper } from "./components/ScrollToTopWrapper";

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

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <ThemeProvider>
      <Router>
        <ScrollToTopWrapper>
          <Routes>
            <Route path="/" element={<MacbookPro />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/seo" element={<SEOPage />} />
            <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
            <Route path="/services/performance-marketing" element={<PerformanceMarketingPage />} />
            <Route path="/services/ui-ux-designer" element={<UIUXDesignerPage />} />
            <Route path="/services/graphic-designer" element={<GraphicDesignerPage />} />
            <Route path="/services/ecommerce-marketing" element={<EcommerceMarketingPage />} />
            <Route path="/services/whatsapp-marketing" element={<WhatsAppMarketingPage />} />
            <Route path="/services/email-marketing" element={<EmailMarketingPage />} />
            <Route path="/services/influencer-marketing" element={<InfluencerMarketingPage />} />
          </Routes>
        </ScrollToTopWrapper>
      </Router>
    </ThemeProvider>
  </StrictMode>,
);
