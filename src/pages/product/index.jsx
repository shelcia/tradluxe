import { Container, Toolbar } from "@mui/material";
import React from "react";

const ProductPage = () => {
  return (
    <>
      <Toolbar sx={{ mt: 4 }} />
      <Container className="page-fade">
        <h1>Products</h1>
      </Container>
    </>
  );
};

export default ProductPage;
