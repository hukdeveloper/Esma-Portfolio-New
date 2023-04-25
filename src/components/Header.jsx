import { AppBar, Toolbar } from "@mui/material";
import React from "react";

export default function Header({ menuOpen }) {
  return (
    <AppBar position="static">
      <Toolbar
        size="large"
        edge="start"
        color="inherit"
        aria-label="open drawer"
        sx={{ mr: 2 }}
      ></Toolbar>
    </AppBar>
  );
}
