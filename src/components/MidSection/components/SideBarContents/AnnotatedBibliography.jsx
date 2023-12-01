import React from 'react'
import { RiStarSFill } from "react-icons/ri";


const AnnotatedBibliography = () => {
  return (
    <div className="sidbarContents">
      <div className="Sidecard">
        <h1>Annotated Bibliography</h1>
        <div className="Sidetopper">
          <div className="cardHeader">
            <div className="HeadContents">
              <h2>Subjec: </h2>
              <p>Political Science</p>
            </div>
            <div className="HeadContents">
              <h2>Academic Level: </h2>
              <p>Undergraduate</p>
            </div>
            <div className="HeadContents">
              <h2>Word Count: </h2>
              <p>1,200</p>
            </div>

          </div>
          <div className="HeadContents date">
            <h2>Date: </h2>
            <p>February 27, 2022</p>
          </div>
          <div className="HeadContents desc">
            <h2 >Short Description: </h2>
            <p>An in-depth analysis of societal movements, focusing on racial issues and protests in sports.</p>
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
              <p>Oliver Thompson</p>
            </div>
            <div className="HeadContents">
              <h2>Citation: </h2>
              <p>APA</p>
            </div>
            <div className="HeadContents footer">
              <h2>Type: </h2>
              <p>Annotated Bibliography</p>
            </div>

          </div>
        </div>
        <div className="tags">
          <h3>Tags:</h3>
          <div className="btns">

            <button>#SocialMovements </button>
            <button>#RacialJustice </button>
            <button>#ProtestInSports </button>
            <button>#AcademicWriting </button>
            <button>#UndergraduateLevel </button>
            <button>#Sociology </button>
            <button>#PoliticalScience </button>
            <button>#AnnotatedBibliography </button>
            <button>#BritishGrammar</button>
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

export default AnnotatedBibliography