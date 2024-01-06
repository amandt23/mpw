import React, { useState, Suspense} from 'react'
import { Helmet } from 'react-helmet';

import lecturersData from '../../data.json';
import faqs from '../../faqs.json';
import reviews from '../../review.json';
import price from '../../pricecard.json';
import "react-multi-carousel/lib/styles.css";
import headerData from '../../header.json';

const Carousel = React.lazy(() => import("react-multi-carousel"));
const Card = React.lazy(() => import('../../components/CardCrousel/Card'));
const Social = React.lazy(() => import('../../components/Social/Social'));
const PlaceOrder = React.lazy(() => import('../../components/PlaceOrder/PlaceOrder'));
const FAQsSection = React.lazy(() => import('./FAQsSection'));
const Review = React.lazy(() => import('../../components/Reviews/Review'));
const Price = React.lazy(() => import('../../components/Price/Price'));
const Header = React.lazy(() => import('../../components/Header/Header'));


const ResumeWriting = () => {
   

    const ResumeWritingFaqs = faqs.resume_writing;
    const ResumeWritingReview = reviews.resume_writing;
    const ResumeWritingPrice = price.resume_writing_price;
    const ResumeWritingData = headerData.resume_writing[0]; 

   

    // Crousel responsivenes 
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1350 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1350, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 620 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1
        }
    };

 

    return (
        <>
            <Helmet>
                
               <title>Resume Writing Service | Professional UK Assistance</title>
               <meta name="description" content="Elevate your career with our Resume Writing Service in UK. My Perfect Writing delivers custom, high-impact resume solutions for all levels." />

               <meta name="keywords" content="Resume Writing Service UK, UK Professional CV Assistance, Custom Resume Creation UK, Expert Resume Support UK"></meta>

               <link rel="canonical" href="https://www.myperfectwriting.co.uk/resume-writing-service" />

                {/* Facebook meta description */}

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="My Perfect Writing UK" />
                <meta property="og:description" content="We offer top-quality essay writing services to help you with academic writing needs." />
                <meta property="og:url" content="https://www.facebook.com/MyPerfectWritingUK" />
                <meta property="og:image" content="https://www.facebook.com/photo/?fbid=304777308888913&set=a.163706819662630" />

                {/* TikTok Meta Description */}
                <meta property="og:type" content="profile" />
                <meta property="og:title" content="myperfectwriting.co.uk" />
                <meta property="og:description" content="Essay writing services to help you with any academic writing needs." />
                <meta property="og:url" content="https://www.tiktok.com/@myperfectwriting.co.uk" />
                <meta property="og:image" content="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/036924512fd5ce2234dd790f90fae7d1.jpeg?lk3s=a5d48078&x-expires=1703412000&x-signature=Q3tNIYMUWroaSe5tgOtswVVVTvw%3D" />

                {/* Instagram MetaDescription */}

                <meta property="og:type" content="profile" />
                <meta property="og:title" content="MyPerfectWriting" />
                <meta property="og:description" content="Writing Service - Do not trust us; TEST us. MyPerfectWriting is the only essay writing service with a fixed rate for every deadline and educational level." />
                <meta property="og:url" content="https://www.instagram.com/myperfectwriting/" />
                <meta property="og:image" content="https://scontent.cdninstagram.com/v/t51.2885-19/375491376_6848625268501075_5955990304385974527_n.jpg?stp=dst-jpg_s120x120&_nc_cat=101&ccb=1-7&_nc_sid=c4dd86&_nc_ohc=6fKNsbS7p7AAX_8-bxn&_nc_ht=scontent.cdninstagram.com&oh=00_AfBJyWa2LNO7fMiQI9c48pyXgUacyz93p88Fsm1zGVq4jA&oe=658ADFB1" />

                <script type="application/ld+json">
                    {`
 {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Resume Writing Service in UK",
    "url": "https://myperfectwriting.co.uk/resume-writing-service",
    "logo": "https://myperfectwriting.co.uk/static/media/logo.c7b997f3c932270a4106.png",
    "sameAs": [
      "https://www.facebook.com/MyPerfectWritingUK",
      "https://www.instagram.com/myperfectwriting",
      "https://www.tiktok.com/@myperfectwriting.co.uk"
    ],
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+447488818219",
        "contactType": "customer service",
        "areaServed": "United Kingdom",
        "availableLanguage": "English"
      },
      {
        "@type": "ContactPoint",
        "email": "support@myperfectwriting.co.uk",
        "contactType": "customer support"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "124 City Road",
      "addressLocality": "London",
      "postalCode": "EC1V 2NX",
      "addressCountry": "United Kingdom"
    },
    "keywords": "Resume Writing Service UK, UK Professional CV Assistance, Custom Resume Creation UK, Expert Resume Support UK"
  }
  
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Resume Writing Service in UK",
    "description": "Pricing per page for our services.",
    "keywords": "Resume Writing Service UK, UK Professional CV Assistance, Custom Resume Creation UK, Expert Resume Support UK",
    "brand": {
      "@type": "Organization",
      "name": "Resume Writing Service in UK"
    },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": "6.99",
      "description": "Pricing per page for our services."
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "800"
    }
  }
  
  
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "What makes your resume writing service the best in the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "As UK Resume Professionals, we offer a blend of quality, expertise, and tailored services, ensuring top-tier resume composition."
      }
    },{
      "@type": "Question",
      "name": "How do you ensure the originality of the resumes?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our resumes are crafted from scratch, guaranteeing original, plagiarism-free content suited to your individual professional journey."
      }
    },{
      "@type": "Question",
      "name": "Can I get a resume tailored for the UK job market?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our service specializes in customizing resumes for the UK job market, with expert insights and localized nuances."
      }
    },{
      "@type": "Question",
      "name": "Do you offer executive resume writing services?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our Executive Resume Services are designed to cater to high-profile professionals, offering bespoke content and structure."
      }
    }]
  }`}
                </script>
            </Helmet>



        <Suspense fallback={<div>Loading...</div>}>

             {/* Header section */}
             <Header header={ResumeWritingData} />

            {/* writers section */}
            <div className="myteam">
                <div className="topSection">
                    <h2>Meet Our Esteemed Resume Writers</h2>
                    <p> Our team of CV Writing Experts, boasting prestigious UK university backgrounds and vast experience, crafts your resume with precision and insight.</p>
                </div>
                <div className="CrouselSection">
                    <div className="crousel">
                        <Carousel autoPlay={true} showDots={true} responsive={responsive} >
                            {lecturersData.resumeWriting.map((lecturer, index) => (
                                <Card key={index} lecturer={lecturer} />
                            ))}
                        </Carousel>
                    </div>
                </div>
            </div>


            {/* cards pricing section  */}
            <div className="price " id="pricing-section">
                <div className="pricTop">
                    <h2>Why Choose Our Resume Writing Service?</h2>
                    <p> Experience unparalleled expertise and dedication with our Professional Resume Builders – your gateway to career success.</p>
                </div>

                <Price details={ResumeWritingPrice} />
            </div>


            {/* Faqs sectin  */}
            <div className="faqs">
                <div className="faqTop">
                    <h2>Resume Writing Service FAQs</h2>
                    <p> Discover the expertise and precision behind our Professional Resume Services – your partner in career success.</p>
                    <FAQsSection faqs={ResumeWritingFaqs} /> 
                </div>


            </div>

            {/* social section  */}
            <Social />


            {/* review section  */}
            <div className="review">
                <div className="reviewTop">
                    <h2>Client Reviews - Showcasing Our Resume Writing Excellence</h2>
                    <p> Our clients' success stories reflect our commitment to quality, expertise in CV writing, and unmatched professional guidance.</p>
                </div>
                <Review reviews={ ResumeWritingReview} /> 
               

               
            </div>

            {/* place order section  */}
            <PlaceOrder />
        </Suspense>

            {/* Discussion section  */}
            <div className='writing'>
                <div className="paperBtn pulse-button">
                    <a href="https://myperfectwriting.co.uk/portal/public/login">

                    <button>Get your Custom Paper Now</button>
                    </a>
                </div>
                <div className="wTop">
                    <h2>My Perfect Writing- Top Essay Writing Service in UK</h2>
                    <p>Join the big family of our writing service on Instagram to get lots of handy tips and tricks and be the first to learn about our discounts!</p>
                </div>

                <div className="wPdf">
                    <div className="leftText">
                    <div className="textData">
                    <div className="textR">
                        <h3><strong>Introduction to Our Premier Resume Writing Service in the UK</strong></h3>

                        <p>
                            At My Perfect Writing, we specialize in crafting exceptional resumes that stand out in the competitive UK job market. Our team of Academic CV Consultants and Professional Bio Writers are dedicated to providing personalized, entry-level to executive resume writing services across the UK. With a focus on quality and professionalism, we ensure each resume is not just a document, but a stepping stone to your career success.
                        </p>

                        <p>
                            Understanding the importance of a well-constructed resume, our services are tailored to meet the diverse needs of our clients, from recent graduates to seasoned professionals. We pride ourselves on delivering Comprehensive CV Writing Packages that encompass a range of needs - be it a concise, impactful CV for a new graduate or a detailed, professional bio for a corporate executive.
                        </p>

                        <p>
                            As one of the best resume services in the industry, we maintain a high standard of originality and quality. Our resumes are meticulously crafted, ensuring they are plagiarism-free and showcase your unique career journey. Whether you need help with resume writing or seeking a resume and cover letter service, our team is equipped to provide top-notch assistance.
                        </p>

                        <p>
                            What sets us apart is not just our expertise in the field but also our commitment to customer satisfaction. We are not just resume writers; we are career enablers. We believe in creating resumes that reflect your professional identity and align with your career aspirations. With our service, you're not just getting a resume; you're investing in a future where your potential is accurately represented and recognized.
                        </p>

                        <h3><strong>Understanding the Importance of a Professional Resume in Your Career Journey</strong></h3>

                        <p>
                            In today’s dynamic job market, a professional resume is not just a document; it's a crucial tool in your career arsenal. As experts in Industry-Specific Resume Services and CV Formatting Services, we at My Perfect Writing understand that a well-crafted resume is the first step towards your dream job. It's more than a summary of your experiences; it's a strategic presentation of your skills and achievements, tailored to the opportunities you aspire to secure.
                        </p>

                        <p>
                            With our Advanced Career Resume Services in Birmingham and Specialized Resume Services for UK Educators, we ensure that your CV stands out. The job market in the UK, especially in competitive fields, requires resumes that not only detail your qualifications but also showcase your unique value proposition. A professionally written resume does exactly that - it communicates your potential to employers in a concise and compelling manner.
                        </p>

                        <p>
                            Utilising the latest AI for Resume Writing and Federal Resume Writing Services, we keep abreast with industry trends, ensuring your resume is not only current but ahead of the curve. Whether you're seeking a resume update service or need a complete overhaul, our team of resume experts is equipped to build your perfect resume, reflecting your career goals and aspirations.
                        </p>

                        <p>
                            Remember, a resume is often the first impression you make on a potential employer. It needs to be impeccable, impactful, and reflective of your professional journey. In an era where AI CV Writers and Affordable Resume Writing Services are readily available, choosing a service that understands the nuances of your industry and personal career trajectory is paramount. That's where we excel, offering best resume examples and personalised guidance to help you navigate your career path successfully.
                        </p>
                        <h3><strong>Our Expertise in Crafting Winning Resumes</strong></h3>


                        <p>
                            At My Perfect Writing, our Resume Writing Service in the UK is anchored by a deep understanding of the modern job market. Our expertise in Interview Preparation Help and Career Counseling Services ensures we provide more than just resume writing; we offer a comprehensive career support package. From UK academic CV writing for postgraduates to bespoke resume creation for UK executives, our services are tailored to meet the unique needs of each client.
                        </p>

                        <p>
                            Leveraging the latest technologies, including Resume Writer AI, we blend innovation with tradition to create resumes that are both forward-looking and grounded in proven strategies. Our team, proficient in executive resume services and CV writer free tools, are equipped to handle diverse career requirements, ensuring every resume we craft is a testament to our client's professional narrative.
                        </p>

                        <p>
                            We understand the nuances involved in professional resume help, especially when it comes to specialized fields. Whether it's resume writers online or resume preparation services, our approach is always personalized, focusing on the individual's career goals, skills, and achievements. Our commitment to excellence is evident in every resume we produce, helping our clients make a powerful first impression.
                        </p>

                        <p>
                            Our service is not just about crafting documents; it's about opening doors to new opportunities. We take pride in being part of our clients' success stories, offering tailored solutions that go beyond the standard resume writing. With our expertise, we ensure that every client's resume is not only a reflection of their career journey but also a key to unlocking their future aspirations.
                        </p>

                       
                        <h3><strong>What We Offer: Comprehensive Resume Writing Services Tailored to Your Needs</strong></h3>

                        <p>
                            Our Resume Writing Service in the UK is designed to cater to a diverse range of career aspirations. We specialize in offering Resume Writing Tips and using Online CV Builders to create bespoke resumes that reflect your professional narrative. Whether you're looking for UK resume and cover letter package deals or targeted resume services for UK healthcare professionals, our team is adept at meeting your specific requirements.
                        </p>

                        <p>
                            Recognizing the importance of LinkedIn in today's job market, our LinkedIn resume writers are skilled at crafting profiles that enhance your digital presence. From Topstack resume services to the best resume builders, we utilize a variety of tools and techniques to ensure your resume stands out. We provide help making a resume that is not only appealing but also accurately reflects your qualifications and career goals.
                        </p>

                        <p>
                            For those in executive roles, our certified professional resume writers offer the best resume writing service for executives, ensuring your leadership skills and achievements are showcased effectively. If you're on a budget, our cheap resume writing services and AI resume writer free tools offer a cost-effective solution without compromising on quality.
                        </p>

                        <p>
                            With our resume writing services online, we make it convenient for you to access our services from anywhere in the UK. Our commitment is to deliver resumes that are not just documents, but powerful tools that open doors to new career opportunities, aligning with your aspirations and the demands of the modern job market.
                        </p>

                       
                        <h3><strong>The Process: Crafting Your Tailored Resume with Precision and Expertise</strong></h3>

                        <p>
                            At My Perfect Writing, our process of crafting your perfect resume involves a detailed and personalized approach. As CV Writing Experts and Professional Resume Builders, we start by understanding your unique career objectives and experiences. This initial consultation is key in providing Custom CV Advice for UK International Students and Professional Resume Optimization for UK Job Seekers.
                        </p>

                        <p>
                            Our team, known for being among the top rated resume writing services, begins by gathering essential information about your education, work history, skills, and achievements. We then use this information to create a resume that not only details your qualifications but also showcases your strengths in a way that resonates with UK employers.
                        </p>

                        <p>
                            Utilising tools like professional resume builder services and paid resume services, we ensure that each resume is not just a list of experiences, but a strategic document. Whether you need help building a resume or seeking executive CV writing services, our process remains thorough and tailored to meet your specific needs.
                        </p>

                        <p>
                            Our writers, some of the best professional resume writers in the field, apply their expertise to craft a resume that stands out. They ensure your resume is ATS-friendly, includes relevant keywords, and aligns with current industry trends. The final product is a polished, professional resume that enhances your chances of landing your dream job.
                        </p>
                    </div>
                    <div className="textL">
                         <h3><strong>Quality and Precision: Upholding the Highest Standards in Resume Writing</strong></h3>

                        <p>
                            At My Perfect Writing, our commitment to excellence in every aspect of our Resume Writing Service in the UK is unwavering. We understand that the quality of your resume can significantly impact your career prospects. That's why we have a dedicated team, from resume builders near you to experienced resume rewrite services, all focused on delivering resumes that are not just good, but exemplary.
                        </p>

                        <p>
                            Our approach is meticulous and detailed. When you entrust us with building a professional resume or seek help with your resume, we ensure that every aspect, from format to content, is crafted with precision. Whether it's a straightforward resume rewrite or creating a resume from scratch, our experts use their deep understanding of various industries to tailor your CV perfectly.
                        </p>

                        <p>
                            For those seeking specialized services, such as government resume writers or the best resume and LinkedIn profile writing services, we offer customized solutions. Our freelance resume writers are adept at navigating the specific requirements of diverse sectors, ensuring your resume aligns with industry expectations.
                        </p>

                        <p>
                            The quality of our work is not just in the writing but also in the overall experience we provide. We believe in a collaborative process where your input and feedback are integral to crafting a resume that truly represents you. This customer-centric approach, combined with our expertise, sets us apart as the best CV writing service, committed to helping you reach your career goals.
                        </p>

                        
                        <h3><strong>Quality and Precision: Upholding the Highest Standards in Resume Writing</strong></h3>

                        <p>
                            Our Resume Writing Service in the UK is rooted in a commitment to excellence. We understand that a resume is more than a list of jobs and education; it's a personal marketing tool that must reflect the highest quality and precision. Our expert team, including skilled freelance resume writers and government resume writers, is dedicated to crafting documents that not only meet but exceed your expectations.
                        </p>

                        <p>
                            We believe in a tailored approach, recognising that every individual's career journey is unique. From offering resume assistance near you to providing the best resume and LinkedIn profile writing services, we ensure each resume is a bespoke creation. We utilise the best resume builder online tools and engage in thorough resume preparation online to guarantee a product that showcases your strengths and achievements in the most effective light.
                        </p>

                        <p>
                            For those looking for more specific services, such as IT resume writing services or help building a resume in niche fields, we have the expertise to deliver. Our professional CV service is not about one-size-fits-all; it's about creating a narrative that aligns with your career goals. Whether it's a resume rewrite service or building a CV online from scratch, our focus remains on quality and precision.
                        </p>

                        <p>
                            At My Perfect Writing, we are not just writing resumes; we are shaping careers. We offer affordable resume writing services near you, ensuring accessibility without compromising on quality. Our process is collaborative, involving you at every step to ensure that the final product is a true representation of your professional persona.
                        </p>

                       
                        <h3><strong>Conclusion: Empowering Your Path to Career Success</strong></h3>


                        <p>
                            As we draw our discussion to a close, it's clear that My Perfect Writing is more than just a service – it's a partner in your career journey. Our Resume Writing Service in the UK is dedicated to empowering your career aspirations, providing you with the tools, advice, and support necessary to navigate the competitive job market successfully.
                        </p>

                        <p>
                            From crafting bespoke resumes and cover letters to offering insightful career guidance, we are committed to ensuring each client's professional story is told in the most impactful way. Our approach is not only about creating documents; it's about understanding and highlighting your unique skills, experiences, and aspirations.
                        </p>

                        <p>
                            We take pride in our ability to adapt our services to the ever-evolving demands of the job market, ensuring our clients receive up-to-date and relevant support. Whether you are a recent graduate or an experienced professional, our goal is to help you open doors to new opportunities and achieve your career goals.
                        </p>

                        <p>
                            My Perfect Writing stands as a testament to the belief that with the right support, guidance, and resources, every individual can attain their career aspirations. We look forward to being a part of your success story, helping you to not only reach but exceed your professional objectives.
                        </p>
                    </div>
                    </div>
                        

                        
                       

                    </div>
                </div>

                <div className="notice">
                    <div className="noticeContent">
                        <h2>Notice Regarding Al-Generated Content</h2>
                        <p>We want to be transparent with our readers: certain portions of our content are generated using advanced artificial intelligence. However, please rest assured that all Al-generated content is thoroughly reviewed and refined by our experienced and professional proofreaders and editors to ensure accuracy, relevance, and quality.</p>
                        <p>Our commitment to providing high-quality and trustworthy content remains our top priority. If you have any questions or need further clarification, please learn more here or contact our support team.</p>
                    </div>
                </div>
                <div className="disclimar">
                    {/* <div className="h3">
                    <h3>Disclaimer:</h3>
                </div> */}
                    <p> <span className="h3">Disclaimer:  </span>Our expert's notes are NOT intended to be forwarded as finalized projects, as it is only strictly meant to be used for research and study purposes.
                        We do not endorse or condone any type of plagiarism.</p>

                </div>
            </div >
        </>
    )
}

export default ResumeWriting;