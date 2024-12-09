import React, { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import DevicesIcon from "@mui/icons-material/Devices";
import DiamondIcon from "@mui/icons-material/Diamond";

const categories = [
  { id: 1, icon: <ManIcon fontSize="small" />, label: "Men's Clothes" },
  { id: 2, icon: <WomanIcon fontSize="small" />, label: "Women's Clothes" },
  { id: 3, icon: <DevicesIcon fontSize="small" />, label: "Electronics" },
  { id: 4, icon: <DiamondIcon fontSize="small" />, label: "Jewelry" },
];

const CategoryDropdown: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          textTransform: "none",
          backgroundColor: "#007B8F",
          "&:hover": { backgroundColor: "#005f6e" },
        }}
      >
        Catalog
      </Button>
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
        {categories.map((category) => (
          <MenuItem key={category.id} onClick={handleClose}>
            {category.icon}
            <span style={{ marginLeft: "10px" }}>{category.label}</span>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default CategoryDropdown;
