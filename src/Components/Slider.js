import React from "react";
import Carousel from "react-bootstrap/Carousel";
import slide_image_1 from "../assets/1.png";
import slide_image_2 from "../assets/2.png";
import slide_image_3 from "../assets/3.png";
function Slider() {
  return (
    <div>
      <Carousel style={{ fontSize: "16px" }}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide_image_1}
            alt="First slide"
          />

          <Carousel.Caption className="d-none d-md-block">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide_image_2}
            alt="Second slide"
          />
          <Carousel.Caption className="d-none d-md-block">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={slide_image_3}
            alt="Third slide"
          />

          <Carousel.Caption className="d-none d-md-block">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Slider;
