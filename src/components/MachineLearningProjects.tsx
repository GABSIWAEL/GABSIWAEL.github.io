import { machineLearningProjects } from '@/data/projects';
import { ProjectCard } from './ProjectCard';
import { SectionHeading, SectionWrapper } from './SectionHeading';
import { Reveal } from './Reveal';

interface MachineLearningProjectsProps {
  onOpenProject: (slug: string) => void;
}

export function MachineLearningProjects({ onOpenProject }: MachineLearningProjectsProps) {
  return (
    <SectionWrapper id="machine-learning" className="bg-ink-25 border-y border-ink-100">
      <SectionHeading
        index="03"
        title="Machine Learning"
        description="Machine-learning projects spanning predictive modeling, natural language processing, and computer vision."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {machineLearningProjects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 50}>
            <ProjectCard project={project} onOpen={onOpenProject} />
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
