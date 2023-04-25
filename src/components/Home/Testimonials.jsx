import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Paper,
  Typography,
} from "@mui/material";
import MainHeading from "../MainHeading";
import { EffectCreative, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { FormatQuote, NearMe } from "@mui/icons-material";

export default function Testimonials() {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Box mt={4}>
      <MainHeading title="Valuable Reviews" isNameTitle={false} />
      <Swiper
        pagination={pagination}
        modules={[Pagination, EffectCreative]}
        className="mySwiper"
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
      >
        <SwiperSlide>
          <Card
            sx={{
              width: "100%",
              height: 400,
              display: "flex",
              justifyContent: "flex-start",
              "@media(max-width:580px)": {
                flexDirection: "column",
                height: "auto",
              },
            }}
          >
            <Paper
              sx={{
                p: 2,
                width: 200,
                background:
                  "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)",
                borderRadius: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "@media(max-width:580px)": {
                  width: "auto",
                },
              }}
            >
              <CardMedia
                image="../../assets/t1.jpg"
                sx={{ height: 200, width: 200 }}
              />
              <Typography
                variant="body1"
                fontWeight="bold"
                p="8px 0"
                color="#fff"
              >
                Jasir Shahbaz
              </Typography>
              <Typography variant="body2" fontSize={12} color={"#F0F0F0"}>
                Instructor at LUMS, Founder of Qadam Community Trust
              </Typography>
              <CardActions
                sx={{
                  marginTop: "auto",
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<NearMe />}
                  sx={{
                    width: 200,
                  }}
                >
                  <a
                    href="https://qadamtrust.com/"
                    target="_black"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "9px",
                      color: "#fff",
                    }}
                  >
                    More About
                  </a>
                </Button>
              </CardActions>
            </Paper>
            <CardContent
              sx={{
                overflowY: "scroll",
                "@media(max-width:580px)": {
                  overflow: "hidden",
                },
              }}
            >
              <Typography
                variant="body2"
                p="8px 0"
                textAlign={"left"}
                color="text.secondary"
                fontSize={17}
              >
                <FormatQuote
                  sx={{
                    color: "#9B4B4B",
                    fontSize: "45px",
                  }}
                />
                <br />
                Esma has worked at Qadam for the last 8 years. She has immensely
                contributed to the program and was one of the leading partners
                in setting up the school. Her focus has been in designing
                curriculum, recruiting teachers, training teachers and planning
                activities for holistic learning of students. She has also
                played a huge role in community engagement and holding
                consultations with parents of students, to bring them on board.
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            sx={{
              width: "100%",
              height: 400,
              display: "flex",
              justifyContent: "flex-start",
              "@media(max-width:580px)": {
                flexDirection: "column",
                height: "auto",
              },
            }}
          >
            <Paper
              sx={{
                p: 2,
                width: 200,
                background:
                  "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)",
                borderRadius: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "@media(max-width:580px)": {
                  width: "auto",
                },
              }}
            >
              <CardMedia
                image="../../assets/t2.jpg"
                sx={{ height: 200, width: 200 }}
              />
              <Typography
                variant="body1"
                fontWeight="bold"
                p="8px 0"
                color="#fff"
              >
                Jasir Shahbaz
              </Typography>
              <Typography variant="body2" fontSize={12} color={"#F0F0F0"}>
                Founder of Little warriors
              </Typography>
              <CardActions
                sx={{
                  marginTop: "auto",
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<NearMe />}
                  sx={{
                    width: 200,
                  }}
                >
                  <a
                    href="https://littlewarriorsnevergiveup.wordpress.com/"
                    target="_black"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "9px",
                      color: "#fff",
                    }}
                  >
                    More About
                  </a>
                </Button>
              </CardActions>
            </Paper>
            <CardContent
              sx={{
                overflowY: "scroll",
                "@media(max-width:580px)": {
                  overflow: "hidden",
                },
              }}
            >
              <Typography
                variant="body2"
                p="8px 0"
                textAlign={"left"}
                color="text.secondary"
                fontSize={17}
              >
                <FormatQuote
                  sx={{
                    color: "#9B4B4B",
                    fontSize: "45px",
                  }}
                />
                <br />
                Esma has been working with us since 2017, She joined as an
                Ambassador and become CEO of Punjab because of her passion and
                love towards our little warriors. I would like to express my
                deep appreciation and admiration for her selfless dedication to
                serving childhood cancer patients. Her commitment to making a
                positive difference in the lives of these children and their
                families is truly inspiring. I admired her unwavering commitment
                to making the world a better place for those in need. Her
                efforts are truly making a difference and she is a shining
                example of the very best in humanity.
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
        <SwiperSlide>
          <Card
            sx={{
              width: "100%",
              height: 400,
              display: "flex",
              justifyContent: "flex-start",
              "@media(max-width:580px)": {
                flexDirection: "column",
                height: "auto",
              },
            }}
          >
            <Paper
              sx={{
                p: 2,
                width: 200,
                background:
                  "radial-gradient(circle at 12.3% 19.3%, rgb(85, 88, 218) 0%, rgb(95, 209, 249) 100.2%)",
                borderRadius: "0",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                "@media(max-width:580px)": {
                  width: "auto",
                },
              }}
            >
              <CardMedia
                // image="../../assets/t1.jpg"
                sx={{ height: 200, width: 200 }}
              />
              <Typography
                variant="body1"
                fontWeight="bold"
                p="8px 0"
                color="#fff"
              >
                Dr. Shamim Ara Shams
              </Typography>
              <Typography variant="body2" fontSize={12} color={"#F0F0F0"}>
                Head of the Department of Linguistics and Literature at
                Karakorum International University.
              </Typography>
              <CardActions
                sx={{
                  marginTop: "auto",
                }}
              >
                <Button
                  size="small"
                  variant="contained"
                  endIcon={<NearMe />}
                  sx={{
                    width: 200,
                  }}
                >
                  <a
                    href="https://www.kiu.edu.pk/department/department-of-modern-languages"
                    target="_black"
                    style={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      textAlign: "center",
                      fontSize: "9px",
                      color: "#fff",
                    }}
                  >
                    More About
                  </a>
                </Button>
              </CardActions>
            </Paper>
            <CardContent
              sx={{
                overflowY: "scroll",
                "@media(max-width:580px)": {
                  overflow: "hidden",
                },
              }}
            >
              <Typography
                variant="body2"
                p="8px 0"
                textAlign={"left"}
                color="text.secondary"
                fontSize={17}
              >
                <FormatQuote
                  sx={{
                    color: "#9B4B4B",
                    fontSize: "45px",
                  }}
                />
                <br />
                Her expertise in the field of linguistics is truly outstanding,
                and her research on the relationship between language and
                society has made significant contributions to our understanding
                of this important area of inquiry. Her work is a testament to
                the importance of linguistic inquiry and to the value of
                pursuing knowledge for its own sake. Her passion for teaching
                and her dedication to her success is truly admirable. Her
                students consistently praise her ability to challenge them while
                also providing the support and guidance that they need to thrive
                and I look forward to seeing all of the great things that you
                will accomplish in the future.
              </Typography>
            </CardContent>
          </Card>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
