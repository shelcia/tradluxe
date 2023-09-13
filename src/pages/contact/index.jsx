import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from "@mui/material";
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

        <Card
          sx={{
            backdropFilter: "blur(16px) saturate(180%)",
            background: "rgba(255, 255, 255, 0.2)",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            borderRadius: 2,
            width: { xs: "100%", md: "50%" },
            p: 3,
            // marginLeft: "auto",
            // marginRight: "auto",
          }}
        >
          <CardContent>
            <Box
              component={"form"}
              sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            >
              <TextField label="Name" size="small" color="warning" />
              <TextField label="Email" size="small" color="warning" />
              <TextField label="Phone Number" size="small" color="warning" />
              <TextField label="Message" size="small" color="warning" />
              <Box>
                <Button color="warning" variant="contained">
                  Submit
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
};

export default ContactPage;
