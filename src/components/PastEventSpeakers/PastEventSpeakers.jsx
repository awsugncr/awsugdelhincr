import { FaLinkedinIn } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./PastEventSpeakers.module.css";

const PastEventSpeakers = ({ eventData }) => {
  const speakers = eventData?.speakers || [];

  if (speakers.length === 0) return null;

  // Sort speakers alphabetically by name
  const sortedSpeakers = [...speakers].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <section id="speakers" className={styles.speakersSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Meet Our Speakers</h2>
          <p className={styles.sectionDescription}>
            Attendees learned from industry experts and AWS community leaders
            who shared their knowledge and experience in cloud computing,
            DevOps, and modern application development.
          </p>
        </div>

        <div className={styles.speakersGrid}>
          {sortedSpeakers.map((speaker) => (
            <div key={speaker.name} className={styles.speakerCard}>
              <div className={styles.imageContainer}>
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className={styles.speakerImage}
                  loading="lazy"
                />

                <div className={styles.speakerBadge}>Speaker</div>

                {speaker.linkedin && (
                  <a
                    href={speaker.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinIcon}
                    aria-label={`${speaker.name} LinkedIn Profile`}
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </div>

              <div className={styles.speakerInfo}>
                <h3 className={styles.speakerName}>{speaker.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

PastEventSpeakers.propTypes = {
  eventData: PropTypes.shape({
    speakers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        linkedin: PropTypes.string,
      })
    ),
  }),
};

export default PastEventSpeakers;
