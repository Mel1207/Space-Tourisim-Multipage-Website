import React from 'react'
import BackgroundHomeDesktop from '../../images/home/background-home-desktop.jpg'


const Home = () => {
    return (
        <div className="home" id="home" style={{
            background: `url(${BackgroundHomeDesktop})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover'
        }}>
            <div className="container home-body">
                <div>
                    <h3>SO YOU WANT TO TRAVEL TO</h3>
                    <h1>SPACE</h1>
                </div>
                <div>
                    <h1>container 2</h1>
                </div>
            </div>
           
        </div>
    )
}

export default Home
