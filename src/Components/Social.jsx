import React, { useEffect, useRef, useState } from "react";
import {
  Instagram,
  Linkdin,
  SocailIconToogleSvg,
  Telegram,
  Twitter,
} from "./common/icons/Icons";

const Social = () => {
  const [socialBar, setSocialBar] = useState(false);
  const [socialBarMobile, setSocialBarMobile] = useState(false);
  const scrollTimeoutRef = useRef(null);

  function handleScroll() {
    setSocialBar(true);
    setSocialBarMobile(false);
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      setSocialBar(false);
    }, 400);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function mobileViewSocial() {
    setSocialBarMobile(true);
  }

  return (
    <div>
      <div className=" d_visiblity">
        <span onClick={mobileViewSocial} className=" icon-layout z-2 side-set-icon">
          <SocailIconToogleSvg />
        </span>
      </div>

      <div>
        <aside
          className={` ${socialBar && "left-61"} ${
            socialBarMobile && "start_0"
          } side-set left_-full z-2 d-flex transition-300  justify-content-center   `}
        >
          <div className=" bg-white d-inline-block p-18_7 radius-1  ">
            <div className=" d-flex  flex-column   justify-content-center  gap-11">
              <a
                aria-label="twitter"
                href="https://twitter.com/home?lang=en"
                className="icon-hover transition-300"
                target="_blank"
              >
                <Twitter />
              </a>
              <a
                aria-label="instagram"
                href="https://www.instagram.com/"
                className="icon-hover transition-300"
                target="_blank"
              >
                <Instagram />
              </a>
              <a
                aria-label="telegram"
                href="https://web.telegram.org/a/"
                className="icon-hover transition-300"
                target="_blank"
              >
                <Telegram />
              </a>
              <a
                aria-label="linkdin"
                href="https://www.linkedin.com/feed/"
                className="icon-hover transition-300"
                target="_blank"
              >
                <Linkdin />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Social;
