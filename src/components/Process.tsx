import React from 'react';
import { Sparkles, Compass, FileText, PenTool, CheckCircle2 } from 'lucide-react';
import { DESIGN_PROCESS } from '../data';

const getProcessIcon = (iconName: string) => {
  switch (iconName) {
    case 'Compass':
      return <Compass className="w-6 h-6 text-[#C5A47E]" />;
    case 'FileText':
      return <FileText className="w-6 h-6 text-[#C5A47E]" />;
    case 'PenTool':
      return <PenTool className="w-6 h-6 text-[#C5A47E]" />;
    case 'CheckCircle2':
      return <CheckCircle2 className="w-6 h-6 text-[#C5A47E]" />;
    default:
      return <Sparkles className="w-6 h-6 text-[#C5A47E]" />;
  }
};

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(249,202,49,0.05),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAF7] border border-[#F9CA31]/40 text-[#050505] text-xs font-semibold mb-4 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A915]" />
            <span>Structured Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight">
            Our 4-Step Design <span className="gold-gradient-text">Process</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666] font-light">
            A seamless, transparent workflow designed to take your project from initial concept to immaculate final delivery.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {DESIGN_PROCESS.map((step, idx) => (
            <div
              key={idx}
              className="brand-card brand-card-hover p-8 rounded-2xl relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#F9CA31]/20 border border-[#F9CA31]/30 flex items-center justify-center group-hover:bg-[#F9CA31] group-hover:text-[#050505] transition-all duration-300">
                    {getProcessIcon(step.icon)}
                  </div>
                  <span className="text-2xl font-bold text-[#050505]/20 group-hover:text-[#D8A915] transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#050505] mb-3 group-hover:text-[#D8A915] transition-colors">
                  {step.title}
                </h3>

                <p className="text-[#666666] text-xs leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-black/10 flex items-center gap-2 text-[10px] text-[#D8A915] font-bold uppercase tracking-wider">
                <span>Phase {idx + 1} of 4</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
