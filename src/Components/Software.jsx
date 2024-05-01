import React from "react";
import cartonman from "../assets/images/cartonman.png";
import { ArrowCoder, ArrowSoftware } from "./common/icons/Icons";
import { SoftwareData } from "./common/helper/Helper";
const Software = () => {
  return (
    <section id="how" className=" mt-md-5 pt-sm-5 position-relative  z-1">
      <div className="container mt-md-5 pt-5">
        <h2
          data-aos="fade-down"
          className=" text-center mb-0  text-capitalize max-w-1071 mx-auto  fw-medium  fs-4xl lh-7xl c-low-gray"
        >
          “From Confused to Coder”: Kodeden's Exclusive 6-Month{" "}
          <span className="gradiant-text-main">Software Engineering</span>{" "}
          Course
        </h2>
        <p
          data-aos="fade-down"
          className="c-low-gray mt-2 fs-sm lh-md text-center  fw-normal"
        >
          Through twice-weekly live lectures and at-home exercises, you’ll:
        </p>
        <p
          data-aos="fade-up"
          className="c-dark-gray pb-4 mb-3 fw-normal fs-sm lh-md  text-center "
        >
          Learn everything you need to know to break into tech from senior
          engineers with experience at{" "}
          <span className=" d-block "> Apple, Amazon, and the DOD.</span>
        </p>
        <div className=" d-flex flex-wrap   align-items-center h-100 max-w-941 mx-auto gap-4   justify-content-lg-between justify-content-center pt-5  ">
          {SoftwareData.map((obj, index) => (
            <div
              data-aos={obj.aos}
              key={index}
              className="max-w-287  bg-main-body w-100 h-233"
            >
              <div className="softwarecard position-relative  z-1">
                <div className=" d-flex  justify-content-between align-items-end  ">
                  <div>
                    <p className="c-dark-gray mb-0 fw-semibold fs-2xl lh-6xl">
                      {obj.number}
                    </p>
                  </div>
                  <div className={`setimg ${obj.top3}`}>
                    <div className=" position-relative  z-1">
                      <img src={obj.image} alt="cartonman" />
                      <img
                        src={obj.image}
                        alt="cartonman"
                        className=" position-absolute animated-image   z-n1  start-0  top-0  blur-10"
                      />
                    </div>
                  </div>
                </div>
                <p className=" mb-0 fs-md lh-xl pt-1 fw-bold c-low-gray">
                  {obj.what}
                </p>
                <div className=" d-flex  align-items-center  gap-1">
                  <p className=" mb-0 fs-md lh-xl  fw-bold c-low-gray">
                    {obj.doing}
                  </p>
                  <span className="transition-300">
                    <ArrowSoftware />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className=" arrowcoder d-none  d-sm-block ">
        <ArrowCoder />
      </span>
    </section>
  );
};

export default Software;
