import { Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

const HomePage = () => {
  return (
    <>
      {/* <CssBaseline /> */}
      <Toolbar />
      <Container>
        {/* <h1>Home Page</h1> */}
        <Box sx={{ textAlign: "center" }}>
          <Typography
            component="h1"
            variant="h3"
            sx={{ fontFamily: "Playfair Display", fontStyle: "italic" }}
          >
            Taste the World&apos;s Finest Delights
          </Typography>
        </Box>
      </Container>
      {/* <Box>
        <h1>Home Page</h1>
      </Box> */}
    </>
  );
};

export default HomePage;
