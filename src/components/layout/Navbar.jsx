"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Teaching", href: "/teaching" },
  { label: "Contact", href: "/contact" },
];

function MenuIcon({ color }) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || "currentColor"}
      strokeWidth="2"
    >
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const pathname = usePathname();

  const isHomePage = pathname === "/";

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  // Transparent only on home page when not yet scrolled
  const isTransparent = isHomePage && !scrolled;

  const isActive = (href) => pathname === href;

  const logoColor = isTransparent ? "#fff" : "primary.main";
  const subtitleColor = isTransparent
    ? "rgba(255,255,255,0.7)"
    : "text.secondary";
  const linkColor = isTransparent ? "rgba(255,255,255,0.9)" : "text.secondary";
  const linkActiveColor = isTransparent ? "#fff" : "primary.main";
  const hamburgerColor = isTransparent ? "#fff" : undefined;

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          bgcolor: isTransparent ? "transparent" : "rgba(255,255,255,0.97)",
          backdropFilter: isTransparent ? "none" : "blur(10px)",
          borderBottom: isTransparent ? "none" : "1px solid",
          borderColor: "divider",
          boxShadow: isTransparent ? "none" : "0 2px 16px rgba(27,79,114,0.08)",
          transition:
            "background-color 0.35s ease, box-shadow 0.35s ease, border 0.35s ease",
        }}
      >
        <Toolbar sx={{ minHeight: { xs: 64, md: 72 }, px: { xs: 2, md: 4 } }}>
          {/* Logo */}
          <Box
            component={Link}
            href="/"
            sx={{ textDecoration: "none", flexGrow: 1 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontFamily:
                  'var(--font-playfair), "Playfair Display", Georgia, serif',
                fontWeight: 700,
                color: logoColor,
                fontSize: { xs: "1.1rem", md: "1.25rem" },
                lineHeight: 1.2,
                transition: "color 0.3s ease",
              }}
            >
              Dr. Esma Ramzan
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: subtitleColor,
                fontSize: "0.7rem",
                letterSpacing: "0.08em",
                display: { xs: "none", sm: "block" },
                textTransform: "uppercase",
                transition: "color 0.3s ease",
              }}
            >
              Scholar &amp; Educator
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              gap: 0.5,
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <Button
                key={link.href}
                component={Link}
                href={link.href}
                sx={{
                  color: isActive(link.href) ? linkActiveColor : linkColor,
                  fontWeight: isActive(link.href) ? 700 : 500,
                  fontSize: "0.9rem",
                  px: 1.5,
                  py: 1,
                  borderRadius: 2,
                  transition: "color 0.3s ease, background-color 0.2s ease",
                  position: "relative",
                  "&::after": isActive(link.href)
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: 4,
                        left: "50%",
                        transform: "translateX(-50%)",
                        width: "60%",
                        height: 2,
                        bgcolor: isTransparent
                          ? "rgba(255,255,255,0.6)"
                          : "secondary.main",
                        borderRadius: 1,
                      }
                    : {},
                  "&:hover": {
                    bgcolor: isTransparent
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(27,79,114,0.05)",
                    color: isTransparent ? "#fff" : "primary.main",
                  },
                }}
              >
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Mobile hamburger */}
          <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { xs: "flex", md: "none" },
              color: isTransparent ? "#fff" : "primary.main",
              transition: "color 0.3s ease",
            }}
            aria-label="Open navigation menu"
          >
            <MenuIcon color={hamburgerColor} />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 300,
            display: "flex",
            flexDirection: "column",
            bgcolor: "#fff",
          },
        }}
      >
        {/* ── Profile header ── */}
        <Box
          sx={{
            position: "relative",
            height: 210,
            flexShrink: 0,
            bgcolor: "#0C1834",
            overflow: "hidden",
          }}
        >
          {/* Background: blurred photo */}
          <Image
            src="/assets/esma1.jpg"
            alt=""
            fill
            sizes="300px"
            style={{
              objectFit: "cover",
              objectPosition: "center top",
              opacity: 0.35,
              filter: "blur(3px)",
              transform: "scale(1.05)",
            }}
          />
          {/* Gradient overlay */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(12,24,52,0.5) 0%, rgba(12,24,52,0.85) 100%)",
            }}
          />

          {/* Close button */}
          <IconButton
            onClick={() => setDrawerOpen(false)}
            size="small"
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              color: "rgba(255,255,255,0.7)",
              "&:hover": { color: "#fff", bgcolor: "rgba(255,255,255,0.1)" },
            }}
          >
            <CloseIcon />
          </IconButton>

          {/* Profile info */}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              p: 2.5,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 1,
            }}
          >
            {/* Circular photo */}
            <Box
              sx={{
                width: 64,
                height: 64,
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid rgba(201,169,75,0.7)",
                flexShrink: 0,
                position: "relative",
              }}
            >
              <Image
                src="/assets/esma1.jpg"
                alt="Dr. Esma Ramzan"
                fill
                sizes="64px"
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontFamily: "var(--font-playfair), serif",
                  fontWeight: 700,
                  fontSize: "1rem",
                  lineHeight: 1.25,
                  mb: 0.2,
                }}
              >
                Dr. Esma Ramzan
              </Typography>
              <Typography
                sx={{
                  color: "#C9A94B",
                  fontSize: "0.72rem",
                  fontWeight: 500,
                  letterSpacing: "0.04em",
                }}
              >
                Scholar &amp; Educator
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* ── Nav links ── */}
        <Box sx={{ flexGrow: 1, py: 1.5, overflowY: "auto" }}>
          {[{ label: "Home", href: "/" }, ...navLinks].map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setDrawerOpen(false)}
                style={{ textDecoration: "none", display: "block" }}
              >
                <Box
                  sx={{
                    mx: 1.5,
                    mb: 0.5,
                    px: 2,
                    py: 1.25,
                    borderRadius: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    bgcolor: active ? "rgba(27,79,114,0.08)" : "transparent",
                    transition: "background-color 0.15s",
                    "&:hover": { bgcolor: "rgba(27,79,114,0.06)" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: active ? 700 : 500,
                      fontSize: "0.95rem",
                      color: active ? "primary.main" : "text.primary",
                    }}
                  >
                    {link.label}
                  </Typography>
                  {active && (
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "secondary.main",
                        flexShrink: 0,
                      }}
                    />
                  )}
                </Box>
              </Link>
            );
          })}
        </Box>

        {/* ── Footer ── */}
        <Box
          sx={{
            borderTop: "1px solid",
            borderColor: "divider",
            p: 2.5,
            bgcolor: "#FAFCFE",
          }}
        >
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", display: "block", mb: 0.25 }}
          >
            Get in touch
          </Typography>
          <Typography
            component="a"
            href="mailto:contact@msesma.com"
            sx={{
              color: "primary.main",
              fontWeight: 600,
              fontSize: "0.85rem",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            contact@msesma.com
          </Typography>
        </Box>
      </Drawer>
    </>
  );
}
