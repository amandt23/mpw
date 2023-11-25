import React from 'react'
import CardCrousel from './CardCrousel'

const MyTeam = () => {
    return (
        <div className="myteam">
            <div className="topSection">
                    <h3>Meet the Brains Behind the Brilliance!</h3>
                    <p>Our squad at My Perfect Writing is a dazzling constellation of academic aficionados, dedicated to driving your success.</p>
            </div>
            <div className="CrouselSection">
                <CardCrousel />
            </div>
        </div>
    )
}

export default MyTeam