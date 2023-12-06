import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "../../assets/logo/logo.svg";
import MenuWhiteIcon from "../../assets/icons/menu-white.svg";
import MenuBlackIcon from "../../assets/icons/menu-black.svg";

const drawerWidth = 240;

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "About Us",
    link: "/about-us",
  },
  {
    name: "Products",
    link: "/products",
  },
];

const Topbar = () => {
  const location = useLocation();
  const currentRouteName = location.pathname;

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const tabMatches = useMediaQuery("(min-width:900px)");

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Link to="/">
        <Typography
          variant="h6"
          sx={{
            my: 2,
            fontFamily: "'Playfair Display Variable', serif",
            fontSize: { xs: 20, md: 28 },
            fontWeight: 500,
            lineHeight: "120%",
          }}
        >
          <img
            src={Logo}
            alt="Tradluxe Logo"
            height={24}
            width={24}
            style={{ paddingTop: 8 }}
            loading="eager"
          />{" "}
          {"   "}
          Tradluxe
        </Typography>
      </Link>
      <Divider />
      <List>
        {navItems.map((item) => (
          <NavLink key={item.name} to={item.link}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
      <Divider />
      <Link to="/contact-us">
        <Button variant="contained" color="warning" sx={{ mt: 2 }}>
          Contact Us
        </Button>
      </Link>
    </Box>
  );
  return (
    <>
      <AppBar
        component="nav"
        sx={{
          boxShadow: "none",
          mt: { xs: "84px", md: "48px" },
          backdropFilter: "none",
          // height: { xs: "64px", md: "auto" },
        }}
        color="transparent"
        position="absolute"
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flex: "1 1 1",
          }}
        >
          <Link to="/">
            <Box
              sx={{
                width: { sm: 132, xs: 48 },
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {tabMatches ? (
                <img
                  src={Logo}
                  alt="Tradluxe Logo"
                  height={36}
                  width={"auto"}
                  loading="lazy"
                />
              ) : (
                <img
                  src={Logo}
                  alt="Tradluxe Logo"
                  height={24}
                  width={"auto"}
                  loading="eager"
                />
              )}
              <Typography
                variant="h6"
                sx={{
                  my: 2,
                  color: currentRouteName === "/" ? "#F0F0F0" : "#000",
                  fontFamily: "'Playfair Display Variable', serif",
                  fontSize: { xs: 20, md: 28 },
                  fontWeight: 500,
                  lineHeight: "120%",
                }}
              >
                Tradluxe
              </Typography>
            </Box>
          </Link>

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { sm: "none" },
              color: currentRouteName === "/" ? "#fff" : "#000",
              background: "rgba(255, 255, 255, 0.05)",
              backdropFilter: "blur(6px)",
              fontWeight: "bold",
            }}
          >
            {currentRouteName === "/" ? (
              <img
                src={MenuWhiteIcon}
                alt="menu-white"
                height={20}
                width={20}
              />
            ) : (
              <img
                src={MenuBlackIcon}
                alt="menu-black"
                height={20}
                width={20}
              />
            )}
          </IconButton>

          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <NavLink to={item.link} key={item.name}>
                <Button
                  color={currentRouteName === "/" ? "secondary" : "inherit"}
                  variant="text"
                  sx={{ fontSize: 18, fontWeight: 500 }}
                >
                  {item.name}
                </Button>
              </NavLink>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Link to="/contact-us">
              <Button variant="contained" color="warning" sx={{ flexGrow: 1 }}>
                Contact Us
              </Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          anchor="right"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
};

export default Topbar;
