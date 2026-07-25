import { Link } from 'react-router-dom';
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
        <p className="property-location">📍 {property.location}</p>
        <p className="property-price">{property.price}</p>
        <div className="property-details">
          <span>🛏️ {property.beds || 'N/A'} Beds</span>
          <span>🚿 {property.baths || 'N/A'} Baths</span>
          <span>📐 {property.area}</span>
        </div>
        <button className="property-btn">VIEW DETAILS</button>
      </div>
    </Link>
  );
}

export default PropertyCard;
