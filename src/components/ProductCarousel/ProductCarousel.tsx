import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mockProducts = [
  {
    id: 1,
    name: "Product 1",
    image: "https://via.placeholder.com/300",
    price: "€10.00",
  },
  {
    id: 2,
    name: "Product 2",
    image: "https://via.placeholder.com/300",
    price: "€20.00",
  },
  {
    id: 3,
    name: "Product 3",
    image: "https://via.placeholder.com/300",
    price: "€30.00",
  },
  {
    id: 4,
    name: "Product 4",
    image: "https://via.placeholder.com/300",
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
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Box
      sx={{
        marginTop: "40px",
        padding: "20px",
        maxWidth: "600px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <Slider {...settings}>
        {mockProducts.map((product) => (
          <Card
            key={product.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              padding: "20px",
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s",
              "&:hover": {
                transform: "scale(1.05)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={product.image}
              alt={product.name}
              sx={{
                width: 200,
                height: 200,
                marginBottom: "10px",
                borderRadius: 2,
              }}
            />
            <CardContent>
              <Typography variant="h6">{product.name}</Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginTop: "5px" }}
              >
                {product.price}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              size="medium"
              sx={{
                marginTop: "10px",
                textTransform: "none",
                backgroundColor: "#004d61",
                "&:hover": { backgroundColor: "#003843" },
              }}
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
