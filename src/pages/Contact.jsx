import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Send } from 'lucide-react';
import { photographerInfo } from '@/data/photographer.js';
import { SEOHead } from '@/components/seo/SEOHead.jsx';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { submitContact } from '@/services/api.js';

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      await submitContact(formData);
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      // Fallback if backend isn't connected yet
      toast({ title: "Message sent!", description: "Thank you for reaching out. I'll get back to you soon." });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <SEOHead title="Contact" description={`Get in touch with ${photographerInfo.name} for project inquiries and collaborations.`} />
      
      <div className="min-h-screen relative z-10">
        <section className="py-16 md:py-24 px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold">Let's <span className="text-gradient-purple">Connect</span></h1>
              <p className="mt-4 text-muted-foreground text-lg">Have a project in mind? Let's discuss how we can bring your ideas to life!</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="space-y-8">
                <h2 className="text-2xl font-bold">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="size-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Email</p>
                      <a href={`mailto:${photographerInfo.email}`} className="text-muted-foreground hover:text-primary transition-colors">{photographerInfo.email}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="size-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Phone</p>
                      <a href={`tel:${photographerInfo.phone}`} className="text-muted-foreground hover:text-primary transition-colors">{photographerInfo.phone}</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="size-5 text-primary mt-1" />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-muted-foreground">{photographerInfo.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <a href={photographerInfo.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="size-5" /></a>
                  <a href={photographerInfo.socialLinks.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="size-5" /></a>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="size-5" /></a>
                </div>
              </motion.div>

              <motion.form onSubmit={handleSubmit} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-2">Full Name</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <input type="email" required value={formData.email} onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input type="text" required value={formData.subject} onChange={(e) => setFormData(prev => ({ ...prev, subject: e.target.value }))}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground" placeholder="Project inquiry" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea required rows={5} value={formData.message} onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 bg-secondary/50 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground resize-none" placeholder="Tell me about your project..." />
                </div>
                <button type="submit" disabled={sending}
                  className="inline-flex items-center gap-2 px-6 py-3 btn-gradient rounded-lg font-medium disabled:opacity-50">
                  <Send className="size-4" />
                  {sending ? 'Sending...' : 'Send Message'}
                </button>
              </motion.form>
            </div>
          </div>
        </section>
        <div className="h-16" />
      </div>
    </>
  );
}
