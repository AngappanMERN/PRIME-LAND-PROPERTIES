import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Phone, Award, Eye, Layers, Wrench, ShieldCheck, Gem, Handshake } from 'lucide-react';
import './About.css';

function About() {
  return (
    <div className="about">
      {/* Section 1: Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-container">
          <div className="about-hero-grid">
            {/* Left Column: Heading & Paragraphs */}
            <div className="about-hero-left">
              <span className="heritage-badge">OUR HERITAGE</span>
              <h1 className="heritage-title">
                Your Trusted <br />
                Partner in <br />
                <em>Real Estate</em> &amp; <br />
                Construction
              </h1>
              <div className="heritage-divider"></div>
              <p className="heritage-paragraph lead">
                Prime Land Properties is a leading real estate and construction company in Erode, Tamil Nadu, committed to delivering premium property solutions with honesty, quality, and innovation.
              </p>
              <p className="heritage-paragraph sub">
                We help individuals and businesses make confident real estate investments while creating modern developments that enhance communities and lifestyles.
              </p>
            </div>

            {/* Right Column: Cards Grid */}
            <div className="about-hero-right">
              <div className="hero-corner-bracket"></div>
              <div className="hero-card-panel">
                <div className="hero-feature-card">
                  <div className="icon-badge">
                    <Award size={20} />
                  </div>
                  <h3>CUSTOMER-FIRST</h3>
                  <p>Dedicated to excellence and long-term relationships.</p>
                </div>

                <div className="hero-feature-card">
                  <div className="icon-badge">
                    <Eye size={20} />
                  </div>
                  <h3>TRANSPARENT</h3>
                  <p>Clear processes and honest communication at every step.</p>
                </div>

                <div className="hero-feature-card">
                  <div className="icon-badge">
                    <Layers size={20} />
                  </div>
                  <h3>END-TO-END</h3>
                  <p>Property sales, investment guidance, and development.</p>
                </div>

                <div className="hero-feature-card">
                  <div className="icon-badge">
                    <Wrench size={20} />
                  </div>
                  <h3>SOLUTIONS</h3>
                  <p>Professional construction and project management.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Building Legacies Section */}
      <section className="about-legacies-section">
        <div className="about-legacies-container">
          <div className="about-legacies-grid">
            {/* Left Column: Heading & Paragraphs */}
            <div className="about-legacies-left">
              <span className="legacies-badge">PRECISION IN EVERY DETAIL</span>
              <h2 className="legacies-title">
                Building Legacies for Over <br />
                15 Years
              </h2>
              <p className="legacies-paragraph lead">
                Prime Land is an owner-managed construction company based in Berlin. For over 15 years, we have been realizing construction, renovation, and expansion projects throughout Germany – with our own team and the commitment to offering every client the highest quality, reliability, and fair conditions.
              </p>
              <p className="legacies-paragraph sub">
                Our range of services encompasses 19 trades, all of which we cover from a single source: from structural work and interior finishing to facade work, fire protection, and asbestos removal. As a construction company, we consistently rely on in-house production – no subcontractors, no interface losses, but direct responsibility on the construction site.
              </p>
            </div>

            {/* Right Column: 2x2 Image Collage Grid */}
            <div className="about-legacies-right">
              <div className="legacies-image-grid">
                <div className="grid-image-item top-left">
                  <img
                    src="/blueprint_table.png"
                    alt="Architectural Blueprint Planning"
                    className="grid-img"
                  />
                </div>
                <div className="grid-image-item top-right">
                  <img
                    src="/material_samples.png"
                    alt="Premium Material Samples"
                    className="grid-img"
                  />
                </div>
                <div className="grid-image-item bottom-left">
                  <img
                    src="/meeting_architects.png"
                    alt="Project Meeting & Planning"
                    className="grid-img"
                  />
                </div>
                <div className="grid-image-item bottom-right">
                  <img
                    src="/night_construction.png"
                    alt="Construction Night View"
                    className="grid-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Values Section */}
      <section className="about-values-section">
        <div className="about-values-container">
          <div className="values-header">
            <span className="values-badge">CORE VALUES</span>
            <h2 className="values-title">What we stand for</h2>
          </div>

          <div className="values-grid">
            {/* Card 1: Reliable */}
            <div className="value-card">
              <div className="value-card-header">
                <div className="value-icon-box">
                  <ShieldCheck size={26} color="#0084ff" />
                </div>
                <h3 className="value-card-title">Reliable</h3>
              </div>
              <p className="value-card-desc">
                Punctual and reliable – you can count on us for every milestone and deadline.
              </p>
            </div>

            {/* Card 2: Quality */}
            <div className="value-card">
              <div className="value-card-header">
                <div className="value-icon-box">
                  <Gem size={26} color="#0084ff" />
                </div>
                <h3 className="value-card-title">Quality</h3>
              </div>
              <p className="value-card-desc">
                Highest quality standards in materials and workmanship, ensuring longevity and beauty.
              </p>
            </div>

            {/* Card 3: Experience */}
            <div className="value-card">
              <div className="value-card-header">
                <div className="value-icon-box">
                  <Award size={26} color="#0084ff" />
                </div>
                <h3 className="value-card-title">Experience</h3>
              </div>
              <p className="value-card-desc">
                Over 15 years of deep expertise in all trades of the specialized construction industry.
              </p>
            </div>

            {/* Card 4: Fair */}
            <div className="value-card">
              <div className="value-card-header">
                <div className="value-icon-box">
                  <Handshake size={26} color="#0084ff" />
                </div>
                <h3 className="value-card-title">Fair</h3>
              </div>
              <p className="value-card-desc">
                Transparent pricing, open communication, and fair partnership at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Internal Expertise Section */}
      <section className="about-expertise-section">
        <div className="about-expertise-container">
          <div className="about-expertise-grid">
            {/* Left Column: Heading, Description & Bullet List */}
            <div className="about-expertise-left">
              <span className="expertise-badge">INTERNAL EXPERTISE</span>
              <h2 className="expertise-title">
                Our own team — no <br />
                subcontractors
              </h2>
              <p className="expertise-paragraph">
                What sets us apart from many companies: We consistently rely on our own permanent team. For you, this means: consistent quality, short decision-making processes, direct responsibility, and a dedicated contact person for your entire project.
              </p>

              <div className="expertise-bullets">
                <div className="expertise-bullet-item">
                  <CheckCircle2 size={20} color="#0185eb" className="bullet-icon" />
                  <span>Over 50 permanent skilled workers</span>
                </div>
                <div className="expertise-bullet-item">
                  <CheckCircle2 size={20} color="#0185eb" className="bullet-icon" />
                  <span>Direct quality control on the construction site</span>
                </div>
                <div className="expertise-bullet-item">
                  <CheckCircle2 size={20} color="#0185eb" className="bullet-icon" />
                  <span>No subcontractors — no interface losses</span>
                </div>
                <div className="expertise-bullet-item">
                  <CheckCircle2 size={20} color="#0185eb" className="bullet-icon" />
                  <span>One contact person for all trades</span>
                </div>
              </div>
            </div>

            {/* Right Column: High Quality Worker Image */}
            <div className="about-expertise-right">
              <div className="expertise-image-wrapper">
                <img
                  src="/welding_worker.png"
                  alt="Internal Expertise Construction Worker"
                  className="expertise-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Trusted Across Tamil Nadu & Statistics */}
      <section className="about-trusted-section">
        <div className="about-trusted-container">
          <div className="trusted-header">
            <div className="trusted-icon-circle">
              <MapPin size={22} color="#0084ff" />
            </div>
            <h2 className="trusted-title">Trusted Across Tamil Nadu</h2>
            <p className="trusted-description">
              We proudly serve clients across <strong>Tamil Nadu</strong>, providing trusted real estate and construction solutions with a commitment to quality, transparency, and customer satisfaction. Whether you're investing, buying your dream property, or planning a construction project, our experienced team is here to guide you every step of the way.
            </p>
          </div>

          <div className="trusted-stats-grid">
            <div className="stat-card">
              <h3 className="stat-number">500+</h3>
              <p className="stat-label">PROJECTS REALIZED</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">15+</h3>
              <p className="stat-label">YEARS OF EXPERIENCE</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">50+</h3>
              <p className="stat-label">EMPLOYEES</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number">100%</h3>
              <p className="stat-label">TAMIL NADU COVERAGE</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Section */}
      <section className="about-cta-section">
        <div className="cta-watermark">PROJECTS</div>
        <div className="about-cta-container">
          <h2 className="cta-title">
            Planning a project? <span className="cta-title-highlight">We're ready.</span>
          </h2>
          <p className="cta-description">
            Request your free, non-binding quote – transparent, detailed and binding.
          </p>
          <div className="cta-buttons-group">
            <Link to="/properties" className="cta-btn-primary">
              EXPLORE PROPERTIES
            </Link>
            <Link to="/contact" className="cta-btn-secondary">
              <Phone size={18} className="cta-phone-icon" />
              <span>CONTACT US</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
