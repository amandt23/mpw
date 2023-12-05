import React, { useState } from 'react';
import './Faqs.css'; // Your CSS file for styling

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'What is Lorem Ipsum?',
      answer: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
      question: 'Why do we use it?',
      answer: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    // Add more FAQs as needed
  ];

  return (
    <div className="faq-accordion1">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item1">
          <button
            className={`faq-question1 ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleAccordion(index)}
          >
            {faq.question}
          </button>
          {activeIndex === index && (
            <div className="faq-answer1">{faq.answer}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Faqs;
