import { ArrowRight, ArrowUpRight, Clock3 } from 'lucide-react';
import { SectionHeading, SectionWrapper } from './SectionHeading';
import { Reveal } from './Reveal';

const marketplaceUrl = 'https://marketplace.visualstudio.com/items?itemName=vendayx.mini-pomodoro';

export function Extensions() {
  return (
    <SectionWrapper id="extensions" className="bg-ink-25 border-y border-ink-100">
      <SectionHeading
        index="05"
        title="VS Code Extensions"
        description="Developer tools and extensions I've built for Visual Studio Code."
      />

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        <Reveal delay={50}>
          <article className="group flex h-full flex-col border border-ink-100 bg-ink-0 transition-shadow duration-500 ease-out-expo hover:shadow-lg hover:shadow-ink-950/5">
            <img
              src="/images/extensions/api-tester-pro/api-tester-pro.png"
              alt="API Tester Pro showing a REST request editor and response headers in Visual Studio Code"
              loading="lazy"
              className="aspect-video w-full border-b border-ink-100 bg-ink-950 object-contain"
            />

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide text-ink-400">
                  <Clock3 size={13} className="text-accent" />
                  VS Code Extension
                </span>
                <span className="border border-amber-200 bg-amber-50 px-2 py-1 text-[11px] font-mono text-amber-700">
                  In verification
                </span>
              </div>

              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink-950 group-hover:text-accent transition-colors duration-300">
                API Tester Pro
              </h3>
              <p className="mt-2 text-sm text-ink-500 text-pretty">
                A lightweight REST client for VS Code. Build requests, inspect responses,
                and reuse saved calls and environment variables without leaving your editor.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {['REST Client', 'Collections', 'Environments', 'SecretStorage'].map((tag) => (
                  <span
                    key={tag}
                    className="border border-ink-100 px-2.5 py-1 text-[11px] font-mono text-ink-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-auto border-t border-ink-50 pt-4">
                <span className="text-xs text-ink-400">
                  Awaiting Microsoft Marketplace verification
                </span>
              </div>
            </div>
          </article>
        </Reveal>

        <Reveal delay={100}>
          <article className="group flex h-full flex-col border border-ink-100 bg-ink-0 transition-shadow duration-500 ease-out-expo hover:shadow-lg hover:shadow-ink-950/5">
            <img
              src="/images/extensions/mini-pomodoro/timer-panel.png"
              alt="Mini Pomodoro timer panel showing a 25-minute countdown and focus controls"
              loading="lazy"
              className="aspect-video w-full border-b border-ink-100 bg-ink-950 object-contain"
            />

            <div className="flex flex-1 flex-col p-5">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wide text-ink-400">
                  <Clock3 size={13} className="text-accent" />
                  VS Code Extension
                </span>
                <span className="text-xs font-mono text-ink-300">v0.0.1</span>
              </div>

              <h3 className="mt-4 text-base font-semibold tracking-tight text-ink-950 group-hover:text-accent transition-colors duration-300">
                Mini Pomodoro
              </h3>
              <p className="mt-2 text-sm text-ink-500 text-pretty">
                A visible 25-minute countdown in the VS Code status bar, with start,
                pause, and reset controls to keep focus sessions close at hand.
              </p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {['Productivity', 'Pomodoro', 'VS Code'].map((tag) => (
                  <span
                    key={tag}
                    className="border border-ink-100 px-2.5 py-1 text-[11px] font-mono text-ink-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-ink-50 pt-4">
                <img
                  src="/images/extensions/mini-pomodoro/marketplace-listing.png"
                  alt=""
                  loading="lazy"
                  className="h-12 w-20 shrink-0 border border-ink-100 bg-ink-950 object-cover object-top"
                />
                <span className="text-xs text-ink-400">Available on Visual Studio Marketplace</span>
              </div>

              <a
                href={marketplaceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-ink-700 hover:text-accent transition-colors duration-300"
              >
                View on Marketplace
                <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5" />
                <ArrowUpRight size={13} className="ml-auto" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}
