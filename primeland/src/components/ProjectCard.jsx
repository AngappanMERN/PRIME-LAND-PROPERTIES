import './ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-wrapper">
        <img src={project.image} alt={project.name} className="project-image" />
      </div>
      <div className="project-content">
        <h3>{project.name}</h3>
        <p className="project-location">📍 {project.location}</p>
        <div className="project-details">
          <span>{project.year}</span>
          <span>{project.status}</span>
          <span>{project.units} Units</span>
        </div>
        <button className="project-btn">VIEW MORE</button>
      </div>
    </div>
  );
}

export default ProjectCard;
