import { Box, Button, Typography } from "@mui/material";

const HeroSection: React.FC = () => {
  return (
    <Box
      sx={{
        height: "400px",
        backgroundImage: "url('https://via.placeholder.com/1920x400')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        color: "#fff",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Typography
        variant="h2"
        sx={{ fontWeight: "bold", marginBottom: "20px" }}
      >
        Welcome to Our E-Shop !
      </Typography>
      <Typography
        variant="h6"
        sx={{
          marginBottom: "30px",
          maxWidth: "600px",
          lineHeight: "1.5",
        }}
      >
        Discover amazing products at unbeatable prices. Shop the latest trends
        in fashion, electronics, and more!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        size="large"
        sx={{
          textTransform: "none",
          fontWeight: "bold",
          backgroundColor: "#004d61",
          "&:hover": { backgroundColor: "#003843" },
        }}
      >
        Shop Now
      </Button>
    </Box>
  );
};

export default HeroSection;
