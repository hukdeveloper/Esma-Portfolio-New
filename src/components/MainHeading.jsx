import { Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function MainHeading({ title, isNameTitle }) {
  return (
    <Typography
      variant="h4"
      fontWeight={"bold"}
      className={
        isNameTitle ? "mainHeading-Styling" : "mainHeading-Styling-General"
      }
      sx={{
        "@media (max-width:389px)": {
          fontSize: "26px",
        },
      }}
    >
      {title}
    </Typography>
  );
}
