import React from "react";
import { Link } from "react-router-dom";
import { tabTitle } from "../UseDocumentTitle/GeneralFunctions";

const ErrorPage = () => {
  tabTitle('Error - MyHeroes')
  return (
    <div className="h-screen p-2 mt-20">
      <div className="flex justify-center items-center">
      <div className="md:grid md:grid-cols-2">
        <div className="mb-10">
          <p className="text-3xl md:text-5xl font-semibold">Opps!</p>
          <p className="text-xl md:text-3xl font-semibold">Seems like you're lost</p>
          <p className="">
            You can go back to{" "}
            <Link to="/" className="underline text-white">
             <button className="px-4 md:px-8 py-2 bg-slate-600 hover:text-gray-200 rounded-full">Home</button>
            </Link>
          </p>
        </div>
        <div>
            <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="404_image" />
        </div>
      </div>
      </div>
    </div>
  );
};

export default ErrorPage;
