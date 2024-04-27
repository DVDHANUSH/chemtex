import React from "react";
import image from "../assets/roxtec_owners.jpg";
import "./about.css";
function About_SVC() {
  return (
    <div>
      {/* <div className="Container"> */}
      <div class="about_heading">About SVC</div>
      <div class="about">
        <div class="about_image">
          <img src={image} alt="" className="aboutimage" />
        </div>
        <div class="about_text">
          We are the leading chemicals manufactures and suppliers in and around
          Vizag. We have much more industrial experience than any others because
          it is being 5 decades we have started this business. We distribute
          their products across India reaching out to customers in multitude
          verticals. Our work culture is based on ethical values, fair trade
          practices and commitment to supply quality chemicals on time. We{" "}
          <b> "Sri Venkateswara Chemicals" </b> is a highly acclaimed name among
          suppliers of Chemicals, Acids, Solvents, Minerals. We always look for
          excellence in quality, uncompromising reliability and dependability
          keeping in mind efficient, effective customer service and their
          satisfaction as fundamental.
        </div>
      </div>
    </div>
    // </div>
  );
}
export default About_SVC;
