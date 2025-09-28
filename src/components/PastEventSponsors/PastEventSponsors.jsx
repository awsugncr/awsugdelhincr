import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./PastEventSponsors.module.css";

const PastEventSponsors = ({ eventData }) => {
  const [loadedLogos, setLoadedLogos] = useState({});

  // Flatten all sponsors into a single array with tier information
  const allSponsors = useMemo(() => {
    const sponsors = eventData?.sponsors || {};
    const sponsorArray = [];
    Object.entries(sponsors).forEach(([category, sponsorList]) => {
      if (sponsorList && sponsorList.length > 0) {
        sponsorList.forEach((sponsor, index) => {
          sponsorArray.push({
            ...sponsor,
            category,
            originalIndex: index,
            key: `${category}-${index}`,
          });
        });
      }
    });
    return sponsorArray;
  }, [eventData?.sponsors]);

  // Dynamic imports for sponsor logos
  useEffect(() => {
    const loadLogos = async () => {
      const logoMap = {};

      // Load all sponsor logos
      for (const sponsor of allSponsors) {
        try {
          const logoModule = await import(sponsor.logo);
          logoMap[sponsor.key] = logoModule.default;
        } catch (error) {
          console.warn(`Failed to load logo for ${sponsor.name}:`, error);
        }
      }

      setLoadedLogos(logoMap);
    };

    if (allSponsors.length > 0) {
      loadLogos();
    }
  }, [allSponsors]);

  // If no sponsors exist, don't render the component
  if (allSponsors.length === 0) {
    return null;
  }

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
              const logoSrc = loadedLogos[sponsor.key];
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
                    {logoSrc && (
                      <img
                        src={logoSrc}
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
