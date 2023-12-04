import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../pdf/academic/Term Paper.pdf'


const TermPaper = () => {
    return (
        <div className="sidbarContents">
            <div className="Sidecard">
                <h1>Term Paper</h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>Education</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>Postgraduate Research</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>4,500</p>
                        </div>

                    </div>
                    <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>August 21, 2023</p>
                    </div>
                    <div className="HeadContents desc">
                        <h2 >Short Description: </h2>
                        <p>A detailed exploration of strategies to enhance pupil progress and teaching efficiency in UK high schools.</p>
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
                            <p>James Anderson</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>Harvard</p>
                        </div>
                        <div className="HeadContents footer">
                            <h2>Type: </h2>
                            <p>Research Paper</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
                    <div className="btns">

                        <button>#SchoolStrategy </button>
                        <button>#PupilProgress </button>
                        <button>#UKHighSchools </button>
                        <button>#BritishGrammar </button>
                       
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

export default TermPaper