import Heading from "../../components/Heading/Heading";
import styles from "./ContactSection.module.css";
import {
  FaLinkedin,
  FaEnvelope,
  FaMeetup,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

const socialLinks = [
  { id: "linkedin", icon: <FaLinkedin />, name: "LinkedIn", link: "https://www.linkedin.com/company/awsugdelhincr/" },
  { id: "instagram", icon: <FaInstagram />, name: "Instagram", link: "https://www.instagram.com/awsugdelhincr/" },
  { id: "whatsapp", icon: <FaWhatsapp />, name: "WhatsApp", link: "https://chat.whatsapp.com/I12lTsdZ8t1HZCGlolAd1Z" },
  { id: "meetup", icon: <FaMeetup />, name: "Meetup", link: "https://www.meetup.com/amazonaws-delhi/" },
  { id: "youtube", icon: <FaYoutube />, name: "YouTube", link: "https://www.youtube.com/@awsugdelhincr" },
];

const contactInfo = [
  { icon: <FaMapMarkerAlt />, label: "Location", text: "Delhi NCR, India" },
  { icon: <FaEnvelope />, label: "Email", text: "awsusergroupncr@gmail.com" },
];

function ContactSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading text="Connect With Us" />
          <p className={styles.subtitle}>
            Join the largest AWS community in Delhi NCR. Get in touch for partnerships, speaking opportunities, or general inquiries.
          </p>
        </div>

        <div className={styles.footerContent}>
          {/* Contact Information */}
          <div className={styles.contactInfo}>
            <h3 className={styles.sectionTitle}>Contact Information</h3>
            <div className={styles.infoList}>
              {contactInfo.map((info, index) => (
                <div key={index} className={styles.infoItem}>
                  <span className={styles.infoIcon}>{info.icon}</span>
                  <div className={styles.infoContent}>
                    <span className={styles.infoLabel}>{info.label}</span>
                    <span className={styles.infoText}>{info.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className={styles.socialSection}>
            <h3 className={styles.sectionTitle}>Follow Our Journey</h3>
            <p className={styles.socialDescription}>
              Stay updated with our latest events, workshops, and AWS community news.
            </p>
            <div className={styles.socialGrid}>
              {socialLinks.map(({ id, icon, link }) => (
                <a
                  key={id}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerDivider}></div>
          <p className={styles.footerText}>
            © {new Date().getFullYear()} AWS User Group Delhi NCR. All Rights Reserved.
          </p>
          <p className={styles.footerSubtext}>
            Building the future of cloud computing in Delhi NCR
          </p>
        </div>
      </div>
    </footer>
  );
}

export default ContactSection;
