import React from 'react';
import { Sparkles, ShieldCheck, ExternalLink } from 'lucide-react';

interface PartnersSectionProps {
  onOpenContact: () => void;
}

interface PartnerItem {
  name: string;
  category: string;
  description: string;
  badge: string;
  logoType: 'interloop' | 'canada' | 'sultani' | 'digitalskills' | 'googleads' | 'canva' | 'freelance';
}

const PARTNERS: PartnerItem[] = [
  {
    name: 'Interloop Pvt. Limited',
    category: 'Global Manufacturing & Brand Partner',
    description: 'Trusted industrial and corporate branding partner.',
    badge: 'Enterprise Partner',
    logoType: 'interloop'
  },
  {
    name: 'Government of Canada',
    category: 'Official Program Partner',
    description: 'Digital skills and workforce development collaboration.',
    badge: 'Verified Partner',
    logoType: 'canada'
  },
  {
    name: 'Sultani Elaste Products (Pvt) Ltd',
    category: 'Corporate Client',
    description: 'Complete visual identity, packaging, and brand assets.',
    badge: 'Client Brand',
    logoType: 'sultani'
  },
  {
    name: 'Digital Skills Center',
    category: 'Educational & Training Partner',
    description: 'Professional graphic design curriculum and training collaborator.',
    badge: 'Collaborator',
    logoType: 'digitalskills'
  },
  {
    name: 'Google Ads UK & USA',
    category: 'Advertising & Marketing Platform',
    description: 'PPC campaign design and digital marketing assets.',
    badge: 'Platform Partner',
    logoType: 'googleads'
  },
  {
    name: 'Canva Creators',
    category: 'Design Template Partner',
    description: 'Professional graphic asset contributions and creator community.',
    badge: 'Creator',
    logoType: 'canva'
  },
  {
    name: 'Fiverr & Upwork Top Rated',
    category: 'Global Freelance Platforms',
    description: 'Serving international clients across US, UK, Canada, and Australia.',
    badge: 'Top Rated Plus',
    logoType: 'freelance'
  }
];

