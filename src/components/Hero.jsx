import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <h1>Find Your Dream Job Today</h1>
        <p>Connecting talent with opportunity. Whether you're hiring or looking for work, we've got you covered.</p>
        <div className="hero-btns">
          <Link to="/login" className="btn btn--primary btn--large">
            Login as Job Seeker
          </Link>
          <Link to="/employer" className="btn btn--outline btn--large">
            Login as Employer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
