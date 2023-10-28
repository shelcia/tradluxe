/* eslint-disable react/prop-types */
import React from "react";
import { Box, Link, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import ShopifyLogo from "../../assets/icons/shopify.svg";
import PhoneLogo from "../../assets/icons/phone-banner.svg";

const Banner = () => {
  const location = useLocation();
  const currentRouteName = location.pathname;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
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
      <BannerBtn
        title="Go to our Shopify store!"
        href="https://www.tradluxe.com/collections"
        target="_blank"
        bgColor1="rgba(149, 191, 70, 0.60)"
        bgColor2="rgb(149, 191, 70)"
        logo={ShopifyLogo}
        currentRouteName={currentRouteName}
      />
      <BannerBtn
        title="+6589446568"
        href="tel:+6589446568"
        bgColor1="rgba(60, 60, 60, 0.60)"
        bgColor2="rgb(60, 60, 60)"
        logo={PhoneLogo}
        currentRouteName={currentRouteName}
      />
    </Box>
  );
};

export default Banner;

const BannerBtn = ({
  title = "",
  href = "",
  bgColor1 = "",
  bgColor2 = "",
  currentRouteName = "",
  logo = "",
}) => {
  return (
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: "0.875rem",
        lineHeight: "1.3125rem",
        backgroundColor: currentRouteName === "/" ? bgColor1 : bgColor2,
        display: "flex",
        padding: "0.25rem 1.0625rem",
        alignItems: "center",
        gap: "0.25rem",
        borderRadius: "0.3125rem",
        color: "#fff",
        textDecoration: "none",
        "&:hover": {
          textDecoration: "underline",
        },
      }}
      component={Link}
      href={href}
      target="_blank"
    >
      <img
        src={logo}
        alt={`${title} Logo`}
        loading="eager"
        width={20}
        height={20}
      />
      {title}
    </Typography>
  );
};
