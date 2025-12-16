import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomeSectionPage from "./pages/Landing/HomeSectionPage";
import WhatWeDoPage from "./pages/Landing/WhatWeDoPage";
import DigitalAIPage from "./pages/Landing/DigitalAIPage";
import SoftwareApplicationsPage from "./pages/Landing/SoftwareApplicationsPage";
import IndustriesPage from "./pages/Landing/IndustriesPage";
import WhyVeltronixPage from "./pages/Landing/WhyVeltronixPage";
import InsightsPage from "./pages/Landing/InsightsPage";
import SuccessStoriesPage from "./pages/Landing/SuccessStoriesPage";
import CareersPage from "./pages/Landing/CareersPage";
import ContactPage from "./pages/Landing/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomeSectionPage />} />
          <Route path="/what-we-do" element={<WhatWeDoPage />} />
          <Route path="/digital-ai" element={<DigitalAIPage />} />
          <Route
            path="/software-applications"
            element={<SoftwareApplicationsPage />}
          />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/why-veltronix" element={<WhyVeltronixPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route
            path="/success-stories"
            element={<SuccessStoriesPage />}
          />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
