export type PageType = 'intro' | 'projects' | 'about' | 'contact';

export type ProjectCategory = 'web' | 'ux' | 'logo' | 'other';

export interface ProjectPage {
  label: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  summary: string;
  image: string;
  details?: string;
  url?: string;
  pages?: ProjectPage[];
  year?: string;
  category: ProjectCategory;
}
