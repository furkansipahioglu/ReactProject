import React from "react";
import PageNav from "../components/PageNav";
import Carousel from "../components/Carousel";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import PopulerTarif from "../components/PopulerTarif";
import Categories2 from "../components/Categories2";
import YeniTarifler from "../components/YeniTarifler";
import GenelTarifler from "../components/GenelTarifler";
import Footer from "../components/Footer";
import GununYemegi from "../components/GununYemegi";

function HomePage() {
  return (
    <div>
      <link href="../css/style.css" rel="stylesheet" />
      <PageNav />
      <Carousel />
      <SearchBar />
      <Categories />
      <GununYemegi />
      <PopulerTarif />
      <Categories2 />
      <YeniTarifler />
      <GenelTarifler />
      <Footer />
    </div>
  );
}

export default HomePage;
