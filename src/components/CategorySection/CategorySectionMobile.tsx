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

const CategorySectionMobile: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  if (!isMobile) return null;

  return (
    <Box sx={{ padding: "20px" }}>
      <Grid container spacing={2}>
        {categories.map((category) => (
          <Grid item xs={6} key={category.id}>
            <Card
              sx={{
                textAlign: "center",
                borderRadius: "12px",
                boxShadow: 2,
                padding: "10px",
              }}
            >
              <CardContent>
                {category.icon}
                <Typography variant="body1" sx={{ marginTop: "10px" }}>
                  {category.label}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h6"
        sx={{
          marginTop: "20px",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        OFFERS
      </Typography>
    </Box>
  );
};

export default CategorySectionMobile;
