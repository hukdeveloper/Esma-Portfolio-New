import { EmojiEvents, School, VolunteerActivism } from "@mui/icons-material";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useTheme } from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    // flexDirection: "column",
    flexWrap: "wrap",
    height: "auto",

    // backgroundColor: "grey",
    justifyContent: "space-between",
    "@media (max-width:1125px)": {
      justifyContent: "center",
    },
    "@media (max-width:442px)": {
      display: "grid",
      gridTemplateColumns: "auto auto",
      justifyContent: "center",
    },
  },
  elementRoot: {
    backgroundColor: "#F0F0F0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: "10px",
    alignItems: "center",
    padding: "1.5rem",
    border: "1.8vmin solid",
    width: "200px",
    borderImage: "linear-gradient(to right, #000345, #0898D5) 1",
    "& .MuiSvgIcon-root": {
      fontSize: "55px",
      padding: "0.5rem",
      borderRadius: "50%",
      color: "#001E15",
      boxShadow:
        "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      "@media (max-width:442px)": {
        fontSize: "35px",
        padding: "0.2rem",
      },
    },
    "@media (max-width:1200px)": {
      width: "180px",
    },
    "@media (max-width:442px)": {
      width: "100%",
      padding: "1rem",
    },
  },
  headingRoot: {
    fontWeight: "bold !important",
    fontSize: "16px !important",
    "@media (max-width:1200px)": {
      fontSize: "13px !important",
    },
    "@media (max-width:442px)": {
      fontSize: "10px !important",
    },
  },
}));

export default function StatBoxes() {
  const theme = useTheme();

  const style = useStyles(theme);
  return (
    <Box className={style.root} gap={2} mt={4}>
      <Box className={style.elementRoot}>
        <EmojiEvents />
        <Typography variant="h6" className={style.headingRoot}>
          Acedmic Expert
        </Typography>
      </Box>
      <Box className={style.elementRoot}>
        <VolunteerActivism />
        <Typography variant="h6" className={style.headingRoot}>
          Volunteer
        </Typography>
      </Box>
      <Box className={style.elementRoot}>
        <School />
        <Typography variant="h6" className={style.headingRoot}>
          100+ Projects
        </Typography>
      </Box>
      <Box className={style.elementRoot}>
        <EmojiEvents />
        <Typography variant="h6" className={style.headingRoot}>
          Acedmic Expert
        </Typography>
      </Box>
      <Box className={style.elementRoot}>
        <EmojiEvents />
        <Typography variant="h6" className={style.headingRoot}>
          Acedmic Expert
        </Typography>
      </Box>
    </Box>
  );
}
