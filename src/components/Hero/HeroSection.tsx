import { Box, Button, Typography, useTheme } from "@mui/material";

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  backgroundImage?: string;
}

const HeroSection = ({
  title = "Welcome to Our E-Shop!",
  subtitle = "Discover amazing products at unbeatable prices. Shop the latest trends in fashion,electronics, and more!",
  ctaLabel = "Shop Now",
  onCtaClick,
  backgroundImage = "https://via.placeholder.com/1920x400",
}: HeroSectionProps) => {
  const theme = useTheme();

  return (
    <Box
      component="section"
      sx={{
        height: { xs: theme.spacing(50), md: theme.spacing(60) },
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        color: theme.palette.common.white,
        px: 2,
      }}
    >
      <Typography variant="h2" sx={{ fontWeight: "bold", mb: 2 }}>
        {title}
      </Typography>
      <Typography
        variant="h6"
        sx={{
          maxWidth: 600,
          lineHeight: 1.5,
          mb: 3,
        }}
      >
        {subtitle}
      </Typography>
      <Button
        variant="contained"
        size="large"
        onClick={onCtaClick}
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          backgroundColor: "#004d61",
          "&:hover": { backgroundColor: "#003843" },
        }}
      >
        {ctaLabel}
      </Button>
    </Box>
  );
};

export default HeroSection;
