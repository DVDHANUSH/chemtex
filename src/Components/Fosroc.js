import React from "react";
import fosroc_logo from "../assets/fosroc.png";
import "./Fosroc.css";
import waterleak from "../assets/waterleak.jpg";
import grouts from "../assets/grouts.jpg";
import adhesives from "../assets/adhesives.jpeg";
import sealants from "../assets/sealant.jpg";
function Fosroc() {
  return (
    <div>
      <div className="fosroc_Logo">
        <img src={waterleak} alt="" className="wl" />
        <img src={grouts} alt="" className="g" />
        <img src={fosroc_logo} alt="" className="f1" />
        
        <img src={adhesives} alt="" className="adhesives" />
        <img src={sealants} alt="" className="sealant" />
      </div>
    </div>
  );
}
export default Fosroc;
