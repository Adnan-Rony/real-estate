import React from "react";

const Banner = () => {
  return (
    <div className="lg:px-0 px-3 ">
      {/* <div className="lg:px-0 px-3 ">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-2 justify-center items-center lg:py-10 py-5">
          
          <div className="flex justify-center items-center lg:hidden">
            <img
              className="rounded-full"
              src="../assets//building-png-5a363ca913bce5.9210205415135039130809.jpg"
            ></img>
          </div>

         
          <div className="lg:space-y-3 space-y-2">
            <p className="lg:text-5xl text-3xl font-bold">
              Get Your <span className="text-[#F54748]"></span>
            </p>
            <p className="lg:text-5xl text-3xl font-bold">
              <span className="text-[#FDC55E]">Dream</span>
              <span className="text-[#F54748]"> Home </span>
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque a
              cupiditate numquam. Lorem ipsum, dolor sit amet consectetur itate
              numquam.
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

       
          <div className="hidden lg:flex justify-center items-center">
            <img
              className="w-[488px] h-[586px] rounded-full "
              src="../assets/building-png-5a363ca913bce5.9210205415135039130809.jpg"
            ></img>
          </div>
        </div>
      </div> */}

      <div className="carousel w-full ">
        <div id="slide1" className="carousel-item relative w-full">

          <div className="grid lg:grid-cols-2 grid-cols-1  gap-2 justify-center items-center lg:py-10 py-5">
            {/* Image Div */}
            <div className="flex justify-center items-center lg:hidden">
              <img
                className="rounded-full"
                src="../assets//building-png-5a363ca913bce5.9210205415135039130809.jpg"
              ></img>
            </div>

            {/* Content Div */}
            <div className="lg:space-y-3 space-y-2">
              <p className="lg:text-5xl text-3xl font-bold">
                Get Your <span className="text-[#F54748]"></span>
              </p>
              <p className="lg:text-5xl text-3xl font-bold">
                <span className="text-[#FDC55E]">Dream</span>
                <span className="text-[#F54748]"> Home </span>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                a cupiditate numquam. Lorem ipsum, dolor sit amet consectetur
                itate numquam.
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

          <div className="absolute flex justify-between transform -translate-y-1/2 my-5 left-12 right-12 top-96 lg:top-3/4">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">

          <div className="grid lg:grid-cols-2 grid-cols-1  gap-2 justify-center items-center lg:py-10 py-5">
            {/* Image Div */}
            <div className="flex justify-center items-center lg:hidden">
              <img
                className="rounded-full"
                src="../assets//building-png-5a363ca913bce5.9210205415135039130809.jpg"
              ></img>
            </div>

            {/* Content Div */}
            <div className="lg:space-y-3 space-y-2">
              <p className="lg:text-5xl text-3xl font-bold">
                Get Your <span className="text-[#F54748]"></span>
              </p>
              <p className="lg:text-5xl text-3xl font-bold">
                <span className="text-[#FDC55E]">Dream</span>
                <span className="text-[#F54748]"> Home </span>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                a cupiditate numquam. Lorem ipsum, dolor sit amet consectetur
                itate numquam.
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

          <div className="absolute flex justify-between transform -translate-y-1/2 my-5 left-12 right-12 top-3/4">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">

          <div className="grid lg:grid-cols-2 grid-cols-1  gap-2 justify-center items-center lg:py-10 py-5">
            {/* Image Div */}
            <div className="flex justify-center items-center lg:hidden">
              <img
                className="rounded-full"
                src="../assets//building-png-5a363ca913bce5.9210205415135039130809.jpg"
              ></img>
            </div>

            {/* Content Div */}
            <div className="lg:space-y-3 space-y-2">
              <p className="lg:text-5xl text-3xl font-bold">
                Get Your <span className="text-[#F54748]"></span>
              </p>
              <p className="lg:text-5xl text-3xl font-bold">
                <span className="text-[#FDC55E]">Dream</span>
                <span className="text-[#F54748]"> Home </span>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                a cupiditate numquam. Lorem ipsum, dolor sit amet consectetur
                itate numquam.
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

          <div className="absolute flex justify-between transform -translate-y-1/2 my-5 left-12 right-12 top-3/4">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">

          <div className="grid lg:grid-cols-2 grid-cols-1  gap-2 justify-center items-center lg:py-10 py-5">
            {/* Image Div */}
            <div className="flex justify-center items-center lg:hidden">
              <img
                className="rounded-full"
                src="../assets//building-png-5a363ca913bce5.9210205415135039130809.jpg"
              ></img>
            </div>

            {/* Content Div */}
            <div className="lg:space-y-3 space-y-2">
              <p className="lg:text-5xl text-3xl font-bold">
                Get Your <span className="text-[#F54748]"></span>
              </p>
              <p className="lg:text-5xl text-3xl font-bold">
                <span className="text-[#FDC55E]">Dream</span>
                <span className="text-[#F54748]"> Home </span>
              </p>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                a cupiditate numquam. Lorem ipsum, dolor sit amet consectetur
                itate numquam.
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

          <div className="absolute flex justify-between transform -translate-y-1/2 my-5 left-12 right-12 top-3/4">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
