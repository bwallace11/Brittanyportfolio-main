import { motion } from 'motion/react';
import { Home, Briefcase, User, Mail } from 'lucide-react';
import type { PageType } from '../types/site';

interface NavigationProps {
  currentPage: PageType;
  onNavigate: (page: PageType) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { id: 'intro' as PageType, icon: Home, label: 'Home' },
    { id: 'projects' as PageType, icon: Briefcase, label: 'Projects' },
    { id: 'about' as PageType, icon: User, label: 'About' },
    { id: 'contact' as PageType, icon: Mail, label: 'Contact' }
  ];

  return (
    <motion.nav 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed z-50 bottom-4 left-1/2 -translate-x-1/2 md:bottom-auto md:top-1/2 md:left-auto md:right-8 md:translate-x-0 md:-translate-y-1/2 flex flex-row md:flex-col gap-3 md:gap-4 bg-[#0a0515]/80 md:bg-transparent backdrop-blur-md md:backdrop-blur-none rounded-full md:rounded-none px-4 md:px-0 py-2 md:py-0 border border-white/10 md:border-0"
    >
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => onNavigate(id)}
          className="group relative"
          aria-label={label}
        >
          <div className={`
            w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center
            backdrop-blur-md border transition-all duration-300
            ${currentPage === id 
              ? 'bg-[#7864AC]/30 border-[#7864AC] shadow-[0_0_20px_rgba(120,100,172,0.4)]' 
              : 'bg-white/5 border-white/10 hover:border-[#7864AC]/50'
            }
          `}>
            <Icon className={`w-4 h-4 md:w-5 md:h-5 transition-colors ${
              currentPage === id ? 'text-[#7864AC]' : 'text-white/60 group-hover:text-[#7864AC]'
            }`} />
          </div>
          
          <span className="
            hidden md:block
            absolute right-16 top-1/2 -translate-y-1/2 
            px-3 py-1.5 rounded-lg
            bg-[#7864AC] text-white text-sm
            opacity-0 group-hover:opacity-100
            pointer-events-none transition-opacity
            whitespace-nowrap
          ">
            {label}
          </span>
        </button>
      ))}
    </motion.nav>
  );
}
