import React, { useState } from "react";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";
import Fifth from "./Fifth";

const pages = [First, Second, Third, Fourth, Fifth];

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
        <img src="./images/header.png" alt="header" className="absolute top-0 z-40"/>
      )}
      {currentPage > 0 && (
        <button
          className="absolute font-sans top-4 left-4 text-5xl text-white p-2 z-50"
          onClick={prevPage}
        >
          &lt;
        </button>
      )}
      {currentPage !== 0 && currentPage < pages.length - 1 && (
        <button
          className="absolute font-sans top-4 right-4 text-5xl text-white p-2 z-50"
          onClick={nextPage}
        >
          &gt;
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
