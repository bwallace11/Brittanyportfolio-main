import { motion } from 'motion/react';
import { WebDesignBackground } from '../WebDesignBackground';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-y-auto">
      {/* Fixed Background */}
      <WebDesignBackground />
      
      {/* Content */}
      <div className="relative z-10 py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-white via-[#9b87d4] to-[#7864AC] bg-clip-text text-transparent">
              About Me
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-[#7864AC] to-transparent rounded-full mt-4" />
          </motion.div>

          {/* Asymmetric Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8">
            {/* Profile Card - Tall Left */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-5 lg:col-span-4 group"
            >
              <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.05] border border-white/20 backdrop-blur-xl shadow-2xl hover:border-[#7864AC]/50 transition-all duration-500 relative overflow-hidden">
                {/* Hover glow */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-[#7864AC]/0 via-[#7864AC]/0 to-[#7864AC]/0 opacity-0 group-hover:opacity-100 group-hover:from-[#7864AC]/20 group-hover:via-[#7864AC]/10 transition-all duration-500"
                />
                
                <div className="relative space-y-8">
                  {/* Profile Image */}
                  <div className="relative w-full aspect-square max-w-xs mx-auto">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-[#7864AC]/40 to-[#9b87d4]/20 rounded-full blur-2xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    
                    <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#7864AC]/40 shadow-[0_0_40px_rgba(120,100,172,0.3)]">
                      <ImageWithFallback
                        src="/me/bwallace.jpg"
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Name & Title */}
                  <div className="text-center space-y-2">
                    <h2 className="text-3xl lg:text-4xl text-white">Brittany Wallace</h2>
                    <p className="text-xl text-[#9b87d4]">Front End Web & UX Designer</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column */}
            <div className="md:col-span-7 lg:col-span-8 space-y-6 lg:space-y-8">
              {/* About + Design Philosophy */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="group"
              >
                <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.05] border border-white/20 backdrop-blur-xl shadow-xl hover:border-[#7864AC]/50 hover:shadow-[0_0_30px_rgba(120,100,172,0.2)] transition-all duration-500 relative overflow-hidden">
                  <h3 className="text-2xl md:text-3xl text-[#9b87d4] mb-4">About Me</h3>
                  <p className="text-lg text-white/85 leading-relaxed mb-8">
                    Hi, I’m Brittany Wallace, a front-end web and UX designer finishing my Graphic Design degree at Eastern Washington University. I build websites that blend structure and storytelling to create thoughtful user experiences.
                  </p>
                  <p className="text-lg text-white/85 leading-relaxed mb-8">
                    My style leans toward dark, moody design with soft moments of light, inspired by music, gaming, and the quiet energy of the internet late at night.
                  </p>

                  <h3 className="text-2xl md:text-3xl text-[#9b87d4] mb-4">Design Philosophy</h3>
                  <p className="text-lg text-white/85 leading-relaxed">
                    I design with the idea that structure and storytelling should guide the user naturally. My work leans toward darker, mood-driven visuals balanced with clear layout and usability. The goal is always the same: create digital spaces that feel intuitive, thoughtful, and real.
                  </p>
                </div>
              </motion.div>

              {/* Tools */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="group"
              >
                <div className="p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white/10 to-white/[0.05] border border-white/20 backdrop-blur-xl shadow-xl hover:border-[#7864AC]/50 hover:shadow-[0_0_30px_rgba(120,100,172,0.2)] transition-all duration-500 relative overflow-hidden">
                  <h3 className="text-2xl md:text-3xl text-[#9b87d4] mb-6">Tools of Choice</h3>

                  <div className="space-y-6 text-white/85">
                    <div>
                      <h4 className="text-white text-lg mb-2">Design & Layout</h4>
                      <p className="leading-relaxed">Figma · Adobe Illustrator · Adobe Photoshop</p>
                    </div>

                    <div>
                      <h4 className="text-white text-lg mb-2">Web Development</h4>
                      <p className="leading-relaxed">HTML5 · CSS3 · JavaScript</p>
                    </div>

                    <div>
                      <h4 className="text-white text-lg mb-2">Animation & Interaction</h4>
                      <p className="leading-relaxed">GSAP · ScrollTrigger</p>
                    </div>

                    <div>
                      <h4 className="text-white text-lg mb-2">Workflow & Development</h4>
                      <p className="leading-relaxed">VS Code · GitHub · Chrome DevTools</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
