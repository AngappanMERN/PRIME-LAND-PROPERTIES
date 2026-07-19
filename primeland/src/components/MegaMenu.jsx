import { NavLink } from 'react-router-dom';
import './MegaMenu.css';

function MegaMenu({ services, isOpen, onClose, isMobile }) {
  if (!isOpen) return null;

  if (isMobile) {
    return (
      <div className="mobile-mega">
        {services.map((service) => (
          <NavLink
            key={service.id}
            to={service.path}
            onClick={onClose}
            className={({ isActive }) => (isActive ? 'mobile-active' : '')}
          >
            {service.title}
          </NavLink>
        ))}
      </div>
    );
  }

  return (
    <div className={`mega-menu ${isOpen ? 'open' : ''}`} role="menu" onMouseLeave={onClose}>
      <div className="mega-row">
        {services.map((service) => (
          <NavLink
            key={service.id}
            to={service.path}
            onClick={onClose}
            className={({ isActive }) => `service-link ${isActive ? 'active' : ''}`}
          >
            {service.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;
