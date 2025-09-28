import anutoshImg from "../assets/speakers/Anutosh.jpg";
import awsLogo from "../assets/sponsors/aws.png";
import aws1 from "../assets/events/astute_dev_with_Q/aws1.jpg";
import aws2 from "../assets/events/astute_dev_with_Q/aws2.jpg";
import aws3 from "../assets/events/astute_dev_with_Q/aws3.jpg";
import aws4 from "../assets/events/astute_dev_with_Q/aws4.jpg";
import aws5 from "../assets/events/astute_dev_with_Q/aws5.jpg";
import aws6 from "../assets/events/astute_dev_with_Q/aws6.jpg";
import aws7 from "../assets/events/astute_dev_with_Q/aws7.jpg";
import aws8 from "../assets/events/astute_dev_with_Q/aws8.jpg";
import aws9 from "../assets/events/astute_dev_with_Q/aws9.jpeg";
import aws10 from "../assets/events/astute_dev_with_Q/aws10.jpeg";

export const reimaginingCLIData = {
  // Hero Section Data
  title: "Reimagining CLI Productivity with Amazon Q Developer",
  date: "June 27, 2025",
  venue: "Amazon Office, Gurugram",
  description: [
    "The session explored how Amazon Q Developer enhanced productivity in IDE and CLI environments by reducing context switching and enabling natural language commands.",
    "Attendees discovered smarter ways to generate CLI commands, troubleshoot in real time, and streamline workflows with Amazon Q.",
  ],

  // Images for marquee
  images: {
    imagePaths: [aws1, aws2, aws3, aws4, aws5, aws6, aws7, aws8, aws9, aws10],
  },

  // Event Details
  eventDetails: {
    type: "Workshop",
    organizer: "AWS",
    attendees: "60+",
    sessions: "1",
    speakers: "1",
    status: "completed",
  },

  // About sections for the event
  aboutSections: [
    {
      title: "WHO ATTENDED",
      content: [
        "The workshop was designed for developers, engineers, and professionals looking to improve their cloud and CLI productivity.",
        "Participants included working professionals and technology enthusiasts eager to explore Amazon Q Developer capabilities.",
      ],
    },
    {
      title: "THE EVENT",
      content: [
        "The session provided a deep dive into Amazon Q Developer, covering its role in IDE and CLI productivity.",
        "Live demos showcased natural language command generation, troubleshooting, fetching logs, and real-world scenarios.",
      ],
    },
    {
      title: "WHY IT MATTERED",
      content: [
        "The event highlighted how Amazon Q Developer simplified CLI workflows and boosted efficiency.",
        "It gave participants practical insights into smarter cloud management and productivity gains through AI-powered tooling.",
      ],
    },
  ],

  // Speakers data
  speakers: [
    {
      name: "Anutosh",
      image: anutoshImg,
      linkedin: "https://www.linkedin.com/in/anutosh-singhwal/",
    },
  ],

  // Event highlight words for marquee (present tense + relevant)
  highlightWords: ["USE", "BUILD", "AUTOMATE", "AI", "CLI"],

  // Event sponsors
  sponsors: {
    poweredBy: [
      {
        name: "AWS",
        logo: awsLogo,
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
      "This workshop showcased the power of Amazon Q for enhancing developer productivity.",
    description:
      "Stay connected with AWS to continue exploring innovations in AI, productivity tools, and cloud technologies.",
    meetupUrl: "https://www.meetup.com/amazonaws-delhi/",
  },
};

export default reimaginingCLIData;
