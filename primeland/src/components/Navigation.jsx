import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <Link to="/" className="nav-logo">
          <span className="logo-icon">🏛️</span>
          PRIME LAND PROPERTIES
        </Link>
        
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-link">HOME</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">ABOUT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/properties" className="nav-link">PROPERTIES</Link>
          </li>
          <li className="nav-item">
            <Link to="/services" className="nav-link">SERVICES</Link>
          </li>
          <li className="nav-item">
            <Link to="/projects" className="nav-link">PROJECTS</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link">BLOG</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">CONTACT US</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link btn-cta">GET IN TOUCH</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
