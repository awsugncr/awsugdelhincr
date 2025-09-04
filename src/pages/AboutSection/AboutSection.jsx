import Heading from "../../components/Heading/Heading";
import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading text="About AWS User Group Delhi" />
        </div>

        <div className={styles.contentGrid}>
          <div className={styles.missionSection}>
            <div className={styles.contentWrapper}>
              <h3>Our Mission</h3>
              <p>
                The AWS Delhi/NCR Community serves as a dynamic platform that brings together 
                AWS professionals, customers, partners, and enthusiasts across the Delhi/NCR region. 
                We are dedicated to fostering collaboration, knowledge-sharing, and continuous growth 
                within the Amazon Web Services ecosystem.
              </p>
              <p>
                Our community serves as a vibrant hub for individuals with a shared interest in AWS 
                technologies, cloud computing innovations, and digital transformation. We believe in 
                the power of collective learning and aim to create an inclusive environment where 
                both beginners and experts can thrive together.
              </p>
              <p>
                Through regular meetups, technical workshops, and networking events, we facilitate 
                meaningful connections between cloud professionals, enabling them to share real-world 
                experiences, discuss best practices, and explore cutting-edge AWS services and solutions.
              </p>
            </div>
          </div>

          <div className={styles.offeringsSection}>
            <div className={styles.contentWrapper}>
              <h3>What We Offer</h3>
              <p>
                Our community regularly organizes a diverse range of activities designed to enhance 
                understanding of AWS services, showcase real-world use cases, and keep everyone 
                updated on the latest cloud computing trends and innovations.
              </p>
              <ul className={styles.offeringsList}>
                <li>In-depth technical workshops covering various AWS services and architectures</li>
                <li>Expert-led webinars featuring industry thought leaders and AWS specialists</li>
                <li>Hands-on sessions for practical implementation of cloud solutions</li>
                <li>Networking opportunities to build valuable professional relationships</li>
                <li>Real-world case studies and best practices from experienced practitioners</li>
                <li>Career guidance, certification support, and mentorship programs</li>
                <li>Latest updates on AWS announcements and cloud computing trends</li>
                <li>Collaborative projects and hackathons to foster innovation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
