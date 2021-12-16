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
                            <span>THE TERMINOLOGY...</span>
                            <h3>SPACE CAPSULE</h3>
                            <p>A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!</p>
                        </div>
                        <div className={toggleState === 2 ? 'circle-content active-circle-content' : 'circle-content'} >
                            <span>THE TERMINOLOGY...</span>
                            <h3>SPACEPORTS</h3>
                            <p>A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.</p>
                        </div>
                        <div className={toggleState === 3 ? 'circle-content active-circle-content' : 'circle-content'} >
                            <span>THE TERMINOLOGY...</span>
                            <h3>SPACE CAPSULE</h3>
                            <p>A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.</p>
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
