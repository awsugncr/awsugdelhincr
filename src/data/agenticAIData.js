import img1 from "../assets/events/Agentic_AI_with_AWS/aws1.jpg";
import img2 from "../assets/events/Agentic_AI_with_AWS/aws2.jpg";
import img3 from "../assets/events/Agentic_AI_with_AWS/aws3.jpg";
import img4 from "../assets/events/Agentic_AI_with_AWS/aws4.jpg";

// Agentic AI with AWS Event Data (Past Event)
export const agenticAiAwsData = {
  // Hero Section Data
  title: "Agentic AI with AWS",
  date: "July 19, 2025",
  venue: "LambdaTest Noida Office",
  description: [
    "The event focused on Agentic AI and AWS-powered intelligent automation.",
    "It explored building autonomous AI systems and simplifying cloud management with Q CLI.",
  ],

  // Images for marquee
  images: {
    imagePaths: [img1, img2, img3, img4, img2, img3, img1, img4, img3, img2],
  },

  // Event Details
  eventDetails: {
    type: "Corporate Event",
    organizer: "AWS",
    attendees: "75+",
    sessions: "2",
    speakers: "3",
    status: "completed",
  },

  // About sections for the event
  aboutSections: [
    {
      title: "WHO ATTENDED",
      content: [
        "The event was designed for professionals exploring advanced AI and cloud automation.",
        "Participants included developers, architects, and technology enthusiasts.",
      ],
    },
    {
      title: "THE EVENT",
      content: [
        "The day featured two sessions — one on Agentic AI systems and another on AWS Q CLI.",
        "Attendees gained hands-on insights into building autonomous agents and managing infrastructure efficiently.",
      ],
    },
    {
      title: "WHY IT MATTERED",
      content: [
        "The event helped professionals understand the future of AI-driven cloud systems.",
        "It highlighted AWS-native tools for building scalable, responsible, and autonomous solutions.",
      ],
    },
  ],

  // Speakers data (same as provided: Dipali & Rajat)
  speakers: [
    {
      name: "Dipali Kulshrestha",
      image: "../../assets/speakers/Dipali Kulshrestha.jpg",
      linkedin: "https://www.linkedin.com/in/dipalik/",
    },
    {
      name: "Eshika Mahajan",
      image: "../../assets/speakers/Eshika Mahajan.jpg",
      linkedin: "https://www.linkedin.com/in/eshikamahajan/",
    },
    {
      name: "Rajat Arora",
      image: "../../assets/speakers/Rajat Arora.jpeg",
      linkedin: "https://www.linkedin.com/in/arora-rajat-cw/",
    },
  ],

  // Event highlight words for marquee
  highlightWords: ["AGENTIC AI", "AWS", "AUTONOMY", "Q CLI", "CLOUD"],

  // No sponsors for this event
  sponsors: {
    poweredBy: [],
    inAssociationWith: [],
    platinum: [],
    gold: [],
    silver: [],
  },

  // Looking Ahead / Community Section
  community: {
    heading: "Looking Ahead",
    subheading:
      "This event was a step towards the next wave of AI and cloud automation with AWS.",
    description:
      "Stay connected with the AWS community to continue learning and innovating in the world of cloud and AI.",
    meetupUrl: "https://www.meetup.com/amazonaws-delhi/",
  },
};

export default agenticAiAwsData;
