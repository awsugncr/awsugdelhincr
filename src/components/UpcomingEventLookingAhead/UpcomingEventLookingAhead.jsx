import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styles from "./UpcomingEventLookingAhead.module.css";

const UpcomingEventLookingAhead = ({ eventData }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  // Handle modal close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && showModal) {
        setShowModal(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [showModal]);

  // Handle email subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Here you would typically make an API call to subscribe the email
    console.log("Subscribing email:", email);

    setIsSubmitting(false);
    setEmail("");
    setShowModal(false);

    // You could show a success message here
    alert("Thank you! You'll be notified about future events.");
  };

  const communityData = eventData?.community;

  return (
    <>
      <section
        ref={sectionRef}
        className={`${styles.lookingAheadSection} ${
          isVisible ? styles.visible : ""
        }`}
      >
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.leftColumn}>
              <h2 className={styles.heading}>{communityData.heading}</h2>

              <h3 className={styles.subheading}>{communityData.subheading}</h3>

              <p className={styles.description}>{communityData.description}</p>
            </div>

            <div className={styles.rightColumn}>
              <a
                href={communityData.meetupUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.primaryButton}
                aria-label="Join our Meetup for future events"
              >
                Join our Meetup
              </a>

              <button
                onClick={() => setShowModal(true)}
                className={styles.secondaryLink}
                aria-label="Subscribe for event updates"
              >
                Not ready yet? Subscribe for updates.
              </button>
            </div>
          </div>
        </div>
      </section>

      {showModal && (
        <div
          className={styles.modalOverlay}
          onClick={(e) => e.target === e.currentTarget && setShowModal(false)}
        >
          <div className={styles.modal}>
            <button
              onClick={() => setShowModal(false)}
              className={styles.modalClose}
              aria-label="Close modal"
            >
              ×
            </button>

            <h3 className={styles.modalTitle}>Stay Updated</h3>
            <p className={styles.modalDescription}>
              Get notified about upcoming AWS Community events and exclusive
              content.
            </p>

            <form onSubmit={handleSubscribe} className={styles.subscribeForm}>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
                required
                aria-label="Email address"
              />

              <button
                type="submit"
                disabled={isSubmitting || !email}
                className={styles.subscribeButton}
                aria-label="Subscribe to updates"
              >
                {isSubmitting ? "Subscribing..." : "Notify me"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

UpcomingEventLookingAhead.propTypes = {
  eventData: PropTypes.shape({
    community: PropTypes.shape({
      meetupUrl: PropTypes.string,
      heading: PropTypes.string,
      subheading: PropTypes.string,
      description: PropTypes.string,
    }),
  }),
};

export default UpcomingEventLookingAhead;