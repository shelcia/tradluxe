import React from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import AboutBg from "../../assets/images/about-bg.webp";
import Logo from "../../assets/logo/logo.svg";
import AboutInfo from "../../assets/images/about-info.webp";
// import CustomTitle from "../../components/CustomTitle";
// import AboutProduct from "../../assets/images/about-product.webp";
import { CustomAboutDivider } from "../../components/CustomDividers";
import CustomToolbar from "../../components/CustomToolbar";
import MissionImg from "../../assets/icons/mission.svg";
import ValuesImg from "../../assets/icons/values.svg";
import BrandsImg from "../../assets/images/brands.svg";

const AboutPage = () => {
  const tabMatches = useMediaQuery("(min-width:900px)");
  return (
    <>
      <CustomToolbar />
      <Box sx={{ mt: 5, position: "relative" }} className="page-fade">
        {tabMatches && (
          <>
            <img
              src={AboutBg}
              width={"100%"}
              alt="about-tradluxe"
              loading="lazy"
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                gap: 3,
                alignItems: "center",
              }}
            >
              {tabMatches ? (
                <img
                  src={Logo}
                  alt="Tradluxe Logo"
                  height={144}
                  loading="lazy"
                />
              ) : (
                <img
                  src={Logo}
                  alt="Tradluxe Logo"
                  height={24}
                  loading="lazy"
                />
              )}
              <Typography
                sx={{
                  color: "#0F0F0F",
                  fontFamily: '"Playfair Display Variable", serif',
                  fontSize: tabMatches ? "7rem" : "1.5rem",
                  fontWeight: 500,
                  lineHeight: "120%",
                }}
                variant="h1"
                component="h4"
              >
                Tradluxe
              </Typography>
            </Box>
          </>
        )}
      </Box>
      <Container sx={{ minHeight: "60vh" }} data-aos="fade-up">
        <Grid container spacing={6} sx={{ my: 4 }}>
          <Grid
            item
            xs={12}
            md={6}
            // sx={{ alignItems: "center", display: "flex" }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.3rem" },
                lineHeight: "150%",
              }}
            >
              TradLuxe is a dynamic distribution company established in
              Singapore in 2020 by a group of passionate individuals. Our
              primary objective is to bring premium products to the discerning
              consumers of Singapore, offering them a curated selection through
              our website, various online marketplaces and a network of
              speciality, handpicked retail channel partners.
            </Typography>
          </Grid>
          <Grid item xs={6} md={6} sx={{ width: "100%" }}>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              {tabMatches ? (
                <img
                  src={AboutInfo}
                  alt="about us background"
                  width="100%"
                  height="auto"
                  loading="lazy"
                />
              ) : (
                <img
                  src={AboutInfo}
                  alt="about us background"
                  width="200%"
                  height="auto"
                  loading="lazy"
                />
              )}
            </Box>
          </Grid>
        </Grid>
        <CustomAboutDivider />
        <Grid
          container
          spacing={6}
          sx={{ my: { xs: 2, md: 8 }, py: { xs: 0, md: 4 } }}
          data-aos="fade-up"
        >
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                color: "#424242",
                fontFamily: '"Playfair Display Variable", serif',
                fontSize: "4rem",
                fontWeight: 800,
                lineHeight: "150%",
              }}
            >
              55 Years
            </Typography>
            <Typography
              sx={{
                color: "#424242",
                fontFamily: '"Playfair Display Variable", serif',
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
              At TradLuxe, we take pride in our dedicated team of professionals,
              boasting over 55 years of combined experience in the industry. We
              excel in every aspect of the business, from strategic planning and
              execution to marketing strategies and the cultivation of valuable
              partnerships. Our team&apos;s passion for what we do is unrivalled
              and we are committed to sharing our expertise in the product
              categories we serve, with our customers.
            </Typography>
          </Grid>
        </Grid>
        <CustomAboutDivider />
        <Grid container spacing={6} sx={{ my: 4 }}>
          <Grid
            item
            xs={12}
            md={6}
            // sx={{ alignItems: "center", display: "flex" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <img
                src={MissionImg}
                alt="Mission Icon"
                loading="lazy"
                height={"36px"}
                width={"auto"}
              />
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "3.25rem" },
                  lineHeight: "110%",
                  color: "#0F0F0F",
                  fontFamily: "'Playfair Display Variable', serif",
                }}
              >
                Our Mission
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.3rem" },
                  lineHeight: "150%",
                  mt: "16px",
                }}
              >
                Our mission is to enrich the lives of consumers in Singapore by
                providing them with access to the finest and most sought-after
                food and beverage products. We aim to deliver exceptional value,
                quality, and convenience through our distribution channels,
                backed by our expertise and commitment to excellence.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                gap: "16px",
              }}
            >
              <img
                src={ValuesImg}
                alt="Values Icon"
                loading="lazy"
                height={"36px"}
                width={"auto"}
              />
              <Typography
                sx={{
                  fontSize: { xs: "1.5rem", md: "3.25rem" },
                  lineHeight: "110%",
                  color: "#0F0F0F",
                  fontFamily: "'Playfair Display Variable', serif",
                }}
              >
                Our Core Values
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "1.3rem" },
                  lineHeight: "150%",
                  mt: "16px",
                }}
              >
                TradLuxe&apos;s core values revolve around integrity, quality,
                and customer satisfaction. We strive to maintain the highest
                ethical standards in our operations, deliver products of
                superior quality, and ensure our customers&apos; needs are met
                beyond their expectations.
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <CustomAboutDivider />
        <Grid container spacing={6} sx={{ my: 4 }}>
          <Grid item xs={12} md={6} sx={{ width: "100%" }}>
            <Box sx={{ width: "100%", textAlign: "center" }}>
              <img
                src={BrandsImg}
                alt="about us background"
                width="auto"
                height="300px"
                loading="lazy"
                style={{ maxWidth: "100%" }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontSize: { xs: "1rem", md: "1.3rem" },
                lineHeight: "150%",
              }}
            >
              TradLuxe is a dynamic distribution company established in
              Singapore in 2020 by a group of passionate individuals. Our
              primary objective is to bring premium products to the discerning
              consumers of Singapore, offering them a curated selection through
              our website, various online marketplaces and a network of
              speciality, handpicked retail channel partners.
            </Typography>
          </Grid>
        </Grid>
        <CustomAboutDivider />
        <Typography
          sx={{
            color: "#000",
            fontFamily: "'Playfair Display Variable', serif",
            fontSize: tabMatches ? "2rem" : "1rem",
            lineHeight: "120%",
            my: 6,
          }}
        >
          TradLuxe is dedicated to redefining the distribution of premium
          products in Singapore and is committed to building strong connections
          with both customers and partners. We look forward to serving the needs
          of consumers and contributing to the growth of our industry.
        </Typography>
        <CustomAboutDivider />
        {/* <Box sx={{ pt: 4 }}>
       <CustomAboutDivider />
        <Box sx={{ pt: 4 }}>
          <CustomTitle subtitle="Find us" title="Our Retail Presence" />
        </Box> */}
      </Container>
      {/* <Box
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
        data-aos="fade-up"
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
              gridTemplateColumns: tabMatches
                ? "repeat(7, 400px)"
                : "repeat(7, 300px)",
              gap: 3,
            }}
          >
            <img
              src={AboutProduct}
              alt="About Product"
              loading="lazy"
              style={{ width: "100%" }}
            />
            <img
              src={AboutProduct}
              alt="About Product"
              loading="lazy"
              style={{ width: "100%" }}
            />
            <img
              src={AboutProduct}
              alt="About Product"
              loading="lazy"
              style={{ width: "100%" }}
            />
            <img
              src={AboutProduct}
              alt="About Product"
              loading="lazy"
              style={{ width: "100%" }}
            />
          </Container>
        </Box>
      </Box>  */}
    </>
  );
};

export default AboutPage;
