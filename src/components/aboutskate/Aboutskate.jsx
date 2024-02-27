import React from 'react'
import abtskt from '../../Assets/images/skateabt.png'
import './Aboutskate.css'

const Aboutskate = () => {
   
    return (
        <>
            <div className="abt-container">
                <div className="aboutcont" >
                    <div className="imgt" >
                        <h2>About</h2>
                        <img src={abtskt} alt="skate." />
                    </div>
                    <div className="text" >
                        <p>This is not a sequel. This is skate. refreshed with a forever vision in mind. Reimagined with the skate. community - you - guiding us through development. We are listening to you. Join us on this journey and help shape the future of skate.</p>
                        <p>For more on the studio team behind skate. check out <a href="#">Full Circle</a>, including its career page featuring recent job listings. Follow along on <a href="#">Twitter</a>, <a href="#">Instagram</a> and <a href="#">Discord</a> for the latest news.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Aboutskate
