import { Footer } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import {
  ImFacebook,
  ImTwitter,
  ImGithub,
  ImInstagram,
  ImDribbble,
  ImYoutube
} from "react-icons/im";

const WebFooter = () => {
  return (
    // <div className="px-2 md:px-20 mt-2 md:mt-8 ">
    //   <Footer container={true}>
    //     <div className="w-full">
    //       <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
    //         <div>
    //         <Link to="/" className="text-3xl ">
    //         <p className="font-bold">
    //           <span className="py-1">My</span><span className="text-slate-500 border-y-red-500 border-y-2">Heroes</span>
    //         </p>
    //       </Link>
    //         </div>
    //         <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
    //           <div>
    //             <Footer.Title title="about" />
    //             <Footer.LinkGroup col={true}>
    //               <Footer.Link href="#">PHero</Footer.Link>
    //               <Footer.Link href="#">Tailwind CSS</Footer.Link>
    //             </Footer.LinkGroup>
    //           </div>
    //           <div>
    //             <Footer.Title title="Follow us" />
    //             <Footer.LinkGroup col={true}>
    //               <Footer.Link href="#">Github</Footer.Link>
    //               <Footer.Link href="#">Discord</Footer.Link>
    //             </Footer.LinkGroup>
    //           </div>
    //           <div>
    //             <Footer.Title title="Legal" />
    //             <Footer.LinkGroup col={true}>
    //               <Footer.Link href="#">Privacy Policy</Footer.Link>
    //               <Footer.Link href="#">Terms & Conditions</Footer.Link>
    //             </Footer.LinkGroup>
    //           </div>
    //         </div>
    //       </div>
    //       <Footer.Divider />
    //       <div className="w-full sm:flex sm:items-center sm:justify-between">
    //         <Footer.Copyright href="#" by="MyHeroes™" year={2023} />
    //         <div className="mt-4 py-2 flex space-x-6 sm:mt-0 sm:justify-center">
    //           {/* <Footer.Icon href="#" icon={ImFacebook} />
    //           <Footer.Icon href="#" icon={ImInstagram} />
    //           <Footer.Icon href="#" icon={ImTwitter} />
    //           <Footer.Icon href="#" icon={ImGithub} />
    //           <Footer.Icon href="#" icon={ImDribbble} /> */}
    //          <ImFacebook></ImFacebook>
    //           <Link to=''><ImInstagram></ImInstagram></Link>
    //           <Link to=''><ImTwitter></ImTwitter></Link>
    //           <Link to=''><ImDribbble></ImDribbble></Link>
    //         </div>
    //       </div>
    //     </div>
    //   </Footer>
    // </div>
    <div>
      <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
          <span className="font-bold text-lg">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="font-bold text-lg">Company</span>
          <Link to='/about_us' className="link link-hover">About us</Link>
          <Link to='/contact_us' className="link link-hover">Contact</Link>
        </div>
        <div>
          <span className="font-bold text-lg">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
      <footer className="flex  justify-between px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <div className="items-center grid-flow-col">
        <span className=" py-1">My</span>
              <span className="text-slate-500 border-y-red-500 border-y-2">
              Heroes
              </span>
          
        </div>
        <p>Copywrite @ MyHeroes 2023</p>
        <div className="md:place-self-center md:justify-self-end">
          <div className="grid grid-flow-col gap-4">
            {/* <a>
              <ImTwitter className="text-xl cursor-pointer"></ImTwitter>
            </a> */}
            <a href="https://github.com/programmingHero1/" target="_blank">
             <ImGithub className="text-xl cursor-pointer"></ImGithub>
            </a>
            <a href="https://www.facebook.com/groups/phwebdevelopmentbatch7" target="_blank">
              <ImFacebook className="text-xl cursor-pointer"></ImFacebook>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebFooter;
