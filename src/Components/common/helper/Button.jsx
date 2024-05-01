import React from "react";
import { CallLogo } from "../icons/Icons";
export const ButtonNav = (props) => {
  return (
    <button className="main-button fs-xsm lh-xsm c-white ">{props.text}</button>
  );
};
export const CallButton = (props) => {
  return (
    <a
      href="tel:+919992148553"
      className={`${props.class} text-uppercase  bg-transparent callbutton d-inline-flex  text-decoration-none   align-items-center  gap-10 fs-md lh-xl fw-900 c-white-100 `}
    >
      <CallLogo /> <span>Book a Call NOW</span>
    </a>
  );
};
