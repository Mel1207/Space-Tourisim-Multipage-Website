import React, { useState } from 'react'
import BackgroundTechnologyDesktop from '../../images/home/background-technology-desktop.jpg'

const Technology = () => {

    const [toggleState, setStoggleState] = useState(1)

    const toggleTab = (index) => {
        setStoggleState(index)
    }

    return (
        <div className="destination" id="destination" style={{
            background: `url(${BackgroundTechnologyDesktop})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="container technology-body">
                <div>
                    <div className={toggleState === 1 ? 'circle active-circle' : 'circle'} onClick={() => toggleTab(1)}><h1>1</h1></div>
                    <div className={toggleState === 2 ? 'circle active-circle' : 'circle'} onClick={() => toggleTab(2)}><h1>2</h1></div>
                    <div className={toggleState === 3 ? 'circle active-circle' : 'circle'} onClick={() => toggleTab(3)}><h1>3</h1></div>

                </div>
                <div className="content-circle-tabs">
                    <div className={toggleState === 1 ? 'circle-content active-circle-content' :  'circle-content'}><h1>image 1</h1></div>
                    <div className={toggleState === 2 ? 'circle-content active-circle-content' :  'circle-content'}><h1>image 2</h1></div>
                    <div className={toggleState === 3 ? 'circle-content active-circle-content' :  'circle-content'}><h1>image 3</h1></div>
                    
                </div>
            </div>

        </div>
    )
}

export default Technology
