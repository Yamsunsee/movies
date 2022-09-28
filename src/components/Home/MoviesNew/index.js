import React from "react";
import { AiFillStar } from "react-icons/ai";
function MoviesNew() {
  const dataMoviesNew = ["The last post", "Dark and lonely", "Venture", "Hush"];
  return (
    <div className="2xl:max-w-[1140px] max-w-[510px] my-[70px] mx-auto w-full">
      <div className="w-[100%] border-b-[1px] border-gray-300">
        <h2
          className="pb-[20px] w-32 text-[#ec7532] font-medium text-[20px] relative transition-all
           before:h-1 before:absolute before:bottom-0 before:right-0 before:transition-all before:duration-500
          before:w-full before:left-0 before:bg-[#ec7532]"
        >
          NEW IN
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-8 mt-[50px]">
        {dataMoviesNew.map((name, index) => (
          <div>
            <img
              className="rounded-lg h-[330px]"
              src={`https://cyber-movie-bootstrap.vercel.app/img/movie-${
                index + 1
              }.jpg`}
              alt="movie"
            />
            <div className="flex flex-col justify-center items-center mt-4">
              <div className="text-[#4a4a4a] text-lg">{name}</div>
              <div className="flex text-[#fbbd61] mt-4 text-xl">
                {[...Array(5).keys()].map(() => (
                  <AiFillStar />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesNew;
