import React, { useState } from 'react'
import ArticleReview from '../SideBarContents/reviews/ArticleReview';
import BookReview from '../SideBarContents/reviews/BookReview';
import ConcertReview from '../SideBarContents/reviews/ConcertReview';
import MovieReview from '../SideBarContents/reviews/MovieReview';
import PhilosophicalReview from '../SideBarContents/reviews/PhilosophicalReview';
// import './academic.css'

const Reviews = () => {
  const [activeSidebar, setSidebar] = useState('Admission Essay');

  const handleClick = (item) => {
    setSidebar(item);
  };
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleSidebar = () => {
    setIsVisible(!isVisible);

  };
  return (

    <div className="MidnavContents">
      <div className="sidebar">
        <ul>
          <li onClick={() => handleClick('Admission Essay')}><h4>Article Review</h4></li>
          <li onClick={() => handleClick('Annotated Bibliography ')}><h4>Book Review</h4></li>
          <li onClick={() => handleClick('Case Study')}><h4>Concert Review</h4></li>
          <li onClick={() => handleClick('Critical Review')}><h4>Movie Review</h4></li>
          <li onClick={() => handleClick('Literature Review')}><h4>Philosophical Review</h4></li>
          {/* <li onClick={() => handleClick('Term Paper')}>Term Paper</li> */}
        </ul>
      </div>
      <div className="MidsideContents">
        {activeSidebar === 'Admission Essay' && <ArticleReview />}
        {activeSidebar === 'Annotated Bibliography ' && <BookReview />}
        {activeSidebar === 'Case Study' && <ConcertReview />}
        {activeSidebar === 'Critical Review' && <MovieReview />}
        {activeSidebar === 'Literature Review' && <PhilosophicalReview />}
        {/* {activeSidebar === 'Term Paper' && <TermPaper />} */}

      </div>
    </div>

    // <div className="pdf-container" >
    //   <embed className="pdf" src={pdf} type="application/pdf" style={{ width: "1266px" }} />
    // </div>
  )
}

export default Reviews