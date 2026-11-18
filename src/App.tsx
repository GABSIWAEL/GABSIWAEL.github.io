import { useEffect, useState, useCallback } from 'react';
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { ProjectLibrary } from '@/components/ProjectLibrary';
import { MachineLearningProjects } from '@/components/MachineLearningProjects';
import { N8nWorkflows } from '@/components/N8nWorkflows';
import { Extensions } from '@/components/Extensions';
import { EngineeringNotes } from '@/components/EngineeringNotes';
import { About, EngineeringStack } from '@/components/About';
import { Certifications } from '@/components/Certifications';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ProjectDetail } from '@/components/ProjectDetail';
import { getProject } from '@/data/projects';
import { site } from '@/data/site';

function getCurrentRoute(): { page: 'home' | 'project'; slug?: string } {
  const hash = window.location.hash;
  const match = hash.match(/^#\/projects\/([\w-]+)$/);
  if (match) {
    return { page: 'project', slug: match[1] };
  }
  return { page: 'home' };
}

function updateMetaTags(slug?: string) {
  const project = slug ? getProject(slug) : undefined;

  const title = project
    ? `${project.title} — ${site.name}`
    : `${site.name} — ${site.role}`;
  const description = project
    ? project.tagline || project.description
    : site.tagline;

  document.title = title;

  const setMeta = (name: string, content: string, attr: 'name' | 'property' = 'name') => {
    let el = document.querySelector(`meta[${attr}="${name}"]`);
    if (!el) {
      el = document.createElement('meta');
      el.setAttribute(attr, name);
      document.head.appendChild(el);
    }
    el.setAttribute('content', content);
  };

  setMeta('description', description);
  setMeta('og:title', title, 'property');
  setMeta('og:description', description, 'property');
  setMeta('og:type', project ? 'article' : 'website', 'property');

  const image = project?.heroImage || project?.image;
  if (image) {
    setMeta('og:image', image, 'property');
  }
}

function App() {
  const [route, setRoute] = useState(getCurrentRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getCurrentRoute());
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    updateMetaTags(route.page === 'project' ? route.slug : undefined);
  }, [route]);

  const goHome = useCallback(() => {
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const openProject = useCallback((slug: string) => {
    window.location.hash = `/projects/${slug}`;
  }, []);

  if (route.page === 'project' && route.slug) {
    return (
      <div className="min-h-screen bg-ink-0">
        <Navigation />
        <ProjectDetail slug={route.slug} onBack={goHome} onNavigate={openProject} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-ink-0">
      <Navigation />
      <main>
        <Hero />
        <SelectedWork />
        <ProjectLibrary onOpenProject={openProject} />
        <MachineLearningProjects onOpenProject={openProject} />
        <N8nWorkflows onOpenProject={openProject} />
        <Extensions />
        <EngineeringNotes />
        <Certifications />
        <About />
        <EngineeringStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
