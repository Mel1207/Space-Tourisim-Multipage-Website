import React, { useState } from 'react'
import BackgroundCrewDesktop from '../../images/home/background-crew-desktop.jpg'

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
                <div className="carousel-dots">
                    <div className={toggleState === 1 ? 'dot active-dot' : 'dot'} onClick={() => toggleTab(1)}>o</div>
                    <div className={toggleState === 2 ? 'dot active-dot' : 'dot'} onClick={() => toggleTab(2)}>o</div>
                    <div className={toggleState === 3 ? 'dot active-dot' : 'dot'} onClick={() => toggleTab(3)}>o</div>
                    <div className={toggleState === 4 ? 'dot active-dot' : 'dot'} onClick={() => toggleTab(4)}>o</div>
                </div>
                <div className="carousel-contents">
                    <div className={toggleState === 1 ? 'carousel-content-active carousel-content' : 'carousel-content'}><h1>content 1</h1></div>
                    <div className={toggleState === 2 ? 'carousel-content-active carousel-content' : 'carousel-content'}><h1>content 2</h1></div>
                    <div className={toggleState === 3 ? 'carousel-content-active carousel-content' : 'carousel-content'}><h1>content 3</h1></div>
                    <div className={toggleState === 4 ? 'carousel-content-active carousel-content' : 'carousel-content'}><h1>content 4</h1></div>
                </div>
            </div>
        </div>
    )
}

export default Crew
