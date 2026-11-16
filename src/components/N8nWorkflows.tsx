import { n8nAutomationProjects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading, SectionWrapper } from './SectionHeading';
import { Reveal } from './Reveal';

interface N8nWorkflowsProps {
  onOpenProject: (slug: string) => void;
}

export function N8nWorkflows({ onOpenProject }: N8nWorkflowsProps) {
  return (
    <SectionWrapper id="n8n-workflows" className="bg-ink-25 border-y border-ink-100">
      <SectionHeading
        index="04"
        title="n8n Workflow Automations"
        description="Automation workflows combining AI agents, APIs, and scheduled processes."
      />

      <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {n8nAutomationProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 50}>
            <ProjectCard project={project} onOpen={onOpenProject} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
