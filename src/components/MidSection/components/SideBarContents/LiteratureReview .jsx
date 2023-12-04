import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../pdf/academic/Literature Review.pdf'

const LiteratureReview = () => {
    return (
        <div className="sidbarContents">
            <div className="Sidecard">
                <h1>Literature Review</h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>Psychology</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>Master's Degree</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>3,000</p>
                        </div>

                    </div>
                    <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>October 12, 2023</p>
                    </div>
                    <div className="HeadContents desc">
                        <h2 >Short Description: </h2>
                        <p>A comprehensive review of global studies on teen social media addiction, examining causes, effects, and potential interventions.</p>
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
                            <p>Isabella Johnson</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>APA</p>
                        </div>
                        <div className="HeadContents footer">
                            <h2>Type: </h2>
                            <p>Literature Review</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
                    <div className="btns">

                        
                        <button>#MentalHealth </button>
                        <button>#LiteratureReview </button>
                        <button>#AcademicAnalysis </button>
                        <button>#MastersLexxxvel </button>
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

export default LiteratureReview 