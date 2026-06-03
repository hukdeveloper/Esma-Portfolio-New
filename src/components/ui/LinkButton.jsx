'use client';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

export default function LinkButton({ href, children, ...props }) {
  return (
    <Button component={NextLink} href={href} {...props}>
      {children}
    </Button>
  );
}
