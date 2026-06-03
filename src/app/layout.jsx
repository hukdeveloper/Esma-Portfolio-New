import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import ThemeRegistry from '@/components/ThemeRegistry';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Box from '@mui/material/Box';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: {
    default: 'Dr. Esma Ramzan — Scholar, Educator & Author',
    template: '%s | Dr. Esma Ramzan',
  },
  description:
    'Dr. Esma Ramzan is a distinguished scholar and educator specialising in Islamic Studies, educational philosophy, and comparative religion. Explore her research, publications, and teaching.',
  keywords: [
    'Esma Ramzan',
    'Islamic Studies',
    'Islamic scholar',
    'Islamic education',
    'Muslim educator',
    'religious studies',
    'tafsir',
    'Islamic philosophy',
    'academic',
    'publications',
  ],
  authors: [{ name: 'Dr. Esma Ramzan' }],
  creator: 'Dr. Esma Ramzan',
  metadataBase: new URL('https://msesma.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://msesma.vercel.app',
    siteName: 'Dr. Esma Ramzan',
    title: 'Dr. Esma Ramzan — Scholar, Educator & Author',
    description:
      'Distinguished scholar and educator specialising in Islamic Studies, educational philosophy, and comparative religion.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Esma Ramzan — Scholar, Educator & Author',
    description:
      'Distinguished scholar and educator specialising in Islamic Studies, educational philosophy, and comparative religion.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <ThemeRegistry>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            {/* paddingTop offsets the fixed navbar so inner pages start below it.
                The home page hero cancels this with an equal negative marginTop. */}
            <Box component="main" sx={{ flexGrow: 1, pt: { xs: '64px', md: '72px' } }}>
              {children}
            </Box>
            <Footer />
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
