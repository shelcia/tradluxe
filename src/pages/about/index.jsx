import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import AboutBg from "../../assets/images/about-bg.png";
import Logo from "../../assets/logo/logo.svg";
import AboutInfo from "../../assets/images/about-info.png";
import CustomTitle from "../../components/CustomTitle";
import AboutProduct from "../../assets/images/about-product.png";

const AboutPage = () => {
  const tabMatches = useMediaQuery("(min-width:900px)");
  return (
    <>
      <Toolbar sx={{ mt: 4 }} />
      <Box sx={{ mt: 5, position: "relative" }}>
        <img src={AboutBg} width={"100%"} />
        <Typography
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            color: "#0F0F0F",
            fontFamily: "Playfair Display",
            fontSize: tabMatches ? "7rem" : "1.5rem",
            fontWeight: 500,
            lineHeight: "120%",
          }}
          variant="h1"
          component="h4"
        >
          {tabMatches ? (
            <img src={Logo} alt="Tradluxe Logo" height={144} />
          ) : (
            <img src={Logo} alt="Tradluxe Logo" height={24} />
          )}
          {"   "}
          Tradluxe
        </Typography>
      </Box>
      <Container sx={{ minHeight: "60vh" }}>
        <Grid container spacing={6} sx={{ my: 4 }}>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.3rem" },
                lineHeight: "150%",
              }}
            >
              TradLuxe PTE LTD is a <b>distribution company</b> incorporated in
              Singapore in 2020. The company’s main focus is to introduce
              premium products to consumers in Singapore and to make them
              available through our website, various online marketplaces and
              select retail channel partners.
              <br />
              <br />
              We take immense pride in our carefully selected premium food, wine
              and personal care brands and products from across the globe which
              helps us and our retail partners provide a unique product offering
              to our clients and ensures customer satisfaction.
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} sx={{ width: "100%" }}>
            <Box sx={{ width: "100%" }}>
              <img
                src={AboutInfo}
                alt="about us background"
                width="100%"
                height="auto"
              />
            </Box>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "#B8B8B8" }} />
        <Grid
          container
          spacing={6}
          sx={{ my: { xs: 2, md: 8 }, py: { xs: 0, md: 4 } }}
        >
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: "#424242",
                fontFamily: "Playfair Display",
                fontSize: "4rem",
                fontWeight: 800,
                lineHeight: "150%",
              }}
            >
              50 Years
            </Typography>
            <Typography
              sx={{
                color: "#424242",
                fontFamily: "Playfair Display",
                fontSize: "2rem",
                fontWeight: 400,
                lineHeight: "178.5%",
              }}
            >
              of Industry Experience and Expertise
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.3rem" },
                lineHeight: "150%",
              }}
            >
              Our Team includes industry professionals with <b>Over 50 years</b>{" "}
              of combined experience and excel at planning, executing, setting
              marketing strategies and developing great partnerships. We are
              extremely passionate about what we do and strive to share
              ourexpertise in our product categories with our customers.
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ borderColor: "#B8B8B8" }} />
        <Box sx={{ pt: 4 }}>
          <CustomTitle subtitle="Find us" title="Our Retail Presence" />
        </Box>
      </Container>
      <Box
        sx={{
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "15%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, #F0F0F0 90%, #F0F0F0 100%)",
            pointerEvents: "none",
            zIndex: 1,
          },
          "&::before": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "15%",
            height: "100%",
            background:
              "linear-gradient(270deg, transparent, #F0F0F0 90%, #F0F0F0 100%)",
            pointerEvents: "none",
            zIndex: 1,
          },
        }}
      >
        <Box
          id="brands"
          sx={{
            display: "flex",
            justifyContent: "center",
            my: 8,
            overflowX: "scroll",
            pb: 3,
            position: "relative",
            width: "100%",
          }}
        >
          <Container
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 400px)",
              gap: 3,
            }}
          >
            <img src={AboutProduct} alt="About Product" />
            <img src={AboutProduct} alt="About Product" />
            <img src={AboutProduct} alt="About Product" />
            <img src={AboutProduct} alt="About Product" />
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default AboutPage;
