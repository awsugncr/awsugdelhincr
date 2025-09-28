import mayankSinghImg from "../assets/speakers/Mayank Singh.jpg";
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

export const amazonQWorkshopData = {
  // Hero Section Data
  title: "Workshop: Be an Astute Developer with Amazon Q",
  date: "June 28, 2024",
  venue: "Amazon Office, Gurugram",
  description: [
    "This workshop focused on Amazon Q, a revolutionary generative AI assistant that empowers professionals to unlock insights, automate tasks, and make data-driven decisions.",
    "Participants gained hands-on experience in building next-gen applications, transforming raw data into actionable information, and improving efficiency for a competitive edge.",
  ],

  // Images for marquee (kept same as ACD 2024)
  images: {
    imagePaths: [aws1, aws2, aws3, aws4, aws5, aws6, aws7, aws8, aws9, aws10],
  },

  // Event Details
  eventDetails: {
    type: "Workshop",
    organizer: "AWS",
    attendees: "75+",
    sessions: "1",
    speakers: "2",
    status: "completed",
  },

  // About sections for the event
  aboutSections: [
    {
      title: "WHO ATTENDED",
      content: [
        "The workshop was designed for working professionals exploring generative AI to enhance efficiency and make better data-driven decisions.",
        "Participants came from diverse backgrounds, including developers, IT professionals, and business leaders.",
      ],
    },
    {
      title: "THE EVENT",
      content: [
        "This interactive workshop provided hands-on learning with Amazon Q.",
        "Attendees explored how to use generative AI to transform raw data into actionable insights, automate workflows, and improve decision-making.",
      ],
    },
    {
      title: "WHY IT MATTERED",
      content: [
        "The workshop helped professionals understand the practical applications of Amazon Q in their daily work.",
        "It equipped participants with skills to leverage AI for improved efficiency, smarter strategies, and a competitive edge in their industries.",
      ],
    },
  ],

  // Speakers data (kept same as ACD 2024)
  speakers: [
    {
      name: "Mayank Singh",
      image: mayankSinghImg,
      linkedin: "https://www.linkedin.com/in/mpsingh18/",
    },
    // {
    //   name: "Deepak Dixit",
    //   image: placeholderImg, // If you add a placeholder import
    //   linkedin: "https://www.linkedin.com/in/",
    // },
  ],

  // Event highlight words for marquee
  highlightWords: [
    "GENERATIVE AI",
    "DATA",
    "INSIGHTS",
    "EFFICIENCY",
    "INNOVATION",
  ],

  // Event sponsors (only AWS kept)
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

  // Looking Ahead / Community Section
  community: {
    heading: "Looking Ahead",
    subheading:
      "This was just the beginning — join our community to get early access and invites for future AWS events.",
    description:
      "Stay connected with AWS and be the first to know about upcoming workshops, meetups, and AWS Community Days.",
    meetupUrl: "https://www.meetup.com/amazonaws-delhi/",
  },
};

export default amazonQWorkshopData;
