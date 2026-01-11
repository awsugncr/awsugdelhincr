import { FaLinkedinIn } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./PastEventVolunteers.module.css";

const PastEventVolunteers = ({ eventData }) => {
  const volunteers = eventData?.volunteers || [];

  if (volunteers.length === 0) return null;

  // Sort volunteers alphabetically by name
  const sortedVolunteers = [...volunteers].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <section id="volunteers" className={styles.volunteersSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Amazing Volunteers</h2>
          <p className={styles.sectionDescription}>
            The success of this event was made possible by our dedicated
            volunteers who worked tirelessly behind the scenes to ensure
            everything ran smoothly and every attendee had an exceptional
            experience.
          </p>
        </div>

        <div className={styles.volunteersGrid}>
          {sortedVolunteers.map((volunteer) => (
            <div key={volunteer.name} className={styles.volunteerCard}>
              <div className={styles.imageContainer}>
                <img
                  src={volunteer.image}
                  alt={volunteer.name}
                  className={styles.volunteerImage}
                  loading="lazy"
                />

                <div className={styles.volunteerBadge}>Volunteer</div>

                {volunteer.linkedin && (
                  <a
                    href={volunteer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.linkedinIcon}
                    aria-label={`${volunteer.name} LinkedIn Profile`}
                  >
                    <FaLinkedinIn />
                  </a>
                )}
              </div>

              <div className={styles.volunteerInfo}>
                <h3 className={styles.volunteerName}>{volunteer.name}</h3>
                {volunteer.linkedin && (
                  <a
                    href={volunteer.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.connectLink}
                  >
                    Connect
                  </a>
                )}
              </div>

              {volunteer.linkedin && (
                <a
                  href={volunteer.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkedinIcon}
                  aria-label={`${volunteer.name} LinkedIn Profile`}
                >
                  <FaLinkedinIn />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

PastEventVolunteers.propTypes = {
  eventData: PropTypes.shape({
    volunteers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        linkedin: PropTypes.string,
      })
    ),
  }),
};

export default PastEventVolunteers;
