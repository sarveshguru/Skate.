import React from 'react'
import joinc from '../../Assets/images/join.png'
import './Joinc.css'

const Joinc = () => {

    return (
        <>
            <div className="abt-container">
                <div className="aboutcont" >
                    <div className="text" >
                        <h2>Join The Community</h2>
                        <p>The official skate. Discord server</p>
                        <a href="#">JOIN</a>
                    </div>
                    <div className="imgt" >
                        <img src={joinc} alt="skate." />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Joinc
