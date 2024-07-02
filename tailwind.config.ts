import type { Config } from "tailwindcss";
import { Poppins } from 'next/font/google';

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'txt-primary': '#E1E3E6',
      'txt-secondary': '#B0B1B6',
      'txt-tertiary': '#76787A',
      'background-secondary': '#232324',
      'accent': '#0047BB',
      'accent-deep': '#003182',
      'border-primary': '#363738',
      'red-dim': '#D77556',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    screens: {
      // => @media (min-width: 480px) { ... }
      xs: '480px',

      // => @media (min-width: 720px) { ... }
      sm: '720px',

      // => @media (min-width: 960px) { ... }
      md: '960px',

      // => @media (min-width: 1200px) { ... }
      lg: '1200px',

      // => @media (min-width: 1440px) { ... }
      xl: '1440px',

      // => @media (min-width: 1680px) { ... }
      '2xl': '1680px',

      // => @media (min-width: 1920px) { ... }
      '3xl': '1920px',
    },
  }
};
