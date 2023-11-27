import React from 'react'
import './review.css'

const Review = () => {
    

    const Reviews =
        [

            {
                "ServiceType": "Essay Writing",
                "WordCount": 1500,
                "Citation": "APA",
                "OrderPrice": "£104.85",
                "CustomerID": "MPW-101232",
                "OrderRating": "5/5",
                "NameofUniversity": "University of Cambridge",
                "Subject": "Literature",
                "Review": "The essay was meticulously written with strong arguments and thorough research. I am genuinely impressed with the quality and punctuality of the service. Highly recommended!",
                "Tags": ["Essay", "Quality", "Research", "Punctuality"],
                "ResponsefromMyPerfectWriting": "We are delighted to hear about your positive experience! Our team always strives to deliver the best, and your recommendation means a lot to us. Thank you!",
                "Date": "2023-10-01"
            },
            {
                "ServiceType": "Dissertation Assistance",
                "WordCount": 12000,
                "Citation": "Harvard",
                "OrderPrice": "£251.88",
                "CustomerID": "MPW-203344",
                "OrderRating": "5/5",
                "NameofUniversity": "Imperial College London",
                "Subject": "Biochemistry",
                "Review": "Outstanding support throughout my dissertation process. The team was always available for revisions and advice. Truly grateful for the expert guidance!",
                "Tags": ["Dissertation", "Support", "Biochemistry", "ExpertGuidance"],
                "ResponsefromMyPerfectWriting": "Thank you for choosing us for your dissertation journey. Your success is our priority, and we're glad to have been of help. Best wishes!",
                "Date": "2023-09-15"
            },
            {
                "ServiceType": "Thesis Writing",
                "WordCount": 15000,
                "Citation": "MLA",
                "OrderPrice": "£314.85",
                "CustomerID": "MPW-324455",
                "OrderRating": "5/5",
                "NameofUniversity": "University of Edinburgh",
                "Subject": "Sociology",
                "Review": "The thesis was well-structured and covered all the required points in depth. The writer clearly understood the topic and delivered an excellent piece of work.",
                "Tags": ["Thesis", "Structure", "In-Depth", "Excellence"],
                "ResponsefromMyPerfectWriting": "It's wonderful to know that you are satisfied with our work. We always aim for excellence, and it's great to see it reflected in your thesis. Thank you!",
                "Date": "2023-08-20"
            },
            {
                "ServiceType": "Research Paper",
                "WordCount": 2000,
                "Citation": "Chicago",
                "OrderPrice": "£139.80",
                "CustomerID": "MPW-456789",
                "OrderRating": "5/5",
                "NameofUniversity": "University of Oxford",
                "Subject": "History",
                "Review": "The research paper exceeded my expectations. The writer delved deep into historical events with precision and clarity. I couldn't have asked for more.",
                "Tags": ["Research", "History", "Precision", "Clarity"],
                "ResponsefromMyPerfectWriting": "We're thrilled to know that our work met your expectations. Our writers take great pride in their research skills. Thank you for trusting us!",
                "Date": "2023-07-10"
            },
            {
                "ServiceType": "Proofreading",
                "WordCount": 3500,
                "Citation": "APA",
                "OrderPrice": "£244.65",
                "CustomerID": "MPW-567890",
                "OrderRating": "5/5",
                "NameofUniversity": "London School of Economics",
                "Subject": "Political Science",
                "Review": "The attention to detail in proofreading my thesis was exceptional. All errors were corrected, and the suggestions improved the overall flow of the paper.",
                "Tags": ["Proofreading", "AttentiontoDetail", "Exceptional"],
                "ResponsefromMyPerfectWriting": "It was our pleasure to assist you in perfecting your thesis. We always strive for precision and clarity in every project. Thank you for your kind words!",
                "Date": "2023-06-15"
            },
            {
                "ServiceType": "Editing",
                "WordCount": 5000,
                "Citation": "Harvard",
                "OrderPrice": "£349.50",
                "CustomerID": "MPW-678901",
                "OrderRating": "5/5",
                "NameofUniversity": "University of Manchester",
                "Subject": "Business Studies",
                "Review": "The editing service was top-notch. The document is now polished and conveys my ideas more clearly. I'm extremely satisfied with the results.",
                "Tags": ["Editing", "Polished", "Clarity", "Satisfaction"],
                "ResponsefromMyPerfectWriting": "We're glad to hear that you are satisfied with our editing services. Your ideas deserve to be presented in the best possible way. Thank you!",
                "Date": "2023-05-25"
            },
            {
                "ServiceType": "Term Paper",
                "WordCount": 4000,
                "Citation": "MLA",
                "OrderPrice": "£279.60",
                "CustomerID": "MPW-789012",
                "OrderRating": "5/5",
                "NameofUniversity": "King's College London",
                "Subject": "Psychology",
                "Review": "The term paper was crafted with expertise. The arguments were well-supported and the content was coherent. I'm impressed with the quality of work.",
                "Tags": ["TermPaper", "Expertise", "Well-Supported", "Quality"],
                "ResponsefromMyPerfectWriting": "We appreciate your feedback! Our team works hard to ensure that every paper is of the highest quality. Thank you for your trust!",
                "Date": "2023-04-30"
            },
            {
                "ServiceType": "Coursework Assistance",
                "WordCount": 6500,
                "Citation": "Chicago",
                "OrderPrice": "£454.35",
                "CustomerID": "MPW-890123",
                "OrderRating": "5/5",
                "NameofUniversity": "University of Bristol",
                "Subject": "Engineering",
                "Review": "Exceptional assistance with my coursework. The level of detail and accuracy provided was exactly what I needed. Truly a lifesaver!",
                "Tags": ["Coursework", "Assistance", "Detail", "Accuracy"],
                "ResponsefromMyPerfectWriting": "We're so pleased to have been able to assist you with your coursework. Our team is always ready to help, and we're glad we could provide the support you needed. Thank you!",
                "Date": "2023-04-10"
            }



        ];

    return (
        <div className="review">
            <div className="reviewTop">
                <h3>Client Testimonials</h3>
                <p>Explore the positive experiences of our valued clients and understand why My Perfect Writing is the preferred choice for academic excellence and professional support.</p>
            </div>

            <div className="privacy-cards">
                <div className="privacy-card">
                    <div className="pcardTop">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
                            <path d="M13.3978 35.0356C11.0335 34.2475 8.66915 35.2506 8.09598 37.2567C7.52281 39.1911 8.88409 41.4122 11.2484 42.2003C13.6128 42.9884 15.9771 41.9853 16.5503 39.9792C17.1234 37.9731 15.7621 35.7521 13.3978 35.0356ZM4.80024 41.4122C4.01213 42.057 3.94049 43.275 4.5853 44.2064C5.30177 45.1378 6.44811 45.3527 7.30787 44.7795C8.09598 44.1347 8.16763 42.9167 7.52281 41.9853C6.87799 41.0539 5.58835 40.839 4.80024 41.4122ZM44.4207 16.9807C44.4207 15.0463 43.4893 13.3267 42.128 12.2521V11.8222C42.128 8.81302 39.7637 6.3054 36.8262 6.3054H36.253C35.1067 4.37094 33.1006 3.00966 30.7363 3.00966C29.3033 3.00966 28.0137 3.43954 27.0106 4.22765C25.6494 3.00966 23.7866 2.1499 21.7805 2.1499C18.4847 2.1499 15.6905 4.37094 14.7591 7.45174C13.6844 6.66363 12.3231 6.23375 10.8902 6.23375C7.09293 6.23375 4.01213 9.38619 4.01213 13.2551C4.01213 14.4014 4.29872 15.4761 4.7286 16.4792C2.7225 17.9121 1.43286 20.2765 1.43286 22.999C1.43286 27.4411 4.94354 31.0234 9.24232 31.0234C10.8185 31.0234 12.3231 30.5219 13.5411 29.7338C14.1859 33.1012 17.1234 35.6804 20.6341 35.6804C23.2134 35.6804 25.5061 34.2475 26.7957 32.1698C27.6555 33.0295 28.8734 33.6027 30.2347 33.6027C32.7424 33.6027 34.8201 31.5966 35.035 29.089C35.6082 29.3039 36.253 29.4472 36.8979 29.4472C39.9786 29.4472 42.4863 26.8679 42.4863 23.7155C42.4863 23.0707 42.343 22.4258 42.1997 21.8527C43.4893 20.6347 44.4207 18.9152 44.4207 16.9807Z" fill="#00A12D" />
                        </svg>
                        <h3>Thoughts ?</h3>
                    </div>
                    <p>Would you be willing to disclose your real name and photo to post a review on essay writing or reviewing websites?</p>
                </div>
                <div className="privacy-card">
                    <div className="pcardTop">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
                            <path d="M13.3978 35.0356C11.0335 34.2475 8.66915 35.2506 8.09598 37.2567C7.52281 39.1911 8.88409 41.4122 11.2484 42.2003C13.6128 42.9884 15.9771 41.9853 16.5503 39.9792C17.1234 37.9731 15.7621 35.7521 13.3978 35.0356ZM4.80024 41.4122C4.01213 42.057 3.94049 43.275 4.5853 44.2064C5.30177 45.1378 6.44811 45.3527 7.30787 44.7795C8.09598 44.1347 8.16763 42.9167 7.52281 41.9853C6.87799 41.0539 5.58835 40.839 4.80024 41.4122ZM44.4207 16.9807C44.4207 15.0463 43.4893 13.3267 42.128 12.2521V11.8222C42.128 8.81302 39.7637 6.3054 36.8262 6.3054H36.253C35.1067 4.37094 33.1006 3.00966 30.7363 3.00966C29.3033 3.00966 28.0137 3.43954 27.0106 4.22765C25.6494 3.00966 23.7866 2.1499 21.7805 2.1499C18.4847 2.1499 15.6905 4.37094 14.7591 7.45174C13.6844 6.66363 12.3231 6.23375 10.8902 6.23375C7.09293 6.23375 4.01213 9.38619 4.01213 13.2551C4.01213 14.4014 4.29872 15.4761 4.7286 16.4792C2.7225 17.9121 1.43286 20.2765 1.43286 22.999C1.43286 27.4411 4.94354 31.0234 9.24232 31.0234C10.8185 31.0234 12.3231 30.5219 13.5411 29.7338C14.1859 33.1012 17.1234 35.6804 20.6341 35.6804C23.2134 35.6804 25.5061 34.2475 26.7957 32.1698C27.6555 33.0295 28.8734 33.6027 30.2347 33.6027C32.7424 33.6027 34.8201 31.5966 35.035 29.089C35.6082 29.3039 36.253 29.4472 36.8979 29.4472C39.9786 29.4472 42.4863 26.8679 42.4863 23.7155C42.4863 23.0707 42.343 22.4258 42.1997 21.8527C43.4893 20.6347 44.4207 18.9152 44.4207 16.9807Z" fill="#00A12D" />
                        </svg>
                        <h3>Reality ?</h3>
                    </div>
                    <p>Essay writing clients are naturally cautious about revealing their identity, which makes them reluctant to leave reviews. </p>
                </div>
                <div className="privacy-card">
                    <div className="pcardTop">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
                            <path d="M13.3978 35.0356C11.0335 34.2475 8.66915 35.2506 8.09598 37.2567C7.52281 39.1911 8.88409 41.4122 11.2484 42.2003C13.6128 42.9884 15.9771 41.9853 16.5503 39.9792C17.1234 37.9731 15.7621 35.7521 13.3978 35.0356ZM4.80024 41.4122C4.01213 42.057 3.94049 43.275 4.5853 44.2064C5.30177 45.1378 6.44811 45.3527 7.30787 44.7795C8.09598 44.1347 8.16763 42.9167 7.52281 41.9853C6.87799 41.0539 5.58835 40.839 4.80024 41.4122ZM44.4207 16.9807C44.4207 15.0463 43.4893 13.3267 42.128 12.2521V11.8222C42.128 8.81302 39.7637 6.3054 36.8262 6.3054H36.253C35.1067 4.37094 33.1006 3.00966 30.7363 3.00966C29.3033 3.00966 28.0137 3.43954 27.0106 4.22765C25.6494 3.00966 23.7866 2.1499 21.7805 2.1499C18.4847 2.1499 15.6905 4.37094 14.7591 7.45174C13.6844 6.66363 12.3231 6.23375 10.8902 6.23375C7.09293 6.23375 4.01213 9.38619 4.01213 13.2551C4.01213 14.4014 4.29872 15.4761 4.7286 16.4792C2.7225 17.9121 1.43286 20.2765 1.43286 22.999C1.43286 27.4411 4.94354 31.0234 9.24232 31.0234C10.8185 31.0234 12.3231 30.5219 13.5411 29.7338C14.1859 33.1012 17.1234 35.6804 20.6341 35.6804C23.2134 35.6804 25.5061 34.2475 26.7957 32.1698C27.6555 33.0295 28.8734 33.6027 30.2347 33.6027C32.7424 33.6027 34.8201 31.5966 35.035 29.089C35.6082 29.3039 36.253 29.4472 36.8979 29.4472C39.9786 29.4472 42.4863 26.8679 42.4863 23.7155C42.4863 23.0707 42.343 22.4258 42.1997 21.8527C43.4893 20.6347 44.4207 18.9152 44.4207 16.9807Z" fill="#00A12D" />
                        </svg>
                        <h3>Thoughts ?</h3>
                    </div>
                    <p>Would you be willing to disclose your real name and photo to post a review on essay writing or reviewing websites?</p>
                </div>
            </div>

            <div className="reviewSect">
                {/* <div className="reviewSectDivScroll"> */}

                    {Reviews.map((item, index) => (
                        <div className="reviewCard" key={index}>
                            <div className="sec1">
                                <div className="sec1Top">
                                    <h3>Service Type:</h3>
                                    <p>{item.ServiceType}</p>
                                </div>
                                <div className="sec1Mid">
                                    <h3>Word Count:</h3>
                                    <p>{item.WordCount}</p>
                                </div>
                                <div className="sec1Bottom">
                                    <div className="BottLeft">
                                        <h3>Citation:</h3>
                                        <p>{item.Citation}</p>
                                    </div>
                                    <div className="BottRight">
                                        <h3>Price:</h3>
                                        <p>{item.OrderPrice}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sect2">
                                <img src="./images/profileReview.jpeg" alt="" />
                                <h3>{item.CustomerID}</h3>
                                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="10" viewBox="0 0 58 10" fill="none">
                                    <path d="M2.45668 9.89245L3.26518 6.579L0.576904 4.35133L4.11803 4.05821L5.50487 0.933105L6.89172 4.05759L10.4322 4.3507L7.74456 6.57838L8.55306 9.89183L5.50487 8.13314L2.45668 9.89245Z" fill="#00A22D" />
                                    <path d="M14.1038 9.89245L14.9123 6.579L12.2241 4.35133L15.7652 4.05821L17.152 0.933105L18.5389 4.05759L22.0793 4.3507L19.3917 6.57838L20.2002 9.89183L17.152 8.13314L14.1038 9.89245Z" fill="#00A22D" />
                                    <path d="M25.751 9.89245L26.5595 6.579L23.8712 4.35133L27.4123 4.05821L28.7992 0.933105L30.186 4.05759L33.7265 4.3507L31.0388 6.57838L31.8473 9.89183L28.7992 8.13314L25.751 9.89245Z" fill="#00A22D" />
                                    <path d="M38.3996 8.5566L38.8442 6.73459L38.9415 6.33565L38.6254 6.07364L37.1761 4.87268L39.1136 4.7123L39.5015 4.68019L39.6593 4.32444L40.4463 2.55102L41.2332 4.32386L41.3911 4.67957L41.779 4.71168L43.7161 4.87205L42.2671 6.07307L41.951 6.33508L42.0483 6.73396L42.493 8.55629L40.7743 7.56465L40.4462 7.37537L40.1182 7.5647L38.3996 8.5566Z" fill="black" fill-opacity="0.01" stroke="black" stroke-width="1.31265" />
                                    <path d="M50.0465 8.5566L50.4911 6.73459L50.5884 6.33565L50.2723 6.07364L48.823 4.87268L50.7605 4.7123L51.1483 4.68019L51.3062 4.32444L52.0932 2.55102L52.8801 4.32386L53.038 4.67957L53.4259 4.71168L55.363 4.87205L53.914 6.07307L53.5979 6.33508L53.6952 6.73396L54.1399 8.55629L52.4212 7.56465L52.0931 7.37537L51.7651 7.5647L50.0465 8.5566Z" fill="black" fill-opacity="0.01" stroke="black" stroke-width="1.31265" />
                                </svg>
                                <p>{item.NameofUniversity}</p>
                            </div>

                            <div className="sect3">
                                <div className="sect3Top">
                                    <div className="input">
                                        <h3>Subject: {item.Subject} </h3>
                                        <hr />
                                        <p>{item.Review}</p>
                                    </div>
                                </div>
                                <div className="sect3Tags">
                                    <h3>Tags</h3>
                                    {item.Tags && item.Tags.length > 0 ? (
                                        item.Tags.map((tag, tagIndex) => (
                                            <button key={tagIndex}>{tag}</button>
                                        ))
                                    ) : null}


                                </div>
                            </div>

                            <div className="sect4">
                                <div className="sect4Top">
                                    <div className="input">
                                        <h3>Responce from MyPerfectWriting</h3>
                                        <hr />
                                        <p>{item.ResponsefromMyPerfectWriting}</p>
                                    </div>
                                </div>
                                <div className="sect4Bott">
                                    <p>{item.Date}</p>
                                </div>
                            </div>
                        </div>

                    ))}
                {/* </div> */}

            </div>
        </div>
    )
}

export default Review