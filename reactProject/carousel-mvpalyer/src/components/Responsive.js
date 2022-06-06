import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Responsive = () => {
  return (
    <Carousel>
      <div
        style={{
          height: 500,
          background: "red",
        }}
      >
        <p>1</p>
      </div>
      <div
        style={{
          height: 500,
          background: "blue",
        }}
      >
        <p>2</p>
      </div>
      <div
        style={{
          height: 500,
          background: "yellow",
        }}
      >
        <p>3</p>
      </div>
    </Carousel>
  );
};

export default Responsive;
