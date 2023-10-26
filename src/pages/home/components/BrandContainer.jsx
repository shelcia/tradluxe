import React from "react";
import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const BrandContainer = ({ img, logo, flag, name, idx, link }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        marginTop: 3,
        overflow: "hidden",
        backgroundImage: `linear-gradient(15deg, #1A1A1A 6.73%, rgba(42, 42, 42, 0.89) 19.93%, rgba(70, 70, 70, 0.00) 65.09%), url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
      }}
      id="brands"
      data-aos="zoom-in-up"
      data-aos-duration="600"
      data-aos-delay={`${idx * 100}`}
      onClick={() => navigate(`/products/${link}`)}
    >
      <Box
        className="brand-container"
        sx={{ justifyContent: "left", alignItems: "flex-end", p: 2 }}
      >
        <Box className="brand-container--content">
          <Box
            sx={{
              borderRadius: "8px",
              background: name === "Airem Organic Spirits" ? "#29C2E1" : "#FFF",
              width: "54px",
              height: "54px",
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
              style={{ maxHeight: "54px" }}
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px" }}>{flag}</Typography>
            <Typography component="h2">{name}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandContainer;
