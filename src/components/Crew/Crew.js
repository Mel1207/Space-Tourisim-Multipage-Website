import React, { useState } from 'react'
import BackgroundCrewDesktop from '../../images/home/background-crew-desktop.jpg'
import imgDouglas from '../../images/crew/image-douglas-hurley.png'

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
                        <span>02 <h2>Meet your crew</h2></span>

                        <h3>Commander</h3>
                        <h2>Douglas Hurley</h2>
                        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        <img src={imgDouglas} alt="" />
                    </div>
                    <div className={toggleState === 2 ? 'carousel-content-active carousel-content' : 'carousel-content'}>
                        <span>02 <h2>Meet your crew</h2></span>

                        <h3>Commander</h3>
                        <h2>Douglas Hurley</h2>
                        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        <img src={imgDouglas} alt="" />
                    </div>
                    <div className={toggleState === 3 ? 'carousel-content-active carousel-content' : 'carousel-content'}>
                        <span>02 <h2>Meet your crew</h2></span>

                        <h3>Commander</h3>
                        <h2>Douglas Hurley</h2>
                        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        <img src={imgDouglas} alt="" />
                    </div>
                    <div className={toggleState === 4 ? 'carousel-content-active carousel-content' : 'carousel-content'}>
                        <span>02 <h2>Meet your crew</h2></span>

                        <h3>Commander</h3>
                        <h2>Douglas Hurley</h2>
                        <p>Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                        <img src={imgDouglas} alt="" />
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
