import { Link } from "react-router-dom";

function ServiceCard({ service }) {
  return (
    <Link
      to={service.path}
      className="group flex flex-col bg-white overflow-hidden no-underline h-full transition-all duration-350 ease-in-out border border-[rgba(1,133,235,0.12)] shadow-[0_8px_24px_rgba(15,23,42,0.06)] rounded-lg hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
    >
      <div className="w-full h-[250px] overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
        />
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-serif text-[28px] font-bold text-[#1d1d1d] mb-[18px] leading-[1.3] line-clamp-2">
          {service.title}
        </h3>

        <p className="text-[#555555] text-base leading-[1.8] mb-[25px] line-clamp-3 font-sans">
          {service.description}
        </p>

        <span className="mt-auto text-primary font-semibold transition-colors duration-300 group-hover:text-primary-hover">
          Explore Service →
        </span>
      </div>
    </Link>
  );
}

export default ServiceCard;
