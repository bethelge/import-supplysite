import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar"; 

const Layout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet /> {/* This will render the current page content */}
      </main>
    </>
  );
};

export default Layout;
