import {
  Blinds,
  Facebook,
  GroupWork,
  Home,
  KeyboardDoubleArrowLeft,
  KeyboardDoubleArrowRight,
  LinkedIn,
  Telegram,
  Twitter,
  Menu as MenuIcon,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";

import "./style.css";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar(props) {
  const location = useLocation();

  // const pathName = props?.location?.pathname;

  const isHomeActive = location.pathname === "/";
  const isPortfolioActive = location.pathname === "/portfolio";
  const isTestimonialActive = location.pathname === "/testimonial";
  const isContactActive = location.pathname === "/contact";
  const isResumeActive = location.pathname === "/resume";

  const [menuCollapse, setMenuCollapse] = useState(false);

  const menuIconClick = () => {
    menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true);
  };

  const isNonMediumScreens = useMediaQuery("(min-width: 769px)");

  const [openMenu, setMenuOpen] = useState(isNonMediumScreens);

  const toggleDrawer = () => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setMenuOpen(!openMenu);
  };

  return (
    <>
      {isNonMediumScreens ? (
        <ProSidebar collapsedWidth="80px" defaultCollapsed={menuCollapse}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div className="logotext">
              <p>{menuCollapse ? "ESMA" : "ESMA RAMZAN"}</p>
            </div>
            <div className="closemenu" onClick={menuIconClick}>
              {menuCollapse ? (
                <KeyboardDoubleArrowRight />
              ) : (
                <KeyboardDoubleArrowLeft />
              )}
            </div>
          </Box>
          <Box
            sx={
              menuCollapse
                ? {
                    display: "none",
                  }
                : {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }
            }
          >
            <Avatar
              src="../../assets/esma1.jpg"
              sx={{
                height: "200px",
                width: "200px",
              }}
            />
            <Box
              mt={3}
              sx={{
                display: "flex",
                gap: "10px",
              }}
            >
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedIn />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook />
              </a>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter />
              </a>
            </Box>
          </Box>
          <Menu>
            <MenuItem>
              <Link to="/">
                <IconButton>
                  <Home style={{ color: isHomeActive ? "#ffc500" : "#fff" }} />
                </IconButton>
                <Typography
                  fontSize="14px"
                  style={{ color: isHomeActive ? "#ffc500" : "#fff" }}
                >
                  Home
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to="/portfolio">
                <IconButton>
                  <GroupWork
                    style={{ color: isPortfolioActive ? "#ffc500" : "#fff" }}
                  />
                </IconButton>
                <Typography
                  fontSize="14px"
                  style={{ color: isPortfolioActive ? "#ffc500" : "#fff" }}
                >
                  Portfolio
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/resume"}>
                <IconButton>
                  <Blinds
                    style={{ color: isResumeActive ? "#ffc500" : "#fff" }}
                  />
                </IconButton>
                <Typography
                  fontSize="14px"
                  style={{ color: isResumeActive ? "#ffc500" : "#fff" }}
                >
                  Resume
                </Typography>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/contact"}>
                <IconButton>
                  <Telegram
                    style={{ color: isContactActive ? "#ffc500" : "#fff" }}
                  />
                </IconButton>
                <Typography
                  fontSize="14px"
                  style={{ color: isContactActive ? "#ffc500" : "#fff" }}
                >
                  Contact
                </Typography>
              </Link>
            </MenuItem>
          </Menu>
        </ProSidebar>
      ) : (
        <>
          <Box display={"flex"} flexDirection={"column"}>
            <Box height={"50px"} width={"100%"}>
              <Toolbar position="static">
                <Toolbar>
                  <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    sx={{ mr: 2 }}
                    onClick={toggleDrawer()}
                  >
                    <MenuIcon />
                  </IconButton>
                </Toolbar>
              </Toolbar>
            </Box>
            <Drawer open={openMenu} onClose={toggleDrawer()}>
              <ProSidebar collapsedWidth="80px" defaultCollapsed={menuCollapse}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className="logotext">
                    <p>{menuCollapse ? "ESMA" : "ESMA RAMZAN"}</p>
                  </div>
                </Box>
                <Box
                  sx={
                    menuCollapse
                      ? {
                          display: "none",
                        }
                      : {
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                        }
                  }
                >
                  <Avatar
                    src="../../assets/esma1.jpg"
                    sx={{
                      height: "200px",
                      width: "200px",
                    }}
                  />
                  <Box
                    mt={3}
                    sx={{
                      display: "flex",
                      gap: "10px",
                    }}
                  >
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <LinkedIn />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Facebook />
                    </a>
                    <a
                      href="https://www.facebook.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Twitter />
                    </a>
                  </Box>
                </Box>
                <Menu>
                  <MenuItem onClick={toggleDrawer()}>
                    <Link to="/">
                      <IconButton>
                        <Home
                          style={{ color: isHomeActive ? "#ffc500" : "#fff" }}
                        />
                      </IconButton>
                      <Typography
                        fontSize="14px"
                        style={{ color: isHomeActive ? "#ffc500" : "#fff" }}
                      >
                        Home
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={toggleDrawer()}>
                    <Link to="/portfolio">
                      <IconButton>
                        <GroupWork
                          style={{
                            color: isPortfolioActive ? "#ffc500" : "#fff",
                          }}
                        />
                      </IconButton>
                      <Typography
                        fontSize="14px"
                        style={{
                          color: isPortfolioActive ? "#ffc500" : "#fff",
                        }}
                      >
                        Portfolio
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={toggleDrawer()}>
                    <Link to={"/resume"}>
                      <IconButton>
                        <Blinds
                          style={{ color: isResumeActive ? "#ffc500" : "#fff" }}
                        />
                      </IconButton>
                      <Typography
                        fontSize="14px"
                        style={{ color: isResumeActive ? "#ffc500" : "#fff" }}
                      >
                        Resume
                      </Typography>
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={toggleDrawer()}>
                    <Link to={"/contact"}>
                      <IconButton>
                        <Telegram
                          style={{
                            color: isContactActive ? "#ffc500" : "#fff",
                          }}
                        />
                      </IconButton>
                      <Typography
                        fontSize="14px"
                        style={{ color: isContactActive ? "#ffc500" : "#fff" }}
                      >
                        Contact
                      </Typography>
                    </Link>
                  </MenuItem>
                </Menu>
              </ProSidebar>
            </Drawer>
          </Box>
        </>
      )}
    </>
  );
}
