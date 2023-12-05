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
                        <h2>Date: </h2>
                        <p>October 27, 2021</p>
                    </div>
                <h1>Narrative Writing</h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>Personal Experience</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>High School/College</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>1,800</p>
                        </div>

                    </div>
                  
                    <div className="HeadContents desc">
                        <h2>Short Description: </h2>
                        <p>A vivid narrative capturing the distress and eventual relief of misplacing and finding a wallet, filled with personal details and emotions.</p>
                    </div>

                    <div className="cardFooter">
                        <div className="HeadContents">
                            <h2>Rating: </h2>
                            <p style={{ marginTop: "-3px" }}>
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />
                                <RiStarSFill className='star-icon' />

                            </p>
                        </div>
                        <div className="HeadContents">
                            <h2>Author: </h2>
                            <p>Kayla Castro</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>N/A</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Type: </h2>
                            <p>Personal Narrative</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
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