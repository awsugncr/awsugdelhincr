import dishaBablaImg from "../assets/speakers/Disha Babla.jpg";
import dipaliKulshresthaImg from "../assets/speakers/Dipali Kulshrestha.jpg";
import eshikaMahajanImg from "../assets/speakers/Eshika Mahajan.jpg";
import hinaAroraImg from "../assets/speakers/Hina Arora.jpg";
import saloniBhatiaImg from "../assets/speakers/Saloni Bhatia.jpg";
import swatiAwasthiImg from "../assets/speakers/Swati Awasthi.jpg";
import tanishiMookerjeeImg from "../assets/speakers/Tanishi Mookerjee.jpg";
import bhuvaneswariImg from "../assets/speakers/Bhuvaneswari.jpg";
import awsLogo from "../assets/sponsors/aws.png";
import wipLogo from "../assets/sponsors/WIP logo.png";
import sweLogo from "../assets/sponsors/SWE.jpg";
import awsugwitLogo from "../assets/sponsors/AWSUGWit.jpg";
import aws1 from "../assets/events/wit_2025/aws1.jpg";
import aws2 from "../assets/events/wit_2025/aws2.jpg";
import aws3 from "../assets/events/wit_2025/aws3.jpg";
import aws4 from "../assets/events/wit_2025/aws4.jpg";
import aws5 from "../assets/events/wit_2025/aws5.jpg";
import aws6 from "../assets/events/wit_2025/aws6.jpg";
import aws7 from "../assets/events/wit_2025/aws7.jpg";
import aws8 from "../assets/events/wit_2025/aws8.jpg";
import aws9 from "../assets/events/wit_2025/aws9.jpg";
import aws10 from "../assets/events/wit_2025/aws10.jpg";

export const witData = {
  // Hero Section Data
  title: "Celebrating Women in Tech: Leadership, Innovation & Growth",
  date: "March 8, 2025",
  venue: "IIT Delhi, India",
  description: [
    "A vibrant celebration of women breaking barriers in technology, the Women in Tech event empowered, inspired, and connected aspiring and established professionals.",
  ],

  // Images for marquee
  images: {
    imagePaths: [aws1, aws2, aws3, aws4, aws5, aws6, aws7, aws8, aws9, aws10],
  },

  // Event Details
  eventDetails: {
    type: "Workshop",
    organizer: "AWS",
    attendees: "100+",
    sessions: "8",
    speakers: "8",
    status: "completed",
  },

  // About sections for the event
  aboutSections: [
    {
      title: "WHO ATTENDED",
      content: [
        "Industry leaders, women technologists, PhD scholars, and passionate students joined the event, creating a diverse and inspiring audience.",
        "Speakers and panelists from Women in Product India and Society of Women Engineers brought rich expertise and authentic experiences.",
        "Their presence fostered meaningful connections and knowledge exchange.",
      ],
    },
    {
      title: "WHAT HAPPENED",
      content: [
        "The event featured a keynote on how AI is shaping the future of product management, offering practical insights into using technology as a career enabler.",
        "A dynamic panel discussion highlighted personal career journeys, challenges faced by women in tech, and strategies for breaking barriers in leadership.",
        "Alongside this, engaging sessions on research, innovation, and collaboration enriched the audience with both technical knowledge and authentic stories from the field.",
      ],
    },
    {
      title: "WHY IT MATTERED",
      content: [
        "It provided a platform for mentorship, inspiration, and professional growth, encouraging women to pursue leadership roles in technology.",
        "The discussions highlighted real-world challenges and solutions, empowering participants to embrace innovation confidently.",
        "By celebrating achievements and sharing authentic experiences, the event strengthened the community of Women in Tech.",
      ],
    },
  ],

  // Speakers data
  speakers: [
    {
      name: "Disha Babla",
      image: dishaBablaImg,
      linkedin: "https://linkedin.com/in/dishababla",
    },
    {
      name: "Dipali Kulshrestha",
      image: dipaliKulshresthaImg,
      linkedin: "https://linkedin.com/in/dipali-kulshrestha",
    },
    {
      name: "Eshika Mahajan",
      image: eshikaMahajanImg,
      linkedin: "https://linkedin.com/in/eshikamahajan",
    },
    {
      name: "Hina Arora",
      image: hinaAroraImg,
      linkedin: "https://linkedin.com/in/careerwithhina",
    },
    {
      name: "Saloni Bhatia",
      image: saloniBhatiaImg,
      linkedin: "https://linkedin.com/in/saloni-bhatia-phd-scholar-8372b5bb",
    },
    {
      name: "Swati Awasthi",
      image: swatiAwasthiImg,
      linkedin: "https://linkedin.com/in/swati-awasthi",
    },
    {
      name: "Tanishi Mookerjee",
      image: tanishiMookerjeeImg,
      linkedin: "https://linkedin.com/in/tanishi-mookerjee",
    },
    {
      name: "Bhuvaneswari Subramani",
      image: bhuvaneswariImg,
      linkedin: "https://linkedin.com/in/bhuvanas",
    },
  ],

  // Event highlight words for marquee
  highlightWords: ["LEAD", "INNOVATE", "GROW", "EMPOWER", "INSPIRE"],

  // Event sponsors
  sponsors: {
    poweredBy: [
      {
        name: "AWS",
        logo: awsLogo,
        website: "https://aws.amazon.com",
      },
    ],
    inAssociationWith: [
      {
        name: "Women in Product India",
        logo: wipLogo,
        website: "https://womeninproductindia.com",
      },
      {
        name: "Society of Women Engineers",
        logo: sweLogo,
        website: "https://swe.org",
      },
      {
        name: "AWS User Group Women in Tech India",
        logo: awsugwitLogo,
        website: "https://www.meetup.com/aws-user-group-women-in-tech-india",
      },
    ],
    platinum: [],
    gold: [],
    silver: [],
  },

  // Looking Back / Community Section
  community: {
    heading: "Looking Back",
    subheading:
      "This event celebrated women leaders and innovators in technology, inspiring the next generation of technologists.",
    description:
      "Stay connected with AWS to continue learning, sharing, and growing within the Women in Tech community.",
    meetupUrl: "https://www.meetup.com/amazonaws-delhi/",
  },
};

export default witData;
