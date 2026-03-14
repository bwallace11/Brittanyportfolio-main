import { motion } from 'motion/react';
import { useMemo } from 'react';

export function WebDesignBackground() {
  const codeSnippets = ['<div>', '</div>', 'function()', 'const', '.class', '#id', '{ }', 'import', 'export', 'return'];

  const lightBalls = useMemo(
    () =>
      Array.from({ length: 12 }, (_, index) => ({
        id: index,
        size: 34 + (index % 6) * 12,
        left: (index * 13.5) % 120 - 10,
        top: (index * 9.5) % 120 - 10,
        duration: 2.2 + (index % 4) * 0.45,
        delay: (index % 5) * 0.35,
      })),
    []
  );

  const browserFrames = [0, 1, 2];
  const geometricElements = Array.from({ length: 20 }, (_, index) => index);
  const verticalLines = Array.from({ length: 5 }, (_, index) => index);
  const cursorDots = Array.from({ length: 8 }, (_, index) => index);
  const cssTags = ['display:', 'position:', 'margin:', 'padding:', 'color:'];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden bg-black">
      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0" 
          style={{
            backgroundImage: 'linear-gradient(#7864AC 1px, transparent 1px), linear-gradient(90deg, #7864AC 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} 
        />
      </div>

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          className="absolute text-[#7864AC]/15 font-mono text-sm pointer-events-none"
          style={{
            left: `${(i * 10) % 90 + 5}%`,
            top: `${(i * 15) % 80 + 10}%`,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 10 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        >
          {snippet}
        </motion.div>
      ))}

      {/* Browser Window Frames */}
      {browserFrames.map((i) => (
        <motion.div
          key={`browser-${i}`}
          className="absolute border border-[#7864AC]/08 rounded-lg pointer-events-none"
          style={{
            width: 300 + i * 50,
            height: 200 + i * 30,
            left: `${20 + i * 30}%`,
            top: `${15 + i * 25}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.03, 0.08, 0.03],
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 1
          }}
        >
          {/* Browser Chrome */}
          <div className="flex gap-1.5 p-2 border-b border-[#7864AC]/08">
            <div className="w-2 h-2 rounded-full bg-[#7864AC]/15" />
            <div className="w-2 h-2 rounded-full bg-[#7864AC]/15" />
            <div className="w-2 h-2 rounded-full bg-[#7864AC]/15" />
          </div>
        </motion.div>
      ))}

      {/* Geometric Design Elements */}
      {geometricElements.map((i) => (
        <motion.div
          key={`geo-${i}`}
          className="absolute"
          style={{
            left: `${(i * 5.5) % 95}%`,
            top: `${(i * 8) % 90}%`,
          }}
          animate={{
            rotate: [0, 360],
            opacity: [0.03, 0.1, 0.03],
          }}
          transition={{
            duration: 20 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.3
          }}
        >
          {i % 4 === 0 && (
            <div className="w-6 h-6 border border-[#7864AC]/15 rotate-45" />
          )}
          {i % 4 === 1 && (
            <div className="w-4 h-4 rounded-full border border-[#7864AC]/15" />
          )}
          {i % 4 === 2 && (
            <svg width="24" height="24" viewBox="0 0 24 24">
              <polygon
                points="12,2 22,20 2,20"
                fill="none"
                stroke="#7864AC"
                strokeWidth="1"
                opacity="0.15"
              />
            </svg>
          )}
          {i % 4 === 3 && (
            <div className="w-5 h-5 border-l-2 border-t-2 border-[#7864AC]/15" />
          )}
        </motion.div>
      ))}

      {/* Vertical Code Lines */}
      {verticalLines.map((i) => (
        <motion.div
          key={`vline-${i}`}
          className="absolute h-screen w-px bg-gradient-to-b from-transparent via-[#7864AC]/08 to-transparent"
          style={{
            left: `${20 + i * 15}%`,
          }}
          animate={{
            opacity: [0.03, 0.1, 0.03],
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5
          }}
        />
      ))}

      {/* Cursor Trail Dots */}
      {cursorDots.map((i) => (
        <motion.div
          key={`cursor-${i}`}
          className="absolute w-1.5 h-1.5 bg-[#7864AC]/40 rounded-full"
          style={{
            left: `${10 + i * 12}%`,
            top: `${20 + i * 8}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 3 + i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.2
          }}
        />
      ))}

      {/* Large Glowing Orbs - Very Subtle */}
      <motion.div
        className="absolute w-[500px] h-[500px] top-1/4 left-1/4 rounded-full bg-[#7864AC]/03 blur-[100px]"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute w-[600px] h-[600px] bottom-1/4 right-1/4 rounded-full bg-[#7864AC]/03 blur-[120px]"
        animate={{
          scale: [1.2, 1, 1.2],
          x: [0, -50, 0],
          y: [0, 30, 0]
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* CSS Property Tags */}
      {cssTags.map((prop, i) => (
        <motion.div
          key={prop}
          className="absolute text-[#7864AC]/12 font-mono text-xs pointer-events-none"
          style={{
            right: `${10 + i * 15}%`,
            top: `${30 + i * 10}%`,
          }}
          animate={{
            x: [-10, 10, -10],
            opacity: [0.08, 0.15, 0.08],
          }}
          transition={{
            duration: 12 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.7
          }}
        >
          {prop}
        </motion.div>
      ))}

      {/* Light Balls */}
      {lightBalls.map(ball => (
        <motion.div
          key={ball.id}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: `${ball.left}%`,
            top: `${ball.top}%`,
            width: `${ball.size}px`,
            height: `${ball.size}px`,
            background: 'radial-gradient(circle at 30% 30%, #7864AC, rgba(120, 100, 172, 0.6))',
            boxShadow: `0 0 ${ball.size * 2}px #7864AC, 0 0 ${ball.size}px rgba(120, 100, 172, 0.8)`,
            filter: 'blur(8px)',
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: ball.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: ball.delay
          }}
        />
      ))}
    </div>
  );
}