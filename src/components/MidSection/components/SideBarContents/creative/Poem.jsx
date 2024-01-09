import React, { Suspense } from 'react';
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../../pdf/creative/Poem.pdf'


// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
const Viewer = React.lazy(() => import('@react-pdf-viewer/core').then(module => ({ default: module.Viewer })));
const Worker = React.lazy(() => import('@react-pdf-viewer/core').then(module => ({ default: module.Worker })));


// Your render function
<Viewer fileUrl="/path/to/document.pdf" />;


const Poem = () => {
  return (
    <Suspense fallback={<div>Loading PDF Viewer...</div>}>  
    <div className="sidbarContents">
            <div className="Sidecard">
            <div className="HeadContents date">
                        <p><strong>Date:</strong> </p>
                        <p>February 17, 2021</p>
                    </div>
                <span><strong>Poem</strong></span>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <p><strong>Subject:</strong> </p>
                            <p>Poetry and Personal Reflection</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Academic Level:</strong> </p>
                            <p>All Levels</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Word Count:</strong> </p>
                            <p>500</p>
                        </div>

                    </div>
                   
                    <div className="HeadContents desc">
                        <p><strong>Short Description: </strong></p>
                        <p>A heartfelt poem expressing the journey of identity and belonging, blending themes of cultural heritage and personal growth.</p>
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
                            <p><strong>Author:</strong> </p>
                            <p>Shizuki Hara</p>
                        </div>
                        <div className="HeadContents">
                            <p><strong>Citation:</strong> </p>
                            <p>N/A</p>
                        </div>
                        <div className="HeadContents ">
                            <p><strong>Type: </strong></p>
                            <p>Poetry</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <p><strong>Tags:</strong></p>
                    <div className="btns">
                        <button>#PersonalJourney</button>
                        <button>#SocialIssues</button>
                        <button>#PersonalJourney</button>
                        <button>#ReflectivePoetry</button>
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

export default Poem