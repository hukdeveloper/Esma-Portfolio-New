import { Avatar, Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import MainHeading from "../MainHeading";
import { School, Telegram } from "@mui/icons-material";

export default function Profile() {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        sx={{
          width: "100%",
          height: "50%",
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        <Grid
          md={6.5}
          lg={5.5}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <MainHeading title="MS. ESMA RAMZAN" isNameTitle={true} />
          <Typography
            variant="subtitle1"
            fontSize={"15px"}
            fontWeight={"bold"}
            color="#ffda85"
            sx={{
              background: "linear-gradient(to right, #000345, #0898D5)",
              p: "0.2rem 0.6rem",
            }}
          >
            Lecturer
          </Typography>
          <Typography
            variant="body1"
            fontSize={"14px"}
            fontWeight={"bold"}
            color={theme.palette.grey[800]}
            mt={2}
            sx={{
              boxShadow:
                "rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              p: "0.7rem",
              backgroundColor: "#f0f0f0",
            }}
          >
            I am Esma Ramzan, an English linguistics lecturer at Karakorum
            International University Gilgit Baltistan. I completed my M. Phil in
            Applied Linguistics at the University of Management and Technology
            in 2019 and have since been involved in research and the
            relationship between language and society. My research interests
            include sociolinguistics, discourse analysis, and the study of
            language variation and change. When I'm not teaching or researching,
            you can often find me writing poetry and reading a good book, hiking
            in the nearby mountains, and exploring the hidden beauty of northern
            Pakistan and its diverse culture.
          </Typography>
          <Box
            mt={2}
            display={"flex"}
            gap={2}
            width={"100%"}
            sx={{
              "@media (max-width:373px)": {
                flexDirection: "column",
              },
            }}
          >
            <Button
              startIcon={<Telegram />}
              variant="contained"
              sx={{
                fontSize: "13px",
                fontWeight: "bold",
                width: "100%",
                textTransform: "capitalize",
                backgroundColor: "#070812",
              }}
            >
              Let's Connect
            </Button>
            <Button
              sx={{
                fontSize: "13px",
                fontWeight: "bold",
                width: "100%",
                textTransform: "capitalize",
                backgroundColor: "#3A2A04",
              }}
              color="success"
              variant="contained"
              startIcon={<School />}
            >
              View Resume
            </Button>
          </Box>
        </Grid>
        <Grid md={5} lg={6}>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            sx={{
              width: "100%",
              borderRadius: "5px",
              height: "100%",
            }}
          >
            <Avatar
              src="../../assets/esma2.jpg"
              variant="square"
              sizes="350px"
              sx={{
                width: "100%",
                // borderRadius: "5px",
                height: "100%",
                backgroundSize: "cover",
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
