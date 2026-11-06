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
          DEFAULT: '#050505',
          obsidian: '#0A0A0A',
          charcoal: '#141414',
          glass: 'rgba(255, 255, 255, 0.06)',
          surface: '#0F0F14',
        },
        accent: {
          DEFAULT: '#D98B3A',
          amber: '#D98B3A',
          gold: '#C6A96C',
          light: '#E69642',
          subtle: 'rgba(217, 139, 58, 0.14)',
        },
        text: {
          soft: '#F5F5F5',
          muted: '#A1A1A1',
        },
        border: {
          glass: 'rgba(255, 255, 255, 0.12)',
          'glass-highlight': 'rgba(255, 255, 255, 0.32)',
          amber: 'rgba(217, 139, 58, 0.4)',
        }
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'spatial-glass': '0 24px 60px -15px rgba(0, 0, 0, 0.7), 0 0 40px -10px rgba(217, 139, 58, 0.15)',
        'amber-bloom': '0 0 60px rgba(217, 139, 58, 0.3)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 3s infinite',
        'float-reverse': 'floatRev 7.5s ease-in-out 1.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1deg)' },
        },
        floatRev: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(12px) rotate(-1deg)' },
        }
      }
    },
  },
  plugins: [],
}
