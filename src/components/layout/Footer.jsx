import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Link from 'next/link';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Contact', href: '/contact' },
];

const linkStyle = {
  color: 'rgba(255,255,255,0.7)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  display: 'block',
  lineHeight: 1.5,
  transition: 'color 0.15s',
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#1A2332',
        color: '#fff',
        pt: { xs: 6, md: 8 },
        pb: 4,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '2fr 1fr 1fr' },
            gap: { xs: 4, md: 6 },
            mb: 5,
          }}
        >
          {/* Brand column */}
          <Box>
            <Typography
              variant="h5"
              sx={{
                fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
                fontWeight: 700,
                mb: 1.5,
                color: '#fff',
              }}
            >
              Dr. Esma Ramzan
            </Typography>
            <Typography
              sx={{
                color: '#C9A94B',
                fontSize: '0.8rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                mb: 2,
              }}
            >
              Scholar &amp; Educator
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 320 }}>
              Advancing Islamic scholarship through rigorous research and inspired teaching. Bridging classical
              tradition with contemporary academic discourse.
            </Typography>
          </Box>

          {/* Quick links */}
          <Box>
            <Typography
              variant="overline"
              sx={{ color: '#C9A94B', letterSpacing: '0.1em', display: 'block', mb: 2 }}
            >
              Quick Links
            </Typography>
            <Box component="nav" sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} style={linkStyle}>
                  {link.label}
                </Link>
              ))}
            </Box>
          </Box>

          {/* Contact */}
          <Box>
            <Typography
              variant="overline"
              sx={{ color: '#C9A94B', letterSpacing: '0.1em', display: 'block', mb: 2 }}
            >
              Contact
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.45)', display: 'block', mb: 0.25 }}>
                  Email
                </Typography>
                <a
                  href="mailto:contact@msesma.com"
                  style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.875rem' }}
                >
                  contact@msesma.com
                </a>
              </Box>
              <Box>
                <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.45)', display: 'block', mb: 0.25 }}>
                  Location
                </Typography>
                <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
                  United Kingdom
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ borderColor: 'rgba(255,255,255,0.1)', mb: 3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1,
          }}
        >
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.4)' }}>
            &copy; {currentYear} Dr. Esma Ramzan. All rights reserved.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.3)' }}>
            Scholar &middot; Educator &middot; Author
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
