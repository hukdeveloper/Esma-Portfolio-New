import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import ContactForm from '@/components/ContactForm';
import { profile } from '@/lib/data/profile';

export const metadata = {
  title: 'Contact',
  description:
    'Get in touch with Dr. Esma Ramzan — for research inquiries, speaking invitations, media requests, or academic collaboration.',
};

const contactReasons = [
  { icon: '🎓', title: 'Research Inquiries', body: 'Questions about ongoing research projects or collaborative opportunities.' },
  { icon: '🎤', title: 'Speaking Invitations', body: 'Invitations to lecture, deliver keynotes, or participate in panels and conferences.' },
  { icon: '📰', title: 'Media & Press', body: 'Requests for expert commentary, interviews, or contributions to media publications.' },
  { icon: '🤝', title: 'Academic Collaboration', body: 'Proposals for joint research, co-authorship, or institutional partnerships.' },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <Box
        sx={{
          background: 'linear-gradient(160deg, #F0F6FB 0%, #FAFCFE 100%)',
          borderBottom: '1px solid',
          borderColor: 'divider',
          py: { xs: 6, md: 9 },
        }}
      >
        <Container maxWidth="lg">
          <Typography
            component="span"
            sx={{
              display: 'block',
              color: 'secondary.dark',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              mb: 1.5,
            }}
          >
            Reach Out
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, mb: 2 }}>
            Contact
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600 }}>
            Dr. Ramzan welcomes messages from fellow scholars, students, journalists, and anyone with a genuine
            interest in Islamic scholarship.
          </Typography>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1.4fr' },
              gap: { xs: 6, md: 8 },
            }}
          >
            {/* Left column — info */}
            <Box>
              <Typography variant="h3" sx={{ mb: 1.5, fontSize: { xs: '1.5rem', md: '1.75rem' } }}>
                Get in Touch
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                Please use the form or reach out directly via email. Dr. Ramzan typically responds within five
                working days.
              </Typography>

              {/* Direct contact */}
              <Paper
                elevation={0}
                sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 3, mb: 4 }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: 'rgba(27,79,114,0.08)',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        flexShrink: 0,
                      }}
                    >
                      ✉️
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.25 }}>
                        Email
                      </Typography>
                      <Typography
                        component="a"
                        href={`mailto:${profile.email}`}
                        sx={{
                          color: 'primary.main',
                          fontWeight: 500,
                          fontSize: '0.95rem',
                          '&:hover': { textDecoration: 'underline' },
                        }}
                      >
                        {profile.email}
                      </Typography>
                    </Box>
                  </Box>

                  <Divider />

                  <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        bgcolor: 'rgba(27,79,114,0.08)',
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '1.1rem',
                        flexShrink: 0,
                      }}
                    >
                      📍
                    </Box>
                    <Box>
                      <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.25 }}>
                        Location
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.primary', fontWeight: 500 }}>
                        {profile.location}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {profile.institution}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>

              {/* Reasons to contact */}
              <Typography variant="overline" sx={{ color: 'secondary.dark', display: 'block', mb: 2 }}>
                Common Reasons to Write
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                {contactReasons.map((reason) => (
                  <Box
                    key={reason.title}
                    sx={{
                      display: 'flex',
                      gap: 2,
                      p: 2,
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: 2.5,
                      bgcolor: '#FAFCFE',
                    }}
                  >
                    <Box sx={{ fontSize: '1.4rem', flexShrink: 0, mt: 0.25 }}>{reason.icon}</Box>
                    <Box>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 0.25 }}>
                        {reason.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                        {reason.body}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right column — form */}
            <Box>
              <ContactForm />
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
