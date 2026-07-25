import { Link } from 'react-router-dom';
import { Camera, Mail, MapPin, Phone, Share2 } from 'lucide-react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-102">
          <img src="/primeland-logo.png" alt="Prime Land Logo" className="h-16 w-auto object-contain mb-4" />
        </Link>
          <p>Prime by name, Prime by property. Your trusted real estate partner.</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook"><Share2 size={18} /></a>
            <a href="#" aria-label="Instagram"><Camera size={18} /></a>
          </div>
        </div>

        <div className="footer-column">
          <h4>QUICK LINKS</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>OUR SERVICES</h4>
          <ul>
            <li><a href="#services">Buying Assistance</a></li>
            <li><a href="#services">Selling Assistance</a></li>
            <li><a href="#services">Rental Solutions</a></li>
            <li><a href="#services">Legal Support</a></li>
            <li><a href="#services">Investment Advisory</a></li>
          </ul>
        </div>

        <div className="footer-column">
  <h4>CONTACT US</h4>

  <ul className="contact-list">

    <li>
      <Phone size={18} className="contact-icon" />
      <a href="tel:+918833800089">+91 8833 80089</a>
    </li>

    <li>
      <Phone size={18} className="contact-icon" />
      <a href="tel:+919087023459">+91 9087 023459</a>
    </li>

    <li>
      <Mail size={18} className="contact-icon" />
      <a href="mailto:primelandproperties@gmail.com">
        primelandproperties@gmail.com
      </a>
    </li>

    <li>
      <MapPin size={18} className="contact-icon" />
      <span>Coimbatore, Tamil Nadu, India</span>
    </li>

  </ul>
</div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Prime Land Properties. All Rights Reserved.</p>
        <div className="footer-links">
          <Link to="#">Privacy Policy</Link>
          <Link to="#">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
