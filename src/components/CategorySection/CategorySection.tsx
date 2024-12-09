import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const categories = [
  { id: 1, name: "test1", image: "#" },
  { id: 2, name: "test2", image: "#" },
  { id: 3, name: "test3", image: "#" },
];

const CategorySection: React.FC = () => {
  return (
    <Grid container spacing={3} sx={{ padding: 3 }}>
      {categories.map((category) => (
        <Grid item xs={12} sm={6} md={4} key={category.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={category.image}
              alt={category.name}
            />
            <CardContent>
              <Typography variant="h6" component="div">
                {category.name}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CategorySection;
