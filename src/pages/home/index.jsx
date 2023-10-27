import React, { useContext } from "react";
import {
  Box,
  Container,
  IconButton,
  Typography,
  useMediaQuery,
} from "@mui/material";
import BrandContainer from "./components/BrandContainer";
import FindUs from "./components/FindUs";
import { BrandsContext } from "../../context/BrandsContext";
// import { Link } from "react-router-dom";
import HeaderImg from "../../assets/images/header-img.webp";
import ArrowHead from "../../assets/icons/arrow-head.svg";
import TradLuxe from "../../assets/logo/tradlogo.svg";
import CustomTitle from "../../components/CustomTitle";

const HomePage = () => {
  const [brands] = useContext(BrandsContext);
  const tabMatches = useMediaQuery("(min-width:900px)");

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: "100vh",
          overflowX: "hidden",
          position: "relative",
        }}
        className="page-fade"
      >
        <img
          src={HeaderImg}
          alt="Header Image"
          style={{
            width: "100%",
            maxHeight: tabMatches ? "100%" : "600px",
            objectFit: "cover",
            height: tabMatches ? "100%" : "600px",
          }}
          loading="lazy"
        />
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            left: "50%",
            transform: "translateX(-50%)",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontFamily: "'Playfair Display', sans-serif",
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "130%",
              textTransform: "capitalize",
              color: "#F0F0F0",
            }}
          >
            Scroll to see more
          </Typography>
          <IconButton
            onClick={() => {
              const section = document.getElementById("brands");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <img src={ArrowHead} alt="arrow-head" loading="lazy" />
          </IconButton>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          height: "100%",
          my: 8,
        }}
      >
        <img
          src={TradLuxe}
          alt="TradLuxe Image"
          style={{ maxWidth: "100%" }}
          loading="lazy"
        />
      </Box>

      <Box sx={{ my: 5 }}>
        <CustomTitle subtitle="Discover" title="Our Brands" />
      </Box>

      <Box
        sx={{
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            right: 0,
            width: tabMatches ? "15%" : "20%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, #F0F0F0 90%, #F0F0F0 100%)",
            // background: tabMatches
            //   ? "linear-gradient(90deg, transparent, #F0F0F0 80%, #F0F0F0 100%)"
            //   : "linear-gradient(90deg, transparent, #F0F0F0 140%)",
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
            {brands.map((brand, idx) => (
              <Box
                key={idx}
                sx={{ overflow: "hidden", mt: idx % 2 === 0 ? 0 : 5 }}
              >
                <BrandContainer
                  img={brand.image}
                  logo={brand.logo}
                  flag={brand.flag}
                  subline={brand.subline}
                  content={brand.content}
                  name={brand.name}
                  idx={idx}
                  link={brand.link}
                />
              </Box>
            ))}

            <Box sx={{ alignItems: "center", height: "100%", display: "flex" }}>
              <Typography
                component="h4"
                sx={{
                  color: "#595959",
                  fontFamily: "'Playfair Display', sans-serif",
                  fontSize: "64px",
                  fontWeight: 400,
                  lineHeight: "100%",
                }}
              >
                Coming Soon...
              </Typography>
            </Box>
          </Container>
        </Box>
      </Box>

      <Container sx={{ height: "100%" }}>
        <CustomTitle subtitle="Find us" title="Where to find us?" />
      </Container>
      <FindUs />
      <Container>{/* <FindUs /> */}</Container>
    </>
  );
};

export default HomePage;
