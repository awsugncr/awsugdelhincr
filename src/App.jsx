

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from 'lenis';
import NavigationDock from "./components/NavigationDock/NavigationDock";
import HeroSection from "./pages/HeroSection/HeroSection";
import AboutSection from "./pages/AboutSection/AboutSection";
import AWSUGNCRImages from "./pages/AWSUGNCRImages/AWSUGNCRImages";
import EventsSection from "./pages/eventsSection/EventsSection";
import AllEvents from "./pages/AllEvents/AllEvents";
import Banner from "./components/Banner/Banner";
import CFS from "./pages/CFS/CFS";
import Parallax from "./components/ParallaxSection/Parallax";
import Organiser from "./pages/Organiser/Organiser";
import Faq from "./pages/FAQ/Faq";
import ContactSection from "./pages/ContactSection/ContactSection";
import Loader from "./components/Loader/Loader";

function App() {
  const [loaded, setLoaded] = useState(false);

  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  const handleLoadComplete = () => {
    setLoaded(true);
  };

  if (!loaded) {
    return <Loader onLoadComplete={handleLoadComplete} />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/events" element={<AllEvents />} />
        <Route path="/sponsorship" element={<CFS />} />
        <Route path="/" element={
          <>
            <NavigationDock />
            <div id="hero">
              <HeroSection />
            </div>
            <div id="about">
              <AboutSection />
            </div>
            <AWSUGNCRImages />
            <div id="events">
              <EventsSection />
            </div>
            <Banner />
            <Parallax />
            <div id="organizers">
              <Organiser />
            </div>
            <div id="faq">
              <Faq />
            </div>
            <div id="contact">
              <ContactSection />
            </div>
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
