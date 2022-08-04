import React from "react";
import MainSlide from "../components/MainSlide";
import Popular from "../components/Popular";
import Sale from "../components/Sale";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <MainSlide />
      <Popular />
      <Sale />
    </>
  );
}

export default Home;
