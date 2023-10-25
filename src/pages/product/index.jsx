import {
  Box,
  Container,
  Grid,
  Link,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BrandsContext } from "../../context/BrandsContext";
import ProductsBreadCrumbs from "./components/BreadCrumbs";
import CustomToolbar from "../../components/CustomToolbar";

const Product = () => {
  const { id } = useParams();
  const [brands] = useContext(BrandsContext);

  const [brand, setBrand] = useState({
    bg: "",
    shorthand: "",
    products: [],
  });

  useEffect(() => {
    const reqBrand = brands.filter((itm) => itm.link === id);
    if (reqBrand?.[0]) {
      setBrand(reqBrand?.[0]);
    }
  }, [brands]);

  const tabMatches = useMediaQuery("(min-width:900px)");
  return (
    <>
      <CustomToolbar />
      <Box sx={{ mt: 5, position: "relative" }} className="page-fade">
        {brand.bg !== "" && <img src={brand.bg} width={"100%"} />}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            display: "flex",
            alignItems: "center",
            background: "rgba(255, 255, 255, 0.70)",
            backdropFilter: "blur(6px)",
            padding: tabMatches ? "1rem 1.25rem" : "0.5rem 0.75rem",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              color: "#0F0F0F",
              fontFamily: "Playfair Display",
              fontSize: tabMatches ? "4.5rem" : "1.25rem",
              fontWeight: 500,
              lineHeight: "120%",
            }}
            variant="h1"
            component="h4"
          >
            {brand.shorthand} Products
          </Typography>
        </Box>
      </Box>
      <Container className="page-fade">
        <ProductsBreadCrumbs name={brand.shorthand} />
        <Typography sx={{ mb: 3 }}>
          Showing {brand?.products?.length} Products
        </Typography>
        <Grid container spacing={1.5}>
          {brand.products.map((product, idx) => (
            <Grid
              item
              key={idx}
              xs={12}
              md={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 1,
                textDecoration: "none",
              }}
              component={Link}
              href={product.link}
            >
              <img
                src={product?.img}
                alt={`product-${product.name}`}
                width="100%"
                data-aos="fade-up"
              />
              <Typography
                component={"h4"}
                sx={{
                  color: "#383838",
                  fontFamily: '"Playfair Display", serif',
                  fontSize: "1.25rem",
                  fontWeight: "600",
                }}
              >
                {brand.shorthand}
              </Typography>
              <Typography
                component={"h3"}
                sx={{
                  color: "#000",
                  fontFamily: '"Playfair Display", serif',
                  fontSize: tabMatches ? "1.5rem" : "1.25rem",
                  fontWeight: "400",
                }}
              >
                {product.name}
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Typography
                  sx={{
                    color: "#383838",
                    fontSize: "1rem",
                    fontWeight: "700",
                  }}
                >
                  {product.price}
                </Typography>
                <Typography
                  sx={{
                    color: "#383838",
                    fontSize: "1rem",
                  }}
                >
                  {product.quantity}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Product;
