import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import { CustomTextField } from "../../components/CustomTextField";
import ContactBg from "../../assets/images/contact.png";
import CallIcon from "../../assets/icons/phone.svg";
import MailIcon from "../../assets/icons/mail.svg";

const ContactPage = () => {
  return (
    <>
      <Toolbar sx={{ mt: 4 }} />
      <Container className="page-fade">
        <Box data-aos="fade-up">
          <Box sx={{ my: 8 }}>
            <Card>
              <CardContent>
                <Typography
                  sx={{
                    color: "#5B5B5B",
                    fontFamily: "Playfair Display",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    lineHeight: "2.0625rem",
                  }}
                >
                  Feel free to get in touch with us
                </Typography>
                <Grid container spacing={5} sx={{ mt: 0.5 }}>
                  <ContactCard
                    icon={CallIcon}
                    title="Call Us"
                    href="tel"
                    content="+6589446568"
                  />
                  <ContactCard
                    icon={MailIcon}
                    title="Email Us"
                    href="mailto"
                    content="info@tradluxe.com"
                  />{" "}
                </Grid>
              </CardContent>
            </Card>
          </Box>
          <Grid container spacing={6} data-aos="fade-up">
            <Grid item xs={12} md={6}>
              <img
                src={ContactBg}
                alt="Contact Background"
                width="100%"
                height="auto"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Card
                sx={{
                  background: "transparent",
                  borderRadius: 2,
                  width: { xs: "100%" },
                  p: { xs: 0, md: 3 },
                }}
              >
                <CardContent>
                  <Box
                    component={"form"}
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <Typography
                      component="h1"
                      variant="h2"
                      sx={{
                        fontSize: "2rem",
                        fontWeight: 600,
                        my: 3,
                        color: "#070707",
                        lineHeight: "2.0625rem",
                        fontFamily: "Playfair Display",
                      }}
                    >
                      Get in Touch
                    </Typography>
                    <CustomTextField
                      label="Name"
                      size="small"
                      color="secondary"
                    />
                    <CustomTextField
                      label="Email"
                      size="small"
                      color="secondary"
                    />
                    <CustomTextField
                      label="Message"
                      size="small"
                      color="secondary"
                      multiline
                      rows={4}
                    />
                    <Box sx={{ textAlign: "right" }}>
                      <Button color="warning" variant="contained">
                        Submit
                      </Button>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ContactPage;

// eslint-disable-next-line react/prop-types
const ContactCard = ({ icon, title = "", href = "", content = "" }) => {
  return (
    <Grid item xs={12} md={6}>
      <Card sx={{ borderRadius: "0.9375rem", background: "#F3F3F3" }}>
        <CardContent sx={{ textAlign: "center" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 1,
            }}
          >
            <img src={icon} alt="call icon" />
            <Typography
              sx={{
                color: "#1A191A",
                fontFamily: "Playfair Display",
                fontSize: "1.5rem",
                fontWeight: 500,
                lineHeight: "2rem",
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography
            sx={{
              color: "#1A191A",
              fontSize: "1.25rem",
              fontWeight: 400,
              lineHeight: "150%",
              textDecoration: "underline",
              mt: 1,
            }}
          >
            <a href={`${href}:${content}`}>{content}</a>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
