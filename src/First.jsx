import React, { useEffect, useState } from "react";

const First = () => {
  const [fadeIn, setFadeIn] = useState([false, false, false, false]);

  useEffect(() => {
    const timers = fadeIn.map((_, index) =>
      setTimeout(() => {
        setFadeIn((prev) => {
          const newFadeIn = [...prev];
          newFadeIn[index] = true;
          return newFadeIn;
        });
      }, index * 500) 
    );

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen relative overflow-hidden">
      <img
        src="./images/happy-anniv.png"
        alt="happy anniv"
        className={`w-80 z-10 transition-opacity duration-1000 ${
          fadeIn[0] ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src="./images/calendar.png"
        alt="calendar"
        className={`w-80 mt-10 z-10 transition-opacity duration-1000 ${
          fadeIn[1] ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src="./images/dots.png"
        alt="dots"
        className={`w-full h-full absolute z-1 transition-opacity duration-1000 ${
          fadeIn[2] ? "opacity-100" : "opacity-0"
        }`}
      />
      <img
        src="./images/footer.png"
        alt="footer"
        className={`w-full h-96 absolute bottom-0 transition-opacity duration-500 ${
          fadeIn[3] ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
};

export default First;
