import { useState } from 'react';
import { IntroPage } from './components/pages/IntroPage';
import { ProjectsPage } from './components/pages/ProjectsPage';
import { AboutPage } from './components/pages/AboutPage';
import { ContactPage } from './components/pages/ContactPage';
import { Navigation } from './components/Navigation';
import { ProjectModal } from './components/ProjectModal';
import { CursorSparkle } from './components/CursorSparkle';
import type { PageType, Project } from './types/site';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('intro');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Navigation - hidden on intro page */}
      {currentPage !== 'intro' && (
        <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      )}

      {/* Page Renderer */}
      {currentPage === 'intro' && <IntroPage onEnter={() => setCurrentPage('projects')} />}
      {currentPage === 'projects' && <ProjectsPage onProjectClick={setSelectedProject} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'contact' && <ContactPage />}

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}

      {/* Cursor Sparkle */}
      <CursorSparkle />
    </div>
  );
}