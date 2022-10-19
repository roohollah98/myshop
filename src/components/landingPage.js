import React from "react";
import Banner from "./Banner";
import Footer from "./footer";
import Header from "./header";
import Products from "./products";

const LandingPage = () => {
  return (
    <div>
      <Header />
      <Banner />
      <h2
        style={{
          marginTop: "80px",
          textAlign: "center",
          textDecoration: "underline",
          fontSize: "2rem",
        }}
      >
        Our Products
      </h2>
      <Products />
      <Footer />
    </div>
  );
};

export default LandingPage;
