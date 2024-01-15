import React from "react";
import logo_IMG from "../assets/logo.jpg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { activeLinksActions } from "../redux/slices/activeLinksActive";

export const NavBar = () => {
  const activeLink = useSelector((state) => state.activeLinks.active);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-row w-screen h-14 bg-navbg">
      <div className="flex items-center h-full w-[54px] overflow-hidden">
        <img src={logo_IMG} alt="logo" />
      </div>
      <div className="flex flex-row flex-1 justify-center items-center">
        <Link
          to={"/orders"}
          onClick={() => dispatch(activeLinksActions.setActiveLink("orders"))}
          className={`flex flex-col justify-center items-center h-full px-2 text-navNotActive hover:text-navActive hover:font-semibold ${
            activeLink === "orders" ? "border-lineActive" : ""
          }`}
        >
          <label>Orders</label>
        </Link>
        <Link
          to={"/inventory"}
          onClick={() =>
            dispatch(activeLinksActions.setActiveLink("inventory"))
          }
          className={`flex flex-col justify-center items-center h-full px-2 border-b-4 text-navNotActive hover:text-navActive hover:font-semibold ${
            activeLink === "inventory" ? "border-lineActive" : ""
          }`}
        >
          <label>Inventory</label>
        </Link>
        <Link
          onClick={() =>
            dispatch(activeLinksActions.setActiveLink("reports"))
          }
          className={`flex flex-col justify-center items-center h-full px-2 text-navNotActive hover:text-navActive hover:font-semibold ${
            activeLink === "reports" ? "border-lineActive" : ""
          }`}
        >
          <label>Reports</label>
        </Link>
        <Link
          onClick={() => dispatch(activeLinksActions.setActiveLink("settings"))}
          className={`flex flex-col justify-center items-center h-full px-2 text-navNotActive hover:text-navActive hover:font-semibold ${
            activeLink === "settings" ? "border-lineActive" : ""
          }`}
        >
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
