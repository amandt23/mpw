import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../../pdf/presentation/Pyschological Presentation.pdf'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// Your render function
<Viewer fileUrl="/path/to/document.pdf" />;

const Pyschological = () => {
    return (
        <div className="sidbarContents">
            <div className="Sidecard">
            <div className="HeadContents date">
                        <p><strong>Date:</strong> </p>
                        <p>November 17, 2023</p>
                    </div>
                <span><strong>Pyschological Presentation</strong></span>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <p><strong>Subject:</strong> </p>
                            <p>Psychology and Mental Health</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Academic Level:</strong> </p>
                            <p>University/Professional</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Word Count:</strong> </p>
                            <p>21 Slides</p>
                        </div>

                    </div>
                   
                    <div className="HeadContents desc">
                        <p><strong>Short Description:</strong> </p>
                        <p>A thorough presentation exploring the complexities of schizophrenia, including its diagnosis, treatment, and socio-economic impact.</p>
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
                            <p><strong>Author: </strong></p>
                            <p>Emma Richards</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Citation:</strong> </p>
                            <p>APA</p>
                        </div>
                        <div className="HeadContents ">
                            <p><strong>Type:</strong> </p>
                            <p>PowerPoint Presentation</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <p><strong>Tags:</strong></p>
                    <div className="btns">
                        <button>#Schizophrenia  </button>
                        <button>#MentalHealth  </button>
                        <button>#BritishGrammar </button>
                        <button>#UniversityLevel  </button>
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

export default Pyschological