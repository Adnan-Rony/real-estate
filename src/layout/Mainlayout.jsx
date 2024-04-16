import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";
const Mainlayout = () => {
  return (
    <div className="lg:px-0 px-3 bg-gradient-to-r from-[#F6F6F6] to-[#fff5e4]">
      <div className="max-w-screen-xl mx-auto  ">
        <Navber></Navber>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default Mainlayout;
