import { NavLink } from 'react-router-dom';

function MegaMenu({ services, isOpen, onClose, isMobile }) {
  if (!isOpen) return null;

  if (isMobile) {
    return (
      <div className="pl-4 mt-2 bg-[#fbf9f6] border-l-3 border-[#e5dec9] rounded-r-md flex flex-col py-1">
        {services.map((service) => (
          <NavLink
            key={service.id}
            to={service.path}
            onClick={onClose}
            className={({ isActive }) =>
              `block py-2 text-[#6b6b6b] uppercase font-bold text-[0.85rem] transition-colors ${
                isActive ? 'text-[#00c5ff] bg-[rgba(0,197,255,0.08)] rounded-md pl-2' : ''
              }`
            }
          >
            {service.title}
          </NavLink>
        ))}
      </div>
    );
  }

  return (
    <div
      className="absolute top-full left-[60%] max-md:left-4 max-md:w-[calc(100%-32px)] max-md:translate-x-0 -translate-x-[45%] w-[600px] bg-[#FAF6F0] border border-[#e5dec9] shadow-[0_12px_30px_rgba(0,0,0,0.08)] rounded-xl p-[18px] z-[1100] transition-all duration-180 ease-in-out opacity-100 scale-100 pointer-events-auto"
      role="menu"
      onMouseLeave={onClose}
    >
      <div className="grid grid-cols-2 gap-x-6 gap-y-3">
        {services.map((service) => (
          <NavLink
            key={service.id}
            to={service.path}
            onClick={onClose}
            className={({ isActive }) =>
              `block px-3 py-2 text-[#333333] font-bold uppercase text-[0.85rem] border-l-3 border-transparent rounded transition-all duration-120 hover:text-[#00c5ff] hover:border-l-[#00c5ff] hover:bg-[rgba(0,197,255,0.08)] ${
                isActive ? 'text-[#00c5ff] border-l-[#00c5ff] bg-[#00c5ff14]' : ''
              }`
            }
          >
            {service.title}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default MegaMenu;

