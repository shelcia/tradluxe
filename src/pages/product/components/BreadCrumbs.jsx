import { Breadcrumbs, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductsBreadCrumbs = ({ name }) => {
  return (
    <Breadcrumbs aria-label="breadcrumb" sx={{ mt: 2, mb: 4 }}>
      <Link
        to="/products"
        style={{
          color: "#000",
          fontSize: "1rem",
          lineHeight: "130%",
          letterSpacing: "0.00938rem",
        }}
      >
        Our Products
      </Link>
      <Typography
        color="text.primary"
        sx={{
          fontSize: "1rem",
          lineHeight: "130%",
          letterSpacing: "0.00938rem",
          fontWeight: 700,
        }}
      >
        {name} Products
      </Typography>
    </Breadcrumbs>
  );
};

export default ProductsBreadCrumbs;
