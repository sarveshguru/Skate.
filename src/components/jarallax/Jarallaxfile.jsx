import React, { useEffect } from 'react';
import { jarallax, jarallaxElement } from 'jarallax';
import a from '../../Assets/images/1.png'
import b from '../../Assets/images/2.png'
import c from '../../Assets/images/3.png'
import d from '../../Assets/images/4.png'
import './style.css';

const Jarallaxfile = () => {

    jarallaxElement();
    useEffect(() => {
        jarallax(document.querySelectorAll('[data-jarallax-element]'));
        jarallax(document.querySelectorAll('.jarallax'), {
            speed: 0.5
        });
    }, []);

    return (
        <div style={{ background: "black", position: "sticky" }}>
            <section>
                <div className="box">
                    <h2 data-jarallax-element="0 -200">asdf</h2>
                    <div className="container">
                        <div className="imgBx jarallax">
                            <img src={a} className="jarallax-img" alt="1" />
                        </div>
                        <div className="content" data-jarallax-element="-200 0">
                            <p>boris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="box">
                    <h2 data-jarallax-element="0 200">para</h2>
                    <div className="container">
                        <div className="imgBx jarallax">
                            <img src={b} className="jarallax-img" alt="2" />
                        </div>
                        <div className="content" data-jarallax-element="-200 0">
                            <p>o eiusmod
                                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud eExcepteur sint occaecat cupidatat non
                                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="box">
                    <h2 data-jarallax-element="0 -200">effext</h2>
                    <div className="container">
                        <div className="imgBx jarallax">
                            <img src={c} className="jarallax-img" alt="4" />
                        </div>
                        <div className="content" data-jarallax-element="-200 0">
                            <p>citation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                                cillum dolore eu fugiat nulla parrunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="box">
                    <h2 data-jarallax-element="0 200">paraext</h2>
                    <div className="container">
                        <div className="imgBx jarallax">
                            <img src={d} className="jarallax-img" alt="3" />
                        </div>
                        <div className="content" data-jarallax-element="-200 0">
                            <p>Lorem ipsficia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Jarallaxfile;
