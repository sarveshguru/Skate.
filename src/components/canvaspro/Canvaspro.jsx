import React, { useEffect, useRef } from 'react';
import cimg from '../../Assets/videos/canvasimg.mp4'
import Aboutskate from '../aboutskate/Aboutskate';
import Joinc from '../joinc/Joinc';
import Navbar from '../navbar/Navbar';

const Canvaspro = () => {
  const playbackConst = 130;
  const vidRef = useRef(null);
  const setHeightRef = useRef(null);

  useEffect(() => {
    const hii = setHeightRef.current;
    const vid = vidRef.current;
    const handleTransitionEnd = () => {
      vid.duration = hii.offsetHeight / playbackConst;
    };
    hii.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      hii.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);
  const scrollPlay = () => {
    const frameNumber = window.pageYOffset / playbackConst;
    vidRef.current.currentTime = frameNumber;
  };

  const throttle = (callback, delay) => {
    let last = 0;
    return () => {
      const now = new Date().getTime();
      if (now - last < delay) {
        return;
      }
      last = now;
      callback();
    };
  };

  useEffect(() => {
    const throttledScrollPlay = throttle(scrollPlay, 100);
    window.addEventListener('scroll', throttledScrollPlay);

    return () => {
      window.removeEventListener('scroll', throttledScrollPlay);
    };
  }, []);

  useEffect(() => {
    scrollPlay();
  }, []);

  return (
    <>
    <Navbar/>
      <div className="can-can">
        <div id="hii" style={{ position: "relative", zIndex: "1" }} className="hii" ref={setHeightRef}>
          <div style={{ height: "100vh" }} className="about">
            <Aboutskate />
          </div>
          <div style={{ height: "100vh" }} className="about">
            <Joinc />
          </div>
        </div>
        <div id="set-height"></div>
        <video
          id="v0"
          tabIndex="0"
          autoBuffer="autoBuffer"
          preload="preload"
          ref={vidRef}
          style={{ position: 'fixed', top: 0, left: 0, width: '100%' }}
        >
          <source type="video/mp4" src={cimg} />
        </video>
      </div>
    </>
  );
};
export default Canvaspro;
