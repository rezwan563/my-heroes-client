import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { ImFacebook, ImTwitter, ImGithub, ImInstagram, ImDribbble } from "react-icons/im";

const WebFooter = () => {
  return (
    <div className="px-2 md:px-20 mt-2 md:mt-8 ">
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
                  <Footer.Link href="#">PHero</Footer.Link>
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
            <div className="mt-4 py-2 flex space-x-6 sm:mt-0 sm:justify-center">
              {/* <Footer.Icon href="#" icon={ImFacebook} />
              <Footer.Icon href="#" icon={ImInstagram} />
              <Footer.Icon href="#" icon={ImTwitter} />
              <Footer.Icon href="#" icon={ImGithub} />
              <Footer.Icon href="#" icon={ImDribbble} /> */}
             <ImFacebook></ImFacebook>
              <Link to=''><ImInstagram></ImInstagram></Link>
              <Link to=''><ImTwitter></ImTwitter></Link>
              <Link to=''><ImDribbble></ImDribbble></Link>
            </div>
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default WebFooter;
