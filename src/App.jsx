import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
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
import CompletedEvents from "./pages/CompletedEvents/CompletedEvents";

import Portfolio from "./pages/dipalik/Portfolio";
import UpcomingEvents from "./pages/UpcomingEvents/UpcomingEvents";
import AgendaPage from "./pages/AgendaPage/AgendaPage";

import { acd2024Data } from "./data/acd2024";
import { agenticAiAwsData } from "./data/agenticAIData";
import { amazonQWorkshopData } from "./data/astuteDev";
import { awsmeetupData } from "./data/awsmeetup";
import { awsSecurityHubData } from "./data/awsSecurityHub";
import { gameday2025Data } from "./data/gameDay2025";
import { innovateAwsData } from "./data/innovateFaster";
import { reinventRecapData } from "./data/reInventRecap";
import { reimaginingCLIData } from "./data/reimaginingCLI";
import { witData } from "./data/wit";

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
        <Route path="/acd2025" element={<UpcomingEvents />} />
        <Route path="/acd2025/agenda" element={<AgendaPage />} />
        <Route path="/sponsorship" element={<CFS />} />
        <Route path="/dipalik" element={<Portfolio />} />
        <Route
          path="/acd2024"
          element={<CompletedEvents eventData={acd2024Data} />}
        />
        <Route
          path="/gameday2025"
          element={<CompletedEvents eventData={gameday2025Data} />}
        />
        <Route
          path="/astutedev"
          element={<CompletedEvents eventData={amazonQWorkshopData} />}
        />
        <Route
          path="/awsmeetup"
          element={<CompletedEvents eventData={awsmeetupData} />}
        />
        <Route
          path="/awsSecurityHub"
          element={<CompletedEvents eventData={awsSecurityHubData} />}
        />
        <Route
          path="/innovateaws"
          element={<CompletedEvents eventData={innovateAwsData} />}
        />
        <Route
          path="/agenticaiaws"
          element={<CompletedEvents eventData={agenticAiAwsData} />}
        />
        <Route
          path="/reInventRecap"
          element={<CompletedEvents eventData={reinventRecapData} />}
        />
        <Route
          path="/reimaginingCLI"
          element={<CompletedEvents eventData={reimaginingCLIData} />}
        />
        <Route
          path="/wit2025"
          element={<CompletedEvents eventData={witData} />}
        />
        <Route
          path="/"
          element={
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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
