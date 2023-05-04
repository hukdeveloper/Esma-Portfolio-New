import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import { Route, Routes } from "react-router-dom";
import Home from "./scenes/Home";
import Portfolio from "./scenes/Portfolio";
import Resume from "./scenes/Resume";
import Contact from "./scenes/Contact";

import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function App() {
  const theme = createTheme(themeSettings);
  return (
    <div className="main-app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <div className="app">
            <Sidebar />
            <Box
              width={"100%"}
              sx={{
                height: "100vh",
                overflowY: "auto",
                "::-webkit-scrollbar": {
                  width: "15px",
                  zIndex: 1,
                },
                "::-webkit-scrollbar-track": {
                  background: "#7a7f9d",
                },
                "::-webkit-scrollbar-thumb": {
                  background: "linear-gradient(to right, #000345, #0898D5)",
                },
                "@media (max-width:768px)": {
                  p: 0,
                  "::-webkit-scrollbar": {
                    width: 0,
                    zIndex: 1,
                  },
                },
              }}
            >
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
          </div>
        </ProSidebarProvider>
        <Footer />
      </ThemeProvider>
    </div>
  );
}

export default App;
