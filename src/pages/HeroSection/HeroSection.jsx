import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styles from "./HeroSection.module.css";

import DynamoDBIcon from "../../assets/icons/DynamoDB.svg";
import EC2Icon from "../../assets/icons/EC2.svg";
import ELBIcon from "../../assets/icons/Elastic Load Balancing.svg";
import FargateIcon from "../../assets/icons/Fargate.svg";
import SageMakerIcon from "../../assets/icons/SageMaker.svg";
import AmplifyIcon from "../../assets/icons/Amplify.svg";
import ChimeIcon from "../../assets/icons/Chime.svg";
import CloudFormationIcon from "../../assets/icons/CloudFormation.svg";
import CodeBuildIcon from "../../assets/icons/CodeBuild.svg";
import CodeWhispererIcon from "../../assets/icons/CodeWhisperer.svg";

function HeroSection() {
  const floatingIcons = [
    {
      icon: DynamoDBIcon,
      alt: "DynamoDB",
      initialX: "8%",
      initialY: "15%",
      animationDelay: 0.5,
      duration: 20,
    },
    {
      icon: EC2Icon,
      alt: "EC2",
      initialX: "88%",
      initialY: "12%",
      animationDelay: 0.8,
      duration: 25,
    },
    {
      icon: ELBIcon,
      alt: "Elastic Load Balancing",
      initialX: "5%",
      initialY: "65%",
      animationDelay: 1.1,
      duration: 18,
    },
    {
      icon: FargateIcon,
      alt: "Fargate",
      initialX: "92%",
      initialY: "70%",
      animationDelay: 1.4,
      duration: 22,
    },
    {
      icon: SageMakerIcon,
      alt: "SageMaker",
      initialX: "85%",
      initialY: "45%",
      animationDelay: 1.7,
      duration: 24,
    },
    {
      icon: AmplifyIcon,
      alt: "Amplify",
      initialX: "12%",
      initialY: "40%",
      animationDelay: 2.0,
      duration: 21,
    },
    {
      icon: ChimeIcon,
      alt: "Chime",
      initialX: "78%",
      initialY: "25%",
      animationDelay: 2.3,
      duration: 19,
    },
    {
      icon: CloudFormationIcon,
      alt: "CloudFormation",
      initialX: "15%",
      initialY: "80%",
      animationDelay: 2.6,
      duration: 23,
    },
    {
      icon: CodeBuildIcon,
      alt: "CodeBuild",
      initialX: "7%",
      initialY: "35%",
      animationDelay: 2.9,
      duration: 26,
    },
    {
      icon: CodeWhispererIcon,
      alt: "CodeWhisperer",
      initialX: "90%",
      initialY: "55%",
      animationDelay: 3.2,
      duration: 20,
    },
  ];

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContainer}>
        <motion.div
          className={styles.backgroundIllustration}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        />

        <div className={styles.floatingIcons}>
          {floatingIcons.map((iconData, index) => (
            <motion.div
              key={index}
              className={styles.floatingIcon}
              initial={{ opacity: 0, scale: 0, y: 50 }}
              animate={{ 
                opacity: 0.95,
                scale: 1,
                y: 0,
                x: [0, 15, -10, 5, 0],
                rotate: [0, 3, -2, 1, 0],
              }}
              transition={{
                opacity: {
                  duration: 1.2,
                  delay: iconData.animationDelay,
                  ease: "easeOut",
                },
                scale: {
                  duration: 1.2,
                  delay: iconData.animationDelay,
                  ease: "easeOut",
                },
                y: {
                  duration: 1.2,
                  delay: iconData.animationDelay,
                  ease: "easeOut",
                },
                x: {
                  duration: iconData.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: iconData.animationDelay + 1.2,
                },
                rotate: {
                  duration: iconData.duration,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: iconData.animationDelay + 1.2,
                },
              }}
              style={{
                left: iconData.initialX,
                top: iconData.initialY,
              }}
              whileHover={{ 
                scale: 1.2, 
                opacity: 0.8,
                transition: { duration: 0.3 }
              }}
            >
              <img 
                src={iconData.icon} 
                alt={iconData.alt}
                className={styles.awsServiceIcon}
              />
            </motion.div>
          ))}
        </div>

        <div className={styles.textContent}>
          <motion.div
            className={styles.titleContainer}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <h1 className={styles.mainTitle}>
              AWS User Group
            </h1>
            <motion.h2
              className={styles.titleHighlight}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Delhi NCR
            </motion.h2>
          </motion.div>

          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          >
            Empowering cloud professionals through knowledge sharing, 
            networking, and hands-on learning experiences
          </motion.p>

          <motion.div
            className={styles.ctaContainer}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
          >
            <a
              href="https://chat.whatsapp.com/I12lTsdZ8t1HZCGlolAd1Z"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ctaButton}
            >
              Join Community
            </a>
            <Link 
              to="/sponsorship"
              className={styles.secondaryButton}
            >
              <motion.div
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                Sponsor Us
              </motion.div>
            </Link>
          </motion.div>
        </div>

        <div className={styles.wavesContainer}>
          <svg className={styles.waves} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
            <defs>
              <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className={styles.parallax}>
              <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,153,0,0.7)" />
              <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,153,0,0.5)" />
              <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,153,0,0.3)" />
              <use xlinkHref="#gentle-wave" x="48" y="7" fill="#FF9900" />
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;