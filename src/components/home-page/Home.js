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
                    <p>
                        Let’s face it; if you want to go to space, you might as well <br /> genuinely go to outer space and not hover kind of on the <br /> edge of it. Well sit back, and relax because we’ll give you a <br /> truly out of this world experience!
                    </p>
                </div>
                <div>
                    <h1>container 2</h1>
                </div>
            </div>
           
        </div>
    )
}

export default Home
