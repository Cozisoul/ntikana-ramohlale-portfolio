// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Libre_Caslon_Display } from 'next/font/google';
import './globals.css';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import Header from './components/Header';
import Footer from './components/Footer';
import SmoothScroller from './components/SmoothScroller';
import PageTransition from './components/PageTransition';
import { CursorProvider } from './context/CursorContext';
import CustomCursor from './components/CustomCursor';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const libre_caslon = Libre_Caslon_Display({
  subsets: ['latin'],
  variable: '--font-caslon',
  weight: '400',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Ntikana Ramohlale — Documentary Portfolio',
  description: 'Editorial, humanist documentary photography by Ntikana Ramohlale.',
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Ntikana Ramohlale — Documentary Portfolio',
    description: 'Selected works by visual storyteller Ntikana Ramohlale.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${libre_caslon.variable}`}>
      <body> {/* <-- The body tag is now a direct child of html */}
        <CursorProvider> {/* <-- The provider is INSIDE the body tag */}
          <CustomCursor />
          <SmoothScroller />
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer />
        </CursorProvider>
      </body>
    </html>
  );
}