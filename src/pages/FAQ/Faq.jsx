import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import Heading from "../../components/Heading/Heading";
import styles from "./Faq.module.css";

const faqData = [
  {
    question: "What is AWS User Group Delhi NCR?",
    answer: "AWS User Group Delhi NCR is a community-driven organization that brings together AWS enthusiasts, developers, architects, and cloud professionals in the Delhi NCR region. We organize meetups, workshops, and events to share knowledge and foster collaboration."
  },
  {
    question: "How can I join the AWS User Group?",
    answer: "Joining is simple! You can attend our events, join our social media channels, or reach out to our organizers. We welcome everyone from beginners to experienced professionals who are interested in AWS and cloud computing."
  },
  {
    question: "Are the events free to attend?",
    answer: "Yes, most of our events are free to attend! We believe in making cloud knowledge accessible to everyone. Some special workshops or premium events might have a nominal fee to cover venue and refreshment costs."
  },
  {
    question: "What topics do you cover in your events?",
    answer: "We cover a wide range of AWS topics including serverless computing, containerization, machine learning, security, cost optimization, and best practices. We also discuss real-world use cases and industry trends."
  },
  {
    question: "Can I present at your events?",
    answer: "Absolutely! We encourage community members to share their knowledge and experiences. If you have an interesting topic to present, reach out to our organizers. We provide support and guidance for first-time speakers."
  }
];

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <Heading text="Frequently Asked Questions" />
          <p className={styles.subtitle}>
            Find answers to common questions about our AWS community
          </p>
        </div>

        <div className={styles.faqContainer}>
          {faqData.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleFaq(index)}
              >
                <span className={styles.questionText}>{faq.question}</span>
                <div 
                  className={`${styles.icon} ${openIndex === index ? styles.rotated : ''}`}
                >
                  <FaChevronDown />
                </div>
              </button>

              {openIndex === index && (
                <div className={styles.answer}>
                  <div className={styles.answerContent}>
                    <p>{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Faq;
