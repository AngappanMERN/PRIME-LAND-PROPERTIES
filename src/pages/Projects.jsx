import { Building, Construction, Home, TreeDeciduous } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projectsData';

function Projects() {
  return (
    <div className="text-[#2a2a2a]">
      {/* Header Banner */}
      <section className="relative min-h-[80vh] flex flex-col justify-center items-center text-center text-white p-8 bg-[linear-gradient(rgba(0,0,0,0.65),rgba(0,0,0,0.65)),url('/projects-banner.png')] bg-no-repeat bg-center bg-cover">
        <h1 className="text-[3rem] text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] font-serif font-bold">
          PROJECTS
        </h1>
        <p className="text-[1.25rem] text-[#f0f0f0] drop-shadow-[0_1px_3px_rgba(0,0,0,0.5)]">
          Explore Our Landmark Developments Across Tamil Nadu
        </p>
      </section>

      {/* Project Stats */}
      <section className="max-w-[1200px] mx-auto py-16 px-8 grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-8 text-center">
        <div className="p-8 bg-[#f9f9f9] rounded-lg border border-[#e0e0e0]">
          <h3 className="text-[2rem] text-[#0096ff] m-0 font-serif font-bold">500+</h3>
          <p className="text-[#666666] mt-2">Total Units</p>
        </div>
        <div className="p-8 bg-[#f9f9f9] rounded-lg border border-[#e0e0e0]">
          <h3 className="text-[2rem] text-[#0096ff] m-0 font-serif font-bold">₹500+CR</h3>
          <p className="text-[#666666] mt-2">Project Value</p>
        </div>
        <div className="p-8 bg-[#f9f9f9] rounded-lg border border-[#e0e0e0]">
          <h3 className="text-[2rem] text-[#0096ff] m-0 font-serif font-bold">15+</h3>
          <p className="text-[#666666] mt-2">Ongoing Projects</p>
        </div>
        <div className="p-8 bg-[#f9f9f9] rounded-lg border border-[#e0e0e0]">
          <h3 className="text-[2rem] text-[#0096ff] m-0 font-serif font-bold">98%</h3>
          <p className="text-[#666666] mt-2">Customer Satisfaction</p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-[1200px] mx-auto py-16 px-8">
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* Project Categories */}
      <section className="bg-[#f9f9f9] py-16 px-8">
        <h2 className="text-[2rem] text-[#0096ff] text-center mb-12 font-serif font-bold">Project Types</h2>
        <div className="max-w-[1200px] mx-auto grid grid-cols-4 max-lg:grid-cols-2 max-sm:grid-cols-1 gap-8">
          <div className="bg-gradient-to-br from-[#e8f4ff] to-[rgba(0,150,255,0.05)] p-8 rounded-lg border border-[#e0e0e0] transition-all duration-300 text-center hover:-translate-y-[5px] hover:shadow-[0_10px_30px_#2a2a2a] hover:border-[rgba(0,150,255,0.6)]">
            <h4 className="text-[#0096ff] mb-4 text-[1.2rem] font-serif font-bold flex items-center justify-center gap-2">
              <Building size={20} />Commercial Projects
            </h4>
            <p className="text-[#666666] leading-relaxed">Modern office spaces and retail complexes designed for business success</p>
          </div>
          <div className="bg-gradient-to-br from-[#e8f4ff] to-[rgba(0,150,255,0.05)] p-8 rounded-lg border border-[#e0e0e0] transition-all duration-300 text-center hover:-translate-y-[5px] hover:shadow-[0_10px_30px_#2a2a2a] hover:border-[rgba(0,150,255,0.6)]">
            <h4 className="text-[#0096ff] mb-4 text-[1.2rem] font-serif font-bold flex items-center justify-center gap-2">
              <Home size={20} />Residential Projects
            </h4>
            <p className="text-[#666666] leading-relaxed">Premium residential communities with world-class amenities</p>
          </div>
          <div className="bg-gradient-to-br from-[#e8f4ff] to-[rgba(0,150,255,0.05)] p-8 rounded-lg border border-[#e0e0e0] transition-all duration-300 text-center hover:-translate-y-[5px] hover:shadow-[0_10px_30px_#2a2a2a] hover:border-[rgba(0,150,255,0.6)]">
            <h4 className="text-[#0096ff] mb-4 text-[1.2rem] font-serif font-bold flex items-center justify-center gap-2">
              <TreeDeciduous size={20} />Mixed-Use Projects
            </h4>
            <p className="text-[#666666] leading-relaxed">Integrated developments combining residential, commercial, and lifestyle spaces</p>
          </div>
          <div className="bg-gradient-to-br from-[#e8f4ff] to-[rgba(0,150,255,0.05)] p-8 rounded-lg border border-[#e0e0e0] transition-all duration-300 text-center hover:-translate-y-[5px] hover:shadow-[0_10px_30px_#2a2a2a] hover:border-[rgba(0,150,255,0.6)]">
            <h4 className="text-[#0096ff] mb-4 text-[1.2rem] font-serif font-bold flex items-center justify-center gap-2">
              <Construction size={20} />Infrastructure Projects
            </h4>
            <p className="text-[#666666] leading-relaxed">Large-scale development projects enhancing regional growth</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-[1200px] mx-auto py-16 px-8 text-center">
        <h2 className="text-[2rem] text-[#0096ff] mb-4 font-serif font-bold">Have a Project in Mind?</h2>
        <p className="text-[1.1rem] text-[#666666] mb-8">Let's build your vision together</p>
        <button className="inline-block px-10 py-4 bg-brand-pink text-white no-underline rounded-md font-bold transition-all duration-300 cursor-pointer border-none hover:bg-brand-pink-hover">
          CONTACT US
        </button>
      </section>
    </div>
  );
}

export default Projects;

