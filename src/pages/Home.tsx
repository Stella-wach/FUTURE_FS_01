import { motion } from 'framer-motion';
import { Eye, Download, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { photographerInfo } from '@/data/photographer';
import { getFeaturedProjects } from '@/data/projects';
import { SEOHead } from '@/components/seo/SEOHead';
import { SkillsGrid } from '@/components/sections/SkillsGrid';
import { FeaturedProjects } from '@/components/sections/FeaturedProjects';
import { ContactSection } from '@/components/sections/ContactSection';
import stellaPortrait from '@/assets/stella-portrait.jpeg';

const socialLinks = [
  { icon: Linkedin, href: photographerInfo.socialLinks.linkedin, label: 'LinkedIn' },
  { icon: Github, href: photographerInfo.socialLinks.github, label: 'GitHub' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Mail, href: `mailto:${photographerInfo.email}`, label: 'Email' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const }
  })
};

export default function Home() {
  return (
    <>
      <SEOHead />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center px-6 lg:px-8 pt-20 pb-16">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left - Text Content */}
              <div className="space-y-8">
                <motion.p
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="text-sm font-semibold tracking-[0.2em] uppercase text-primary"
                >
                  Welcome to my world
                </motion.p>

                <motion.h1
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
                >
                  Hi! I'm <span className="text-gradient-cyan">Stella</span>
                </motion.h1>

                <motion.h2
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="text-2xl md:text-3xl font-light text-muted-foreground"
                >
                  Software Developer
                </motion.h2>

                <motion.p
                  custom={3}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-lg"
                >
                  I craft beautiful, responsive web experiences that bring ideas to life. 
                  Passionate about clean code, user-centered design, and cutting-edge technologies.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                  custom={4}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="flex flex-wrap items-center gap-6"
                >
                  <Link
                    to="/portfolio"
                    className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
                  >
                    <Eye className="size-4" />
                    View My Work
                  </Link>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-foreground font-medium hover:text-primary transition-colors"
                  >
                    <Download className="size-4" />
                    Download CV
                  </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                  custom={5}
                  initial="hidden"
                  animate="visible"
                  variants={fadeUp}
                  className="flex items-center gap-4 pt-4"
                >
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors duration-300"
                      aria-label={social.label}
                    >
                      <social.icon className="size-5" />
                    </a>
                  ))}
                </motion.div>
              </div>

              {/* Right - Avatar/Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Glow ring */}
                  <div className="absolute inset-0 rounded-full border-glow-cyan scale-110" />
                  
                  {/* Image container */}
                  <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-primary/30">
                    <img
                      src={stellaPortrait}
                      alt="Stella Wachira"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Rotating Robot */}
                  <motion.div
                    animate={{ rotateY: 360 }}
                    transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                    style={{ perspective: 800 }}
                    className="absolute -top-6 -right-6 text-6xl cursor-pointer select-none"
                  >
                    🤖
                  </motion.div>
                  
                  {/* Floating accent icons */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full bg-amber flex items-center justify-center text-primary-foreground font-bold text-lg"
                  >
                    {'</>'}
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-8 -left-4 w-10 h-10 rounded-full bg-accent flex items-center justify-center"
                  >
                    <span className="text-accent-foreground text-xs">🖥️</span>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <SkillsGrid />

        {/* Featured Projects */}
        <FeaturedProjects projects={getFeaturedProjects()} />

        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
}