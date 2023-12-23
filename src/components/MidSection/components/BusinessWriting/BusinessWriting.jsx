import React, { useState } from 'react'
import Business from '../SideBarContents/Business/Business';
// import './academic.css'

const BusinessWriting = () => {
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
          <li onClick={() => handleClick('Admission Essay')}><h4>Business Plan</h4></li>
          {/* <li onClick={() => handleClick('Annotated Bibliography ')}>Annotated Bibliography </li>
          <li onClick={() => handleClick('Case Study')}>Poem</li>
          <li onClick={() => handleClick('Critical Review')}>Reflective Writing</li>
          <li onClick={() => handleClick('Literature Review')}>Short Story</li> */}
          {/* <li onClick={() => handleClick('Term Paper')}>Term Paper</li> */}
        </ul>
      </div>
      <div className="MidsideContents">
        {activeSidebar === 'Admission Essay' && <Business />}
        {/* {activeSidebar === 'Annotated Bibliography ' && <Annotated />} */}
        {/* {activeSidebar === 'Case Study' && <Poem />} */}
        {/* {activeSidebar === 'Critical Review' && <Reflective />} */}
        {/* {activeSidebar === 'Literature Review' && <ShortStory />} */}
        {/* {activeSidebar === 'Term Paper' && <TermPaper />} */}

      </div>
    </div>

    // <div className="pdf-container" >
    //   <embed className="pdf" src={pdf} type="application/pdf" style={{ width: "1266px" }} />
    // </div>
  )
}

export default BusinessWriting