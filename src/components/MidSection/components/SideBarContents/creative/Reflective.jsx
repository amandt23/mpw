import React from 'react';
import { RiStarSFill } from "react-icons/ri";

import pdf from '../../../../../pdf/creative/Reflective Writing.pdf'


const Reflective = () => {
    return (
        <div className="sidbarContents">
            <div className="Sidecard">
                <h1>Poem</h1>
                <div className="Sidetopper">
                    <div className="cardHeader">
                        <div className="HeadContents">
                            <h2>Subjec: </h2>
                            <p>Literature and Character Analysis</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Academic Level: </h2>
                            <p>College</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Word Count: </h2>
                            <p>2,200</p>
                        </div>

                    </div>
                    <div className="HeadContents date">
                        <h2>Date: </h2>
                        <p>November 5, 2021</p>
                    </div>
                    <div className="HeadContents desc">
                        <h2>Short Description: </h2>
                        <p>An introspective essay on 'Saving Sourdi' by May-lee Chai, delving into the complexities of sisterhood and adult transformation.</p>
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
                            <p>Hannah Smith</p>
                        </div>
                        <div className="HeadContents">
                            <h2>Citation: </h2>
                            <p>MLA</p>
                        </div>
                        <div className="HeadContents footer">
                            <h2>Type: </h2>
                            <p>Reflective Writing</p>
                        </div>

                    </div>
                </div>
                <div className="tags">
                    <h3>Tags:</h3>
                    <div className="btns">
                        <button>#SavingSourdi </button>
                        <button>#Sisterhood </button>
                        <button>#MayleeChai</button>
                        <button>#Literature </button>
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

export default Reflective