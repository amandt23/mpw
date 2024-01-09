import React, { Suspense } from 'react';
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../../pdf/presentation/'

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
const Viewer = React.lazy(() => import('@react-pdf-viewer/core').then(module => ({ default: module.Viewer })));
const Worker = React.lazy(() => import('@react-pdf-viewer/core').then(module => ({ default: module.Worker })));

// Your render function
<Viewer fileUrl="/path/to/document.pdf" />;

const BusinessPresentation = () => {
  return (
    <Suspense fallback={<div>Loading PDF Viewer...</div>}>  
    <div className="sidbarContents">
            <div className="Sidecard">
            <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>November 7, 2023</p>
                    </div>
                <h1>Biology Presentation</h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>University/Postgraduate</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>High School/College</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>15 Slides</p>
                        </div>

                    </div>
                    
                    <div className="HeadContents desc">
                        <h2>Short Description: </h2>
                        <p>A detailed and visually engaging presentation on the biology, incidence, and treatment of endometrial cancer.</p>
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
                            <p>Rebecca Taylor</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>APA</p>
                        </div>
                        <div className="HeadContents ">
                            <h2>Type: </h2>
                            <p>PowerPoint Presentation</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
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
        </Suspense>
  )
}

export default BusinessPresentation