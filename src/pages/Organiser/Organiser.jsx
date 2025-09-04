import { FaLinkedin, FaTwitter } from "react-icons/fa";
import Heading from "../../components/Heading/Heading";
import styles from "./Organiser.module.css";
import orgPic1 from "../../assets/core-team/Amandeep Singh.png";
import orgPic2 from "../../assets/core-team/Dipali Kulshrestha.jpg";
import orgPic3 from "../../assets/core-team/Eshika.jpg";
import orgPic4 from "../../assets/core-team/Madhur.jpg";
import orgPic5 from "../../assets/core-team/Rajat_Arora.jpg";
import orgPic6 from "../../assets/core-team/Saatwik.jpg";
import orgPic7 from "../../assets/core-team/Shekhar.jpg";
import orgPic8 from "../../assets/core-team/Sumit.jpeg";
import orgPic9 from "../../assets/core-team/vridhi.jpeg";
import orgPic10 from "../../assets/core-team/Shikhar.jpg";

import PropTypes from "prop-types";

// OrganiserCard Component
const OrganiserCard = ({ name, designation, linkedIn, twitter, img }) => {
  return (
    <div className={styles.organiserCard}>
      <div className={styles.socialLinks}>
        <a
          href={linkedIn}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.socialLink}
          aria-label={`${name}'s LinkedIn`}
        >
          <FaLinkedin />
        </a>
        {twitter && (
          <a
            href={twitter}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
            aria-label={`${name}'s Twitter`}
          >
            <FaTwitter />
          </a>
        )}
      </div>
      <div className={styles.imageSection}>
        <img
          src={img}
          alt={name}
          className={styles.organiserImage}
        />
      </div>
      <div className={styles.cardContent}>
        <h3 className={styles.name}>{name}</h3>
        <p className={styles.designation}>{designation}</p>
      </div>
    </div>
  );
};

function Organiser() {
  const organisers = [
    {
      name: "Amandeep Singh Bajwa",
      designation: "Core Team Member",
      linkedIn: "https://www.linkedin.com/in/amandeep-singh-bajwa/",
      img: orgPic1,
    },
    {
      name: "Dipali Kulshrestha",
      designation: "AWS Hero, Community Lead",
      linkedIn: "https://www.linkedin.com/in/dipalik/",
      img: orgPic2,
    },
    {
      name: "Eshika Mahajan",
      designation: "Core Team Member",
      linkedIn: "https://www.linkedin.com/in/eshikamahajan/",
      img: orgPic3,
    },
    {
      name: "Madhur Aggarwal",
      designation: "Core Team Member",
      linkedIn: "https://www.linkedin.com/in/madhuragl/",
      img: orgPic4,
    },
    {
      name: "Rajat Arora",
      designation: "AWS Community Builder, Community Lead",
      linkedIn: "https://www.linkedin.com/in/arora-rajat-cw/",
      img: orgPic5,
    },
    {
      name: "Saatwik Mehta",
      designation: "Core Team Member",
      linkedIn: "https://www.linkedin.com/in/saatwikmehta/",
      img: orgPic6,
    },
    {
      name: "Shekhar Thathera",
      designation: "Core Team Member",
      linkedIn: "https://www.linkedin.com/in/shekharthathera/",
      img: orgPic7,
    },
    {
      name: "Shikhar Singh",
      designation: "Core Team Member",
      linkedIn: "https://www.linkedin.com/in/shikharsingh0712/",
      img: orgPic10,
    },
    {
      name: "Sumit Grover",
      designation: "Core Team Member",
      linkedIn: "https://www.linkedin.com/in/sumit-grover-29a277256/",
      img: orgPic8,
    },
    {
      name: "Vridhi Duggal",
      designation: "Core Team Member",
      linkedIn: "https://www.linkedin.com/in/vridhi-duggal-060682275/",
      img: orgPic9,
    }
  ];

  return (
    <section className={styles.organiserSection}>
      <div className={styles.container}>
        <Heading text="Meet Our Team" />
        <p className={styles.sectionDescription}>
          The passionate individuals who make AWS User Group Delhi NCR possible
        </p>
        <div className={styles.teamGrid}>
          {organisers.map((organiser, index) => (
            <div key={index}>
              <OrganiserCard {...organiser} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

OrganiserCard.propTypes = {
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  linkedIn: PropTypes.string.isRequired,
  twitter: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default Organiser;
