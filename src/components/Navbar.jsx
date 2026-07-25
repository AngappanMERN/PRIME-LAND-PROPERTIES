import { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { services } from '../data/services';
import MegaMenu from './MegaMenu';
import './Navbar.css';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const getLinkClass = ({ isActive }) =>
    `nav-link-custom ${isActive ? 'active' : ''}`;

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
    <nav className="navbar">
      <div className="navbar-container navbar-inner">
        {/* Logo */}
        <Link to="/" className="logo-link">
          <img src="/primeland-logo.png" alt="Prime Land Logo" className="navbar-logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="desktop-nav">
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
            className="nav-item mega-menu-wrapper"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink to="/services" className={({ isActive }) => `nav-link-custom services-link ${isActive || isHovered ? 'active' : ''}`}>
              Services
              <ChevronDown size={16} className={`chev ${isHovered ? 'rotated' : ''}`} aria-hidden="true" />
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
            <Link to="/contact" className="btn-cta">
              Get In Touch
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="mobile-toggler"
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-inner">
            <ul className="mobile-nav-list">
              <li className="nav-item">
                <NavLink to="/" onClick={toggleMobileMenu} className="nav-link-mobile">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" onClick={toggleMobileMenu} className="nav-link-mobile">
                  About Us
                </NavLink>
              </li>

              {/* Mobile Services Accordion */}
              <li className="nav-item">
                <button
                  type="button"
                  className="mobile-services-btn"
                  onClick={() => setIsMobileServicesOpen((s) => !s)}
                  aria-expanded={isMobileServicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown size={16} className={`chev ${isMobileServicesOpen ? 'rotated' : ''}`} />
                </button>

                <MegaMenu services={services} isOpen={isMobileServicesOpen} onClose={toggleMobileMenu} isMobile={true} />
              </li>

              <li className="nav-item">
                <NavLink to="/projects" onClick={toggleMobileMenu} className="nav-link-mobile">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/blog" onClick={toggleMobileMenu} className="nav-link-mobile">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" onClick={toggleMobileMenu} className="nav-link-mobile">
                  Contact Us
                </NavLink>
              </li>

              <li className="nav-item cta-wrapper">
                <Link to="/contact" onClick={toggleMobileMenu} className="btn-cta mobile-cta">
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
