import React, { useState, useRef } from "react";
import Slider from "react-slick";


function Setiment() {
  const [slideIndex, setSlideIndex] = useState(0); // State to track the current slide index
  const [updateCount, setUpdateCount] = useState(0); // State to track the update count
  let sliderRef = useRef(null); // Reference to the Slider component
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    afterChange: () => setUpdateCount(updateCount + 1), // Callback after changing the slide
    beforeChange: (current, next) => setSlideIndex(next), // Callback before changing the slide
  };

  return (
    <div className="slider-container">
      {/* Slider component */}
      <Slider
        ref={(slider) => {
          sliderRef = slider; // Set the sliderRef to the Slider component
        }}
        {...settings} // Pass settings to the Slider component
      >
        {/* Individual slides with images */}
        <div className="row">
          <div className="col">
            <img src="" alt="" />
          </div>
          <div className="col-10">lorem30</div>
        </div>
        <div className="row">
          <div className="col">
            <img src="" alt="" />
          </div>
          <div className="col-10">lorem30</div>
        </div>
        <div className="row">
          <div className="col">
            <img src="" alt="" />
          </div>
          <div className="col-10">lorem30</div>
        </div>
        <div className="row">
          <div className="col">
            <img src="" alt="" />
          </div>
          <div className="col-10">lorem30</div>
        </div>
      </Slider>
    </div>
  );
}

export default Setiment;
