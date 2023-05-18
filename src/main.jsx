import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import AuthProvider from "./pages/provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  </AuthProvider>
);
