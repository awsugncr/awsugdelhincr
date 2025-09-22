import styles from './Parallax.module.css'

function Parallax() {
  return (
    <section className={styles.parallaxSection}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h1 className={styles.quote}>
          <span className={styles.openQuote}>&ldquo;</span>
          Where cloud passion meets collaboration and innovation
          <span className={styles.closeQuote}>&rdquo;</span>
        </h1>
      </div>
    </section>
  )
}

export default Parallax