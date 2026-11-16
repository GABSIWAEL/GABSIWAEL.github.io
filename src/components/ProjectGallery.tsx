import { useState, useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import type { GalleryImage } from '@/data/projects';
import { SmartImage } from './SmartImage';
import { Reveal } from './Reveal';

interface ProjectGalleryProps {
  images: GalleryImage[];
  projectName: string;
}

export function ProjectGallery({ images, projectName }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const isOpen = lightboxIndex !== null;

  const close = useCallback(() => setLightboxIndex(null), []);
  const prev = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setLightboxIndex((i) => (i === null ? null : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, close, prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 50) {
      if (delta > 0) prev();
      else next();
    }
    touchStartX.current = null;
  };

  if (images.length === 0) return null;

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {images.map((img, i) => (
          <Reveal key={i} delay={i * 60}>
            <button
              onClick={() => setLightboxIndex(i)}
              className="group relative w-full text-left"
            >
              <SmartImage
                src={img.src}
                alt={img.caption || `${projectName} screenshot ${i + 1}`}
                aspect={i === 0 && images.length > 2 ? 'aspect-[16/10]' : 'aspect-[16/10]'}
                fallbackLabel={projectName}
                fallbackSublabel={img.caption || `Screenshot ${i + 1}`}
                className="border border-ink-100 transition-all duration-500 ease-out-expo group-hover:shadow-lg group-hover:shadow-ink-950/5"
                imgClassName="group-hover:scale-[1.02] transition-transform duration-700 ease-out-expo"
              />
              <div className="absolute inset-0 flex items-end justify-between p-4 bg-gradient-to-t from-ink-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {img.caption && (
                  <span className="text-xs font-mono text-ink-0/90">{img.caption}</span>
                )}
                <ZoomIn size={16} className="text-ink-0/90" />
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-[80] bg-ink-950/95 backdrop-blur-sm flex items-center justify-center animate-fade-in"
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            onClick={(e) => { e.stopPropagation(); close(); }}
            className="absolute top-6 right-6 text-ink-0/60 hover:text-ink-0 transition-colors duration-300"
            aria-label="Close"
          >
            <X size={24} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 md:left-8 text-ink-0/50 hover:text-ink-0 transition-colors duration-300 p-2"
            aria-label="Previous"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 md:right-8 text-ink-0/50 hover:text-ink-0 transition-colors duration-300 p-2"
            aria-label="Next"
          >
            <ChevronRight size={32} />
          </button>

          <div
            className="relative max-w-[90vw] max-h-[85vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <SmartImage
              src={images[lightboxIndex!].src}
              alt={images[lightboxIndex!].caption || `${projectName} screenshot ${lightboxIndex! + 1}`}
              aspect="aspect-auto"
              fallbackLabel={projectName}
              fallbackSublabel={images[lightboxIndex!].caption}
              className="max-h-[78vh] border border-ink-800"
            />
            {images[lightboxIndex!].caption && (
              <p className="mt-4 text-sm font-mono text-ink-0/70 text-center">
                {images[lightboxIndex!].caption}
              </p>
            )}
            <p className="mt-2 text-xs font-mono text-ink-0/40 tabular-nums">
              {lightboxIndex! + 1} / {images.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
