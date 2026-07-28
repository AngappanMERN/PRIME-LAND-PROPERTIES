import { Link } from 'react-router-dom';
import { Bed, MapPin, Ruler, ShowerHead } from 'lucide-react';

function PropertyCard({ property }) {
  return (
    <Link
      to={`/property/${property.id}`}
      className="group block bg-white rounded-lg overflow-hidden border border-[#e0e0e0] no-underline text-inherit transition-all duration-300 hover:-translate-y-[10px] hover:shadow-[0_15px_40px_rgba(0,150,255,0.15)] hover:border-[#0096ff]"
    >
      <div className="relative overflow-hidden h-[250px] max-md:h-[200px]">
        <img
          src={property.image}
          alt={property.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {property.tag && (
          <span className="absolute top-4 right-4 bg-gradient-to-r from-[#ff1493] to-[#ff69b4] text-white px-4 py-2 rounded-full text-[0.8rem] font-bold">
            {property.tag}
          </span>
        )}
      </div>
      <div className="p-6 text-[#2a2a2a]">
        <h3 className="text-[#0096ff] font-serif text-[1.1rem] mb-2">{property.name}</h3>
        <p className="text-[#666666] text-[0.9rem] my-2 flex items-center gap-1">
          <MapPin size={18} className="shrink-0" />
          {property.location}
        </p>
        <p className="text-[#00ff00] text-[1.3rem] font-bold my-3">{property.price}</p>
        <div className="flex flex-wrap gap-4 text-[0.85rem] text-[#666666] my-4">
          <span className="flex items-center gap-1"><Bed size={18} className="shrink-0" />{property.beds || 'N/A'} Beds</span>
          <span className="flex items-center gap-1"><ShowerHead size={18} className="shrink-0" />{property.baths || 'N/A'} Baths</span>
          <span className="flex items-center gap-1"><Ruler size={18} className="shrink-0" />{property.area}</span>
        </div>
        <button className="w-full p-3 bg-gradient-to-r from-[#0096ff] to-[#00d4ff] text-white border-0 rounded-md font-bold cursor-pointer transition-all duration-300 hover:from-[#00d4ff] hover:to-[#ff1493]">
          VIEW DETAILS
        </button>
      </div>
    </Link>
  );
}

export default PropertyCard;

