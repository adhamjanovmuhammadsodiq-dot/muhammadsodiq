import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { projectsData, Project } from '../data/projects';
import { Blocks, Cpu, Bot, Smartphone, Clock, ExternalLink, X, Info } from 'lucide-react';

export const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const getIcon = (type: Project['iconType']) => {
    switch (type) {
      case 'blocks':
        return <Blocks className="w-6 h-6 text-amber-500" />;
      case 'cpu':
        return <Cpu className="w-6 h-6 text-blue-600" />;
      case 'bot':
        return <Bot className="w-6 h-6 text-cyan-600" />;
      case 'smartphone':
        return <Smartphone className="w-6 h-6 text-purple-600" />;
    }
  };

  return (
    <section id="projects" className="py-20 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-left max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 tracking-wide uppercase mb-2">
            <span>{t.projects.sectionSubtitle}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.projects.title}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 mt-2">
            {t.projects.description}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsData.map((project) => {
            const title = t.projects[project.titleKey];
            const description = t.projects[project.descriptionKey];

            return (
              <div
                key={project.id}
                className="bg-white rounded-2xl border border-slate-200/90 p-6 sm:p-7 hover:border-blue-400 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Icon and Status Tag */}
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getIcon(project.iconType)}
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{t.projects.comingSoonBadge}</span>
                    </span>
                  </div>

                  {/* Title & Category */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-5">
                    {description}
                  </p>

                  {/* Unboxed Technologies List */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-500 mb-6">
                    {project.technologies.map((tech, i) => (
                      <React.Fragment key={tech}>
                        <span className="font-medium text-slate-700">{tech}</span>
                        {i < project.technologies.length - 1 && (
                          <span className="text-slate-300" aria-hidden="true">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>

                {/* Bottom Card Action: Notice and Interactive Modal Trigger */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Info className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span className="truncate">{t.projects.comingSoonNotice}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="px-3 py-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                  >
                    {t.projects.viewDetails}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Detail Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-xs animate-in fade-in"
          onClick={() => setSelectedProject(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-2xl max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-slate-200 relative text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label={t.projects.closeModal}
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                {getIcon(selectedProject.iconType)}
              </div>
              <div>
                <span className="text-xs font-semibold text-blue-600">{selectedProject.category}</span>
                <h3 id="modal-title" className="text-xl font-bold text-slate-900">
                  {t.projects[selectedProject.titleKey]}
                </h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-5">
              {t.projects[selectedProject.descriptionKey]}
            </p>

            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 mb-6">
              <div className="flex items-start gap-2.5">
                <Info className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <p className="text-xs text-slate-600 leading-normal">
                  {t.projects.modalNotice}
                </p>
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Ishlatiladigan vositalar
              </span>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-sm font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                {t.projects.closeModal}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
