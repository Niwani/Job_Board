import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginDropdownOpen, setIsLoginDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for glassmorphism intensity or shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsLoginDropdownOpen(false); // Close dropdown when toggling mobile menu
  };

  const toggleLoginDropdown = (e) => {
      e.preventDefault();
      setIsLoginDropdownOpen(!isLoginDropdownOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setIsMobileMenuOpen(false)}>
          JobBoard
        </Link>

        {/* Desktop Menu */}
        <div className="navbar-menu-desktop">
             <Link to="/jobs" className="nav-link">Browse Jobs</Link>
             <Link to="/companies" className="nav-link">Companies</Link>
             
             <div 
                className="nav-item-dropdown" 
                onMouseEnter={() => setIsLoginDropdownOpen(true)}
                onMouseLeave={() => setIsLoginDropdownOpen(false)}
             >
                <div className="nav-link dropdown-trigger">
                    Log In <span className="chevron">▼</span>
                </div>
                <div className={`dropdown-content ${isLoginDropdownOpen ? 'show' : ''}`}>
                    <Link to="/login" className="dropdown-item">As Job Seeker</Link>
                    <Link to="/employer/login" className="dropdown-item">As Employer</Link>
                </div>
             </div>

             <Link to="/post-job" className="btn-post-job">
                Post a Job
             </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
          <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-menu-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
          <Link to="/jobs" className="mobile-link" onClick={toggleMobileMenu}>Browse Jobs</Link>
          <Link to="/companies" className="mobile-link" onClick={toggleMobileMenu}>Companies</Link>
          
          <div className="mobile-divider"></div>
          
          <span className="mobile-label">Log In</span>
          <Link to="/login" className="mobile-sub-link" onClick={toggleMobileMenu}>As Job Seeker</Link>
          <Link to="/employer/login" className="mobile-sub-link" onClick={toggleMobileMenu}>As Employer</Link>
          
          <div className="mobile-action">
            <Link to="/post-job" className="btn-post-job mobile-btn" onClick={toggleMobileMenu}>
                Post a Job
            </Link>
          </div>
      </div>
    </nav>
  );
};

export default Navbar;
