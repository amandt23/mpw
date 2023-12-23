import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../../pdf/reviews/Movie Review.pdf'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// Your render function
<Viewer fileUrl="/path/to/document.pdf" />;

const MovieReview = () => {
    return (
        <div className="sidbarContents">
            <div className="Sidecard">
                <div className="HeadContents date">
                    <p><strong>Date:</strong> </p>
                    <p>April 18, 2023</p>
                </div>
                <span><strong>Movie Review</strong></span>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <p><strong>Subject:</strong></p>
                            <p>Documentary Film and Fast Food Industry</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Academic Level:</strong></p>
                            <p>General Interest/University</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Word Count:</strong></p>
                            <p>1,500</p>
                        </div>

                    </div>

                    <div className="HeadContents desc">
                        <p><strong>Short Description:</strong> </p>
                        <p>An analytical review of Morgan Spurlock's sequel, exploring the fast-food industry's claims of healthful and organic offerings.</p>
                    </div>

                    <div className="cardFooter">
                        <div className="HeadContents">
                            <p><strong>Rating:</strong> </p>
                            <p style={{ marginTop: "-3px" }}>
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />

                            </p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Author:</strong></p>
                            <p>Liam Patterson</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Citation:</strong> </p>
                            <p>N/A</p>
                        </div>
                        <div className="HeadContents ">
                            <p><strong>Type:</strong> </p>
                            <p>Movie Review</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <p><strong>Tags:</strong></p>
                    <div className="btns">
                        <button>#SuperSizeMe2 </button>
                        <button>#FilmCritique </button>
                        <button>#HealthClaims</button>
                        <button>#OrganicFood</button>
                    </div>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div className="pdf-container">
                {/* <embed className="pdf" src={pdf} type="application/pdf" /> */}
                <Worker className="pdf" workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
                    <div
                        style={{
                            height: '700px',
                        }}
                    >
                        <Viewer fileUrl={pdf} />
                    </div>
                </Worker>
            </div>
        </div>
    )
}

export default MovieReview