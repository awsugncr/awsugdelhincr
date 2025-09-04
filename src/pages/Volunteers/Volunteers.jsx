import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import styles from "./Volunteers.module.css";

const volunteers = [
  {
    name: "John Doe",
    designation: "Community Lead",
    company: "Tech Corp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "Jane Smith",
    designation: "Event Coordinator",
    company: "Cloud Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "Mike Johnson",
    designation: "Technical Lead",
    company: "AWS Partner",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "Sarah Wilson",
    designation: "Marketing Lead",
    company: "Digital Agency",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "David Brown",
    designation: "Content Creator",
    company: "Tech Media",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#"
  },
  {
    name: "Lisa Davis",
    designation: "Workshop Lead",
    company: "Learning Hub",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    linkedin: "#",
    github: "#",
    twitter: "#"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function Volunteers() {
  return (
    <section className={styles.volunteersSection}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={styles.title}>Our Amazing Volunteers</h2>
          <p className={styles.subtitle}>
            Meet the passionate individuals who make our AWS community thrive
          </p>
        </motion.div>

        <motion.div
          className={styles.volunteersGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {volunteers.map((volunteer, index) => (
            <motion.div
              key={index}
              className={styles.volunteerCard}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.imageContainer}>
                  <img
                    src={volunteer.image}
                    alt={volunteer.name}
                    className={styles.volunteerImage}
                  />
                  <div className={styles.imageOverlay} />
                </div>
                <div className={styles.socialLinks}>
                  <a href={volunteer.linkedin} className={styles.socialLink} aria-label="LinkedIn">
                    <FaLinkedin />
                  </a>
                  <a href={volunteer.github} className={styles.socialLink} aria-label="GitHub">
                    <FaGithub />
                  </a>
                  <a href={volunteer.twitter} className={styles.socialLink} aria-label="Twitter">
                    <FaTwitter />
                  </a>
                </div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.volunteerName}>{volunteer.name}</h3>
                <p className={styles.volunteerDesignation}>{volunteer.designation}</p>
                <p className={styles.volunteerCompany}>{volunteer.company}</p>
              </div>

              <div className={styles.cardFooter}>
                <motion.button
                  className={styles.connectButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Connect
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.joinSection}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <h3 className={styles.joinTitle}>Want to Join Our Team?</h3>
          <p className={styles.joinText}>
            We're always looking for passionate individuals to help grow our community
          </p>
          <motion.button
            className={styles.joinButton}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Become a Volunteer
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export default Volunteers;
