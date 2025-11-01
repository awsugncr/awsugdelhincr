import PropTypes from "prop-types";
import styles from "./UpcomingEventSpeaker.module.css";

const UpcomingEventSpeaker = ({ eventData }) => {
  const speakersData = eventData?.speakers || [];

  return (
    <section className={styles.speakersSection} id="speakers">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Featured Speakers</h2>
          <p className={styles.sectionSubtitle}>Learn from industry experts and AWS professionals</p>
        </div>

        <div className={styles.speakerCardContainer}>
          {speakersData.map((speaker, index) => (
            <div key={index} className={styles.speakerCard}>
              <img 
                src={speaker.image} 
                alt={speaker.name} 
                className={styles.profileImg}
              />
              <div className={styles.speakerCardContent}>
                <h3>{speaker.name}</h3>
                <p>{speaker.title}</p>
                <p className={styles.speakerConnect}>
                  <a 
                    href={speaker.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Connect
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

UpcomingEventSpeaker.propTypes = {
  eventData: PropTypes.shape({
    speakers: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        linkedin: PropTypes.string
      })
    ),
  }),
};

export default UpcomingEventSpeaker;