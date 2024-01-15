import React from "react";
import logo_IMG from "../assets/logo.jpg";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div className="flex flex-row w-screen h-14 bg-navbg">
      <div className="flex items-center h-full w-14">
        <img src={logo_IMG} alt="logo" />
      </div>
      <div className="flex flex-row flex-1 justify-center items-center">
        <Link className=" flex flex-col justify-center items-center h-full px-2 text-navNotActive hover:text-navActive hover:font-semibold">
          <label>Orders</label>
        </Link>
        <Link className=" flex flex-col justify-center items-center h-full px-2 border-b-4 border-lineActive text-navNotActive hover:text-navActive hover:font-semibold">
          <label>Inventory</label>
        </Link>
        <Link className=" flex flex-col justify-center items-center h-full px-2 text-navNotActive hover:text-navActive hover:font-semibold">
          <label>Reports</label>
        </Link>
        <Link className=" flex flex-col justify-center items-center h-full px-2 text-navNotActive hover:text-navActive hover:font-semibold">
          <label>Settings</label>
        </Link>
      </div>
      <div className="flex flex-row w-14 justify-center items-center">
        <div className=" flex justify-center items-center w-10 h-10 rounded-full bg-lineActive">
          <label className="text-white">JD</label>
        </div>
      </div>
    </div>
  );
};
