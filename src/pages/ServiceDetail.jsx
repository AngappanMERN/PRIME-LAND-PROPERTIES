import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section style={{ padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h1>Service not found</h1>
        <p>The requested service could not be found.</p>
        <Link to="/services" style={{ color: '#0096ff', marginTop: '1rem', display: 'inline-block' }}>
          Back to services
        </Link>
      </section>
    );
  }

  return (
    <section style={{ padding: '4rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}>
      <Link to="/services" style={{ color: '#0096ff', marginBottom: '1rem', display: 'inline-block' }}>
        ← Back to services
      </Link>
      <h1 style={{ fontSize: '2.2rem', marginBottom: '1rem' }}>{service.title}</h1>
      <img src={service.image} alt={service.title} style={{ width: '100%', maxHeight: '420px', objectFit: 'cover', borderRadius: '16px', marginBottom: '1.5rem' }} />
      <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>{service.description}</p>

      <h2 style={{ marginBottom: '0.75rem' }}>Key features</h2>
      <ul style={{ paddingLeft: '1.2rem', lineHeight: 1.8 }}>
        {service.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </section>
  );
}

export default ServiceDetail;
