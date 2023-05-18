import React from "react";
import NavigationBar from "../pages/Shared/NavigationBar/NavigationBar";
import { Outlet } from "react-router-dom";
import { Footer } from "flowbite-react";
import WebFooter from "../pages/Shared/WebFooter/WebFooter";
import ScrollTop from "../pages/Shared/ScrollTop/ScrollTop";
import { ToastContainer } from "react-toastify";

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
