import { Box, Button, FormControl, TextField, Typography } from "@mui/material";

export default function Contact() {
  const currencies = [
    {
      value: "Linguistics",
      label: "linguistics",
    },
    {
      value: "Literarture",
      label: "literarture",
    },
    {
      value: "Others",
      label: "others",
    },
  ];

  return (
    <Box
      p={"1.5rem 1.5rem"}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        height: "auto",
        width: "100%",

        overflowY: "auto",
        "@media (max-width:1068px)": {
          p: "1.5rem 0.1rem",
        },
      }}
    >
      <Box
        sx={{
          width: "60%",

          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          //   gap: "10px",
          backgroundColor: "#fff",
          "@media (max-width:1200px)": {
            width: "80%",
          },
          "@media (max-width:900px)": {
            width: "90%",
          },
        }}
      >
        <Typography
          variant="h3"
          fontWeight={"bold"}
          width={"100%"}
          fontSize={32}
          color={"#fff"}
          textAlign={"center"}
          align={"center"}
          sx={{
            background: "linear-gradient(to right, #000345, #0898d5)",
            height: "100px",
            lineHeight: "100px",
          }}
        >
          Contact
        </Typography>

        <FormControl
          sx={{
            width: "100%",
          }}
        >
          <TextField id="filled-basic" label="Name" variant="filled" required />
          <TextField
            id="filled-basic"
            label="email"
            variant="filled"
            required
          />
          <TextField
            id="filled-select-currency-native"
            select
            label="Topic"
            defaultValue="linguistics"
            SelectProps={{
              native: true,
            }}
            variant="filled"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>
          <TextField
            id="standard-multiline-static"
            label="Message"
            multiline
            rows={8}
            variant="filled"
            required
          />
          <Box
            sx={{
              background: "linear-gradient(to right, #000345, #0898d5)",
              height: "100px",
              lineHeight: "100px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button size="large" type="submit" variant="contained">
              Submit{" "}
            </Button>
          </Box>
        </FormControl>
      </Box>
    </Box>
  );
}
