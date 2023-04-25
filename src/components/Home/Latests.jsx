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
      >
        <Card
          sx={{
            maxWidth: 345,
            bgcolor: "#F0F0F0",
            mt: "20px",
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
            <Typography variant="body2" color="text.secondary">
              Quality education refers to the provision of education that is
              effective and efficient in imparting knowledge, skills and values
              to students. It is characterized by an emphasis on
              student-centered learning, critical thinking, problem-solving and
              creativity.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" endIcon={<IosShare />}>
              Visit Now
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, bgcolor: "#F0F0F0", mt: "20px" }}>
          <CardMedia
            sx={{ height: 140 }}
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
            <Typography variant="body2" color="text.secondary">
              Quality education refers to the provision of education that is
              effective and efficient in imparting knowledge, skills and values
              to students. It is characterized by an emphasis on
              student-centered learning, critical thinking, problem-solving and
              creativity.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" endIcon={<IosShare />}>
              Visit Now
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345, bgcolor: "#F0F0F0", mt: "20px" }}>
          <CardMedia
            sx={{ height: 140 }}
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
            <Typography variant="body2" color="text.secondary">
              Quality education refers to the provision of education that is
              effective and efficient in imparting knowledge, skills and values
              to students. It is characterized by an emphasis on
              student-centered learning, critical thinking, problem-solving and
              creativity.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" variant="outlined" endIcon={<IosShare />}>
              Visit Now
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Box>
  );
}