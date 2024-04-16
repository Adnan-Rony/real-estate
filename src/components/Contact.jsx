import React from "react";

const Contact = () => {
  return (
    <div>
      <img
        className="mx-auto w-full rounded-2xl"
        src="https://i.ibb.co/BP6yPCt/marvest-1-2.png"
        alt=""
      />

      <div className="grid md:grid-cols-2 my-12 rounded-2xl grid-cols-1 gap-2 items-center justify-center bg-white ">
        <div className="space-y-4 pl-5 ">
          <div>
            <p className="lg:text-3xl text-2xl font-semibold">Our Office</p>
            <p className="lg:text-xl ">Georgia, Tbilisi, Otar Kapanadze 4</p>
          </div>

          <p className="lg:text-3xl text-2xl font-semibold">Sales Department</p>
          <p className="lg:text-xl ">+8801747430447</p>

          <button className="btn w-1/2 bg-[#F54748] text-white ">
            Contact Us
          </button>
        </div>
        <div>
          <img
            src="https://i.ibb.co/dWWs7k9/Screenshot-2024-04-16-224328.png"
            alt=""
          />
        </div>
      </div>

      <div className="space-y-5 my-5">
        <p className="text-center font-bold lg:text-5xl text-2xl">
          Would you like to live in Garden Hills?
        </p>

        <div className="space-y-4 flex-col justify-center items-center py-16">
          <input
            type="text"
            placeholder="Type Your Name"
            className="input input-bordered input-warning w-3/4 my-2  "
          />{" "}
          <br />
          <input
            type="email"
            placeholder="Type Your Email"
            className="input input-bordered input-warning w-3/4 "
          />{" "}
          <br />
          <input
            type="text"
            placeholder="Type Your Phone"
            className="input input-bordered input-warning w-3/4 "
          />
        </div>

        <button className="btn w-1/2 bg-[#F54748] text-white flex mx-auto ">
          Send
        </button>
      </div>
    </div>
  );
};

export default Contact;
