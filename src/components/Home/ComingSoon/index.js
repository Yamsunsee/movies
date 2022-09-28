import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BiCalendar } from "react-icons/bi";
import { MdNavigateNext } from "react-icons/md";
import { GrCaretNext } from "react-icons/gr";
function ComingSoon() {
  return (
    <>
      <div
        className={`w-full h-[600px] bg-[black] bg-cover bg-[url("https://cyber-movie-bootstrap.vercel.app/img/slide-3.png")] relative`}
      >
        <div className="2xl:max-w-[1140px] max-w-[730px] my-[20px] mx-auto">
          <div className="pt-[60px]">
            <span
              className="text-[18px] font-[600] border-b-[1px] border-gray-300 cursor-pointer text-[#fff]  pb-[20px] relative transition-all w-min-content
           before:h-1 before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-500
          before:w-full before:left-0 before:bg-[#ec7532] mt-[20px] mb-[15px] w-full"
            >
              COMING SOON
            </span>
            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] 2xl:max-w-[1140px] max-w-[730px] w-full flex items-center justify-between">
              <div className="min-w-[417px]">
                <h3 className="text-[#ec7532]">COMEDY, CRIME</h3>
                <h3 className="text-[#fff] font-[300] text-[40px]">
                  The Hangover Part III
                </h3>
                <div className="flex items-center">
                  <div className="my-[20px]">
                    <span className="flex items-center">
                      <span className="text-[#fbbd61] text-[20px]">
                        <AiFillStar />
                      </span>
                      <span className="text-[#fbbd61] text-[20px]">
                        <AiFillStar />
                      </span>
                      <span className="text-[#fbbd61] text-[20px]">
                        <AiFillStar />
                      </span>
                      <span className="text-[#fbbd61] text-[20px]">
                        <AiFillStar />
                      </span>
                      <span className="text-[#fbbd61] text-[20px]">
                        <AiFillStar />
                      </span>
                    </span>
                  </div>
                  <div className="text-[#fff] mx-[15px]">
                    <BiCalendar />
                  </div>
                  <span className="text-[#fff] font-medium ">
                    30 Septemper 2020
                  </span>
                </div>

                <h3 className="text-[#fff]">
                  When one of their own is kidnapped by an angry gangster, the
                  Wolf Pack must track down Mr. Chow, who has escaped from
                  prison and is on the run.
                </h3>
                <div className="flex items-center mt-[30px] text-[#ec7532]">
                  <span className="text-sm tracking-[0.2rem]">MORE INFOR </span>
                  <span className="">
                    <MdNavigateNext />
                  </span>
                </div>
              </div>
              <div className="bg-[url(https://cyber-movie-bootstrap.vercel.app/img/slide-3-video.png)] bg-cover relative">
                <div>
                  <iframe
                    width="560"
                    height="315"
                    // src="https://www.youtube.com/embed/tgB1wUcmbbw"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
                  <span className="text-[#fff] text-[50px] ">
                    <GrCaretNext />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full 2xl:h-[357px] h-[554px] bg-[#101010] flex justify-center items-center">
        <div className="2xl:max-w-[1140px] max-w-[730px] grid grid-cols-3 gap-8">
          {[9, 8, 11, 13, 12, 14].map((url) => (
            <img
              src={`https://cyber-movie-bootstrap.vercel.app/img/movie-${url}.jpg`}
              alt="movies"
              className="h-[207px] opacity-[0.5] hover:opacity-[1] rounded-lg"
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ComingSoon;
