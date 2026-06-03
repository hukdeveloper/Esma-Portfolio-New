'use client';
import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function ExpandableBio({ paragraphs }) {
  const [expanded, setExpanded] = React.useState(false);

  const fullText = paragraphs[0] + ' ' + paragraphs[1];
  // Show ~180 chars on small screens before the "...read more"
  const PREVIEW_LENGTH = 180;
  const previewText = fullText.slice(0, PREVIEW_LENGTH);

  return (
    <>
      {/* Small screens — truncated / expanded */}
      <Box sx={{ display: { xs: 'block', md: 'none' }, mb: 4 }}>
        <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.75 }}>
          {expanded ? fullText : (
            <>
              {previewText}
              <Typography
                component="span"
                onClick={() => setExpanded(true)}
                sx={{
                  color: 'primary.main',
                  fontWeight: 600,
                  cursor: 'pointer',
                  ml: 0.25,
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                ...read more
              </Typography>
            </>
          )}
          {expanded && (
            <Typography
              component="span"
              onClick={() => setExpanded(false)}
              sx={{
                display: 'block',
                mt: 1,
                color: 'primary.main',
                fontWeight: 600,
                cursor: 'pointer',
                fontSize: '0.875rem',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              show less
            </Typography>
          )}
        </Typography>
      </Box>

      {/* Medium+ screens — show both paragraphs always */}
      <Box sx={{ display: { xs: 'none', md: 'block' } }}>
        {paragraphs.map((para, i) => (
          <Typography key={i} variant="body1" sx={{ color: 'text.secondary', mb: 2.5 }}>
            {para}
          </Typography>
        ))}
      </Box>
    </>
  );
}
