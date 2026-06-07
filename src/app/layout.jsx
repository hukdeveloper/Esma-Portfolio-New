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
    default: 'Esma Ramzan — Applied Linguist & Teacher Trainer',
    template: '%s | Esma Ramzan',
  },
  description:
    'Esma Ramzan is an Applied Linguist, Lecturer in Linguistics, Research Consultant, and Teacher Trainer. Explore her research in language documentation, sociolinguistics, and multilingualism.',
  keywords: [
    'Esma Ramzan',
    'Applied Linguistics',
    'Linguistics Lecturer',
    'Teacher Trainer',
    'Language Documentation',
    'Multilingualism',
    'Sociolinguistics',
    'AI in Language Education',
    'Second Language Acquisition',
    'academic',
    'publications',
  ],
  authors: [{ name: 'Esma Ramzan' }],
  creator: 'Esma Ramzan',
  metadataBase: new URL('https://msesma.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://msesma.vercel.app',
    siteName: 'Esma Ramzan',
    title: 'Esma Ramzan — Applied Linguist & Teacher Trainer',
    description:
      'Applied Linguist, Lecturer in Linguistics, Research Consultant, and Teacher Trainer.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Esma Ramzan — Applied Linguist & Teacher Trainer',
    description:
      'Applied Linguist, Lecturer in Linguistics, Research Consultant, and Teacher Trainer.',
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
