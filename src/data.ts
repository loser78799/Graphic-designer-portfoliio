import { Project, Service, Testimonial } from './types';
import welcomeImg from './assets/images/usman_graphics_welcome_1787835818196.jpg';
import portfolioImg from './assets/images/usman_graphics_portfolio_1787835841656.jpg';
import skillsImg from './assets/images/usman_graphics_skills_1787835865277.jpg';
import storyImg from './assets/images/usman_graphics_story_1787835886529.jpg';

export const PERSONAL_INFO = {
  name: "Rai Usman Kharal",
  brandName: "Usman Graphics",
  title: "CEO - Usman Graphics",
  tagline: "Graphics, Video Editing, SMM Marketing & Content Writing with 3 Years Experience for International Clients.",
  bio: "Hello! I'm Rai Usman Kharal, CEO of Usman Graphics. Specializing in Graphics, Video Editing, SMM Marketing & Content Writing with 3 Years experience serving international clients. I help global brands transform their vision into unforgettable visual identities and digital excellence.",
  approach: "Every project is crafted with meticulous attention to detail, combining top-tier graphic design, professional video editing, and strategic SMM marketing for international success.",
  emails: [
    "raiusmank38@gmail.com",
    "usmankhank55786@gmail.com",
    "raiusmanedits@gmail.com"
  ],
  phones: [
    "0343-5402784",
    "0304-6497944"
  ],
  location: "Pakistan (Working Globally with International Clients)",
  experienceYears: "3 Years",
  projectsCompleted: "500+",
  satisfiedClients: "350+"
};

export const INITIAL_PROJECTS: Project[] = [
  {
    id: "proj-video-1",
    title: "Usman Graphics 3D Gold Logo & Brand Intro Video",
    category: "Motion Graphics",
    description: "Cinematic 3D gold and black motion graphics intro video for Usman Graphics. Showcases high-end logo animation, pen-tool icon craftsmanship, and professional visual branding solutions.",
    image: welcomeImg,
    isVideo: true,
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    client: "Usman Graphics",
    completedDate: "2026",
    tags: ["Motion Graphics", "3D Animation", "Gold Branding", "Intro Video"]
  },
  {
    id: "proj-video-2",
    title: "CEO Rai Usman Kharal Official Business Showcase Video",
    category: "Brand Identity",
    description: "Official promotional video presentation featuring CEO Rai Usman Kharal, portrait sketch artistry, complete social media channels (Instagram @usmangraphics55, Facebook, TikTok @usmangraphics23), and direct WhatsApp (0343-5402784) & Call (0304-6497944) contact info.",
    image: portfolioImg,
    isVideo: true,
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    client: "Rai Usman Kharal (CEO)",
    completedDate: "2026",
    tags: ["Business Showcase", "CEO Profile", "Social Media", "Direct Contact"]
  },
  {
    id: "proj-1",
    title: "Welcome to Usman Graphics Luxury Branding",
    category: "Brand Identity",
    description: "Luxurious gold and white welcome branding design featuring elegant calligraphy typography, ornate details, and global contact credentials.",
    image: welcomeImg,
    client: "Usman Graphics Global",
    completedDate: "2026",
    tags: ["Brand Identity", "Luxury Typography", "Gold Foil", "Stationery"]
  },
  {
    id: "proj-2",
    title: "Creative Portfolio 2024 - Master Presentation",
    category: "Marketing",
    description: "Professional graphic design portfolio cover and overview featuring portrait sketch, expert graphic design, digital marketing, and freelance services.",
    image: portfolioImg,
    client: "International Clients",
    completedDate: "2024",
    tags: ["Portfolio", "Digital Marketing", "Freelancing", "Branding"]
  },
  {
    id: "proj-3",
    title: "Skills & Expertise Showcase Suite",
    category: "Social Media",
    description: "Comprehensive skills presentation highlighting Graphic Design, AI Video Editing, Social Media Marketing, Digital Marketing, Google Ads, and Account Monetization.",
    image: skillsImg,
    client: "Global Agencies",
    completedDate: "2026",
    tags: ["Skills", "Social Media Marketing", "AI Video Editing", "Google Ads"]
  },
  {
    id: "proj-4",
    title: "Our Story, Mission, Vision & Core Values",
    category: "Brand Identity",
    description: "Corporate profile and storytelling graphic showcasing company mission, vision, innovation, trust, integrity, excellence, and collaboration.",
    image: storyImg,
    client: "Usman Graphics",
    completedDate: "2026",
    tags: ["Mission & Vision", "Core Values", "Corporate Profile", "Storytelling"]
  }
];

