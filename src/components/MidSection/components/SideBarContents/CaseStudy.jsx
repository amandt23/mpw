import React from 'react'
import { RiStarSFill } from "react-icons/ri";


const CaseStudy = () => {
    return (
        <div className="sidbarContents">
            <div className="Sidecard">
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
                    <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>September 10, 2023</p>
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
                        <div className="HeadContents footer">
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
                        <button>#ProfessionalChallenges </button>
                        <button>#PostgraduateLevel </button>
                        <button>#MentalHealth </button>
                        <button>#AcademicWriting </button>
                        <button>#BritishGrammar </button>
                        <button>#PsychologicalAnalysis</button>
                    </div>
                </div>
            </div>
            <div class="vertical-line"></div>
            <div className="pdf">
                <img src="./images/pdf.png" alt="" />
            </div>
        </div>
    )
}

export default CaseStudy