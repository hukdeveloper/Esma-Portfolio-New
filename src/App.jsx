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
              p={"1rem 1.5rem"}
              sx={{
                height: "100vh",
                overflowY: "scroll",
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
