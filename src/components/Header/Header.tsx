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
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down("md"));
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setMenuOpen(open);
  };

  const menuItems = [
    "Men's Clothes",
    "Women's Clothes",
    "Electronics",
    "Jewelry",
    "Wardrobe",
  ];

  return (
    <>
      <AppBar position="sticky" color="default" sx={{ boxShadow: 1 }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobileOrTablet ? (
            <>
              {/* Mobile/Tablet View */}
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
      </AppBar>

      {/* Drawer for Mobile/Tablet Menu */}
      <Drawer anchor="left" open={menuOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: 250,
            padding: 2,
            display: "flex",
            flexDirection: "column",
          }}
          role="presentation"
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
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              My E-Shop
            </Typography>
          </Box>

          {/* Login/Register and Cart Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingY: 2,
              borderBottom: "1px solid #ddd",
            }}
          >
            <Button
              startIcon={<PersonIcon />}
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              Login/Register
            </Button>
            <Button
              startIcon={<ShoppingCartIcon />}
              sx={{ textTransform: "none", fontWeight: "bold" }}
            >
              0,00 €
            </Button>
          </Box>

          {/* Categories Section */}
          <List>
            {menuItems.map((item) => (
              <ListItem button key={item}>
                <ListItemText primary={item} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
