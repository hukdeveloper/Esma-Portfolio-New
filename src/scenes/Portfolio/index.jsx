import {
  Box,
  ImageList,
  ImageListItem,
  ImageListItemBar,
  Typography,
} from "@mui/material";
import React from "react";

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Book Opening Ceremony",
    author:
      "The tradition of recording the experience of passing through any spiritual or religious journey is not new. Geoffrey Chaucer, the father of English, has been famous for his Canterbury Tales and its prologue.",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Volunteer",
    author: "Working at qadam trust......",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];

export default function Portfolio() {
  return (
    <Box
      p={"1.5rem 1.5rem"}
      sx={{
        height: "auto",
        overflowY: "auto",
        "@media (max-width:1068px)": {
          p: "1.5rem 0.1rem",
        },
      }}
    >
      <ImageList
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {itemData.map((item) => (
          <ImageListItem key={item.img} sx={{ width: 500, height: 500, p: 2 }}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                backgroundColor: "#fff",
                overflowY: "auto",
                height: "200px",
                p: "0.5rem 1rem",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            >
              <b>{item.title}</b>
              <p> {item.author}</p>
            </Typography>
            {/* <ImageListItemBar
              title={item.title}
              subtitle={
                <p
                  style={{
                    lineBreak: "auto",
                    height: "100% !important",
                  }}
                >
                  by: {item.author}
                </p>
              }
              position="below"
              sx={{
                backgroundColor: "#fff",
                overflowY: "scroll",
                height: "200px",
                p: "0.5rem 1rem",
                boxShadow:
                  " rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px",
              }}
            /> */}
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
}
