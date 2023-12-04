import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../pdf/academic/Admissionessay.pdf'

const AdmisionEssay = () => {
    return (
        <div className="sidbarContents">
            <div className="Sidecard">
                <h1>Admission Essay for Computer Science at Boston University</h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>Computer Science</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>Undergraduate</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>950</p>
                        </div>

                    </div>
                    <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>May 15, 2023</p>
                    </div>
                    <div className="HeadContents desc">
                        <h2>Short Description: </h2>
                        <p>A compelling essay expressing a student's passion for computer science and aspirations to study at Boston University. </p>
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
                            <p>Emily Harris</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>N/A</p>
                        </div>
                        <div className="HeadContents footer">
                            <h2>Type: </h2>
                            <p>Admission Essay</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
                    <div className="btns">
                        <button>#ComputerScience</button>
                        <button>#UniversityAdmission</button>
                        <button>#BostonUniversity</button>
                        <button>#AdmissionEssay</button>
                        <button>#AcademicExcellence</button>
                        <button>#Technology</button>
                        <button>#StudentAspirations </button>
                        <button>#BritishGrammar</button>
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

export default AdmisionEssay