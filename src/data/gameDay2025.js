import mayankSinghImg from "../assets/speakers/Mayank Singh.jpg";
import awsLogo from "../assets/sponsors/aws.png";
import aws1 from "../assets/events/gameday_2025/aws1.jpg";
import aws2 from "../assets/events/gameday_2025/aws2.jpg";
import aws3 from "../assets/events/gameday_2025/aws3.jpg";
import aws4 from "../assets/events/gameday_2025/aws4.jpg";
import aws5 from "../assets/events/gameday_2025/aws5.jpg";
import aws6 from "../assets/events/gameday_2025/aws6.jpg";
import aws7 from "../assets/events/gameday_2025/aws7.jpg";
import aws8 from "../assets/events/gameday_2025/aws8.jpg";
import aws9 from "../assets/events/gameday_2025/aws9.jpg";
import aws10 from "../assets/events/gameday_2025/aws10.jpg";

// AWS GAME DAY 2025 Event Data
export const gameday2025Data = {
  // Hero Section Data
  title: "AWS Game Day - Gen AI",
  date: "January 10, 2025",
  venue: "AWS Office, Gurugram, India",
  description: [
    "A day filled with high energy and hands-on challenges where participants explored the power of AWS and generative AI through real-world problem solving.",
  ],

  // Images for marquee
  images: {
    imagePaths: [aws1, aws2, aws3, aws4, aws5, aws6, aws7, aws8, aws9, aws10],
  },

  // Event Details
  eventDetails: {
    type: "AWS Game Day",
    organizer: "AWS User Group Delhi NCR",
    attendees: "60+",
    sessions: 1,
    speakers: 1,
    status: "completed",
  },

  // About sections for the event
  aboutSections: [
    {
      title: "WHO SHOWED UP",
      content: [
        "The event brought together cloud enthusiasts, tech professionals, and students eager to explore AWS and generative AI.",
        "Attendees included both beginners and advanced learners, all united by their passion for cloud and innovation.",
      ],
    },
    {
      title: "WHAT HAPPENED",
      content: [
        "The AWS Game Day – Gen AI Edition brought participants together for a day packed with learning, collaboration, and healthy competition.",
        "Teams took on real-world generative AI challenges, testing their creativity and AWS expertise.",
        "From brainstorming strategies to implementing solutions, the event was both thrilling and rewarding.",
      ],
    },
    {
      title: "WHY IT MATTERED",
      content: [
        "Game Day wasn’t just about winning — it was about growth, community, and experience.",
        "Participants had a unique opportunity to experiment with AWS services, sharpen their problem-solving abilities, and network with like-minded innovators.",
        "The practical exposure and collaborative spirit made it a truly transformative experience.",
      ],
    },
  ],

  // Speakers data
  speakers: [
    {
      name: "Mayank Singh",
      image: mayankSinghImg,
      linkedin: "https://linkedin.com/in/mpsingh18",
    },
  ],

  // Event highlight words for marquee (present tense + event-relevant)
  highlightWords: ["PLAY", "LEARN", "WIN"],

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
      "This Game Day was a celebration of learning, competition, and collaboration within the AWS community.",
    description:
      "Stay connected with AWS and be the first to know about upcoming workshops, meetups, and AWS Community Days.",
    meetupUrl: "https://www.meetup.com/amazonaws-delhi/",
  },
};

export default gameday2025Data;
