import React, { useState } from 'react';
import { Sparkles, Eye, Filter } from 'lucide-react';
import { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ projects, onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Brand Identity', 'Logo Design', 'Motion Graphics', 'YouTube Thumbnails', 'Social Media', 'Posters & Banners', 'Marketing'];

  const videoProjects = projects.filter((p) => p.isVideo);
  const imageProjects = activeCategory === 'All'
    ? projects.filter((p) => !p.isVideo)
    : projects.filter((p) => !p.isVideo && p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-[#FAFAF7] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(249,202,49,0.06),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F9CA31]/40 text-[#050505] text-xs font-semibold uppercase tracking-widest shadow-sm mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A915]" />
            <span>Selected Works & Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight">
            Explore My Creative <span className="gold-gradient-text">Portfolio Works</span>
          </h2>
        </div>

        {/* 🎥 DEDICATED VIDEO PRESENTATIONS SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-8 pb-4 border-b border-black/10">
            <div className="w-10 h-10 rounded-xl bg-[#F9CA31] flex items-center justify-center text-[#050505] font-bold shadow-md text-lg">
              ▶
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#050505]">
                Featured Video Presentations & Motion Graphics
              </h3>
              <p className="text-xs text-[#666666]">
                Click any video below to play instantly in high definition with complete project descriptions.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {videoProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-white rounded-2xl overflow-hidden border border-black/10 shadow-xl hover:shadow-2xl hover:border-[#F9CA31] transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
              >
                {/* Video Preview Container */}
                <div className="relative aspect-video overflow-hidden bg-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center opacity-90 group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#F9CA31] text-[#050505] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform pl-1">
                      <span className="text-2xl font-black">▶</span>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#F9CA31] text-[#050505] text-xs font-bold uppercase tracking-wider shadow-md">
                      🎬 Motion Video
                    </span>
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#050505] text-xs font-bold uppercase tracking-wider shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Video Info & Description */}
                <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between bg-white space-y-4">
                  <div>
                    <h4 className="text-xl font-bold text-[#050505] mb-2 group-hover:text-[#D8A915] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2.5 py-1 rounded bg-[#FAFAF7] text-[#666666] text-[10px] font-medium border border-black/5">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#D8A915]">
                      Client: {project.client || 'Usman Graphics'}
                    </span>
                    <span className="text-xs font-bold px-4 py-2 rounded-xl bg-[#F9CA31] text-[#050505] group-hover:bg-[#D8A915] transition-colors flex items-center gap-1.5 shadow-sm">
                      <span>Play Video Now</span> &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 🎨 GRAPHIC DESIGN & BRAND IDENTITY SECTION */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-4 border-b border-black/10">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#050505]">
                Graphic Design & Brand Identity Works
              </h3>
              <p className="text-xs text-[#666666]">
                Explore professional brand identity, logos, and social media marketing designs.
              </p>
            </div>

            {/* Category Filters */}
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-xl border border-black/5 shadow-sm overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium uppercase tracking-wider transition-all whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-[#F9CA31] text-[#050505] font-bold shadow-md'
                      : 'text-[#666666] hover:text-[#050505] hover:bg-black/5'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {imageProjects.map((project) => (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="group bg-white rounded-2xl overflow-hidden border border-black/10 shadow-lg hover:shadow-2xl hover:border-[#F9CA31] transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1.5"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0A0A0B]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 bg-[#F9CA31] text-[#050505] font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-4 h-4" />
                      <span>View Project</span>
                    </span>
                  </div>
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm text-[#050505] text-[10px] font-bold uppercase tracking-wider shadow-md">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow justify-between bg-white">
                  <div>
                    <h4 className="text-lg font-bold text-[#050505] mb-2 group-hover:text-[#D8A915] transition-colors line-clamp-1">
                      {project.title}
                    </h4>
                    <p className="text-xs text-[#666666] line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/5 flex items-center justify-between">
                    <span className="text-[11px] font-medium text-[#D8A915]">
                      {project.client || 'Usman Graphics'}
                    </span>
                    <span className="text-xs font-bold text-[#050505] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      <span>Details</span> &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
