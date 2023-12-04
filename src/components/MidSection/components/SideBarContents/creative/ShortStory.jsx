import React from 'react'
import { RiStarSFill } from "react-icons/ri";

import pdf from '../../../../../pdf/creative/Short Story.pdf'


const ShortStory = () => {
  return (
    <div className="sidbarContents">
    <div className="Sidecard">
        <h1>Short Story</h1>
        <div className="Sidetopper">
            <div className="cardHeader">
                <div className="HeadContents">
                    <h2>Subjec: </h2>
                    <p>Mental Health and Personal Growth</p>
                </div>
                <div className="HeadContents">
                    <h2>Academic Level: </h2>
                    <p>All Levels</p>
                </div>
                <div className="HeadContents">
                    <h2>Word Count: </h2>
                    <p>3,500</p>
                </div>

            </div>
            <div className="HeadContents date">
                <h2>Date: </h2>
                <p>August 30, 2023</p>
            </div>
            <div className="HeadContents desc">
                <h2>Short Description: </h2>
                <p>A poignant and immersive short story portraying the journey of Asma, confronting and overcoming her traumatic past.</p>
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
                    <p>Lucy Edwards</p>
                </div>
                <div className="HeadContents">
                    <h2>Citation: </h2>
                    <p>N/A</p>
                </div>
                <div className="HeadContents footer">
                    <h2>Type: </h2>
                    <p>Short Story</p>
                </div>

            </div>
        </div>
        <div className="tags">
            <h3>Tags:</h3>
            <div className="btns">
                <button>#MentalHealth</button>
                <button>#PersonalGrowth</button>
                <button>#Resilience</button>
                <button>#Recovery</button>
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

export default ShortStory