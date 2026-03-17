import { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { ParticleBackground } from '@/components/ui/ParticleBackground';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col relative">
      <ParticleBackground />
      <Header />
      <main id="main-content" className="flex-1 pt-16 relative z-10" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
}