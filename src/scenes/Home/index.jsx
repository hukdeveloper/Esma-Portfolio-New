import { Box } from "@mui/material";
import Profile from "../../components/Home/Profile";
import StatBoxes from "../../components/Home/StatBoxes";
import Latests from "../../components/Home/Latests";
import Testimonials from "../../components/Home/Testimonials";

export default function Home() {
  return (
    <Box
      p={"1.5rem 1.5rem"}
      sx={{
        width: "100%",
        height: "auto",
        display: "flex",
        overflowY: "auto",
        justifyContent: "space-between",
        flexDirection: "column",
        gap: "10px",
        "@media (max-width:1068px)": {
          p: "1.5rem 0.1rem",
        },
      }}
    >
      <Profile />
      <StatBoxes />
      <Latests />
      <Testimonials />
    </Box>
  );
}
