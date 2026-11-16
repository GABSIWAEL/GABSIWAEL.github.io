import { Award, ArrowUpRight } from 'lucide-react';
import { certifications } from '@/data/certifications';
import { SectionHeading, SectionWrapper } from './SectionHeading';
import { Reveal } from './Reveal';

export function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-ink-25 border-y border-ink-100">
      <SectionHeading
        index="06"
        title="Licenses & Certifications"
        description="Professional credentials across data, software development, AI, and English proficiency."
      />

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {certifications.map((certification, i) => (
          <Reveal key={certification.credentialId || certification.title} delay={i * 50}>
            <article className="h-full border border-ink-100 bg-ink-0 p-5 flex flex-col">
              <div className="flex items-start gap-3">
                <Award size={18} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-sm font-semibold text-ink-950 text-pretty">
                    {certification.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink-500">{certification.issuer}</p>
                </div>
              </div>

              <div className="mt-4 space-y-1 text-xs text-ink-400">
                <p>
                  Issued {certification.issued}
                  {certification.expires && ` · Expires ${certification.expires}`}
                </p>
                {certification.credentialId && (
                  <p className="break-all font-mono">
                    Credential ID: {certification.credentialId}
                  </p>
                )}
                {certification.note && <p>{certification.note}</p>}
              </div>

              {certification.credentialUrl && (
                <a
                  href={certification.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink-700 hover:text-accent transition-colors duration-300"
                >
                  Show credential
                  <ArrowUpRight size={14} />
                </a>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </SectionWrapper>
  );
}
