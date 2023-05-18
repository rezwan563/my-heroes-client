import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div>
          <p className="text-3xl font-semibold">Opps!</p>
          <p className="text-xl font-semibold">Seems like you're lost</p>
          <p className="">
            You can go back to{" "}
            <Link to="/" className="underline text-blue-500">
              Home
            </Link>
          </p>
        </div>
        <div>
            <img src="/placeholder.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
