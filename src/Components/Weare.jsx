import React from "react";
import twoMan from "../assets/images/twoman.webp";
import { ArrowWho, RoundLogo } from "./common/icons/Icons";
import { CallButton } from "./common/helper/Button";
const Weare = () => {
  return (
    <section className=" pt-sm-5 mt-md-5 position-relative  z-1">
      <div className="container pt-md-5 mt-5">
        <h2
          data-aos="fade-down"
          className=" fs-4xl lh-8xl fw-semibold mt-md-1  text-center c-low-gray"
        >
          Who Are <span className="gradiant-text-main">We</span>?
        </h2>
        <div className="row ">
          <div className="col-lg-6">
            <div className=" position-relative d-flex  justify-content-center justify-content-lg-start    z-1">
              <img
                src={twoMan}
                alt="twoMan"
                height={532}
                width={474}
                className=" max-w-474 w-100 max-h-sm-389  "
              />
              <span className="round-text animation-rotate">
                <RoundLogo />
              </span>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className=" max-w-494 mx-auto pt-3 ">
              <span className=" fw-normal fs-xsm lh-sm c-low-gray">
                MEET YOUR INSTRUCTORS
              </span>
              <h2 className=" fw-medium  pt-1 text-capitalize mb-1  fs-2xl lh-5xl c-low-gray">
                Hi, We’re Kody Doherty <br /> And Kolton Starr <span className=" d-inline-block animation-hand">👋</span>
              </h2>
              <p className=" fs-sm fw-normal max-w-494 pt-2  lh_lg c-light-gray">
                And we know firsthand that building a career as a software
                engineer without a computer science degree is possible. <br />{" "}
                We started where you are *right now*—without engineering
                degrees, a professional portfolio, or years of experience.{" "}
                <br /> Then we climbed the ranks to hold senior positions at
                tech titans like Amazon, Apple, and the US government. <br />{" "}
                Throughout our careers, we’ve managed entire teams of engineers,
                directed $30 million program budgets, and built 2 successful
                tech startups (one that we sold). <br />
                Learning to code did more than add a few impressive lines to our
                resumes. It literally changed our lives…
              </p>
              <h3 className=" fw-semibold    fs-sm lh-md mb-0 gradiant-text-main ">
                I want to live my dream now!
              </h3>
              <CallButton class="mt-50" />
            </div>
          </div>
        </div>
      </div>
      <span className=" arrowwho">
        <ArrowWho />
      </span>
    </section>
  );
};

export default Weare;
