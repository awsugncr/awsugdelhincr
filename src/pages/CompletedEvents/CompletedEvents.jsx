import PastEventHero from "../../components/PastEventHero/PastEventHero";
import PastEventAbout from "../../components/PastEventAbout/PastEventAbout";
import PastEventMarquee from "../../components/PastEventMarquee/PastEventMarquee";
import PastEventSpeakers from "../../components/PastEventSpeakers/PastEventSpeakers";
import PastEventHighlight from "../../components/PastEventHighlight/PastEventHighlight";
import PastEventSponsors from "../../components/PastEventSponsors/PastEventSponsors";
import PastEventLookingAhead from "../../components/PastEventLookingAhead/PastEventLookingAhead";
// import { acd2024Data } from "../../data/acd2024";
import styles from "./CompletedEvents.module.css";
import ContactSection from "../ContactSection/ContactSection";
import PropTypes from "prop-types";

const CompletedEvents = ({ eventData }) => {
  return (
    <div className={styles.completedEventsPage}>
      <PastEventHero eventData={eventData} />
      <PastEventMarquee eventData={eventData} />
      <PastEventAbout eventData={eventData} />
      <PastEventSpeakers eventData={eventData} />
      <PastEventHighlight eventData={eventData} />
      <PastEventSponsors eventData={eventData} />
      <PastEventLookingAhead eventData={eventData} />
      <ContactSection />
    </div>
  );
};
CompletedEvents.propTypes = {
  eventData: PropTypes.object.isRequired,
};

export default CompletedEvents;
