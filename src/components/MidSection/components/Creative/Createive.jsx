import React, { useState } from 'react'
// import './academic.css'

import CreativeAdmission from '../SideBarContents/creative/CreativeAdmission';
import Annotated from '../SideBarContents/creative/Annotated';
import Poem from '../SideBarContents/creative/Poem';
import Reflective from '../SideBarContents/creative/Reflective';
import ShortStory from '../SideBarContents/creative/ShortStory';

const Createive = () => {
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
          <li onClick={() => handleClick('Admission Essay')}><h4>Admission Essay</h4></li>
          <li onClick={() => handleClick('Annotated Bibliography ')}><h4>Annotated Bibliography</h4> </li>
          <li onClick={() => handleClick('Case Study')}><h4>Poem</h4></li>
          <li onClick={() => handleClick('Critical Review')}><h4>Reflective Writing</h4></li>
          <li onClick={() => handleClick('Literature Review')}><h4>Short Story</h4></li>
          {/* <li onClick={() => handleClick('Term Paper')}>Term Paper</li> */}
        </ul>
      </div>
      <div className="MidsideContents">
        {activeSidebar === 'Admission Essay' && <CreativeAdmission />}
        {activeSidebar === 'Annotated Bibliography ' && <Annotated />}
        {activeSidebar === 'Case Study' && <Poem />}
        {activeSidebar === 'Critical Review' && <Reflective />}
        {activeSidebar === 'Literature Review' && <ShortStory />}
        {/* {activeSidebar === 'Term Paper' && <TermPaper />} */}

      </div>
    </div>

    // <div className="pdf-container" >
    //   <embed className="pdf" src={pdf} type="application/pdf" style={{ width: "1266px" }} />
    // </div>
  )
}

export default Createive