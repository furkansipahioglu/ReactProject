import logo from "./logo.svg";
import "./App.css";
import PageNav from "./components/PageNav";
import Carousel from "./components/Carousel";
import SearchBar from "./components/SearchBar";
import Categories from "./components/Categories";
import PopulerTarif from "./components/PopulerTarif";
import Categories2 from "./components/Categories2";
import YeniTarifler from "./components/YeniTarifler";
import GenelTarifler from "./components/GenelTarifler";
import Footer from "./components/Footer";
import GununYemegi from "./components/GununYemegi";
import HomePage from "./pages/HomePage";
import AnaYemek from "./pages/AnaYemek";
import Atistirmalik from "./pages/Atistirmalik";
import Tatlılar from "./pages/Tatlılar";
import Japan from "./pages/Japan";
import France from "./pages/France";
import Italy from "./pages/Italy";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";
import About from "./pages/About";
import TumYemekler from "./pages/TumYemekler";
import Scroll from "./components/Scroll";

function App() {
  return (
    <div>
      <Router>
        <Scroll />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/anayemek" element={<AnaYemek />} />
          <Route exact path="/tatlilar" element={<Tatlılar />} />
          <Route exact path="/atistirmaliklar" element={<Atistirmalik />} />
          <Route exact path="/tumyemekler" element={<TumYemekler />} />
          <Route exact path="/france" element={<France />} />
          <Route exact path="/japan" element={<Japan />} />
          <Route exact path="/italy" element={<Italy />} />
          <Route exact path="/searched/:id" element={<Searched />} />
          <Route exact path="/recipe/:id" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
