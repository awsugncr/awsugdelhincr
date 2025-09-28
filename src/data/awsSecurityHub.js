import aws1 from "../assets/events/securitygroup/1686481356285.jpg";
import aws2 from "../assets/events/securitygroup/1686481356627.jpg";
import aws3 from "../assets/events/securitygroup/1686481364559.jpg";
import aws4 from "../assets/events/securitygroup/1686488156259.jpg";
import aws5 from "../assets/events/securitygroup/1686488156759.jpg";
import aws6 from "../assets/events/securitygroup/AWS7.jpg";
import aws7 from "../assets/events/securitygroup/AWS8.jpg";
import aws8 from "../assets/events/securitygroup/AWS9.jpg";
import aws9 from "../assets/events/securitygroup/AWS10.jpg";
import aws10 from "../assets/events/securitygroup/AWS11.jpg";

// AWS SECURITY HUB Event Data
export const awsSecurityHubData = {
  // Hero Section Data
  title: "Workshop: AWS Security Hub (in-person)",
  date: "June 9, 2023",
  venue: "AWS Office, Gurugram, India",
  description: [
    "A hands-on workshop designed for cloud and security enthusiasts.",
    "Participants learned practical skills, best practices, and advanced techniques to strengthen their AWS security posture.",
  ],

  // Images for marquee
  images: {
    imagePaths: [aws1, aws2, aws3, aws4, aws5, aws6, aws7, aws8, aws9, aws10],
  },

  // Event Details
  eventDetails: {
    type: "AWS Security Hub Workshop",
    organizer: "AWS User Group Delhi NCR",
    attendees: "170+",
    sessions: "1",
    speakers: "2",
    status: "completed",
  },

  // About sections for the event
  aboutSections: [
    {
      title: "WHO ATTENDED",
      content: [
        "The workshop brought together a diverse group of cloud professionals, developers, IT engineers, and security enthusiasts from the AWS community.",
        "Each attendee shared a common goal — to strengthen their understanding of AWS Security Hub, gain practical exposure, and explore real-world applications of cloud security.",
        "The event also served as a platform for community members to collaborate, exchange ideas, and learn collectively.",
      ],
    },
    {
      title: "THE EVENT",
      content: [
        "The AWS Security Hub Workshop was an action-packed day filled with interactive sessions, hands-on labs, and lively discussions on cloud security.",
        "Attendees explored how AWS Security Hub streamlines threat detection and compliance while learning directly from industry experts.",
        "From expert talks to community networking, the event was a perfect blend of knowledge sharing and collaboration.",
      ],
    },
    {
      title: "WHY ATTENDED",
      content: [
        "Participants joined the workshop to experience hands-on learning with AWS Security Hub and discover how it helps in monitoring, threat detection, and compliance management.",
        "They learned directly from AWS experts, gaining valuable insights into building secure, scalable environments.",
        "Beyond the sessions, attendees found immense value in networking with like-minded professionals and becoming part of a vibrant, knowledge-driven AWS community.",
      ],
    },
  ],

  // Speakers data
  speakers: [
    {
      name: "Kirti Dhabhai",
      image: "../../assets/speakers/Kirti Dhabhai.jpg",
      linkedin: "https://linkedin.com/in/kirtidhabhai",
    },
    {
      name: "Shagun Beniwal",
      image: "../../assets/speakers/Shagun Beniwal.jpg",
      linkedin: "https://linkedin.com/in/shagun-beniwal-90560498",
    },
  ],

  // Event highlight words for marquee
  highlightWords: ["SECURE", "LEARN", "COLLABORATE"],

  // Event sponsors
  sponsors: {
    poweredBy: [
      {
        name: "AWS",
        logo: "../../assets/sponsors/aws.png",
        website: "https://aws.amazon.com",
      },
    ],
    inAssociationWith: [],
    platinum: [],
    gold: [],
    silver: [],
  },

  // Looking Back / Community Section
  community: {
    heading: "Looking Back",
    subheading:
      "This workshop marked another milestone for our AWS community — bringing professionals together to learn and share security best practices.",
    description:
      "Stay connected with AWS and be the first to know about upcoming workshops, meetups, and AWS Community Days.",
    meetupUrl: "https://www.meetup.com/amazonaws-delhi/",
  },
};

export default awsSecurityHubData;
