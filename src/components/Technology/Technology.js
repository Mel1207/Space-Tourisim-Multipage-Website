import React, { useState } from 'react'
import BackgroundTechnologyDesktop from '../../images/home/background-technology-desktop.jpg'
import techImg1 from '../../images/technology/image-launch-vehicle-portrait.jpg'
import techImg2 from '../../images/technology/image-spaceport-portrait.jpg'
import techImg3 from '../../images/technology/image-space-capsule-portrait.jpg'


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
                <div className="technology-details">
                    <div className="circle-tabs ">
                        <div className={toggleState === 1 ? 'circle active-circle' : 'circle'} onClick={() => toggleTab(1)}><p>1</p></div>
                        <div className={toggleState === 2 ? 'circle active-circle' : 'circle'} onClick={() => toggleTab(2)}><p>2</p></div>
                        <div className={toggleState === 3 ? 'circle active-circle' : 'circle'} onClick={() => toggleTab(3)}><p>3</p></div>
                    </div>
                    <div className='circle-content-container'>
                        <div className={toggleState === 1 ? 'circle-content active-circle-content' : 'circle-content'} >
                            <h1>title 1</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, recusandae.</p>
                        </div>
                        <div className={toggleState === 2 ? 'circle-content active-circle-content' : 'circle-content'} >
                            <h1>title 2</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, recusandae.</p>
                        </div>
                        <div className={toggleState === 3 ? 'circle-content active-circle-content' : 'circle-content'} >
                            <h1>title 3</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, recusandae.</p>
                        </div>
                    </div>
                </div>
                <div className="content-circle-tabs">
                    <div className={toggleState === 1 ? 'circle-content active-circle-content' :  'circle-content'}><img src={techImg1} alt='Vehicle' /></div>
                    <div className={toggleState === 2 ? 'circle-content active-circle-content' :  'circle-content'}><img src={techImg2} alt='Spaceport' /> </div>
                    <div className={toggleState === 3 ? 'circle-content active-circle-content' :  'circle-content'}><img src={techImg3} alt='Capsule' /> </div>
                </div>
            </div>
        </div>
    )
}

export default Technology
