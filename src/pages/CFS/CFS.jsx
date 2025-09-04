import { FaCheck, FaEnvelope, FaPhone, FaTimes, FaStar, FaHandshake, FaUsers, FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Heading from '../../components/Heading/Heading'
import styles from './CFS.module.css'

function CFS() {
  return (
    <div className={styles.sponsorshipPage}>
      {/* Navigation Header */}
      <div className={styles.pageHeader}>
        <Link to="/" className={styles.backButton}>
          <FaArrowLeft />
          <span>Back to Home</span>
        </Link>
      </div>

      {/* Main Content */}
      <section className={styles.pageContent}>
        <Heading text={'Call for Sponsors'} />
        
        <div className={styles.CFSHero}>
          <div className={styles.CFSHeroContent}>
            <p>Position your brand at the forefront of cloud innovation and connect with 500+ industry professionals, developers, and decision-makers in one of India&apos;s largest AWS community events!</p>
          </div>
        </div>

        <div className={styles.CFSContent}>
            <p>🌐 Join us for a day of collaboration, innovation, and growth! Our comprehensive sponsorship packages offer unparalleled networking opportunities and brand exposure in the thriving cloud community.</p>
            <p>
              Explore our sponsorship tiers below and <a href="/Sponsorship Itenary/Sponsorship Itenary.pdf" style={{color:'#ff9900', fontWeight: '600'}} target="_blank" rel="noopener noreferrer">download the complete event brochure</a> for detailed information.
            </p>
        </div>
        
        <div className={styles["cfs-table-responsive"]}>
      <table className={styles["cfs-table"]}>
        <thead>
          <tr>
            <th className={styles["cfs-col-title"]}>Package</th>
            <th className={styles["cfs-platinum"]}>
              <div className={styles.packageHeader}>
                <FaStar className={styles.packageIcon} />
                <p>Platinum</p>
                <p className={styles.packagePrice}>USD 6500 + tax</p>
                <span className={styles.packageBadge}>Most Popular</span>
              </div>
            </th>
            <th className={styles["cfs-gold"]}>
              <div className={styles.packageHeader}>
                <FaHandshake className={styles.packageIcon} />
                <p>Gold</p>
                <p className={styles.packagePrice}>USD 3500 + tax</p>
              </div>
            </th>
            <th className={styles["cfs-silver"]}>
              <div className={styles.packageHeader}>
                <FaUsers className={styles.packageIcon} />
                <p>Silver</p>
                <p className={styles.packagePrice}>USD 2000 + tax</p>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th className={styles["cfs-col-title"]}>
              <div className={styles.featureRow}>
                <span>Company Logo/Branding</span>
                <small>On website, banners & materials</small>
              </div>
            </th>
            <td><FaCheck className={styles["cfs-icon-check"]} /></td>
            <td><FaCheck className={styles["cfs-icon-check"]} /></td>
            <td><FaCheck className={styles["cfs-icon-check"]} /></td>
          </tr>
          <tr>
            <th className={styles["cfs-col-title"]}>
              <div className={styles.featureRow}>
                <span>Sponsor Booth</span>
                <small>Exhibition space at venue</small>
              </div>
            </th>
            <td><span className={styles.highlight}>Large Display Area</span></td>
            <td><span className={styles.highlight}>Medium Display Area</span></td>
            <td><span className={styles.highlight}>Small Display Area</span></td>
          </tr>
          <tr>
            <th className={styles["cfs-col-title"]}>
              <div className={styles.featureRow}>
                <span>Speaking Slot</span>
                <small>AWS related content only</small>
              </div>
            </th>
            <td><span className={styles.highlight}>30 mins (1 slot)</span></td>
            <td><span className={styles.highlight}>15 mins (1 slot)</span></td>
            <td><FaTimes className={styles["cfs-icon-times"]} /></td>
          </tr>
          <tr>
            <th className={styles["cfs-col-title"]}>
              <div className={styles.featureRow}>
                <span>Conference Pass</span>
                <small>Full event access</small>
              </div>
            </th>
            <td><span className={styles.highlight}>8 Sponsorship Passes</span></td>
            <td><span className={styles.highlight}>5 Sponsorship Passes</span></td>
            <td><span className={styles.highlight}>3 Sponsorship Passes</span></td>
          </tr>
          <tr>
            <th className={styles["cfs-col-title"]}>
              <div className={styles.featureRow}>
                <span>Social Media Shoutout</span>
                <small>Across all our platforms</small>
              </div>
            </th>
            <td><span className={styles.highlight}>4 times</span></td>
            <td><span className={styles.highlight}>2 times</span></td>
            <td><span className={styles.highlight}>Only once</span></td>
          </tr>
          <tr>
            <th className={styles["cfs-col-title"]}>
              <div className={styles.featureRow}>
                <span>Workshop</span>
                <small>Up to 120 minutes</small>
              </div>
            </th>
            <td><FaCheck className={styles["cfs-icon-check"]} /></td>
            <td><FaTimes className={styles["cfs-icon-times"]} /></td>
            <td><FaTimes className={styles["cfs-icon-times"]} /></td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div className={styles.CFSContact}>
        <div className={styles.CFSContactContent}>
        <FaEnvelope className={styles["cfs-contact-icon"]} />
          <h3>Email Us</h3>
          <p>
            <a href="mailto:awsusergroupncr@gmail.com" className={styles["cfs-contact-link"]}>
              awsusergroupncr@gmail.com
            </a>
          </p>
        </div>
        <div className={styles.CFSContactContent}>
        <FaPhone className={styles["cfs-contact-icon"]} />
          <h3>Call Us</h3>
          <p>
            Rajat Arora - +91 9891139385<br />
            Dipali Kulshrestha - +91 9654697909
          </p>
        </div>
    </div>
      </section>
    </div>
  )
}

export default CFS