import React, { useEffect } from 'react';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import ScrollingLogos from './components/ScrollingLogos';
import ContactForm from './components/ContactForm';
import ConnectWithUs from './components/ConnectWithUs';
import GymStats from "./components/GymStats"

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Pricing />
        <GymStats/>
        <Testimonials />
        <ConnectWithUs />
        <Footer />
        <p className='text-center'> developed by  ❤️ amruthexe</p>
      </div>
    </>
  );
};

export default App;
