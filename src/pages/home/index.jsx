import React, { useContext } from "react";
import { Box, Container, Grid } from "@mui/material";
import BrandContainer from "./components/BrandContainer";
import { BrandsContext } from "../../context/BrandsContext";
// import { Link } from "react-router-dom";
import Img1 from "../../assets/header-img.png";
import CustomTitle from "../../components/CustomTitle";

const HomePage = () => {
  const [brands] = useContext(BrandsContext);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center", height: "100%" }}>
        <img src={Img1} alt="header image" style={{ maxWidth: "100%" }} />
      </Box>
      {/* <div className="parallax">
        <Box
          sx={{ textAlign: "center", height: "100%", width: "100%" }}
          className="parallax--text-container"
        >
          <Typography
            component="h1"
            variant="h2"
            sx={{
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              fontSize: "3.5rem",
              fontWeight: 700,
              color: "#fff",
            }}
          >
            Taste the World&apos;s Finest Delights
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Playfair Display",
              fontStyle: "italic",
              fontSize: "2.25rem",
              fontWeight: 500,
              lineHeight: "150%",
              color: "#fff",
            }}
          >
            from the comfort of your home
          </Typography>
          <Box
            sx={{
              display: "flex",
              gap: "0.375rem",
              justifyContent: "center",
              marginTop: "2.35rem",
              flexDirection: { xs: "column", sm: "row" },
            }}
          >
            <Link to="/products">
              <Button variant="contained" color="warning">
                Explore now
              </Button>
            </Link>
            <Link to="/contact-us">
              <Button
                variant="outlined"
                color="warning"
                sx={{ color: "#FFE255" }}
              >
                contact Us
              </Button>
            </Link>
          </Box>
        </Box>
      </div> */}
      <Container sx={{ height: "100%" }}>
        <CustomTitle subtitle="Discover" title="Our Brands" />
        <Grid container spacing={2}>
          {brands.map((brand, idx) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              key={idx}
              sx={{ overflow: "hidden" }}
            >
              <BrandContainer
                img={brand.image}
                logo={brand.logo}
                flag={brand.flag}
                subline={brand.subline}
                content={brand.content}
                name={brand.name}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container sx={{ height: "100%" }}>
        <CustomTitle subtitle="Find us" title="Where to find us?" />
      </Container>
    </>
  );
};

export default HomePage;
