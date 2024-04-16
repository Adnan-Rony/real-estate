import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import React, { useEffect, useState } from "react";
import Card from "./Card";

const Categories = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetch("/src/categories.json")
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, []);

  const apartments = post.filter((item) => item.categories === "apartments");
  const townhouses = post.filter((item) => item.categories === "townhouses");
  const vacation_rentals = post.filter(
    (item) => item.categories === "vacation rentals"
  );
  const Single_family = post.filter(
    (item) => item.categories === "Single-family"
  );
  const student_housing = post.filter(
    (item) => item.categories === "student housing"
  );

  return (
    <div>
      <p className="text-3xl text-center lg:text-4xl font-semibold my-8">
        Select Categories
      </p>
      <Tabs className="py-5 ">
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
            Single-family
          </Tab>
          <Tab className="btn  w-36 rounded-3xl hover:bg-[#F54748] hover:border-none">
            student housing
          </Tab>
        </TabList>

        <div className="my-14">
          <TabPanel className="grid gap-6  md:grid-cols-2 lg:grid-cols-3  mx-auto">
            {townhouses.map((item) => (
              <div
                className=""
                key={item.id}
              >
                <Card item={item} />
              </div>
            ))}
          </TabPanel>
          <TabPanel className="grid gap-6  md:grid-cols-2 lg:grid-cols-3  mx-auto">
            {apartments.map((item) => (
              <div
                className=""
                key={item.id}
              >
                <Card item={item} />
              </div>
            ))}
          </TabPanel>
          <TabPanel className="grid gap-6  md:grid-cols-2 lg:grid-cols-3  mx-auto">
            {vacation_rentals.map((item) => (
              <div
                className=""
                key={item.id}
              >
                <Card item={item} />
              </div>
            ))}
          </TabPanel>
          <TabPanel className="grid gap-6  md:grid-cols-2 lg:grid-cols-3  mx-auto">
            {Single_family.map((item) => (
              <div
                className=""
                key={item.id}
              >
                <Card item={item} />
              </div>
            ))}
          </TabPanel>
          <TabPanel className="grid gap-6  md:grid-cols-2 lg:grid-cols-3  mx-auto">
            {student_housing.map((item) => (
              <div
                className=""
                key={item.id}
              >
                <Card item={item} />
              </div>
            ))}
          </TabPanel>
          
        </div>
      </Tabs>
    </div>
  );
};

export default Categories;
