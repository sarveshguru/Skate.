import React from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import skatelogo from '../../Assets/images/skatelogo.png'
import './Navbar.css'

const Navbar = () => {
    return (
        <>
            <nav>
                <div className="nav-container">
                    <div className="navbar">
                        <div className="navlogo">
                            <NavLink to="/">
                                <img src={skatelogo} alt="Skate." />
                            </NavLink>
                        </div>
                        <div className="navlinks">
                            <div className="nav-links">
                                <NavLink to='/'>Home</NavLink>
                            </div>
                            <div className="nav-links">
                                <NavLink to='/Canvaspro'>About</NavLink>
                            </div>
                            <div className="nav-links">
                                <NavLink to='/News'>News</NavLink>
                            </div>
                            <div className="nav-links">
                                <NavLink to='/Purchase '>Purchase</NavLink>
                            </div>
                            <div className="nav-links">
                                <NavLink to='/SocialMedia '>Social Media</NavLink>
                            </div>
                            <div className="nav-links">
                                <NavLink to='/ContactUs'>Contact Us</NavLink>
                            </div>
                        </div>
                        <div className="navdldbtn">
                            <a href="http://" target="_blank" rel="noopener noreferrer">Download <FontAwesomeIcon icon={faDownload}/></a>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
