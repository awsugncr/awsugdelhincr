import styles from './Banner.module.css';

const Banner = () => {
  return (
    <section className={styles.section}>
      <div className={styles.bannerContainer}>
        <h1 className={styles.bannerHeading}>Our Community</h1>
        <div className={styles.bannerContent}>
          <div>
            <h2>100+</h2>
            <p>Meetups</p>
          </div>
          <div>
            <h2>5000+</h2>
            <p>Members</p>
          </div>
          <div>
            <h2>50+</h2>
            <p>Speakers</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
