import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../../pdf/presentation/Case Study.pdf'


const PresentationCaseStudy = () => {
  return (
    <div className="sidbarContents">
            <div className="Sidecard">
                <h1>Psychology and Cultural Studies</h1>
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
                            <p>20 Slides</p>
                        </div>

                    </div>
                    <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>April 12, 2023</p>
                    </div>
                    <div className="HeadContents desc">
                        <h2>Short Description: </h2>
                        <p>A comprehensive case study presentation on the psychological and cultural challenges faced by a Lakota veteran, integrating Depth and Transpersonal Psychology.</p>
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
                            <p>Michael Johnson</p>
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
                        <button>#CaseStudy </button>
                        <button>#DepthPsychology </button>
                        <button>#UniversityLevel</button>
                        <button>#DepthPsychology </button>
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

export default PresentationCaseStudy