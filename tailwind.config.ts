import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'pabrika-navy': '#1E3A5F',
        'pabrika-orange': '#FF6B35',
        'pabrika-gold': '#D4AF37',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'var(--font-open-sans)', 'system-ui', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
