import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ManIcon from "@mui/icons-material/Man";
import WomanIcon from "@mui/icons-material/Woman";
import DevicesIcon from "@mui/icons-material/Devices";
import DiamondIcon from "@mui/icons-material/Diamond";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const categories = [
  { id: 1, icon: <ManIcon fontSize="large" />, label: "Men's Clothes" },
  { id: 2, icon: <WomanIcon fontSize="large" />, label: "Women's Clothes" },
  { id: 3, icon: <DevicesIcon fontSize="large" />, label: "Electronics" },
  { id: 4, icon: <DiamondIcon fontSize="large" />, label: "Jewelry" },
];

const CategorySection: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid
        container
        spacing={isDesktop ? 4 : 2}
        sx={{ justifyContent: "center" }}
      >
        {categories.map((category) => (
          <Grid item xs={isTabletOrMobile ? 6 : 3} key={category.id}>
            <Card
              sx={{
                textAlign: "center",
                borderRadius: "12px",
                boxShadow: 3,
                padding: isDesktop ? "20px" : "10px",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <CardContent>
                {React.cloneElement(category.icon, {
                  fontSize: isDesktop ? "large" : "medium",
                  style: { color: "#004d61" },
                })}
                <Typography
                  variant={isDesktop ? "h6" : "body1"}
                  sx={{ marginTop: "10px", fontWeight: "bold" }}
                >
                  {category.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h5"
        sx={{
          marginTop: "30px",
          textAlign: "center",
          fontWeight: "bold",
          color: "#004d61",
        }}
      >
        OFFERS
      </Typography>
    </Box>
  );
};

export default CategorySection;
