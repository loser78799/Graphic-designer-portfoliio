import React from 'react';
import { ArrowRight, Sparkles, Award, Star, CheckCircle, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { Logo } from './Logo';
import { ProfilePic } from './ProfilePic';
import { SocialLinks } from './SocialLinks';

interface HeroProps {
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenContact }) => {
  return (
    <section id="home" className="relative min-h-[80vh] pt-12 pb-20 flex items-center justify-center overflow-hidden bg-white text-center">
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#F9CA31]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10 w-full">
        <div className="flex flex-col items-center">
          
          {/* Portrait Photo in Circle Shape at the Top with Upload Capability */}
          <div className="mb-4">
            <ProfilePic />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FAFAF7] border border-[#F9CA31]/40 text-[#050505] text-xs font-semibold mb-4 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A915]" />
            <span>CEO & Founder — Usman Graphics</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#050505] leading-[1.15] mb-5">
            Rai Usman Kharal <span className="gold-gradient-text block mt-2">Graphics, Video Editing, SMM Marketing & Content Writing</span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-[#666666] max-w-2xl mx-auto mb-8 leading-relaxed font-light">
            Hi, I'm <strong className="text-[#050505] font-semibold">Rai Usman Kharal</strong>, CEO of <span className="text-[#D8A915] font-semibold">Usman Graphics</span>. With <strong className="text-[#050505]">3 Years of Professional Experience</strong> serving international clients, I deliver top-tier graphic design, video editing, SMM marketing, and content writing solutions that elevate brands worldwide.
          </p>



          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-10">
            <a
              href="#portfolio"
              className="w-full sm:w-auto bg-[#F9CA31] text-[#050505] font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#D8A915] transition-all flex items-center justify-center gap-3 text-xs uppercase tracking-wider group"
            >
              <span>View My Work</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto bg-white hover:bg-[#FAFAF7] text-[#050505] font-bold px-8 py-4 rounded-xl border-2 border-black/10 hover:border-[#F9CA31] shadow-sm transition-all flex items-center justify-center gap-2 text-xs uppercase tracking-wider"
            >
              Let's Work Together
            </button>
          </div>

          {/* Social Media & Direct Contact Links */}
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center pt-6 border-t border-black/10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#666666] mb-4">
              Connect Directly with Usman Graphics
            </span>
            <SocialLinks />
          </div>

        </div>
      </div>
    </section>
  );
};

