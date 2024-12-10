import React from "react";
import Header from "../components/Header/Header";
import DesktopNav from "../components/DesktopNav/DesktopNav";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CategorySectionMobile from "../components/CategorySection/CategorySectionMobile";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";
import Footer from "../components/Footer/Footer";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <Header />
      {isDesktop && <DesktopNav />}
      {isTabletOrMobile && (
        <>
          <CategorySectionMobile />
          <ProductCarousel />
        </>
      )}
      <Footer />
    </>
  );
};

export default HomePage;
