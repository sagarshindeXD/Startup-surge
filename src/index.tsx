import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MacbookPro } from "./screens/MacbookPro";
import { ServicesPage } from "./screens/ServicesPage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<MacbookPro />} />
        <Route path="/services" element={<ServicesPage />} />
      </Routes>
    </Router>
  </StrictMode>,
);
