import React from "react";
import girlTeam from "../assets/images/girlteamwork.webp";
const Goodfit = () => {
  return (
    <section id="program" className=" pt-md-5 mt-sm-5">
      <div className="container pt-5 mt-md-5">
        <div className="row mt-md-4 pt-1">
          <div className="col-lg-6">
            <img
              src={girlTeam}
              alt="girlTeam"
              className=" mx-auto h-100  d-flex  d-lg-inline   w-100 max-w-488"
            />
          </div>
          <div className="col-lg-6 mt-4 mt-lg-0 my-auto ">
            <h2
              data-aos="fade-down"
              className=" fw-medium mb-0 c-white-100 lh-7xl fs-4xl"
            >
              Are You A Good Fit For Our Program?
            </h2>
            <p className=" fs-sm fw-normal  lh-md c-low-gray pt-2">
              About Who The Program is For
            </p>
            <h3 className=" fw-semibold pt-1  fs-sm lh-md mb-0 gradiant-text-main d-inline-block ">
              Our 6-Month Software Engeering Course is for individuals that...
            </h3>
            <p className="c-dark-gray fs-sm fw-normal lh-md pt-2">
              Want to take action now but don't have years to waste in
              university Are extremely motivated and want to succeed Have
              dreamed of becoming a software engineer but don't have hundreds of
              thousands of dollars lying around
            </p>
            <h3 className=" fw-semibold pt-1  fs-sm lh-md mb-0 gradiant-text-main d-inline-block ">
              It isn't for...
            </h3>
            <p className="c-dark-gray fs-sm fw-normal lh-md pt-2">
              People that aren't self-starters People that don't have a sense of
              urgency to become a software engineeer People that aren't serious
              about fulfilling their dream
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Goodfit;
