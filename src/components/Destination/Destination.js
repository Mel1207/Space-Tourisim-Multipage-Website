import React from 'react'
import { useState } from 'react'
import BackgroundDestinationDesktop from '../../images/home/background-destination-desktop.jpg'
import imageMoon from '../../images/destination/image-moon.png'

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
                <div>
                    <div className="block-tabs">
                        <div className={toggleState === 1 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(1)}>MOON</div>
                        <div className={toggleState === 2 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(2)}>MARS</div>
                        <div className={toggleState === 3 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(3)}>EUROPA</div>
                        <div className={toggleState === 4 ? 'tabs active-tab':'tabs'} onClick={() => toggleTab(4)}>TITAN</div>
                    </div>         
                    <div className="content-tabs">
                        <div className={toggleState === 1 ? 'content active-content':'content'}>
                            <h1>Moon</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, atque.</p>
                        </div>
                        <div className={toggleState === 2 ? 'content active-content':'content'}>
                            <h1>Mars</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae libero exercitationem ut ducimus, et numquam rem veritatis assumenda porro nesciunt.</p>
                        </div>
                        <div className={toggleState === 3 ? 'content active-content':'content'}>
                            <h1>EUROPA</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente architecto nostrum cumque laudantium excepturi magnam nam velit dolore porro laborum! Facilis ad molestiae quo neque maiores quam magnam mollitia! Laudantium?</p>
                        </div>
                        <div className={toggleState === 4 ? 'content active-content':'content'}>
                            <h1>TITAN</h1>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa aut vero dolorem tenetur voluptas necessitatibus! Beatae adipisci, eaque laboriosam aut suscipit reiciendis rerum impedit obcaecati repellendus, ea provident, est ad laudantium voluptatibus quas. Autem delectus assumenda animi minima sed quae?</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Destination
