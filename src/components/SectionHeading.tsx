import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

interface SectionHeadingProps {
  index?: string;
  title: string;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  index,
  title,
  description,
  className = '',
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={`${align === 'center' ? 'text-center' : ''} ${className}`}>
      <Reveal>
        <div className={`flex items-baseline gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
          {index && (
            <span className="font-mono text-xs text-ink-300 tabular-nums">{index}</span>
          )}
          <div className="h-px w-8 bg-ink-200" />
        </div>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-section text-ink-950 text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className={`mt-3 max-w-prose-sm text-subsection text-ink-500 text-pretty ${align === 'center' ? 'mx-auto' : ''}`}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}

interface SectionWrapperProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section id={id} className={`px-6 py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-content">{children}</div>
    </section>
  );
}
