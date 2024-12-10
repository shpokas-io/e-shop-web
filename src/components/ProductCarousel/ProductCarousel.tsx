import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const mockProducts = [
  {
    id: 1,
    name: "Product 1",
    image: "https://via.placeholder.com/150",
    price: "€10.00",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/150",
    price: "€20.00",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://via.placeholder.com/150",
    price: "€30.00",
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://via.placeholder.com/150",
    price: "€40.00",
  },
];

const ProductCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Box sx={{ marginTop: "20px", padding: "10px" }}>
      <Slider {...settings}>
        {mockProducts.map((product) => (
          <Card
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "20px",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{ width: 150, height: 150, marginBottom: "10px" }}
            />
            <CardContent>
              <Typography variant="h6" sx={{ textAlign: "center" }}>
                {product.name}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ textAlign: "center", marginTop: "5px" }}
              >
                {product.price}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              size="small"
              sx={{ marginTop: "10px", textTransform: "none" }}
            >
              Buy Now
            </Button>
          </Card>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
