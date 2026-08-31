import React from 'react';
import {
PenTool,
  Layers,
  PlaySquare,
  Share2,
  Image,
  Sliders,
  Target,
  Sparkles,
  Check,
  ArrowRight
} from 'lucide-react';
import { SERVICES } from '../data';

// Icon mapper helper
const getServiceIcon = (iconName: string) => {
  switch (iconName) {
    case 'PenTool':
      return <PenTool className="w-6 h-6 text-[#F9CA31]" />;
    case 'Layers':
      return <Layers className="w-6 h-6 text-[#F9CA31]" />;
    case 'PlaySquare':
      return <PlaySquare className="w-6 h-6 text-[#F9CA31]" />;
    case 'Share2':
      return <Share2 className="w-6 h-6 text-[#F9CA31]" />;
    case 'Image':
      return <Image className="w-6 h-6 text-[#F9CA31]" />;
    case 'Sliders':
      return <Sliders className="w-6 h-6 text-[#F9CA31]" />;
    case 'Target':
      return <Target className="w-6 h-6 text-[#F9CA31]" />;
    case 'Sparkles':
      return <Sparkles className="w-6 h-6 text-[#F9CA31]" />;
    default:
      return <PenTool className="w-6 h-6 text-[#F9CA31]" />;
  }
};

interface ServicesProps {
  onOpenContact: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenContact }) => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#FAFAF7] text-[#050505] relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F9CA31]/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[600px] h-[600px] bg-[#D8A915]/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#F9CA31]/40 text-[#050505] text-xs font-semibold mb-6 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-4 h-4 text-[#D8A915]" />
            <span>World-Class Professional Services</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-[#050505] tracking-tight leading-tight">
            Tailored Creative Solutions to <span className="gold-gradient-text block mt-1">Elevate Your Global Brand</span>
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#666666] font-light leading-relaxed">
            From striking logo marks and cinematic video editing to high-converting SMM marketing, I deliver pristine international-grade quality.
          </p>
        </div>

        {/* Single Professional Container for All Services */}
        <div className="bg-white rounded-[28px] border border-black/15 p-8 sm:p-12 lg:p-16 shadow-2xl relative">
          
          {/* Top Decorative Gold Accent Bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-1 bg-gradient-to-r from-transparent via-[#F9CA31] to-transparent rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className="group relative p-6 sm:p-8 rounded-2xl bg-[#FAFAF7] border border-black/10 hover:border-[#F9CA31] transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                {/* Top Row: Icon & Number Badge */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-[#F9CA31]/40 flex items-center justify-center group-hover:bg-[#F9CA31] group-hover:text-[#050505] transition-all duration-300 shadow-sm">
                      {getServiceIcon(service.iconName)}
                    </div>
                    <span className="text-xl font-black text-black/20 group-hover:text-[#D8A915] transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#050505] mb-3 group-hover:text-[#D8A915] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-[#666666] text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>
                </div>

                {/* Bottom Features & Action Button */}
                <div className="pt-6 border-t border-black/10">
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs text-[#444444] font-light">
                        <div className="w-4 h-4 rounded-full bg-[#F9CA31]/20 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#D8A915]" />
                        </div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={onOpenContact}
                    className="w-full py-3 px-4 rounded-xl bg-white hover:bg-[#F9CA31] hover:text-[#050505] text-[#050505] font-bold text-xs uppercase tracking-wider transition-all duration-300 border border-black/10 hover:border-[#F9CA31] flex items-center justify-center gap-2 shadow-sm group/btn cursor-pointer"
                  >
                    <span>Request Service</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Container Footer */}
          <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="text-base font-bold text-[#050505]">Need a custom service package or enterprise project?</h4>
              <p className="text-xs text-[#666666] mt-1">Get in touch for custom design sprints, long-term retainers, and branding solutions.</p>
            </div>
            <button
              onClick={onOpenContact}
              className="px-6 py-3.5 bg-[#F9CA31] hover:bg-[#D8A915] text-[#050505] font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all shrink-0 cursor-pointer hover:scale-105"
            >
              Contact For Custom Order
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

