// ReviewCard.jsx
import React from 'react';

    const ReviewCard = ({review}) => {
    return (
        <>

                        <div className="reviewCard" >
                            <div className="sec1">
                                <div className="sec1Top">
                                    <p className='secBlk'>Service Type:</p>
                                    <p>{review.ServiceType}</p>
                                </div>
                                <div className="sec1Mid">
                                    <p className='secBlk'>Word Count:</p>
                                    <p>{review.WordCount}</p>
                                </div>
                                <div className="sec1Bottom">
                                    <div className="BottLeft">
                                        <p className='secBlk'>Citation:</p>
                                        <p>{review.Citation}</p>
                                    </div>
                                    <div className="BottRight">
                                        <p className='secBlk'>Price:</p>
                                        <p>£{((review.WordCount / 300) * 6.99).toFixed(2)}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="sect2">
                                <img src={`./images/reviews/${review.image}`} alt="review-image" />
                                <p className='sect2Id'>{review.CustomerID}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20" viewBox="0 0 58 10" fill="none">
                                    <path d="M2.45668 9.89245L3.26518 6.579L0.576904 4.35133L4.11803 4.05821L5.50487 0.933105L6.89172 4.05759L10.4322 4.3507L7.74456 6.57838L8.55306 9.89183L5.50487 8.13314L2.45668 9.89245Z" fill="#00A22D" />
                                    <path d="M14.1038 9.89245L14.9123 6.579L12.2241 4.35133L15.7652 4.05821L17.152 0.933105L18.5389 4.05759L22.0793 4.3507L19.3917 6.57838L20.2002 9.89183L17.152 8.13314L14.1038 9.89245Z" fill="#00A22D" />
                                    <path d="M25.751 9.89245L26.5595 6.579L23.8712 4.35133L27.4123 4.05821L28.7992 0.933105L30.186 4.05759L33.7265 4.3507L31.0388 6.57838L31.8473 9.89183L28.7992 8.13314L25.751 9.89245Z" fill="#00A22D" />
                                    <path d="M38.3996 8.5566L38.8442 6.73459L38.9415 6.33565L38.6254 6.07364L37.1761 4.87268L39.1136 4.7123L39.5015 4.68019L39.6593 4.32444L40.4463 2.55102L41.2332 4.32386L41.3911 4.67957L41.779 4.71168L43.7161 4.87205L42.2671 6.07307L41.951 6.33508L42.0483 6.73396L42.493 8.55629L40.7743 7.56465L40.4462 7.37537L40.1182 7.5647L38.3996 8.5566Z" fill="black" fill-opacity="0.01" stroke="black" stroke-width="1.31265" />
                                    <path d="M50.0465 8.5566L50.4911 6.73459L50.5884 6.33565L50.2723 6.07364L48.823 4.87268L50.7605 4.7123L51.1483 4.68019L51.3062 4.32444L52.0932 2.55102L52.8801 4.32386L53.038 4.67957L53.4259 4.71168L55.363 4.87205L53.914 6.07307L53.5979 6.33508L53.6952 6.73396L54.1399 8.55629L52.4212 7.56465L52.0931 7.37537L51.7651 7.5647L50.0465 8.5566Z" fill="black" fill-opacity="0.01" stroke="black" stroke-width="1.31265" />
                                </svg>
                                <p>{review.NameofUniversity}</p>
                            </div>

                            <div className="sect3">
                                <div className="sect3Top">
                                    <div className="input">
                                        <p className='sect4Head'>Subject: {review.Subject} </p>
                                        {/* <hr /> */}
                                        <p>{review.Review}</p>
                                    </div>
                                </div>
                                <div className="sect3Tags">
                                    <p>Tags</p>
                                    {review.Tags && review.Tags.length > 0 ? (
                                       review.Tags.map((tag, tagIndex) => (
                                            <button key={tagIndex}>{tag}</button>
                                        ))
                                    ) : null}


                                </div>
                            </div>

                            <div className="sect4">
                                <div className="sect4Top">
                                    <div className="input">
                                        <p className='sect4Head'><strong>Responce from MyPerfectWriting</strong></p>
                                        {/* <hr /> */}
                                        <p>{review.ResponsefromMyPerfectWriting}</p>
                                    </div>
                                </div>
                                <div className="sect4Bott">
                                    <p>{review.Date}</p>
                                </div>
                            </div>
                        </div>

                
            </>
    )
}

export default ReviewCard;
