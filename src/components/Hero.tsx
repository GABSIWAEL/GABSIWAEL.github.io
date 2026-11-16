import { Github, Linkedin, ArrowRight } from 'lucide-react';
import { site } from '@/data/site';
import { Reveal } from './Reveal';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-texture opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-0 pointer-events-none" />

      <div className="relative mx-auto max-w-content w-full">
        <div className="grid grid-cols-12 gap-6 items-end">
          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="relative flex h-2 w-2">
                  {site.available && (
                    <span className="absolute inline-flex h-full w-full animate-pulse-soft bg-accent rounded-full" />
                  )}
                  <span className="relative inline-flex h-2 w-2 bg-accent rounded-full" />
                </span>
                <span className="text-xs font-medium text-ink-500 tracking-wide">
                  {site.available ? 'Available for opportunities' : 'Currently engaged'}
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <p className="font-mono text-xs text-ink-400 mb-6 tracking-wide">
                {site.role.toUpperCase()} &nbsp;/&nbsp; {site.location.toUpperCase()}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <h1 className="text-display text-ink-950 text-balance">
                Building backend systems,
                <br />
                <span className="text-ink-400">digital products</span> and
                <br />
                <span className="font-serif italic text-ink-800">AI-powered</span> applications.
              </h1>
            </Reveal>

            <Reveal delay={300}>
              <p className="mt-8 max-w-prose-sm text-subsection text-ink-500 text-pretty">
                Software engineer focused on distributed systems, infrastructure, and product development — with experience across banking, SaaS, education, and AI.
              </p>
            </Reveal>

            <Reveal delay={400}>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="/#work"
                  className="group inline-flex items-center gap-2 bg-ink-950 text-ink-0 px-6 py-3 text-sm font-medium hover:bg-accent transition-colors duration-500 ease-out-expo"
                >
                  Explore my work
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-0.5 transition-transform duration-300"
                  />
                </a>
                <a
                  href="/#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-ink-700 hover:text-accent transition-colors duration-300 link-underline"
                >
                  Let's connect
                </a>
              </div>
            </Reveal>
          </div>

          <div className="col-span-12 md:col-span-4 hidden md:block">
            <Reveal delay={500}>
              <div className="flex flex-col items-end gap-5 text-right">
                <div className="flex flex-col gap-3">
                  <a
                    href={site.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-ink-500 hover:text-ink-950 transition-colors duration-300"
                  >
                    GitHub
                    <Github size={14} className="text-ink-300 group-hover:text-ink-950 transition-colors" />
                  </a>
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 text-sm text-ink-500 hover:text-ink-950 transition-colors duration-300"
                  >
                    LinkedIn
                    <Linkedin size={14} className="text-ink-300 group-hover:text-ink-950 transition-colors" />
                  </a>
                </div>

                <div className="mt-6 w-full max-w-[200px] border-t border-ink-100 pt-5">
                  <div className="space-y-2">
                    <MetaRow label="Stack" value=".NET / Java / React" />
                    <MetaRow label="Focus" value="Distributed Systems" />
                    <MetaRow label="Content" value="Engineering / LinkedIn" />
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={600}>
          <div className="mt-16 flex items-center gap-3 text-ink-300">
            <div className="h-px w-12 bg-ink-200" />
            <span className="text-xs font-mono tracking-wide">SCROLL</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-xs">
      <span className="text-ink-300">{label}</span>
      <span className="text-ink-500 font-mono">{value}</span>
    </div>
  );
}
