import PropTypes from "prop-types";
import { FaTicketAlt, FaClock, FaCheck } from "react-icons/fa";
import styles from "./UpcomingEventRegister.module.css";

const UpcomingEventRegister = ({ eventData }) => {
  const registrationData = eventData?.registration || {};
  
  const handleRegisterClick = () => {
    window.open(registrationData.url, "_blank");
  };

  return (
    <section className={styles.registerSection} id="register">
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Event Registration</h2>
          <p className={styles.sectionSubtitle}>Choose your ticket and join the AWS community</p>
        </div>

        <div className={styles.ticketsGrid}>
          <div className={styles.ticketCard}>
            <div className={styles.ticketHeader}>
              <div className={styles.ticketBadge}>
                <FaClock />
                <span>Limited Time</span>
              </div>
              <h3 className={styles.ticketTitle}>Early Bird Ticket</h3>
              <p className={styles.ticketDescription}>
                Secure your spot at AWS Community Day Delhi 2025 with our Early Bird offer. 
                Limited quantity available with exclusive benefits and savings.
              </p>
            </div>

            <div className={styles.ticketFeatures}>
              <h4 className={styles.featuresTitle}>What&apos;s Included:</h4>
              <ul className={styles.featuresList}>
                {registrationData.earlyBird.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <FaCheck className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.ticketFooter}>
              <div className={styles.priceSection}>
                {registrationData.earlyBird.originalPrice && (
                  <span className={styles.originalPrice}>{registrationData.earlyBird.originalPrice}</span>
                )}
                <span className={styles.currentPrice}>{registrationData.earlyBird.price}</span>
              </div>
              <button 
                className={styles.registerButton} 
                disabled={!registrationData.earlyBird.available}
                onClick={handleRegisterClick}
              >
                <FaTicketAlt />
                {registrationData.earlyBird.available ? 'Register Now' : 'Sold Out'}
              </button>
              {registrationData.earlyBird.deadline && (
                <p className={styles.deadline}>{registrationData.earlyBird.deadline}</p>
              )}
            </div>
          </div>

          <div className={styles.ticketCard}>
            <div className={styles.ticketHeader}>
              <div className={styles.ticketBadge}>
                <FaTicketAlt />
                <span>Standard</span>
              </div>
              <h3 className={styles.ticketTitle}>Regular Ticket</h3>
              <p className={styles.ticketDescription}>
                Your gateway to AWS Community Day Delhi 2025. Experience a full day of learning, 
                networking, and innovation in the AWS ecosystem.
              </p>
            </div>

            <div className={styles.ticketFeatures}>
              <h4 className={styles.featuresTitle}>What&apos;s Included:</h4>
              <ul className={styles.featuresList}>
                {registrationData.regular.features.map((feature, index) => (
                  <li key={index} className={styles.featureItem}>
                    <FaCheck className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.ticketFooter}>
              <div className={styles.priceSection}>
                <span className={styles.currentPrice}>{registrationData.regular.price}</span>
              </div>
              <button 
                className={styles.registerButton} 
                disabled={!registrationData.regular.available}
                onClick={handleRegisterClick}
              >
                <FaTicketAlt />
                {registrationData.regular.available ? 'Register Now' : 'Sold Out'}
              </button>
            </div>
          </div>
        </div>

        <div className={styles.registrationNote}>
          <p>
            Registration includes access to all sessions, networking opportunities, and refreshments. 
            Tickets are non-refundable and non-transferable.
          </p>
        </div>
      </div>
    </section>
  );
};

UpcomingEventRegister.propTypes = {
  eventData: PropTypes.shape({
    registration: PropTypes.shape({
      isOpen: PropTypes.bool,
      earlyBird: PropTypes.shape({
        available: PropTypes.bool,
        price: PropTypes.string,
        originalPrice: PropTypes.string,
        deadline: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string)
      }),
      regular: PropTypes.shape({
        available: PropTypes.bool,
        price: PropTypes.string,
        features: PropTypes.arrayOf(PropTypes.string)
      })
    })
  }),
};

export default UpcomingEventRegister;