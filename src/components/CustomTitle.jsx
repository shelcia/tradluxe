import { Box, Typography } from "@mui/material";
import React from "react";

// eslint-disable-next-line react/prop-types
const CustomTitle = ({ subtitle = "", title = "" }) => {
  return (
    <Box sx={{ textAlign: "center", my: 3 }}>
      <Typography
        sx={{
          fontFamily: "'Great Vibes', sans-serif",
          color: "#868686",
          fontSize: 48,
          fontWeight: 400,
          lineHeight: "100%",
        }}
      >
        {subtitle}
      </Typography>

      <Typography
        sx={{
          fontFamily: "'Playfair Display', sans-serif",
          color: "#0F0F0F",
          fontSize: 52,
          fontWeight: 400,
          lineHeight: "50%",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CustomTitle;
