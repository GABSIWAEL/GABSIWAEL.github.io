import { Play } from 'lucide-react';
import { videos } from '@/data/videos';
import { SmartImage } from './SmartImage';
import { Reveal } from './Reveal';

interface ProjectYouTubeProps {
  videoIds: string[];
}

export function ProjectYouTube({ videoIds }: ProjectYouTubeProps) {
  if (!videoIds || videoIds.length === 0) return null;

  const related = videos.filter((v) => videoIds.includes(v.id));
  if (related.length === 0) return null;

  return (
    <Reveal>
      <div className="mt-16">
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-xs text-ink-300 tabular-nums">11</span>
          <div className="h-px w-6 bg-ink-200" />
          <h3 className="text-lg font-semibold text-ink-950">Related Engineering Notes</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {related.map((video, i) => (
            <Reveal key={video.id} delay={i * 60}>
              {video.source === 'linkedin' ? (
                <iframe
                  src={video.linkedinEmbedUrl}
                  width="504"
                  height="399"
                  title={video.title}
                  allowFullScreen
                  loading="lazy"
                  className="h-[399px] w-full border border-ink-100 bg-ink-100"
                />
              ) : (
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
                      <div className="flex items-center justify-center h-10 w-10 bg-ink-0/90 group-hover:bg-ink-0 transition-colors duration-300 shadow-sm">
                        <Play
                          size={16}
                          className="text-ink-950 ml-0.5 group-hover:text-accent transition-colors duration-300"
                          fill="currentColor"
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-ink-950/80 px-1.5 py-0.5 text-xs font-mono text-ink-0 tabular-nums">
                      {video.duration}
                    </div>
                  </div>

                  <div className="mt-3">
                    <span className="text-xs font-mono text-ink-300">{video.category}</span>
                    <h4 className="mt-1 text-sm font-medium text-ink-800 group-hover:text-ink-950 transition-colors duration-300 text-pretty line-clamp-2">
                      {video.title}
                    </h4>
                  </div>
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
