import React from "react";
import Header from "../components/Header/Header";
import CategorySection from "../components/CategorySection/CategorySection";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <CategorySection />
      <Footer />
    </>
  );
};

export default HomePage;
