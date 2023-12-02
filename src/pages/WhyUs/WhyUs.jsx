import React, { useState } from 'react'
import './whyus.css'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";

const WhyUs = () => {

    const faqData = [
        { question: 'Is it possible to get last-minute assignment help?', answer: 'Absolutely! My Perfect Writing understands the pressures of academic life, offering urgent academic writing help for those tight deadlines. Our team is ready to provide quick and efficient assignment support, ensuring timely submissions without compromising on quality.' },
        { question: 'Can I Pick the Best of Your Wordsmiths for My Paper?', answer: 'Absolutely, young chap! At My Perfect Writing, we believe in empowering our clients. You can most certainly select the best writer from our dazzling array of literary maestros. Each of our writers is a virtuoso in their own right, ready to craft your paper with precision, creativity, and an unwavering commitment to excellence.' },
        { question: 'Is it Truly Possible to Get a Ph.D. Masterpiece at the Same Rate of £6.99/Page as a High School Essay?', answer: 'Indubitably! We operate on a fixed pricing system of only £6.99 per page, regardless of the academic level. Whether it’s a high school essay or a Ph.D. dissertation, our prices remain as steady as a British Bulldog. No wobbles, no waffles. Just straightforward, transparent pricing for top-notch academic writing!' },
        { question: 'If My Deadline is Looming in Two Hours, Will I Still Pay the Same Rate?', answer: 'Fear not, for our rates are as fixed as the North Star! Even if your paper is due in a mere two hours, our rate remains a steadfast £6.99 per page. With My Perfect Writing, you’re guaranteed lightning-fast delivery without any compromise on quality or a hike in price. Now, isn’t that just the bee’s knees?' },
       
    ];


    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="whyUsContainer">
            <div className="why-us">
                <div className="whyUsRight">
                    <div className="whyUsTop">
                        <h3>Why Us?</h3>
                        <h2>Dare to Dream with My Perfect Writing: Your Gateway to Academic Brilliance!</h2>
                        <p>In a sea of choices, why should My Perfect Writing be your beacon of hope? It’s simple, really.</p>
                        <p>nwavering Dedication to Quality: We’re not just in the business of writing; we’re crafting academic masterpieces! Expect nothing less than excellence.</p>
                        <p>Affordability Meets Excellence: Quality essay assistance shouldn’t cost you a fortune. With us, you get top-notch services that won’t break the bank.</p>
                        <p>British Eloquence at Its Best: Our UK-based team of writers and editors adds a touch of British charm to every essay, ensuring it resonates with your academic standards.</p>
                        <p>Plagiarism? Not in Our Dictionary!: Originality is our middle name. Every piece we create is a fresh breath of ideas, ensuring you stand out in your academic journey.</p>
                        <p>Timely Delivery, Every Time: Racing against the clock? Fear not! We’re as punctual as Big Ben, delivering your essays right when you need them.</p>
                        <p>24/7 Support: Your Academic Companions: Any time, any day, we’re here for you. Our customer support is like a cup of tea – perfect for every situation!</p>
                        <p>Choose My Perfect Writing, and let’s turn your academic dreams into reality, with a touch of British flair!</p>
                        <h2>Extra Sprinkles of Assurance with My Perfect Writing!</h2>
                        <p>At My Perfect Writing, we believe in serving you a full platter of assurances, sprinkled with extra love and care. Here’s what sets us apart:</p>
                        <p>Chat Directly with Your Maestro: Have a natter with your writer anytime, ensuring everything’s just the way you like it.</p>
                        <p>Tailored to Your Style: Our essays are like bespoke suits; they fit you perfectly, reflecting your unique voice and style.</p>
                        <p>Uncompromised Quality: We’re sticklers for quality, and we won’t rest until your essay is nothing short of splendid.</p>
                        <p>Transparent Pricing: No hidden costs or cheeky add-ons here. What you see is what you pay, plain and simple.</p>
                        <p>Free Revisions and Edits: Need a tweak or two? Just say the word, and we’ll get right on it. After all, your wish is our command!</p>
                        <p>Complimentary Bibliography: Citations and references, all sorted and served on a silver platter, absolutely free.</p>
                        <p>Dependable Deadlines: Pay half to start the magic, and the rest when you’re chuffed to bits with our work. Fair and square!</p>
                        <p>Subject Matter Sages at Your Service: Our team, boasting of PhDs and Masters, are the crème de la crème, ready to elevate your essays.</p>
                        <p>Authenticity is Our Anthem: Expect nothing but genuine and varied expertise from our band of writing virtuosos.</p>
                        <p>Native English Maestros: Our writers are as British as a cuppa, ensuring your essay is packed with local charm and wit.</p>
                        <p>Choose My Perfect Writing, and revel in the assurance of academic grandeur!</p>
                        <h2>Start Your Odyssey of Unparalleled Academic Brilliance!</h2>
                        <p>(Add Icon) Dive into the World of My Perfect Writing: Ready to turn the page to stellar grades and academic prowess? Click that enchanting ‘Order Your Essay’ button and let the magic begin!
                            (Add Icon) Choose Quality, Choose Success: Fancy a paper that’s more polished than the Crown Jewels? Say ‘no’ to the humdrum and ‘yes’ to unrivalled quality with My Perfect Writing.
                            (Add Icon) Decisions, Decisions…: Contemplating whether a PhD-level masterpiece can really be the same price as a high school essay? Spoiler alert: it can’t. But we’ve got the crème de la crème of writers ready for you, at a price that won’t break the bank.
                        </p>
                    </div>
                    <h4>Other assurances offered by Myperfectwriting.com include:</h4>
                    {/* <div className="whyUsSection2">
                        <div className="section2Single">
                            <div className="section2One">
                                <CiCircleCheck />
                                <p>Direct contact with your writer</p>
                            </div>
                            <div className="section2One">
                                <CiCircleCheck />
                                <p>Direct contact with your writer</p>
                            </div>
                            <div className="section2One">
                                <CiCircleCheck />
                                <p>Direct contact with your writer</p>
                            </div>
                            <div className="section2One">
                                <CiCircleCheck />
                                <p>Direct contact with your writer</p>
                            </div>
                        </div>
                        <div className="section2Single">
                            <div className="section2One">
                                <CiCircleCheck />
                                <p>Direct contact with your writer</p>
                            </div>
                            <div className="section2One">
                                <CiCircleCheck />
                                <p>Direct contact with your writer</p>
                            </div>
                            <div className="section2One">
                                <CiCircleCheck />
                                <p>Direct contact with your writer</p>
                            </div>
                            <div className="section2One">
                                <CiCircleCheck />
                                <p>Direct contact with your writer</p>
                            </div>
                        </div>

                    </div> */}
                    <div className="whyUsFAQS">
                        <div className="WhyUsfaqs">
                            <div className="whyUsfaqTop">
                                <h3>Ok. decision-making time.</h3>
                            </div>

                            <div className="whyUSfaqBottom">
                                <div className="whyUsfaqLeft">


                                    <div className="WhyUsfaq-container">
                                        {faqData.map((item, index) => (
                                            <div key={index} className="whyUsfaq-item">
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
                                                        {item.question}
                                                    </div>

                                                    {/* <div className="arrowDwon"> */}
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21" fill="none">
                                                        <path d="M2.04503 7.25954C2.27944 7.0252 2.59732 6.89355 2.92878 6.89355C3.26023 6.89355 3.57812 7.0252 3.81253 7.25954L10 13.447L16.1875 7.25954C16.4233 7.03184 16.739 6.90585 17.0668 6.90869C17.3945 6.91154 17.708 7.043 17.9398 7.27476C18.1716 7.50652 18.303 7.82004 18.3059 8.14779C18.3087 8.47553 18.1827 8.79128 17.955 9.02704L10.8838 16.0983C10.6494 16.3326 10.3315 16.4643 10 16.4643C9.66857 16.4643 9.35069 16.3326 9.11628 16.0983L2.04503 9.02704C1.81069 8.79263 1.67905 8.47474 1.67905 8.14329C1.67905 7.81183 1.81069 7.49395 2.04503 7.25954Z" fill="black" />
                                                    </svg>
                                                    {/* </div> */}
                                                </div>
                                                {openIndex === index && (
                                                    <div className="faq-answer">
                                                        {item.answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>


                            </div>

                        </div>


                    </div>
                </div>
                <div className="whyUsLeftImages">
                    <img src="./images/aboutUs1.jpg" alt="" />
                    <img src="./images/aboutUs2.jpg" alt="" />
                </div>

            </div>
        </div>

    )
}

export default WhyUs