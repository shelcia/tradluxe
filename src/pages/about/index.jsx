import React from "react";
import { Container, Typography } from "@mui/material";

const AboutPage = () => {
  return (
    <Container>
      <Typography
        component="h1"
        variant="h2"
        sx={{
          // fontFamily: "Playfair Display",
          fontSize: "3.5rem",
          fontWeight: 700,
          my: 3,
        }}
      >
        About Us
      </Typography>
      <Typography sx={{ fontSize: "1rem", fontWeight: 500, minHeight: "50vh" }}>
        TradLuxe PTE LTD is a distribution company incorporated in Singapore in
        2020. The company’s main focus is to introduce premium products to
        consumers in Singapore and to make them available through our website,
        various online marketplaces and select retail channel partners. We take
        immense pride in our carefully selected premium food, wine and personal
        care brands and products from across the globe which helps us and our
        retail partners provide a unique product offering to our clients and
        ensures customer satisfaction. Our Team includes industry professionals
        with over 50 years of combined experience and excel at planning,
        executing, setting marketing strategies and developing great
        partnerships. We are extremely passionate about what we do and strive to
        share our expertise in our product categories with our customers.
      </Typography>
    </Container>
  );
};

export default AboutPage;
