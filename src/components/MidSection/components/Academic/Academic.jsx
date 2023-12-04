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
            <li onClick={() => handleClick('Admission Essay')}>Admission Essay</li>
            <li onClick={() => handleClick('Annotated Bibliography ')}>Annotated Bibliography </li>
            <li onClick={() => handleClick('Case Study')}>Case Study</li>
            <li onClick={() => handleClick('Critical Review')}>Critical Review</li>
            <li onClick={() => handleClick('Literature Review')}>Literature Review</li>
            <li onClick={() => handleClick('Term Paper')}>Term Paper</li>
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
