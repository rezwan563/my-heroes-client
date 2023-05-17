import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const WebFooter = () => {
  return (
    <div>
      <Footer container={true}>
        <div className="w-full">
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <div>
            <Link to="/" className="text-3xl ">
            <p className="font-bold">
              <span className="text-white bg-red-600 py-1">My</span><span className="text-slate-500 border-y-red-500 border-y-2">Heroes</span>
            </p>
          </Link>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <div>
                <Footer.Title title="about" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Flowbite</Footer.Link>
                  <Footer.Link href="#">Tailwind CSS</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Github</Footer.Link>
                  <Footer.Link href="#">Discord</Footer.Link>
                </Footer.LinkGroup>
              </div>
              <div>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col={true}>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms & Conditions</Footer.Link>
                </Footer.LinkGroup>
              </div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="MyHeroes™" year={2023} />
            <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
              <Footer.Icon href="#" icon={"FB"} />
              <Footer.Icon href="#" icon={"IG"} />
              <Footer.Icon href="#" icon={"TW"} />
              <Footer.Icon href="#" icon={"GH"} />
              <Footer.Icon href="#" icon={"DB"} />
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default WebFooter;
