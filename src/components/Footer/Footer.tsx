import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#333",
        color: "#fff",
        padding: 2,
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        © 2024 My E-Shop. All Rights Reserved.
      </Typography>
      <Typography variant="body2">Contact: info@myeshop.com</Typography>
    </Box>
  );
};

export default Footer;
