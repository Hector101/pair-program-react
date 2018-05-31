import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react';
import '../_scss/LandingPageComponent.scss';

const LandingPageComponent = () => {
  return (
    <div className="landing-page landing-container">
      <div className="fullscreen-video-wrap">
        <video src="/video/bg_vid.mp4" autoPlay loop muted></video>
      </div>
      <div className="fullscreen-overlay">
      </div>
      <div className="fullscreen-content">
        <Link to="/auth"><Button size='massive' color="teal" inverted basic>Get Started</Button></Link>
      </div>
    </div>
  )
};

export default LandingPageComponent;
