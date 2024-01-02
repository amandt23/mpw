import React, { useState } from 'react'
import './online.css'
import PaperWork from './PaperWork';
import CourseWork from './CourseWork';
import Assessments from './Assessments';
import { Helmet } from 'react-helmet';

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

        <>
        <Helmet>

                {/* <title>Code of Conduct | Guidelines at My Perfect Writing</title>
                <meta name="description" content="Explore the Code of Conduct that defines My Perfect Writing. Learn about our ethical guidelines and commitment to academic integrity in the UK." />

                <meta name="keywords" content="My Perfect Writing Code of Conduct, Academic Integrity Guidelines UK, Ethical Standards My Perfect Writing, Professional Conduct Policies"></meta> */}


        </Helmet>
        <div className="online">
            <div className="onlineTop">
                <h2>24/7 Online Academic Writing Help In UK</h2>
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
        </>
    )
}

export default OnlineAcademic