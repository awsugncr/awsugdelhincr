import aws1 from "../assets/events/aws meetup/1683440786380.jpg";
import aws2 from "../assets/events/aws meetup/1683440787913.jpg";
import aws3 from "../assets/events/aws meetup/1683630102041.jpg";
import aws4 from "../assets/events/aws meetup/1683630107460.jpg";
import aws5 from "../assets/events/aws meetup/1683630110734.jpg";
import aws6 from "../assets/events/aws meetup/aws1.jpg";
import aws7 from "../assets/events/aws meetup/AWS10.jpg";
import aws8 from "../assets/events/aws meetup/AWS11.jpg";
import aws9 from "../assets/events/aws meetup/AWS14.jpg";
import aws10 from "../assets/events/aws meetup/AWS15.jpg";

// AWS MEETUP Event Data
export const awsmeetupData = {
  // Hero Section Data
  title: "AWS Meet-up (in-person)",
  date: "May 6, 2023",
  venue: "AWS Office, Gurugram, India",
  description: [
    "An in-person gathering of cloud enthusiasts, developers, and tech innovators where participants explored new AWS services, shared knowledge, and connected with the community in a high-energy, hands-on learning environment.",
  ],

  // Images for marquee
  images: {
    imagePaths: [aws1, aws2, aws3, aws4, aws5, aws6, aws7, aws8, aws9, aws10],
  },

  // Event Details
  eventDetails: {
    type: "AWS Meet-up",
    organizer: "AWS User Group Delhi NCR",
    attendees: "170+",
    sessions: "3",
    speakers: "5",
    status: "completed",
  },

  // About sections for the event
  aboutSections: [
    {
      title: "WHO ATTENDED",
      content: [
        "The meetup attracted a diverse mix of participants, from students and budding developers to seasoned AWS professionals.",
        "Anyone passionate about cloud computing, eager to learn, and interested in networking found value in attending.",
        "It was a platform to meet like-minded peers, share experiences, and discuss the latest trends, tools, and best practices in the AWS ecosystem.",
        "Attendees also had the chance to interact directly with industry experts and thought leaders.",
      ],
    },
    {
      title: "THE EVENT",
      content: [
        "The AWS in-person meetup was an incredible gathering of cloud enthusiasts, developers, and tech innovators.",
        "Attendees engaged in hands-on learning sessions, exploring new AWS services and their real-world applications.",
        "The event offered a dynamic environment to exchange ideas, ask questions, and gain insights from both peers and experts.",
        "It was also a fantastic opportunity to experience the energy of the community and be inspired by innovative tech solutions.",
      ],
    },
    {
      title: "WHY ATTENDED",
      content: [
        "Participants attended to gain practical, hands-on knowledge of AWS services and cloud technologies.",
        "The event featured live demonstrations, interactive sessions, and opportunities to collaborate on innovative ideas with peers.",
        "It was a perfect platform to stay updated on cloud trends, enhance technical skills, and expand professional networks while learning from real-world experiences shared by experts.",
      ],
    },
  ],

  // Speakers data
  speakers: [
    {
      name: "Dheeraj Choudhary",
      image: "../../assets/speakers/Dheeraj Choudhary.jpg",
      linkedin: "https://linkedin.com/in/dheeraj-choudhary",
    },
    {
      name: "Dipali Kulshrestha",
      image: "../../assets/core-team/Dipali Kulshrestha.jpg",
      linkedin: "https://linkedin.com/in/dipali-kulshrestha",
    },
    {
      name: "Rajat Arora",
      image: "../../assets/speakers/Rajat Arora.jpeg",
      linkedin: "https://linkedin.com/in/rajatarora",
    },
    {
      name: "Ridhima Kapoor",
      image: "../../assets/speakers/Ridhima Kapoor.jpg",
      linkedin: "https://linkedin.com/in/ridhimakapoor",
    },
    {
      name: "Vishal Alhat",
      image: "../../assets/speakers/Vishal Alhat.jpg",
      linkedin: "https://linkedin.com/in/vishalalhat",
    },
  ],

  // Event highlight words for marquee
  highlightWords: ["LEARN", "CONNECT", "CELEBRATE", "INSPIRE"],

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
      "This was just the beginning — our community came together and created an inspiring AWS experience.",
    description:
      "Stay connected with AWS and be the first to know about upcoming workshops, meetups, and AWS Community Days.",
    meetupUrl: "https://www.meetup.com/amazonaws-delhi/",
  },
};

export default awsmeetupData;
