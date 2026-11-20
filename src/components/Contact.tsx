import { useRef, useState, type FormEvent } from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { site } from '@/data/site';
import { SectionWrapper } from './SectionHeading';
import { Reveal } from './Reveal';

const inquiryOptions = [
  {
    id: 'freelance',
    title: 'Freelance project',
    description: 'Looking for a developer for your project?',
  },
  {
    id: 'opportunity',
    title: 'Job opportunity',
    description: 'Have a role you think could be a good fit?',
  },
  {
    id: 'problem',
    title: 'Problem to solve',
    description: 'Need help with a technical challenge?',
  },
  {
    id: 'hosting',
    title: 'Website hosting',
    description: 'Need a website hosted?',
  },
];

export function Contact() {
  const [inquiryIndex, setInquiryIndex] = useState(0);
  const formRef = useRef<HTMLFormElement>(null);
  const selectedInquiry = inquiryOptions[inquiryIndex];

  const contacts = [
    { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: Mail },
    { label: 'LinkedIn', value: 'in/gabsiwael', href: site.links.linkedin, icon: Linkedin },
    { label: 'GitHub', value: 'GABSIWAEL', href: site.links.github, icon: Github },
  ];

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const message = String(formData.get('message') ?? '').trim();
    const subject = `Portfolio inquiry: ${selectedInquiry.title}`;
    const body = [
      `Inquiry type: ${selectedInquiry.title}`,
      `Name: ${name}`,
      `Email: ${email}`,
      '',
      'Details:',
      message,
    ].join('\n');

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

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
            What can I help you with?
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div
            role="group"
            aria-label="Choose an inquiry type"
            className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left"
          >
            {inquiryOptions.map((option, index) => (
              <button
                key={option.id}
                type="button"
                aria-pressed={inquiryIndex === index}
                onClick={() => {
                  setInquiryIndex(index);
                  formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }}
                className={`border p-5 text-left transition-colors duration-300 ${
                  inquiryIndex === index
                    ? 'border-accent bg-ink-25'
                    : 'border-ink-100 bg-ink-0 hover:border-ink-300'
                }`}
              >
                <span className="block text-sm font-medium text-ink-900">{option.title}</span>
                <span className="mt-2 block text-sm text-ink-500">{option.description}</span>
              </button>
            ))}
          </div>
        </Reveal>
      </div>

      <Reveal delay={300}>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mx-auto mt-8 max-w-3xl border border-ink-100 bg-ink-0 p-6 sm:p-8"
        >
          <div className="mb-6">
            <h3 className="text-lg font-medium text-ink-950">{selectedInquiry.title}</h3>
            <p className="mt-1 text-sm text-ink-500">
              Share a few details and your email app will prepare a message to me.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-ink-700">
                Your name
              </label>
              <input
                id="contact-name"
                name="name"
                autoComplete="name"
                required
                className="w-full border border-ink-100 bg-ink-0 px-3 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-accent"
                placeholder="Name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-ink-700">
                Your email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full border border-ink-100 bg-ink-0 px-3 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-accent"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="contact-message" className="mb-2 block text-sm font-medium text-ink-700">
                Tell me a little about it
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                className="w-full resize-y border border-ink-100 bg-ink-0 px-3 py-2.5 text-sm text-ink-900 outline-none transition-colors placeholder:text-ink-300 focus:border-accent"
                placeholder="What are you looking for?"
              />
            </div>
          </div>

          <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-xs text-ink-400">
              Your email app will open. Nothing is sent until you press Send.
            </p>
            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-ink-950 px-6 py-3 text-sm font-medium text-ink-0 transition-colors duration-500 ease-out-expo hover:bg-accent"
            >
              Prepare email
              <ArrowUpRight size={15} />
            </button>
          </div>
        </form>
      </Reveal>

      <Reveal delay={400}>
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
