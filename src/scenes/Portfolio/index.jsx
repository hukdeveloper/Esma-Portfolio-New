import { Box, ImageList, ImageListItem, Typography } from "@mui/material";

const itemData = [
  {
    img: "../../assets/l1.jpg",
    title: "Book Opening Ceremony",
    author:
      "Book completion and publication announcement... " +
      "Dear all," +
      "Back in 2019 I went to Hujj with my grandfather. I never thought of writing a book on this topic but this journey has left a deep impact on me as a person and as a traveler as well." +
      "After a couple of months, I started writing. It took more than 2 years, almost 1000 days. I spent many sleepless days and nights in which I was asking my self 'Is this really worth it'. The real struggle started after completing the book. It went through a long... long...  publishing process. Sometimes I thought 'ye mery bs ki bat hi nai thi' but thanks to Allah Almighty Who helped me to make it happen . People usually say dreams don't come true. I say they do, you just got to push hard enough and have faith. This is the reason I gave this title to my book. " +
      "خواب سے حقیقت تک" +
      "In this travelogue I tried to portray a journey to explore the spiritual significance of this sacred destination. Through vivid descriptions and thoughtful reflections, I tried to take the reader on a journey of discovery, sharing insights about the rich cultural and historical significance of the place, as well as the personal transformation experienced along the way." +
      "The most important character in this book is my grandfather, who left us a few months back. He was the person who took me there, who taught me everything. He was my partner, my spiritual guide. Though he is not here to read my words for him, I am glad that people will know him through this book. He must be happy in heaven." +
      "I would like to thank each and everyone who has helped me and supported me throughout this journey." +
      "I am indebted.",
  },
  {
    img: "../../assets/p2.jpg",
    title: "Book launch ceremony",
    author:
      "Book Launch Ceremony" +
      "We celebrate the launch of the highly anticipated book 'خواب سے حقیقت تک' under the auspices of the KIU Literary Society. We were honored to have the esteemed Vice Chancellor, Prof. Dr. Atta Ullah Shah as our chief guest, along with members of the Halqa-e-Arbab Zauq Gilgit, staff, and faculty of Karakorum International University." +
      "During his speech, Prof. Dr. Atta Ullah Shah highlighted the importance of books and how they play a vital role in shaping our society. He congratulated the author, Esma Ramzan, for her remarkable work and contributions to the literary world." +
      "We are thrilled to have published such an insightful and thought-provoking book, which explores the depths of our dreams and the impact they have on our daily lives. Congratulations to Esma Ramzan on this outstanding achievement, and we hope that readers everywhere will enjoy and benefit from this remarkable literary work.",
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
