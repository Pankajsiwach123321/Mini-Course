import React from "react";
import { LinkdinIcon, NextArrow, PrevArrow } from "./common/icons/Icons";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { CallButton } from "./common/helper/Button";
import { SwiperData } from "./common/helper/Helper";

const StudentSwiper = () => {
  return (
    <section id="faqs" className=" mt-sm-5 pt-md-5 position-relative  z-3 ">
      <div className="container mt-md-5 pt-5">
        <h2
          data-aos="fade-down"
          className=" pt-md-3 fs-4xl text-capitalize text-center   fw-medium lh-8xl c-low-gray"
        >
          What our <span className="gradiant-text-main">students</span> are
          saying
        </h2>
        <div className=" mt-50">
          <Swiper
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              992: {
                slidesPerView: 3,
              },
            }}
            modules={[Navigation]}
            navigation={{
              nextEl: ".next",
              prevEl: ".prev",
            }}
            loop={true}
            pagination={false}
            slidesPerView={1}
            spaceBetween={24}
          >
            {SwiperData.map((obj, index) => (
              <SwiperSlide key={index} className=" h-auto ">
                <div className=" h-100 ">
                  <div className=" swiper-card h-100 ">
                    <h4 className=" fw-normal mb-1 fs-xl lh-cxl text-white">
                      {obj.title}
                    </h4>
                    <p className=" fw-normal mb-0  fs-sm lh_lg c-light-gray">
                      {obj.discription}
                    </p>
                    <p className=" fw-semibold  fs-sm lh_lg c-white-100 pt-6">
                      Read More...
                    </p>
                    <div className=" d-flex pt-2  justify-content-between align-items-center ">
                      <div className=" d-flex gap-3  align-items-center ">
                        <img src={obj.image} alt="profile" />
                        <div className=" text-start">
                          <p className=" mb-0 fw-normal fs-lg lh-2xl text-white ">
                            {obj.name}
                          </p>
                          <p className=" mb-0 fw-normal  fs-xsm lh-xsm c-light-gray">
                            {obj.username}
                          </p>
                        </div>
                      </div>
                      <a
                        aria-label={obj.linkdin}
                        className="pe-1 me-3"
                        href="https://www.linkedin.com/feed/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>
                          <LinkdinIcon />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className=" text-center ">
          <CallButton class="mt-50 " />
        </div>
      </div>
      <div className=" setbuttonswiper">
        <div className=" d-flex px-1 max-w-swipernutton mx-auto justify-content-center gap-4 mt-4 mt-xl-0  justify-content-xl-between ">
          <button className="prev d-block  slidernavigation">
            <PrevArrow />
          </button>
          <button className="next d-block  slidernavigation">
            <NextArrow />
          </button>
        </div>
      </div>
    </section>
  );
};

export default StudentSwiper;
