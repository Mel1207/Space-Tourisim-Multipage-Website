import React from 'react'
import BackgroundTechnologyDesktop from '../../images/home/background-technology-desktop.jpg'

const Technology = () => {
    return (
        <div className="destination" id="destination" style={{
            background: `url(${BackgroundTechnologyDesktop})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
        </div>
    )
}

export default Technology
