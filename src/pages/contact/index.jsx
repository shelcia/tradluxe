import { Box, Container, Typography } from "@mui/material";
import React from "react";

const ContactPage = () => {
  return (
    <Container>
      <Box>
        <Typography
          component="h1"
          variant="h2"
          sx={{
            fontSize: "3.5rem",
            fontWeight: 700,
            my: 3,
          }}
        >
          Contact Us
        </Typography>
      </Box>
    </Container>
  );
};

export default ContactPage;
