
import styles from "./UpcomingEvents.module.css";
import { Link } from "react-router-dom";

const UpcomingEvents = () => {
  return (
    <div className={styles.teaserContainer}>
      <div className={styles.eventCard}>
        {/* Heading Section */}
        <div className={styles.headingSection}>
          <h1 className={styles.eventTitle}>
            AWS Community Day
            <span className={styles.titleHighlight}> Delhi NCR 2025</span>
          </h1>
          <div className={styles.statusBadge}>November 2025 • Delhi</div>
        </div>

        {/* Image Section */}
        {/* <div className={styles.imageSection}>
          <img
            src={acd2025Poster}
            alt="AWS Community Day Delhi NCR 2025"
            className={styles.eventImage}
          />
          <div className={styles.imageOverlay}>
            <div className={styles.badge}>
              <span className={styles.badgeText}>UPCOMING EVENT</span>
            </div>
          </div>
        </div> */}

        {/* Content Section */}
        <div className={styles.contentSection}>
          <div className={styles.eventInfo}>
            <p className={styles.eventDescription}>
              Join us for the biggest AWS community gathering in Delhi NCR this November! 
              Connect, learn, and innovate with cloud enthusiasts and industry leaders. 
              Final venue details and agenda will be announced soon.
            </p>
          </div>

          <div className={styles.sponsorSection}>
            <h3 className={styles.sponsorTitle}>We&apos;re Open for Sponsorship!</h3>
            <p className={styles.sponsorDescription}>
              Partner with us to empower the AWS community and showcase your brand to hundreds of cloud professionals and enthusiasts.
            </p>
            <Link to="/sponsorship" className={styles.sponsorButton}>
              <span>Become a Sponsor</span>
              <svg className={styles.buttonIcon} viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;