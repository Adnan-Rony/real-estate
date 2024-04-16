import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="lg:px-0 px-3 ">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-2 justify-center items-center lg:py-10 py-5">
          {/* Image Div */}
          <div className="flex justify-center items-center lg:hidden">
            <img className="rounded-full" src="../assets//building-png-5a363ca913bce5.9210205415135039130809.jpg"></img>
          </div>

          {/* Content Div */}
          <div className="lg:space-y-3 space-y-2">
            <p className="lg:text-5xl text-3xl font-bold">
              Get  Your  <span className="text-[#F54748]"></span> 
            </p>
            <p className="lg:text-5xl text-3xl font-bold">
            <span className="text-[#FDC55E]">Dream</span>
              <span className="text-[#F54748]">  Home  </span> 
              
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a cupiditate numquam.
              Lorem ipsum, dolor sit amet consectetur itate numquam.
            </p>
            <input
              type="text"
              placeholder="Search Home"
              className="input input-bordered w-full max-w-xs"
            />
            <div className="flex items-center gap-3">
              <button className="btn btn-sm hover:bg-[#FDC55E] bg-[#F54748] text-white">
                Download App
              </button>
            </div>
          </div>

          {/* Image Div */}
          <div className="hidden lg:flex justify-center items-center">
            <img
              className="w-[488px] h-[586px] rounded-full "
              src="../assets/building-png-5a363ca913bce5.9210205415135039130809.jpg"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
