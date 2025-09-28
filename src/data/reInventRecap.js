import aws1 from "../assets/events/reinvent_recap/aws1.jpg";
import aws2 from "../assets/events/reinvent_recap/aws2.jpg";
import aws3 from "../assets/events/reinvent_recap/aws3.jpg";
import aws4 from "../assets/events/reinvent_recap/aws4.jpg";
import aws5 from "../assets/events/reinvent_recap/aws5.jpg";
import aws6 from "../assets/events/reinvent_recap/aws6.jpg";
import aws7 from "../assets/events/reinvent_recap/aws7.jpg";
import aws8 from "../assets/events/reinvent_recap/aws8.jpg";
import aws9 from "../assets/events/reinvent_recap/aws9.jpg";
import aws10 from "../assets/events/reinvent_recap/aws10.jpg";

export const reinventRecapData = {
  // Hero Section Data
  title: "Reinvent re:cap Delhi NCR",
  date: "February 23, 2024",
  venue: "Amazon Office, Gurugram",
  description: [
    "A knowledge-packed event that brought the latest AWS innovations, insights, and hands-on learning directly to the community, both in-person and via live streaming.",
  ],

  // Images for marquee
  images: {
    imagePaths: [aws1, aws2, aws3, aws4, aws5, aws6, aws7, aws8, aws9, aws10],
  },

  // Event Details
  eventDetails: {
    type: "Workshop",
    organizer: "AWS",
    attendees: "50+",
    sessions: "4",
    speakers: "4",
    status: "completed",
  },

  // About sections for the event
  aboutSections: [
    {
      title: "WHO ATTENDED",
      content: [
        "The event attracted AWS enthusiasts, cloud professionals, developers, and tech innovators eager to stay updated on cutting-edge AWS technologies.",
        "From seasoned architects to aspiring cloud practitioners, the audience was diverse, collaborative, and highly engaged.",
      ],
    },
    {
      title: "THE EVENT",
      content: [
        "The AWS Reinvent Recap event distilled the essence of AWS’s latest innovations and community programs into an interactive, digestible experience.",
        "It brought the cloud closer to attendees by showcasing practical applications of advanced tools, AI-powered solutions, and governance strategies, while fostering collaboration and idea-sharing among the community.",
        "Essentially, it turned complex AWS advancements into actionable insights that attendees could directly apply in their projects and workflows.",
      ],
    },
    {
      title: "WHY IT MATTERED",
      content: [
        "Attendees explored the latest in compute, AI, and developer tools, gained insights from expert speakers, and experienced live demos of revolutionary technologies like CodeWhisperer, Amazon Q, and Generative AI applications.",
        "This event offered unparalleled learning, networking, and inspiration for anyone passionate about cloud innovation.",
      ],
    },
  ],

  // Speakers data
  speakers: [
    {
      name: "Dipali Kulshrestha",
      image: "../../assets/speakers/Dipali Kulshrestha.jpg",
      linkedin: "https://linkedin.com/in/dipali-kulshrestha",
    },
    {
      name: "Rajat Arora",
      image: "../../assets/speakers/Rajat Arora.jpeg",
      linkedin: "https://linkedin.com/in/rajatarora",
    },
    {
      name: "Ruchi Kapur",
      image: "../../assets/speakers/Ruchi Kapur.jpg",
      linkedin: "https://linkedin.com/in/ruchikapur",
    },
    {
      name: "Tajinder Singh",
      image: "../../assets/speakers/Tajinder Singh.jpg",
      linkedin: "https://linkedin.com/in/tajinder-singh-aa25464",
    },
  ],

  // Event highlight words for marquee (present tense + relevant)
  highlightWords: ["LEARN", "INSPIRE", "CONNECT"],

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
      "This recap event brought AWS innovations and community learning to the Delhi NCR audience.",
    description:
      "Stay connected with AWS to get updates on upcoming workshops, meetups, and AWS Community Days.",
    meetupUrl: "https://www.meetup.com/amazonaws-delhi/",
  },
};

export default reinventRecapData;
