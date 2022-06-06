import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slcik = () => {
  const settings = {
    dots: true,
    infinite: true,
    spped: 500,
    sliderToshow: 1,
    sliderToScroll: 1,
  };
  return (
    <Slider {...settings}>
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
          background: "blue",
        }}
      >
        <p>3</p>
      </div>
    </Slider>
  );
};

export default Slcik;
