import { MapPin } from 'lucide-react';

function ProjectCard({ project }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-[#e0e0e0] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_12px_35px_rgba(0,150,255,0.15)] hover:border-[#0096ff] text-[#2a2a2a]">
      <div className="overflow-hidden h-[250px]">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[#0096ff] font-serif text-[1.1rem] mb-2">{project.name}</h3>
        <p className="text-[#666666] text-[0.9rem] mb-4 flex items-center gap-1">
          <MapPin size={18} className="shrink-0" />
          {project.location}
        </p>
        <div className="flex flex-wrap gap-4 text-[0.85rem] text-[#666666] mb-4">
          <span className="bg-[#e8f4ff] px-3 py-1.5 rounded-sm">{project.year}</span>
          <span className="bg-[#e8f4ff] px-3 py-1.5 rounded-sm">{project.status}</span>
          <span className="bg-[#e8f4ff] px-3 py-1.5 rounded-sm">{project.units} Units</span>
        </div>
        <button className="w-full p-3 bg-brand-pink text-white border-0 rounded-md font-bold cursor-pointer transition-all duration-300 hover:bg-brand-pink-hover">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

export default ProjectCard;

