import { motion } from "framer-motion";
import PropTypes from "prop-types";
import styles from "./PastEventHero.module.css";
import Aurora from "../../ui/Aurora/Aurora.jsx";
import PastEventDock from "../PastEventDock/PastEventDock";

const PastEventHero = ({ eventData }) => {
  // Use event data or defaults
  const title = eventData?.title || "AWS Community Day 2024";
  const date = eventData?.date || "October 20, 2024";
  const venue = eventData?.venue || "New Delhi, India";
  const description = eventData?.description || [
    "A day to connect, learn, and grow with the AWS community.",
    "Join developers, students, and professionals for an unforgettable experience.",
  ];

  return (
    <>
      <PastEventDock eventData={eventData} />
      <section className={styles.heroSection}>
        {/* Aurora Background Layer */}
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

        {/* Glassmorphic Overlay */}
        <div className={styles.glassOverlay}></div>

        {/* Centered Content Container */}
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

            {/* Date & Venue */}
            <motion.p
              className={styles.eventDetails}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              {date} • {venue}
            </motion.p>

            {/* Event Description */}
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

            {/* Event Stats */}
            <motion.div
              className={styles.statsContainer}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {eventData?.eventDetails?.speakers || "15+"}
                </span>
                <span className={styles.statLabel}>Speakers</span>
              </div>

              <div className={styles.statDivider}></div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {eventData?.eventDetails?.sessions || "12+"}
                </span>
                <span className={styles.statLabel}>Sessions</span>
              </div>

              <div className={styles.statDivider}></div>

              <div className={styles.statItem}>
                <span className={styles.statNumber}>
                  {eventData?.eventDetails?.attendees || "500+"}
                </span>
                <span className={styles.statLabel}>Attendees</span>
              </div>
            </motion.div>

            {/* Join Community Button */}
            <div
              style={{
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <a
                href="https://www.meetup.com/amazonaws-delhi/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.joinCommunityButton}
              >
                Join our Community
              </a>
            </div>
          </motion.div>
        </div>
        {/* Waves at the bottom */}
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

PastEventHero.propTypes = {
  eventData: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    venue: PropTypes.string,
    description: PropTypes.arrayOf(PropTypes.string),
    eventDetails: PropTypes.shape({
      type: PropTypes.string,
      organizer: PropTypes.string,
      attendees: PropTypes.number,
      sessions: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      speakers: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      status: PropTypes.string,
    }),
  }),
};

export default PastEventHero;
