import React from 'react'
import { useState } from 'react'
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

                <div className="block-tabs">
                    <div className="tabs active-tab">MOON</div>
                    <div className="tabs">MARS</div>
                    <div className="tabs">EUROPA</div>
                    <div className="tabs">TITAN</div>
                </div>
                <div className="content-tabs">
                    <div className="content active-content">
                        <h1>Moon</h1>
                    </div>
                    <div className="content">
                        <h1>Mars</h1>
                    </div>
                    <div className="content">
                        <h1>EUROPA</h1>
                    </div>
                    <div className="content">
                        <h1>TITAN</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
