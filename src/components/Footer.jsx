import { Link } from 'react-router-dom';
import { Camera, Mail, MapPin, Phone, Share2 } from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#f9f9f9] text-[#2a2a2a] pt-12 pb-4">
      <div className="max-w-[1200px] mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
        <div className="flex flex-col">
          <Link to="/" className="flex items-center transition-transform duration-300 hover:scale-102">
            <img src="/primeland-logo.png" alt="Prime Land Logo" className="h-16 w-auto object-contain mb-4" />
          </Link>
          <p className="text-[0.9rem] leading-relaxed mb-4 text-[#2a2a2a]">
            Prime by name, Prime by property. Your trusted real estate partner.
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#e8f4ff] border border-[#0096ff] text-[#0096ff] transition-all duration-300 hover:bg-[#0096ff] hover:border-[#0096ff] hover:text-white"
            >
              <Share2 size={18} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-[36px] h-[36px] flex items-center justify-center rounded-full bg-[#e8f4ff] border border-[#0096ff] text-[#0096ff] transition-all duration-300 hover:bg-[#0096ff] hover:border-[#0096ff] hover:text-white"
            >
              <Camera size={18} />
            </a>
          </div>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[#0096ff] font-serif font-bold text-base tracking-wider uppercase mb-4">QUICK LINKS</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><Link to="/" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">Home</Link></li>
            <li><Link to="/about" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">About Us</Link></li>
            <li><Link to="/properties" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">Properties</Link></li>
            <li><Link to="/services" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">Services</Link></li>
            <li><Link to="/blog" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">Blog</Link></li>
            <li><Link to="/contact" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">Contact Us</Link></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[#0096ff] font-serif font-bold text-base tracking-wider uppercase mb-4">OUR SERVICES</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
            <li><a href="#services" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">Buying Assistance</a></li>
            <li><a href="#services" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">Selling Assistance</a></li>
            <li><a href="#services" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">Rental Solutions</a></li>
            <li><a href="#services" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">Legal Support</a></li>
            <li><a href="#services" className="text-[#2a2a2a] no-underline transition-colors duration-300 hover:text-[#0096ff]">Investment Advisory</a></li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h4 className="text-[#0096ff] font-serif font-bold text-base tracking-wider uppercase mb-4">CONTACT US</h4>
          <ul className="list-none p-0 m-0 flex flex-col gap-4">
            <li className="flex items-start gap-3 leading-relaxed">
              <Phone size={18} className="text-[#0096ff] shrink-0 mt-1" />
              <a href="tel:+919087123459" className="text-[#2a2a2a] no-underline text-[15px] transition-colors duration-300 hover:text-[#0096ff]">
                +91 9087 123459
              </a>
            </li>

            <li className="flex items-start gap-3 leading-relaxed">
              <Phone size={18} className="text-[#0096ff] shrink-0 mt-1" />
              <a href="tel:+917339033733" className="text-[#2a2a2a] no-underline text-[15px] transition-colors duration-300 hover:text-[#0096ff]">
                +91 7339 033733
              </a>
            </li>

            <li className="flex items-start gap-3 leading-relaxed">
              <FaWhatsapp size={18} className="text-[#25D366] shrink-0 mt-1" />
              <a href="https://wa.me/918883380089" target="_blank" rel="noopener noreferrer" className="text-[#2a2a2a] no-underline text-[15px] transition-colors duration-300 hover:text-[#0096ff]">
                +91 88833 80089
              </a>
            </li>

            <li className="flex items-start gap-3 leading-relaxed">
              <Mail size={18} className="text-[#0096ff] shrink-0 mt-1" />
              <a href="mailto:primelandproperties@gmail.com" className="text-[#2a2a2a] no-underline text-[15px] transition-colors duration-300 hover:text-[#0096ff]">
                primelandproperties2@gmail.com
              </a>
            </li>

            <li className="flex items-start gap-3 leading-relaxed">
              <MapPin size={18} className="text-[#0096ff] shrink-0 mt-1" />
              <span className="text-[#2a2a2a] text-[15px]">
                mettukadai road, Nasiyanur, Erode, Tamil Nadu 638107
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#e0e0e0] pt-4 max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center flex-wrap gap-4 text-center md:text-left">
        <p className="text-[0.85rem] text-[#2a2a2a]">&copy; 2025 Prime Land Properties. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="text-[#2a2a2a] no-underline text-[0.85rem] transition-colors duration-300 hover:text-[#0096ff]">
            Privacy Policy
          </Link>
          <Link to="#" className="text-[#2a2a2a] no-underline text-[0.85rem] transition-colors duration-300 hover:text-[#0096ff]">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

