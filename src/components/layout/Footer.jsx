import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const footerLinks = [
  { label: 'About', href: '/about' },
  { label: 'Research', href: '/research' },
  { label: 'Publications', href: '/publications' },
  { label: 'Teaching', href: '/teaching' },
  { label: 'Contact', href: '/contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #0B1628 0%, #071020 100%)',
        color: '#fff',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Gold top accent line */}
      <Box
        sx={{
          height: 3,
          background: 'linear-gradient(to right, transparent, #C9A94B 30%, #D4BE78 50%, #C9A94B 70%, transparent)',
        }}
      />

      {/* Subtle radial glow */}
      <Box
        aria-hidden
        sx={{
          position: 'absolute',
          top: -120,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 600,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(27,79,114,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Main content */}
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>

        {/* ── Upper section ── */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1.6fr 1fr' },
            gap: { xs: 4, md: 8 },
            pt: { xs: 5, md: 7 },
            pb: { xs: 4, md: 5 },
          }}
        >
          {/* Brand */}
          <Box>
            <Typography
              sx={{
                fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
                fontWeight: 700,
                fontSize: { xs: '1.4rem', md: '1.75rem' },
                color: '#fff',
                lineHeight: 1.2,
                mb: 0.75,
              }}
            >
              Dr. Esma Ramzan
            </Typography>
            <Typography
              sx={{
                color: '#C9A94B',
                fontSize: { xs: '0.7rem', md: '0.78rem' },
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                mb: 2,
              }}
            >
              Scholar &amp; Educator &amp; Author
            </Typography>
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.75,
                fontSize: { xs: '0.85rem', md: '0.9rem' },
                maxWidth: 400,
              }}
            >
              Advancing scholarship through rigorous research and inspired teaching.
              Bridging classical tradition with contemporary academic discourse.
            </Typography>
          </Box>

          {/* Contact */}
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography
              sx={{
                color: '#C9A94B',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                mb: 0.5,
              }}
            >
              Contact
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  bgcolor: 'rgba(201,169,75,0.12)',
                  border: '1px solid rgba(201,169,75,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9A94B" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <polyline points="2,4 12,13 22,4" />
                </svg>
              </Box>
              <a
                href="mailto:contact@msesma.com"
                style={{
                  color: 'rgba(255,255,255,0.75)',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  transition: 'color 0.15s',
                }}
              >
                contact@msesma.com
              </a>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  bgcolor: 'rgba(201,169,75,0.12)',
                  border: '1px solid rgba(201,169,75,0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#C9A94B" strokeWidth="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </Box>
              <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.875rem' }}>
                United Kingdom
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ── Quick links row ── */}
        <Box
          sx={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            py: { xs: 2.5, md: 3 },
            display: 'flex',
            alignItems: 'center',
            gap: { xs: 0, md: 0 },
            flexWrap: 'nowrap',
            justifyContent: { xs: 'space-between', md: 'flex-start' },
          }}
        >
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: { xs: '0.65rem', md: '0.72rem' },
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              flexShrink: 0,
              mr: { xs: 0, md: 3 },
              display: { xs: 'none', sm: 'block' },
            }}
          >
            Pages
          </Typography>

          <Box
            component="nav"
            sx={{
              display: 'flex',
              flexWrap: 'nowrap',
              gap: { xs: 2.5, sm: 3, md: 4 },
              alignItems: 'center',
              overflowX: 'auto',
              '&::-webkit-scrollbar': { display: 'none' },
            }}
          >
            {footerLinks.map((link, i) => (
              <Box key={link.href} sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2.5, sm: 3, md: 4 } }}>
                <Link
                  href={link.href}
                  style={{ textDecoration: 'none' }}
                >
                  <Typography
                    sx={{
                      color: 'rgba(255,255,255,0.6)',
                      fontSize: { xs: '0.8rem', sm: '0.875rem', md: '0.9rem' },
                      fontWeight: 500,
                      whiteSpace: 'nowrap',
                      transition: 'color 0.15s',
                      '&:hover': { color: '#fff' },
                    }}
                  >
                    {link.label}
                  </Typography>
                </Link>
                {i < footerLinks.length - 1 && (
                  <Box
                    aria-hidden
                    sx={{
                      width: 3,
                      height: 3,
                      borderRadius: '50%',
                      bgcolor: 'rgba(201,169,75,0.4)',
                      flexShrink: 0,
                    }}
                  />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* ── Copyright bar ── */}
        <Box
          sx={{
            py: { xs: 2.5, md: 3 },
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'flex-start', sm: 'center' },
            gap: 1,
          }}
        >
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.3)',
              fontSize: { xs: '0.75rem', md: '0.8rem' },
            }}
          >
            &copy; {currentYear} Dr. Esma Ramzan. All rights reserved.
          </Typography>
          <Typography
            sx={{
              color: 'rgba(255,255,255,0.2)',
              fontSize: { xs: '0.7rem', md: '0.75rem' },
              letterSpacing: '0.06em',
            }}
          >
            Scholar &middot; Educator &middot; Author
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}
