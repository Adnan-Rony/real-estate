import React from "react";
import { Outlet } from "react-router-dom";
import Navber from "./Navber";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
const Mainlayout = () => {
  return (
    <div className="lg:px-0 px-3 bg-gradient-to-r from-[#F6F6F6] to-[#fff5e4]">
      <div className="max-w-screen-xl mx-auto  ">
        <Navber></Navber>
        <Outlet></Outlet>
        <Toaster></Toaster>
        
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Mainlayout;
