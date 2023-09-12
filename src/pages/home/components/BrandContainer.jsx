import { Box } from "@mui/material";
import React from "react";

// eslint-disable-next-line react/prop-types
const BrandContainer = ({ img, logo }) => {
  return (
    <Box sx={{ borderRadius: "1rem", marginTop: 3 }}>
      <Box
        className="brand-container"
        sx={{
          background: `linear-gradient(0deg, rgba(0, 0, 0, 0.70) 0%, rgba(0, 0, 0, 0.70) 100%), url(${img})`,
        }}
      >
        <img src={logo} alt="" />
      </Box>
    </Box>
  );
};

export default BrandContainer;
