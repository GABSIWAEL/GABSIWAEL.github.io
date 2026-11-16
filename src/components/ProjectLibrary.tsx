import { useState, useMemo, useCallback } from 'react';
import { projectLibraryProjects, projectFilters } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading, SectionWrapper } from './SectionHeading';
import { Reveal } from './Reveal';

interface ProjectLibraryProps {
  onOpenProject: (slug: string) => void;
}

export function ProjectLibrary({ onOpenProject }: ProjectLibraryProps) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = useMemo(() => {
    if (activeFilter === 'All') return projectLibraryProjects;
    return projectLibraryProjects.filter(
      (p) =>
        p.categories.includes(activeFilter) ||
        p.technologies.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
    );
  }, [activeFilter]);

  const handleFilterClick = useCallback((filter: string) => {
    setActiveFilter(filter);
  }, []);

  return (
    <SectionWrapper id="projects">
      <SectionHeading
        index="02"
        title="Project Library"
        description="A broader archive of things I've built — filterable by domain and technology. New entries are added as projects become available to share."
      />

      <Reveal delay={100}>
        <div className="mt-10 flex flex-wrap gap-1.5">
          {projectFilters.map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterClick(filter)}
              className={`px-3.5 py-1.5 text-sm font-medium transition-all duration-300 ease-out-expo border ${
                activeFilter === filter
                  ? 'bg-ink-950 text-ink-0 border-ink-950'
                  : 'bg-transparent text-ink-500 border-ink-100 hover:border-ink-300 hover:text-ink-950'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={i * 50}>
            <ProjectCard project={project} onOpen={onOpenProject} />
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center">
          <p className="text-sm text-ink-400">No projects in this category yet.</p>
        </div>
      )}

      <div className="mt-10 text-xs font-mono text-ink-300">
        {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
      </div>
    </SectionWrapper>
  );
}
