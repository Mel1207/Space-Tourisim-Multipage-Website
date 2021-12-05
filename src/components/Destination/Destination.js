import React from 'react'
import { useState } from 'react'
import BackgroundDestinationDesktop from '../../images/home/background-destination-desktop.jpg'

const Destination = () => {

    const [toggleState, setStoggleState] = useState(1)

    const toggleTab = (index) => {
        setStoggleState(index)
    }

    return (
        <div className="destination" id="destination" style={{
            background: `url(${BackgroundDestinationDesktop})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="container" style={{
                margin: '80px 0 0 0'
            }}>
                <div className="block-tabs">
                    <div className={toggleState === 1 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(1)}>MOON</div>
                    <div className={toggleState === 2 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(2)}>MARS</div>
                    <div className={toggleState === 3 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(3)}>EUROPA</div>
                    <div className={toggleState === 4 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(4)}>TITAN</div>
                </div>
                <div className="content-tabs">
                    <div className={toggleState === 1 ? 'content active-content':'content'}>
                        <h1>Moon</h1>
                    </div>
                    <div className={toggleState === 2 ? 'content active-content':'content'}>
                        <h1>Mars</h1>
                    </div>
                    <div className={toggleState === 3 ? 'content active-content':'content'}>
                        <h1>EUROPA</h1>
                    </div>
                    <div className={toggleState === 4 ? 'content active-content':'content'}>
                        <h1>TITAN</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
