import React from "react";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BrandContainer = ({ img, logo, name, link }) => {
  return (
    <Box
      sx={{
        marginTop: 3,
        overflow: "hidden",
        backgroundImage: `linear-gradient(15deg, #1A1A1A 6.73%, rgba(42, 42, 42, 0.89) 19.93%, rgba(70, 70, 70, 0.00) 65.09%), url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      id="brands"
      data-aos="zoom-in-up"
      data-aos-duration="600"
    >
      <Box
        className="brand-container brand-container--product"
        sx={{
          justifyContent: "center",
          alignItems: "center",
          p: 2,
          maxWidth: "100%",
        }}
        as={Link}
        to={`/products/${link}`}
      >
        <Box
          className="brand-container--content"
          sx={{ flexDirection: "column", alignItems: "center" }}
        >
          <Box
            sx={{
              borderRadius: "8px",
              background: name === "Airem Organic Spirits" ? "#29C2E1" : "#FFF",
              width: "6.75rem",
              height: "6.75rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: 0.5,
            }}
          >
            <img
              src={logo}
              alt="logo"
              width={"100%"}
              style={{ maxHeight: "6.75rem" }}
              loading="lazy"
            />
          </Box>
          <Box>
            <Typography component="h2" sx={{ fontSize: "24px" }}>
              {name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandContainer;
