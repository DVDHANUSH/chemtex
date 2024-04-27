import React from "react";
import "./Collabration.css";
import company1 from "../assets/fosroc.png";
import company2 from "../assets/ASL.png";
import company3 from "../assets/aditya_birla_chemicals.png";
import company4 from "../assets/diversey.png";
import company5 from "../assets/sika.png";
import company6 from "../assets/fixit.png";
import handshake from "../assets/handshake.png";
import svc from "../assets/svc.png";
function Collabration() {
  return (
    <div className="collabration">
      <div className="svc">
        <img
          src={handshake}
          alt=""
          className="hs"
          data-aos="zoom-in"
          data-aos-duration="3000"
        />
        <img src={svc} alt="" className="svc_image" />
        <h1 className="svctext">SRI VENKATESWARA CHEMICALS</h1>
      </div>
      <div className="companies">
        <div className="c1text" style={{ position: "relative", top: "5vh" }}>
          <img src={company1} alt="" className="c1" />
          <h4 className="h4text">( AUTHORIZED DISTRIBUTORES )</h4>
          <h3 className="h3text">Complete Constructive Solutions</h3>
        </div>
        <br />
        <img
          src={company2}
          alt=""
          className="c2"
          data-aos="fade-down"
          data-aos-duration="3000"
        />
        <br />
        <div className="cc3">
          <img
            src={company3}
            alt=""
            className="c3"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
          <img
            src={company4}
            alt=""
            className="c4"
            data-aos="fade-left"
            data-aos-duration="3000"
          />
        </div>

        <div className="cc4">
          <img
            src={company5}
            alt=""
            className="c5"
            data-aos="fade-left"
            data-aos-duration="3000"
          />
          <img
            src={company6}
            alt=""
            className="c6"
            data-aos="fade-right"
            data-aos-duration="3000"
          />
        </div>
      </div>
    </div>
  );
}
export default Collabration;