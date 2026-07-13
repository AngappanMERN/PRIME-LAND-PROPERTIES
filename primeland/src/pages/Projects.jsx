import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page">
      {/* Header */}
      <section className="projects-header">
        <h1>OUR PROJECTS</h1>
        <p>Home / Projects</p>
      </section>

      {/* Project Stats */}
      <section className="project-stats">
        <div className="stat">
          <h3>500+</h3>
          <p>Total Units</p>
        </div>
        <div className="stat">
          <h3>₹500+CR</h3>
          <p>Project Value</p>
        </div>
        <div className="stat">
          <h3>15+</h3>
          <p>Ongoing Projects</p>
        </div>
        <div className="stat">
          <h3>98%</h3>
          <p>Customer Satisfaction</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-content">
        <div className="projects-grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Project Categories */}
      <section className="project-categories">
        <h2>Project Types</h2>
        <div className="categories-grid">
          <div className="category-card">
            <h4>🏢 Commercial Projects</h4>
            <p>Modern office spaces and retail complexes designed for business success</p>
          </div>
          <div className="category-card">
            <h4>🏡 Residential Projects</h4>
            <p>Premium residential communities with world-class amenities</p>
          </div>
          <div className="category-card">
            <h4>🌳 Mixed-Use Projects</h4>
            <p>Integrated developments combining residential, commercial, and lifestyle spaces</p>
          </div>
          <div className="category-card">
            <h4>🏗️ Infrastructure Projects</h4>
            <p>Large-scale development projects enhancing regional growth</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="project-cta">
        <h2>Have a Project in Mind?</h2>
        <p>Let's build your vision together</p>
        <button className="cta-button">CONTACT US</button>
      </section>
    </div>
  );
}

export default Projects;
