import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import LinkButton from '@/components/ui/LinkButton';
import { profile } from '@/lib/data/profile';

export const metadata = {
  title: 'About',
  description:
    'Learn about Esma Ramzan — her academic background, research interests, professional journey, and commitment to language education.',
};

/* ── Email icon ── */
function EmailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink: 0 }}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <polyline points="2,4 12,13 22,4" />
    </svg>
  );
}

/* ── Location icon ── */
function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink: 0 }}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

/* ── Building icon ── */
function BuildingIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" style={{ flexShrink: 0 }}>
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M3 9h18M9 21V9" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ── Page header ── */}
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
            Biography
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.1rem', md: '3rem' }, mb: 2 }}>
            About Esma Ramzan
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, fontSize: { xs: '1rem', md: '1.25rem' } }}>
            {profile.title} — dedicated to advancing scholarship through rigorous academic inquiry and inspired teaching.
          </Typography>
        </Container>
      </Box>

      {/* ── Main layout ── */}
      <Box sx={{ py: { xs: 5, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 340px' },
              gap: { xs: 5, md: 8 },
              alignItems: 'start',
            }}
          >
            {/* ── Main content ── */}
            <Box>
              <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.5rem', md: '2rem' } }}>
                Biography
              </Typography>
              {profile.bioLong.map((paragraph, i) => (
                <Typography key={i} variant="body1" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.8 }}>
                  {paragraph}
                </Typography>
              ))}

              <Divider sx={{ my: 5 }} />

              {/* Research interests */}
              <Typography variant="h4" sx={{ mb: 2.5, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Research Interests
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.25, mb: 5 }}>
                {profile.researchInterests.map((interest) => (
                  <Chip
                    key={interest}
                    label={interest}
                    sx={{
                      bgcolor: 'rgba(27,79,114,0.07)',
                      color: 'primary.dark',
                      fontWeight: 500,
                      fontSize: '0.85rem',
                    }}
                  />
                ))}
              </Box>

              <Divider sx={{ my: 5 }} />

              {/* Education */}
              <Typography variant="h4" sx={{ mb: 3, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Education
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {profile.education.map((edu, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      gap: 3,
                      pb: i < profile.education.length - 1 ? 4 : 0,
                      position: 'relative',
                      '&::before': i < profile.education.length - 1
                        ? {
                            content: '""',
                            position: 'absolute',
                            left: 19,
                            top: 42,
                            bottom: 0,
                            width: 2,
                            bgcolor: '#DDE6EE',
                          }
                        : {},
                    }}
                  >
                    {/* Timeline dot */}
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: i === 0 ? 'primary.main' : '#EFF4F9',
                        border: '2px solid',
                        borderColor: i === 0 ? 'primary.main' : '#DDE6EE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: i === 0 ? '#fff' : 'text.secondary',
                          fontSize: '0.65rem',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {edu.year.slice(2)}
                      </Typography>
                    </Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.25, lineHeight: 1.3 }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', mb: edu.thesis ? 0.75 : 0 }}>
                        {edu.institution} &mdash; {edu.year}
                      </Typography>
                      {edu.thesis && (
                        <Typography
                          variant="body2"
                          sx={{ color: 'text.secondary', fontStyle: 'italic', fontSize: '0.83rem', lineHeight: 1.5 }}
                        >
                          &ldquo;{edu.thesis}&rdquo;
                        </Typography>
                      )}
                    </Box>
                  </Box>
                ))}
              </Box>

              <Divider sx={{ my: 5 }} />

              {/* Career Timeline */}
              <Typography variant="h4" sx={{ mb: 3, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Professional Journey
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {profile.careerTimeline.map((item, i) => (
                  <Box
                    key={i}
                    sx={{
                      display: 'flex',
                      gap: 3,
                      pb: i < profile.careerTimeline.length - 1 ? 4 : 0,
                      position: 'relative',
                      '&::before': i < profile.careerTimeline.length - 1
                        ? {
                            content: '""',
                            position: 'absolute',
                            left: 19,
                            top: 42,
                            bottom: 0,
                            width: 2,
                            bgcolor: '#DDE6EE',
                          }
                        : {},
                    }}
                  >
                    {/* Timeline dot */}
                    <Box
                      sx={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        bgcolor: i === 0 ? 'secondary.main' : '#EFF4F9',
                        border: '2px solid',
                        borderColor: i === 0 ? 'secondary.main' : '#DDE6EE',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    >
                      <Typography
                        sx={{
                          color: i === 0 ? '#fff' : 'text.secondary',
                          fontSize: '0.62rem',
                          fontWeight: 700,
                          letterSpacing: '-0.02em',
                        }}
                      >
                        {item.years.split('–')[0].slice(2)}
                      </Typography>
                    </Box>
                    <Box sx={{ pt: 0.5 }}>
                      <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'text.primary', mb: 0.25, lineHeight: 1.3 }}>
                        {item.role}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {item.institution} &mdash; {item.years}
                      </Typography>
                    </Box>
                  </Box>
                ))}
              </Box>

              <Divider sx={{ my: 5 }} />

              {/* Missions */}
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3.5 }}>
                <Box sx={{ p: 3, bgcolor: '#FAFCFE', border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                    🏫 Academic Mission
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {profile.academicMission}
                  </Typography>
                </Box>
                <Box sx={{ p: 3, bgcolor: '#FAFCFE', border: '1px solid', borderColor: 'divider', borderRadius: 3 }}>
                  <Typography variant="h6" sx={{ color: 'primary.main', fontWeight: 700, mb: 1.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                    🔍 Research Mission
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
                    {profile.researchMission}
                  </Typography>
                </Box>
              </Box>

              <Divider sx={{ my: 5 }} />

              {/* Academic Leadership & Service */}
              <Typography variant="h4" sx={{ mb: 2.5, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Academic Leadership &amp; Service
              </Typography>
              <Box sx={{ p: 3.5, border: '1px solid', borderColor: 'divider', borderRadius: 3, bgcolor: '#fff', mb: 3 }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap', gap: 1 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                    Founder, KIU Literary Society
                  </Typography>
                  <Chip label="2022–Present" size="small" sx={{ bgcolor: 'rgba(201,169,75,0.12)', color: 'secondary.dark', fontWeight: 600, fontSize: '0.72rem' }} />
                </Box>
                <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.65 }}>
                  Established the Karakoram International University Literary Society in June 2022 to promote literary engagement, academic dialogue, and cultural exchange among students and the wider community.
                </Typography>
                
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Key Achievements
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.25, mb: 3 }}>
                  {[
                    'Organized 20+ literary and academic events',
                    'Invited poets, authors, researchers, motivational speakers, and community leaders',
                    'Promoted literary culture and intellectual engagement among students'
                  ].map((ach, idx) => (
                    <Box key={idx} sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
                      <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main', mt: '8px', flexShrink: 0 }} />
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                        {ach}
                      </Typography>
                    </Box>
                  ))}
                </Box>

                <Divider sx={{ my: 2 }} />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 1.5, textTransform: 'uppercase', letterSpacing: '0.05em', mt: 2 }}>
                  Additional Leadership Roles
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {[
                    'Conference Organization',
                    'Session Moderation',
                    'Student Competition Coordination',
                    'Teacher Development Programs',
                    'Academic Seminars',
                    'Public Talks',
                    'Community Outreach Activities'
                  ].map((role) => (
                    <Chip key={role} label={role} size="small" variant="outlined" sx={{ fontSize: '0.72rem', borderColor: 'divider', color: 'text.secondary' }} />
                  ))}
                </Box>
              </Box>

              <Divider sx={{ my: 5 }} />

              {/* Community Impact */}
              <Typography variant="h4" sx={{ mb: 3, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Community Impact &amp; Philanthropy
              </Typography>
              <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 3.5 }}>
                {/* DEFA */}
                <Box sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      DEFA
                    </Typography>
                    <Chip label="Director Operations" size="small" sx={{ bgcolor: 'rgba(27,79,114,0.08)', color: 'primary.dark', fontWeight: 600, fontSize: '0.7rem' }} />
                  </Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}>
                    Dream to Education For All
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.6, flexGrow: 1 }}>
                    Providing quality educational opportunities to underprivileged communities through educational outreach, school partnerships, and youth development initiatives.
                  </Typography>
                  
                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1.5, textAlign: 'center', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'secondary.dark', fontWeight: 700, fontSize: '1rem' }}>20+</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem', display: 'block' }}>Schools</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'secondary.dark', fontWeight: 700, fontSize: '1rem' }}>200+</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem', display: 'block' }}>Interns</Typography>
                    </Box>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'secondary.dark', fontWeight: 700, fontSize: '1rem' }}>500+</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem', display: 'block' }}>Students</Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Little Warriors */}
                <Box sx={{ p: 3, border: '1px solid', borderColor: 'divider', borderRadius: 3, display: 'flex', flexDirection: 'column', height: '100%' }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1.5, flexWrap: 'wrap', gap: 1 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'primary.main' }}>
                      Little Warriors
                    </Typography>
                    <Chip label="CEO" size="small" sx={{ bgcolor: 'rgba(27,79,114,0.08)', color: 'primary.dark', fontWeight: 600, fontSize: '0.7rem' }} />
                  </Box>
                  <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1.5 }}>
                    Never Give Up
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5, lineHeight: 1.6, flexGrow: 1 }}>
                    Supporting children fighting cancer through awareness campaigns, fundraising initiatives, and emotional support programs for patients and their families.
                  </Typography>

                  <Divider sx={{ my: 2 }} />
                  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 1.5, textAlign: 'center', mb: 2 }}>
                    <Box>
                      <Typography variant="h6" sx={{ color: 'secondary.dark', fontWeight: 700, fontSize: '1rem' }}>200+</Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.65rem', display: 'block' }}>Children Supported</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ my: 5 }} />

              {/* Author */}
              <Typography variant="h4" sx={{ mb: 3, fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
                Published Author
              </Typography>
              <Paper elevation={0} sx={{ p: 3.5, border: '1px solid', borderColor: 'divider', borderRadius: 3, bgcolor: 'rgba(201,169,75,0.03)', mb: 2 }}>
                <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1.2fr 1fr' }, gap: 3.5, alignItems: 'center' }}>
                  <Box>
                    <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                      Khwab Sy Haqeeqat Tak (2023)
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2, lineHeight: 1.6 }}>
                      A beautiful and inspiring Hajj travelogue documenting the spiritual and physical journey of the pilgrimage. Published by Darban Publications in 2023, the book offers a modern perspective on a timeless spiritual milestone.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                      <Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Publisher</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>Darban Publications</Typography>
                      </Box>
                      <Box>
                        <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Publication Year</Typography>
                        <Typography variant="body2" sx={{ fontWeight: 600 }}>2023</Typography>
                      </Box>
                    </Box>
                  </Box>
                  <Box sx={{ p: 2, bgcolor: '#fff', border: '1px dashed', borderColor: 'divider', borderRadius: 2, textAlign: 'center' }}>
                    <Typography variant="body2" sx={{ fontWeight: 600, color: 'secondary.dark', mb: 0.5 }}>📖 Hajj Travelogue</Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block' }}>Copies &amp; reader photos are available in the gallery.</Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>

            {/* ── Sidebar ── */}
            {/*
              order: -1 on xs puts the sidebar ABOVE the bio on mobile.
              On md it sits naturally on the right.
            */}
            <Box
              sx={{
                order: { xs: -1, md: 0 },
                display: 'flex',
                flexDirection: 'column',
                gap: 0,
                borderRadius: 4,
                overflow: 'hidden',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 4px 24px rgba(27,79,114,0.07)',
              }}
            >
              {/* ── Photo block ── */}
              <Box
                sx={{
                  position: 'relative',
                  /* On mobile: landscape ratio to keep it compact */
                  aspectRatio: { xs: '16/9', sm: '4/3', md: '4/5' },
                  width: '100%',
                  bgcolor: '#EFF4F9',
                }}
              >
                <Image
                  src="/assets/esma1.jpg"
                  alt="Esma Ramzan"
                  fill
                  sizes="(max-width: 900px) 100vw, 340px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
                {/* Gradient name-plate overlay */}
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(12,24,52,0.88) 0%, rgba(12,24,52,0.0) 55%)',
                  }}
                />
                <Box sx={{ position: 'absolute', bottom: 0, left: 0, right: 0, p: { xs: 2, md: 3 } }}>
                  <Typography
                    sx={{
                      color: '#C9A94B',
                      fontFamily: 'var(--font-playfair), serif',
                      fontWeight: 700,
                      fontSize: { xs: '1rem', md: '1.1rem' },
                      lineHeight: 1.2,
                    }}
                  >
                    Esma Ramzan
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.78rem', mt: 0.25 }}>
                    {profile.title}
                  </Typography>
                </Box>
              </Box>

              {/* ── Stats row ── */}
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(4, 1fr)',
                  bgcolor: '#F8FAFB',
                  borderBottom: '1px solid',
                  borderColor: 'divider',
                }}
              >
                {profile.stats.map((stat, i) => (
                  <Box
                    key={stat.label}
                    sx={{
                      py: { xs: 1.75, md: 2.25 },
                      px: 1,
                      textAlign: 'center',
                      borderRight: i < profile.stats.length - 1 ? '1px solid' : 'none',
                      borderColor: 'divider',
                    }}
                  >
                    <Typography
                      sx={{
                        color: 'primary.main',
                        fontFamily: 'var(--font-playfair), serif',
                        fontWeight: 700,
                        fontSize: { xs: '1.15rem', md: '1.35rem' },
                        lineHeight: 1,
                        mb: 0.4,
                      }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography
                      sx={{
                        color: 'text.secondary',
                        fontSize: { xs: '0.6rem', md: '0.68rem' },
                        lineHeight: 1.25,
                        fontWeight: 500,
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* ── Contact details ── */}
              <Box sx={{ p: { xs: 2.5, md: 3 }, display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, color: 'text.secondary' }}>
                  <Box sx={{ color: 'primary.main', display: 'flex' }}>
                    <EmailIcon />
                  </Box>
                  <Typography
                    component="a"
                    href={`mailto:${profile.email}`}
                    sx={{
                      color: 'primary.main',
                      fontWeight: 500,
                      fontSize: '0.875rem',
                      '&:hover': { textDecoration: 'underline' },
                    }}
                  >
                    {profile.email}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ color: 'primary.main', display: 'flex' }}>
                    <BuildingIcon />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.4 }}>
                    {profile.institution}
                  </Typography>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box sx={{ color: 'primary.main', display: 'flex' }}>
                    <PinIcon />
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {profile.location}
                  </Typography>
                </Box>

                <Divider sx={{ my: 0.5 }} />

                <LinkButton
                  href="/contact"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ py: 1.25 }}
                >
                  Get in Touch
                </LinkButton>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
