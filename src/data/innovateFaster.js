import img1 from "../assets/events/innovatefaster/1697304561783.jpg";
import img2 from "../assets/events/innovatefaster/1697304565998.jpg";
import img3 from "../assets/events/innovatefaster/1697304575176.jpg";
import img4 from "../assets/events/innovatefaster/1697304577122.jpg";
import img5 from "../assets/events/innovatefaster/1697633015548.jpg";
import img6 from "../assets/events/innovatefaster/1697633016214.jpg";
import img7 from "../assets/events/innovatefaster/AWS10.jpg";
import img8 from "../assets/events/innovatefaster/AWS12.jpg";
import img9 from "../assets/events/innovatefaster/AWS14.JPG";
import img10 from "../assets/events/innovatefaster/AWS9.jpg";

// Innovate Faster with AWS Event Data (Past Event)
export const innovateAwsData = {
  // Hero Section Data
  title: "Innovate Faster with AWS",
  date: "October 14, 2023",
  venue: "Gautam Buddha University, Greater Noida",
  description: [
    "The event at Gautam Buddha University introduced students to the fundamentals of AWS and cloud computing.",
    "It emphasized the role of community and collaboration in driving innovation with AWS technologies.",
  ],

  // Images for marquee
  images: {
    imagePaths: [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10],
  },

  // Event Details
  eventDetails: {
    type: "College Event",
    organizer: "AWS",
    attendees: "250+",
    sessions: "2",
    speakers: "2",
    status: "completed",
  },

  // About sections for the event
  aboutSections: [
    {
      title: "WHO ATTENDED",
      content: [
        "The event was a student-focused workshop at Gautam Buddha University.",
        "It introduced participants to the world of AWS and its possibilities.",
        "Over 300 students attended, eager to learn, share, and grow together.",
      ],
    },
    {
      title: "THE EVENT",
      content: [
        "The day featured two insightful sessions led by AWS community speakers.",
        "Students learned about cloud fundamentals and the potential of AWS.",
        "It was a vibrant mix of knowledge sharing, networking, and collaboration.",
      ],
    },
    {
      title: "WHY IT MATTERED",
      content: [
        "The event inspired students to begin their cloud journey with AWS.",
        "It sparked enthusiasm for learning cloud technologies and joining the AWS community.",
        "The sessions provided a strong foundation for exploring AWS further in academics and careers.",
      ],
    },
  ],

  // Speakers data
  speakers: [
    {
      name: "Dipali Kulshrestha",
      image: "../../assets/speakers/Dipali Kulshrestha.jpg",
      linkedin: "https://www.linkedin.com/in/dipalik/",
    },
    {
      name: "Rajat Arora",
      image: "../../assets/speakers/Rajat Arora.jpeg",
      linkedin: "https://www.linkedin.com/in/arora-rajat-cw/",
    },
  ],

  // Event highlight words for marquee (present tense + student-focused)
  highlightWords: ["LEARN", "CLOUD", "STUDENTS", "AWS", "COLLABORATE"],

  // No sponsors for this event
  sponsors: {
    poweredBy: [],
    inAssociationWith: [],
    platinum: [],
    gold: [],
    silver: [],
  },

  // Looking Back / Community Section
  community: {
    heading: "Looking Back",
    subheading:
      "This event marked the beginning of many students’ journeys into cloud with AWS.",
    description:
      "Join the AWS community to keep learning, sharing, and growing together with cloud technologies.",
    meetupUrl: "https://www.meetup.com/amazonaws-delhi/",
  },
};

export default innovateAwsData;
