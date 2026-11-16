import { useEffect, useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { site, navLinks, externalLinks } from '@/data/site';

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out-expo ${
          scrolled
            ? 'bg-ink-0/85 backdrop-blur-md border-b border-ink-100'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-content items-center justify-between px-6 h-16">
          <a
            href="/"
            className="text-sm font-semibold tracking-tight text-ink-950 hover:text-accent transition-colors duration-300"
          >
            {site.name.toUpperCase()}
          </a>

          <div className="hidden md:flex items-center gap-8">
            <div className="flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm text-ink-500 hover:text-ink-950 transition-colors duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="h-4 w-px bg-ink-200" />
            <div className="flex items-center gap-4">
              {externalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-ink-400 hover:text-ink-950 transition-colors duration-300"
                >
                  {link.label === 'GitHub' && <Github size={16} />}
                  {link.label === 'LinkedIn' && <Linkedin size={16} />}
                </a>
              ))}
            </div>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="md:hidden text-ink-700 p-2 -mr-2"
            aria-label="Open menu"
          >
            <Menu size={20} />
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <div
            className="absolute inset-0 bg-ink-950/20 backdrop-blur-sm animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />
          <div className="absolute right-0 top-0 bottom-0 w-full max-w-sm bg-ink-0 shadow-xl animate-fade-in">
            <div className="flex items-center justify-between px-6 h-16 border-b border-ink-100">
              <span className="text-sm font-semibold tracking-tight text-ink-950">
                {site.name.toUpperCase()}
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-ink-500 p-2 -mr-2"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-col px-6 py-8 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-3 text-lg text-ink-800 hover:text-accent transition-colors duration-300 border-b border-ink-50"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-5 pt-8">
                {externalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-ink-400 hover:text-ink-950 transition-colors duration-300"
                  >
                    {link.label === 'GitHub' && <Github size={18} />}
                    {link.label === 'LinkedIn' && <Linkedin size={18} />}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
