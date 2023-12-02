import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../pdf/academic/Critical Review.pdf'


const CriticalReview = () => {
    return (
        <div className="sidbarContents">
            <div className="Sidecard">
                <h1>Critical Review </h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>History</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>University</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>1,500</p>
                        </div>

                    </div>
                    <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>June 17, 2021</p>
                    </div>
                    <div className="HeadContents desc">
                        <h2 >Short Description: </h2>
                        <p>An analytical critique of JFK's inaugural speech, exploring its historical context and rhetorical strategies.</p>
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
                            <p>Charlotte Brown</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>MLA</p>
                        </div>
                        <div className="HeadContents footer">
                            <h2>Type: </h2>
                            <p>Critical Review</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
                    <div className="btns">

                        <button>#JFK </button>
                        <button>#InauguralAddress </button>
                        <button>#CriticalReview </button>
                        <button>#PoliticalScience </button>
                        <button>##UniversityLevel  </button>
                        <button>#RhetoricalAnalysis </button>
                        <button>#BritishGrammar </button>
                        <button>#PoliticalOratory</button>
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

export default CriticalReview