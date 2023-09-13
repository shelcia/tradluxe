import React, { useContext } from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import BrandContainer from "./components/BrandContainer";
import { BrandsContext } from "../../context/BrandsContext";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [brands] = useContext(BrandsContext);

  return (
    <>
      <div className="parallax">
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
      </div>
      <Container sx={{ height: "100%" }}>
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
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default HomePage;
