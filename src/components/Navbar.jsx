import { useState, useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { services } from '../data/services';
import MegaMenu from './MegaMenu';

function Navbar() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const timeoutRef = useRef(null);

  const getLinkClass = ({ isActive }) =>
    `text-[#2a2a2a] text-[0.9rem] xl:text-[0.9rem] max-[1200px]:text-[0.82rem] font-semibold uppercase py-2 tracking-[0.5px] border-b-2 border-transparent transition-colors duration-250 whitespace-nowrap hover:text-primary hover:border-b-primary ${
      isActive ? 'text-primary border-b-primary' : ''
    }`;

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
    <nav className="sticky top-0 left-0 w-full bg-white z-[1000] shadow-[0_2px_10px_rgba(0,0,0,0.05)] border-b border-[#eaeaea]">
      <div className="max-w-[1200px] mx-auto px-6 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center text-decoration-none focus:outline-none">
          <img
            src="/primeland-new-logo.png"
            alt="Prime Land Logo"
            className="h-[75px] max-[1200px]:h-[60px] w-auto object-contain transition-transform duration-300 hover:scale-[1.03]"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-16 max-[1200px]:gap-6 list-none m-0 p-0">
          <li className="relative list-none">
            <NavLink to="/" className={getLinkClass}>
              Home
            </NavLink>
          </li>
          <li className="relative list-none">
            <NavLink to="/about" className={getLinkClass}>
              About Us
            </NavLink>
          </li>

          {/* Services with Mega Menu */}
          <li
            className="relative list-none"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex items-center gap-1 text-[#2a2a2a] text-[0.9rem] max-[1200px]:text-[0.82rem] font-semibold uppercase py-2 tracking-[0.5px] border-b-2 border-transparent transition-colors duration-250 whitespace-nowrap hover:text-primary hover:border-b-primary ${
                  isActive || isHovered ? 'text-primary border-b-primary' : ''
                }`
              }
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isHovered ? 'rotate-180 text-primary' : 'text-[#6c757d]'
                }`}
                aria-hidden="true"
              />
            </NavLink>
            <MegaMenu services={services} isOpen={isHovered} onClose={() => setIsHovered(false)} isMobile={false} />
          </li>

          <li className="relative list-none">
            <NavLink to="/projects" className={getLinkClass}>
              Projects
            </NavLink>
          </li>
          <li className="relative list-none">
            <NavLink to="/contact" className={getLinkClass}>
              Contact Us
            </NavLink>
          </li>

          <li className="relative list-none">
            <Link
              to="/contact"
              className="bg-primary text-white! px-5.5 py-2.5 max-[1200px]:px-4 max-[1200px]:py-2 max-[1200px]:text-[0.82rem] rounded-md font-semibold text-[0.9rem] inline-block whitespace-nowrap transition-all duration-200 hover:bg-primary-hover hover:shadow-[0_4px_14px_rgba(1,133,235,0.3)] focus:outline-none"
            >
              Get In Touch
            </Link>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="lg:hidden bg-transparent border-none text-[#2a2a2a] cursor-pointer p-2 flex items-center justify-center focus:outline-none"
          aria-label="Toggle navigation menu"
          onClick={toggleMobileMenu}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-[#eaeaea] shadow-[0_10px_25px_rgba(0,0,0,0.1)] absolute top-full left-0 w-full z-[999]">
          <div className="px-6 py-5">
            <ul className="list-none p-0 m-0 flex flex-col gap-3">
              <li className="relative list-none">
                <NavLink
                  to="/"
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `block py-2 font-semibold text-base text-[#2a2a2a] no-underline ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="relative list-none">
                <NavLink
                  to="/about"
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `block py-2 font-semibold text-base text-[#2a2a2a] no-underline ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  About Us
                </NavLink>
              </li>

              {/* Mobile Services Accordion */}
              <li className="relative list-none">
                <button
                  type="button"
                  className="w-full flex items-center justify-between bg-transparent border-none py-2 text-base font-semibold text-[#2a2a2a] cursor-pointer focus:outline-none"
                  onClick={() => setIsMobileServicesOpen((s) => !s)}
                  aria-expanded={isMobileServicesOpen}
                >
                  <span>Services</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${
                      isMobileServicesOpen ? 'rotate-180 text-primary' : 'text-[#6c757d]'
                    }`}
                  />
                </button>

                <MegaMenu services={services} isOpen={isMobileServicesOpen} onClose={toggleMobileMenu} isMobile={true} />
              </li>

              <li className="relative list-none">
                <NavLink
                  to="/projects"
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `block py-2 font-semibold text-base text-[#2a2a2a] no-underline ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  Projects
                </NavLink>
              </li>
              <li className="relative list-none">
                <NavLink
                  to="/blog"
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `block py-2 font-semibold text-base text-[#2a2a2a] no-underline ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li className="relative list-none">
                <NavLink
                  to="/contact"
                  onClick={toggleMobileMenu}
                  className={({ isActive }) =>
                    `block py-2 font-semibold text-base text-[#2a2a2a] no-underline ${
                      isActive ? 'text-primary' : ''
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </li>

              <li className="relative list-none pt-2">
                <Link
                  to="/contact"
                  onClick={toggleMobileMenu}
                  className="w-full text-center bg-primary text-white! px-5.5 py-2.5 rounded-md font-semibold text-[0.9rem] block whitespace-nowrap transition-all duration-200 hover:bg-primary-hover"
                >
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

