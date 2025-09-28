import Marquee from "react-fast-marquee";
import PropTypes from "prop-types";
import styles from "./PastEventHighlight.module.css";

const PastEventHighlight = ({ eventData }) => {
  const highlightWords = eventData?.highlightWords || [
    "INNOVATIVE",
    "COLLABORATIVE",
    "TRANSFORMATIVE",
  ];

  return (
    <section className={styles.highlightSection}>
      <div className={styles.container}>
        <Marquee
          speed={40}
          gradient={false}
          pauseOnHover={true}
          className={styles.marqueeContainer}
        >
          {highlightWords.map((word, index) => (
            <div key={`${word}-${index}`} className={styles.wordContainer}>
              <div className={styles.highlightWord}>{word}</div>
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {highlightWords.map((word, index) => (
            <div
              key={`${word}-duplicate-${index}`}
              className={styles.wordContainer}
            >
              <div className={styles.highlightWord}>{word}</div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};

PastEventHighlight.propTypes = {
  eventData: PropTypes.shape({
    highlightWords: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default PastEventHighlight;
