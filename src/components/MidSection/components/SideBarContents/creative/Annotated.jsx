import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../../pdf/creative/Narrative Writing.pdf'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// Your render function
<Viewer fileUrl="/path/to/document.pdf" />;

const Annotated = () => {
  return (
    <div className="sidbarContents">
            <div className="Sidecard">
            <div className="HeadContents date">
                        <p><strong>Date:</strong> </p>
                        <p>October 27, 2021</p>
                    </div>
                <span>Narrative Writing</span>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <p><strong>Subject:</strong> </p>
                            <p>Personal Experience</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Academic Level:</strong> </p>
                            <p>High School/College</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Word Count:</strong> </p>
                            <p>1,800</p>
                        </div>

                    </div>
                  
                    <div className="HeadContents desc">
                        <p><strong>Short Description: </strong></p>
                        <p>A vivid narrative capturing the distress and eventual relief of misplacing and finding a wallet, filled with personal details and emotions.</p>
                    </div>

                    <div className="cardFooter">
                        <div className="HeadContents">
                            <p><strong>Rating: </strong></p>
                            <p style={{ marginTop: "-3px" }}>
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />

                            </p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Author:</strong> </p>
                            <p>Kayla Castro</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Citation:</strong> </p>
                            <p>N/A</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Type:</strong> </p>
                            <p>Personal Narrative</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <p><strong>Tags:</strong></p>
                    <div className="btns">
                        <button>#LostAndFound</button>
                        <button>#CollegeEssay</button>
                        <button>#BritishGrammar</button>
                        <button>#EmotionalJourney  </button>
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

export default Annotated