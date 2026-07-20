import { Link } from 'react-router-dom';
import { values, teamStats, teamBenefits } from '../data/valuesData';
import './About.css';

function About() {
  return (
    <div className="about">
      {/* Section 1: Hero Section */}
      <section className="about-hero bg-dark text-white py-5" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <p className="text-primary fw-semibold text-uppercase tracking-wider mb-3" style={{ fontSize: '0.85rem', letterSpacing: '0.3em' }}>
              About Us
            </p>
            <h1 className="display-4 fw-bold mb-4">
              Your construction company – with its own team, nationwide in Germany
            </h1>
            <p className="lead text-gray-light mb-4">
              Prime Land is an owner-managed construction company based in Berlin. For over 15 years, we have been realizing construction, renovation, and expansion projects throughout Germany – with our own team and the commitment to offering every client the highest quality, reliability, and fair conditions.
            </p>
            <p className="lead text-gray-light">
              Our range of services encompasses 19 trades, all of which we cover from a single source: from structural work and interior finishing to facade work, fire protection, and asbestos removal. As a construction company, we consistently rely on in-house production – no subcontractors, no interface losses, but direct responsibility on the construction site.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Values */}
      <section className="about-values py-5" style={{ paddingTop: '60px', paddingBottom: '60px', backgroundColor: '#FAF6F0' }}>
        <div className="container">
          <div className="text-center mb-5">
            <p className="text-muted fw-semibold text-uppercase" style={{ fontSize: '0.85rem', letterSpacing: '0.3em' }}>
              Our values
            </p>
            <h2 className="display-5 fw-bold text-dark mt-3">What we stand for</h2>
          </div>
          <div className="row g-4">
            {values.map(value => (
              <div key={value.id} className="col-md-6 col-lg-3">
                <div className="card h-100 border-1 shadow-sm" style={{ borderColor: '#e5e7eb' }}>
                  <div className="card-body text-center p-4">
                    <div className="mb-3">
                      <svg className="d-inline-block" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#00c5ff" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="1" />
                      </svg>
                    </div>
                    <h3 className="card-title fw-bold text-dark">{value.title}</h3>
                    <p className="card-text text-muted small">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Our Team */}
      <section className="about-team bg-dark text-white py-5" style={{ paddingTop: '60px', paddingBottom: '60px' }}>
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold mb-4">Our own team – no subcontractors</h2>
              <p className="lead text-gray-light mb-4">
                What sets us apart from many companies: We consistently rely on our own permanent team. For you, this means: consistent quality, short decision-making processes, direct responsibility, and a dedicated contact person for your entire project.
              </p>
              <ul className="list-unstyled">
                {teamBenefits.map((benefit, index) => (
                  <li key={index} className="mb-3 d-flex align-items-start gap-3">
                    <svg className="flex-shrink-0 mt-1" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00c5ff" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    <span className="text-gray-light">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-lg-6">
              <img
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&h=400&fit=crop"
                alt="Team working on construction"
                className="img-fluid rounded"
                style={{ height: '400px', objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Statistics */}
      <section className="about-stats py-5" style={{ paddingTop: '60px', paddingBottom: '60px', backgroundColor: '#FAF6F0' }}>
        <div className="container text-center">
          <div className="d-flex align-items-center justify-content-center gap-3 mb-4">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00c5ff" strokeWidth="2">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h2 className="display-5 fw-bold text-dark mb-0">Operating throughout Germany</h2>
          </div>
          <p className="text-muted lead mb-5" style={{ maxWidth: '600px', margin: '0 auto' }}>
            From our base in Berlin, we implement projects throughout Germany. Whether in Northern Germany, the Ruhr area, Southern Germany, or the new federal states – our team is deployed wherever you need us.
          </p>
          <div className="row g-4">
            {teamStats.map(stat => (
              <div key={stat.id} className="col-6 col-md-3 text-center">
                <div style={{ fontSize: '3rem', fontWeight: 'bold', color: '#1a1a1a' }}>
                  {stat.number}
                </div>
                <div className="text-muted fw-semibold small mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: CTA Section */}
      <section className="about-cta bg-dark text-white py-5" style={{ paddingTop: '80px', paddingBottom: '80px', position: 'relative', overflow: 'hidden' }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          userSelect: 'none'
        }}>
          <span style={{
            fontSize: 'clamp(4rem, 12vw, 8rem)',
            fontWeight: 'bold',
            color: 'rgba(255, 255, 255, 0.03)',
            whiteSpace: 'nowrap'
          }}>
            Project planned?
          </span>
        </div>
        <div className="container text-center position-relative" style={{ zIndex: 1 }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 className="display-4 fw-bold mb-3">
              Planning a project? <span className="text-primary">We're ready.</span>
            </h2>
            <p className="lead text-gray-light mb-5">
              Request your free, non-binding quote – transparent, detailed and binding.
            </p>
            <div className="d-flex flex-column flex-sm-row align-items-center justify-content-center gap-3">
              <Link to="/contact" className="btn btn-cta-primary btn-lg fw-semibold px-5">
                Request a quote
              </Link>
              <a href="tel:+491234567890" className="btn btn-outline-light btn-lg fw-semibold px-5">
                📞 Call us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
