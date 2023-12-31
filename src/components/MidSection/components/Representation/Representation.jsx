import React, { useState } from 'react'
// import './academic.css'

import CreativeAdmission from '../SideBarContents/creative/CreativeAdmission';
import Annotated from '../SideBarContents/creative/Annotated';
import Poem from '../SideBarContents/creative/Poem';
import Reflective from '../SideBarContents/creative/Reflective';
import ShortStory from '../SideBarContents/creative/ShortStory';
import Biological from '../SideBarContents/presentation/Biological';
import PresentationCaseStudy from '../SideBarContents/presentation/PresentationCaseStudy';
import Medical from '../SideBarContents/presentation/Medical';
import Pyschological from '../SideBarContents/presentation/Pyschological';
import Religion from '../SideBarContents/presentation/Religion';
import ResearchPaper from '../SideBarContents/presentation/ResearchPaper ';
import SociologyPresentation from '../SideBarContents/presentation/SociologyPresentation';

const Representation = () => {
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
          <li onClick={() => handleClick('Admission Essay')}><h4>Biology Presentation</h4></li>
          <li onClick={() => handleClick('Annotated Bibliography ')}><h4>Case Study</h4> </li>
          <li onClick={() => handleClick('Case Study')}><h4>Medical Presentation</h4></li>
          <li onClick={() => handleClick('Critical Review')}><h4>Pyschological Presentation</h4></li>
          <li onClick={() => handleClick('Literature Review')}><h4>Religion Presentaion</h4></li>
          <li onClick={() => handleClick('Term Paper')}><h4>Research Paper Presentation</h4></li>
          <li onClick={() => handleClick('Sociology')}><h4>Sociology Presentation</h4></li>
        </ul>
      </div>
      <div className="MidsideContents">
        {activeSidebar === 'Admission Essay' && <Biological />}
        {activeSidebar === 'Annotated Bibliography ' && <PresentationCaseStudy />}
        {activeSidebar === 'Case Study' && <Medical />}
        {activeSidebar === 'Critical Review' && <Pyschological />}
        {activeSidebar === 'Literature Review' && <Religion />}
        {activeSidebar === 'Term Paper' && <ResearchPaper />}
        {activeSidebar === 'Sociology' && <SociologyPresentation  />}

      </div>
    </div>

    // <div className="pdf-container" >
    //   <embed className="pdf" src={pdf} type="application/pdf" style={{ width: "1266px" }} />
    // </div>
  )
}

export default Representation