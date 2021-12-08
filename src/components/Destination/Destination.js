import React from 'react'
import { useState } from 'react'
import BackgroundDestinationDesktop from '../../images/home/background-destination-desktop.jpg'
import imageMoon from '../../images/destination/image-moon.png'
import imageMars from '../../images/destination/image-mars.png'
import imageEuropa from '../../images/destination/image-europa.png'
import imageTitan from '../../images/destination/image-titan.png'

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
            <div className="container destination-body">
                <div className={toggleState === 1 ? 'content active-content':'content'}>
                    <img src={imageMoon} alt="Moon" />
                </div>
                <div className={toggleState === 2 ? 'content active-content':'content'}>
                    <img src={imageMars} alt="Mars" />
                </div>
                <div className={toggleState === 3 ? 'content active-content':'content'}>
                    <img src={imageEuropa} alt="Europa" />
                </div>
                <div className={toggleState === 4 ? 'content active-content':'content'}>
                    <img src={imageTitan} alt="Titan" />
                </div>
                <div>
                    <div className="block-tabs">
                        <div className={toggleState === 1 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(1)}>MOON</div>
                        <div className={toggleState === 2 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(2)}>MARS</div>
                        <div className={toggleState === 3 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(3)}>EUROPA</div>
                        <div className={toggleState === 4 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(4)}>TITAN</div>
                    </div>         
                    <div className="content-tabs">
                        <div className={toggleState === 1 ? 'content active-content':'content'}>
                            <h1 className="content-title">MOON</h1>
                            <p>See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.</p>
                        </div>
                        <div className={toggleState === 2 ? 'content active-content':'content'}>
                            <h1 className="content-title">MARS</h1>
                            <p>Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!</p>
                        </div>
                        <div className={toggleState === 3 ? 'content active-content':'content'}>
                            <h1 className="content-title">EUROPA</h1>
                            <p>The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.</p>
                        </div>
                        <div className={toggleState === 4 ? 'content active-content':'content'}>
                            <h1 className="content-title">TITAN</h1>
                            <p>The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
