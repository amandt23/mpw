import React, { useEffect, useState } from 'react'
import './midsect.css'
import { Academic } from './components/Academic/Academic';
import Createive from './components/Creative/Createive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faL } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar/Sidebar';
import SideBarContents from './components/SideBarContents/SidebarContents'
import Reviews from './components/Reviews/Reviews';
import Representation from './components/Representation/Representation';
import BusinessWriting from './components/BusinessWriting/BusinessWriting';


const MidSection = () => {
    const [activeTab, setActiveTab] = useState('academic')
    const [activeSidebar, setSidebar] = useState(null);

    const handleClick = (item) => {
        setSidebar(item);
    };
    const [isVisible, setIsVisible] = useState(false);

    const handleToggleSidebar = () => {
        setIsVisible(!isVisible);

    };



    const renderContent = () => {
        switch (activeTab) {
            case 'academic':
                return <Academic />;

            case 'creative':
                return <Createive />;

            case 'review':
                return <Reviews />;

            case 'business':
                return <BusinessWriting />;

            case 'presentation':
                return <Representation />;

            default:
                return null;
        }
    };
    return (
        <div className="midContainer">

            <div className='midSect'>
                <div className="MidtopContents">
                    <h2>Exemplary Work Showcase</h2>
                    <p>Dive into our curated selection of samples, demonstrating our commitment to quality, expertise, and unmatched academic proficiency. Your success is our top priority.</p>
                </div>
                <div className="Midmain">
                    <FontAwesomeIcon className='icon-burger' icon={faBars} onClick={handleToggleSidebar} />
                    <nav className={`midNav ${isVisible ? 'visibleMidNav' : ''}`}>
                        <ul>
                            <li><a onClick={() => { setActiveTab('academic'); setIsVisible(false) }} href="#academic"><h3>Academic</h3></a></li>
                            <li><a onClick={() => { setActiveTab('creative'); setIsVisible(false) }} href="#creative"><h3>Creative Writing</h3></a></li>
                            <li><a onClick={() => { setActiveTab('review'); setIsVisible(false) }} href="#reviews"><h3>Reviews</h3></a></li>
                            <li><a onClick={() => { setActiveTab('business'); setIsVisible(false) }} href="#representation"><h3>Business Writing</h3></a></li>
                            <li><a onClick={() => { setActiveTab('presentation'); setIsVisible(false) }} href="#representation"><h3>Presentation</h3></a></li>
                        </ul>
                    </nav>
                    {/* <div className="MidnavContents">
                    <div className="sidebar">
                        <ul>
                            <li onClick={() => handleClick('Research Paper')}>Admission Essay</li>
                            <li onClick={() => handleClick('Term Paper')}>Term Paper</li>
                            <li onClick={() => handleClick('Admission Essay')}>Admission Essay</li>
                            <li onClick={() => handleClick('Annotated ')}>Annotated Bibliography</li>
                            <li onClick={() => handleClick('Case Study')}>Case Study</li>
                            <li onClick={() => handleClick('Literature Review')}>Literature Review</li>
                            <li onClick={() => handleClick('Critical Thinking')}>Critical Thinking</li>
                            <li onClick={() => handleClick('Thesis')}>Thesis/Dissertation</li>
                        </ul>
                    </div>
                    <div className="MidsideContents">
                        
                    </div>
                </div> */}

                    {renderContent()}
                </div>

            </div>

        </div>

    )
}

export default MidSection