import React, { FC } from "react";
import Slider from "react-slick";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
}

interface ArrowProps {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

// Reusable styled components for arrows
const ArrowButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  backgroundColor: theme.palette.common.white,
  boxShadow: theme.shadows[3],
  "&:hover": {
    backgroundColor: theme.palette.grey[200],
  },
}));

const NextArrow: FC<ArrowProps> = ({ onClick }) => (
  <ArrowButton onClick={onClick} sx={{ right: -10 }}>
    <ArrowForwardIosIcon fontSize="small" />
  </ArrowButton>
);

const PrevArrow: FC<ArrowProps> = ({ onClick }) => (
  <ArrowButton onClick={onClick} sx={{ left: -10, zIndex: 1 }}>
    <ArrowBackIosNewIcon fontSize="small" />
  </ArrowButton>
);

interface ProductCarouselProps {
  products: Product[];
  title?: string;
}

const ProductCarousel: FC<ProductCarouselProps> = ({
  products,
  title = "Featured Products",
}) => {
  const theme = useTheme();

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
        breakpoint: 960, // tablet breakpoint
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600, // mobile breakpoint
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        mt: theme.spacing(6),
        mb: theme.spacing(6),
        px: { xs: 2, md: 6 },
        maxWidth: 1200,
        margin: "0 auto",
        position: "relative",
      }}
    >
      {title && (
        <Typography
          variant="h5"
          sx={{ mb: 2, textAlign: "center", fontWeight: 500 }}
        >
          {title}
        </Typography>
      )}
      <Slider {...settings}>
        {products.map((product) => (
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
