/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter Variable"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        serif: ['"Newsreader"', 'Georgia', 'serif'],
      },
      colors: {
        ink: {
          950: '#0a0b0a',
          900: '#131514',
          800: '#1c1f1e',
          700: '#2a2d2b',
          600: '#3a3d3b',
          500: '#525552',
          400: '#71746f',
          300: '#9a9c96',
          200: '#c4c6c0',
          100: '#e0e1dc',
          50: '#eeeef0',
          25: '#f5f5f3',
          0: '#faf9f6',
        },
        accent: {
          DEFAULT: '#3d6b4a',
          hover: '#345e40',
          soft: '#e8efe9',
          muted: '#5a7d63',
        },
      },
      fontSize: {
        'display': ['clamp(2.5rem, 6vw, 4.5rem)', { lineHeight: '1.02', letterSpacing: '-0.03em', fontWeight: '600' }],
        'display-sm': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.05', letterSpacing: '-0.025em', fontWeight: '600' }],
        'section': ['clamp(1.75rem, 3vw, 2.25rem)', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '600' }],
        'subsection': ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'tighter': '-0.03em',
        'tight': '-0.02em',
      },
      maxWidth: {
        'content': '1200px',
        'prose-sm': '65ch',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'line-grow': {
          '0%': { transform: 'scaleX(0)' },
          '100%': { transform: 'scaleX(1)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.5s ease forwards',
        'line-grow': 'line-grow 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-soft': 'pulse-soft 2.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
