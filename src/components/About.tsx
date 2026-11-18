import { engineeringStack, experience, education } from '@/data/engineering';
import { SectionHeading, SectionWrapper } from './SectionHeading';
import { Reveal } from './Reveal';

export function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        index="08"
        title="About"
      />

      <div className="mt-12 grid grid-cols-12 gap-6 md:gap-10">
        <div className="col-span-12 md:col-span-7">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <Reveal className="shrink-0">
              <img
                src="/images/wael-gabsi.jpg"
                alt="Wael Gabsi"
                loading="lazy"
                className="h-48 w-48 rounded-full border border-ink-100 object-cover"
              />
            </Reveal>
            <div>
              <Reveal>
                <p className="text-lg text-ink-700 text-pretty leading-relaxed">
                  I'm a software engineer specialized in software and AI, with a strong interest in backend systems, distributed architectures, product development, and infrastructure.
                </p>
              </Reveal>
              <Reveal delay={100}>
                <p className="mt-4 text-subsection text-ink-500 text-pretty">
                  I've worked across banking, SaaS, education, AI, event platforms, and enterprise applications — building systems that range from microservices handling banking operations to AI-powered support platforms and shipped production products.
                </p>
              </Reveal>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 md:col-start-9">
          <Reveal delay={150}>
            <div className="border-l border-ink-100 pl-6 space-y-6">
              <div>
                <h4 className="text-xs font-mono text-ink-300 uppercase tracking-wide mb-3">
                  Experience
                </h4>
                <div className="space-y-4">
                  {experience.map((exp, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium text-ink-800">{exp.role}</p>
                      <p className="text-xs text-ink-400 mt-0.5">{exp.context}</p>
                      <p className="text-xs text-ink-300 mt-0.5 font-mono">{exp.period}</p>
                      <p className="text-sm text-ink-500 mt-2 text-pretty">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-ink-50">
                <h4 className="text-xs font-mono text-ink-300 uppercase tracking-wide mb-3">
                  Education
                </h4>
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <div key={i}>
                      <p className="text-sm font-medium text-ink-800">{edu.institution}</p>
                      <p className="text-xs text-ink-400">{edu.field}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </SectionWrapper>
  );
}

export function EngineeringStack() {
  return (
    <SectionWrapper id="stack" className="bg-ink-25 border-y border-ink-100">
      <SectionHeading
        index="09"
        title="Engineering Stack"
        description="Technologies and tools I work with — grouped by domain, not by proficiency percentage."
      />

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
        {engineeringStack.map((group, i) => (
          <Reveal key={group.label} delay={i * 60}>
            <div>
              <h4 className="text-sm font-semibold text-ink-950 mb-4 flex items-center gap-2">
                {group.label}
                <span className="text-xs font-mono text-ink-300 font-normal">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm font-mono text-ink-600 px-3 py-1.5 bg-ink-0 border border-ink-100 hover:border-accent hover:text-accent transition-colors duration-300 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
