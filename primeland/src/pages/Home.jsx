import { Link } from 'react-router-dom';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        {/* <div className="hero-content">
          <h1>PRIME BY NAME,<br />PRIME BY PROPERTY</h1>
          <p>Discover premium properties that match your lifestyle and investment goals</p>
          <Link to="/contact" className="cta-button">GET IN TOUCH</Link>
        </div> */}
        <video autoPlay muted loop className="hero-video">
          <source src="/home-banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* <div className="hero-background">
          <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=600&fit=crop" alt="Hero" />
        </div> */}
      </section>

      {/* Features Banner */}
      <section className="features-banner">
        <div className="features-container">
          <div className="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <h4>Reliable</h4>
          </div>
          <div className="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.596-2.684a.5.5 0 0 0-.648 0l-3.596 2.684a.5.5 0 0 1-.81-.47l1.515-8.526" />
              <circle cx="12" cy="8" r="6" />
            </svg>
            <h4>Quality</h4>
          </div>
          <div className="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <h4>Experience</h4>
          </div>
          <div className="feature-item">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feature-icon-svg">
              <path d="m11 17 2 2a1 1 0 1 0 3-3l-1.5-1.5" />
              <path d="m24 8-2.5 2.5" />
              <path d="M12.2 6.2 16 10l4.3-4.3a2.5 2.5 0 0 0 0-3.5 2.5 2.5 0 0 0-3.5 0L12.2 6.2Z" />
              <path d="M14.5 8.5 11 12" />
              <path d="M18 12.5 14.5 16" />
              <path d="M11.5 15.5 8 19" />
              <path d="M15.5 11.5 12 15" />
              <path d="M4 14.5 7.5 11" />
              <path d="M10 8.5 6.5 12" />
              <path d="M2.5 12.5 6 16" />
              <path d="M18.5 7.5 15 11" />
            </svg>
            <h4>Fair</h4>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div className="stat-item">
            <h3>500+</h3>
            <p>Projects realized</p>
          </div>
          <div className="stat-item">
            <h3>15+</h3>
            <p>Years of experience</p>
          </div>
          <div className="stat-item">
            <h3>50+</h3>
            <p>Employees</p>
          </div>
          <div className="stat-item">
            <h3>100%</h3>
            <p>Operating throughout Germany</p>
          </div>
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
