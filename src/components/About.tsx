import React from 'react';
import { CheckCircle2, Sparkles, Target, Lightbulb, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

export const About: React.FC = () => {
  const highlights = [
    "5+ Years Professional Graphic Design Expertise",
    "Over 500+ Successful Projects Completed Globally",
    "Specialized in Brand Identity & High-CTR Thumbnails",
    "100% Client Satisfaction & Fast Communication",
    "Mastery in Adobe Creative Suite & Modern Aesthetics"
  ];

  return (
    <section id="about" className="py-24 bg-[#FAFAF7] relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,202,49,0.06),transparent_50%)] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F9CA31]/40 text-[#050505] text-xs font-semibold mb-4 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A915]" />
            <span>About Usman Graphics</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight">
            Passionate About Visual Storytelling & <span className="gold-gradient-text">Brand Excellence</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666] font-light">
            Dedicated to creating world-class graphic designs that elevate brands and captivate international audiences.
          </p>
        </div>

        {/* Detailed Bio, Approach, Philosophy */}
        <div className="space-y-8">
          <div className="space-y-4 text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-[#050505]">
              Hello! I'm <span className="text-[#D8A915]">{PERSONAL_INFO.name}</span>
            </h3>
            <p className="text-[#666666] leading-relaxed text-base font-light">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Approach & Philosophy Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="brand-card brand-card-hover p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#F9CA31]/20 flex items-center justify-center text-[#D8A915] mb-4 mx-auto sm:mx-0">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-[#050505] font-bold text-sm uppercase tracking-wider mb-2 text-center sm:text-left">My Creative Approach</h4>
              <p className="text-[#666666] text-xs leading-relaxed font-light text-center sm:text-left">
                {PERSONAL_INFO.approach}
              </p>
            </div>

            <div className="brand-card brand-card-hover p-6 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-[#F9CA31]/20 flex items-center justify-center text-[#D8A915] mb-4 mx-auto sm:mx-0">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-[#050505] font-bold text-sm uppercase tracking-wider mb-2 text-center sm:text-left">Design Philosophy</h4>
              <p className="text-[#666666] text-xs leading-relaxed font-light text-center sm:text-left">
                Simplicity is the ultimate sophistication. I believe in clean layouts, bold visual hierarchy, and purposeful design that speaks instantly.
              </p>
            </div>
          </div>

          {/* Highlights Bullet List */}
          <div className="pt-6 border-t border-black/10">
            <h4 className="text-[#050505] font-semibold text-xs uppercase tracking-wider mb-6 text-center sm:text-left flex items-center justify-center sm:justify-start gap-2">
              <ShieldCheck className="w-4 h-4 text-[#D8A915]" />
              Why International Clients Trust Usman Graphics:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-3xl mx-auto sm:mx-0">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 text-[#050505] text-xs font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#D8A915] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
