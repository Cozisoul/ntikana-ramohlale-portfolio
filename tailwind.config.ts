import type { Config } from 'tailwindcss';

const config: Config = {
  // This tells Tailwind where to scan for class names to generate the necessary CSS.
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // 1. Custom Font Families
      // This section hooks up the CSS variables from next/font in layout.tsx
      // so you can use classes like 'font-sans' and 'font-serif'.
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-caslon)'],
      },

      // 2. Custom Animations and Keyframes
      // This section defines the infinite scroll animation for the client logo marquee.
      animation: {
        marquee: 'marquee 40s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' }, // Moves to the start of the duplicated content
        },
      },
    },
  },
  // This is where you would add official Tailwind plugins if needed in the future.
  plugins: [],
};

export default config;