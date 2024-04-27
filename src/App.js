/* eslint-disable react/jsx-pascal-case */
import "./App.css";
import Slider from "./Components/Slider";
import Navbarfix from "./Components/Navbarfix";
import About_SVC from "./Components/About_SVC";
import ProductSlider from "./Components/ProductSlider";
import Collabration from "./Components/Collabration";
import Grid_images from "./Components/Grid_images";
import ClientsFeedback from "./Components/ClientsFeedback";
import "./index.css";
import LandingPage from "./Components/Lading_Page.js/LandingPage";
import NavBar from "./Components/Lading_Page.js/NavBar";
import SearchNavbar from "./Components/Lading_Page.js/SearchNavbar";
import { BrowserRouter } from "react-router-dom";
import Routers from "./Components/Routers";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
        <SearchNavbar></SearchNavbar>
      </BrowserRouter>
    </>
  );
}
export default App;
