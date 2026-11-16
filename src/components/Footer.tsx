import { Github, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';

export function Footer() {
  const socials = [
    { label: 'GitHub', href: site.links.github, icon: Github },
    { label: 'LinkedIn', href: site.links.linkedin, icon: Linkedin },
    { label: 'YouTube', href: site.links.youtube, icon: Youtube },
  ];

  return (
    <footer className="border-t border-ink-100 bg-ink-0">
      <div className="mx-auto max-w-content px-6 py-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <h3 className="text-lg font-semibold tracking-tight text-ink-950">
              {site.name.toUpperCase()}
            </h3>
            <p className="mt-1 text-sm text-ink-400">{site.role}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1.5 text-sm text-ink-500 hover:text-ink-950 transition-colors duration-300"
              >
                {s.label}
                <ArrowUpRight
                  size={14}
                  className="text-ink-300 group-hover:text-ink-950 transition-colors duration-300"
                />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-50 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-ink-300">
            &copy; 2026 {site.name}. All rights reserved.
          </p>
          <p className="text-xs text-ink-300 font-mono">
            Built with intent.
          </p>
        </div>
      </div>
    </footer>
  );
}
