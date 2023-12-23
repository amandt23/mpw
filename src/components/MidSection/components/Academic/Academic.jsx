import React, { useState } from 'react'
// import './academic.css'
import SidebarContents from '../SideBarContents/SidebarContents';
import AdmisionEssay from '../SideBarContents/AdmisionEssay';
import AnnotatedBibliography from '../SideBarContents/AnnotatedBibliography';
import CaseStudy from '../SideBarContents/CaseStudy';
import CriticalReview from '../SideBarContents/CriticalReview';
import LiteratureReview from '../SideBarContents/LiteratureReview ';
import TermPaper from '../SideBarContents/TermPaper';
export const Academic = () => {
  const [activeSidebar, setSidebar] = useState('Admission Essay');

  const handleClick = (item) => {
    setSidebar(item);
  };
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleSidebar = () => {
    setIsVisible(!isVisible);

  };

  return (
    <>
      <div className="MidnavContents">
        <div className="sidebar">
          <ul>
            <li onClick={() => handleClick('Admission Essay')}><h4>Admission Essay</h4></li>
            <li onClick={() => handleClick('Annotated Bibliography ')}><h4>Annotated Bibliography</h4> </li>
            <li onClick={() => handleClick('Case Study')}><h4>Case Study</h4></li>
            <li onClick={() => handleClick('Critical Review')}><h4>Critical Review</h4></li>
            <li onClick={() => handleClick('Literature Review')}><h4>Literature Review</h4></li>
            <li onClick={() => handleClick('Term Paper')}><h4>Term Paper</h4></li>
          </ul>
        </div>
        <div className="MidsideContents">
          {activeSidebar === 'Admission Essay' && <AdmisionEssay />}
          {activeSidebar === 'Annotated Bibliography ' && <AnnotatedBibliography />}
          {activeSidebar === 'Case Study' && <CaseStudy />}
          {activeSidebar === 'Critical Review' && <CriticalReview />}
          {activeSidebar === 'Literature Review' && <LiteratureReview />}
          {activeSidebar === 'Term Paper' && <TermPaper />}

        </div>
      </div>

    </>
  )
}
