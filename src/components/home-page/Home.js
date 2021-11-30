import React from 'react'
import BackgroundHomeDesktop from '../../images/home/background-home-desktop.jpg'


const Home = () => {
    return (
        <div className="home" id="home" style={{
            background: `url(${BackgroundHomeDesktop})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="container">
                <h1>
                    hey there 
                </h1>
            </div>
           
        </div>
    )
}

export default Home
