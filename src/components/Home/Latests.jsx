import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import MainHeading from "../MainHeading";
import { IosShare } from "@mui/icons-material";

export default function Latests() {
  return (
    <Box mt={4}>
      <MainHeading title="My Latests" isNameTitle={false} />
      <Box
        display={"flex"}
        gap={2}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        mt={2}
      >
        <Card
          sx={{
            maxWidth: 345,
            bgcolor: "#F0F0F0",
            mt: "20px",
            "@media (max-width:768px)": {
              maxWidth: "100%",
            },
          }}
        >
          <CardMedia
            sx={{ height: 240 }}
            image="../../assets/l2.jpg"
            title="Khwab sy Khaqiqat Thk"
          />
          <CardContent
            sx={{
              padding: "5px",
            }}
          >
            <Chip
              label="Book Publication"
              color="secondary"
              variant="contained"
              sx={{
                padding: "10px",
                height: "20px",
              }}
            />
            <Typography variant="body1" fontWeight="bold" p="4px 0">
              Khwab sy Haqeeqat Tk
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                height: "200px",
                overflowY: "auto",
                "::-webkit-scrollbar": {
                  width: "5px",
                },
              }}
            >
              Book completion and publication announcement... Dear all, Back in
              2019 I went to Hujj with my grandfather. I never thought of
              writing a book on this topic but this journey has left a deep
              impact on me as a person and as a traveler as well. After a couple
              of months, I started writing. It took more than 2 years, almost
              1000 days. I spent many sleepless days and nights in which I was
              asking my self "Is this really worth it". The real struggle
              started after completing the book. It went through a long...
              long... publishing process. Sometimes I thought "ye mery bs ki bat
              hi nai thi" but thanks to Allah Almighty Who helped me to make it
              happen . People usually say dreams don't come true. I say they do,
              you just got to push hard enough and have faith. This is the
              reason I gave this title to my book. "خواب سے حقیقت تک" In this
              travelogue I tried to portray a journey to explore the spiritual
              significance of this sacred destination. Through vivid
              descriptions and thoughtful reflections, I tried to take the
              reader on a journey of discovery, sharing insights about the rich
              cultural and historical significance of the place, as well as the
              personal transformation experienced along the way. The most
              important character in this book is my grandfather, who left us a
              few months back. He was the person who took me there, who taught
              me everything. He was my partner, my spiritual guide. Though he is
              not here to read my words for him, I am glad that people will know
              him through this book. He must be happy in heaven. I would like to
              thank each and everyone who has helped me and supported me
              throughout this journey. I am indebted. All praise to
              Allah Almighty ❤
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" endIcon={<IosShare />}>
              <a
                href="https://m.facebook.com/story.php?story_fbid=pfbid0VyzqNGCpX92DKVpig7LPBEnMDpkJ2EWRMhyiHojyPyitaHnop6BTdgANCZozkBj7l&id=100083025865705&mibextid=Nif5oz"
                target="_black"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Visit Now
              </a>
            </Button>
          </CardActions>
        </Card>

        <Card
          sx={{
            maxWidth: 345,
            bgcolor: "#F0F0F0",
            mt: "20px",
            "@media (max-width:768px)": {
              maxWidth: "100%",
            },
          }}
        >
          <CardMedia
            sx={{ height: 240 }}
            image="../../assets/l1.jpg"
            title="Khwab sy Khaqiqat Thk"
          />
          <CardContent
            sx={{
              padding: "5px",
            }}
          >
            <Chip
              label="Book launch ceremony 
              "
              color="secondary"
              variant="contained"
              sx={{
                padding: "10px",
                height: "20px",
              }}
            />
            <Typography variant="body1" fontWeight="bold" p="4px 0">
              Khwab sy Haqqeqat Tk
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                height: "200px",
                overflowY: "auto",
                "::-webkit-scrollbar": {
                  width: "5px",
                },
              }}
            >
              We celebrate the launch of the highly anticipated book 'خواب سے
              حقیقت تک' under the auspices of the KIU Literary Society. We were
              honored to have the esteemed Vice Chancellor, Prof. Dr. Atta Ullah
              Shah as our chief guest, along with members of the Halqa-e-Arbab
              Zauq Gilgit, staff, and faculty of Karakorum International
              University. During his speech, Prof. Dr. Atta Ullah Shah
              highlighted the importance of books and how they play a vital role
              in shaping our society. He congratulated the author, Esma Ramzan,
              for her remarkable work and contributions to the literary world.
              We are thrilled to have published such an insightful and
              thought-provoking book, which explores the depths of our dreams
              and the impact they have on our daily lives. Congratulations to
              Esma Ramzan on this outstanding achievement, and we hope that
              readers everywhere will enjoy and benefit from this
              remarkable literary work.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" endIcon={<IosShare />}>
              <a
                href="https://kiuliterarysociety.com/khwab-sa-haqiqat-tak-from-dream-to-the-realization-book-launch-of-a-hajj-travelogue-by-esma-ramzaan/"
                target="_black"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Visit Now
              </a>
            </Button>
          </CardActions>
        </Card>
        <Card
          sx={{
            maxWidth: 345,
            bgcolor: "#F0F0F0",
            mt: "20px",
            "@media (max-width:768px)": {
              maxWidth: "100%",
            },
          }}
        >
          <CardMedia
            sx={{ height: 240 }}
            image="../../assets/l22.jpg"
            title="Khwab sy Khaqiqat Thk"
          />
          <CardContent
            sx={{
              padding: "5px",
            }}
          >
            <Chip
              label="Book launch ceremony in Lahore"
              color="secondary"
              variant="contained"
              sx={{
                padding: "10px",
                height: "20px",
              }}
            />
            <Typography variant="body1" fontWeight="bold" p="4px 0">
              Khwab sy Khaqiqat thak
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{
                height: "200px",
                overflowY: "scroll",
                "::-webkit-scrollbar": {
                  width: "5px",
                },
              }}
            >
              My loved ones organized a remarkable and unforgettable book launch
              event for me, which I am truly grateful for. Their encouraging
              words meant the world to me as I shared my writing journey. I
              expressed my heartfelt appreciation towards my family and friends
              for their unwavering support.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" endIcon={<IosShare />}>
              <a
                href="https://kiuliterarysociety.com/khwab-sa-haqiqat-tak-from-dream-to-the-realization-book-launch-of-a-hajj-travelogue-by-esma-ramzaan/"
                target="_black"
                style={{
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Visit Now
              </a>
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}
