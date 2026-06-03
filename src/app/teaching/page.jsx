import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import { courses, teachingPhilosophy } from '@/lib/data/teaching';

export const metadata = {
  title: 'Teaching',
  description:
    "Discover Dr. Esma Ramzan's teaching portfolio — courses offered at undergraduate and postgraduate levels in Islamic studies, philosophy, and religious education, alongside her teaching philosophy.",
};

export default function TeachingPage() {
  const undergraduateCourses = courses.filter((c) => c.level === 'Undergraduate');
  const advancedCourses = courses.filter((c) => c.level !== 'Undergraduate');

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
            Pedagogy
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, mb: 2 }}>
            Teaching
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 640 }}>
            Dr. Ramzan teaches courses across undergraduate and postgraduate levels, combining scholarly rigour
            with an inspiring, inclusive approach to Islamic education.
          </Typography>
        </Container>
      </Box>

      {/* Teaching philosophy */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: 'primary.main', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <Box
          aria-hidden
          sx={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 280,
            height: 280,
            borderRadius: '50%',
            bgcolor: 'rgba(255,255,255,0.04)',
          }}
        />
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: { xs: 5, md: 8 },
              alignItems: 'start',
            }}
          >
            <Box>
              <Typography
                variant="overline"
                sx={{ color: '#C9A94B', display: 'block', mb: 2 }}
              >
                {teachingPhilosophy.heading}
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  color: '#fff',
                  fontStyle: 'italic',
                  fontSize: { xs: '1.35rem', md: '1.65rem' },
                  lineHeight: 1.5,
                  mb: 3,
                }}
              >
                &ldquo;{teachingPhilosophy.summary}&rdquo;
              </Typography>
              <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: '#C9A94B', fontWeight: 700, lineHeight: 1 }}>7</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', mt: 0.25 }}>Courses</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: '#C9A94B', fontWeight: 700, lineHeight: 1 }}>15+</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', mt: 0.25 }}>Years Teaching</Typography>
                </Box>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h4" sx={{ color: '#C9A94B', fontWeight: 700, lineHeight: 1 }}>500+</Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)', mt: 0.25 }}>Students</Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 2,
              }}
            >
              {teachingPhilosophy.principles.map((principle) => (
                <Box
                  key={principle.title}
                  sx={{
                    p: 2.5,
                    bgcolor: 'rgba(255,255,255,0.07)',
                    borderRadius: 3,
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  <Typography
                    variant="subtitle2"
                    sx={{ color: '#C9A94B', mb: 1, fontWeight: 700, fontSize: '0.85rem' }}
                  >
                    {principle.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.8rem', lineHeight: 1.6 }}>
                    {principle.body}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Container>
      </Box>

      {/* Undergraduate courses */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
              Undergraduate Courses
            </Typography>
            <Chip
              label={undergraduateCourses.length}
              size="small"
              sx={{ bgcolor: '#27AE60', color: '#fff', fontWeight: 700 }}
            />
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            {undergraduateCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Box>
        </Container>
      </Box>

      {/* Advanced / postgraduate courses */}
      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#F8FAFB' }}>
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 5 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
              Advanced &amp; Postgraduate Courses
            </Typography>
            <Chip
              label={advancedCourses.length}
              size="small"
              sx={{ bgcolor: '#1B4F72', color: '#fff', fontWeight: 700 }}
            />
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
              gap: 3,
            }}
          >
            {advancedCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </Box>
        </Container>
      </Box>
    </>
  );
}

function CourseCard({ course }) {
  return (
    <Paper
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
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: 1 }}>
        <Box>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 0.25 }}>
            {course.code}
          </Typography>
          <Typography variant="h6" sx={{ lineHeight: 1.35, fontSize: '1rem' }}>
            {course.title}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 0.5 }}>
          <Chip
            label={course.level}
            size="small"
            sx={{ bgcolor: `${course.levelColor}18`, color: course.levelColor, fontSize: '0.68rem', fontWeight: 600 }}
          />
          {course.currentlyTeaching && (
            <Chip
              label="Current"
              size="small"
              sx={{ bgcolor: 'rgba(39,174,96,0.1)', color: '#1a7a4a', fontSize: '0.65rem', fontWeight: 600 }}
            />
          )}
        </Box>
      </Box>

      <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
        {course.description}
      </Typography>

      {course.outcomes && (
        <>
          <Divider />
          <Box>
            <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 600, display: 'block', mb: 1 }}>
              Learning Outcomes
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
              {course.outcomes.map((o) => (
                <Box key={o} sx={{ display: 'flex', gap: 1, alignItems: 'flex-start' }}>
                  <Box
                    sx={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      bgcolor: 'secondary.main',
                      mt: '7px',
                      flexShrink: 0,
                    }}
                  />
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                    {o}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </>
      )}
    </Paper>
  );
}
