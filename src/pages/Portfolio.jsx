import { projects } from '@/data/projects.js';
import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid.jsx';
import { SEOHead } from '@/components/seo/SEOHead.jsx';
import { motion } from 'framer-motion';

export default function Portfolio() {
  return (
    <>
      <SEOHead title="Portfolio" description="Browse my complete portfolio featuring full-stack, frontend, backend, and mobile development projects." />
      
      <div className="min-h-screen relative z-10">
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center space-y-4 mb-12">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-bold">
              My <span className="text-gradient-purple">Projects</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-lg text-muted-foreground">
              A curated collection of software development projects
            </motion.p>
          </div>
          <PortfolioGrid projects={projects} />
        </section>
        <div className="h-16" />
      </div>
    </>
  );
}
