import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { NavBar } from "../components/Navbar";

const DefaultLayout = () => {
  return (
    <div className="flex flex-col h-screen w-full bg-mainbg overflow-hidden">
      <NavBar />
      <div className="flex flex-row h-full">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;
