import Marquee from "react-fast-marquee";
import Heading from "../../components/Heading/Heading";
import styles from "./AWSUGNCRImages.module.css";

// Import images from different event folders
// ACD 2024 Events
import acd1 from "../../assets/events/ACD 2024/image11.jpg";
import acd2 from "../../assets/events/ACD 2024/image12.jpg";
import acd3 from "../../assets/events/ACD 2024/image14.jpg";

// AWS Meetup Events
import meetup1 from "../../assets/events/aws meetup/1683440786380.jpg";
import meetup2 from "../../assets/events/aws meetup/1683440787913.jpg";
import meetup3 from "../../assets/events/aws meetup/aws1.jpg";

// Innovate Faster Events
import innovate1 from "../../assets/events/innovatefaster/1697304561783.jpg";
import innovate2 from "../../assets/events/innovatefaster/1697304565998.jpg";
import innovate3 from "../../assets/events/innovatefaster/AWS10.jpg";

// Security Group Events
import security1 from "../../assets/events/securitygroup/1686481356285.jpg";
import security2 from "../../assets/events/securitygroup/1686481356627.jpg";
import security3 from "../../assets/events/securitygroup/AWS10.jpg";

// Astute Development with Q Events
import astute1 from "../../assets/events/astute_dev_with_Q/aws1.jpg";
import astute2 from "../../assets/events/astute_dev_with_Q/aws10.jpeg";
import astute3 from "../../assets/events/astute_dev_with_Q/aws2.jpg";

// Game Day 2025 Events
import gameday1 from "../../assets/events/gameday_2025/aws1.jpg";
import gameday2 from "../../assets/events/gameday_2025/aws10.jpg";
import gameday3 from "../../assets/events/gameday_2025/aws2.jpg";

// ReInvent Recap Events
import reinvent1 from "../../assets/events/reinvent_recap/aws1.jpg";
import reinvent2 from "../../assets/events/reinvent_recap/aws10.jpg";
import reinvent3 from "../../assets/events/reinvent_recap/aws2.jpg";

// Women in Tech 2025 Events
import wit1 from "../../assets/events/wit_2025/aws1.JPG";
import wit2 from "../../assets/events/wit_2025/aws10.jpg";
import wit3 from "../../assets/events/wit_2025/aws2.JPG";

// First marquee - Mix of different events
const marqueeImages1 = [
  { src: acd1, alt: "AWS Community Day 2024 - Event Highlights" },
  { src: meetup1, alt: "AWS Meetup - Community Gathering" },
  { src: innovate1, alt: "Innovate Faster Workshop - Learning Session" },
  { src: security1, alt: "Security Group Discussion - Expert Talk" },
  { src: astute1, alt: "Astute Development with Q - AI Workshop" },
  { src: gameday1, alt: "Game Day 2025 - Hands-on Challenge" },
  { src: reinvent1, alt: "ReInvent Recap - Latest Updates" },
  { src: wit1, alt: "Women in Tech 2025 - Diversity Initiative" },
  { src: acd2, alt: "AWS Community Day 2024 - Networking" },
  { src: meetup2, alt: "AWS Meetup - Technical Session" },
  { src: innovate2, alt: "Innovate Faster - Innovation Hub" },
  { src: security2, alt: "Security Group - Best Practices" },
];

// Second marquee - Different mix for variety
const marqueeImages2 = [
  { src: astute2, alt: "Astute Development - Q Developer Tools" },
  { src: gameday2, alt: "Game Day - Problem Solving" },
  { src: reinvent2, alt: "ReInvent Recap - Cloud Innovations" },
  { src: wit2, alt: "Women in Tech - Leadership Talk" },
  { src: acd3, alt: "AWS Community Day - Technical Deep Dive" },
  { src: meetup3, alt: "AWS Meetup - Community Stories" },
  { src: innovate3, alt: "Innovate Faster - Startup Showcase" },
  { src: security3, alt: "Security Group - Threat Detection" },
  { src: astute3, alt: "Astute Development - Code Generation" },
  { src: gameday3, alt: "Game Day - Team Collaboration" },
  { src: reinvent3, alt: "ReInvent Recap - Service Updates" },
  { src: wit3, alt: "Women in Tech - Career Growth" },
];

function AWSUGNCRImages() {
  return (
    <section className={styles.imagesSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading text="Our Community in Pictures" />
          <p className={styles.subtitle}>
            Glimpses from our events, workshops, and AWS community gatherings
          </p>
        </div>

        <div className={styles.marqueeContainer}>
          <Marquee
            speed={50}
            gradient={true}
            gradientColor="#0B1116"
            gradientWidth={100}
            pauseOnHover={true}
            direction="left"
          >
            {marqueeImages1.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.marqueeImage}
                />
              </div>
            ))}
          </Marquee>
        </div>

        <div className={styles.marqueeContainer}>
          <Marquee
            speed={40}
            gradient={true}
            gradientColor="#0B1116"
            gradientWidth={100}
            pauseOnHover={true}
            direction="right"
          >
            {marqueeImages2.map((image, index) => (
              <div key={index} className={styles.imageWrapper}>
                <img
                  src={image.src}
                  alt={image.alt}
                  className={styles.marqueeImage}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default AWSUGNCRImages;
