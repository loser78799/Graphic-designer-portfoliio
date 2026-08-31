import React from 'react';
import { Mail, Phone, Heart, ExternalLink, Instagram, Facebook, MessageSquare, Globe } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { Logo } from './Logo';
import { SOCIAL_ACCOUNTS } from './SocialLinks';

interface FooterProps {
  onNavigate?: (pageId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (pageId: string) => {
    if (onNavigate) {
      onNavigate(pageId);
    }
  };

  return (
    <footer className="bg-[#050505] border-t border-[#F9CA31]/20 text-[#FAFAF7]/80 pt-16 pb-12 shadow-2xl relative z-10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 group text-left cursor-pointer"
            >
              <Logo size="sm" />
              <span className="text-lg font-semibold text-white group-hover:text-[#D8A915] transition-colors flex items-center gap-1.5">
                {PERSONAL_INFO.brandName}
              </span>
            </button>
            <p className="text-xs leading-relaxed text-[#FAFAF7]/60 font-light">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="text-[10px] text-[#D8A915] font-bold uppercase tracking-wider">
              Principal Designer: {PERSONAL_INFO.name}
            </div>
            
            {/* Social Icons in Footer */}
            <div className="pt-2 flex flex-wrap gap-2">
              {SOCIAL_ACCOUNTS.map((acc, idx) => {
                const IconComp = acc.icon;
                return (
                  <a
                    key={idx}
                    href={acc.url}
                    target={acc.url.startsWith('tel:') ? '_self' : '_blank'}
                    rel={acc.url.startsWith('tel:') ? '' : 'noopener noreferrer'}
                    title={acc.label}
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#F9CA31] text-white hover:text-[#050505] flex items-center justify-center transition-all shadow-sm"
                  >
                    {acc.isTikTok ? (
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1Z"/>
                      </svg>
                    ) : (
                      <IconComp className="w-4 h-4" />
                    )}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-[#D8A915] transition-colors text-left">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#D8A915] transition-colors text-left">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('portfolio')} className="hover:text-[#D8A915] transition-colors text-left">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#D8A915] transition-colors text-left">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs font-light">
              <li><button onClick={() => handleNav('services')} className="hover:text-[#D8A915] transition-colors text-left">Logo Design</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#D8A915] transition-colors text-left">Brand Identity</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#D8A915] transition-colors text-left">YouTube Thumbnails</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#D8A915] transition-colors text-left">Social Media Design</button></li>
              <li><button onClick={() => handleNav('services')} className="hover:text-[#D8A915] transition-colors text-left">Marketing & Banners</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-4">
              Direct Contact
            </h4>
            <div className="space-y-3 text-xs font-light">
              <a href={`mailto:${PERSONAL_INFO.emails[0]}`} className="flex items-center gap-2.5 text-[#FAFAF7]/80 hover:text-[#D8A915] transition-colors break-all">
                <Mail className="w-4 h-4 text-[#D8A915] shrink-0" />
                <span>{PERSONAL_INFO.emails[0]}</span>
              </a>
              <a href={`tel:${PERSONAL_INFO.phones[0].replace(/-/g, '')}`} className="flex items-center gap-2.5 text-[#FAFAF7]/80 hover:text-[#D8A915] transition-colors">
                <Phone className="w-4 h-4 text-[#D8A915] shrink-0" />
                <span>{PERSONAL_INFO.phones[0]}</span>
              </a>
            </div>
            <div className="pt-2">
              <span className="inline-block px-3 py-1 rounded-full bg-[#F9CA31]/20 text-[#F9CA31] text-[10px] font-bold uppercase tracking-wider border border-[#F9CA31]/30">
                Global Clients Welcome
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#FAFAF7]/50 font-light">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.brandName} ({PERSONAL_INFO.name}). All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-[#F9CA31] fill-[#F9CA31]" />
            <span>for International Clients</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

