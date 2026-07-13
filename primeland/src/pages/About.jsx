import TeamCard from '../components/TeamCard';
import { teamMembers } from '../data/teamData';
import './About.css';

function About() {
  return (
    <div className="about">
      {/* Header */}
      <section className="about-header">
        <h1>ABOUT PRIME LAND PROPERTIES</h1>
        <p>Your Trusted Partner in Real Estate</p>
      </section>

      {/* About Content */}
      <section className="about-content">
        <div className="about-text">
          <h2>Who We Are</h2>
          <p>Prime Land Properties is a trusted real estate company dedicated to helping you find the right property. With over 5 years of experience in the industry, we've assisted hundreds of clients in finding their dream homes and making smart investment decisions.</p>
          
          <div className="about-highlights">
            <div className="highlight">
              <span>✓</span>
              <h4>Trusted & Transparent Services</h4>
            </div>
            <div className="highlight">
              <span>✓</span>
              <h4>Expert Team Support</h4>
            </div>
            <div className="highlight">
              <span>✓</span>
              <h4>Wide Property Portfolio</h4>
            </div>
            <div className="highlight">
              <span>✓</span>
              <h4>Expert Team & Personalized Service</h4>
            </div>
          </div>
        </div>

        <div className="about-image">
          <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop" alt="About Us" />
        </div>
      </section>

      {/* Our Mission */}
      <section className="mission-section">
        <div className="mission">
          <h3>OUR MISSION</h3>
          <p>To provide transparent, reliable, and personalized real estate services that help our clients achieve their property goals with confidence and peace of mind.</p>
        </div>
        <div className="mission">
          <h3>OUR VISION</h3>
          <p>To be the most trusted and customer-centric real estate partner in the region, known for integrity, expertise, and exceptional service quality.</p>
        </div>
        <div className="mission">
          <h3>OUR VALUES</h3>
          <p>We believe in transparency, integrity, customer satisfaction, and continuous improvement in everything we do. Your trust is our most valuable asset.</p>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>OUR TEAM</h2>
        <p>Meet the experienced professionals dedicated to your success</p>
        <div className="team-grid">
          {teamMembers.map(member => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Us?</h2>
        <div className="reasons-grid">
          <div className="reason-box">
            <h4>💼 Professional Expertise</h4>
            <p>Our team brings years of industry experience and deep market knowledge</p>
          </div>
          <div className="reason-box">
            <h4>📋 Legal Support</h4>
            <p>Complete legal assistance ensures smooth and secure transactions</p>
          </div>
          <div className="reason-box">
            <h4>🎯 Personalized Service</h4>
            <p>Every client receives customized attention and tailored solutions</p>
          </div>
          <div className="reason-box">
            <h4>⚡ Fast Processing</h4>
            <p>Quick and efficient handling of all property-related matters</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
