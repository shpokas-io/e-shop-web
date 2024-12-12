import React from "react";
import Slider from "react-slick";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const mockProducts = [
  {
    id: 1,
    name: "Modern Lamp",
    image: "https://via.placeholder.com/300",
    price: "€10.00",
  },
  {
    id: 2,
    name: "Stylish Chair",
    image: "https://via.placeholder.com/300",
    price: "€20.00",
  },
  {
    id: 3,
    name: "Wooden Desk",
    image: "https://via.placeholder.com/300",
    price: "€30.00",
  },
  {
    id: 4,
    name: "Cozy Armchair",
    image: "https://via.placeholder.com/300",
    price: "€40.00",
  },
  {
    id: 5,
    name: "Minimalist Shelf",
    image: "https://via.placeholder.com/300",
    price: "€50.00",
  },
];

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NextArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        right: -10,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        boxShadow: 3,
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
      }}
    >
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      sx={{
        position: "absolute",
        left: -10,
        top: "50%",
        transform: "translateY(-50%)",
        backgroundColor: "white",
        boxShadow: 3,
        "&:hover": {
          backgroundColor: "#f0f0f0",
        },
        zIndex: 1,
      }}
    >
      <ArrowBackIosNewIcon fontSize="small" />
    </IconButton>
  );
};

const ProductCarousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 960, // tablet
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        mt: 6,
        mb: 6,
        px: { xs: 2, md: 6 },
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <Typography
        variant="h5"
        sx={{ mb: 2, textAlign: "center", fontWeight: 500 }}
      >
        Featured Products
      </Typography>
      <Slider {...settings}>
        {mockProducts.map((product) => (
          <Box key={product.id} sx={{ px: 1 }}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                p: 2,
                height: "100%",
                boxShadow: 2,
                borderRadius: 2,
                transition: "transform 0.3s, box-shadow 0.3s",
                "&:hover": {
                  transform: "translateY(-5px)",
                  boxShadow: 4,
                },
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{
                  width: 180,
                  height: 180,
                  objectFit: "cover",
                  borderRadius: 2,
                  mb: 2,
                }}
              />
              <CardContent sx={{ p: 0 }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                  {product.name}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mt: 0.5 }}
                >
                  {product.price}
                </Typography>
              </CardContent>
              <Button
                variant="contained"
                size="small"
                sx={{
                  mt: 2,
                  textTransform: "none",
                  backgroundColor: "#004d61",
                  "&:hover": { backgroundColor: "#003843" },
                }}
              >
                Buy Now
              </Button>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default ProductCarousel;
