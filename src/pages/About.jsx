import { Link } from 'react-router-dom';
import { CheckCircle2, MapPin, Phone, Award, Eye, Layers, Wrench, ShieldCheck, Gem, Handshake } from 'lucide-react';

function About() {
  return (
    <div className="w-full bg-white text-[#2a2a2a]">
      {/* Section 1: Hero Section */}
      <section className="bg-white py-16 max-sm:py-10 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-lg:gap-10 items-center">
          {/* Left Column: Heading & Paragraphs */}
          <div className="flex flex-col items-start">
            <span className="text-[0.8rem] font-bold text-[#786448] tracking-[2px] uppercase block mb-5 max-sm:mb-3">
              OUR HERITAGE
            </span>
            <h1 className="font-serif text-[3.8rem] max-lg:text-4xl max-sm:text-3xl font-bold text-[#59471d] leading-[1.1] mb-8">
              Your Trusted <br className="hidden sm:inline" />
              Partner in <br className="hidden sm:inline" />
              <em className="italic font-normal">Real Estate</em> &amp; <br className="hidden sm:inline" />
              Construction
            </h1>
            <div className="w-[70px] h-[2px] bg-[#e2d9cc] mb-8"></div>
            <p className="text-[1.05rem] font-semibold text-[#4a5568] leading-relaxed mb-5">
              Prime Land Properties is a leading real estate and construction company in Erode, Tamil Nadu, committed to delivering premium property solutions with honesty, quality, and innovation.
            </p>
            <p className="text-[0.95rem] font-normal text-[#8c97a8] leading-relaxed">
              We help individuals and businesses make confident real estate investments while creating modern developments that enhance communities and lifestyles.
            </p>
          </div>

          {/* Right Column: Cards Grid */}
          <div className="relative pt-6 pl-6 max-sm:pt-4 max-sm:pl-4">
            <div className="absolute top-0 left-0 w-[60px] h-[60px] max-sm:w-12 max-sm:h-12 border-t-2 border-l-2 border-[#d9d0c3] pointer-events-none"></div>
            <div className="bg-[#fbf8f3] rounded-[18px] p-10 max-sm:p-6 grid grid-cols-2 max-sm:grid-cols-1 gap-10 max-sm:gap-6 shadow-[0_10px_30px_rgba(89,71,29,0.03)]">
              <div className="flex flex-col items-start">
                <div className="w-[44px] h-[44px] rounded-xl bg-white text-[#59471d] flex items-center justify-center mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <Award size={20} />
                </div>
                <h3 className="text-[0.78rem] font-bold text-[#59471d] tracking-[1.5px] uppercase mb-2 font-sans">
                  CUSTOMER-FIRST
                </h3>
                <p className="text-[0.85rem] text-[#929eaa] leading-normal m-0">
                  Dedicated to excellence and long-term relationships.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-[44px] h-[44px] rounded-xl bg-white text-[#59471d] flex items-center justify-center mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <Eye size={20} />
                </div>
                <h3 className="text-[0.78rem] font-bold text-[#59471d] tracking-[1.5px] uppercase mb-2 font-sans">
                  TRANSPARENT
                </h3>
                <p className="text-[0.85rem] text-[#929eaa] leading-normal m-0">
                  Clear processes and honest communication at every step.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-[44px] h-[44px] rounded-xl bg-white text-[#59471d] flex items-center justify-center mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <Layers size={20} />
                </div>
                <h3 className="text-[0.78rem] font-bold text-[#59471d] tracking-[1.5px] uppercase mb-2 font-sans">
                  END-TO-END
                </h3>
                <p className="text-[0.85rem] text-[#929eaa] leading-normal m-0">
                  Property sales, investment guidance, and development.
                </p>
              </div>

              <div className="flex flex-col items-start">
                <div className="w-[44px] h-[44px] rounded-xl bg-white text-[#59471d] flex items-center justify-center mb-4 shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  <Wrench size={20} />
                </div>
                <h3 className="text-[0.78rem] font-bold text-[#59471d] tracking-[1.5px] uppercase mb-2 font-sans">
                  SOLUTIONS
                </h3>
                <p className="text-[0.85rem] text-[#929eaa] leading-normal m-0">
                  Professional construction and project management.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Building Legacies Section */}
      <section className="bg-white py-24 max-sm:py-12 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-lg:gap-10 items-center">
          {/* Left Column: Heading & Paragraphs */}
          <div className="flex flex-col items-start">
            <span className="text-[0.8rem] font-bold text-[#cca652] tracking-[2px] uppercase block mb-5 max-sm:mb-3">
              PRECISION IN EVERY DETAIL
            </span>
            <h2 className="font-serif text-[3.5rem] max-lg:text-4xl max-sm:text-3xl font-bold text-[#1a1a1a] leading-[1.15] mb-8">
              Building Legacies for Over <br className="hidden sm:inline" />
              15 Years
            </h2>
            <p className="text-[1.05rem] font-normal text-[#64748b] leading-[1.7] mb-6">
              Prime Land is an owner-managed construction company based in Berlin. For over 15 years, we have been realizing construction, renovation, and expansion projects throughout Germany – with our own team and the commitment to offering every client the highest quality, reliability, and fair conditions.
            </p>
            <p className="text-[0.95rem] font-normal text-[#64748b] leading-[1.7]">
              Our range of services encompasses 19 trades, all of which we cover from a single source: from structural work and interior finishing to facade work, fire protection, and asbestos removal. As a construction company, we consistently rely on in-house production – no subcontractors, no interface losses, but direct responsibility on the construction site.
            </p>
          </div>

          {/* Right Column: 2x2 Image Collage Grid */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-5 max-sm:gap-3 items-start">
              <div className="rounded-[20px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
                <img
                  src="/blueprint_table.png"
                  alt="Architectural Blueprint Planning"
                  className="w-full h-[250px] max-lg:h-[180px] object-cover block rounded-[20px]"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
                <img
                  src="/material_samples.png"
                  alt="Premium Material Samples"
                  className="w-full h-[290px] max-lg:h-[210px] object-cover block rounded-[20px]"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
                <img
                  src="/meeting_architects.png"
                  alt="Project Meeting & Planning"
                  className="w-full h-[290px] max-lg:h-[210px] object-cover block rounded-[20px]"
                />
              </div>
              <div className="rounded-[20px] overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:-translate-y-1">
                <img
                  src="/night_construction.png"
                  alt="Construction Night View"
                  className="w-full h-[250px] max-lg:h-[180px] object-cover block rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Core Values Section */}
      <section className="bg-[#faf6f0] py-24 max-sm:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 max-sm:mb-10">
            <span className="text-[0.8rem] font-bold text-[#cca652] tracking-[2.5px] uppercase block mb-4">
              CORE VALUES
            </span>
            <h2 className="font-serif text-[3.5rem] max-lg:text-4xl max-sm:text-3xl font-bold text-[#1a1a1a] leading-[1.1] m-0">
              What we stand for
            </h2>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-7 max-sm:gap-5">
            {/* Card 1: Reliable */}
            <div className="bg-white rounded-md p-8 max-sm:p-[1.75rem_1.25rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-5 mb-6">
                <div className="flex items-center justify-center shrink-0">
                  <ShieldCheck size={26} color="#cca652" />
                </div>
                <h3 className="font-serif text-[1.65rem] font-bold text-[#1a1a1a] m-0">
                  Reliable
                </h3>
              </div>
              <p className="text-[0.92rem] text-[#64748b] leading-[1.65] m-0">
                Punctual and reliable – you can count on us for every milestone and deadline.
              </p>
            </div>

            {/* Card 2: Quality */}
            <div className="bg-white rounded-md p-8 max-sm:p-[1.75rem_1.25rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-5 mb-6">
                <div className="flex items-center justify-center shrink-0">
                  <Gem size={26} color="#cca652" />
                </div>
                <h3 className="font-serif text-[1.65rem] font-bold text-[#1a1a1a] m-0">
                  Quality
                </h3>
              </div>
              <p className="text-[0.92rem] text-[#64748b] leading-[1.65] m-0">
                Highest quality standards in materials and workmanship, ensuring longevity and beauty.
              </p>
            </div>

            {/* Card 3: Experience */}
            <div className="bg-white rounded-md p-8 max-sm:p-[1.75rem_1.25rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-5 mb-6">
                <div className="flex items-center justify-center shrink-0">
                  <Award size={26} color="#cca652" />
                </div>
                <h3 className="font-serif text-[1.65rem] font-bold text-[#1a1a1a] m-0">
                  Experience
                </h3>
              </div>
              <p className="text-[0.92rem] text-[#64748b] leading-[1.65] m-0">
                Over 15 years of deep expertise in all trades of the specialized construction industry.
              </p>
            </div>

            {/* Card 4: Fair */}
            <div className="bg-white rounded-md p-8 max-sm:p-[1.75rem_1.25rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
              <div className="flex items-center gap-5 mb-6">
                <div className="flex items-center justify-center shrink-0">
                  <Handshake size={26} color="#cca652" />
                </div>
                <h3 className="font-serif text-[1.65rem] font-bold text-[#1a1a1a] m-0">
                  Fair
                </h3>
              </div>
              <p className="text-[0.92rem] text-[#64748b] leading-[1.65] m-0">
                Transparent pricing, open communication, and fair partnership at every step.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Internal Expertise Section */}
      <section className="bg-white py-24 max-sm:py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-16 max-lg:gap-10 items-center">
          {/* Left Column: Heading, Description & Bullet List */}
          <div className="flex flex-col items-start">
            <span className="text-[0.8rem] font-bold text-[#786448] tracking-[2.5px] uppercase block mb-5 max-sm:mb-3">
              INTERNAL EXPERTISE
            </span>
            <h2 className="font-serif text-[3.5rem] max-lg:text-4xl max-sm:text-3xl font-bold text-[#1a1a1a] leading-[1.15] mb-7">
              Our own team — no <br className="hidden sm:inline" />
              subcontractors
            </h2>
            <p className="text-[1.02rem] text-[#64748b] leading-[1.7] mb-9">
              What sets us apart from many companies: We consistently rely on our own permanent team. For you, this means: consistent quality, short decision-making processes, direct responsibility, and a dedicated contact person for your entire project.
            </p>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3.5 text-base font-medium text-[#2a2a2a]">
                <CheckCircle2 size={20} color="#cca652" className="shrink-0" />
                <span>Over 50 permanent skilled workers</span>
              </div>
              <div className="flex items-center gap-3.5 text-base font-medium text-[#2a2a2a]">
                <CheckCircle2 size={20} color="#cca652" className="shrink-0" />
                <span>Direct quality control on the construction site</span>
              </div>
              <div className="flex items-center gap-3.5 text-base font-medium text-[#2a2a2a]">
                <CheckCircle2 size={20} color="#cca652" className="shrink-0" />
                <span>No subcontractors — no interface losses</span>
              </div>
              <div className="flex items-center gap-3.5 text-base font-medium text-[#2a2a2a]">
                <CheckCircle2 size={20} color="#cca652" className="shrink-0" />
                <span>One contact person for all trades</span>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Worker Image */}
          <div className="w-full">
            <div className="w-full rounded-[24px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)]">
              <img
                src="/welding_worker.png"
                alt="Internal Expertise Construction Worker"
                className="w-full h-[520px] max-lg:h-[380px] object-cover block rounded-[24px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Trusted Across Tamil Nadu & Statistics */}
      <section className="bg-[#faf6f0] py-24 max-sm:py-16 px-6">
        <div className="max-w-[1100px] mx-auto">
          <div className="flex flex-col items-center text-center mb-20 max-sm:mb-12">
            <div className="w-[52px] h-[52px] rounded-full bg-[#f8f2e8] flex items-center justify-center mb-6">
              <MapPin size={22} color="#cca652" />
            </div>
            <h2 className="font-serif text-[3.2rem] max-lg:text-[2.6rem] max-sm:text-[2.2rem] font-bold text-[#1a1a1a] leading-[1.1] mb-5">
              Trusted Across Tamil Nadu
            </h2>
            <p className="text-base text-[#64748b] leading-[1.7] max-w-[780px] mx-auto">
              We proudly serve clients across <strong className="text-[#1a1a1a] font-semibold">Tamil Nadu</strong>, providing trusted real estate and construction solutions with a commitment to quality, transparency, and customer satisfaction. Whether you're investing, buying your dream property, or planning a construction project, our experienced team is here to guide you every step of the way.
            </p>
          </div>

          <div className="grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8 max-lg:gap-[3rem_2rem] text-center">
            <div className="flex flex-col items-center">
              <h3 className="font-serif text-[4.2rem] max-lg:text-[3.5rem] max-sm:text-[3.2rem] font-bold text-[#cca652] leading-none mb-3">
                500+
              </h3>
              <p className="text-[0.78rem] font-bold text-[#cca652] tracking-[1.5px] uppercase m-0 font-sans">
                PROJECTS REALIZED
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-serif text-[4.2rem] max-lg:text-[3.5rem] max-sm:text-[3.2rem] font-bold text-[#cca652] leading-none mb-3">
                15+
              </h3>
              <p className="text-[0.78rem] font-bold text-[#cca652] tracking-[1.5px] uppercase m-0 font-sans">
                YEARS OF EXPERIENCE
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-serif text-[4.2rem] max-lg:text-[3.5rem] max-sm:text-[3.2rem] font-bold text-[#cca652] leading-none mb-3">
                50+
              </h3>
              <p className="text-[0.78rem] font-bold text-[#cca652] tracking-[1.5px] uppercase m-0 font-sans">
                EMPLOYEES
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="font-serif text-[4.2rem] max-lg:text-[3.5rem] max-sm:text-[3.2rem] font-bold text-[#cca652] leading-none mb-3">
                100%
              </h3>
              <p className="text-[0.78rem] font-bold text-[#cca652] tracking-[1.5px] uppercase m-0 font-sans">
                TAMIL NADU COVERAGE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: CTA Section */}
      <section className="bg-[#11161b] py-26 max-sm:py-16 px-6 relative overflow-hidden flex justify-center items-center w-full">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-serif text-[clamp(5rem,16vw,12rem)] font-bold text-white/5 tracking-[0.25em] whitespace-nowrap pointer-events-none select-none z-0">
          PROJECTS
        </div>
        <div className="max-w-[900px] mx-auto text-center relative z-10 flex flex-col items-center">
          <h2 className="font-serif text-[clamp(2.4rem,5.5vw,3.8rem)] font-semibold text-white mb-5 leading-[1.15] tracking-tight">
            Planning a project? <span className="text-[#cca652] font-serif">We're ready.</span>
          </h2>
          <p className="text-[1.05rem] text-[#cbd5e1] leading-relaxed mb-11 max-w-[700px] font-normal">
            Request your free, non-binding quote – transparent, detailed and binding.
          </p>
          <div className="flex flex-row max-sm:flex-col items-center justify-center gap-10 max-sm:gap-4 w-full sm:w-auto">
            <Link
              to="/properties"
              className="w-full sm:w-auto bg-[#0084ff] hover:bg-[#0073e6] text-white! px-9 py-4 rounded font-bold text-[0.85rem] tracking-[1.5px] uppercase transition-all duration-300 shadow-[0_4px_15px_rgba(0,132,255,0.25)] hover:shadow-[0_6px_20px_rgba(0,132,255,0.4)] hover:-translate-y-0.5 inline-flex items-center justify-center"
            >
              EXPLORE PROPERTIES
            </Link>
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-transparent hover:text-[#0084ff] text-white! px-5 py-4 font-bold text-[0.85rem] tracking-[1.5px] uppercase transition-all duration-300 inline-flex items-center justify-center gap-2.5 hover:-translate-y-0.5"
            >
              <Phone size={18} className="shrink-0" />
              <span>CONTACT US</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;

