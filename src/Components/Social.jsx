import React, { useEffect, useRef, useState } from "react";
import { Instagram, Linkdin, Telegram, Twitter } from "./common/icons/Icons";

const Social = () => {
  const [socialBar, setSocialBar] = useState(false);
  const scrollTimeoutRef = useRef(null);

  function handleScroll() {
    setSocialBar(true);
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

  return (
    <aside
      className={` ${
        socialBar && "left-61"
      } side-set z-2 d-flex transition-300  justify-content-center   `}
    >
      <div className=" bg-white d-inline-block p-18_7 radius-1  ">
        <div className=" d-flex  flex-md-column   justify-content-center  gap-11">
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
  );
};

export default Social;
