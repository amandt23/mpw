import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../../pdf/presentation/Biology Presentation.pdf'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// Your render function
<Viewer fileUrl="/path/to/document.pdf" />;

const Biological = () => {
  return (
    <div className="sidbarContents">
            <div className="Sidecard">
            <div className="HeadContents date">
                        <p><strong>Date:</strong> </p>
                        <p>November 7, 2023</p>
                    </div>
                <span><strong>Biology Presentation</strong></span>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <p><strong>Subject:</strong> </p>
                            <p>University/Postgraduate</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Academic Level:</strong> </p>
                            <p>High School/College</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Word Count:</strong> </p>
                            <p>15 Slides</p>
                        </div>

                    </div>
                  
                    <div className="HeadContents desc">
                        <p><strong>Short Description:</strong> </p>
                        <p>A detailed and visually engaging presentation on the biology, incidence, and treatment of endometrial cancer.</p>
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
                            <p>Rebecca Taylor</p>
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
                        <button>#EndometrialCancer</button>
                        <button>#UniversityLevel</button>
                        <button>#UniversityLevel</button>
                        <button>#Healthcare</button>
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

export default Biological