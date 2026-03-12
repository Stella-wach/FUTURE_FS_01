import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'Event App System',
    category: 'fullstack',
    year: '2025',
    slug: 'event-app-system',
    coverImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1080&q=80',
    description: 'A complete event management platform with user authentication, MPESA payment integration via Safaricom STK push, and RESTful API endpoints for creating, updating, and managing events. Integrated MongoDB for storing user profiles, event details, and registration data.',
    technologies: 'React.js, Node.js, Express.js, MongoDB, M-PESA API',
    location: 'Nairobi, Kenya',
    githubUrl: 'https://github.com/Stella-wach',
    images: [
      { id: '1-1', src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1080&q=80', alt: 'Event management dashboard', aspectRatio: 'landscape' },
      { id: '1-2', src: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1080&q=80', alt: 'Event listing page', aspectRatio: 'landscape' },
      { id: '1-3', src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1080&q=80', alt: 'Payment integration flow', aspectRatio: 'landscape' },
      { id: '1-4', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80', alt: 'API architecture diagram', aspectRatio: 'square' }
    ]
  },
  {
    id: '2',
    title: 'Weather App',
    category: 'frontend',
    year: '2025',
    slug: 'weather-app',
    coverImage: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1080&q=80',
    description: 'A mobile-first responsive weather application integrating OpenWeatherMap API for real-time weather data. Features asynchronous data fetching, current conditions display, forecasts, and weather alerts with elegant Tailwind CSS styling.',
    technologies: 'HTML5, Tailwind CSS, Vanilla JavaScript, OpenWeatherMap API',
    location: 'Nairobi, Kenya',
    githubUrl: 'https://github.com/Stella-wach',
    images: [
      { id: '2-1', src: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?auto=format&fit=crop&w=1080&q=80', alt: 'Weather dashboard', aspectRatio: 'landscape' },
      { id: '2-2', src: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&w=1080&q=80', alt: 'Forecast view', aspectRatio: 'landscape' },
      { id: '2-3', src: 'https://images.unsplash.com/photo-1561484930-998b6a7b22e8?auto=format&fit=crop&w=1080&q=80', alt: 'Mobile responsive design', aspectRatio: 'portrait' },
      { id: '2-4', src: 'https://images.unsplash.com/photo-1530908295418-a12e326966ba?auto=format&fit=crop&w=1080&q=80', alt: 'Weather alerts', aspectRatio: 'square' }
    ]
  },
  {
    id: '3',
    title: 'Hotel Booking System',
    category: 'fullstack',
    year: '2025',
    slug: 'hotel-booking-system',
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1080&q=80',
    description: 'A comprehensive hotel reservation platform built with Laravel and PHP. Features database architecture for room inventory management, booking workflows with availability checking, admin dashboard for hotel staff, and MPESA STK push payment processing.',
    technologies: 'Laravel, PHP, MySQL, M-PESA API',
    location: 'Nairobi, Kenya',
    githubUrl: 'https://github.com/Stella-wach/Hotel-Booking-System',
    images: [
      { id: '3-1', src: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1080&q=80', alt: 'Hotel booking interface', aspectRatio: 'landscape' },
      { id: '3-2', src: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1080&q=80', alt: 'Room listing page', aspectRatio: 'landscape' },
      { id: '3-3', src: 'https://images.unsplash.com/photo-1590490360182-c33d955e4c47?auto=format&fit=crop&w=1080&q=80', alt: 'Admin dashboard', aspectRatio: 'landscape' },
      { id: '3-4', src: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1080&q=80', alt: 'Booking confirmation flow', aspectRatio: 'landscape' }
    ]
  },
  {
    id: '4',
    title: 'Globe App',
    category: 'mobile',
    year: '2025',
    slug: 'globe-app',
    coverImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1080&q=80',
    description: 'A cross-platform e-commerce mobile application built with Flutter and Dart. Features dual dashboards for admin and user roles, M-PESA payment integration for seamless mobile payments, Firebase backend for real-time data synchronization, and Node.js server for payment processing logic.',
    technologies: 'Flutter, Dart, Firebase, Node.js, M-PESA API',
    location: 'Nairobi, Kenya',
    githubUrl: 'https://github.com/Stella-wach',
    liveUrl: 'https://globe-app-8da95.web.app/',
    images: [
      { id: '4-1', src: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1080&q=80', alt: 'Globe App e-commerce storefront', aspectRatio: 'landscape' },
      { id: '4-2', src: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1080&q=80', alt: 'Mobile payment integration', aspectRatio: 'landscape' },
      { id: '4-3', src: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1080&q=80', alt: 'Flutter mobile app interface', aspectRatio: 'portrait' },
      { id: '4-4', src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1080&q=80', alt: 'Admin dashboard overview', aspectRatio: 'landscape' }
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => project.category === category);
};

export const getFeaturedProjects = (): Project[] => {
  return projects.slice(0, 4);
};

export const getAdjacentProjects = (currentSlug: string): { prev: Project | null; next: Project | null } => {
  const currentIndex = projects.findIndex(p => p.slug === currentSlug);
  return {
    prev: currentIndex > 0 ? projects[currentIndex - 1] : null,
    next: currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null
  };
};
