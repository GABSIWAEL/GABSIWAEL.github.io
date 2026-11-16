import { useState, useCallback } from 'react';
import { ArrowLeft, ArrowUpRight, ArrowRight, Check, Lock, ZoomIn } from 'lucide-react';
import {
  getProject,
  getAdjacentProjects,
  allProjects,
  type Project,
} from '@/data/projects';
import { SmartImage } from './SmartImage';
import { Reveal } from './Reveal';
import { ProjectGallery } from './ProjectGallery';
import { ProjectNavigation } from './ProjectNavigation';
import { ProjectYouTube } from './ProjectYouTube';

interface ProjectDetailProps {
  slug: string;
  onBack: () => void;
  onNavigate: (slug: string) => void;
}

export function ProjectDetail({ slug, onBack, onNavigate }: ProjectDetailProps) {
  const project = getProject(slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-ink-400">Project not found.</p>
          <button
            onClick={onBack}
            className="mt-4 text-sm text-ink-700 hover:text-accent transition-colors"
          >
            Back to home
          </button>
        </div>
      </div>
    );
  }

  const { prev, next } = getAdjacentProjects(slug);

  const related = (project.relatedProjectSlugs || [])
    .map((s) => allProjects.find((p) => p.slug === s))
    .filter((p): p is Project => p !== undefined && p.slug !== slug)
    .slice(0, 3);

  const backToLibrary = useCallback(() => {
    window.location.hash = '';
    setTimeout(() => {
      const el = document.getElementById('projects');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }, []);

  let sectionIndex = 0;
  const nextIndex = () => String(++sectionIndex).padStart(2, '0');

  return (
    <article className="pt-24 pb-20">
      <div className="mx-auto max-w-content px-6">
        {/* ── Back button ── */}
        <Reveal>
          <button
            onClick={onBack}
            className="group inline-flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-950 transition-colors duration-300 mb-10"
          >
            <ArrowLeft size={15} className="group-hover:-translate-x-0.5 transition-transform duration-300" />
            Back
          </button>
        </Reveal>

        {/* ── 01: Project Header ── */}
        <Reveal delay={80}>
          <div className="flex items-center gap-3 mb-4">
            <span className="font-mono text-xs text-ink-300">{project.projectType}</span>
            {project.year && (
              <>
                <span className="text-xs text-ink-300">·</span>
                <span className="font-mono text-xs text-ink-300">{project.year}</span>
              </>
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <h1 className="text-display text-ink-950 text-balance">
            {project.title}
          </h1>
        </Reveal>

        <Reveal delay={200}>
          <p className="mt-4 text-subsection text-ink-500 max-w-prose-sm text-pretty">
            {project.tagline}
          </p>
        </Reveal>

        {/* Meta row */}
        <Reveal delay={260}>
          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm">
            {project.role && (
              <span className="text-ink-600">{project.role}</span>
            )}
            {project.projectType && (
              <>
                <span className="text-ink-200">·</span>
                <span className="text-ink-400 font-mono text-xs">{project.projectType}</span>
              </>
            )}
            {project.year && (
              <>
                <span className="text-ink-200">·</span>
                <span className="text-ink-400 font-mono text-xs">{project.year}</span>
              </>
            )}
          </div>
        </Reveal>

        {/* Links */}
        {project.links.length > 0 && (
          <Reveal delay={320}>
            <div className="mt-6 flex flex-wrap gap-4">
              {project.links.map((link) =>
                link.private ? (
                  <span
                    key={link.label}
                    className="inline-flex items-center gap-1.5 text-sm text-ink-400"
                  >
                    <Lock size={13} />
                    Private repository
                  </span>
                ) : (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    onClick={(e) => {
                      if (!link.href.startsWith('http')) {
                        e.preventDefault();
                        onNavigate(project.slug);
                      }
                    }}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-accent transition-colors duration-300"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </a>
                )
              )}
            </div>
          </Reveal>
        )}

        {/* ── 02: Hero Visual ── */}
        <Reveal delay={360}>
          <div className="mt-12">
            <SmartImage
              src={project.heroImage || project.image}
              alt={project.title}
              aspect={project.heroImageAspect || 'aspect-[21/9]'}
              fallbackLabel={project.shortTitle}
              fallbackSublabel={project.projectType}
              className="border border-ink-100"
            />
          </div>
        </Reveal>

        {/* ── 03: Overview (two-column) ── */}
        {project.overview && (
          <DetailSection index={nextIndex()} heading="Overview">
            <div className="grid grid-cols-12 gap-6 md:gap-10">
              <div className="col-span-12 md:col-span-8">
                <p className="text-subsection text-ink-600 text-pretty leading-relaxed">
                  {project.overview}
                </p>
              </div>
              <div className="col-span-12 md:col-span-4">
                <div className="border-l border-ink-100 pl-5 space-y-3">
                  {project.role && <MetaRow label="Role" value={project.role} />}
                  {project.duration && <MetaRow label="Duration" value={project.duration} />}
                  {project.projectType && <MetaRow label="Type" value={project.projectType} />}
                  {project.team && <MetaRow label="Team" value={project.team} />}
                  {project.status && <MetaRow label="Status" value={project.status} />}
                  {project.technologies.length > 0 && (
                    <MetaRow label="Stack" value={project.technologies.slice(0, 5).join(', ')} />
                  )}
                </div>
              </div>
            </div>
          </DetailSection>
        )}

        {/* ── 04: My Role ── */}
        {project.responsibilities && project.responsibilities.length > 0 && (
          <DetailSection index={nextIndex()} heading="My Role">
            <div className="space-y-4">
              {project.responsibilities.map((r, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <div>
                    <span className="text-sm font-medium text-ink-900">{r.area}</span>
                    <span className="text-subsection text-ink-500 text-pretty"> — {r.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {/* ── 05: What I Built ── */}
        {project.whatIBuilt.length > 0 && (
          <DetailSection index={nextIndex()} heading="What I Built">
            <ul className="space-y-3">
              {project.whatIBuilt.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-subsection text-ink-600 text-pretty">{item}</span>
                </li>
              ))}
            </ul>
          </DetailSection>
        )}

        {/* ── 06: Technology ── */}
        {project.technologies.length > 0 && (
          <DetailSection index={nextIndex()} heading="Technology">
            {project.techGroups && project.techGroups.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6">
                {project.techGroups.map((group, i) => (
                  <div key={i}>
                    <h4 className="text-sm font-semibold text-ink-950 mb-3 flex items-center gap-2">
                      {group.label}
                      <span className="text-xs font-mono text-ink-300 font-normal">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </h4>
                    <div className="space-y-2">
                      {group.items.map((tech) => (
                        <div key={tech.name}>
                          <span className="text-sm font-mono text-ink-700">{tech.name}</span>
                          {tech.description && (
                            <p className="text-xs text-ink-400 mt-0.5">{tech.description}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-sm font-mono text-ink-600 px-3 py-1.5 bg-ink-50 border border-ink-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </DetailSection>
        )}

        {/* ── 07: Architecture / How It Works ── */}
        {(project.architectureImage || project.sections) && (
          <DetailSection index={nextIndex()} heading="Architecture">
            <div className="space-y-8">
              {project.architectureImage && (
                <ArchitectureImage
                  src={project.architectureImage}
                  alt={`${project.title} architecture diagram`}
                  fallbackLabel={project.shortTitle}
                  fallbackSublabel="Architecture diagram"
                />
              )}
              {project.sections && project.sections.length > 0 && (
                <div className="space-y-6">
                  {project.sections.map((section, i) => (
                    <div key={i}>
                      <h4 className="text-base font-semibold text-ink-900 mb-2">
                        {section.heading}
                      </h4>
                      <p className="text-subsection text-ink-500 text-pretty leading-relaxed">
                        {section.body}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </DetailSection>
        )}

        {/* ── 08: How It Works (visual flow) ── */}
        {project.flowSteps && project.flowSteps.length > 0 && (
          <DetailSection index={nextIndex()} heading="How It Works">
            <FlowDiagram steps={project.flowSteps} />
          </DetailSection>
        )}

        {/* ── 09: Key Features ── */}
        {project.features && project.features.length > 0 && (
          <DetailSection index={nextIndex()} heading="Key Features">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {project.features.map((feature, i) => (
                <div key={i}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-ink-300 tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="h-px w-4 bg-ink-200" />
                    <h4 className="text-sm font-semibold text-ink-950">{feature.title}</h4>
                  </div>
                  <p className="text-subsection text-ink-500 text-pretty pl-7">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {/* ── 10: Challenges & Engineering Decisions ── */}
        {project.engineeringDecisions && project.engineeringDecisions.length > 0 && (
          <DetailSection index={nextIndex()} heading="Challenges & Engineering Decisions">
            <div className="space-y-8">
              {project.engineeringDecisions.map((dec, i) => (
                <div key={i} className="border-l-2 border-ink-100 pl-5">
                  <div className="mb-4">
                    <span className="text-xs font-mono text-ink-300 uppercase tracking-wide">
                      Challenge
                    </span>
                    <p className="mt-1 text-subsection text-ink-600 text-pretty">{dec.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <span className="text-xs font-mono text-accent uppercase tracking-wide">
                      Decision
                    </span>
                    <p className="mt-1 text-subsection text-ink-700 text-pretty">{dec.decision}</p>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-ink-300 uppercase tracking-wide">
                      Why
                    </span>
                    <p className="mt-1 text-subsection text-ink-500 text-pretty">{dec.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {/* ── 11: Gallery ── */}
        {project.gallery && project.gallery.length > 0 && (
          <DetailSection index={nextIndex()} heading="Screenshots">
            <ProjectGallery
              images={project.gallery}
              projectName={project.shortTitle}
            />
          </DetailSection>
        )}

        {/* ── YouTube / Related Engineering Notes ── */}
        {project.youtubeVideoIds && project.youtubeVideoIds.length > 0 && (
          <ProjectYouTube videoIds={project.youtubeVideoIds} />
        )}

        {/* ── 12: Results ── */}
        {project.results && project.results.length > 0 && (
          <DetailSection index={nextIndex()} heading="Results">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
              {project.results.map((result, i) => (
                <div key={i} className="bg-ink-0 px-6 py-6">
                  <div className="text-3xl font-semibold text-ink-950 tabular-nums">
                    {result.value}
                  </div>
                  <div className="mt-1 text-sm font-medium text-ink-700">{result.label}</div>
                  {result.description && (
                    <div className="mt-1 text-xs text-ink-400 text-pretty">{result.description}</div>
                  )}
                </div>
              ))}
            </div>
          </DetailSection>
        )}

        {/* ── 13: Project Navigation ── */}
        <ProjectNavigation
          currentSlug={slug}
          prev={prev}
          next={next}
          related={related}
          onNavigate={onNavigate}
          onBackToLibrary={backToLibrary}
        />
      </div>
    </article>
  );
}

function DetailSection({
  index,
  heading,
  children,
}: {
  index: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="mt-16 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-3">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-ink-300 tabular-nums">{index}</span>
            <div className="h-px w-6 bg-ink-200" />
          </div>
          <h3 className="mt-3 text-lg font-semibold text-ink-950">{heading}</h3>
        </div>
        <div className="col-span-12 md:col-span-8 md:col-start-5">
          {children}
        </div>
      </section>
    </Reveal>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="text-xs font-mono text-ink-300 uppercase tracking-wide">{label}</span>
      <span className="text-sm text-ink-600 text-pretty">{value}</span>
    </div>
  );
}

function FlowDiagram({ steps }: { steps: { label: string; detail?: string }[] }) {
  return (
    <div className="flex flex-col gap-0">
      {steps.map((step, i) => (
        <div key={i}>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 flex-1">
              <span className="font-mono text-xs text-ink-300 tabular-nums shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div className="flex-1 border border-ink-100 px-4 py-3 bg-ink-25">
                <span className="text-sm font-medium text-ink-900">{step.label}</span>
                {step.detail && (
                  <span className="text-xs text-ink-400 ml-2">— {step.detail}</span>
                )}
              </div>
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className="flex items-center gap-3 ml-[2.1rem] h-6">
              <ArrowRight size={14} className="text-ink-200 -rotate-90" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function ArchitectureImage({
  src,
  alt,
  fallbackLabel,
  fallbackSublabel,
}: {
  src: string;
  alt: string;
  fallbackLabel: string;
  fallbackSublabel: string;
}) {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <button
        onClick={() => setZoomed(true)}
        className="group relative w-full block"
      >
        <SmartImage
          src={src}
          alt={alt}
          aspect="aspect-[16/9]"
          fallbackLabel={fallbackLabel}
          fallbackSublabel={fallbackSublabel}
          className="border border-ink-100 overflow-x-auto transition-shadow duration-500 ease-out-expo group-hover:shadow-lg group-hover:shadow-ink-950/5"
        />
        <div className="absolute inset-0 flex items-end justify-end p-4 bg-gradient-to-t from-ink-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-ink-0/90">
            <ZoomIn size={14} /> Click to zoom
          </span>
        </div>
      </button>

      {zoomed && (
        <div
          className="fixed inset-0 z-[80] bg-ink-950/95 backdrop-blur-sm flex items-center justify-center animate-fade-in p-6"
          onClick={() => setZoomed(false)}
        >
          <div
            className="relative max-w-[95vw] max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              src={src}
              alt={alt}
              aspect="aspect-auto"
              fallbackLabel={fallbackLabel}
              fallbackSublabel={fallbackSublabel}
              className="border border-ink-800"
            />
          </div>
          <button
            onClick={() => setZoomed(false)}
            className="absolute top-6 right-6 text-ink-0/60 hover:text-ink-0 transition-colors duration-300 text-sm font-mono"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
