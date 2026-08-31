import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CeoShowcase } from './components/CeoShowcase';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Testimonials } from './components/Testimonials';
import { PartnersSection } from './components/PartnersSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { LightboxModal } from './components/LightboxModal';
import { INITIAL_PROJECTS } from './data';
import { Project } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleNavigate = (pageId: string) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContact = () => {
    setCurrentPage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleUpdateProject = (updatedProj: Project) => {
    setProjects(prev => prev.map(p => p.id === updatedProj.id ? updatedProj : p));
    setSelectedProject(updatedProj);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-slate-100 flex flex-col selection:bg-[#C5A47E] selection:text-[#0A0A0B]">
      {/* Navigation */}
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} onOpenContact={handleOpenContact} />

      {/* Main Content Pages */}
      <main className="flex-grow pt-20">
        {currentPage === 'home' && (
          <>
            <Hero onOpenContact={handleOpenContact} />
            <CeoShowcase onOpenContact={handleOpenContact} />
            <Portfolio
              projects={projects}
              onSelectProject={(proj) => setSelectedProject(proj)}
            />
            <Services onOpenContact={handleOpenContact} />
            <Testimonials />
            <PartnersSection onOpenContact={handleOpenContact} />
            <Contact />
          </>
        )}
        {currentPage === 'services' && <Services onOpenContact={handleOpenContact} />}
        {currentPage === 'portfolio' && (
          <Portfolio
            projects={projects}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        )}
        {currentPage === 'testimonials' && <Testimonials />}
        {currentPage === 'contact' && <Contact />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Lightbox Modal for Project Preview */}
      <LightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={handleOpenContact}
        onUpdateProject={handleUpdateProject}
      />
    </div>
  );
}
