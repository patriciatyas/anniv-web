import React, { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";
import Sixth from "./Sixth";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';


const pages = [First, Second, Third, Fourth, Fifth, Sixth];

const headers = [
  {}, // Empty for page 0 (no header)
  { h1: "TIMELINE", h5: "PHOTO JOURNEY" },
  { h1: "PHOTO GALLERY", h5: "OUR MOMENTS" },
  { h1: "LOVE NOTES", h5: "MESSAGE & QUOTES" },
  { h1: "LOOKING FORWARD", h5: "FUTURE TOGETHER" },
  { h1: "VIDEO", h5: "FOR YOU" },
];

const SuccessPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const CurrentPageComponent = pages[currentPage];

  return (
    <div className="relative flex items-center justify-center overflow-hidden min-h-screen bg-[#EBB7CC]">
      {/* Navigation Buttons on Top */}
      {currentPage > 0 && (
        // <img src="./images/header.png" alt="header" className="absolute top-0 z-40"/>
        <div className="absolute top-0 w-full bg-[#F9437C] rounded-b-3xl text-white text-center py-4 z-40">
          <h1 className="text-4xl font-stropica leading-5 pt-4">{headers[currentPage]?.h1}</h1>
          <h5 className="text-lg text-[#F9E0CD] font-sans">{headers[currentPage]?.h5}</h5>
        </div>
      )}
      {currentPage > 0 && (
        <button
          className="absolute font-sans top-6 left-1 z-50"
          onClick={prevPage}
        >
          <ChevronLeftIcon className="w-14 text-[#F9E0CD]" />
        </button>
      )}
      {currentPage !== 0 && currentPage < pages.length - 1 && (
        <button
          className="absolute font-sans top-6 right-1 text-5xl  z-50"
          onClick={nextPage}
        >
          <ChevronRightIcon className="w-14 text-[#F9E0CD]" />
        </button>
      )}

      {/* Bottom Button for First Page */}
      {currentPage === 0 && (
        <button
          className="absolute font-sans bottom-4 bg-white text-pink-500 p-2 rounded-full shadow-lg w-8 h-8 flex items-center justify-center z-50"
          onClick={nextPage}
        >
          &gt;
        </button>
      )}

      {/* Pages */}
      <div
        className="w-full h-full flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentPage * 100}%)` }}
      >
        {pages.map((Page, index) => (
          <div key={index} className="flex-shrink-0 w-full h-full">
            <Page />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SuccessPage;
