'use client';
import * as React from 'react';
import Box from '@mui/material/Box';
import { profile } from '@/lib/data/profile';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import MenuItem from '@mui/material/MenuItem';

const SUBJECTS = [
  'Research Inquiry',
  'Speaking Invitation',
  'Media / Press Request',
  'Academic Collaboration',
  'Student Enquiry',
  'Other',
];

export default function ContactForm() {
  const [values, setValues] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleChange = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Build mailto link for static site — opens the user's email client
    const subject = encodeURIComponent(`[${values.subject}] Message from ${values.name}`);
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\nSubject: ${values.subject}\n\nMessage:\n${values.message}`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
    setLoading(false);
    setSubmitted(true);
  };

  const isValid = values.name.trim() && values.email.trim() && values.subject && values.message.trim();

  return (
    <Paper
      elevation={0}
      sx={{
        p: { xs: 3, md: 4 },
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
      }}
    >
      <Typography variant="h5" sx={{ mb: 0.75 }}>
        Send a Message
      </Typography>
      <Typography variant="body2" sx={{ color: 'text.secondary', mb: 3.5 }}>
        Fill in the form below and your email client will open with the message pre-filled.
      </Typography>

      {submitted && (
        <Alert severity="success" sx={{ mb: 3, borderRadius: 2 }}>
          Your email client has been opened. Please send the message from there — thank you!
        </Alert>
      )}

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}
      >
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2 }}>
          <TextField
            label="Full Name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
            fullWidth
            size="small"
            placeholder="Your full name"
          />
          <TextField
            label="Email Address"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
            required
            fullWidth
            size="small"
            placeholder="your@email.com"
          />
        </Box>

        <TextField
          label="Subject"
          name="subject"
          select
          value={values.subject}
          onChange={handleChange}
          required
          fullWidth
          size="small"
        >
          {SUBJECTS.map((s) => (
            <MenuItem key={s} value={s}>
              {s}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          label="Message"
          name="message"
          value={values.message}
          onChange={handleChange}
          required
          fullWidth
          multiline
          minRows={6}
          placeholder="Please share the details of your enquiry..."
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          disabled={!isValid || loading}
          fullWidth
          sx={{ mt: 0.5 }}
        >
          {loading ? 'Opening email…' : 'Send Message'}
        </Button>
      </Box>
    </Paper>
  );
}
