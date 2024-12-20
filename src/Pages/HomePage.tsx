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
      <Header
        brandName="My E-Shop"
        menuItems={[
          "Men's Clothes",
          "Women's Clothes",
          "Electronics",
          "Jewelry",
          "Wardrobe",
        ]}
        drawerWidth={250}
      />{" "}
      {isDesktop ? (
        <>
          <DesktopNav />
          <HeroSection
            title="Welcome to Our E-Shop!"
            subtitle="Discover amazing products at unbeatable prices. Shop the latest trends in fashion, electronics, and more!"
            ctaLabel="Shop Now"
            onCtaClick={() => console.log("CTA clicked")}
            backgroundImage="https://via.placeholder.com/1920x400"
          />
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
