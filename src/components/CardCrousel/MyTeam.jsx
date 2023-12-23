import React from 'react'
import CardCrousel from './CardCrousel'

const MyTeam = () => {
    return (
        <div className="myteam">
            <div className="topSection">
                    <h2>Meet Our Expert Writer</h2>
                    <p>Empowering Your Academic Journey with Authority, Expertise, and Experience</p>
            </div>
            <div className="CrouselSection">
                <CardCrousel />
            </div>
        </div>
    )
}

export default MyTeam