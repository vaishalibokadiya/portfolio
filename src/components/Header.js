import React from "react";

// images
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* logo */}
          <a href="#">
            <h1>
              <span className="text-gradient font-bold text-[28px]">
                VAISHALI
              </span>
              <br />
              <span className="font-semi-bold text-[41px]">BOKADIYA</span>
            </h1>
            {/* <img src={logo} alt="" /> */}
          </a>
          {/* button */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
