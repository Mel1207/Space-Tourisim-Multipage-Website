import React, { useState } from 'react'
import BackgroundCrewDesktop from '../../images/home/background-crew-desktop.jpg'
import imgDouglas from '../../images/crew/image-douglas-hurley.png'
import imgShuttleworth from '../../images/crew/image-mark-shuttleworth.png'
import imgGlover from '../../images/crew/image-victor-glover.png'
import imgAnsari from '../../images/crew/image-anousheh-ansari.png'

const Crew = () => {

    const [toggleState, setStoggleState] = useState(1)

    const toggleTab = (index) => {
        setStoggleState(index)
    }

    return (
        <div className="crew" id="crew" style={{
            background: `url(${BackgroundCrewDesktop})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="container crew-body">
                <div className="carousel-contents">
                    <div className={toggleState === 1 ? 'carousel-content-active carousel-content' : 'carousel-content'}>
                        <div className='crew-details'>
                            <h3><span>02</span> Meet your crew</h3>
                            <h3>Commander</h3>
                            <h2>Douglas Hurley</h2>
                            <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        </div>
                        <img src={imgDouglas} alt="Douglas Hurley" />
                    </div>
                    <div className={toggleState === 2 ? 'carousel-content-active carousel-content' : 'carousel-content'}>
                        <div className="crew-details">
                            <span>02 <h2>Meet your crew</h2></span>
                            <h3>Mission Specialist</h3>
                            <h2>MARK SHUTTLEWORTH</h2>
                            <p>Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                        </div>
                        <img src={imgShuttleworth} alt="Mark Shuttleworth" />
                    </div>
                    <div className={toggleState === 3 ? 'carousel-content-active carousel-content' : 'carousel-content'}>
                        <div className="crew-details">
                            <span>02 <h2>Meet your crew</h2></span>
                            <h3>Pilot</h3>
                            <h2>Victor Glover</h2>
                            <p>Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. </p>
                        </div>
                        <img src={imgGlover} alt="Victor Glover" />
                    </div>
                    <div className={toggleState === 4 ? 'carousel-content-active carousel-content' : 'carousel-content'}>
                        <div className="crew-details">
                            <span>02 <h2>Meet your crew</h2></span>
                            <h3>Flight Engineer</h3>
                            <h2>Anousheh Ansari</h2>
                            <p>Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. </p>
                        </div>
                        <img src={imgAnsari} alt="Anousheh Ansari" />
                    </div>
                </div>
                <div className="carousel-dots">
                    <div className={toggleState === 1 ? 'dot active-dot' : 'dot'} onClick={() => toggleTab(1)}></div>
                    <div className={toggleState === 2 ? 'dot active-dot' : 'dot'} onClick={() => toggleTab(2)}></div>
                    <div className={toggleState === 3 ? 'dot active-dot' : 'dot'} onClick={() => toggleTab(3)}></div>
                    <div className={toggleState === 4 ? 'dot active-dot' : 'dot'} onClick={() => toggleTab(4)}></div>
                </div>
            </div>
        </div>
    )
}

export default Crew
