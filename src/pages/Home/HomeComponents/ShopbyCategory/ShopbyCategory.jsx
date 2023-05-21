import React, { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "../ToyCard/ToyCard";


 

const ShopbyCategory = () => {
  const [category, setCategory ] = useState('Avengers')
  const [categoryToy, setCategoryToy] = useState([])
   
    useEffect(() =>{
      fetch(`https://assignment-11-my-heroes-server-rezwan563.vercel.app/sub_category/${category}`)
      .then(res => res.json())
      .then(data => {
        setCategoryToy(data)
      })
    },[category])
    // console.log(category)
  return (
    
    <div className="md:mx-36">
      <Tabs className={'border-slate-400 border-b-2'}>
        <TabList className={'bg-slate-200'}>
          <Tab onClick={()=> setCategory('Avengers')}>Avengers</Tab>
          <Tab onClick={() => setCategory('Transformers')}>Transformers</Tab>
          <Tab onClick={()=>setCategory('Star trek')}>Star trek</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {
            categoryToy.length > 1 && categoryToy.map(singleToy => <ToyCard key={singleToy._id} singleToy={singleToy}></ToyCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {
            categoryToy.length > 1 && categoryToy.map(singleToy => <ToyCard key={singleToy._id} singleToy={singleToy}></ToyCard>)
          }
          </div>
        </TabPanel>
        <TabPanel>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {
            categoryToy.length > 1 && categoryToy.map(singleToy => <ToyCard key={singleToy._id} singleToy={singleToy}></ToyCard>)
          }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ShopbyCategory;
