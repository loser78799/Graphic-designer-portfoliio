import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Briefcase, Grid, MessageSquareQuote, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data';
import { Logo } from './Logo';

export const navPages = [
  { id: 'home', name: 'Home', icon: Home },
  { id: 'services', name: 'Services', icon: Briefcase },
  { id: 'portfolio', name: 'Projects', icon: Grid },
  { id: 'testimonials', name: 'Reviews', icon: MessageSquareQuote },
  { id: 'contact', name: 'Contact', icon: Mail },
];

interface NavbarProps {
  currentPage: string;
  onNavigate: (pageId: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenContact }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md border-b-2 border-[#F9CA31]/40 shadow-xl py-2.5'
          : 'bg-white/90 backdrop-blur-sm border-b border-[#F9CA31]/30 py-3 shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo / Brand */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 group text-left cursor-pointer shrink-0"
        >
          <Logo size="sm" />
          <div>
            <span className="text-sm sm:text-base font-bold tracking-tight text-[#050505] group-hover:text-[#D8A915] transition-colors flex items-center gap-1.5">
              {PERSONAL_INFO.brandName}
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#D8A915] font-semibold tracking-widest uppercase block">
              Graphic Designer
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links distributed equally */}
        <nav className="hidden lg:flex items-center justify-between gap-1 bg-[#FAFAF7] p-1.5 rounded-lg border border-black/5 flex-1 max-w-3xl mx-4 shadow-sm">
          {navPages.map((page) => {
            const Icon = page.icon;
            const isActive = currentPage === page.id;
            return (
              <button
                key={page.id}
                onClick={() => onNavigate(page.id)}
                className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 rounded text-[11px] font-semibold uppercase tracking-wider transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? 'bg-[#F9CA31] text-[#050505] shadow-md font-bold'
                    : 'text-[#666666] hover:text-[#050505] hover:bg-black/5'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#050505]' : 'text-[#D8A915]'}`} />
                <span className="truncate">{page.name}</span>
              </button>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-1.5 bg-[#F9CA31] text-[#050505] font-bold px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider hover:bg-[#D8A915] transition-all shadow-md shrink-0"
          >
            <Mail className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Hire Me</span>
          </button>
        </div>
      </div>

      {/* Mobile & Tablet Compact Icon Bar */}
      <div className="lg:hidden w-full bg-[#FAFAF7] border-t border-black/5 px-2 py-1.5 mt-2 flex items-center justify-between shadow-inner">
        {navPages.map((page) => {
          const Icon = page.icon;
          const isActive = currentPage === page.id;
          return (
            <button
              key={page.id}
              onClick={() => onNavigate(page.id)}
              title={page.name}
              className={`p-2 rounded-md transition-all flex flex-col items-center justify-center shrink-0 ${
                isActive
                  ? 'bg-[#F9CA31] text-[#050505] font-bold shadow'
                  : 'text-[#666666] hover:text-[#050505] hover:bg-black/5'
              }`}
            >
              <Icon className={`w-4 h-4 ${isActive ? 'text-[#050505]' : 'text-[#D8A915]'}`} />
              <span className="text-[8px] uppercase font-semibold tracking-tighter mt-0.5 max-w-[32px] truncate">{page.name}</span>
            </button>
          );
        })}
      </div>
    </header>
  );
};

