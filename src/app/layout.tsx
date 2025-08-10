// src/app/layout.tsx
import type { Metadata } from 'next';
// Import Libre Caslon Display instead of Lora
import { Inter, Libre_Caslon_Display } from 'next/font/google';
import './globals.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import Header from './components/Header';
import Footer from './components/Footer';
import SmoothScroller from './components/SmoothScroller';
// We will create this component in the next step
import PageTransition from './components/PageTransition';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

// Configure the new headline font
const libre_caslon = Libre_Caslon_Display({
  subsets: ['latin'],
  variable: '--font-caslon',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  // ... (metadata remains the same)
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Add the new font variable to the html tag
    <html lang="en" className={`${inter.variable} ${libre_caslon.variable}`}>
      <body>
        <SmoothScroller />
        <Header />
        {/* We will wrap the children in the PageTransition component */}
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}