import * as React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Logo from "../assets/logo.svg";
import {
  Alert,
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { CgMenuRight } from "react-icons/cg";
import { FaRegCopyright } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallFill } from "react-icons/pi";

const drawerWidth = 240;
// const navItems = ["Home", "About Us", "Products"];
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

const Layout = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={Logo} alt="" height={48} />
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <NavLink to={item.link}>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            </NavLink>
          </ListItem>
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
      <Alert variant="filled" severity="warning">
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: 3,
            width: "100%",
          }}
        >
          <Typography sx={{ fontWeight: 600 }}>Place an order now</Typography>
          <Typography sx={{ fontWeight: 600 }}>
            <MdEmail
              style={{ verticalAlign: "middle", marginRight: "0.25rem" }}
            />
            <a
              href="mailto:info@tradluxe.com"
              style={{ textDecoration: "underline" }}
            >
              info@tradluxe.com
            </a>
          </Typography>
          <Typography sx={{ fontWeight: 600 }}>
            <PiPhoneCallFill
              style={{ verticalAlign: "middle", marginRight: "0.25rem" }}
            />
            <a href="tel:+6589446568">+6589446568</a>
          </Typography>
        </Box>
      </Alert>
      <Box>
        <AppBar component="nav" sx={{ position: "relative" }}>
          <Toolbar sx={{ justifyContent: "space-between", flex: "1 1 1" }}>
            <Box
              sx={{
                width: { sm: 132, xs: 48 },
              }}
            >
              <img src={Logo} alt="" height={48} />
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <CgMenuRight />
            </IconButton>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <NavLink to={item.link} key={item.name}>
                  <Button color="warning" variant="text">
                    {item.name}
                  </Button>
                </NavLink>
              ))}
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Link to="/contact-us">
                <Button
                  variant="contained"
                  color="warning"
                  sx={{ flexGrow: 1 }}
                >
                  Contact Us
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <nav>
          <Drawer
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
        <Outlet />
      </Box>
      <Container sx={{ mt: 3, pb: 5 }}>
        <Divider />
        <Box
          sx={{
            textAlign: "center",
            mt: 3,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 1,
          }}
        >
          <FaRegCopyright />
          <Typography variant="h6">Coprights 2023. Tradluxe</Typography>
        </Box>
      </Container>
    </>
  );
};

export default Layout;
