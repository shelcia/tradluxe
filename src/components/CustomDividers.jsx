import { Divider } from "@mui/material";
import React from "react";

export const CustomAboutDivider = () => {
  return (
    <Divider
      sx={{
        borderColor: "#B8B8B8",
        width: { xs: "80%", md: "70%" },
        mx: "auto",
        // borderWidth: "0.0625rem",
      }}
    />
  );
};
