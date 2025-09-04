
import { Link } from "react-router-dom";
import { FiArrowLeft, FiCalendar, FiClock, FiMapPin, FiExternalLink } from "react-icons/fi";
import Heading from "../../components/Heading/Heading";
import { eventsData } from "../../data/eventsData";
import styles from "./AllEvents.module.css";

const AllEvents = () => {
  return (
    <div className={styles.allEventsPage}>
      {/* Navigation Header (copied from CFS) */}
      <div className={styles.pageHeader}>
        <Link to="/" className={styles.backButton}>
          <FiArrowLeft />
          <span>Back to Home</span>
        </Link>
      </div>

      <div className={styles.container}>
        <div className={styles.header}>
          <Heading text={"All Events"} />
              <p className={styles.eventsDescription}>
                Discover all our upcoming and past AWS community events.
              </p>
        </div>

        <div className={styles.eventsGrid}>
          {eventsData.map((event) => (
            <div 
              key={event.id} 
              className={styles.eventCard}
            >
              <div className={styles.eventImage}>
                <img 
                  src={event.image} 
                  alt={event.name}
                  loading="lazy"
                />
                <div className={`${styles.statusBadge} ${styles[event.status]}`}>
                  {event.status === 'completed' ? 'Completed' : 'Upcoming'}
                </div>
              </div>

              <div className={styles.eventContent}>
                <div className={styles.eventHeader}>
                  <h3 className={styles.eventTitle}>{event.name}</h3>
                  <span className={styles.eventType}>{event.type}</span>
                </div>

                <div className={styles.eventDetails}>
                  <div className={styles.detailItem}>
                    <FiCalendar className={styles.icon} />
                    <span>{event.date}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <FiClock className={styles.icon} />
                    <span>{event.time}</span>
                  </div>
                  <div className={styles.detailItem}>
                    <FiMapPin className={styles.icon} />
                    <span>{event.venue}</span>
                  </div>
                </div>

                <div className={styles.eventFooter}>
                  <a 
                    href={event.link} 
                    className={styles.eventLink}
                    aria-label={`Learn more about ${event.name}`}
                  >
                    <FiExternalLink />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllEvents;
