import React from 'react';
import Navbar from '../navbar/Navbar';
import Jarallaxfile from '../jarallax/Jarallaxfile';
import './Home.css';

const Home = () => {
  return (
    <>
      <div className="home-container">
        <Navbar />
        {/* Hero section */}
        <div className="hero-section">
          <video width="100%" autoPlay muted loop>
            <source src={require('../../Assets/videos/hero.mp4')} type="video/mp4" />
            <source src={require('../../Assets/videos/hero.webm')} type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="skatebg">
          <h2>skate.</h2>
        </div>
        <Jarallaxfile />
      </div>
    </>
  );
};

export default Home;
