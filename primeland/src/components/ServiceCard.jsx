import { Link } from "react-router-dom";
import "./ServiceCard.css";

function ServiceCard({ service }) {
  return (
    <Link to={service.path} className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.title} />
      </div>

      <div className="service-content">
        <h3>{service.title}</h3>

        <p>{service.description}</p>

        <span className="service-btn">
          Explore Service →
        </span>
      </div>
    </Link>
  );
}

export default ServiceCard;