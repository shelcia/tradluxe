import { Box, Typography } from "@mui/material";
import React from "react";
import { MdEmail } from "react-icons/md";
import { PiPhoneFill } from "react-icons/pi";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();
  const currentRouteName = location.pathname;

  return (
    <Box
      sx={{
        display: "flex",
        // flexDirection: { xs: "row", md: "column" },
        flexDirection: "row",
        justifyContent: "center",
        gap: { xs: 0.5, md: 3 },
        width: "100%",
        background: "rgba(255, 255, 255, 0.05)",
        backdropFilter: "blur(6px)",
        position: "absolute",
        color: currentRouteName === "/" ? "#F0F0F0" : "#0F0F0F",
        pt: "6px",
        pb: "9px",
        zIndex: 1,
        flexWrap: { xs: "wrap", md: "nowrap" },
      }}
    >
      <Typography sx={{ fontWeight: 600 }}>Place an order now</Typography>
      <Typography sx={{ fontWeight: 600 }}>
        <MdEmail style={{ verticalAlign: "middle", marginRight: "0.25rem" }} />
        <a
          href="mailto:info@tradluxe.com"
          style={{ textDecoration: "underline" }}
        >
          info@tradluxe.com
        </a>
      </Typography>
      <Typography sx={{ fontWeight: 600 }}>
        <PiPhoneFill
          style={{ verticalAlign: "middle", marginRight: "0.25rem" }}
        />
        <a href="tel:+6589446568">+6589446568</a>
      </Typography>
    </Box>
  );
};

export default Banner;
