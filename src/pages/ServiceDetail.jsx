import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="py-16 px-6 text-center">
        <h1 className="font-serif text-[2.2rem] mb-4 text-[#1a1a1a]">Service not found</h1>
        <p className="text-[#666666]">The requested service could not be found.</p>
        <Link to="/services" className="text-[#0096ff] mt-4 inline-block hover:underline">
          Back to services
        </Link>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 max-w-[1000px] mx-auto text-[#2a2a2a]">
      <Link to="/services" className="text-[#0096ff] mb-4 inline-block hover:underline font-semibold">
        ← Back to services
      </Link>
      <h1 className="font-serif text-[2.2rem] font-bold mb-4 text-[#1a1a1a]">{service.title}</h1>
      <img
        src={service.image}
        alt={service.title}
        className="w-full max-h-[420px] object-cover rounded-2xl mb-6 shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
      />
      <p className="text-[1.05rem] leading-relaxed mb-6 text-[#4a5568]">{service.description}</p>

      <h2 className="font-serif text-[1.5rem] font-bold mb-3 text-[#1a1a1a]">Key features</h2>
      <ul className="pl-5 leading-relaxed list-disc text-[#4a5568]">
        {service.features.map((feature) => (
          <li key={feature} className="mb-1">{feature}</li>
        ))}
      </ul>
    </section>
  );
}

export default ServiceDetail;

