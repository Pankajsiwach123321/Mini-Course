import React from "react";
import { CallButton } from "./common/helper/Button";
import kodeden from "../assets/images/Kodeden.webp";
import { ArrowOurguarante } from "./common/icons/Icons";
const Ourgarantie = () => {
  return (
    <section className=" pt-sm-5 mt-md-5 position-relative  z-1">
      <div className="container pt-5 mt-md-5">
        <div className="row pt-1 flex-column-reverse  flex-md-row ">
          <div className="col-md-7 mt-4 mt-md-0">
            <h2
              data-aos="fade-down"
              className=" fs-4xl mb-2 fw-semibold lh-8xl c-low-gray"
            >
              Our Guarantee
            </h2>
            <p className=" fw-normal fs-xl max-w-592 lh-5xl c-light-gray">
              If you decide coding isn’t right for you within 15 days of
              starting the program, we’ll give you your money back.{" "}
            </p>
            <h3 className=" fw-semibold   fs-sm lh-md mb-0 gradiant-text-main ">
              I want to become a software engineer in 6 months!
            </h3>
            <CallButton class="mt-50" />
          </div>
          <div className="col-md-5 my-auto  my-lg-0 ">
            <img
              src={kodeden}
              alt="kodeden"
              className=" w-100 max-w-386 mx-auto  d-flex "
            />
          </div>
        </div>
      </div>
      <span className="arrowguarante">
        <ArrowOurguarante />
      </span>
    </section>
  );
};

export default Ourgarantie;
