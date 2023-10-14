import * as React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "./components/Footer";
import Topbar from "./components/Topbar";
import Banner from "./components/Banner";

const Layout = () => {
  return (
    <>
      <Banner />
      <Box sx={{ overflowY: "auto" }}>
        <Topbar />
        <Box>
          <Outlet />
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
