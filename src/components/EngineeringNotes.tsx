import { Play } from 'lucide-react';
import { videos, type Video } from '@/data/videos';
import { SmartImage } from './SmartImage';
import { SectionHeading, SectionWrapper } from './SectionHeading';
import { Reveal } from './Reveal';

export function EngineeringNotes() {
  return (
    <SectionWrapper id="engineering" className="bg-ink-25 border-y border-ink-100">
      <div>
        <SectionHeading
          index="06"
          title="Build. Learn. Share."
          description="Technical content on backend engineering, infrastructure, architecture, and DevOps — sharing what I learn by building."
        />
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <Reveal key={video.id} delay={i * 80}>
            <VideoCard video={video} />
          </Reveal>
        ))}
      </div>

    </SectionWrapper>
  );
}

function VideoCard({ video }: { video: Video }) {
  if (video.source === 'linkedin') {
    return (
      <div>
        <iframe
          src={video.linkedinEmbedUrl}
          width="504"
          height="399"
          title={video.title}
          allowFullScreen
          loading="lazy"
          className="h-[399px] w-full border border-ink-100 bg-ink-100"
        />
        <VideoCaption video={video} />
      </div>
    );
  }

  return (
    <a
      href={video.youtubeUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block"
    >
      <div className="relative overflow-hidden border border-ink-100 bg-ink-100 aspect-video">
        <SmartImage
          src={video.thumbnail}
          alt={video.title}
          aspect="aspect-video"
          fallbackLabel={video.category}
          fallbackSublabel={video.duration}
          className="border-0"
          imgClassName="group-hover:scale-[1.03] transition-transform duration-700 ease-out-expo"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-ink-950/0 group-hover:bg-ink-950/15 transition-colors duration-500">
          <div className="flex items-center justify-center h-12 w-12 bg-ink-0/90 group-hover:bg-ink-0 transition-colors duration-300 shadow-sm">
            <Play
              size={18}
              className="text-ink-950 ml-0.5 group-hover:text-accent transition-colors duration-300"
              fill="currentColor"
            />
          </div>
        </div>
        <div className="absolute bottom-2 right-2 bg-ink-950/80 px-1.5 py-0.5 text-xs font-mono text-ink-0 tabular-nums">
          {video.duration}
        </div>
      </div>

      <VideoCaption video={video} />
    </a>
  );
}

function VideoCaption({ video }: { video: Video }) {
  return (
    <div className="mt-3">
      <span className="text-xs font-mono text-ink-300">{video.category}</span>
      <h3 className="mt-1 text-sm font-medium text-ink-800 text-pretty line-clamp-2">
        {video.title}
      </h3>
    </div>
  );
}
