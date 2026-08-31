import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import defaultPortraitImg from '../assets/images/portrait_sketch_1787835296137.jpg';

interface ProfilePicProps {
  className?: string;
}

export const ProfilePic: React.FC<ProfilePicProps> = ({ className = '' }) => {
  const [photoUrl, setPhotoUrl] = useState<string>(() => {
    return localStorage.getItem('usman_profile_pic') || defaultPortraitImg;
  });

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPhotoUrl(objectUrl);
      localStorage.setItem('usman_profile_pic', objectUrl);
    }
  };

  return (
    <div className={`relative group inline-block ${className}`}>
      <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto rounded-full overflow-hidden shadow-2xl border-4 border-[#F9CA31] bg-[#FAFAF7] ring-4 ring-[#F9CA31]/20">
        <img
          src={photoUrl}
          alt="Rai Usman Kharal - CEO Usman Graphics"
          className="w-full h-full object-cover object-center filter contrast-110 group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Hover Upload Overlay */}
        <label className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer text-white p-2 text-center">
          <Camera className="w-6 h-6 text-[#F9CA31] mb-1 animate-bounce" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-[#F9CA31]">Change Photo</span>
          <input
            type="file"
            accept="image/*"
            onChange={handlePhotoUpload}
            className="hidden"
          />
        </label>
      </div>
      <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-[#F9CA31] text-[#050505] text-[10px] font-bold uppercase tracking-wider shadow-md whitespace-nowrap">
        CEO & Founder
      </div>
    </div>
  );
};

