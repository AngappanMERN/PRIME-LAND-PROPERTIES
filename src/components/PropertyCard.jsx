import { Link } from 'react-router-dom';
import { Bed, MapPin, Ruler, ShowerHead } from 'lucide-react';
import './PropertyCard.css';

function PropertyCard({ property }) {
  return (
    <Link to={`/property/${property.id}`} className="property-card">
      <div className="property-image-wrapper">
        <img src={property.image} alt={property.name} className="property-image" />
        {property.tag && <span className="property-tag">{property.tag}</span>}
      </div>
      <div className="property-content">
        <h3>{property.name}</h3>
        <p className="property-location"><MapPin size={18} className="me-1" />{property.location}</p>
        <p className="property-price">{property.price}</p>
        <div className="property-details">
          <span><Bed size={18} className="me-1" />{property.beds || 'N/A'} Beds</span>
          <span><ShowerHead size={18} className="me-1" />{property.baths || 'N/A'} Baths</span>
          <span><Ruler size={18} className="me-1" />{property.area}</span>
        </div>
        <button className="property-btn">VIEW DETAILS</button>
      </div>
    </Link>
  );
}

export default PropertyCard;
