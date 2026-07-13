import ServiceCard from '../components/ServiceCard';
import { services } from '../data/servicesData';
import './Services.css';

function Services() {
  return (
    <div className="services-page">
      {/* Header */}
      <section className="services-header">
        <h1>OUR SERVICES</h1>
        <p>Home / Services</p>
      </section>

      {/* Services Grid */}
      <section className="services-content">
        <div className="services-grid">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Detailed Services */}
      <section className="services-detailed">
        <h2>What We Offer</h2>
        
        <div className="service-detail">
          <div className="detail-image">
            <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop" alt="Buying" />
          </div>
          <div className="detail-text">
            <h3>🏠 Buying Assistance</h3>
            <p>Find your perfect property with expert guidance. Our experienced agents will help you navigate the market, evaluate properties, and negotiate the best deals.</p>
            <ul>
              <li>Property Search & Evaluation</li>
              <li>Market Analysis</li>
              <li>Price Negotiation</li>
              <li>Documentation Support</li>
            </ul>
          </div>
        </div>

        <div className="service-detail reverse">
          <div className="detail-image">
            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop" alt="Selling" />
          </div>
          <div className="detail-text">
            <h3>💼 Selling Assistance</h3>
            <p>Get the best value for your property. We provide comprehensive marketing and sales strategies to attract qualified buyers.</p>
            <ul>
              <li>Property Marketing</li>
              <li>Buyer Screening</li>
              <li>Deal Negotiation</li>
              <li>Legal Compliance</li>
            </ul>
          </div>
        </div>

        <div className="service-detail">
          <div className="detail-image">
            <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&h=400&fit=crop" alt="Rental" />
          </div>
          <div className="detail-text">
            <h3>🏢 Rental Solutions</h3>
            <p>Whether you're looking to rent or lease out your property, we have the right solutions for you.</p>
            <ul>
              <li>Rental Property Management</li>
              <li>Tenant Screening</li>
              <li>Lease Agreement</li>
              <li>Maintenance Support</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Investment Benefits */}
      <section className="benefits">
        <h2>Why Invest in Real Estate?</h2>
        <div className="benefits-grid">
          <div className="benefit-box">
            <h4>💰 Building Wealth</h4>
            <p>Real estate is one of the most reliable ways to build long-term wealth and financial security</p>
          </div>
          <div className="benefit-box">
            <h4>📈 Appreciation</h4>
            <p>Property values typically appreciate over time, providing excellent returns on investment</p>
          </div>
          <div className="benefit-box">
            <h4>💵 Regular Income</h4>
            <p>Rental properties provide consistent monthly income while building equity</p>
          </div>
          <div className="benefit-box">
            <h4>🏦 Leverage</h4>
            <p>Use borrowed funds to invest in real estate and multiply your returns</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
