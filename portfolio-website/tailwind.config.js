/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'display': ['Bitter', 'Georgia', 'serif'],
      },
      fontWeight: {
        'black': '900',
        'extrablack': '950',
      },
      fontSize: {
        // Pixel-aligned defaults (avoid rem-based fractional results)
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '30px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '44px' }],
        '5xl': ['48px', { lineHeight: '58px' }],
        '6xl': ['60px', { lineHeight: '72px' }],
        '7xl': ['72px', { lineHeight: '86px' }],
        '8xl': ['96px', { lineHeight: '112px' }],
        '9xl': ['128px', { lineHeight: '144px' }],

        // Pixel-aligned scale (avoids modular-scale fractional values)
        'ui-12': ['12px', { lineHeight: '16px' }],
        'ui-14': ['14px', { lineHeight: '20px' }],
        'ui-16': ['16px', { lineHeight: '24px' }],
        'ui-17': ['17px', { lineHeight: '24px' }],
        'ui-18': ['18px', { lineHeight: '28px' }],
        'ui-20': ['20px', { lineHeight: '30px' }],
        'ui-22': ['22px', { lineHeight: '42px' }],
        'ui-23': ['23px', { lineHeight: '30px' }],
        'ui-24': ['24px', { lineHeight: '32px' }],
        'ui-26': ['26px', { lineHeight: '32px' }],
        'ui-28': ['28px', { lineHeight: '34px' }],
        'ui-29': ['29px', { lineHeight: '43px' }],
        'ui-30': ['30px', { lineHeight: '36px' }],
        'ui-34': ['34px', { lineHeight: '40px' }],
        'ui-36': ['36px', { lineHeight: '44px' }],
        'ui-48': ['48px', { lineHeight: '58px' }],
        'ui-60': ['60px', { lineHeight: '72px' }],
        'ui-72': ['72px', { lineHeight: '86px' }],
      },

      letterSpacing: {
        // Use px tracking to keep spacing on whole pixels
        'normal-px': '0px',
        'tight-px': '-1px',
        'tighter-px': '-2px',
        'caps': '1px',
      },
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        accent: {
          50: '#fdf4ff',
          100: '#fae8ff',
          200: '#f5d0fe',
          300: '#f0abfc',
          400: '#e879f9',
          500: '#d946ef',
          600: '#c026d3',
          700: '#a21caf',
          800: '#86198f',
          900: '#701a75',
        },
        dark: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      boxShadow: {
        'glow': '0 0 20px rgba(59, 130, 246, 0.5)',
        'glow-lg': '0 0 40px rgba(59, 130, 246, 0.6)',
        'glow-accent': '0 0 20px rgba(217, 70, 239, 0.5)',
        'glow-accent-lg': '0 0 40px rgba(217, 70, 239, 0.6)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
