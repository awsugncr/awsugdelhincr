import { useState, useEffect } from "react";
import UpcomingEventAbout from "../../components/UpcomingEventAbout";
import UpcomingEventHero from "../../components/UpcomingEventHero/UpcomingEventHero";
import UpcomingEventDateVenue from "../../components/UpcomingEventDateVenue";
import UpcomingEventRegister from "../../components/UpcomingEventRegister";
import UpcomingEventSpeaker from "../../components/UpcomingEventSpeaker";
import PastEventHighlight from "../../components/PastEventHighlight";
import UpcomingEventLookingAhead from "../../components/UpcomingEventLookingAhead";
import UpcomingEventPopup from "../../components/UpcomingEventPopup";
import { acd2025Data } from "../../data/acd2025";
import styles from "./UpcomingEvents.module.css";
import ContactSection from "../ContactSection/ContactSection";

const UpcomingEvents = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className={styles.upcomingEventsPage}>
      {/* Event Popup */}
      <UpcomingEventPopup
        eventData={acd2025Data}
        isVisible={showPopup}
        onClose={handleClosePopup}
      />

      <UpcomingEventHero eventData={acd2025Data} />
      <UpcomingEventDateVenue eventData={acd2025Data} />
      <UpcomingEventRegister eventData={acd2025Data} />
      <UpcomingEventSpeaker eventData={acd2025Data} />
      <UpcomingEventAbout eventData={acd2025Data} />
      <PastEventHighlight eventData={acd2025Data} />
      <UpcomingEventLookingAhead eventData={acd2025Data} />
      <ContactSection />
    </div>
  );
};

export default UpcomingEvents;
