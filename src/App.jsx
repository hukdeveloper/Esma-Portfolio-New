import { Box, createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import {
  createBrowserRouter,
  Route,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./scenes/Home";
import Portfolio from "./scenes/Portfolio";

import { ProSidebarProvider } from "react-pro-sidebar";
import Sidebar from "./components/Sidebar";

function App() {
  const theme = createTheme(themeSettings);
  return (
    <div className="app">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ProSidebarProvider>
          <Sidebar />
          <Box
            p={"1rem 1.5rem"}
            sx={{
              height: "100vh",
              overflowY: "scroll",
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
            </Routes>
          </Box>
        </ProSidebarProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
