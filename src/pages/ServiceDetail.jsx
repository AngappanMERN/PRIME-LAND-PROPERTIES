import { useParams, Link } from 'react-router-dom';
import { services } from '../data/services';
import { 
  ChevronRight, 
  ArrowRight, 
  Phone, 
  Check, 
  Users, 
  Shield, 
  Clock, 
  Award, 
  Info 
} from 'lucide-react';

function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return (
      <section className="py-20 px-6 text-center bg-bg-alternate min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl mb-4 text-primary font-bold">Service Not Found</h1>
        <p className="text-text-secondary mb-6 text-lg">The requested service page could not be found.</p>
        <Link 
          to="/services" 
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded font-medium hover:bg-primary-hover transition-colors"
        >
          Back to Services <ArrowRight size={18} />
        </Link>
      </section>
    );
  }

  // Icon mapping helper for benefits
  const getBenefitIcon = (iconName) => {
    switch (iconName) {
      case 'users':
        return <Users className="w-5 h-5 text-accent" />;
      case 'shield':
        return <Shield className="w-5 h-5 text-accent" />;
      case 'clock':
        return <Clock className="w-5 h-5 text-accent" />;
      case 'award':
      default:
        return <Award className="w-5 h-5 text-accent" />;
    }
  };

  return (
    <main className="flex-1 bg-white">
      {/* 1. Hero Section */}
      <section className="bg-[#0b1d33] pt-28 md:pt-36 pb-20 relative overflow-hidden text-white">
        <div className="absolute inset-0">
          <img 
            className="w-full h-full object-cover opacity-15" 
            src={service.image} 
            alt={service.title} 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d33] via-[#0b1d33]/90 to-[#0b1d33]/70"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm font-sans mb-8 flex-wrap">
            <Link className="text-white/60 hover:text-accent transition-colors" to="/">
              Startseite
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <Link className="text-white/60 hover:text-accent transition-colors" to="/services">
              Leistungen
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-accent font-medium">{service.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white leading-[1.1] mb-6 font-bold">
                {service.heroTitle || service.title}
              </h1>
              <p className="text-white/80 text-lg md:text-xl font-sans leading-relaxed mb-8 max-w-xl">
                {service.description}
              </p>
              
              {/* Tags */}
              {service.tags && (
                <div className="flex flex-wrap gap-2 mb-10">
                  {service.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="bg-accent/15 border border-accent/30 text-accent text-xs font-sans font-medium px-3 py-1.5 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  className="inline-flex items-center justify-center gap-2 bg-accent text-[#0b1d33] px-8 py-4 text-base font-sans font-semibold hover:bg-white hover:text-primary transition-all rounded-sm shadow-md" 
                  to="/contact"
                >
                  Angebot anfragen
                  <ArrowRight className="w-5 h-5" />
                </Link>
                {service.phone && (
                  <a 
                    className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 text-base font-sans font-medium hover:border-accent hover:text-accent transition-all rounded-sm" 
                    href={`tel:${service.phone.replace(/\s+/g, '')}`}
                  >
                    <Phone className="w-4 h-4" />
                    {service.phone}
                  </a>
                )}
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="border border-white/10 p-2.5 bg-white/5 backdrop-blur-sm rounded-lg shadow-2xl">
                <img 
                  className="w-full aspect-[3/2] object-cover rounded-md" 
                  src={service.image} 
                  alt={service.title} 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Scope & Advantages Section */}
      {((service.features && service.features.length > 0) || (service.benefits && service.benefits.length > 0)) && (
        <section className="bg-bg-alternate py-20 md:py-28 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              
              {/* Left Column: Scope of Services */}
              {service.features && (
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mt-3 mb-8">
                    Leistungsumfang im Überblick
                  </h2>
                  <div className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-4 p-4 bg-white border border-gray-200/80 rounded-sm shadow-sm hover:shadow-md transition-shadow"
                      >
                        <div className="w-6 h-6 flex items-center justify-center bg-accent/20 rounded-full shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5 text-primary stroke-[3]" />
                        </div>
                        <p className="text-text-main font-sans text-base leading-relaxed">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Right Column: Advantages / Benefits */}
              {service.benefits && (
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mt-3 mb-8">
                    Ihre Vorteile mit Prime Land
                  </h2>
                  <div className="space-y-4">
                    {service.benefits.map((benefit, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start gap-4 p-5 bg-[#0b1d33] border border-white/10 rounded-sm shadow-md"
                      >
                        <div className="w-10 h-10 flex items-center justify-center bg-accent/20 rounded shrink-0">
                          {getBenefitIcon(benefit.icon)}
                        </div>
                        <div>
                          <p className="text-white/90 text-base font-sans mt-1 leading-snug">
                            {benefit.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>
          </div>
        </section>
      )}

      {/* 3. Detailed Description Section */}
      {service.about && (
        <section className="bg-[#0b1d33] text-white py-16 md:py-24">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-8">
              {service.about.heading}
            </h2>
            <div className="grid lg:grid-cols-12 gap-10">
              <div className="lg:col-span-7 space-y-5">
                {service.about.paragraphs && service.about.paragraphs.map((p, idx) => (
                  <p key={idx} className="text-white/70 leading-relaxed text-base md:text-lg">
                    {p}
                  </p>
                ))}
              </div>
              
              {service.about.infoBox && (
                <div className="lg:col-span-5">
                  <div className="bg-[#122844] border-l-4 border-accent rounded-r-xl p-6 h-full shadow-lg">
                    <h3 className="font-serif text-xl font-bold text-accent mb-3 flex items-center gap-2">
                      <Info className="w-5 h-5 shrink-0" />
                      {service.about.infoBox.title}
                    </h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {service.about.infoBox.text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* 4. Process Steps Section */}
      {service.process && service.process.length > 0 && (
        <section className="bg-bg-alternate py-16 md:py-24 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-10">
              Ablauf Ihres Projekts
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {service.process.map((item) => (
                <div key={item.step} className="relative bg-white p-6 rounded border border-gray-200/80 shadow-sm">
                  <div className="w-10 h-10 bg-accent text-[#0b1d33] rounded-sm flex items-center justify-center font-bold text-lg mb-4 font-serif">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FAQ Section */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="bg-[#0b1d33] text-white py-16 md:py-24">
          <div className="max-w-3xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-white mb-10 text-center">
              Häufige Fragen
            </h2>
            <div className="space-y-6">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-accent/20 pb-6">
                  <h3 className="font-serif text-lg font-bold text-accent mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. Selected Projects Section */}
      {service.projects && service.projects.length > 0 && (
        <section className="bg-bg-alternate py-20 md:py-28 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-2xl md:text-3xl text-primary font-bold mb-12">
              Ausgewählte Projekte
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.projects.map((project, idx) => (
                <div key={idx} className="group border border-gray-200 bg-white rounded overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/2] overflow-hidden">
                    <img 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                      src={project.image} 
                      alt={project.title} 
                    />
                  </div>
                  <div className="p-5">
                    <p>
                      <span className="text-accent text-xs font-sans font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                    </p>
                    <h3 className="font-serif text-xl font-bold mt-2 text-primary">
                      {project.title}
                    </h3>
                    <p className="text-sm font-sans mt-2 text-text-secondary">
                      {project.location} · {project.size} · {project.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Related Services Section */}
      {service.relatedServices && service.relatedServices.length > 0 && (
        <section className="bg-[#122844] text-white py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h3 className="font-serif text-xl font-bold text-white mb-6">
              Verwandte Leistungen
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.relatedServices.map((related, idx) => (
                <Link 
                  key={idx} 
                  className="bg-[#0b1d33] border border-accent/30 text-accent px-5 py-2.5 text-sm hover:bg-accent hover:text-[#0b1d33] transition-colors rounded-sm font-medium" 
                  to={`/services/${related.slug}`}
                >
                  {related.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Bottom CTA Banner */}
      <section className="bg-[#0b1d33] text-white relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <span className="text-[12vw] md:text-[10vw] font-serif font-bold text-white/[0.03] whitespace-nowrap">
            Projekt geplant?
          </span>
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Projekt geplant? <span className="text-accent">Wir sind bereit.</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Fordern Sie Ihr kostenloses, unverbindliches Angebot an – transparent, detailliert und verbindlich.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              className="bg-accent text-[#0b1d33] px-8 py-4 font-semibold tracking-wide hover:bg-white hover:text-primary transition-colors rounded-sm text-lg shadow-lg" 
              to="/contact"
            >
              Angebot anfragen
            </Link>
            {service.phone && (
              <a 
                className="flex items-center gap-2 border border-accent/40 text-accent px-8 py-4 hover:bg-accent/10 transition-colors rounded-sm text-lg" 
                href={`tel:${service.phone.replace(/\s+/g, '')}`}
              >
                <Phone className="w-4 h-4" />
                {service.phone}
              </a>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default ServiceDetail;
