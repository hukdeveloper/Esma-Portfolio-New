import { Avatar, Box, Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        height: "60px",
        width: "100%",
        marginTop: "auto",
        background: "linear-gradient(to right, #000345, #0898d5) !important",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <Avatar
        variant="square"
        src="../../assets/lrdc.png"
        sx={{
          width: "60px",
        }}
      />
      <a
        href="https://www.facebook.com/lrdc.kiu"
        target="_blank"
        rel="noreferrer"
      >
        <Typography
          component={"span"}
          sx={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "12px",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Design & Developed by LRD Community
        </Typography>
      </a>
    </Box>
  );
}
