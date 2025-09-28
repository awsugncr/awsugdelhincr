import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.bannerContainer}>
        <h1 className={styles.bannerHeading}>Our Community</h1>
        <div className={styles.bannerContent}>
          <div>
            <h2>11+</h2>
            <p>Meetups</p>
          </div>
          <div>
            <h2>10K+</h2>
            <p>Members</p>
          </div>
          <div>
            <h2>30+</h2>
            <p>Speakers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
