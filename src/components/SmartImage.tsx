import { useEffect, useState } from 'react';

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  fallbackLabel?: string;
  fallbackSublabel?: string;
  aspect?: string;
}

export function SmartImage({
  src,
  alt,
  className = '',
  imgClassName = '',
  fallbackLabel = '',
  fallbackSublabel = '',
  aspect = 'aspect-[16/10]',
}: SmartImageProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    setStatus('loading');
  }, [src]);

  const slugFromPath = src.split('/').pop()?.replace(/\.\w+$/, '') || '';
  const label = fallbackLabel || slugFromPath.replace(/[-_]/g, ' ');
  const seed = slugFromPath || 'default';

  return (
    <div className={`relative overflow-hidden bg-ink-100 ${aspect} ${className}`}>
      {status !== 'error' && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setStatus('loaded')}
          onError={() => setStatus('error')}
          className={`absolute inset-0 h-full w-full transition-opacity duration-700 ease-out-expo ${
            status === 'loaded' ? 'opacity-100' : 'opacity-0'
          } object-cover ${imgClassName}`}
        />
      )}

      {status === 'error' && (
        <Placeholder
          label={label}
          sublabel={fallbackSublabel}
          seed={seed}
        />
      )}

      {status === 'loading' && (
        <div className="absolute inset-0 animate-pulse-soft bg-ink-100" />
      )}
    </div>
  );
}

function Placeholder({ label, sublabel, seed }: { label: string; sublabel?: string; seed: string }) {
  const hash = seed.split('').reduce((a, c) => a + c.charCodeAt(0), 0);
  const pattern = hash % 4;

  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center bg-ink-50">
      <div className="absolute inset-0 opacity-[0.03]">
        {pattern === 0 && <GridPattern />}
        {pattern === 1 && <DiagonalPattern />}
        {pattern === 2 && <DotsPattern />}
        {pattern === 3 && <LinesPattern />}
      </div>
      <div className="relative flex flex-col items-center gap-2 px-6 text-center">
        <div className="h-8 w-8 border border-ink-200" />
        <span className="text-sm font-medium tracking-tight text-ink-400 capitalize">
          {label}
        </span>
        {sublabel && (
          <span className="text-xs text-ink-300">{sublabel}</span>
        )}
      </div>
    </div>
  );
}

function GridPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#131514" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

function DiagonalPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="diag" width="20" height="20" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="20" stroke="#131514" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#diag)" />
    </svg>
  );
}

function DotsPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="12" cy="12" r="1.5" fill="#131514" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}

function LinesPattern() {
  return (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="lines" width="60" height="60" patternUnits="userSpaceOnUse">
          <line x1="0" y1="30" x2="60" y2="30" stroke="#131514" strokeWidth="0.5" />
          <line x1="30" y1="0" x2="30" y2="60" stroke="#131514" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#lines)" />
    </svg>
  );
}
