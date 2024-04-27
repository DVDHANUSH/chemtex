import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
import SearchNavbar from "./Lading_Page.js/SearchNavbar";
import NavBar from "./Lading_Page.js/NavBar";
function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<SearchNavbar></SearchNavbar>}></Route>
        <Route path="/create-account" element={<NavBar></NavBar>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default Routers;
