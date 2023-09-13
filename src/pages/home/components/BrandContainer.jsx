import { Box, Typography } from "@mui/material";
import React from "react";

// eslint-disable-next-line react/prop-types
const BrandContainer = ({ img, logo, flag, content, subline, name }) => {
  return (
    <Box sx={{ borderRadius: "1rem", marginTop: 3, overflow: "hidden" }}>
      <Box
        className="brand-container"
        sx={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${img})`,
          "&:hover": {
            background: `linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), url(${img})`,
          },
        }}
      >
        <Box className="brand-container--content">
          <Box className="logo">
            <img src={logo} alt={`${name} logo`} width={"100%"} />
          </Box>
          <Box className="content">
            <Typography component="h2">
              {flag} {subline}
            </Typography>
            <Typography component="p">{content}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BrandContainer;
