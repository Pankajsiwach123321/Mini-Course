import React from "react";
import { navData } from "./common/helper/Helper";
import { ButtonNav } from "./common/helper/Button";
import { useOverflowHidden } from "./common/hooks/Hooks";
import Hamburger from "hamburger-react";

const Navbar = () => {
  const [isOpen, setOpen] = useOverflowHidden();
  return (
    <nav className="py-18">
      <div className=" container ">
        <div className=" d-flex  justify-content-end ">
          <ul className="d-flex ps-0 mb-0  align-items-center  gap-26">
            <li
              className={`${
                isOpen && " start-0 "
              } d-flex    align-items-center mobileview  gap-32`}
            >
              {navData.map((obj, index) => (
                <a
                  key={index}
                  onClick={() => setOpen(false)}
                  href={obj.link}
                  className=" fs-sm c-dark-gray text-decoration-none  lh-md text-center fw-medium  navhover position-relative  z-1 "
                >
                  {obj.name}
                </a>
              ))}
            </li>
            <li>
              <ButtonNav text="Get Started" />
            </li>
            <li className=" d-block position-relative  z-4  d-md-none ">
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={26}
                rounded
                distance="sm"
                direction="right"
                duration={0.5}
                color="#ffffff"
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
