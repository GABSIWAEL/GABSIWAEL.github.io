import { ArrowLeft, ArrowRight, ArrowUpRight, Grid2x2 } from 'lucide-react';
import type { Project } from '@/data/projects';
import { Reveal } from './Reveal';

interface ProjectNavigationProps {
  currentSlug: string;
  prev?: Project;
  next?: Project;
  related: Project[];
  onNavigate: (slug: string) => void;
  onBackToLibrary: () => void;
}

export function ProjectNavigation({
  currentSlug,
  prev,
  next,
  related,
  onNavigate,
  onBackToLibrary,
}: ProjectNavigationProps) {
  return (
    <div className="mt-24 border-t border-ink-100 pt-16">
      {/* Prev / Next */}
      {(prev || next) && (
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-100 border border-ink-100">
            {prev && prev.slug !== currentSlug && (
              <NavCard
                project={prev}
                direction="prev"
                onClick={() => onNavigate(prev.slug)}
              />
            )}
            {next && next.slug !== currentSlug && (
              <NavCard
                project={next}
                direction="next"
                onClick={() => onNavigate(next.slug)}
              />
            )}
          </div>
        </Reveal>
      )}

      {/* Back to library */}
      <Reveal delay={80}>
        <div className="mt-8 flex justify-center">
          <button
            onClick={onBackToLibrary}
            className="group inline-flex items-center gap-2 text-sm font-medium text-ink-500 hover:text-ink-950 transition-colors duration-300"
          >
            <Grid2x2 size={15} className="text-ink-300 group-hover:text-ink-950 transition-colors duration-300" />
            Back to Project Library
          </button>
        </div>
      </Reveal>

      {/* Related projects */}
      {related.length > 0 && (
        <Reveal delay={120}>
          <div className="mt-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="font-mono text-xs text-ink-300 tabular-nums">13</span>
              <div className="h-px w-6 bg-ink-200" />
              <h3 className="text-lg font-semibold text-ink-950">More from Wael</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((project, i) => (
                <Reveal key={project.slug} delay={i * 60}>
                  <a
                    href={`#/projects/${project.slug}`}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(project.slug);
                    }}
                    className="group block"
                  >
                    <div className="text-xs font-mono text-ink-300 mb-2">
                      {project.projectType}
                    </div>
                    <h4 className="text-base font-semibold text-ink-950 group-hover:text-accent transition-colors duration-300">
                      {project.shortTitle}
                    </h4>
                    <p className="mt-1.5 text-sm text-ink-500 text-pretty line-clamp-2">
                      {project.tagline}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-xs text-ink-400 group-hover:text-accent transition-colors duration-300">
                      <span>View case study</span>
                      <ArrowRight
                        size={12}
                        className="group-hover:translate-x-0.5 transition-transform duration-300"
                      />
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      )}
    </div>
  );
}

function NavCard({
  project,
  direction,
  onClick,
}: {
  project: Project;
  direction: 'prev' | 'next';
  onClick: () => void;
}) {
  const isPrev = direction === 'prev';

  return (
    <a
      href={`#/projects/${project.slug}`}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      className="group flex items-center gap-4 bg-ink-0 px-6 py-6 hover:bg-ink-25 transition-colors duration-300"
    >
      {isPrev && (
        <ArrowLeft
          size={20}
          className="text-ink-300 group-hover:text-ink-950 group-hover:-translate-x-0.5 transition-all duration-300 shrink-0"
        />
      )}
      <div className={`flex-1 min-w-0 ${isPrev ? '' : 'text-right'}`}>
        <span className="text-xs font-mono text-ink-300">
          {isPrev ? 'Previous' : 'Next'}
        </span>
        <h4 className="mt-1 text-base font-semibold text-ink-950 group-hover:text-accent transition-colors duration-300 truncate">
          {project.shortTitle}
        </h4>
      </div>
      {!isPrev && (
        <ArrowRight
          size={20}
          className="text-ink-300 group-hover:text-ink-950 group-hover:translate-x-0.5 transition-all duration-300 shrink-0"
        />
      )}
    </a>
  );
}
