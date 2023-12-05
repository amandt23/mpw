import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../../pdf/creative/Poem.pdf'
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// Your render function
<Viewer fileUrl="/path/to/document.pdf" />;


const Poem = () => {
  return (
    <div className="sidbarContents">
            <div className="Sidecard">
            <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>February 17, 2021</p>
                    </div>
                <h1>Poem</h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>Poetry and Personal Reflection</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>All Levels</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>500</p>
                        </div>

                    </div>
                   
                    <div className="HeadContents desc">
                        <h2>Short Description: </h2>
                        <p>A heartfelt poem expressing the journey of identity and belonging, blending themes of cultural heritage and personal growth.</p>
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
                            <p>Shizuki Hara</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>N/A</p>
                        </div>
                        <div className="HeadContents ">
                            <h2>Type: </h2>
                            <p>Poetry</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
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
  )
}

export default Poem