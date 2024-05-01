import React from "react";
import Navbar from "./Navbar";
import Main from "./Main";
import { CallButton } from "./common/helper/Button";

const Header = () => {
  return (
    <header id="#home">
      <div className="bg-header">
        <Navbar />
        <Main />
      </div>
      <div className=" container ">
        <p
          data-aos="fade-up"
          className="mb-0 pt-3 text-uppercase c-white fs-xl lh-3xl text-center fw-semibold"
        >
          Become a <span className=" gradiant-text-main">Software</span>{" "}
          Engineer Now!
        </p>
        <p
          data-aos="fade-up"
          className=" fs-sm fw-normal lh_lg text-center c-light-gray pt-2 mb-0"
        >
          No Math or Science Background Needed
        </p>
        <div className=" d-flex  justify-content-center  mt-35">
          <CallButton />
        </div>
      </div>
    </header>
  );
};

export default Header;
