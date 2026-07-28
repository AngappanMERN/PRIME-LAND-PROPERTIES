import { Link } from 'react-router-dom';
import { Award, Clock, Handshake, Shield, CheckCircle2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { services } from '../data/services';
import { advantages } from '../data/advantagesData';
import BlurText from '../components/BlurText';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

function Home() {
  return (
    <div className="text-[#2a2a2a] bg-bg-main">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-bg-main">
        <video autoPlay muted loop className="w-full h-auto block object-cover">
          <source src="/home-banner-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </section>

      {/* Floating text */}
      <section className="bg-bg-alternate py-10 px-4 border-y border-[rgba(217,167,74,0.15)] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1100px] mx-auto flex flex-col items-center justify-center text-center gap-3">
          <BlurText
            text="வருங்கால வாழ்க்கைக்கு"
            delay={350}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl max-md:text-2xl font-serif font-bold text-primary justify-center tracking-wide"
          />
          <BlurText
            text="வளமான முதலீடு"
            delay={350}
            animateBy="words"
            direction="bottom"
            className="text-3xl sm:text-4xl max-md:text-2xl font-serif font-bold text-accent justify-center tracking-wide"
          />
        </div>
      </section>
      {/* Features Banner */}
      <section className="bg-bg-main py-8 px-4 border-none shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
        <div className="max-w-[1100px] mx-auto flex flex-wrap justify-around items-center py-8 px-4 gap-10 max-md:grid max-md:grid-cols-2 max-md:justify-items-center max-md:gap-4">
          <div className="group flex flex-row items-center gap-4 px-4 py-2 rounded transition-all duration-400 cursor-default hover:-translate-y-[2px]">
            <Shield className="w-8 h-8 stroke-primary stroke-[1.5px] shrink-0 transition-all duration-400 group-hover:scale-[1.08] group-hover:drop-shadow-[0_0_4px_rgba(15,75,128,0.4)]" />
            <h4 className="text-primary font-serif text-[1.35rem] max-md:text-[1.1rem] font-bold m-0 tracking-[0.5px] transition-all duration-400">
              Reliable
            </h4>
          </div>
          <div className="group flex flex-row items-center gap-4 px-4 py-2 rounded transition-all duration-400 cursor-default hover:-translate-y-[2px]">
            <Award className="w-8 h-8 stroke-primary stroke-[1.5px] shrink-0 transition-all duration-400 group-hover:scale-[1.08] group-hover:drop-shadow-[0_0_4px_rgba(15,75,128,0.4)]" />
            <h4 className="text-primary font-serif text-[1.35rem] max-md:text-[1.1rem] font-bold m-0 tracking-[0.5px] transition-all duration-400">
              Quality
            </h4>
          </div>
          <div className="group flex flex-row items-center gap-4 px-4 py-2 rounded transition-all duration-400 cursor-default hover:-translate-y-[2px]">
            <Clock className="w-8 h-8 stroke-primary stroke-[1.5px] shrink-0 transition-all duration-400 group-hover:scale-[1.08] group-hover:drop-shadow-[0_0_4px_rgba(15,75,128,0.4)]" />
            <h4 className="text-primary font-serif text-[1.35rem] max-md:text-[1.1rem] font-bold m-0 tracking-[0.5px] transition-all duration-400">
              Experience
            </h4>
          </div>
          <div className="group flex flex-row items-center gap-4 px-4 py-2 rounded transition-all duration-400 cursor-default hover:-translate-y-[2px]">
            <Handshake className="w-8 h-8 stroke-primary stroke-[1.5px] shrink-0 transition-all duration-400 group-hover:scale-[1.08] group-hover:drop-shadow-[0_0_4px_rgba(15,75,128,0.4)]" />
            <h4 className="text-primary font-serif text-[1.35rem] max-md:text-[1.1rem] font-bold m-0 tracking-[0.5px] transition-all duration-400">
              Fair
            </h4>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-bg-alternate py-12 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1100px] mx-auto grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-10 max-md:gap-6 py-8 px-4 text-center">
          <div className="p-4 max-md:p-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <h3 className="text-[3rem] max-md:text-[2.2rem] text-[#1a1a1a] m-0 font-serif font-bold leading-[1.1]">15+</h3>
            <p className="text-[#cca652] mt-2.5 text-base font-medium font-sans tracking-[0.2px] whitespace-nowrap">Years of experience</p>
          </div>
          <div className="p-4 max-md:p-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <h3 className="text-[3rem] max-md:text-[2.2rem] text-[#1a1a1a] m-0 font-serif font-bold leading-[1.1]">100+</h3>
            <p className="text-[#cca652] mt-2.5 text-base font-medium font-sans tracking-[0.2px] whitespace-nowrap">Premium Plots</p>
          </div>
          <div className="p-4 max-md:p-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <h3 className="text-[3rem] max-md:text-[2.2rem] text-[#1a1a1a] m-0 font-serif font-bold leading-[1.1]">50+</h3>
            <p className="text-[#cca652] mt-2.5 text-base font-medium font-sans tracking-[0.2px] whitespace-nowrap">Employees</p>
          </div>
          <div className="p-4 max-md:p-3 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105">
            <h3 className="text-[3rem] max-md:text-[2.2rem] text-[#1a1a1a] m-0 font-serif font-bold leading-[1.1]">100%</h3>
            <p className="text-[#cca652] mt-2.5 text-base font-medium font-sans tracking-[0.2px] whitespace-nowrap">Operating throughout Germany</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-bg-main py-16 px-8 max-sm:px-4 shadow-[0_2px_8px_rgba(0,0,0,0.03)]" id="services">
        <h2 className="text-[2rem] text-[#1a1a1a] text-center mb-12 font-serif font-bold tracking-wide">OUR SERVICES</h2>
        <div className="max-w-[1200px] mx-auto grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-8">
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      {/* Your advantages Section */}
      <section className="bg-bg-alternate py-20 px-6 max-sm:py-12 max-sm:px-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <div className="max-w-[1280px] mx-auto">
          <div className="text-center mb-14 max-sm:mb-8">
            <span className="inline-block text-primary text-[0.75rem] tracking-[0.3em] uppercase font-semibold mb-3">YOUR ADVANTAGES</span>
            <h2 className="text-[2rem] max-lg:text-[1.875rem] max-sm:text-[1.5rem] text-[#1a1a1a] font-bold mt-3 font-serif">Why Prime Land?</h2>
          </div>
          <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-6">
            {advantages.map(advantage => (
              <div key={advantage.id} className="bg-white border border-[rgba(1,133,235,0.12)] p-8 max-sm:p-6 rounded-md transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:-translate-y-1 hover:border-primary">
                <CheckCircle2 size={24} className="text-[#cca652] mb-3" />
                <h3 className="text-[1.25rem] font-bold text-[#1a1a1a] mb-2 font-serif">{advantage.title}</h3>
                <p className="text-[0.875rem] text-[#666666] leading-relaxed m-0 font-sans">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeAfterSlider />
      {/* CTA Section */}
      <section className="bg-bg-alternate py-16 px-8 text-center text-[#2a2a2a] shadow-[0_2px_8px_rgba(0,0,0,0.02)]">
        <h2 className="text-[2rem] text-[#1a1a1a] mb-4 font-serif font-bold">Ready to Find Your Dream Property?</h2>
        <p className="text-[1.1rem] text-[#666666] mb-8 font-sans">Let's help you find your next perfect investment opportunity</p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-primary text-white! no-underline rounded-md font-bold text-base transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_10px_30px_rgba(1,133,235,0.25)] hover:-translate-y-[2px]"
        >
          GET IN TOUCH
        </Link>
      </section>
    </div>
  );
}

export default Home;


