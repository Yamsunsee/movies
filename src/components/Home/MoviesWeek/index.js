import React from "react";
import { MdNavigateNext, MdAccessTimeFilled } from "react-icons/md";
function MoviesWeek() {
  const daysOfWeek = [
    { name: "Mon", isActive: true },
    { name: "Tue", isActive: false },
    { name: "Today", isActive: false },
    { name: "Thu", isActive: false },
    { name: "Fri", isActive: false },
    { name: "Sat", isActive: false },
    { name: "Sun", isActive: false },
  ];
  const dataMoviesWeek = [
    {
      id: 1,
      image: "https://cyber-movie-bootstrap.vercel.app/img/movie-5.jpg",
      title: "Captain America: The First Avenger",
      description:
        "European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.",
    },
    {
      id: 2,
      image: "https://cyber-movie-bootstrap.vercel.app/img/movie-6.jpg",
      title: "It's over",
      description:
        "European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.",
    },
    {
      id: 3,
      image: "https://cyber-movie-bootstrap.vercel.app/img/movie-7.jpg",
      title: "Captain America: The First Avenger",
      description:
        "European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.",
    },
    {
      id: 4,
      image: "https://cyber-movie-bootstrap.vercel.app/img/movie-8.jpg",
      title: "Captain America: The First Avenger",
      description:
        "European mercenaries searching for black powder become embroiled in the defense of It's over of China against a horde of monstrous creatures.",
    },
  ];
  return (
    <div className="w-full">
      <div className="2xl:max-w-[1140px] max-w-[730px] my-0 mx-auto mt-[200px]">
        <ul className="flex items-center border-b">
          {daysOfWeek.map((day) => (
            <li
              className={`text-lg px-8 py-4 uppercase ${
                day.isActive ? "text-[#ec7532] border-b-4 border-[#ec7532]" : ""
              }`}
            >
              {day.name}
            </li>
          ))}
        </ul>
        <div className="mt-[40px]">
          {dataMoviesWeek.map((data, index) => {
            return (
              <div
                className="flex flex-col mb-[40px] pb-[30px] border-b-[1px] border-gray-400"
                key={index}
              >
                <img
                  src={data.image}
                  alt="movies"
                  className="rounded-2xl max-w-[263px]"
                />
                <div className="">
                  <h4 className="text-[#ec7532] mt-4">
                    ACTION, ADVENTURE, FANTASY
                  </h4>
                  <h2 className="text-2xl font-[300] my-[6px]">{data.title}</h2>
                  <p className="text-[15px] text-[#666]">
                    European mercenaries searching for black powder become
                    embroiled in the defense of It's over of China against a
                    horde of monstrous creatures.
                  </p>
                  <span className="flex items-center my-[20px] text-[#ec7532]">
                    <span className="tracking-[0.2rem] text-sm">
                      FULL SYNOPSIS
                    </span>
                    <span>
                      <MdNavigateNext />
                    </span>
                  </span>
                  <div className="w-[100%] flex flex-col">
                    <div className="flex flex-col">
                      <div className="flex items-center">
                        <span>
                          <MdAccessTimeFilled />
                        </span>
                        <span className="mx-[5px] text-sm">VIEWING TIMES</span>
                      </div>
                      <div className="flex items-center">
                        <button className="px-4 py-2 rounded-md text-[#717171] mx-[5px] bg-[#d8d8d8] opacity-[.65]">
                          10:30
                        </button>
                        <button className="px-4 py-2 rounded-md text-[#717171] mx-[5px] bg-[#d8d8d8]">
                          12:30
                        </button>
                        <button className="px-4 py-2 rounded-md text-[#717171] mx-[5px] bg-[#d8d8d8]">
                          14:30
                        </button>
                        <button className="px-4 py-2 rounded-md text-[#717171] mx-[5px] bg-[#d8d8d8]">
                          16:30
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center mt-4">
                      <span className="text-[13px]">105 MINS </span>
                      <span className="w-8 h-8 ml-[5px] rounded-full bg-[#454545] text-[#fff] font-bold flex justify-center items-center">
                        15
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default MoviesWeek;
