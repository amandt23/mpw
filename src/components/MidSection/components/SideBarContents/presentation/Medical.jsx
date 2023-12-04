import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../../pdf/presentation/Medical Presentation.pdf'


const Medical = () => {
  return (
    <div className="sidbarContents">
            <div className="Sidecard">
                <h1>Medical Presentation</h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>Pharmaceutical Policy and Healthcare Economics</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>University/Professional</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>10 Slides</p>
                        </div>

                    </div>
                    <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>July 20, 2023</p>
                    </div>
                    <div className="HeadContents desc">
                        <h2>Short Description: </h2>
                        <p>An in-depth presentation on the U.S. prescription drug system, examining high costs and potential reform strategies.</p>
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
                            <p>Sarah Wilson</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>APA</p>
                        </div>
                        <div className="HeadContents footer">
                            <h2>Type: </h2>
                            <p>PowerPoint Presentation</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
                    <div className="btns">
                        <button>#UniversityLevel  </button>
                        <button>#DepthPsychology </button>
                        <button>#UniversityLevel</button>
                        <button>#PolicyAnalysis </button>
                    </div>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div className="pdf-container">
                <embed className="pdf" src={pdf} type="application/pdf" />
            </div>
        </div>
  )
}

export default Medical