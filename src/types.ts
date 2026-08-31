export interface Project {
  id: string;
  title: string;
  category: 'Brand Identity' | 'Logo Design' | 'YouTube Thumbnails' | 'Social Media' | 'Posters & Banners' | 'Marketing' | 'Motion Graphics';
  description: string;
  image: string;
  videoUrl?: string;
  isVideo?: boolean;
  client?: string;
  completedDate?: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  features: string[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  company: string;
  avatar: string;
  rating: number;
  review: string;
  projectType: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
