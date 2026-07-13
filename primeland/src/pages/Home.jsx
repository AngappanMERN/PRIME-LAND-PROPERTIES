import { Link } from 'react-router-dom';
import PropertyCard from '../components/PropertyCard';
import ServiceCard from '../components/ServiceCard';
import { properties } from '../data/propertiesData';
import { services } from '../data/servicesData';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>PRIME BY NAME,<br />PRIME BY PROPERTY</h1>
          <p>Discover premium properties that match your lifestyle and investment goals</p>
          <Link to="/properties" className="cta-button">SEARCH PROPERTY</Link>
        </div>
        <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop" alt="Hero" />
        </div>
      </section>

      {/* Filter Section */}
      <section className="filter-section">
        <div className="filter-container">
          <div className="filter-group">
            <label>LOCATION</label>
            <select>
              <option>Select Location</option>
              <option>Downtown</option>
              <option>Suburb</option>
              <option>Business District</option>
            </select>
          </div>
          <div className="filter-group">
            <label>PROPERTY TYPE</label>
            <select>
              <option>All Type</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Land</option>
            </select>
          </div>
          <div className="filter-group">
            <label>BUDGET</label>
            <select>
              <option>Min Price - Max Price</option>
              <option>0 - 50L</option>
              <option>50L - 1 CR</option>
              <option>1 CR+</option>
            </select>
          </div>
          <button className="search-btn">SEARCH PROPERTY</button>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="featured-properties">
        <h2>FEATURED PROPERTIES</h2>
        <div className="properties-grid">
          {properties.slice(0, 3).map(property => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>OUR SERVICES</h2>
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-box">
          <h3>150+</h3>
          <p>Happy Customers</p>
        </div>
        <div className="stat-box">
          <h3>100+</h3>
          <p>Projects</p>
        </div>
        <div className="stat-box">
          <h3>10+</h3>
          <p>Locations</p>
        </div>
        <div className="stat-box">
          <h3>5+</h3>
          <p>Years of Excellence</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <h2>Ready to Find Your Dream Property?</h2>
        <p>Let's help you find your next perfect investment opportunity</p>
        <Link to="/contact" className="cta-button">GET IN TOUCH</Link>
      </section>
    </div>
  );
}

export default Home;
