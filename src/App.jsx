import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Sections/Hero";
import WebServices from "./Components/Sections/WebServices";
import DigitalAI from "./Components/Sections/DigitalAI";
import SoftwareApplications from "./Components/Sections/SoftwareApplications";
import IndustriesApproach from "./Components/Sections/IndustriesApproach";
import AboutWhy from "./Components/Sections/AboutWhy";
import SuccessStories from "./Components/Sections/SuccessStories";
import Insights from "./Components/Sections/Insights";
import Careers from "./Components/Sections/Careers";
import Contact from "./Components/Sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#031D33] text-white">
      <NavBar />
      <main>
        <Hero />
        <WebServices />
        <DigitalAI />
        <SoftwareApplications />
        <IndustriesApproach />
        <AboutWhy />
        <SuccessStories />
        <Insights />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
