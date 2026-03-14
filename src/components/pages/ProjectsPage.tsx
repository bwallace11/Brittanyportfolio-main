import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { CATEGORY_LABELS, projectsByCategory } from "../../data/portfolio";
import type { Project, ProjectCategory } from "../../types/site";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { WebDesignBackground } from "../WebDesignBackground";

interface ProjectsPageProps {
  onProjectClick: (project: Project) => void;
}

const categoryOrder: ProjectCategory[] = ["web", "ux", "logo", "other"];

const categories = categoryOrder.map((id) => ({
  id,
  label: CATEGORY_LABELS[id],
}));

export function ProjectsPage({ onProjectClick }: ProjectsPageProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("web");
  const isComingSoonCategory =
    activeCategory === "logo" || activeCategory === "other";

  const currentProjects = projectsByCategory[activeCategory];

  return (
    <div className="min-h-screen relative overflow-y-auto">
      {/* Fixed Background */}
      <WebDesignBackground />

      {/* Content */}
      <div className="relative z-10 py-12 md:py-24 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Page Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-8 md:mb-12"
          >
            <h1 className="text-5xl md:text-6xl lg:text-8xl mb-4 md:mb-6 bg-gradient-to-r from-white via-[#9b87d4] to-[#7864AC] bg-clip-text text-transparent">
              The Portfolio Shelf
            </h1>
            <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto px-2">
              Clean builds for chaotic brains
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-16"
          >
            {categories.map((category) => {
              const isComingSoon = category.id === "logo" || category.id === "other";
              return (
                <div key={category.id} className={`flex flex-col items-center gap-1.5${isComingSoon ? " opacity-50" : ""}`}>
                  <button
                    onClick={() => { if (!isComingSoon) setActiveCategory(category.id); }}
                    disabled={isComingSoon}
                    className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full border transition-all duration-300 text-sm md:text-base ${
                      activeCategory === category.id
                        ? "bg-[#7864AC] border-[#7864AC] text-white shadow-[0_0_30px_rgba(120,100,172,0.5)]"
                        : isComingSoon
                          ? "bg-black/70 border-white/10 text-white/30 cursor-not-allowed"
                          : "bg-white/5 border-white/20 text-white/60 hover:border-[#7864AC]/50 hover:text-white backdrop-blur-md"
                    }`}
                  >
                    <span className="flex items-center gap-2">{category.label}</span>
                  </button>
                  {isComingSoon && (
                    <span className="text-xs text-white/40 pointer-events-none">Coming Soon</span>
                  )}
                </div>
              );
            })}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="group relative"
              >
                {/* Card Container */}
                <div
                  className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/[0.05] border border-white/20 backdrop-blur-md transition-all duration-500 flex flex-col h-full ${
                    isComingSoonCategory
                      ? "cursor-not-allowed"
                      : "hover:border-[#7864AC] cursor-pointer"
                  }`}
                  onClick={() => {
                    if (!isComingSoonCategory) {
                      onProjectClick(project);
                    }
                  }}
                >
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#7864AC]/0 to-[#7864AC]/0 group-hover:from-[#7864AC]/20 group-hover:to-transparent transition-all duration-500" />

                  {/* Coming Soon Overlay */}
                  {isComingSoonCategory && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-all duration-300 pointer-events-none">
                      <span className="px-4 py-2 rounded-full border border-white/30 bg-black/50 text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        Coming Soon
                      </span>
                    </div>
                  )}

                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden flex-shrink-0">
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60" />

                  </div>

                  {/* Project Info */}
                  <div className="relative p-8 flex flex-col flex-1">
                    <h3 className="text-2xl md:text-3xl mb-3 text-white group-hover:text-[#9b87d4] transition-colors line-clamp-2 min-h-[4rem]">
                      {project.title}
                    </h3>
                    <p className="text-white/60 mb-6 leading-relaxed line-clamp-3 flex-1">
                      {project.summary}
                    </p>

                    {/* View Project Button */}
                    <div className="inline-flex items-center gap-2 text-[#9b87d4] group-hover:text-white transition-colors mt-auto">
                      <span>
                        {isComingSoonCategory
                          ? "Coming Soon"
                          : "View Details"}
                      </span>
                      {!isComingSoonCategory && (
                        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                      )}
                    </div>
                  </div>

                  {/* Scan Line Effect */}
                  <motion.div
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-[#7864AC] to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      top: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  />
                </div>

                {/* Floating Glow */}
                <motion.div className="absolute -z-10 inset-0 bg-[#7864AC]/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}