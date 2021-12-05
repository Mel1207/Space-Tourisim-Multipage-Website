import React from 'react'
import BackgroundDestinationDesktop from '../../images/home/background-destination-desktop.jpg'

const Destination = () => {
    return (
        <div className="destination" id="destination" style={{
            background: `url(${BackgroundDestinationDesktop})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="container">
                <h1>content</h1>
            </div>
        </div>
    )
}

export default Destination
