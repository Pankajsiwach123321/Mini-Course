import React from "react";
import youTube from "../assets/images/youtube.webp";
const Main = () => {
  return (
    <main className=" mt-lg-60 mt-24">
      <div className=" container ">
        <h1
          data-aos="fade-down"
          className=" mb-0 pb-1 c-white text-uppercase   fw-semibold lh-5xl fs-3xl text-center "
        >
          Start the Mini-Course:
          <span className=" gradiant-text-main">
            {" "}
            Rapidly Learning New <br className=" d-none  d-sm-block " />{" "}
            Technical Skills
          </span>
        </h1>
        <p
          data-aos="fade-down"
          className=" mt-3 text-uppercase  c-white fs-xl mb-1 lh-3xl text-center  fw-semibold "
        >
          Learn All The Skills You Need To Become a
          <br className=" d-none  d-sm-block " /> Software Engineer!
        </p>
        <div className="arrow position-relative  z-1">
          <a
            aria-label="youtubevedio"
            href="https://youtu.be/28-fJmm_ONQ?si=yPTBhmvGQGywFdSd&t=67"
            target="_blank"
          >
            <img
              data-aos="zoom-in-up"
              src={youTube}
              // height={476}
              className=" w-100 mt-4 h-100  max-w-996  position-relative  z-1 mx-auto  d-flex  rounded-4 "
              alt="youTube"
            />
          </a>
        </div>
      </div>
    </main>
  );
};

export default Main;
