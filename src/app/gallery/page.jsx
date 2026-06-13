import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { galleryImages, categories } from '@/lib/data/gallery';

export const metadata = {
  title: 'Gallery',
  description:
    'Photo gallery of Esma Ramzan — teacher training workshops, plays, poetic symposia, and community engagement programs.',
};

export default function GalleryPage() {
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
            Moments &amp; Memories
          </Typography>
          <Typography variant="h1" sx={{ fontSize: { xs: '2.1rem', md: '3rem' }, mb: 2 }}>
            Gallery
          </Typography>
          <Typography variant="h6" sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, fontSize: { xs: '1rem', md: '1.2rem' } }}>
            Visual highlights from teacher training workshops, theatrical plays, poetic symposia, and community engagement programs during Esma Ramzan's professional journey.
          </Typography>
        </Container>
      </Box>

      {/* Gallery grid */}
      <Box sx={{ py: { xs: 5, md: 8 }, bgcolor: '#fff' }}>
        <Container maxWidth="lg">
          <GalleryGrid images={galleryImages} showFilter={true} />
        </Container>
      </Box>
    </>
  );
}
