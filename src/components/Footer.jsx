import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the exclusive newsletter to receive the latest job offers.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              className="footer-input"
              name="email"
              type="email"
              placeholder="Your Email"
            />
            <button className="btn-subscribe">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
            <Link to="/">Destinations</Link>
            <Link to="/">Sponsorships</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Videos</h2>
            <Link to="/">Submit Video</Link>
            <Link to="/">Ambassadors</Link>
            <Link to="/">Agency</Link>
            <Link to="/">Influencer</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <Link to="/">Instagram</Link>
            <Link to="/">Facebook</Link>
            <Link to="/">Youtube</Link>
            <Link to="/">Twitter</Link>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              JobBoard
            </Link>
          </div>
          <small className="website-rights">JobBoard © 2024</small>
          <div className="social-icons">
            {/* Placeholders for icons */}
            <Link to="/" className="social-icon-link" aria-label="Facebook">F</Link>
            <Link to="/" className="social-icon-link" aria-label="Instagram">I</Link>
            <Link to="/" className="social-icon-link" aria-label="Youtube">Y</Link>
            <Link to="/" className="social-icon-link" aria-label="Twitter">X</Link>
            <Link to="/" className="social-icon-link" aria-label="LinkedIn">L</Link>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
