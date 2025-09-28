import { useState, useEffect } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import PropTypes from "prop-types";
import styles from "./PastEventSpeakers.module.css";

const PastEventSpeakers = ({ eventData }) => {
  const [loadedImages, setLoadedImages] = useState({});
  const speakers = eventData?.speakers || [];

  // Sort speakers alphabetically by name
  const sortedSpeakers = [...speakers].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Dynamic imports for speaker images
  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = sortedSpeakers.map(async (speaker, index) => {
        try {
          const imageModule = await import(speaker.image);
          return {
            index,
            src: imageModule.default,
          };
        } catch (error) {
          console.warn(`Failed to load image for ${speaker.name}:`, error);
          return {
            index,
            src: null,
          };
        }
      });

      const results = await Promise.all(imagePromises);
      const imageMap = {};

      results.forEach(({ index, src }) => {
        if (src) {
          imageMap[index] = src;
        }
      });

      setLoadedImages(imageMap);
    };

    if (sortedSpeakers.length > 0) {
      loadImages();
    }
  }, [sortedSpeakers]);

  if (!speakers || speakers.length === 0) {
    return null;
  }

  return (
    <section className={styles.speakersSection}>
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
          {sortedSpeakers.map((speaker, index) => (
            <div key={speaker.name} className={styles.speakerCard}>
              <div className={styles.imageContainer}>
                {loadedImages[index] && (
                  <img
                    src={loadedImages[index]}
                    alt={speaker.name}
                    className={styles.speakerImage}
                    loading="lazy"
                  />
                )}

                {/* Speaker Badge */}
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
                {/* LinkedIn icon already shown in imageContainer; no need to repeat here */}
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
