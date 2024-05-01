import React from "react";

const Preloder = () => {
  return (
    <div className=" min-vh-100 d-flex justify-content-center align-items-center position-fixed  z-11 bg-main-body w-100">
      <h2>
        <span className="gradiant-text-main">K</span>
        <span className=" text-white">O</span>
        <span className="gradiant-text-main">D</span>
        <span className=" text-white">E</span>
        <span className="gradiant-text-main">D</span>
        <span className=" text-white">E</span>
        <span className="gradiant-text-main">N</span>
      </h2>
      <div id="preloader">
        <div id="loader"></div>
      </div>
    </div>
  );
};

export default Preloder;
