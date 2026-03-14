import { motion } from 'motion/react';
import { useMemo } from 'react';
import { ArrowRight } from 'lucide-react';

interface IntroPageProps {
  onEnter: () => void;
}

export function IntroPage({ onEnter }: IntroPageProps) {
  const floatingTerms = useMemo(
    () =>
      [
        '<div>',
        '</div>',
        '<span>',
        'import',
        'export',
        'return',
        'const',
        'function()',
        'useState',
        'useEffect',
        'className',
        'onClick',
        'padding:',
        'margin:',
        'display:',
        'flex',
        'grid',
        'position:',
        'color:',
        'background:',
        'border:',
        'transition:',
        '@media',
        'hover:',
        'opacity:',
        'overflow:',
        '<section>',
        '<nav>',
      ].map((text, index) => ({
        id: `${text}-${index}`,
        text,
        left: (index * 14) % 95,
        duration: 9 + (index % 5) * 2,
        delay: (index * 0.45) % 8,
        fontSize: 12 + (index % 4) * 3,
        opacity: 0.12 + (index % 3) * 0.04,
      })),
    []
  );

  const glowingOrbs = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        id: index,
        size: 48 + (index % 6) * 14,
        left: (index * 17 + 9) % 100,
        top: (index * 11 + 13) % 100,
        duration: 3 + (index % 4),
        delay: (index % 5) * 0.25,
      })),
    []
  );

  return (
    <div className="fixed inset-0 overflow-hidden bg-black">
      {/* Glowing Orbs Background */}
      {glowingOrbs.map(orb => (
        <motion.div
          key={orb.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${orb.left}%`,
            top: `${orb.top}%`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            background: 'radial-gradient(circle at 30% 30%, #7864AC, rgba(120, 100, 172, 0.4))',
            boxShadow: `0 0 ${orb.size * 1.5}px #7864AC, 0 0 ${orb.size * 0.8}px rgba(120, 100, 172, 0.6)`,
            filter: 'blur(12px)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: orb.delay
          }}
        />
      ))}

      {/* Floating Web Design Terms */}
      {floatingTerms.map((term) => (
        <motion.div
          key={term.id}
          className="absolute text-white/20 font-mono pointer-events-none select-none"
          style={{
            left: `${term.left}%`,
            fontSize: `${term.fontSize}px`,
            opacity: term.opacity,
          }}
          animate={{
            y: ['-10vh', '110vh'],
          }}
          transition={{
            duration: term.duration,
            repeat: Infinity,
            ease: "linear",
            delay: term.delay
          }}
        >
          {term.text}
        </motion.div>
      ))}

      {/* Ambient Gradient Glows */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#7864AC]/10 blur-[150px] pointer-events-none"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 100, 0],
          y: [0, -50, 0]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#9b87d4]/10 blur-[150px] pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -100, 0],
          y: [0, 50, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Vignette */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="text-center max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mb-6"
          >
            <span className="block text-white/60 mb-2">Hello, I'm</span>
            <span className="block text-6xl md:text-8xl bg-gradient-to-r from-white via-[#9b87d4] to-[#7864AC] bg-clip-text text-transparent">
              Brittany Wallace
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="text-2xl md:text-3xl text-white/80 mb-4"
          >
            Front End Web & UX Designer
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12"
          >
            Design is where I turn chaos into calm. 
            <br />
            Every line, every color has a reason to exist
          </motion.p>

          {/* Enter Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: 1,
              scale: 1,
              y: 0
            }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-[#7864AC] blur-xl opacity-50" />
              <button 
                onClick={onEnter}
                className="relative px-8 py-4 bg-[#7864AC] hover:bg-[#9b87d4] text-white rounded-full transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Enter Portfolio</span>
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}