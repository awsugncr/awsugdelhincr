import styles from "./Heading.module.css";
import PropTypes from "prop-types";

function Heading({ text, para }) {
  return (
    <div className={styles.headingSection}>
      <div className={styles.headingContainer}>
        <h1>
          {text}
        </h1>
        {para && (
          <p>
            {para}
          </p>
        )}
      </div>
    </div>
  );
}

Heading.propTypes = {
  text: PropTypes.string.isRequired,
  para: PropTypes.string,
};

export default Heading;
