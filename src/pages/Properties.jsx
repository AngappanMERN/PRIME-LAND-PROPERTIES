import { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import { properties, propertyTypes } from '../data/propertiesData';

function Properties() {
  const [selectedType, setSelectedType] = useState('All');
  
  const filteredProperties = selectedType === 'All' 
    ? properties 
    : properties.filter(p => p.type === selectedType);

  return (
    <div className="text-[#2a2a2a]">
      {/* Header */}
      <section className="bg-gradient-to-r from-white to-[#f5f5f5] py-16 px-8 text-center border-b-2 border-[#e0e0e0]">
        <h1 className="text-[2.5rem] text-[#0096ff] m-0 mb-4 font-serif font-bold">PROPERTIES</h1>
        <p className="text-base text-[#666666]">Home / Properties</p>
      </section>

      {/* Filter Section */}
      <section className="bg-[#f9f9f9] p-8 mx-8 max-sm:mx-4 mt-8 rounded-lg">
        <div className="flex flex-wrap gap-4 mb-6">
          {propertyTypes.map(type => (
            <button
              key={type}
              className={`px-6 py-2.5 bg-[#e8f4ff] border border-[#e0e0e0] text-[#666666] rounded-md cursor-pointer transition-all duration-300 hover:bg-[#2a2a2a] hover:border-[#0096ff]/60 hover:text-[#0096ff] ${
                selectedType === type
                  ? 'bg-gradient-to-r from-[#0096ff] to-[#0096ff] border-[#0096ff] text-white! hover:text-white!'
                  : ''
              }`}
              onClick={() => setSelectedType(type)}
            >
              {type}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap max-md:flex-col gap-4">
          <input
            type="text"
            placeholder="Search by location..."
            className="flex-1 min-w-[150px] max-md:w-full p-3 bg-[#e8f4ff] border border-[#e0e0e0] text-[#2a2a2a] rounded-md outline-none placeholder:text-[#666666]"
          />
          <select className="flex-1 min-w-[150px] max-md:w-full p-3 bg-[#e8f4ff] border border-[#e0e0e0] text-[#2a2a2a] rounded-md outline-none">
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest First</option>
          </select>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="max-w-[1200px] mx-auto py-16 px-8 max-sm:px-4">
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
          {filteredProperties.map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* No Results */}
      {filteredProperties.length === 0 && (
        <div className="text-center p-12 text-[#666666]">
          <p>No properties found for the selected criteria</p>
        </div>
      )}
    </div>
  );
}

export default Properties;

