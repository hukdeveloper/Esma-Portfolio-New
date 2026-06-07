import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { researchAreas, currentProjects, researchPhilosophy, researchConsultancy } from '@/lib/data/research';

export const metadata = {
  title: 'Research',
  description:
    "Explore Dr. Esma Ramzan's research interests and current projects spanning Islamic educational philosophy, tafsir methodology, Islamic jurisprudence, women in Islamic scholarship, and interfaith studies.",
};

export default function ResearchPage() {
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
            Scholarship
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, mb: 2 }}>
            Research
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 640 }}>
            Esma Ramzan&apos;s scholarship focuses on language documentation, multilingualism, and innovative language education, united by a commitment to preserving linguistic diversity and supporting teacher development.
          </Typography>
        </Container>
      </Box>

      {/* Research Philosophy */}
      <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: '#FAFCFE', borderBottom: '1px solid', borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Typography
            variant="overline"
            sx={{ color: 'secondary.dark', display: 'block', mb: 1 }}
          >
            Research Philosophy
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'text.primary',
              fontStyle: 'italic',
              fontSize: { xs: '1.1rem', md: '1.25rem' },
              lineHeight: 1.65,
              maxWidth: 800,
              fontFamily: 'var(--font-playfair), serif',
            }}
          >
            &ldquo;{researchPhilosophy.text}&rdquo;
          </Typography>
        </Container>
      </Box>

      {/* Research areas */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: '1.85rem', md: '2.25rem' } }}>
            Areas of Research
          </Typography>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {researchAreas.map((area, idx) => (
              <Box key={area.id}>
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: { xs: '1fr', md: idx % 2 === 0 ? '1fr 1fr' : '1fr 1fr' },
                    gap: { xs: 3, md: 6 },
                    p: { xs: 3, md: 5 },
                    border: '1px solid',
                    borderColor: 'divider',
                    borderRadius: 4,
                    bgcolor: idx % 2 === 0 ? '#fff' : '#FAFCFE',
                    alignItems: 'center',
                  }}
                >
                  <Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box
                        sx={{
                          width: 52,
                          height: 52,
                          borderRadius: 3,
                          bgcolor: `${area.color}14`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '1.5rem',
                          flexShrink: 0,
                        }}
                      >
                        {area.icon}
                      </Box>
                      <Typography variant="h4" sx={{ fontSize: { xs: '1.2rem', md: '1.4rem' } }}>
                        {area.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2.5 }}>
                      {area.description}
                    </Typography>
                  </Box>

                  <Box>
                    <Typography
                      variant="overline"
                      sx={{ color: 'secondary.dark', display: 'block', mb: 1.5 }}
                    >
                      Research Highlights
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                      {area.highlights.map((h) => (
                        <Box
                          key={h}
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 1.5,
                            p: 1.25,
                            bgcolor: `${area.color}0A`,
                            borderRadius: 2,
                            borderLeft: '3px solid',
                            borderColor: area.color,
                          }}
                        >
                          <Typography variant="body2" sx={{ color: 'text.primary' }}>
                            {h}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Current projects */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#F8FAFB' }}>
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
            Active Work
          </Typography>
          <Typography variant="h2" sx={{ mb: 6, fontSize: { xs: '1.85rem', md: '2.25rem' } }}>
            Current Projects
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr' },
              gap: 3,
            }}
          >
            {currentProjects.map((project) => (
              <Paper
                key={project.id}
                elevation={0}
                sx={{
                  p: 3.5,
                  border: '1px solid',
                  borderColor: 'divider',
                  borderRadius: 3,
                  bgcolor: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                  transition: 'box-shadow 0.2s, transform 0.2s',
                  '&:hover': {
                    boxShadow: '0 8px 32px rgba(27,79,114,0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <Chip
                    label={project.status}
                    size="small"
                    sx={{
                      bgcolor: project.status === 'Ongoing' ? 'rgba(39,174,96,0.1)' : 'rgba(201,169,75,0.1)',
                      color: project.status === 'Ongoing' ? '#1a7a4a' : 'secondary.dark',
                      fontWeight: 600,
                      fontSize: '0.7rem',
                    }}
                  />
                  <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                    {project.timeline}
                  </Typography>
                </Box>

                <Typography variant="h6" sx={{ lineHeight: 1.4, fontSize: '1rem' }}>
                  {project.title}
                </Typography>

                <Typography variant="body2" sx={{ color: 'text.secondary', flexGrow: 1 }}>
                  {project.description}
                </Typography>

                <Divider />
                <Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 0.25 }}>
                    Funded by
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'primary.main', fontSize: '0.85rem' }}>
                    {project.fundedBy}
                  </Typography>
                </Box>
              </Paper>
            ))}
          </Box>
        </Container>
      </Box>

      {/* Research Consultancy */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1.2fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}>
            <Box>
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
                Services
              </Typography>
              <Typography variant="h2" sx={{ mb: 3, fontSize: { xs: '1.85rem', md: '2.25rem' } }}>
                Research Consultancy
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, lineHeight: 1.75 }}>
                Providing expert academic guidance, methodological design, and writing support for researchers, postgraduate students, and institutions in applied linguistics and education.
              </Typography>
              
              <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Areas of Expertise
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                {researchConsultancy.expertise.map((area) => (
                  <Chip key={area} label={area} size="small" variant="outlined" sx={{ fontSize: '0.75rem', py: 1.5, px: 1, borderColor: 'divider', color: 'text.primary', fontWeight: 500 }} />
                ))}
              </Box>
            </Box>

            <Box sx={{ p: 4, bgcolor: '#FAFCFE', border: '1px solid', borderColor: 'divider', borderRadius: 4, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 3 }}>
                Consultancy Impact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3.5, alignItems: 'center' }}>
                {researchConsultancy.stats.map((stat) => (
                  <Box key={stat.label}>
                    <Typography variant="h3" sx={{ color: 'secondary.dark', fontWeight: 800, mb: 0.5 }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
