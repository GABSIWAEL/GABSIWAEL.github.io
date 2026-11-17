import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { projects, type Project } from '@/data/projects';
import { SmartImage } from './SmartImage';
import { SectionHeading, SectionWrapper } from './SectionHeading';
import { Reveal } from './Reveal';

export function SelectedWork() {
  const featured = projects
    .filter((p) => p.featured)
    .sort((a, b) => {
      const rank = (slug: string) => {
        if (slug === 'campusone') return 0;
        if (slug === 'stb-baas') return 1;
        return 2;
      };
      return rank(a.slug) - rank(b.slug);
    });

  return (
    <SectionWrapper id="work" className="pt-12">
      <SectionHeading
        index="01"
        title="Selected Work"
        description="A selection of systems, platforms, and products I've designed and built — from banking infrastructure to AI-powered applications."
      />

      <div className="mt-16 space-y-20 md:space-y-28">
        {featured.map((project, i) => (
          <FeaturedProject
            key={project.slug}
            project={project}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

function FeaturedProject({ project, index }: { project: Project; index: number }) {
  const isFull = project.featuredLayout === 'full';
  const isReversed = index % 2 === 1;

  if (isFull) {
    return <FullWidthProject project={project} />;
  }

  return (
    <Reveal>
      <div className={`grid grid-cols-12 gap-6 md:gap-10 ${isReversed ? 'md:[direction:rtl]' : ''}`}>
        <div className="col-span-12 md:col-span-7 md:[direction:ltr]">
          <a
            href={`#/projects/${project.slug}`}
            className="group block"
          >
            <SmartImage
              src={project.image}
              alt={project.title}
              aspect="aspect-[16/11]"
              fallbackLabel={project.shortTitle}
              fallbackSublabel={project.projectType}
              className="border border-ink-100 transition-shadow duration-500 ease-out-expo group-hover:shadow-lg group-hover:shadow-ink-950/5"
            />
          </a>
        </div>

        <div className="col-span-12 md:col-span-5 md:[direction:ltr] flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-ink-300 tabular-nums">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="h-px w-6 bg-ink-200" />
            <span className="text-xs text-ink-400">{project.year}</span>
          </div>

          <h3 className="text-display-sm text-ink-950 text-balance">
            {project.title}
          </h3>

          <p className="mt-4 text-subsection text-ink-500 text-pretty">
            {project.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-ink-400 px-2.5 py-1 border border-ink-100"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="text-xs text-ink-300 px-2.5 py-1">
                +{project.technologies.length - 5} more
              </span>
            )}
          </div>

          <div className="mt-6 flex items-center gap-4">
            <a
              href={`#/projects/${project.slug}`}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-accent transition-colors duration-300"
            >
              View case study
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform duration-300"
              />
            </a>
            {project.links.find((l) => l.type === 'external' && l.href.startsWith('http')) && (
              <a
                href={project.links.find((l) => l.type === 'external' && l.href.startsWith('http'))?.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-ink-400 hover:text-ink-950 transition-colors duration-300"
              >
                Live
                <ArrowUpRight size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function FullWidthProject({ project }: { project: Project }) {
  return (
    <Reveal>
      <a href={`#/projects/${project.slug}`} className="group block">
        <SmartImage
          src={project.image}
          alt={project.title}
          aspect="aspect-[1919/945]"
          fallbackLabel={project.shortTitle}
          fallbackSublabel={project.projectType}
          className="border border-ink-100 transition-shadow duration-500 ease-out-expo group-hover:shadow-xl group-hover:shadow-ink-950/5"
        />
      </a>

      <div className="mt-8 grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-5">
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-ink-300 tabular-nums">01</span>
            <div className="h-px w-6 bg-ink-200" />
            <span className="text-xs text-ink-400">{project.year}</span>
            <span className="text-xs text-ink-400">·</span>
            <span className="text-xs text-ink-400">{project.projectType}</span>
          </div>

          <h3 className="text-display-sm text-ink-950 text-balance">
            {project.title}
          </h3>
        </div>

        <div className="col-span-12 md:col-span-5 md:col-start-8 flex flex-col justify-end">
          <p className="text-subsection text-ink-500 text-pretty">
            {project.tagline}
          </p>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 6).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono text-ink-400 px-2.5 py-1 border border-ink-100"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 6 && (
              <span className="text-xs text-ink-300 px-2.5 py-1">
                +{project.technologies.length - 6} more
              </span>
            )}
          </div>

          <div className="mt-6">
            <a
              href={`#/projects/${project.slug}`}
              className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-accent transition-colors duration-300"
            >
              View case study
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform duration-300"
              />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
