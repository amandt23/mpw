import React, { useState } from 'react'
import './faqs.css'
import { Helmet } from 'react-helmet';

const Faqs = () => {

    const faqData = [
        { question: 'How can I enhance my essay writing skills?', answer: 'Enhance your essay writing with our bespoke guidance and practical tips, provided by seasoned reliable UK essay writers at My Perfect Writing.' },
        { question: 'Where can I find expert dissertation support in the UK?', answer: 'Our platform offers university level essay services in UK from experienced PhD-level writers across various disciplines, ensuring your success.' },
        { question: 'Is urgent assignment help available in the UK?', answer: 'Yes, we provide prompt and reliable UK academic writing help, ensuring quality work even under tight deadlines, to support your academic journey.' },
        { question: 'Can I find specialised thesis writing assistance here?', answer: 'Absolutely, our top-quality essay writing UK team includes specialist thesis writers in the UK, ready to offer tailored support for both undergraduate and Master’s thesis.' },
        { question: 'What sets a trustworthy academic writing service apart?', answer: 'Trustworthiness in academic writing stems from a commitment to quality, timely delivery, and exceptional customer support, all hallmarks of My Perfect Writing providing affordable writing services in UK.' },
        { question: 'How do I adhere to UK academic standards in my research paper?', answer: 'Our team provides meticulous guidance to ensure your research paper not only meets but exceeds the UK’s rigorous academic standards.' },
        { question: 'What should I seek in an academic editing service?', answer: 'Look for expertise, precision, and a keen eye for detail in an academic editing service, all of which are pillars of My Perfect Writing.' },
        { question: 'Is coursework writing help available for university students?', answer: 'Yes, we offer bespoke coursework writing assistance, understanding the unique challenges and providing tailored support for university students.' },
    ];
   

    const [openIndex, setOpenIndex] = useState(null);
   

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  

    return (
<>
        <Helmet>

                <title>FAQ | My Perfect Writing's Expert Guidance</title>
                <meta name="description" content="Find answers to your questions with My Perfect Writing's FAQ. Expert insights on essay writing services in the UK, tailored to student needs." />

                <meta name="keywords" content="My Perfect Writing FAQ, Essay Writing Service FAQs UK, Academic Writing Questions Answered, My Perfect Writing Student Support"></meta>


        </Helmet>

        <script type="application/ld+json">
                    {`{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "keywords": "My Perfect Writing FAQ, Essay Writing Service FAQs UK, Academic Writing Questions Answered, My Perfect Writing Student Support",
  "mainEntity": [{
    "@type": "Question",
    "name": "How can I enhance my essay writing skills?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Enhance your essay writing with our bespoke guidance and practical tips, provided by seasoned reliable UK essay writers at My Perfect Writing"
    }
  },{
    "@type": "Question",
    "name": "Where can I find expert dissertation support in the UK?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Our platform offers university level essay services in UK from experienced PhD-level writers across various disciplines, ensuring your success."
    }
  },{
    "@type": "Question",
    "name": "Is urgent assignment help available in the UK?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes, we provide prompt and reliable UK academic writing help, ensuring quality work even under tight deadlines, to support your academic journey."
    }
  },{
    "@type": "Question",
    "name": "Can I find specialised thesis writing assistance here?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Absolutely, our top-quality essay writing UK team includes specialist thesis writers in the UK, ready to offer tailored support for both undergraduate and Master’s thesis."
    }
  }]
}                   
  `}
</script>

        <div className="faqs">
            <div className="faqTop">
                <h2>Frequently Asked Questions</h2>
                <p style={{ color: "black" }}>Explore answers to common queries about our bespoke writing services, demonstrating our unwavering commitment to excellence, expertise, and customer support.</p>
            </div>

            <div className="faqBottom">
                <div className="faqLeft">
                    <h3>What's covered?</h3>
                    <hr />
                    <div className="faq-container">
                        {faqData.map((item, index) => (
                            <div key={index} className="faq-item">
                                <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                    <div className="faq-q-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                                            <g clip-path="url(#clip0_94_4372)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.803711 13.1436C0.803711 9.82835 2.12067 6.64892 4.46488 4.30472C6.80908 1.96052 9.9885 0.643555 13.3037 0.643555C16.6189 0.643555 19.7983 1.96052 22.1425 4.30472C24.4867 6.64892 25.8037 9.82835 25.8037 13.1436C25.8037 16.4588 24.4867 19.6382 22.1425 21.9824C19.7983 24.3266 16.6189 25.6436 13.3037 25.6436C9.9885 25.6436 6.80908 24.3266 4.46488 21.9824C2.12067 19.6382 0.803711 16.4588 0.803711 13.1436ZM12.5904 18.4936L19.787 9.49689L18.487 8.45689L12.3504 16.1252L8.00371 12.5036L6.93704 13.7836L12.5904 18.4952V18.4936Z" fill="#01593A" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_94_4372">
                                                    <rect width="25" height="25" fill="white" transform="translate(0.803711 0.643555)" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <div className="faq-quetion">
                                            <h4>{item.question}</h4>
                                        </div>
                                    </div>

                                    {/* <div className="arrowDwon"> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                        <path d="M2.04503 7.25954C2.27944 7.0252 2.59732 6.89355 2.92878 6.89355C3.26023 6.89355 3.57812 7.0252 3.81253 7.25954L10 13.447L16.1875 7.25954C16.4233 7.03184 16.739 6.90585 17.0668 6.90869C17.3945 6.91154 17.708 7.043 17.9398 7.27476C18.1716 7.50652 18.303 7.82004 18.3059 8.14779C18.3087 8.47553 18.1827 8.79128 17.955 9.02704L10.8838 16.0983C10.6494 16.3326 10.3315 16.4643 10 16.4643C9.66857 16.4643 9.35069 16.3326 9.11628 16.0983L2.04503 9.02704C1.81069 8.79263 1.67905 8.47474 1.67905 8.14329C1.67905 7.81183 1.81069 7.49395 2.04503 7.25954Z" fill="black" />
                                    </svg>
                                    {/* </div> */}
                                </div>
                                {openIndex === index && (
                                    <div className="faq-answer ">
                                        <p>{item.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>

    </>
    )
}

export default Faqs
