import React from "react";
import Header from "../components/Header/Header";

const HomePage: React.FC = () => {
  return (
    <>
      <Header />
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Welcome to My E-Shop</h1>
      </main>
    </>
  );
};

export default HomePage;
