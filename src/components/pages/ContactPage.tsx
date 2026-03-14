import { motion } from 'motion/react';
import { useState } from 'react';
import { Mail, Github, Linkedin, Instagram, Send } from 'lucide-react';
import { WebDesignBackground } from '../WebDesignBackground';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
    { icon: Mail, label: 'Email', href: 'mailto:hello@alexmorgan.com' }
  ];

  return (
    <div className="min-h-screen relative overflow-y-auto">
      {/* Fixed Background */}
      <WebDesignBackground />
      
      {/* Content */}
      <div className="relative z-10 py-12 md:py-24 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl mb-4 md:mb-6 bg-gradient-to-r from-white via-[#9b87d4] to-[#7864AC] bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto px-2">
              Have a project in mind? Let's create something extraordinary together
            </p>
          </motion.div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 relative items-center">
            {/* Left Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <label htmlFor="name" className="block text-sm text-white/60 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#7864AC] focus:bg-white/15 text-white placeholder-white/30 outline-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="John Doe"
                    required
                  />
                </div>

                {/* Email Input */}
                <div className="group">
                  <label htmlFor="email" className="block text-sm text-white/60 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#7864AC] focus:bg-white/15 text-white placeholder-white/30 outline-none transition-all duration-300 backdrop-blur-sm"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                {/* Message Input */}
                <div className="group">
                  <label htmlFor="message" className="block text-sm text-white/60 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-6 py-4 rounded-xl bg-white/10 border border-white/20 focus:border-[#7864AC] focus:bg-white/15 text-white placeholder-white/30 outline-none transition-all duration-300 resize-none backdrop-blur-sm"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group relative w-full px-8 py-4 rounded-xl bg-[#7864AC] hover:bg-[#9b87d4] text-white transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <Send className="relative z-10 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  
                  {/* Button Glow */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7864AC] to-[#9b87d4] opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
                </button>
              </form>
            </motion.div>

            {/* Right Column - Contact Info & Social */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Contact Info */}
              <div className="p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.05] border border-white/20 backdrop-blur-md">
                <h3 className="text-xl md:text-2xl text-[#9b87d4] mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div>
                    <div className="text-sm text-white/60 mb-2">Email</div>
                    <a href="mailto:wallacebl20@gmail.com" className="text-base md:text-lg text-white/90 hover:text-[#9b87d4] transition-colors">
                      wallacebl20@gmail.com
                    </a>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div>
                    <div className="text-sm text-white/60 mb-2">Location</div>
                    <div className="text-base md:text-lg text-white/90">Spokane, WA</div>
                  </div>

                  <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                  <div>
                    <div className="text-sm text-white/60 mb-3">Availability</div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7864AC]/20 border border-[#7864AC]/40">
                      <div className="w-2 h-2 bg-[#7864AC] rounded-full animate-pulse" />
                      <span className="text-sm text-white/90">Open to opportunities</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links - Bottom Right Corner */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="absolute bottom-0 right-0 flex items-center gap-4"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-10 h-10 rounded-full bg-white/10 border border-white/20 hover:border-[#7864AC] backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-[#7864AC]/20 rounded-full opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                  
                  <social.icon className="relative z-10 w-4 h-4 text-white/60 group-hover:text-[#9b87d4] transition-colors" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-16 md:mt-24 pt-8 md:pt-12 border-t border-white/10 text-center"
          >
            <p className="text-sm md:text-base text-white/40">
              © 2024 Brittany Wallace. Crafted with creativity and code.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}