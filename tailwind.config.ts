import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0ea5e9',
        'primary-dark': '#0284c7',
        dark: '#0f172a',
        'dark-light': '#1e293b',
        'dark-lighter': '#334155',
      },
    },
  },
  plugins: [],
};

export default config;
