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
              Book Launch Ceremony We celebrate the launch of the highly
              anticipated book 'خواب سے حقیقت تک' under the auspices of the KIU
              Literary Society. We were honored to have the esteemed Vice
              Chancellor, Prof. Dr. Atta Ullah Shah as our chief guest, along
              with members of the Halqa-e-Arbab Zauq Gilgit, staff, and faculty
              of Karakorum International University. During his speech, Prof.
              Dr. Atta Ullah Shah highlighted the importance of books and how
              they play a vital role in shaping our society. He congratulated
              the author, Esma Ramzan, for her remarkable work and contributions
              to the literary world. We are thrilled to have published such an
              insightful and thought-provoking book, which explores the depths
              of our dreams and the impact they have on our daily lives.
              Congratulations to Esma Ramzan on this outstanding achievement,
              and we hope that readers everywhere will enjoy and benefit from
              this remarkable literary work.
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
            image="../../assets/l1.jpg"
            title="Khwab sy Khaqiqat Thk"
          />
          <CardContent
            sx={{
              padding: "5px",
            }}
          >
            <Chip
              label="Book"
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
              Quality education refers to the provision of education that is
              effective and efficient in imparting knowledge, skills and values
              to students. It is characterized by an emphasis on
              student-centered learning, critical thinking, problem-solving and
              creativity.
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
