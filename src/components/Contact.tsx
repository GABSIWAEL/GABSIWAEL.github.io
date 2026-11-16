import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { SectionHeading, SectionWrapper } from './SectionHeading';
import { Reveal } from './Reveal';

export function Contact() {
  const contacts = [
    { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail },
    { label: 'LinkedIn', value: 'in/gabsiwael', href: site.links.linkedin, icon: Linkedin },
    { label: 'GitHub', value: 'GABSIWAEL', href: site.links.github, icon: Github },
  ];

  return (
    <SectionWrapper id="contact" className="pt-24 pb-16">
      <div className="text-center">
        <Reveal>
          <p className="font-mono text-xs text-ink-300 tracking-wide mb-6">
            08 / CONTACT
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="text-display text-ink-950 text-balance">
            Have a project
            <br />
            <span className="font-serif italic text-ink-600">worth building?</span>
          </h2>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-6 text-subsection text-ink-500">
            Let's talk.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center gap-2 bg-ink-950 text-ink-0 px-6 py-3 text-sm font-medium hover:bg-accent transition-colors duration-500 ease-out-expo"
          >
            {site.email}
            <ArrowUpRight size={15} />
          </a>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-px bg-ink-100 border border-ink-100">
          {contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex flex-col items-center gap-2 bg-ink-0 px-6 py-8 hover:bg-ink-25 transition-colors duration-300"
            >
              <c.icon
                size={18}
                className="text-ink-400 group-hover:text-accent transition-colors duration-300"
              />
              <span className="text-xs font-mono text-ink-300 uppercase tracking-wide">
                {c.label}
              </span>
              <span className="text-sm text-ink-700 group-hover:text-ink-950 transition-colors duration-300">
                {c.value}
              </span>
            </a>
          ))}
        </div>
      </Reveal>
    </SectionWrapper>
  );
}
