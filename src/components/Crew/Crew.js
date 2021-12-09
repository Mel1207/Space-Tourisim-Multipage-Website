import React from 'react'
import BackgroundCrewDesktop from '../../images/home/background-crew-desktop.jpg'

const Crew = () => {
    return (
        <div className="crew" id="crew" style={{
            background: `url(${BackgroundCrewDesktop})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="container crew-body">
                
            </div>
        </div>
    )
}

export default Crew
