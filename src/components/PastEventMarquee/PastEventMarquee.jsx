import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import styles from "./PastEventMarquee.module.css";
import PropTypes from "prop-types";

const PastEventMarquee = ({ eventData }) => {
  // Default images array
  const eventImages = eventData?.images.imagePaths || [];

  // Split images into two groups for different marquees
  const firstRowImages = eventImages.slice(
    0,
    Math.ceil(eventImages.length / 2)
  );
  const secondRowImages = eventImages.slice(Math.ceil(eventImages.length / 2));

  return (
    <motion.section
      className={styles.marqueeSection}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* First Marquee - Left to Right */}
      <motion.div
        className={styles.marqueeRow}
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <Marquee
          gradient={true}
          speed={50}
          gradientColor={[17, 24, 39]}
          gradientWidth={100}
        >
          {firstRowImages.map((image, index) => (
            <div key={`first-${index}`} className={styles.imageContainer}>
              <img
                src={image}
                alt={`Event moment ${index + 1}`}
                className={styles.marqueeImage}
              />
            </div>
          ))}
        </Marquee>
      </motion.div>

      {/* Second Marquee - Right to Left */}
      <motion.div
        className={styles.marqueeRow}
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Marquee
          gradient={true}
          speed={50}
          direction="right"
          gradientColor={[17, 24, 39]}
          gradientWidth={100}
        >
          {secondRowImages.map((image, index) => (
            <div key={`second-${index}`} className={styles.imageContainer}>
              <img
                src={image}
                alt={`Event moment ${index + 1}`}
                className={styles.marqueeImage}
              />
            </div>
          ))}
        </Marquee>
      </motion.div>
    </motion.section>
  );
};
PastEventMarquee.propTypes = {
  eventData: PropTypes.shape({
    images: PropTypes.shape({
      imagePaths: PropTypes.arrayOf(PropTypes.string),
    }),
  }),
};

export default PastEventMarquee;
