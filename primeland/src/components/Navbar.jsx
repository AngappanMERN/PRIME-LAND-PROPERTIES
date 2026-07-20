import { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { services } from '../data/services';
import MegaMenu from './MegaMenu';
import './Navbar.css';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const getLinkClass = ({ isActive }) =>
    `nav-link nav-link-custom ${isActive ? 'active' : ''}`;

  const toggleMobileMenu = () => {  
    setIsMobileMenuOpen((s) => !s);
    setIsMobileServicesOpen(false);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsHovered(false);
    }, 200);
  };

  return (
    <nav className="navbar sticky-top bg-white shadow-sm border-bottom">
      <div className="container d-flex align-items-center justify-content-between navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center logo-link">
          <img src="/primeland-logo.png" alt="Prime Land Logo" className="navbar-logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar-nav d-none d-md-flex flex-row align-items-center gap-md-4 gap-3 m-0">
          <li className="nav-item">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about" className={getLinkClass}>
              About Us
            </NavLink>
          </li>

          {/* Services with Mega Menu */}
          <li
            className="nav-item position-relative d-flex align-items-center"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/services" className={({ isActive }) => `nav-link nav-link-custom d-flex align-items-center gap-1 ${isActive || isHovered ? 'active' : ''}`}>
              Services
              <span className={`chev ${isHovered ? 'rotated' : ''}`} aria-hidden>
                ▼
              </span>
            </NavLink>

            <MegaMenu services={services} isOpen={isHovered} onClose={() => setIsHovered(false)} isMobile={false} />
          </li>

          <li className="nav-item">
            <NavLink to="/projects" className={getLinkClass}>
              Projects
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/blog" className={getLinkClass}>
              Blog
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact" className={getLinkClass}>
              Contact Us
            </NavLink>
          </li>

          <li className="nav-item">
            <Link to="/contact" className="btn btn-cta">
              Get In Touch
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="navbar-toggler d-md-none btn btn-link"
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          <svg className="icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="mobile-menu d-md-none bg-white border-top shadow-sm">
          <div className="container py-3">
            <ul className="nav flex-column">
              <li className="nav-item">
                <NavLink to="/" onClick={toggleMobileMenu} className="nav-link py-2 nav-link-mobile">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" onClick={toggleMobileMenu} className="nav-link py-2 nav-link-mobile">
                  About Us
                </NavLink>
              </li>

              {/* Mobile Services Accordion */}
              <li className="nav-item">
                <button
                  type="button"
                  className="w-100 d-flex justify-content-between align-items-center btn btn-link py-2 text-start"
                  onClick={() => setIsMobileServicesOpen((s) => !s)}
                  aria-expanded={isMobileServicesOpen}
                >
                  <span className="fw-bold">Services</span>
                  <span className={`chev ${isMobileServicesOpen ? 'rotated' : ''}`}>▼</span>
                </button>

                <MegaMenu services={services} isOpen={isMobileServicesOpen} onClose={toggleMobileMenu} isMobile={true} />
              </li>

              <li className="nav-item">
                <NavLink to="/projects" onClick={toggleMobileMenu} className="nav-link py-2 nav-link-mobile">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" onClick={toggleMobileMenu} className="nav-link py-2 nav-link-mobile">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" onClick={toggleMobileMenu} className="nav-link py-2 nav-link-mobile">
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item pt-2">
                <Link to="/contact" onClick={toggleMobileMenu} className="btn btn-cta w-100 text-center">
                  Get In Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
