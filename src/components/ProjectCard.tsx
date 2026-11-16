import { ArrowRight } from 'lucide-react';
import type { Project } from '@/data/projects';
import { SmartImage } from './SmartImage';

interface ProjectCardProps {
  project: Project;
  onOpen: (slug: string) => void;
}

export function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const hasDetails = project.overview.length > 0;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (hasDetails) onOpen(project.slug);
  };

  return (
    <a
      href={hasDetails ? `#/projects/${project.slug}` : undefined}
      onClick={handleClick}
      className={`group block ${!hasDetails ? 'cursor-default' : 'cursor-pointer'}`}
    >
      <SmartImage
        src={project.image}
        alt={project.title}
        aspect={project.imageAspect || 'aspect-[4/3]'}
        fallbackLabel={project.shortTitle}
        fallbackSublabel={project.projectType}
        className="border border-ink-100 transition-all duration-500 ease-out-expo group-hover:shadow-lg group-hover:shadow-ink-950/5"
        imgClassName="group-hover:scale-[1.02] transition-transform duration-700 ease-out-expo"
      />

      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-base font-semibold tracking-tight text-ink-950 group-hover:text-accent transition-colors duration-300">
            {project.title}
          </h3>
          {project.year && (
            <span className="text-xs font-mono text-ink-300 tabular-nums shrink-0">
              {project.year}
            </span>
          )}
        </div>

        {project.tagline && (
          <p className="mt-1.5 text-sm text-ink-500 text-pretty line-clamp-2">
            {project.tagline}
          </p>
        )}

        <div className="mt-3 flex flex-wrap items-center gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono text-ink-400 px-2 py-0.5 border border-ink-100"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-[11px] text-ink-300">
              +{project.technologies.length - 4}
            </span>
          )}
          {project.technologies.length === 0 && project.categories.length > 0 && (
            <span className="text-[11px] text-ink-300">
              {project.categories.join(' · ')}
            </span>
          )}
        </div>

        {hasDetails && (
          <div className="mt-3 flex items-center gap-1 text-xs text-ink-400 group-hover:text-accent transition-colors duration-300">
            <span>Case study</span>
            <ArrowRight
              size={12}
              className="group-hover:translate-x-0.5 transition-transform duration-300"
            />
          </div>
        )}
      </div>
    </a>
  );
}
