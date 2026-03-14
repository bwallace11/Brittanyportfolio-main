import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface Sparkle {
  id: string;
  x: number;
  y: number;
  size: number;
}

export function CursorSparkle() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);
  const counterRef = useRef(0);

  useEffect(() => {
    let lastTime = Date.now();
    
    const handleMouseMove = (e: MouseEvent) => {
      const currentTime = Date.now();
      
      // Throttle sparkle creation to every 50ms
      if (currentTime - lastTime > 50) {
        counterRef.current += 1;
        const uniqueId = `${Date.now()}-${counterRef.current}`;
        
        const newSparkle: Sparkle = {
          id: uniqueId,
          x: e.clientX,
          y: e.clientY,
          size: Math.random() * 8 + 4, // 4-12px
        };
        
        setSparkles(prev => [...prev, newSparkle]);
        lastTime = currentTime;

        // Remove sparkle after animation completes
        setTimeout(() => {
          setSparkles(prev => prev.filter(s => s.id !== uniqueId));
        }, 800);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      <AnimatePresence>
        {sparkles.map(sparkle => (
          <motion.div
            key={sparkle.id}
            className="absolute rounded-full"
            style={{
              left: sparkle.x,
              top: sparkle.y,
              width: sparkle.size,
              height: sparkle.size,
              background: 'radial-gradient(circle at 30% 30%, rgba(155, 135, 212, 0.9), rgba(120, 100, 172, 0.6))',
              boxShadow: `0 0 ${sparkle.size * 2}px rgba(120, 100, 172, 0.8)`,
            }}
            initial={{ 
              scale: 1,
              opacity: 1,
            }}
            animate={{ 
              scale: [1, 1.5, 0],
              opacity: [1, 0.8, 0],
              rotate: [0, 180],
            }}
            exit={{ 
              scale: 0,
              opacity: 0,
            }}
            transition={{ 
              duration: 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </AnimatePresence>
    </div>
  );
}