export const PartnersSection: React.FC<PartnersSectionProps> = ({ onOpenContact }) => {
  const renderLogoGraphic = (type: PartnerItem['logoType']) => {
    switch (type) {
      case 'interloop':
        return (
          <div className="w-16 h-16 rounded-xl bg-white shadow-lg border-2 border-[#F9CA31] flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Interloop diamond/hexagon brand insignia */}
              <polygon points="50,5 95,50 50,95 5,50" fill="#050505" />
              <polygon points="50,15 85,50 50,85 15,50" fill="#F9CA31" />
              <text x="50" y="58" fontFamily="Georgia, serif" fontSize="30" fontWeight="bold" fill="#050505" textAnchor="middle">i</text>
            </svg>
          </div>
        );
      case 'canada':
        return (
          <div className="w-16 h-16 rounded-xl bg-white shadow-lg border-2 border-[#DA291C]/40 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="12" fill="#DA291C" opacity="0.12" />
              {/* Canadian Flag Header / Maple Leaf Insignia */}
              <rect x="15" y="25" width="70" height="50" rx="4" fill="#DA291C" />
              <rect x="30" y="25" width="40" height="50" fill="#FFFFFF" />
              <path d="M50 35 L53 45 L62 43 L57 50 L65 58 L55 58 L50 68 L45 58 L35 58 L43 50 L38 43 L47 45 Z" fill="#DA291C" />
            </svg>
          </div>
        );
      case 'sultani':
        return (
          <div className="w-16 h-16 rounded-xl bg-white shadow-lg border-2 border-[#F9CA31] flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="42" stroke="#050505" strokeWidth="4" fill="#FAFAF7" />
              <path d="M30 65 L50 30 L70 65 Z" fill="#D8A915" />
              <text x="50" y="58" fontFamily="Georgia, serif" fontSize="18" fontWeight="bold" fill="#050505" textAnchor="middle">S</text>
            </svg>
          </div>
        );
      case 'digitalskills':
        return (
          <div className="w-16 h-16 rounded-xl bg-white shadow-lg border-2 border-black/20 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="15" y="25" width="70" height="50" rx="8" fill="#050505" />
              <rect x="25" y="35" width="50" height="30" rx="4" fill="#F9CA31" />
              <path d="M40 50 L48 58 L62 42" stroke="#050505" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        );
      case 'googleads':
        return (
          <div className="w-16 h-16 rounded-xl bg-white shadow-lg border-2 border-black/20 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="35" cy="50" r="22" fill="#4285F4" opacity="0.9" />
              <circle cx="65" cy="50" r="22" fill="#F9CA31" opacity="0.9" />
              <path d="M50 30 L75 70 L25 70 Z" fill="#34A853" opacity="0.9" />
            </svg>
          </div>
        );
      case 'canva':
        return (
          <div className="w-16 h-16 rounded-xl bg-white shadow-lg border-2 border-[#00C4CC]/50 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="45" fill="#00C4CC" opacity="0.15" />
              <text x="50" y="62" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" fill="#00C4CC" textAnchor="middle">Canva</text>
            </svg>
          </div>
        );
      case 'freelance':
        return (
          <div className="w-16 h-16 rounded-xl bg-white shadow-lg border-2 border-[#14A800]/50 flex items-center justify-center p-2 group-hover:scale-110 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="100" height="100" rx="16" fill="#14A800" opacity="0.15" />
              <text x="50" y="60" fontFamily="Arial, sans-serif" fontSize="36" fontWeight="bold" fill="#14A800" textAnchor="middle">Up</text>
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-[#FAFAF7] relative overflow-hidden border-t border-black/5">
      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_90%,rgba(249,202,49,0.08),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#F9CA31]/40 text-[#050505] text-xs font-semibold mb-4 uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-[#D8A915]" />
            <span>Trusted By & Collaborations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#050505] tracking-tight">
            Trusted By Global Brands & <span className="gold-gradient-text">Verified Partners</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#666666] font-light">
            Working with trusted brands, businesses and creative partners to deliver exceptional results.
          </p>
        </div>

        {/* Partner Logo Container (Inspired by reference image layout with modern styling) */}
        <div className="bg-white rounded-[24px] border border-[#050505]/15 p-8 sm:p-12 shadow-2xl relative">
          
          {/* Top Decorative Gold Accent Bar */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#F9CA31] to-transparent rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
            {PARTNERS.map((partner, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl flex flex-col justify-between group transition-all duration-300 border border-black/10 bg-[#FAFAF7] hover:bg-white hover:border-[#F9CA31] hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#F9CA31]/30 cursor-pointer"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    {renderLogoGraphic(partner.logoType)}
                    <span className="px-2.5 py-1 rounded-full bg-white border border-[#F9CA31]/30 text-[#050505] text-[9px] font-bold uppercase tracking-wider shadow-sm">
                      {partner.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-[#050505] mb-1 group-hover:text-[#D8A915] transition-colors">
                    {partner.name}
                  </h3>

                  <p className="text-[11px] font-medium text-[#D8A915] uppercase tracking-wider mb-2">
                    {partner.category}
                  </p>

                  <p className="text-xs text-[#666666] leading-relaxed font-light">
                    {partner.description}
                  </p>
                </div>

                <div className="pt-4 mt-5 border-t border-black/5 flex items-center justify-between text-[10px] text-[#666666] font-semibold uppercase tracking-wider">
                  <span>Verified Entity</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#D8A915] group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action Footer inside container */}
          <div className="mt-12 pt-8 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F9CA31]/20 flex items-center justify-center text-[#D8A915] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-[#050505]">Ready to start your project?</h4>
                <p className="text-xs text-[#666666]">Join our list of satisfied international clients and top-tier partners.</p>
              </div>
            </div>

            <button
              onClick={onOpenContact}
              className="px-6 py-3 bg-[#F9CA31] hover:bg-[#D8A915] text-[#050505] font-bold rounded-xl text-xs uppercase tracking-wider shadow-lg transition-all shrink-0 cursor-pointer hover:scale-105"
            >
              Collaborate With Me
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
