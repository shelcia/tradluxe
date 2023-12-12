import React from "react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Ribbon from "../../../assets/images/ribbon.svg";

// eslint-disable-next-line react/prop-types
const BrandContainer = ({ img, logo, flag, name, idx, link, isLaunched }) => {
  const navigate = useNavigate();
  const tabMatches = useMediaQuery("(min-width:900px)");

  return (
    <Box
      sx={{
        marginTop: 3,
        overflow: "hidden",
        backgroundImage: `linear-gradient(15deg, #1A1A1A 6.73%, rgba(42, 42, 42, 0.89) 19.93%, rgba(70, 70, 70, 0.00) 65.09%), url('${img}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        cursor: "pointer",
        position: "relative",
      }}
      id="brands"
      data-aos="zoom-in-up"
      data-aos-duration="600"
      data-aos-delay={`${idx * 100}`}
      onClick={() => {
        if (isLaunched) {
          navigate(`/products/${link}`);
        }
      }}
    >
      {!isLaunched && (
        <img
          src={Ribbon}
          alt="coming soon"
          style={{ position: "absolute", top: 20, right: 0 }}
        />
      )}

      <Box
        className="brand-container brand-container--mobile"
        sx={{
          justifyContent: "left",
          alignItems: "flex-end",
          p: tabMatches ? 2 : 1,
        }}
      >
        <Box className="brand-container--content">
          <Box
            sx={{
              borderRadius: tabMatches ? "8px" : "3px",
              background: name === "Airem Organic Spirits" ? "#29C2E1" : "#FFF",
              width: tabMatches ? "54px" : "32px",
              height: tabMatches ? "54px" : "32px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              p: tabMatches ? 0.5 : 0.1,
            }}
          >
            <img
              src={logo}
              alt="logo"
              width={"100%"}
              style={{ maxHeight: "54px" }}
              loading="lazy"
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "16px" }}>{flag}</Typography>
            <Typography
              component="h2"
              sx={{ fontSize: tabMatches ? "24px" : "18px" }}
            >
              {name}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandContainer;
