import React, { useState } from 'react';
import FAQItem from './FAQItem';
import { Helmet } from 'react-helmet';


const FAQsSection = ({ faqs  }) => {
  const [openIndex, setOpenIndex] = useState(null);


  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };



  return (
  
    <div className="faqs">
      {/* ...faqTop section */}
      <div className="faqBottom">
        <div className="faqLeft">
          <h3>What's covered?</h3>
          <hr />
          <div className="faq-container">
            {faqs?.map((item, index) => (
              <FAQItem
                key={index}
                item={item}
                isOpen={openIndex === index}
                toggle={() => toggleFAQ(index)}
              />
            ))}
          </div>
        </div>

       
      </div>
    </div>
  
  );
};

export default FAQsSection;
