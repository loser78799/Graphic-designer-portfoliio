import React from 'react';
import { Award, Sparkles, CheckCircle2, Globe } from 'lucide-react';
import ceoPhoto from '../assets/images/ceo_uploaded_portrait_1788106586028.jpg';

interface CeoShowcaseProps {
  onOpenContact: () => void;
}

export const CeoShowcase: React.FC<CeoShowcaseProps> = ({ onOpenContact }) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAFAF7] text-[#050505] relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F9CA31]/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* CEO Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#F9CA31] to-[#D8A915] rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-2xl overflow-hidden bg-white border-2 border-[#F9CA31]/40 shadow-2xl">
                <img
                  src={ceoPhoto}
                  alt="Rai Usman Kharal - CEO Usman Graphics"
                  className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />

                {/* Floating Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-[#F9CA31]/30 flex items-center justify-between shadow-lg">
                  <div>
                    <h4 className="text-sm font-bold text-[#050505]">Rai Usman Kharal</h4>
                    <p className="text-[11px] text-[#D8A915] font-medium">CEO & Founder, Usman Graphics</p>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-[#F9CA31]/20 flex items-center justify-center text-[#D8A915]">
                    <Award className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CEO Details & Bio */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F9CA31]/40 text-[#050505] text-xs font-semibold uppercase tracking-widest shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#D8A915]" />
              <span>Leadership & Professional Expertise</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-[#050505] leading-tight">
              Rai Usman Kharal <span className="gold-gradient-text block mt-1">CEO & Founder, Usman Graphics</span>
            </h2>

            <p className="text-[#666666] text-base sm:text-lg leading-relaxed font-light">
              Specializing in <strong className="text-[#050505] font-semibold">Graphics, Video Editing, SMM Marketing & Content Writing</strong> with <strong className="text-[#D8A915] font-semibold">3 Years of Professional Experience</strong> serving international clients worldwide.
            </p>

            {/* Key Expertise Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "Professional Graphic Design & Branding",
                "Cinematic Video Editing & Post-Production",
                "Strategic SMM Marketing Solutions",
                "High-Impact Content Writing",
                "Serving International Clients Globally",
                "3+ Years of Proven Industry Excellence"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-white p-3 rounded-xl border border-black/5 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#D8A915] flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-[#050505] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-8 py-3.5 rounded-xl bg-[#F9CA31] text-[#050505] text-xs sm:text-sm font-bold uppercase tracking-wider shadow-lg hover:bg-[#D8A915] transition-all flex items-center gap-2"
              >
                <Globe className="w-4 h-4" />
                <span>Work With Rai Usman</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
