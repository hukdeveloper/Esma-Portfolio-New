'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Chip from '@mui/material/Chip';
import Image from 'next/image';
import { categories } from '@/lib/data/gallery';

function CloseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ZoomIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      <line x1="11" y1="8" x2="11" y2="14" /><line x1="8" y1="11" x2="14" y2="11" />
    </svg>
  );
}

function ChevronIcon({ dir }) {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      {dir === 'left'
        ? <polyline points="15 18 9 12 15 6" />
        : <polyline points="9 18 15 12 9 6" />}
    </svg>
  );
}

export default function GalleryGrid({ images, showFilter = false }) {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [lightbox, setLightbox] = React.useState(null); // index

  const filtered = activeCategory === 'All'
    ? images
    : images.filter((img) => img.category === activeCategory);

  const openLightbox = (idx) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);

  const prev = () => setLightbox((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setLightbox((i) => (i + 1) % filtered.length);

  React.useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightbox, filtered.length]);

  return (
    <>
      {/* Category filter */}
      {showFilter && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
          {categories.map((cat) => (
            <Chip
              key={cat}
              label={cat}
              onClick={() => setActiveCategory(cat)}
              sx={{
                cursor: 'pointer',
                fontWeight: 600,
                fontSize: '0.85rem',
                px: 0.5,
                bgcolor: activeCategory === cat ? 'primary.main' : 'rgba(27,79,114,0.07)',
                color: activeCategory === cat ? '#fff' : 'primary.dark',
                border: '1px solid',
                borderColor: activeCategory === cat ? 'primary.main' : 'transparent',
                transition: 'all 0.2s',
                '&:hover': {
                  bgcolor: activeCategory === cat ? 'primary.dark' : 'rgba(27,79,114,0.12)',
                },
              }}
            />
          ))}
          <Typography variant="caption" sx={{ color: 'text.secondary', alignSelf: 'center', ml: 1 }}>
            {filtered.length} photo{filtered.length !== 1 ? 's' : ''}
          </Typography>
        </Box>
      )}

      {/* Masonry grid — CSS columns handles mixed aspect ratios naturally */}
      <Box
        sx={{
          columns: { xs: 2, sm: 2, md: 3 },
          columnGap: { xs: 1.5, md: 2 },
        }}
      >
        {filtered.map((img, idx) => (
          <Box
            key={img.id}
            onClick={() => openLightbox(idx)}
            sx={{
              breakInside: 'avoid',
              mb: { xs: 1.5, md: 2 },
              borderRadius: 3,
              overflow: 'hidden',
              cursor: 'zoom-in',
              position: 'relative',
              bgcolor: '#EFF4F9',
              display: 'block',
              '&:hover .gallery-overlay': { opacity: 1 },
              '&:hover img': { transform: 'scale(1.04)' },
            }}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={img.orientation === 'portrait' ? 800 : 450}
              sizes="(max-width: 600px) 50vw, (max-width: 900px) 33vw, 400px"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
                transition: 'transform 0.35s ease',
              }}
            />
            {/* Hover overlay */}
            <Box
              className="gallery-overlay"
              sx={{
                position: 'absolute',
                inset: 0,
                bgcolor: 'rgba(12,24,52,0.45)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0,
                transition: 'opacity 0.25s ease',
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  bgcolor: 'rgba(255,255,255,0.15)',
                  backdropFilter: 'blur(4px)',
                  border: '1px solid rgba(255,255,255,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <ZoomIcon />
              </Box>
            </Box>
            {/* Category badge */}
            <Box
              sx={{
                position: 'absolute',
                top: 8,
                left: 8,
                bgcolor: 'rgba(12,24,52,0.65)',
                backdropFilter: 'blur(4px)',
                borderRadius: 1,
                px: 1,
                py: 0.25,
              }}
            >
              <Typography sx={{ color: '#C9A94B', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                {img.category}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      {/* Lightbox */}
      {lightbox !== null && (
        <Box
          onClick={closeLightbox}
          sx={{
            position: 'fixed',
            inset: 0,
            bgcolor: 'rgba(5,10,20,0.96)',
            zIndex: 2000,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            p: { xs: 1, md: 3 },
          }}
        >
          {/* Close */}
          <IconButton
            onClick={closeLightbox}
            sx={{
              position: 'absolute',
              top: { xs: 10, md: 20 },
              right: { xs: 10, md: 20 },
              color: 'rgba(255,255,255,0.8)',
              bgcolor: 'rgba(255,255,255,0.08)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.16)', color: '#fff' },
              zIndex: 1,
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Prev */}
          <IconButton
            onClick={(e) => { e.stopPropagation(); prev(); }}
            sx={{
              position: 'absolute',
              left: { xs: 6, md: 20 },
              color: 'rgba(255,255,255,0.8)',
              bgcolor: 'rgba(255,255,255,0.08)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.16)', color: '#fff' },
              zIndex: 1,
            }}
          >
            <ChevronIcon dir="left" />
          </IconButton>

          {/* Image */}
          <Box
            onClick={(e) => e.stopPropagation()}
            sx={{
              maxWidth: { xs: '95vw', md: '85vw' },
              maxHeight: { xs: '82vh', md: '88vh' },
              position: 'relative',
              borderRadius: 3,
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.6)',
            }}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={filtered[lightbox].orientation === 'portrait' ? 1600 : 900}
              sizes="(max-width: 600px) 95vw, 85vw"
              style={{
                width: 'auto',
                height: 'auto',
                maxWidth: '100%',
                maxHeight: '88vh',
                display: 'block',
                objectFit: 'contain',
              }}
              priority
            />
            {/* Caption */}
            <Box
              sx={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                background: 'linear-gradient(to top, rgba(5,10,20,0.9) 0%, transparent 100%)',
                p: { xs: 2, md: 2.5 },
                pt: { xs: 4, md: 5 },
              }}
            >
              <Typography sx={{ color: '#fff', fontSize: { xs: '0.8rem', md: '0.9rem' }, lineHeight: 1.4 }}>
                {filtered[lightbox].alt}
              </Typography>
              <Typography sx={{ color: '#C9A94B', fontSize: '0.7rem', mt: 0.25, fontWeight: 600 }}>
                {filtered[lightbox].category}
              </Typography>
            </Box>
          </Box>

          {/* Next */}
          <IconButton
            onClick={(e) => { e.stopPropagation(); next(); }}
            sx={{
              position: 'absolute',
              right: { xs: 6, md: 20 },
              color: 'rgba(255,255,255,0.8)',
              bgcolor: 'rgba(255,255,255,0.08)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.16)', color: '#fff' },
              zIndex: 1,
            }}
          >
            <ChevronIcon dir="right" />
          </IconButton>

          {/* Counter */}
          <Typography
            sx={{
              position: 'absolute',
              bottom: { xs: 14, md: 22 },
              left: '50%',
              transform: 'translateX(-50%)',
              color: 'rgba(255,255,255,0.45)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
            }}
          >
            {lightbox + 1} / {filtered.length}
          </Typography>
        </Box>
      )}
    </>
  );
}
