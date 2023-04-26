import { Box } from "@mui/material";
import { CVData } from "./CVData";
// import CV from "react-cv";
import ReactCV from "mark-react-cv";

export default function index() {
  return (
    <Box
      p={"1.5rem 1.5rem"}
      sx={{
        height: "auto",
        overflowY: "auto",
        "@media (max-width:1068px)": {
          p: "1.5rem 0.1rem",
        },
        "@media (max-width:575px)": {
          p: "0.1rem 0.1rem",
        },
      }}
    >
      <ReactCV {...CVData} />
    </Box>
  );
}
