/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#030303',
          void: '#010102',
          secondary: '#08080A',
          tertiary: '#0E0E12',
          card: '#0A0A0D',
        },
        accent: {
          DEFAULT: '#FF9E2C',
          amber: '#FFA737',
          gold: '#C6A96C',
          warm: '#E5A93C',
          light: '#FFD285',
          subtle: 'rgba(255, 158, 44, 0.12)',
        },
        metallic: {
          titanium: '#CBD5E1',
          steel: '#94A3B8',
          chrome: '#E2E8F0',
          dark: '#1E293B',
        },
        primary: {
          DEFAULT: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#8E8E93',
          light: '#A1A1A6',
          dark: '#48484A',
        },
        border: {
          DEFAULT: '#1E1E24',
          subtle: '#141418',
          highlight: 'rgba(255, 158, 44, 0.4)',
        }
      },
      fontFamily: {
        extended: ['Syncopate', '"Space Grotesk"', 'sans-serif'],
        display: ['Syne', '"Space Grotesk"', 'sans-serif'],
        headline: ['"Space Grotesk"', '"Syne"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        body: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glow-amber': '0 0 35px -5px rgba(255, 158, 44, 0.45)',
        'glow-pill': '0 0 22px rgba(255, 158, 44, 0.3)',
        'glow-metallic': '0 0 25px rgba(203, 213, 225, 0.2)',
      },
      animation: {
        'pulse-glow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar-sweep': 'radar 8s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
}
