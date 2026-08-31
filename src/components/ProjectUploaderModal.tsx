import React, { useState } from 'react';
import { X, Upload, PlusCircle, Image as ImageIcon } from 'lucide-react';
import { Project } from '../types';

interface ProjectUploaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddProject: (project: Project) => void;
}

export const ProjectUploaderModal: React.FC<ProjectUploaderModalProps> = ({
  isOpen,
  onClose,
  onAddProject,
}) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState<Project['category']>('Brand Identity');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [client, setClient] = useState('');
  const [tagsInput, setTagsInput] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !imageUrl) return;

    const newProject: Project = {
      id: `custom-${Date.now()}`,
      title,
      category,
      description,
      image: imageUrl,
      client: client || 'Direct Client',
      completedDate: new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' }),
      tags: tagsInput ? tagsInput.split(',').map((t) => t.trim()) : [category, 'Custom Design']
    };

    onAddProject(newProject);
    setTitle('');
    setDescription('');
    setImageUrl('');
    setClient('');
    setTagsInput('');
    onClose();
  };

  const handleSampleImageSelect = (url: string) => {
    setImageUrl(url);
  };

  const sampleImages = [
    "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A0A0B]/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-[#121214] border border-white/10 rounded overflow-hidden shadow-2xl flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#161618]">
          <div className="flex items-center gap-2">
            <PlusCircle className="w-5 h-5 text-[#C5A47E]" />
            <h3 className="text-base font-bold text-white uppercase tracking-wider">Add New Graphic Design Project</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded bg-white/5 hover:bg-[#C5A47E] hover:text-[#0A0A0B] text-white/70 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="overflow-y-auto p-6 sm:p-8 space-y-6">
          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
              Project Title
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. Modern Tech Startup Brand Identity"
              className="w-full bg-[#161618] border border-white/10 rounded px-4 py-3 text-white text-xs focus:outline-none focus:border-[#C5A47E] transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as Project['category'])}
                className="w-full bg-[#161618] border border-white/10 rounded px-4 py-3 text-white text-xs focus:outline-none focus:border-[#C5A47E] transition-colors"
              >
                <option value="Brand Identity">Brand Identity</option>
                <option value="Logo Design">Logo Design</option>
                <option value="YouTube Thumbnails">YouTube Thumbnails</option>
                <option value="Social Media">Social Media</option>
                <option value="Posters & Banners">Posters & Banners</option>
                <option value="Marketing">Marketing</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
                Client Name (Optional)
              </label>
              <input
                type="text"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                placeholder="e.g. Global Tech Inc."
                className="w-full bg-[#161618] border border-white/10 rounded px-4 py-3 text-white text-xs focus:outline-none focus:border-[#C5A47E] transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
              Project Image URL (or select sample below)
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                required
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full bg-[#161618] border border-white/10 rounded px-4 py-3 text-white text-xs focus:outline-none focus:border-[#C5A47E] transition-colors"
              />
            </div>
            
            <div className="mt-3">
              <span className="text-[10px] text-white/50 block mb-2 uppercase tracking-wider">Or choose a professional design showcase sample:</span>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {sampleImages.map((url, idx) => (
                  <button
                    type="button"
                    key={idx}
                    onClick={() => handleSampleImageSelect(url)}
                    className={`w-16 h-12 rounded overflow-hidden border shrink-0 transition-all ${
                      imageUrl === url ? 'border-[#C5A47E] scale-105' : 'border-white/10 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={url} alt={`Sample ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
              Short Description
            </label>
            <textarea
              required
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the design challenge, creative solution, and results..."
              className="w-full bg-[#161618] border border-white/10 rounded px-4 py-3 text-white text-xs focus:outline-none focus:border-[#C5A47E] transition-colors resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold uppercase tracking-wider text-white/70 mb-2">
              Tags (Comma separated)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="Logo, Branding, Photoshop, Vector"
              className="w-full bg-[#161618] border border-white/10 rounded px-4 py-3 text-white text-xs focus:outline-none focus:border-[#C5A47E] transition-colors"
            />
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded bg-white/5 hover:bg-white/10 text-white text-xs uppercase tracking-wider font-semibold transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-[#C5A47E] text-[#0A0A0B] font-bold px-6 py-2.5 rounded shadow hover:opacity-95 transition-opacity text-xs uppercase tracking-wider flex items-center gap-2"
            >
              <Upload className="w-4 h-4" />
              <span>Add Project</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
