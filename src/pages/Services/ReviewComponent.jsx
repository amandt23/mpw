// ReviewComponent.jsx
import React from 'react';
import ReviewCard from './ReviewCard';  // Adjust the path as necessary
import PrivacyCard from './PrivacyCard';
import { MdPrivacyTip } from "react-icons/md";
import { FaEye } from "react-icons/fa";

const ReviewComponent = ({ reviews }) => {
    const privacyData = [
        {
          title: "Thoughts ?",
          description: "Would you be willing to disclose your real name and photo to post a review on essay writing or reviewing websites?",
          icon:  <svg xmlns="http://www.w3.org/2000/svg" width="46" height="47" viewBox="0 0 46 47" fill="none">
          <path d="M13.3978 35.0356C11.0335 34.2475 8.66915 35.2506 8.09598 37.2567C7.52281 39.1911 8.88409 41.4122 11.2484 42.2003C13.6128 42.9884 15.9771 41.9853 16.5503 39.9792C17.1234 37.9731 15.7621 35.7521 13.3978 35.0356ZM4.80024 41.4122C4.01213 42.057 3.94049 43.275 4.5853 44.2064C5.30177 45.1378 6.44811 45.3527 7.30787 44.7795C8.09598 44.1347 8.16763 42.9167 7.52281 41.9853C6.87799 41.0539 5.58835 40.839 4.80024 41.4122ZM44.4207 16.9807C44.4207 15.0463 43.4893 13.3267 42.128 12.2521V11.8222C42.128 8.81302 39.7637 6.3054 36.8262 6.3054H36.253C35.1067 4.37094 33.1006 3.00966 30.7363 3.00966C29.3033 3.00966 28.0137 3.43954 27.0106 4.22765C25.6494 3.00966 23.7866 2.1499 21.7805 2.1499C18.4847 2.1499 15.6905 4.37094 14.7591 7.45174C13.6844 6.66363 12.3231 6.23375 10.8902 6.23375C7.09293 6.23375 4.01213 9.38619 4.01213 13.2551C4.01213 14.4014 4.29872 15.4761 4.7286 16.4792C2.7225 17.9121 1.43286 20.2765 1.43286 22.999C1.43286 27.4411 4.94354 31.0234 9.24232 31.0234C10.8185 31.0234 12.3231 30.5219 13.5411 29.7338C14.1859 33.1012 17.1234 35.6804 20.6341 35.6804C23.2134 35.6804 25.5061 34.2475 26.7957 32.1698C27.6555 33.0295 28.8734 33.6027 30.2347 33.6027C32.7424 33.6027 34.8201 31.5966 35.035 29.089C35.6082 29.3039 36.253 29.4472 36.8979 29.4472C39.9786 29.4472 42.4863 26.8679 42.4863 23.7155C42.4863 23.0707 42.343 22.4258 42.1997 21.8527C43.4893 20.6347 44.4207 18.9152 44.4207 16.9807Z" fill="#00A12D" />
      </svg>  
        },
        {
            icon: <FaEye style={{ color: "green", fontSize: "40px" }} />,
            title: "Reality ?",
            description: "Essay writing clients are naturally cautious about revealing their identity, which makes them reluctant to leave reviews."
        },
        {
            icon: <MdPrivacyTip style={{ color: "green", fontSize: "40px" }} />,
            title: "Privacy ?",
            description: "Clients sphere often tread cautiously when it comes to revealing their identity, leading to hesitancy in leaving reviews."
        }
    ];
        
  return (
<>
<div className="privacy-cards">
    {privacyData.map((card, index) => (
      <PrivacyCard
        key={index}
        icon={card.icon}  // Make sure your PrivacyCard can handle these props
        title={card.title}
        description={card.description}
      />
    ))}
  </div>

  <div className="reviewSect">
    <div className="reviewSectDivScroll">
        {reviews?.map((review, index) => (
            <ReviewCard key={index} review={review} />
        ))}
        </div>
    </div>
</>
   
  );
};

export default ReviewComponent;
