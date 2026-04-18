import React from "react";
import navImg from "../assets/logo.png";
import coinLogo from "../assets/Icon.png";
const Navbar = ({availableBalance}) => {
  return (
    <div className="max-w-11/12 mx-auto sticky top-0 z-50 shadow-xs rounded-3xl ">
      <div className="navbar bg-base-100  ">
        <div className="flex-1">
          <a href="/" className="flex items-center">
            <img
              className="h-[60px] w-[60px] object-contain"
              src={navImg}
              alt="Logo"
            />
          </a>
        </div>

        <div className="flex items-center  border-2 border-base-300 px-3 py-1 rounded-2xl bg-base-200 cursor-pointer shadow-2xl hover:border-gray-500   ">
          <span className="font-semibold">{availableBalance} </span>
          <span className="font-semibold mx-2 ">Coin</span>
          <img className="h-[20px] w-[20px]" src={coinLogo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
