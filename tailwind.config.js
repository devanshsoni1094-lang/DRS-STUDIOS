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
          secondary: '#101010',
          tertiary: '#161616',
          card: '#0C0C0C',
        },
        accent: {
          DEFAULT: '#C6A96C',
          light: '#DFCA94',
          dark: '#A38848',
          subtle: 'rgba(198, 169, 108, 0.12)',
        },
        primary: {
          DEFAULT: '#FFFFFF',
        },
        secondary: {
          DEFAULT: '#A1A1A1',
          light: '#CCCCCC',
          dark: '#737373',
        },
        border: {
          DEFAULT: '#262626',
          subtle: '#1C1C1C',
          highlight: 'rgba(198, 169, 108, 0.3)',
        }
      },
      fontFamily: {
        headline: ['"Space Grotesk"', '"Sora"', 'sans-serif'],
        sora: ['"Sora"', 'sans-serif'],
        body: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      letterSpacing: {
        'tightest': '-0.04em',
        'wider-tag': '0.18em',
      },
      boxShadow: {
        'accent-glow': '0 0 40px -10px rgba(198, 169, 108, 0.25)',
        'card-subtle': '0 4px 30px rgba(0, 0, 0, 0.6)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
