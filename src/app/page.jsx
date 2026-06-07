import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Image from 'next/image';
import Link from 'next/link';
import LinkButton from '@/components/ui/LinkButton';
import ExpandableBio from '@/components/home/ExpandableBio';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { homePreviewImages } from '@/lib/data/gallery';
import { profile } from '@/lib/data/profile';
import { recentPublications } from '@/lib/data/publications';
import { researchAreas } from '@/lib/data/research';
import { courses } from '@/lib/data/teaching';

export const metadata = {
  title: 'Esma Ramzan — Applied Linguist & Teacher Trainer',
  description:
    'Welcome to the academic portfolio of Esma Ramzan — Applied Linguist, Lecturer in Linguistics, Research Consultant, and Teacher Trainer.',
};

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ marginLeft: 4 }}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function HomePage() {
  const featuredResearch = researchAreas.slice(0, 3);
  const currentCourses = courses.filter((c) => c.currentlyTeaching).slice(0, 3);

  return (
    <>
      {/* ── Hero ── */}
      {/*
        mt cancels the layout paddingTop so the hero starts at the very top
        of the viewport, behind the transparent fixed navbar.
      */}
      <Box
        component="section"
        sx={{
          position: 'relative',
          minHeight: '100vh',
          mt: { xs: '-64px', md: '-72px' },
          display: 'flex',
          alignItems: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Background image */}
        <Image
          src="/assets/esma2.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center top' }}
        />

        {/* Dark gradient overlay — heavier on left for text legibility */}
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            background: {
              xs: 'linear-gradient(to bottom, rgba(8,18,40,0.80) 0%, rgba(8,18,40,0.75) 100%)',
              md: 'linear-gradient(to right, rgba(8,18,40,0.88) 0%, rgba(8,18,40,0.75) 55%, rgba(8,18,40,0.40) 100%)',
            },
          }}
        />

        {/* Content */}
        <Container
          maxWidth="lg"
          sx={{
            position: 'relative',
            zIndex: 1,
            pt: { xs: '100px', md: '120px' },
            pb: { xs: 8, md: 10 },
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr auto' },
              gap: { xs: 6, md: 8 },
              alignItems: 'center',
            }}
          >
            {/* Left — text */}
            <Box>
              <Typography
                component="span"
                sx={{
                  display: 'inline-block',
                  color: '#C9A94B',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  mb: 2.5,
                  px: 1.5,
                  py: 0.5,
                  bgcolor: 'rgba(201,169,75,0.15)',
                  borderRadius: 1,
                  border: '1px solid rgba(201,169,75,0.35)',
                }}
              >
                Applied Linguist &bull; Educator &bull; Researcher &bull; Teacher Trainer
              </Typography>

              <Typography
                variant="h1"
                sx={{
                  fontSize: { xs: '2.6rem', sm: '3.4rem', md: '4.2rem' },
                  mb: 2.5,
                  color: '#fff',
                  lineHeight: 1.15,
                  '& em': { color: '#C9A94B', fontStyle: 'normal' },
                }}
              >
                <em>Esma Ramzan</em>
              </Typography>

              <Typography
                variant="h5"
                component="p"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 400,
                  mb: 4.5,
                  lineHeight: 1.65,
                  maxWidth: 560,
                  fontFamily: 'var(--font-inter), sans-serif',
                  fontSize: { xs: '1.05rem', md: '1.2rem' },
                }}
              >
                {profile.tagline}
              </Typography>

              <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: { xs: 1.5, sm: 2 }, mb: 6 }}>
                <LinkButton
                  href="/research"
                  variant="contained"
                  size="large"
                  sx={{
                    bgcolor: '#C9A94B',
                    color: '#1A2332',
                    fontWeight: 700,
                    '&:hover': { bgcolor: '#D4BE78' },
                    px: { xs: 2, sm: 3.5 },
                    py: { xs: 1, sm: 1.25 },
                    fontSize: { xs: '0.8rem', sm: '0.9375rem' },
                    whiteSpace: 'nowrap',
                  }}
                >
                  Explore Research
                </LinkButton>
                <LinkButton
                  href="/publications"
                  variant="outlined"
                  size="large"
                  sx={{
                    borderColor: 'rgba(255,255,255,0.5)',
                    color: '#fff',
                    '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' },
                    px: { xs: 2, sm: 3.5 },
                    py: { xs: 1, sm: 1.25 },
                    fontSize: { xs: '0.8rem', sm: '0.9375rem' },
                    whiteSpace: 'nowrap',
                  }}
                >
                  View Publications
                </LinkButton>
              </Box>

              {/* Stats */}
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: { xs: 4, sm: 5 },
                  pt: 3,
                  borderTop: '1px solid rgba(255,255,255,0.15)',
                }}
              >
                {profile.stats.map((stat) => (
                  <Box key={stat.label}>
                    <Typography
                      variant="h4"
                      sx={{ color: '#C9A94B', fontWeight: 700, lineHeight: 1, fontSize: { xs: '1.75rem', md: '2rem' } }}
                    >
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mt: 0.4, fontSize: '0.8rem' }}>
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>

            {/* Right — portrait photo */}
            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  position: 'relative',
                  width: { md: 300, lg: 340 },
                  height: { md: 380, lg: 430 },
                  borderRadius: 4,
                  overflow: 'hidden',
                  border: '3px solid rgba(201,169,75,0.45)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.07)',
                  flexShrink: 0,
                }}
              >
                <Image
                  src="/assets/esma1.jpg"
                  alt="Esma Ramzan"
                  fill
                  sizes="(max-width: 1200px) 300px, 340px"
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                />
                {/* Name plate at bottom */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(8,18,40,0.92) 0%, transparent 100%)',
                    p: 2.5,
                    pt: 5,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#C9A94B',
                      fontFamily: 'var(--font-playfair), serif',
                      fontWeight: 700,
                      fontSize: '1.05rem',
                      lineHeight: 1.2,
                    }}
                  >
                    Esma Ramzan
                  </Typography>
                  <Typography sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.78rem', mt: 0.25 }}>
                    Applied Linguist &amp; Teacher Trainer
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>

      </Box>

      {/* ── About preview ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: { xs: 5, md: 8 }, alignItems: 'center' }}>
            {/* Decorative card */}
            <Box sx={{ position: 'relative', order: { xs: 2, md: 1 } }}>
              <Box sx={{ bgcolor: 'primary.main', borderRadius: 4, pt: { xs: 4, md: 5 }, px: { xs: 4, md: 5 }, pb: { xs: 8, md: 9 }, color: '#fff', position: 'relative', overflow: 'hidden' }}>
                <Box aria-hidden sx={{ position: 'absolute', top: -30, right: -30, width: 140, height: 140, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.06)' }} />
                <Typography
                  variant="h6"
                  sx={{ fontFamily: 'var(--font-playfair), serif', fontStyle: 'italic', mb: 3, lineHeight: 1.5, fontSize: { xs: '1.1rem', md: '1.25rem' } }}
                >
                  &ldquo;I believe effective language education is learner-centered, inclusive, and transformative.&rdquo;
                </Typography>
                <Box sx={{ borderTop: '1px solid rgba(255,255,255,0.2)', pt: 2.5, display: 'flex', flexDirection: 'column', gap: 1.5, mb: 4 }}>
                  {profile.education.slice(0, 2).map((edu) => (
                    <Box key={edu.degree}>
                      <Typography variant="body2" sx={{ fontWeight: 600, color: '#C9A94B' }}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
                        {edu.institution}, {edu.year}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box sx={{ position: 'absolute', bottom: -20, left: '50%', transform: 'translateX(-50%)', width: 'max-content', maxWidth: '90%', bgcolor: '#fff', border: '1px solid', borderColor: 'divider', borderRadius: 3, px: 3, py: 2.25, boxShadow: '0 8px 32px rgba(27,79,114,0.12)', display: { xs: 'none', sm: 'block' } }}>
                <Typography variant="caption" sx={{ color: 'text.secondary', display: 'block', mb: 1, textAlign: 'center', fontWeight: 600 }}>Research Focus</Typography>
                <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', justifyContent: 'center' }}>
                  {profile.researchInterests.slice(0, 3).map((r) => (
                    <Chip key={r} label={r} size="small" sx={{ bgcolor: 'rgba(27,79,114,0.07)', color: 'primary.main', fontSize: '0.7rem' }} />
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Text */}
            <Box sx={{ order: { xs: 1, md: 2 } }}>
              <Typography component="span" sx={{ display: 'block', color: 'secondary.dark', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 1.5 }}>
                About
              </Typography>
              <Typography variant="h3" sx={{ mb: 3, fontSize: { xs: '1.75rem', md: '2.25rem' } }}>
                A Life in Language Education &amp; Service
              </Typography>
              <ExpandableBio paragraphs={[profile.bioLong[0]]} />

              <LinkButton
                href="/about"
                variant="outlined"
                color="primary"
                endIcon={<ArrowRight />}
                sx={{
                  px: { xs: 2, sm: 3.5 },
                  py: { xs: 1, sm: 1.25 },
                  fontSize: { xs: '0.8rem', sm: '0.9375rem' },
                }}
              >
                Learn More
              </LinkButton>
            </Box>
          </Box>
        </Container>
      </Box>

      {/* ── Research highlights ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: '#F8FAFB' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography component="span" sx={{ display: 'block', color: 'secondary.dark', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 1.5 }}>
              Areas of Inquiry
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.85rem', md: '2.5rem' } }}>
              Research Interests
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 3, mb: 5 }}>
            {featuredResearch.map((area) => (
              <Card key={area.id} sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ fontSize: '2rem', mb: 2 }}>{area.icon}</Box>
                  <Typography variant="h6" sx={{ mb: 1.5 }}>{area.title}</Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2.5 }}>
                    {area.description.slice(0, 140)}...
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
                    {area.highlights.slice(0, 2).map((h) => (
                      <Chip key={h} label={h} size="small" sx={{ bgcolor: 'rgba(27,79,114,0.07)', color: 'primary.dark', fontSize: '0.7rem' }} />
                    ))}
                  </Box>
                </CardContent>
              </Card>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <LinkButton href="/research" variant="outlined" color="primary" endIcon={<ArrowRight />}>
              View All Research Areas
            </LinkButton>
          </Box>
        </Container>
      </Box>

      {/* ── Recent publications ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'center' }, flexDirection: { xs: 'column', sm: 'row' }, gap: 2, mb: 5 }}>
            <Box>
              <Typography component="span" sx={{ display: 'block', color: 'secondary.dark', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 1 }}>
                Scholarship
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.85rem', md: '2.5rem' } }}>
                Recent Publications
              </Typography>
            </Box>
            <LinkButton href="/publications" variant="outlined" color="primary" endIcon={<ArrowRight />}>
              All Publications
            </LinkButton>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {recentPublications.map((pub, idx) => (
              <Box
                key={pub.id}
                sx={{ p: { xs: 2.5, md: 3 }, bgcolor: '#fff', border: '1px solid', borderColor: 'divider', borderRadius: 3, transition: 'border-color 0.2s, box-shadow 0.2s', '&:hover': { borderColor: 'primary.light', boxShadow: '0 4px 20px rgba(27,79,114,0.08)' } }}
              >
                <Box sx={{ display: 'flex', gap: 2, alignItems: 'flex-start' }}>
                  <Box sx={{ minWidth: 44, height: 44, bgcolor: idx === 0 ? 'primary.main' : 'rgba(27,79,114,0.08)', color: idx === 0 ? '#fff' : 'primary.main', borderRadius: 2, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '1rem', fontFamily: 'var(--font-playfair), serif', flexShrink: 0 }}>
                    {pub.year}
                  </Box>
                  <Box sx={{ flexGrow: 1 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 0.75 }}>
                      <Chip label={pub.type} size="small" sx={{ bgcolor: 'rgba(201,169,75,0.12)', color: 'secondary.dark', fontSize: '0.7rem' }} />
                    </Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5, lineHeight: 1.4 }}>
                      {pub.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      <em>{pub.journal}</em>
                      {pub.volume && `, ${pub.volume}`}
                      {pub.pages && `, pp. ${pub.pages}`}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ── Teaching preview ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: 'primary.main', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <Box aria-hidden sx={{ position: 'absolute', top: -80, right: -80, width: 360, height: 360, borderRadius: '50%', bgcolor: 'rgba(255,255,255,0.04)' }} />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography component="span" sx={{ display: 'block', color: '#C9A94B', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 1.5 }}>
              Pedagogy
            </Typography>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.85rem', md: '2.5rem' }, color: '#fff', mb: 1.5 }}>
              Current Teaching
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.7)', maxWidth: 540, mx: 'auto' }}>
              Courses currently offered for undergraduate and postgraduate students.
            </Typography>
          </Box>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' }, gap: 2.5, mb: 5 }}>
            {currentCourses.map((course) => (
              <Box key={course.id} sx={{ bgcolor: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 3, p: 3, transition: 'background-color 0.2s', '&:hover': { bgcolor: 'rgba(255,255,255,0.11)' } }}>
                <Chip label={course.level} size="small" sx={{ bgcolor: 'rgba(201,169,75,0.2)', color: '#C9A94B', fontSize: '0.68rem', mb: 1.5, fontWeight: 600 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)', mb: 0.5, fontWeight: 500 }}>{course.code}</Typography>
                <Typography variant="h6" sx={{ color: '#fff', mb: 1.5, fontSize: '1rem' }}>{course.title}</Typography>
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', lineHeight: 1.6, fontSize: '0.85rem' }}>
                  {course.description.slice(0, 100)}...
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ textAlign: 'center' }}>
            <LinkButton
              href="/teaching"
              variant="outlined"
              endIcon={<ArrowRight />}
              sx={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.08)' } }}
            >
              View All Courses
            </LinkButton>
          </Box>
        </Container>
      </Box>

      {/* ── Gallery preview ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: '#F8FAFB' }}>
        <Container maxWidth="lg">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              flexDirection: { xs: 'column', sm: 'row' },
              gap: 2,
              mb: 5,
            }}
          >
            <Box>
              <Typography
                component="span"
                sx={{ display: 'block', color: 'secondary.dark', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 1 }}
              >
                Moments &amp; Memories
              </Typography>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.85rem', md: '2.5rem' } }}>
                Gallery
              </Typography>
            </Box>
            <LinkButton href="/gallery" variant="outlined" color="primary" endIcon={<ArrowRight />}>
              View All Photos
            </LinkButton>
          </Box>
          <GalleryGrid images={homePreviewImages} showFilter={false} />
        </Container>
      </Box>

      {/* ── Contact CTA ── */}
      <Box sx={{ py: { xs: 7, md: 10 }, bgcolor: '#F8FAFB' }}>
        <Container maxWidth="sm" sx={{ textAlign: 'center' }}>
          <Typography component="span" sx={{ display: 'block', color: 'secondary.dark', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', mb: 2 }}>
            Get in Touch
          </Typography>
          <Typography variant="h2" sx={{ fontSize: { xs: '1.85rem', md: '2.5rem' }, mb: 2 }}>
            Let&apos;s Connect
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 460, mx: 'auto' }}>
            Whether you have a research inquiry, invitation to speak, or would like to discuss collaboration — Esma Ramzan welcomes your message.
          </Typography>
          <LinkButton href="/contact" variant="contained" color="primary" size="large">
            Send a Message
          </LinkButton>
        </Container>
      </Box>
    </>
  );
}
