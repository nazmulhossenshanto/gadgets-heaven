import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayouts = () => {
  return (
    <div className="">
      {/* <ToastContainer position="top-center" /> */}

      {/* Navbar */}
      <div className="h-18">
        <Navbar></Navbar>
      </div>
      {/* Dynamic Section */}
      <div className="min-h-[calc(100vh-289px)]  container  mx-auto ">
        <Outlet></Outlet>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default MainLayouts;
