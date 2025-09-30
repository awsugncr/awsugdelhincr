import styles from "./Portfolio.module.css";
import { FaLinkedin, FaDev, FaMedium } from "react-icons/fa";

// Import images from assets
import profileImage from "../../assets/core-team/Dipali Kulshrestha.jpg";
import awsHero from "../../assets/logi&icons/aws hero.png";

// Courses Array
const courses = [
  {
    title: "Course 1: DevOps with AWS",
    description:
      "In this course, I cover the concepts of DevOps with hands-on demos to create and automate CI/CD pipelines.",
    link: "https://www.linkedin.com/learning/devops-with-aws",
  },
  {
    title:
      "Course 2: Introduction to Data Engineering on AWS: Data Sourcing and Storage",
    description:
      "Get an introduction to the field of data engineering. Explore data types, data lakes, data sources, and AWS components such as DynamoDB, Kinesis, and S3.",
    link: "https://www.linkedin.com/learning/data-engineering-with-aws-part-1",
  },
  {
    title:
      "Course 3: Data Engineering on AWS: Data Cataloging, Processing, Analytics, and Visualization",
    description:
      "Businesses need data experts—now more than ever. The role of the data expert has become essential to scaling a business.",
    link: "https://www.linkedin.com/learning/data-engineering-with-aws-part-2",
  },
  {
    title: "Course 4: Secure Generative AI with Amazon Bedrock",
    description:
      "This course explores generative AI to revolutionize experiences, innovate applications, and improve productivity, while addressing security considerations.",
    link: "https://www.linkedin.com/learning/secure-generative-ai-with-amazon-bedrock",
  },
  {
    title:
      "Course 5: AWS Certified DevOps Engineer - Professional (DOP-C02) Exam Tips",
    description:
      "This course provides tips for passing the AWS Certified DevOps Engineer Professional Certification (DOP-CO2) Exam.",
    link: "https://www.linkedin.com/learning/aws-certified-devops-engineer-professional-dop-c02-exam-tips",
  },
  {
    title:
      "Course 6: Advanced Data Lake Management and Governance with AWS Lake Formation",
    description:
      "In this advanced AWS Lake Formation course, AWS-certified programmer Dipali Kulshrestha teaches you to build, secure, and govern data lakes at scale. Learn setup, fine-grained permissions, governance, and cross-account data sharing for secure collaboration.",
    link: "https://www.linkedin.com/learning/advanced-data-lake-management-and-governance-with-aws-lake-formation/from-swamp-to-structure-advanced-lake-formation-for-real-world-governance",
  },
];

const Portfolio = () => {
  return (
    <div>
      <section id="hero" className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.imageContent}>
            <div className={styles.profileImageContainer}>
              <img
                src={profileImage}
                alt="Dipali Kulshrestha"
                className={styles.profileImage}
              />
            </div>
          </div>

          <div className={styles.textContent}>
            <h1>
              Dipali <span className={styles.highlight}>Kulshrestha</span>
            </h1>
            <p className={styles.profession}>
              AWS Hero • VP Data Engineering • Community Builder
            </p>

            <div className={styles.statsContainer}>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>6+</span>
                <span className={styles.statLabel}>Courses</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>10K+</span>
                <span className={styles.statLabel}>Students</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statNumber}>AWS</span>
                <span className={styles.statLabel}>Hero</span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <a href="#about" className={`${styles.btn} ${styles.primaryBtn}`}>
                About Me
              </a>
              <a
                href="#courses"
                className={`${styles.btn} ${styles.secondaryBtn}`}
              >
                View Courses
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className={styles.about}>
        <div className={`${styles.container} ${styles.aboutContent}`}>
          <div className={styles.aboutText}>
            <h2>About Me</h2>
            <p className={styles.aboutDescription}>
              As an AWS Hero and VP of Data Engineering, I&apos;m passionate
              about empowering the next generation of cloud professionals.
              Through my comprehensive LinkedIn Learning courses and community
              leadership, I&apos;ve helped thousands of learners master AWS
              technologies and advance their careers.
            </p>
            <p className={styles.aboutDescription}>
              My expertise spans DevOps, data engineering, and generative AI,
              with a focus on creating secure, scalable solutions using AWS
              services.
            </p>

            <ul className={styles.achievementsList}>
              <li className={styles.achievement}>
                <span className={styles.achievementIcon}>🏆</span>
                <span className={styles.achievementText}>
                  AWS Hero Recognition
                </span>
              </li>
              <li className={styles.achievement}>
                <span className={styles.achievementIcon}>💼</span>
                <span className={styles.achievementText}>
                  VP Data Engineering
                </span>
              </li>
              <li className={styles.achievement}>
                <span className={styles.achievementIcon}>🚀</span>
                <span className={styles.achievementText}>
                  Community Builder
                </span>
              </li>
              <li className={styles.achievement}>
                <span className={styles.achievementIcon}>📚</span>
                <span className={styles.achievementText}>
                  LinkedIn Learning Author
                </span>
              </li>
            </ul>
          </div>

          <div className={styles.aboutImage}>
            <img src={awsHero} alt="AWS Hero Recognition" />
          </div>
        </div>
      </section>

      <section id="courses" className={styles.courses}>
        <div className={styles.container}>
          <div className={styles.coursesHeader}>
            <h2>Featured Courses</h2>
            <p className={styles.coursesSubtitle}>
              Comprehensive AWS training designed to accelerate your cloud
              journey
            </p>
          </div>

          <ul className={styles.coursesGrid}>
            {courses.map((course, index) => (
              <li className={styles.courseCard} key={index}>
                <div className={styles.courseNumber}>
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className={styles.courseContent}>
                  <h3>{course.title.replace(/^Course \d+:\s*/, "")}</h3>
                  <p>{course.description}</p>
                </div>
                <a
                  href={course.link}
                  target="_blank"
                  className={styles.courseLink}
                  rel="noopener noreferrer"
                >
                  View Course
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <h3 className={styles.footerTitle}>Let&apos;s Connect</h3>
            <p>Join thousands of learners on their AWS journey</p>

            <ul className={styles.socialLinks}>
              <li>
                <a
                  href="https://www.linkedin.com/in/dipalik/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </li>
              <li>
                <a
                  href="https://dev.to/dipalikulshrestha"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Dev.to"
                >
                  <FaDev />
                </a>
              </li>
              <li>
                <a
                  href="https://learning-dipali.medium.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Medium"
                >
                  <FaMedium />
                </a>
              </li>
            </ul>

            <div className={styles.footerBottom}>
              <p>&copy; 2025 Dipali Kulshrestha. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
