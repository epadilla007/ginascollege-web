import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gina's College brand palette
        navy: {
          DEFAULT: '#01426A',
          dark: '#012d4a',
          light: '#0a5a8a',
        },
        'soft-blue': '#B1C6D9',
        'blue-gray': '#D4DDE5',
        'light-gray': '#E9E9E9',
      },
      fontFamily: {
        sans: ['Ranade', 'system-ui', 'sans-serif'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // Custom scale matching creative-direction.md
        'hero': 'clamp(72px, 10vw, 140px)',
        'section': 'clamp(40px, 5vw, 72px)',
        'card': 'clamp(24px, 3vw, 36px)',
      },
      letterSpacing: {
        label: '0.08em',
      },
      borderRadius: {
        btn: '4px',
        card: '8px',
      },
      maxWidth: {
        site: '1440px',
      },
      spacing: {
        section: '120px',
        'section-mobile': '72px',
      },
      animation: {
        'fade-up': 'fadeUp 0.4s cubic-bezier(0.22, 1, 0.36, 1) forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(40px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
