import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CategoryDropdown from "../Category/CategoryDropdownDesktop";
import Link from "@mui/material/Link";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import SettingsIcon from "@mui/icons-material/Settings";
import DevicesIcon from "@mui/icons-material/Devices";
import PercentIcon from "@mui/icons-material/Percent";

const links = [
  { id: 1, label: "Fashion", icon: <ShoppingBagIcon fontSize="small" /> },
  { id: 2, label: "Solutions", icon: <SettingsIcon fontSize="small" /> },
  { id: 3, label: "Gadgets", icon: <DevicesIcon fontSize="small" /> },
  { id: 4, label: "SALE %", icon: <PercentIcon fontSize="small" /> },
];

const DesktopNav: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#004d61",
        padding: "10px 20px",
        color: "#fff",
      }}
    >
      {/* Dropdown Menu */}
      <CategoryDropdown />

      {/* Dummy Links */}
      <Box sx={{ display: "flex", gap: "20px", alignItems: "center" }}>
        {links.map((link) => (
          <Link
            key={link.id}
            href="#"
            underline="none"
            sx={{
              display: "flex",
              alignItems: "center",
              color: "#fff",
              fontSize: "14px",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            {link.icon}
            <Typography sx={{ marginLeft: "5px" }}>{link.label}</Typography>
          </Link>
        ))}
      </Box>
    </Box>
  );
};

export default DesktopNav;
