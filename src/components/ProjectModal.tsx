import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowUpRight } from 'lucide-react';
import { useEffect } from 'react';
import type { Project, ProjectPage } from '../types/site';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#0a0515]/95 backdrop-blur-xl"
        onClick={onClose}
      >
        {/* Background Animated Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7864AC]/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#9b87d4]/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.25, 0.15]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          transition={{ type: "spring", duration: 0.5 }}
          className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto bg-gradient-to-br from-[#1a0f2e]/90 to-[#0a0515]/90 rounded-3xl border border-white/10 backdrop-blur-2xl shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-10 w-12 h-12 rounded-full bg-[#7864AC] hover:bg-[#9b87d4] flex items-center justify-center transition-all duration-300 shadow-[0_0_20px_rgba(120,100,172,0.5)]"
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* Hero Image */}
          <div className="relative h-[50vh] overflow-hidden rounded-t-3xl">
            <ImageWithFallback
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0515] via-transparent to-transparent" />
            

          </div>

          {/* Content */}
          <div className="p-8 md:p-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl mb-6 bg-gradient-to-r from-white to-[#9b87d4] bg-clip-text text-transparent"
            >
              {project.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Summary */}
              <div>
                <h3 className="text-xl text-[#9b87d4] mb-3">Overview</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  {project.summary}
                </p>
              </div>

              {/* Details Placeholder */}
              <div>
                <h3 className="text-xl text-[#9b87d4] mb-3">Project Details</h3>
                <p className="text-white/60 leading-relaxed">
                  {project.details ?? 'Detailed project description will go here...'}
                </p>
              </div>

              {/* Pages — shown only when project has multiple pages */}
              {project.pages && project.pages.length > 0 && (
                <div>
                  <h3 className="text-xl text-[#9b87d4] mb-4">Pages</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.pages.map((page: ProjectPage) => (
                      <a
                        key={page.url}
                        href={page.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7864AC]/60 hover:bg-[#7864AC]/10 transition-all duration-300 group"
                      >
                        <span className="flex-1 text-white/80 group-hover:text-white transition-colors">{page.label}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#9b87d4] group-hover:text-white transition-colors flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {/* CTA + Year */}
              <div className="pt-8 flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => {
                    if (project.url) {
                      window.open(project.url, "_blank", "noopener,noreferrer");
                    }
                  }}
                  disabled={!project.url}
                  className="px-8 py-4 rounded-full bg-[#7864AC] hover:bg-[#9b87d4] text-white transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {project.url ? "View Live Project" : "Live Link Coming Soon"}
                </button>
                {project.year && (
                  <span className="text-white/40 text-sm">{project.year}</span>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}