import React from "react";
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
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar position="sticky" color="default" sx={{ boxShadow: 1 }}>
      <Toolbar>
        {isMobile ? (
          <>
            {/* Mobile View */}
            <IconButton edge="start" color="inherit" aria-label="menu">
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
            <Typography
              variant="h6"
              sx={{ marginRight: 2, fontWeight: "bold" }}
            >
              My E-Shop
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: theme.palette.grey[200],
                borderRadius: theme.shape.borderRadius,
                padding: "0 10px",
                width: "100%",
                maxWidth: "400px",
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
            <Box
              sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
            >
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                +370 638 22222
              </Typography>
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
  );
};

export default Header;
