import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ToyCard/ToyCard";


const ShopbyCategory = () => {
    const handleMarvelCategory = (e) =>{
    }

    const handleAvengersCategory = (e) =>{
    }

    const handleStarWarCategory = (e) =>{
    }
  return (
    <div className="w-fit mx-auto md:w-1/2 md:mx-auto">
      <Tabs className={'border-slate-400 border-b-2'}>
        <TabList className={'bg-slate-200 flex justify-around'}>
          <Tab onClick={handleMarvelCategory}>Marvel</Tab>
          <Tab onClick={handleAvengersCategory}>Avengers</Tab>
          <Tab onClick={handleStarWarCategory}>Star wars</Tab>
        </TabList>

        <TabPanel >
          <ToyCard></ToyCard>
        </TabPanel>
        <TabPanel>
          <ToyCard></ToyCard>
        </TabPanel>
        <TabPanel>
          <ToyCard></ToyCard>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopbyCategory;
