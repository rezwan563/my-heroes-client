import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ToyCard/ToyCard";


const ShopbyCategory = () => {
   
    const handleTabChange = (tab_id) =>{
      console.log(tab_id)
    }
  return (
    <div className="w-fit mx-auto md:w-3/4 md:mx-auto ">
      <Tabs className={'border-slate-400 border-b-2'} defaultIndex={0} onSelect={(index) => handleTabChange(index)}>
        <TabList className={'bg-slate-200 flex justify-around'}>
          <Tab >Avengers</Tab>
          <Tab >Transformer</Tab>
          <Tab >Star trek</Tab>
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
