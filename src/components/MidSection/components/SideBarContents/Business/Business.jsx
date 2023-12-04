import React from 'react'
import { RiStarSFill } from "react-icons/ri";
import pdf from '../../../../../pdf/business/Business Plan.pdf'


const Business = () => {
  return (
    <div className="sidbarContents">
            <div className="Sidecard">
                <h1>Business Strategy</h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>Business Strategy</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>MBA/Postgraduate</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>6,000</p>
                        </div>

                    </div>
                    <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>March 4, 2023</p>
                    </div>
                    <div className="HeadContents desc">
                        <h2>Short Description: </h2>
                        <p>An innovative business plan for SeniorSavvy, focusing on digital inclusivity and advanced features for seniors.</p>
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
                            <p>Daniel Lewis</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>Harvard</p>
                        </div>
                        <div className="HeadContents footer">
                            <h2>Type: </h2>
                            <p>Business Plan</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
                    <div className="btns">
                        <button>#SeniorSavvy</button>
                        <button>#BusinessPlan</button>
                        <button>#MBAProject</button>
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

export default Business