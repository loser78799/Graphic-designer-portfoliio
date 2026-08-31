import React, { useState } from 'react';
import { X, ExternalLink, Calendar, User, Tag, Upload, Play, AlertCircle } from 'lucide-react';
import { Project } from '../types';

interface LightboxModalProps {
  project: Project | null;
  onClose: () => void;
  onOpenContact: () => void;
  onUpdateProject?: (updatedProject: Project) => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ project, onClose, onOpenContact }) => {
  if (!project) return null;

  const currentVideoSrc = project.videoUrl;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0A0B]/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl bg-[#121214] border border-white/10 rounded overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161618]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded bg-[#C5A47E]/10 text-[#C5A47E] text-[10px] font-bold uppercase tracking-wider border border-[#C5A47E]/30">
              {project.category}
            </span>
            <h3 className="text-base font-bold text-white truncate max-w-md">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded bg-white/5 hover:bg-[#C5A47E] hover:text-[#0A0A0B] text-white/70 flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body: Scrollable */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Large High-Resolution Preview / Video Player */}
          <div className="relative rounded overflow-hidden bg-[#0A0A0B] border border-white/10 shadow-inner group">
            {project.isVideo ? (
              <div className="relative w-full bg-black flex flex-col items-center justify-center">
                {currentVideoSrc ? (
                  <video
                    key={currentVideoSrc}
                    controls
                    playsInline
                    autoPlay
                    preload="auto"
                    className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                    onError={(e) => console.error("Video playback error:", e)}
                  >
                    <source src={currentVideoSrc} type="video/mp4" />
                    <source src={currentVideoSrc} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <div className="py-16 px-4 text-center space-y-4">
                    <AlertCircle className="w-10 h-10 text-[#F9CA31] mx-auto" />
                    <p className="text-white text-xs">No video source attached yet.</p>
                  </div>
                )}
              </div>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[60vh] object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            )}
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4 border-t border-white/10">
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-base font-bold text-white uppercase tracking-wider">Project Overview</h4>
              <p className="text-white/70 text-xs leading-relaxed font-light">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#161618] text-[#C5A47E] text-[10px] font-medium border border-white/10 uppercase tracking-wider"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-[#161618] p-6 rounded border border-white/10 space-y-4">
              <h4 className="text-white font-bold text-xs uppercase tracking-wider">Project Details</h4>
              
              {project.client && (
                <div className="flex items-center gap-3 text-white/80 text-xs">
                  <User className="w-4 h-4 text-[#C5A47E] shrink-0" />
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase tracking-wider">Client</span>
                    <span className="font-semibold">{project.client}</span>
                  </div>
                </div>
              )}

              {project.completedDate && (
                <div className="flex items-center gap-3 text-white/80 text-xs">
                  <Calendar className="w-4 h-4 text-[#C5A47E] shrink-0" />
                  <div>
                    <span className="text-[10px] text-white/40 block uppercase tracking-wider">Completed</span>
                    <span className="font-semibold">{project.completedDate}</span>
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-white/10">
                <button
                  onClick={() => {
                    onClose();
                    onOpenContact();
                  }}
                  className="w-full bg-[#C5A47E] text-[#0A0A0B] font-bold py-3 px-4 rounded shadow text-center text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                >
                  <span>Start Similar Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

