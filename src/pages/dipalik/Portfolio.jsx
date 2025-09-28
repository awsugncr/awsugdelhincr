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
      {/* Hero Section */}
      <section id="hero" className={styles.hero}>
        <div className={styles.overlay}></div>
        <div className={`${styles.container} ${styles.heroContent}`}>
          <div className={styles.textContent}>
            <h1>Dipali Kulshrestha</h1>
            <p className={styles.profession}>
              AWS HERO | Vice President - Data Engineering | Community Builder
            </p>
            <a href="#about" className={`${styles.btn} ${styles.primaryBtn}`}>
              About Me
            </a>
          </div>
          <div className={styles.imageContent}>
            <img
              src={profileImage}
              alt="Dipali Kulshrestha"
              className={styles.profileImage}
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={styles.about}>
        <div className={`${styles.container} ${styles.aboutContent}`}>
          <div className={styles.aboutText}>
            <h2>About Me</h2>
            <p className={styles.aboutDescription}>
              Dipali Kulshrestha is an AWS Hero and Cloud Architect with a
              passion for helping others master AWS. With extensive experience
              in cloud technologies, she has published several LinkedIn Learning
              courses and regularly conducts workshops to empower learners in
              their AWS journey.
            </p>
            <a href="#courses" className={`${styles.btn} ${styles.primaryBtn}`}>
              Explore My Courses
            </a>
          </div>
          <div className={styles.aboutImage}>
            <img src={awsHero} alt="About Me" />
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className={styles.courses}>
        <div className={styles.container}>
          <h2>Courses I've Created</h2>
          <div className={styles.coursesGrid}>
            {courses.map((course, index) => (
              <div className={styles.courseCard} key={index}>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <a
                  href={course.link}
                  target="_blank"
                  className={styles.courseLink}
                  rel="noopener noreferrer"
                >
                  View Course
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <p>Connect with me on:</p>
          <ul className={styles.socialLinks}>
            <li>
              <a
                href="https://www.linkedin.com/in/dipalik/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://dev.to/dipalikulshrestha"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaDev />
              </a>
            </li>
            <li>
              <a
                href="https://learning-dipali.medium.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMedium />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
