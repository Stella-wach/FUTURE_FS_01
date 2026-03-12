/**
 * Core TypeScript interfaces for Stella Wachira Portfolio
 */

export type ProjectCategory = 'fullstack' | 'frontend' | 'backend' | 'mobile';

export type AspectRatio = 'portrait' | 'landscape' | 'square';

export interface ProjectImage {
  id: string;
  src: string;
  alt: string;
  aspectRatio: AspectRatio;
  caption?: string;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  coverImage: string;
  images: ProjectImage[];
  description: string;
  client?: string;
  technologies?: string;
  location?: string;
  slug: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface DeveloperInfo {
  name: string;
  tagline: string;
  heroIntroduction: string;
  biography: string;
  approach: string;
  skills: string[];
  certifications: string[];
  education: string;
  location: string;
  email: string;
  phone: string;
  availability: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    portfolio?: string;
  };
  portraitImage: string;
}

// Keep backward compatibility
export type PhotographerInfo = DeveloperInfo;

export interface ContactSubmission {
  name: string;
  email: string;
  projectType: 'fullstack' | 'frontend' | 'consultation';
  message: string;
  timestamp: Date;
}
