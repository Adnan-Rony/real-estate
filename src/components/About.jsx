import React from "react";
import { FcAssistant } from "react-icons/fc";
const About = () => {
  return (
    <div>
      <div className="my-10 py-5">
       
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 justify-center items-center">
          <div className="">
            <img
              className="rounded-2xl"
              src="https://i.ibb.co/BGgJyT1/White-and-Brown-Modern-Real-Estate-Home-Banner.png"
            ></img>
          </div>

          <div className="p-5">
            <div className="lg:space-y-3 space-y-2">
              <p className="lg:text-4xl text-3xl font-bold">
                Discover <span className="text-[#F54748]">luxury</span> living
              </p>
              <p className="lg:text-4xl text-3xl font-bold">
                <span className="text-[#FDC55E]">beyond</span> imagination
              </p>
              <p>
                At Elite Estates, we understand that buying or selling a home is
                one of the most significant decisions you will make in your
                lifetime. That's why we're here to guide you through every step
                of the process, providing expertise, support, and personalized
                service tailored to your unique needs.
              </p>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 py-5">
              <p className="flex items-center gap-1">
                <span>
                  <FcAssistant className="text-2xl" />
                </span>{" "}
                Online Order
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <FcAssistant className="text-2xl" />
                </span>{" "}
                24/7 Service
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <FcAssistant className="text-2xl" />
                </span>{" "}
                Pre-Reservation
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <FcAssistant className="text-2xl" />
                </span>{" "}
                Organized Foodhut Place
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <FcAssistant className="text-2xl" />
                </span>{" "}
                Super Chef
              </p>
              <p className="flex items-center gap-1">
                <span>
                  <FcAssistant className="text-2xl" />
                </span>{" "}
                Clean Kitchen
              </p>
            </div>
            <div className="flex items-center gap-3">
              <button className="btn btn-sm rounded-2xl bg-[#F54748] border-none text-white text-sm hover:bg-[#FDC55E]">
                About Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
