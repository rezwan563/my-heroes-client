import React from "react";
import { Outlet } from "react-router-dom";
import WebFooter from "../pages/Shared/WebFooter/WebFooter";
import ScrollTop from "../pages/Shared/ScrollTop/ScrollTop";
import { ToastContainer } from "react-toastify";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";

const Main = () => {
  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <WebFooter></WebFooter>
      <ScrollTop></ScrollTop>
    </div>
  );
};

export default Main;
