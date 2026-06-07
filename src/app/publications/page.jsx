import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Divider from '@mui/material/Divider';
import { publications } from '@/lib/data/publications';

export const metadata = {
  title: 'Publications',
  description:
    "Browse Dr. Esma Ramzan's complete list of academic publications including journal articles, book chapters, and edited volumes in Islamic studies and religious education.",
};

const TYPES = ['All', 'Journal Article', 'Book Chapter'];

function PublicationEntry({ pub, isFirst }) {
  return (
    <Box
      sx={{
        p: { xs: 2.5, md: 3.5 },
        border: '1px solid',
        borderColor: isFirst ? 'primary.light' : 'divider',
        borderRadius: 3,
        bgcolor: isFirst ? 'rgba(27,79,114,0.02)' : '#fff',
        transition: 'border-color 0.2s, box-shadow 0.2s',
        '&:hover': {
          borderColor: 'primary.light',
          boxShadow: '0 4px 20px rgba(27,79,114,0.08)',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 1.5 }}>
        <Chip
          label={pub.type}
          size="small"
          sx={{
            bgcolor: pub.type === 'Book Chapter' ? 'rgba(142,68,173,0.1)' : 'rgba(201,169,75,0.12)',
            color: pub.type === 'Book Chapter' ? '#6c3483' : 'secondary.dark',
            fontSize: '0.7rem',
            fontWeight: 600,
          }}
        />
        {pub.featured && (
          <Chip
            label="Featured"
            size="small"
            sx={{ bgcolor: 'rgba(27,79,114,0.08)', color: 'primary.dark', fontSize: '0.7rem', fontWeight: 600 }}
          />
        )}
      </Box>

      <Typography variant="h6" sx={{ fontWeight: 600, mb: 1, lineHeight: 1.45, fontSize: { xs: '1rem', md: '1.05rem' } }}>
        {pub.title}
      </Typography>

      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
        <Box component="em" sx={{ color: 'primary.dark' }}>{pub.journal}</Box>
        {pub.volume && <>, {pub.volume}</>}
        {pub.pages && <>, pp.&nbsp;{pub.pages}</>}
        {pub.publisher && <> &mdash; {pub.publisher}</>}
        {pub.editors && <> ({pub.editors})</>}
        <Box component="span" sx={{ ml: 1.5, fontWeight: 700, color: 'text.primary' }}>
          {pub.year}
        </Box>
      </Typography>

      {pub.abstract && (
        <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: pub.keywords ? 1.5 : 0 }}>
          {pub.abstract}
        </Typography>
      )}

      {pub.keywords && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
          {pub.keywords.map((kw) => (
            <Chip
              key={kw}
              label={kw}
              size="small"
              variant="outlined"
              sx={{
                fontSize: '0.68rem',
                borderColor: 'divider',
                color: 'text.secondary',
                height: 22,
              }}
            />
          ))}
        </Box>
      )}

      {pub.doi && (
        <Typography variant="caption" sx={{ display: 'block', mt: 1.5, color: 'text.secondary' }}>
          DOI: {pub.doi}
        </Typography>
      )}
    </Box>
  );
}

export default function PublicationsPage() {
  const journalArticles = publications.filter((p) => p.type === 'Journal Article');
  const underReview = publications.filter((p) => p.type === 'Under Review');
  const ongoingResearch = publications.filter((p) => p.type === 'Ongoing');

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
            Scholarly Output
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.25rem', md: '3rem' }, mb: 2 }}>
            Publications
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600 }}>
            A complete list of Esma Ramzan&apos;s research output, including peer-reviewed journal articles, papers currently under review, and ongoing projects.
          </Typography>

          {/* Counts */}
          <Box sx={{ display: 'flex', gap: 4, mt: 4, flexWrap: 'wrap' }}>
            <Box>
              <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1 }}>
                {publications.length}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Total Projects</Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1 }}>
                {journalArticles.length}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Journal Articles</Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1 }}>
                {underReview.length}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Under Review</Typography>
            </Box>
            <Box>
              <Typography variant="h4" sx={{ color: 'primary.main', fontWeight: 700, lineHeight: 1 }}>
                {ongoingResearch.length}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>Ongoing</Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box sx={{ py: { xs: 6, md: 10 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          {/* Journal articles section */}
          <Box sx={{ mb: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
                Peer-Reviewed Publications
              </Typography>
              <Chip
                label={journalArticles.length}
                size="small"
                sx={{ bgcolor: 'primary.main', color: '#fff', fontWeight: 700 }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {journalArticles.map((pub, idx) => (
                <PublicationEntry key={pub.id} pub={pub} isFirst={idx === 0} />
              ))}
            </Box>
          </Box>

          <Divider sx={{ mb: 8 }} />

          {/* Research under review section */}
          <Box sx={{ mb: 8 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
                Research Under Review
              </Typography>
              <Chip
                label={underReview.length}
                size="small"
                sx={{ bgcolor: 'secondary.main', color: '#fff', fontWeight: 700 }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {underReview.map((pub) => (
                <PublicationEntry key={pub.id} pub={pub} isFirst={false} />
              ))}
            </Box>
          </Box>

          <Divider sx={{ mb: 8 }} />

          {/* Ongoing research section */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 4 }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.6rem', md: '2rem' } }}>
                Ongoing Research
              </Typography>
              <Chip
                label={ongoingResearch.length}
                size="small"
                sx={{ bgcolor: 'secondary.dark', color: '#fff', fontWeight: 700 }}
              />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
              {ongoingResearch.map((pub) => (
                <PublicationEntry key={pub.id} pub={pub} isFirst={false} />
              ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
