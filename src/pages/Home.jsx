import { Link } from 'react-router-dom';
import { Award, Clock, Handshake, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { advantages } from '../data/advantagesData';
import './Home.css';

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <video autoPlay muted loop className="hero-video">
          <source src="/home-banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Features Banner */}
      <section className="features-banner">
        <div className="features-container">
          <div className="feature-item">
            <Shield size={40} className="feature-icon-svg" />
            <h4>Reliable</h4>
          </div>
          <div className="feature-item">
            <Award size={40} className="feature-icon-svg" />
            <h4>Quality</h4>
          </div>
          <div className="feature-item">
            <Clock size={40} className="feature-icon-svg" />
            <h4>Experience</h4>
          </div>
          <div className="feature-item">
            <Handshake size={40} className="feature-icon-svg" />
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

      {/* Your advantages Section */}
      <section className="advantages-section">
        <div className="advantages-container">
          <div className="advantages-header">
            <span className="advantages-label">Your advantages</span>
            <h2 className="advantages-title">Why Prime Land?</h2>
          </div>
          <div className="advantages-grid">
            {advantages.map(advantage => (
              <div key={advantage.id} className="advantage-card">
                <img 
                  src="https://skarosoft.com/sinova/wp-content/uploads/2026/07/points.svg" 
                  alt="check" 
                  className="advantage-icon"
                />
                <h3 className="advantage-card-title">{advantage.title}</h3>
                <p className="advantage-card-description">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
        {/* EMI Calculator Section */}
     
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
