import React from "react";
import { CallButton } from "./common/helper/Button";
import manLaptop from "../assets/images/laptopstandman.webp";
import { CurrlyEngineering } from "./common/icons/Icons";

const EngeneerCourse = () => {
  return (
    <section
      id="about"
      className=" mt-md-5 pt-sm-5 position-relative pb-md-5  z-1"
    >
      <div className="container pt-5 mt-1">
        <div className=" d-flex  flex-column-reverse flex-lg-row    mx-0">
          <div className=" max-w-679 mt-4 mt-lg-0 pt-2 mt-1">
            <h2
              data-aos="fade-down"
              className=" fw-medium  fs-4xl lh-7xl c-low-gray"
            >
              What is KodeDen's{" "}
              <span className="gradiant-text-main">6-Month</span> Software
              Engineering Course?
            </h2>
            <ul className=" max-w-660  mb-0 mt-2">
              <li className="list-disc fs-sm lh-4xl fw-normal c-dark-gray">
                With 6-figure salaries, unlimited PTO, and the flexibility to
                work anywhere in the world—(or
              </li>
              <li className="list-disc fs-sm lh-4xl fw-normal c-dark-gray">
                simply pick your kids up from school), you want in.
              </li>
              <li className="list-disc fs-sm lh-4xl fw-normal c-dark-gray">
                But who has $25k+ to drop on a bootcamp?
              </li>
              <li className="list-disc fs-sm lh-4xl fw-normal c-dark-gray">
                Or semesters of free time to dedicate to going back to school?
              </li>
              <li className="list-disc fs-sm lh-4xl fw-normal c-dark-gray">
                Heck, most people don’t even know where to start.
              </li>
              <li className="list-disc fs-sm lh-4xl fw-normal c-dark-gray">
                If that's you, you’ve been dreaming of a high-paying tech career
                but paralyzed when it comes time to take action.
              </li>
            </ul>
            <h3
              data-aos="fade-up"
              className=" mb-0 mt-2 gradiant-text-main fw-semibold  fs-sm lh-md"
            >
              I want to Start My Software Engineering Journey!
            </h3>
            <CallButton class=" mt-50" />
          </div>
          <img
            data-aos="zoom-in-up"
            src={manLaptop}
            height={562}
            alt="manLaptop"
            className=" object-fit-fill max-h-sm-389 max-w-461 w-100 "
          />
        </div>
      </div>
      <span className="ellipesEnginering d-sm-block d-none">
        <CurrlyEngineering />
      </span>
    </section>
  );
};

export default EngeneerCourse;
