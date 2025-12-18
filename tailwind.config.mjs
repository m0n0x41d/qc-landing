/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#020617',
          secondary: '#0f172a',
          tertiary: '#1e293b',
        },
        text: {
          primary: '#fafafa',
          secondary: '#a1a1aa',
          muted: '#8b949e',
        },
        accent: {
          green: '#46AB47',
          blue: '#3b82f6',
          purple: '#8b5cf6',
          // Fire palette for logo only
          amber: '#ffcc00',
          orange: '#ff8700',
          red: '#ff4444',
        },
        border: {
          subtle: '#1e293b',
          hover: '#334155',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-shift': 'gradient-shift 4s linear infinite',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { backgroundPosition: '0% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
};
