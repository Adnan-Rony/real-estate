import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const Categories = () => {
  return (
    <div>
      <Tabs>
        <TabList className="grid lg:w-[800px] mx-auto gap-3 space-y-3 lg:space-y-0 lg:gap-5 justify-center items-center md:grid-cols-3 lg:grid-cols-5 grid-cols-2  ">
            
          <Tab className="btn  w-36  rounded-3xl hover:bg-[#F54748] hover:border-none">
            townhouses
          </Tab>

          <Tab className="btn  w-36 rounded-3xl hover:bg-[#F54748] hover:border-none">
            apartments
          </Tab>

          <Tab className="btn  w-36 rounded-3xl hover:bg-[#F54748] hover:border-none">
            vacation rentals
          </Tab>

          <Tab className="btn  w-36 rounded-3xl hover:bg-[#F54748] hover:border-none">
            Single-family homes
          </Tab>
          <Tab className="btn  w-36 rounded-3xl hover:bg-[#F54748] hover:border-none">
            student housing
          </Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Categories;
