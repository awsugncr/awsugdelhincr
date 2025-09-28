import PropTypes from "prop-types";
import styles from "./PastEventSponsors.module.css";

const PastEventSponsors = ({ eventData }) => {
  const sponsorsData = eventData?.sponsors || {};

  // Flatten all sponsors into a single array with category info
  const allSponsors = Object.entries(sponsorsData).flatMap(
    ([category, sponsorList]) =>
      sponsorList?.map((sponsor, index) => ({
        ...sponsor,
        category,
        key: `${category}-${index}`,
      })) || []
  );

  if (allSponsors.length === 0) return null;

  const getCategoryClass = (category) => {
    const categoryMap = {
      poweredBy: "title",
      inAssociationWith: "inAssociation",
      platinum: "platinum",
      gold: "gold",
      silver: "silver",
      bronze: "bronze",
      community: "community",
    };
    return categoryMap[category] || "community";
  };

  return (
    <section className={styles.sponsorsSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>Our Partners & Sponsors</h2>
          <p className={styles.sectionDescription}>
            Thank you to our incredible partners who made this event possible.
          </p>
        </div>

        <div className={styles.sponsorsContainer}>
          <div className={styles.allSponsorsGrid}>
            {allSponsors.map((sponsor) => {
              const categoryClass = getCategoryClass(sponsor.category);

              return (
                <div
                  key={sponsor.key}
                  className={`${styles.sponsorCard} ${styles[categoryClass]}`}
                >
                  <a
                    href={sponsor.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.sponsorLink}
                    aria-label={`Visit ${sponsor.name} website`}
                  >
                    {/* Direct path from /public folder */}
                    {sponsor.logo && (
                      <img
                        src={sponsor.logo}
                        alt={sponsor.name}
                        className={styles.sponsorLogo}
                        loading="lazy"
                      />
                    )}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

PastEventSponsors.propTypes = {
  eventData: PropTypes.shape({
    sponsors: PropTypes.object,
  }),
};

export default PastEventSponsors;
