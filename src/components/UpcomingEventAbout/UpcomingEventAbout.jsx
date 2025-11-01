import PropTypes from "prop-types";
import { FaUsers, FaRocket, FaLightbulb } from "react-icons/fa";
import styles from "./UpcomingEventAbout.module.css";

const UpcomingEventAbout = ({ eventData }) => {
  const iconMap = {
    "WHO SHOULD ATTEND": <FaUsers />,
    "WHAT TO EXPECT": <FaRocket />,
    "WHY ATTEND": <FaLightbulb />
  };

  const sections = eventData?.aboutSections?.map((section) => ({
    ...section,
    icon: iconMap[section.title] || <FaLightbulb />
  })) || [];

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        <div className={styles.cardsGrid}>
          {sections.map((section, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardHeader}>
                <div className={styles.iconContainer}>
                  {section.icon}
                </div>
                <h2 className={styles.cardTitle}>{section.title}</h2>
              </div>

              <div className={styles.cardContent}>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className={styles.paragraph}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

UpcomingEventAbout.propTypes = {
  eventData: PropTypes.shape({
    aboutSections: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        content: PropTypes.arrayOf(PropTypes.string).isRequired,
        icon: PropTypes.element
      })
    ),
  }),
};

export default UpcomingEventAbout;