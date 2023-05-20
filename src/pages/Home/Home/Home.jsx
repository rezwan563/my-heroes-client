import React from "react";
import Banner from "../HomeComponents/Banner/Banner";
import OurPartners from "../HomeComponents/OurPartners/OurPartners";
import PhotoGallery from "../HomeComponents/PhotoGallery/PhotoGallery";
import ShopbyCategory from "../HomeComponents/ShopbyCategory/ShopbyCategory";
import LimitedOffer from "../HomeComponents/LimitedOffer/LimitedOffer";
import NewsLetter from "../HomeComponents/NewsLetter/NewsLetter";
import LazyLoad from "react-lazy-load";

const Home = () => {
  return (
    <div className="">
      <Banner></Banner>
      <section className="my-5 md:my-10">
        <OurPartners></OurPartners>
      </section>
      <section className="my-5 md:my-20">
        <PhotoGallery></PhotoGallery>
      </section>
      <section className="my-5 md:my-20">
        <ShopbyCategory></ShopbyCategory>
      </section>
      <section className="my-5 md:my-20">
        <LimitedOffer></LimitedOffer>
      </section>
      <section className="my-5 md:my-20">
        <NewsLetter></NewsLetter>
      </section>
    </div>
  );
};

export default Home;
