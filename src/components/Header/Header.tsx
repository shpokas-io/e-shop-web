import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setMenuOpen(open);
  };

  const menuItems = [
    "Categories",
    "Jewelry",
    "Electronics",
    "Wardrobe",
    "Contacts",
  ];

  return (
    <>
      {/* AppBar for Navigation */}
      <AppBar position="sticky" color="default" sx={{ boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile ? (
            <>
              {/* Mobile View */}
              <IconButton
                edge="start"
                color="inherit"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, textAlign: "center", fontWeight: "bold" }}
              >
                My E-Shop
              </Typography>
              <IconButton edge="end" color="inherit">
                <ShoppingCartIcon />
              </IconButton>
            </>
          ) : (
            <>
              {/* Desktop View */}
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                My E-Shop
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: theme.palette.grey[200],
                  borderRadius: theme.shape.borderRadius,
                  padding: "0 10px",
                  width: "400px",
                  margin: "0 auto",
                }}
              >
                <InputBase
                  placeholder="Search products..."
                  inputProps={{ "aria-label": "search" }}
                  sx={{ flexGrow: 1 }}
                />
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                <IconButton>
                  <PersonIcon />
                </IconButton>
                <IconButton>
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </>
          )}
        </Toolbar>
        {isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              backgroundColor: theme.palette.grey[200],
              borderRadius: theme.shape.borderRadius,
              padding: "5px 10px",
              margin: "10px",
            }}
          >
            <InputBase
              placeholder="Search products..."
              inputProps={{ "aria-label": "search" }}
              sx={{ flexGrow: 1 }}
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Box>
        )}
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            padding: 2,
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {/* Logo Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 2,
              borderBottom: "1px solid #ddd",
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              My E-Shop
            </Typography>

            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PersonIcon />
              <Typography variant="body2">Login/Register</Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <ShoppingCartIcon />
                <Typography variant="body2">0,00 €</Typography>
              </Box>
            </Box>
          </Box>

          {/* Categories Section */}
          <List>
            {menuItems.map((text) => (
              <ListItem button key={text}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
