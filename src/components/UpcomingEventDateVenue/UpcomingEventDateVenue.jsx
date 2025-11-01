import PropTypes from "prop-types";
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaUsers, FaTicketAlt } from "react-icons/fa";
import styles from "./UpcomingEventDateVenue.module.css";

const UpcomingEventDateVenue = ({ eventData }) => {
  const eventDate = eventData?.date;
  const eventDay = eventData?.day;
  const venue = eventData?.venue || eventData?.venueDetails?.name;
  const mapEmbedUrl = eventData?.mapEmbedUrl || eventData?.venueDetails?.mapEmbedUrl;
  const expectedAttendees = eventData?.eventDetails?.attendees;
  const duration = eventData?.eventDetails?.duration;
  const entry = eventData?.eventDetails?.entry;
  const distanceFromMetro = eventData?.eventDetails?.distanceFromMetro;

  const dateParts = eventDate.match(/(\d+)\s+(\w+)\s+(\d+)/);
  const dayNumber = dateParts ? dateParts[1] : "";
  const month = dateParts ? dateParts[2] : "";
  const year = dateParts ? dateParts[3] : "";

  return (
    <section className={styles.dateVenueSection} id="date-venue">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Event Details</h2>
          <p className={styles.sectionSubtitle}>Everything you need to know about the event</p>
        </div>

        <div className={styles.mainLayout}>
          <div className={styles.leftColumn}>
            <div className={styles.featuredDateCard}>
              <div className={styles.dateCardHeader}>
                <FaCalendarAlt className={styles.dateIcon} />
                <span className={styles.dateLabel}>Event Date</span>
              </div>
              <div className={styles.dateDisplay}>
                <div className={styles.dayNumber}>{dayNumber}</div>
                <div className={styles.monthYear}>
                  <span className={styles.month}>{month}</span>
                  <span className={styles.year}>{year}</span>
                </div>
              </div>
              <div className={styles.dayName}>{eventDay}</div>
            </div>

            <div className={styles.quickInfoGrid}>
              <div className={styles.infoItem}>
                <FaClock className={styles.infoIcon} />
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Duration</span>
                  <span className={styles.infoValue}>{duration}</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FaUsers className={styles.infoIcon} />
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Expected</span>
                  <span className={styles.infoValue}>{expectedAttendees} Attendees</span>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FaTicketAlt className={styles.infoIcon} />
                <div className={styles.infoContent}>
                  <span className={styles.infoLabel}>Entry</span>
                  <span className={styles.infoValue}>{entry}</span>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.venueCard}>
              <div className={styles.venueHeader}>
                <FaMapMarkerAlt className={styles.venueIcon} />
                <div className={styles.venueInfo}>
                  <h3 className={styles.venueTitle}>Venue Location</h3>
                  <p className={styles.venueAddress}>{venue}</p>
                </div>
              </div>
              
              <div className={styles.mapWrapper}>
                <div className={styles.mapContainer}>
                  <iframe
                    src={mapEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0, borderRadius: "12px" }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Event Venue Location"
                  ></iframe>
                </div>
                <div className={styles.mapOverlay}>
                  <div className={styles.distanceInfo}>
                    <span className={styles.distanceLabel}>From Delhi Metro</span>
                    <span className={styles.distanceValue}>{distanceFromMetro}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

UpcomingEventDateVenue.propTypes = {
  eventData: PropTypes.shape({
    date: PropTypes.string,
    day: PropTypes.string,
    venue: PropTypes.string,
    mapEmbedUrl: PropTypes.string,
    venueDetails: PropTypes.shape({
      name: PropTypes.string,
      mapEmbedUrl: PropTypes.string,
    }),
    eventDetails: PropTypes.shape({
      attendees: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      duration: PropTypes.string,
      entry: PropTypes.string,
      distanceFromMetro: PropTypes.string,
    }),
  }),
};

export default UpcomingEventDateVenue;