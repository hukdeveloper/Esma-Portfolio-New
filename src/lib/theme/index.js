import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1B4F72',
      light: '#2471A3',
      dark: '#154360',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#C9A94B',
      light: '#D4BE78',
      dark: '#A07E28',
      contrastText: '#1A2332',
    },
    background: {
      default: '#F8FAFB',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1A2332',
      secondary: '#546E7A',
    },
    divider: '#DDE6EE',
    success: { main: '#27AE60' },
    info: { main: '#2980B9' },
  },
  typography: {
    fontFamily: 'var(--font-inter), Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    h1: {
      fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
      fontWeight: 700,
      lineHeight: 1.25,
    },
    h3: {
      fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    h4: {
      fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
      fontWeight: 600,
      lineHeight: 1.35,
    },
    h5: {
      fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'var(--font-playfair), "Playfair Display", Georgia, serif',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.75,
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.65,
    },
    subtitle1: {
      fontWeight: 500,
      lineHeight: 1.5,
    },
    overline: {
      letterSpacing: '0.12em',
      fontWeight: 600,
      fontSize: '0.75rem',
    },
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          borderRadius: 8,
          padding: '10px 28px',
          fontSize: '0.9375rem',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #1B4F72 0%, #2471A3 100%)',
          '&:hover': {
            background: 'linear-gradient(135deg, #154360 0%, #1B4F72 100%)',
            boxShadow: '0 6px 20px rgba(27, 79, 114, 0.35)',
          },
        },
        outlinedPrimary: {
          borderColor: '#1B4F72',
          '&:hover': {
            backgroundColor: 'rgba(27, 79, 114, 0.05)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0 2px 16px rgba(27, 79, 114, 0.07)',
          border: '1px solid #DDE6EE',
          borderRadius: 12,
          transition: 'box-shadow 0.25s ease, transform 0.25s ease',
          '&:hover': {
            boxShadow: '0 8px 32px rgba(27, 79, 114, 0.12)',
            transform: 'translateY(-3px)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '24px',
          '&:last-child': { paddingBottom: '24px' },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        elevation0: {
          border: '1px solid #DDE6EE',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: '0 1px 12px rgba(0,0,0,0.06)',
          borderBottom: '1px solid #DDE6EE',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          fontSize: '0.8125rem',
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#DDE6EE',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 8,
          },
        },
      },
    },
  },
});

export default theme;
