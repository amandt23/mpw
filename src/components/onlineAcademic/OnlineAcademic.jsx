import React, { useState } from 'react'
import './online.css'
import PaperWork from './PaperWork';
import CourseWork from './CourseWork';
import Assessments from './Assessments';

const OnlineAcademic = () => {
    const [activeButton, setActiveButton] = useState("PaperWork");
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const renderContent = () => {
        switch (activeButton) {
            case 'PaperWork':
                return <PaperWork />;
            case 'Coursework':
                return <CourseWork />;
              case 'Assessments':
                return <Assessments />;
            default:
                return null;
        }
    };

    return (
        <div className="online">
            <div className="onlineTop">
                <h3>24/7 Online Academic Writing Help In UK</h3>
                <p>Discover the Gold Standard in Academic Support with My Perfect Writing Your Trusted Partner in Achieving Academic Prowess.</p>
            </div>

            <div className="onlineMenu">
                <div className="onlineMenuTop">
                    <ul>
                        <div className="onlineMenuONe">
                            <div className={activeButton === 'PaperWork' ? 'moved-Active' : ''}>
                                <li onClick={() => handleButtonClick('PaperWork')} className={activeButton === 'PaperWork' ? 'liClass2' : 'liClass1'}>PaperWork</li>
                            </div>
                        </div>
                        <div className="onlineMenuONe">
                            <div className={activeButton === 'Coursework' ? 'moved-Active' : ''}>
                                <li onClick={() => handleButtonClick('Coursework')} className={activeButton === 'Coursework' ? 'liClass2' : 'liClass1'}>Coursework</li>
                            </div>
                        </div>
                        <div className="onlineMenuONe">
                            <div className={activeButton === 'Assessments' ? 'moved-Active' : ''}>
                                <li onClick={() => handleButtonClick('Assessments')} className={activeButton === 'Assessments' ? 'liClass2' : 'liClass1'}>Assessments</li>
                            </div>
                        </div>
                    </ul>
                </div>
            </div>

            {renderContent()}
            
        </div>
    )
}

export default OnlineAcademic