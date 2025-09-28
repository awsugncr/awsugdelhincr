import PropTypes from "prop-types";
import styles from "./PastEventAbout.module.css";

const PastEventAbout = ({ eventData }) => {
  // Use provided sections or defaults
  const sections = eventData?.aboutSections;

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        {sections.map((section, index) => (
          <div key={index} className={styles.sectionWrapper}>
            <div className={styles.sectionHeader}>
              <h2 className={styles.sectionTitle}>{section.title}</h2>
            </div>

            <div className={styles.contentWrapper}>
              {section.content.map((paragraph, pIndex) => (
                <p key={pIndex} className={styles.paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>

            {index < sections.length - 1 && (
              <div className={styles.sectionDivider}></div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

PastEventAbout.propTypes = {
  eventData: PropTypes.shape({
    aboutSections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
    ),
  }),
};

export default PastEventAbout;
