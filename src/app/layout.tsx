// src/app/layout.tsx
import type { Metadata } from 'next';
import { Inter, Lora } from 'next/font/google'; // Import from next/font
import './globals.css';
import 'yet-another-react-lightbox/styles.css';
import Header from './components/Header';
import Footer from './components/Footer';

// Configure the fonts
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter', // Use CSS variable
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora', // Use CSS variable
  display: 'swap',
});

// Update Metadata for better SEO
export const metadata: Metadata = {
  title: 'Ntikana Ramohlale — Documentary Portfolio',
  description: 'Editorial, humanist documentary photography by Ntikana Ramohlale.',
  // Important for social sharing links: replace with your actual domain
  metadataBase: new URL('https://your-domain.com'),
  openGraph: {
    title: 'Ntikana Ramohlale — Documentary Portfolio',
    description: 'Selected works by visual storyteller Ntikana Ramohlale.',
    // Add a default sharing image at public/og-image.jpg (1200x630px)
    // images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}