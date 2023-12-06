import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
// import Topbar from "../../layout/components/Topbar";

const Error404 = () => {
  return (
    <>
      <Box sx={{ mt: 20, position: "relative" }} className="page-fade">
        <Container sx={{ minHeight: "50vh" }}>
          <Typography variant="h1">404 Error ! The link is broken</Typography>
          <Button variant="contained" color="warning" sx={{ mt: 4 }}>
            Go home
          </Button>
        </Container>
      </Box>
    </>
  );
};

export default Error404;