export const SERVICES: Service[] = [
  {
    id: "srv-1",
    title: "Logo Design",
    description: "Crafting memorable, timeless, and versatile logo marks that capture your brand's core essence and stand out in any market.",
    iconName: "PenTool",
    features: ["Vector Source Files", "Multiple Initial Concepts", "Unlimited Revisions", "Full Commercial Rights"]
  },
  {
    id: "srv-2",
    title: "Brand Identity",
    description: "Building cohesive visual systems including color palettes, typography rules, business cards, and brand guidelines.",
    iconName: "Layers",
    features: ["Brand Guidelines PDF", "Stationery Design", "Social Media Kits", "Color & Font Hierarchy"]
  },
  {
    id: "srv-3",
    title: "YouTube Thumbnails",
    description: "Designing high-CTR, click-worthy custom thumbnails optimized for audience retention, curiosity, and channel growth.",
    iconName: "PlaySquare",
    features: ["High-Impact Visuals", "Psychological Hook Design", "Fast 24h Turnaround", "PSD Source Files"]
  },
  {
    id: "srv-4",
    title: "Social Media Design",
    description: "Engaging Instagram posts, stories, carousels, and LinkedIn banners tailored to elevate your online presence.",
    iconName: "Share2",
    features: ["Cohesive Feed Templates", "Carousel Storyboards", "Platform Optimized", "Editable Canva/PSD Files"]
  },
  {
    id: "srv-5",
    title: "Posters & Banners",
    description: "Eye-catching print and digital promotional materials for events, product launches, advertisements, and exhibitions.",
    iconName: "Image",
    features: ["Print-Ready CMYK Files", "High-Resolution Output", "Custom Typography", "Creative Composition"]
  },
  {
    id: "srv-6",
    title: "Photo Editing",
    description: "Professional retouching, color grading, background removal, object manipulation, and advanced composite imagery.",
    iconName: "Sliders",
    features: ["Advanced Retouching", "Color Correction", "Background Removal", "High-End Compositing"]
  },
  {
    id: "srv-7",
    title: "Marketing Designs",
    description: "Conversion-focused ad creatives, landing page graphics, email banners, and promotional flyers to boost sales.",
    iconName: "Target",
    features: ["High Conversion Focus", "Ad Platform Specs", "A/B Testing Variations", "Clean Layouts"]
  },
  {
    id: "srv-8",
    title: "Creative Visual Designs",
    description: "Unique conceptual digital illustrations, album covers, book covers, and bespoke visual art projects.",
    iconName: "Sparkles",
    features: ["Original Artwork", "Bespoke Concepting", "High-Res Print & Web", "Full Ownership"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    clientName: "Marcus Vance",
    clientTitle: "Founder & CEO",
    company: "Apex Fitness (USA)",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review: "Usman Graphics delivered an absolute masterpiece for our brand identity. The logo and visual assets instantly elevated our brand value. Communication was lightning fast and professional throughout!",
    projectType: "Brand Identity & Logo"
  },
  {
    id: "test-2",
    clientName: "Sarah Jenkins",
    clientTitle: "Content Director",
    company: "Nexus Gaming (UK)",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review: "Our YouTube click-through rate jumped by 34% within two weeks of using Usman's thumbnail designs. Incomparable quality and an intuitive grasp of what audiences click on!",
    projectType: "YouTube Thumbnails"
  },
  {
    id: "test-3",
    clientName: "Liam O'Connor",
    clientTitle: "Marketing Lead",
    company: "TechFlow SaaS (Australia)",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    review: "Working with Usman was an absolute breeze. Clean designs delivered ahead of schedule, with immaculate attention to detail. Will definitely hire again for future campaigns.",
    projectType: "Social Media & Marketing"
  }
];

export const WHY_CHOOSE_ME = [
  {
    title: "Creative & Original Designs",
    description: "100% custom-crafted graphics built from scratch to match your unique brand identity.",
    icon: "Palette"
  },
  {
    title: "Attention to Detail",
    description: "Meticulous focus on color theory, typography hierarchy, and flawless pixel alignment.",
    icon: "Eye"
  },
  {
    title: "Professional Quality",
    description: "International standard output suitable for top-tier agencies, corporations, and creators.",
    icon: "Award"
  },
  {
    title: "Client-Focused Approach",
    description: "Your vision is our priority. We listen closely and iterate until you are 100% thrilled.",
    icon: "HeartHandshake"
  },
  {
    title: "Fast Communication",
    description: "Prompt responses, clear updates, and smooth project management from start to delivery.",
    icon: "Zap"
  },
  {
    title: "Modern Design Trends",
    description: "Always ahead of the curve with cutting-edge visual styles, sleek minimalism, and bold aesthetics.",
    icon: "TrendingUp"
  }
];

export const DESIGN_PROCESS = [
  {
    step: "01",
    title: "Discover",
    description: "We analyze your brand goals, target audience, competitors, and design preferences to set a clear creative direction.",
    icon: "Compass"
  },
  {
    step: "02",
    title: "Plan",
    description: "We brainstorm concepts, sketch initial wireframes, curate color palettes, and establish the typography hierarchy.",
    icon: "FileText"
  },
  {
    step: "03",
    title: "Design",
    description: "We craft the high-end visuals with precision, incorporating your feedback through collaborative refinement rounds.",
    icon: "PenTool"
  },
  {
    step: "04",
    title: "Deliver",
    description: "We export and package all production-ready files in all required formats (vector, high-res web/print) for immediate use.",
    icon: "CheckCircle2"
  }
];
