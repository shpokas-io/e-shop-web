import Header from "../components/Header/Header";
import DesktopNav from "../components/DesktopNav/DesktopNav";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CategorySectionMobile from "../components/Category/CategorySection";
import ProductCarousel from "../components/Product/ProductCarousel";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/Hero/HeroSection";
import CategorySection from "../components/Category/CategorySection";
import Box from "@mui/material/Box";

const products = [
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

const HomePage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      {isDesktop ? (
        <>
          <DesktopNav />
          <HeroSection />
          <CategorySection />
        </>
      ) : (
        <CategorySectionMobile />
      )}
      <Box sx={{ flex: 1, pb: 5 }}>
        <ProductCarousel products={products} title="Featured Products" />
      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
