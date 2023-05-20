import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SubCategoryCard from "../SubCategoryCard/SubCategoryCard";

const Category = () => {
  const [toys, setToys] = useState([]);
  const [activeTab, setActiveTab] = useState("Sports");

  useEffect(() => {
    fetch(`http://localhost:5000/allToyByCategory/${activeTab}`)
      .then((res) => res.json())
      .then((result) => {
        setToys(result);
      });
  }, [activeTab]);

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };
  return (
    <div className=" my-container">
      <h1 className="text-2xl text-center font-bold bg-orange-500 text-white rounded-full py-2 md:w-1/5 mx-auto">
        Toy Cars
      </h1>
      <Tabs className=" rounded">
        <TabList className="flex justify-center gap-1 my-6">
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("Sports")}
              className={` px-8 py-4 rounded text-xl font-bold ${
                activeTab == "Sports" ? " bg-orange-500 text-white" : ""
              }`}
            >
              Sports Car
            </Link>
          </Tab>
          <Tab className="flex items-center bg-slate-200 ">
            <Link
              onClick={() => handleTabClick("Truck")}
              className={`px-8 py-4 rounded text-xl font-bold ${
                activeTab == "Truck" ? " bg-blue-500 text-white" : ""
              }`}
            >
              Truck Car
            </Link>
          </Tab>
          <Tab className="flex items-center bg-slate-200 rounded">
            <Link
              onClick={() => handleTabClick("Crossover")}
              className={`px-8 py-4 rounded text-xl font-bold ${
                activeTab == "Crossover" ? " bg-green-500 text-white" : ""
              }`}
            >
              Crossover Car
            </Link>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="md:grid grid-cols-3 gap-4 border-4 border-orange-500 rounded p-8">
            {toys.map((toy) => (
              <SubCategoryCard toy={toy} key={toy._id}></SubCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:grid grid-cols-3 gap-4 border-4 border-orange-500 rounded p-8 mx-auto">
            {toys.map((toy) => (
              <SubCategoryCard toy={toy} key={toy._id}></SubCategoryCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="md:grid grid-cols-3 gap-4  border-4 border-orange-500 rounded p-8 mx-auto">
            {toys.map((toy) => (
              <SubCategoryCard toy={toy} key={toy._id}></SubCategoryCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Category;
