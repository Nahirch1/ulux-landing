import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        ink: '#090909',
        carbon: '#111111',
        panel: '#171717',
        gold: '#D3A13B',
        'gold-soft': '#E8C06B'
      },
      boxShadow: {
        gold: '0 0 38px rgba(211, 161, 59, 0.18)'
      }
    }
  },
  plugins: []
};

export default config;
