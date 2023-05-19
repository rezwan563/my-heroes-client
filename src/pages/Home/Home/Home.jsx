import React from "react";
import Banner from "../HomeComponents/Banner/Banner";
import OurPartners from "../HomeComponents/OurPartners/OurPartners";
import PhotoGallery from "../HomeComponents/PhotoGallery/PhotoGallery";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <section className="my-5 md:my-10">
        <OurPartners></OurPartners>
      </section>
      <section className="my-5 md:my-10">
        <PhotoGallery></PhotoGallery>
      </section>
    </div>
  );
};

export default Home;
