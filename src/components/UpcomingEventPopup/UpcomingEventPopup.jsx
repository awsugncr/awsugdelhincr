import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { FaCalendarAlt, FaClock, FaTimes, FaTicketAlt } from "react-icons/fa";
import styles from "./UpcomingEventPopup.module.css";
import acd2025Poster from "../../assets/events/ACD_2025/ACD_2025_POSTER.jpeg";

const UpcomingEventPopup = ({ eventData, isVisible, onClose }) => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  const handleClose = () => {
    setShowPopup(false);
    setTimeout(() => {
      onClose();
    }, 300);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleRegisterClick = () => {
    document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });
    handleClose();
  };

  if (!isVisible) return null;

  const eventTitle = eventData?.title;
  const eventDate = eventData?.date;
  const eventDay = eventData?.day;
  const venue = eventData?.venue || eventData?.venueDetails?.name;

  const eventTime = eventData?.eventDetails?.time;

  return (
    <div 
      className={`${styles.popupOverlay} ${showPopup ? styles.visible : ""}`}
      onClick={handleBackdropClick}
    >
      <div className={`${styles.popupContainer} ${showPopup ? styles.slideIn : ""}`}>
        <button 
          onClick={handleClose}
          className={styles.closeButton}
          aria-label="Close popup"
        >
          <FaTimes />
        </button>

        <div className={styles.popupContent}>
          <div className={styles.posterSection}>
            <img 
              src={acd2025Poster} 
              alt={`${eventData?.title} Poster`}
              className={styles.eventPoster}
            />
            <div className={styles.posterOverlay}></div>
          </div>

          <div className={styles.detailsSection}>
            <div className={styles.eventHeader}>
              <h2 className={styles.eventTitle}>{eventTitle}</h2>
              <p className={styles.eventSubtitle}>
                Join Delhi NCR&apos;s biggest AWS community gathering!
              </p>
            </div>
            
            <div className={styles.eventInfo}>
              <div className={styles.infoItem}>
                <FaCalendarAlt className={styles.infoIcon} />
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Date</span>
                  <span className={styles.infoValue}>{eventDate} ({eventDay})</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <FaClock className={styles.infoIcon} />
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Time</span>
                  <span className={styles.infoValue}>{eventTime}</span>
                </div>
              </div>

              <div className={styles.infoItem}>
                <FaTicketAlt className={styles.infoIcon} />
                <div className={styles.infoText}>
                  <span className={styles.infoLabel}>Venue</span>
                  <span className={styles.infoValue}>{venue}</span>
                </div>
              </div>
            </div>

            <div className={styles.ctaSection}>
              <button 
                onClick={handleRegisterClick}
                className={styles.registerButton}
              >
                <FaTicketAlt />
                Register Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

UpcomingEventPopup.propTypes = {
  eventData: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
    day: PropTypes.string,
    venue: PropTypes.string,
    venueDetails: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default UpcomingEventPopup;