
import './TeamCard.css';

function TeamCard({ member }) {
  return (
    <div className="team-card">
      <div className="team-image-wrapper">
        <img src={member.image} alt={member.name} className="team-image" />
      </div>
      <div className="team-content">
        <h3>{member.name}</h3>
        <p className="team-role">{member.role}</p>
        <div className="team-social">
          <a href={member.social.linkedin} aria-label="LinkedIn">in</a>
          <a href={member.social.facebook} aria-label="Facebook">f</a>
          <a href={member.social.twitter} aria-label="Twitter">𝕏</a>
        </div>
      </div>
    </div>
  );
}

export default TeamCard;
