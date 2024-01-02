// PrivacyCard.jsx
import React from 'react';

const PrivacyCard = ({ icon, title, description }) => {
    
    return (
        <div className="privacy-card">
            
            <div className="pcardTop">
                {icon}
                <p><strong>{title}</strong></p>
            </div>
            <p>{description}</p>
        </div>
    );
};

export default PrivacyCard;
