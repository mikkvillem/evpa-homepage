import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather-bold': 'var(--font-merriweather-bold)',
        montserrat: 'var(--font-montserrat)',
      },
      colors: {
        pallette: {
          red: '#F28482',
          green: '#6A9187',
          pink: '#F5CAC3',
          beige: '#F7EDE2',
          yellow: '#F6BD60',
        },
      },
    },
  },
  plugins: [],
};
export default config;
