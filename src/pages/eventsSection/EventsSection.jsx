import { Link } from "react-router-dom";
import { FiArrowRight, FiCalendar, FiMapPin, FiExternalLink, FiClock } from "react-icons/fi";
import Heading from "../../components/Heading/Heading";
import { eventsData } from "../../data/eventsData";
import styles from "./EventsSection.module.css";

// Show only first 4 events
const events = eventsData.slice(0, 4);

function EventsSection() {

  return (
    <div className={styles.sectionWrapper}>
      <div className={styles.headerSection}>
        <Heading text={"Our Events"} />
      </div>

      <section className={styles.eventsSection}>
        {events.map((event) => (
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
      </section>

      <div className={styles.viewAllSection}>
        <Link to="/events" className={styles.viewAllButton}>
          <span>View All Events</span>
          <FiArrowRight className={styles.buttonIcon} />
        </Link>
      </div>
    </div>
  );
}

export default EventsSection;
