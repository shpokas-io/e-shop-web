import React from "react";
import Header from "../components/Header/Header";
import DesktopNav from "../components/DesktopNav/DesktopNav";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CategorySectionMobile from "../components/CategorySection/CategorySectionMobile";

const HomePage: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Header />
      {isDesktop && <DesktopNav />}
      {isMobile && <CategorySectionMobile />}
    </>
  );
};

export default HomePage;
