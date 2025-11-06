import Dock from "../../ui/Dock/Dock";
import {
  FaInfoCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaMicrophone,
  FaTicketAlt,
  FaCalendarAlt,
} from "react-icons/fa";

import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styles from "./UpcomingEventHero.module.css";
import Aurora from "../../ui/Aurora/Aurora.jsx";

const UpcomingEventHero = ({ eventData }) => {
  const title = eventData?.title;
  const date = eventData?.date;
  const venue = eventData?.venue || eventData?.venueDetails?.name;
  const description = eventData?.description;
  const communityUrl = eventData?.community?.meetupUrl;
  
  const speakerCount = eventData?.speakers?.length || 0;

  const dockItems = [
    {
      label: "Date & Venue",
      icon: <FaMapMarkerAlt />,
      onClick: () =>
        document
          .getElementById("date-venue")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Register",
      icon: <FaTicketAlt />,
      onClick: () =>
        document
          .getElementById("register")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Agenda",
      icon: <FaCalendarAlt />,
      onClick: () =>
        document
          .getElementById("agenda")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Speakers",
      icon: <FaMicrophone />,
      onClick: () =>
        document
          .getElementById("speakers")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "About",
      icon: <FaInfoCircle />,
      onClick: () =>
        document
          .getElementById("about")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
    {
      label: "Contact",
      icon: <FaEnvelope />,
      onClick: () =>
        document
          .getElementById("contact")
          ?.scrollIntoView({ behavior: "smooth" }),
    },
  ];

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: 20,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 100,
          width: "auto",
        }}
      >
        <Dock
          items={dockItems}
          className="upcoming-event-dock-navbar"
          panelHeight={60}
          dockHeight={120}
          baseItemSize={40}
          magnification={60}
        />
      </div>
      <section className={styles.heroSection}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
          }}
        >
          <Aurora colorStops={["#FFD700", "#FF9900", "#00FFF7"]} />
        </div>

        <div className={styles.glassOverlay}></div>

        <div className={styles.heroContainer}>
          <motion.div
            className={styles.contentWrapper}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Main Heading */}
            <motion.h1
              className={styles.mainHeading}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
            >
              {title}
            </motion.h1>

            <motion.p
              className={styles.eventDetails}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              {date} • {venue}
            </motion.p>

            <motion.div
              className={styles.description}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              {description.map((line, index) => (
                <p key={index} className={styles.descriptionLine}>
                  {line}
                </p>
              ))}
            </motion.div>

            <motion.div
              className={styles.statsContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {speakerCount}
                </span>
                <span className={styles.statLabel}>Speakers</span>
              </div>

              <div className={styles.statDivider}></div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {eventData?.eventDetails?.sessions}
                </span>
                <span className={styles.statLabel}>Sessions</span>
              </div>

              <div className={styles.statDivider}></div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {eventData?.eventDetails?.attendees}
                </span>
                <span className={styles.statLabel}>Expected</span>
              </div>
            </motion.div>

            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href={communityUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.joinCommunityButton}
              >
                Join our Community
              </a>
            </div>
          </motion.div>
        </div>
        <div className={styles.wavesContainer}>
          <svg
            className={styles.waves}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className={styles.parallax}>
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,153,0,0.7)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,153,0,0.5)"
              />
              <use
                xlinkHref="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,153,0,0.3)"
              />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#FF9900" />
            </g>
          </svg>
        </div>
      </section>
    </>
  );
};

UpcomingEventHero.propTypes = {
  eventData: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    venue: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    speakers: PropTypes.arrayOf(PropTypes.object),
    venueDetails: PropTypes.shape({
      name: PropTypes.string,
    }),
    community: PropTypes.shape({
      meetupUrl: PropTypes.string,
    }),
    eventDetails: PropTypes.shape({
      type: PropTypes.string,
      organizer: PropTypes.string,
      attendees: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      sessions: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      speakers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      status: PropTypes.string,
    }),
  }),
};

export default UpcomingEventHero;