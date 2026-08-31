import React from 'react';
import { Sparkles, Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#FAFAF7] relative">
      <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#F9CA31]/6 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F9CA31]/40 text-[#050505] text-xs font-semibold mb-4 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A915]" />
            <span>Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight">
            Trusted by Creators & <span className="gold-gradient-text">Brands Worldwide</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666] font-light">
            Here's what international clients and partners have to say about working with Usman Graphics.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((test) => (
            <div
              key={test.id}
              className="brand-card brand-card-hover p-8 rounded-2xl flex flex-col justify-between relative group"
            >
              <div className="absolute top-6 right-6 text-[#F9CA31]/20 group-hover:text-[#F9CA31]/40 transition-colors">
                <Quote className="w-10 h-10" />
              </div>

              <div>
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F9CA31] text-[#F9CA31]" />
                  ))}
                </div>

                <p className="text-[#050505]/90 text-xs leading-relaxed mb-8 font-light italic">
                  "{test.review}"
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-black/10">
                <img
                  src={test.avatar}
                  alt={test.clientName}
                  className="w-11 h-11 rounded-xl object-cover border border-black/10"
                />
                <div>
                  <h4 className="text-[#050505] font-bold text-sm">{test.clientName}</h4>
                  <p className="text-[10px] text-[#D8A915] uppercase tracking-wider font-semibold">{test.clientTitle}, {test.company}</p>
                  <span className="text-[10px] text-[#666666] block mt-0.5">Project: {test.projectType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
