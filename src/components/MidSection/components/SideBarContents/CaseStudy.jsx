import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../pdf/academic/Case Study.pdf'

import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// Your render function
<Viewer fileUrl="/path/to/document.pdf" />;

const CaseStudy = () => {
    return (
        <div className="sidbarContents">
            <div className="Sidecard">
                <div className="HeadContents date">
                    <h2>Date: </h2>
                    <p>February 27, 2022</p>
                </div>
                <h1>Case study</h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>Psychology</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>Postgraduate</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>2,000</p>
                        </div>

                    </div>
                    
                    <div className="HeadContents desc">
                        <h2 >Short Description: </h2>
                        <p>An insightful exploration of complex psychological themes through the case of a military veteran facing personal and professional turmoil.</p>
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
                            <p>George Clarke</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>APA</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Type: </h2>
                            <p>Case Study</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
                    <div className="btns">

                        <button>#Psychology </button>
                        <button>#CaseStudy </button>
                        <button>#MilitaryVeteran </button>
                        <button>#BritishGrammar </button>

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

export default CaseStudy