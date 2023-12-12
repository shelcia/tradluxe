import React, { useContext } from "react";
import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { BrandsContext } from "../../context/BrandsContext";
import BrandContainer from "./components/BrandContainer";
import AboutBg from "../../assets/images/about-bg.webp";
import CustomToolbar from "../../components/CustomToolbar";

const ProductPage = () => {
  const [brands] = useContext(BrandsContext);
  const tabMatches = useMediaQuery("(min-width:900px)");
  return (
    <>
      <CustomToolbar />
      <Box sx={{ mt: 5, position: "relative" }} className="page-fade">
        <img src={AboutBg} width={"100%"} loading="lazy" />
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
          <Typography
            sx={{
              color: "#0F0F0F",
              fontFamily: '"Playfair Display Variable", serif',
              // fontSize: tabMatches ? "7rem" : "1.5rem",
              fontSize: tabMatches ? "4.5rem" : "1.5rem",
              fontWeight: 500,
              lineHeight: "120%",
            }}
            variant="h1"
            component="h4"
          >
            Our Products
          </Typography>
        </Box>
      </Box>

      <Container className="page-fade">
        <Grid container spacing={1.5} sx={{ justifyContent: "center" }}>
          {brands?.map(
            (brand, idx) =>
              brand.isLaunched && (
                <Grid item xs={12} md={4} key={idx} sx={{ overflow: "hidden" }}>
                  <BrandContainer
                    img={brand.image}
                    logo={brand.logo}
                    name={brand.name}
                    link={brand.link}
                  />
                </Grid>
              )
          )}
        </Grid>
      </Container>
    </>
  );
};

export default ProductPage;
