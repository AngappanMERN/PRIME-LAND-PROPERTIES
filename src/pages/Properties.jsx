import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties, propertyTypes } from '../data/propertiesData';
import './Properties.css';

function Properties() {
  const [selectedType, setSelectedType] = useState('All');
  
  const filteredProperties = selectedType === 'All' 
    ? properties 
    : properties.filter(p => p.type === selectedType);

  return (
    <div className="properties-page">
      {/* Header */}
      <section className="properties-header">
        <h1>PROPERTIES</h1>
        <p>Home / Properties</p>
      </section>

      {/* Filter Section */}
      <section className="properties-filter">
        <div className="filter-buttons">
          {propertyTypes.map(type => (
            <button
              key={type}
              className={`filter-btn ${selectedType === type ? 'active' : ''}`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="advanced-filters">
          <input type="text" placeholder="Search by location..." />
          <select>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="properties-content">
        <div className="properties-grid">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* No Results */}
      {filteredProperties.length === 0 && (
        <div className="no-results">
          <p>No properties found for the selected criteria</p>
        </div>
      )}
    </div>
  );
}

export default Properties;
