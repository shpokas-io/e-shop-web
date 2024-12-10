import React from "react";
import Header from "../components/Header/Header";
import DesktopNav from "../components/DesktopNav/DesktopNav";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CategorySectionMobile from "../components/CategorySection/CategorySection";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import CategorySection from "../components/CategorySection/CategorySection";
import Box from "@mui/material/Box";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      {isDesktop && (
        <>
          <DesktopNav />
          <HeroSection />
          <CategorySection />
        </>
      )}
      {isTabletOrMobile && (
        <>
          <CategorySectionMobile />
          <ProductCarousel />
        </>
      )}
      <Box sx={{ flex: 1, paddingBottom: "20px" }}>
        <ProductCarousel />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
