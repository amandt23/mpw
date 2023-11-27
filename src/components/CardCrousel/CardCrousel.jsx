import React from 'react'
import './card.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from './Card';
import lecturersData from '../../data.json';


const CardCrousel = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1350 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1350, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 620 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 700, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="crousel">
                <Carousel autoPlay={true } showDots={true} responsive={responsive} >
                {lecturersData.lecturers.map((lecturer, index) => (
                    <Card  key={index} lecturer={lecturer}/>
                ))}
                    
                </Carousel>
            </div>
        </>
    )
}

export default CardCrousel